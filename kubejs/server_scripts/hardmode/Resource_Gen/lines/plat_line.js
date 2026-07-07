ServerEvents.recipes((event) => {
    const id = global.id;

    // Removals
    ['chemical_reactor', 'large_chemical_reactor'].forEach((CRType) => {
        ['pentlandite', 'bornite', 'cooperite', 'chalcocite', 'chalcopyrite', 'tetrahedrite'].forEach((pgsOre) => {
            event.remove({ id: `gtceu:${CRType}/pgs_from_${pgsOre}` });
        });
        ['inert_metal_mixture_separation', 'iridium_chloride_separation', 'osmium_tetroxide_separation'].forEach(
            (platLineID) => {
                event.remove({ id: `gtceu:${CRType}/${platLineID}` });
            }
        );
    });
    [
        'centrifuge/pgs_separation',
        'electrolyzer/rhodium_sulfate_separation',
        'centrifuge/iridium_metal_residue_separation',
        'distillation_tower/acidic_osmium_solution_separation',
        'large_chemical_reactor/rarest_metal_mixture_separation',
    ].forEach((platLineID) => {
        event.remove({ id: `gtceu:${platLineID}` });
    });
    event.remove({ input: 'gtceu:platinum_salt_gem' });
    event.remove({ input: 'gtceu:palladium_salt_gem' });
    // event.remove({ input: 'gtceu:exquisite_platinum_salt_gem' });
    // event.remove({ input: 'gtceu:exquisite_palladium_salt_gem' });
    event.remove({ output: 'gtceu:exquisite_platinum_salt_gem' });
    event.remove({ output: 'gtceu:exquisite_palladium_salt_gem' });
    event.remove({ output: 'gtceu:platinum_salt_gem', type: 'gtceu:implosion_compressor' });
    event.remove({ output: 'gtceu:palladium_salt_gem', type: 'gtceu:implosion_compressor' });

    const CR = event.recipes.gtceu.chemical_reactor;
    const Cent = event.recipes.gtceu.centrifuge;
    const Mix = event.recipes.gtceu.mixer;
    const Sift = event.recipes.gtceu.sifter;
    const Bath = event.recipes.gtceu.chemical_bath;
    const Elec = event.recipes.gtceu.electrolyzer;

    // PGS
    CR(id('bornite_to_pgs'))
        .itemInputs('gtceu:purified_bornite_ore')
        .inputFluids('gtceu:nitric_acid 250')
        .itemOutputs('5x gtceu:small_platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_copper_solution 500')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.HV]);

    CR(id('tetrahedrite_to_pgs'))
        .itemInputs('gtceu:purified_tetrahedrite_ore')
        .inputFluids('gtceu:nitric_acid 250')
        .itemOutputs('5x gtceu:small_platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_copper_solution 500')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.HV]);

    CR(id('cooperite_to_pgs'))
        .itemInputs('gtceu:purified_cooperite_ore')
        .inputFluids('gtceu:nitric_acid 250')
        .itemOutputs('11x gtceu:small_platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_nickel_solution 500')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV]);

    // PGS Decomp
    Cent(id('pgs_separation'))
        .itemInputs('5x gtceu:platinum_group_sludge_dust')
        .inputFluids('gtceu:aqua_regia 1800')
        .itemOutputs('gtceu:platinum_group_leach_residue_dust')
        .outputFluids('gtceu:platinum_group_leach_liquor 2400', 'gtceu:platinum_group_acid_residue 1500')
        .duration(245)
        .EUt(GTValues.VHA[GTValues.HV]);

    // Pt/Pd
    CR(id('pgll_to_chlorides'))
        .inputFluids('gtceu:platinum_group_leach_liquor 2000', 'gtceu:hydrochloric_acid 10000')
        .itemOutputs('7x gtceu:platinum_chloride_dust', '5x gtceu:palladium_chloride_dust')
        .outputFluids('minecraft:water 5000')
        .duration(354)
        .EUt(GTValues.VHA[GTValues.HV]);

    Mix(id('ptcl_to_pt_salt'))
        .itemInputs('7x gtceu:platinum_chloride_dust')
        .inputFluids('gtceu:ammonia 4000')
        .itemOutputs('1x gtceu:platinum_salt_dust')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(126)
        .EUt(GTValues.VHA[GTValues.HV]);

    Mix(id('pdcl_to_pd_salt'))
        .itemInputs('5x gtceu:palladium_chloride_dust')
        .inputFluids('gtceu:ammonia 5000')
        .itemOutputs('1x gtceu:palladium_salt_dust')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(452)
        .EUt(GTValues.VHA[GTValues.HV]);

    Sift(id('pt_salt_to_gem'))
        .itemInputs('gtceu:platinum_salt_dust')
        .chancedOutput('gtceu:exquisite_platinum_salt_gem', 1000, 0)
        .chancedOutput('gtceu:flawless_platinum_salt_gem', 1250, 0)
        .chancedOutput('gtceu:platinum_salt_gem', 1500, 0)
        .chancedOutput('gtceu:platinum_salt_dust', 3000, 0)
        .duration(960)
        .EUt(GTValues.VHA[GTValues.LV]);

    Sift(id('pd_salt_to_gem'))
        .itemInputs('gtceu:palladium_salt_dust')
        .chancedOutput('gtceu:exquisite_palladium_salt_gem', 1000, 0)
        .chancedOutput('gtceu:flawless_palladium_salt_gem', 1250, 0)
        .chancedOutput('gtceu:palladium_salt_gem', 1500, 0)
        .chancedOutput('gtceu:palladium_salt_dust', 3000, 0)
        .duration(960)
        .EUt(GTValues.VHA[GTValues.LV]);

    Bath(id('pt_gem_to_raw_pd'))
        .itemInputs('gtceu:platinum_salt_gem')
        .inputFluids('gtceu:hydrogen 4000')
        .itemOutputs('3x gtceu:platinum_raw_dust', '8x gtceu:ammonium_chloride_dust')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(543)
        .EUt(GTValues.VHA[GTValues.HV]);

    Bath(id('pd_gem_to_raw_pd'))
        .itemInputs('gtceu:palladium_salt_gem')
        .inputFluids('gtceu:hydrogen 4000')
        .itemOutputs('5x gtceu:palladium_raw_dust', '8x gtceu:ammonium_chloride_dust')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(521)
        .EUt(GTValues.VHA[GTValues.HV]);

    // Rh/Ru
    Elec(id('pgar_separation'))
        .inputFluids('gtceu:platinum_group_acid_residue 1200')
        .itemOutputs('5x gtceu:small_mixed_inert_metal_ash_dust', '3x gtceu:platinum_sludge_residue_dust')
        .outputFluids('gtceu:diluted_hydrochloric_acid 200')
        .duration(354)
        .EUt(GTValues.VHA[GTValues.HV]);

    CR(id('inert_metal_to_sulfate'))
        .itemInputs('gtceu:small_mixed_inert_metal_ash_dust')
        .inputFluids('gtceu:sulfuric_acid 6750')
        .outputFluids('gtceu:inert_metal_sulfate_solution 250', 'gtceu:diluted_sulfuric_acid 6750')
        .duration(842)
        .EUt(GTValues.VHA[GTValues.EV]);

    Cent(id('inert_metal_sulfate_solution_separation'))
        .inputFluids('gtceu:inert_metal_sulfate_solution 1000')
        .outputFluids('gtceu:rhodium_sulfate 1000', 'gtceu:ruthenium_sulfate 1000')
        .duration(246)
        .EUt(GTValues.VHA[GTValues.EV]);

    CR(id('rhodium_sulfate_decomp'))
        .inputFluids('gtceu:rhodium_sulfate', 'minecraft:water 6000')
        .itemOutputs('14x gtceu:rhodium_iii_hydroxide_dust')
        .outputFluids('gtceu:sulfuric_acid 3000')
        .duration(382)
        .EUt(GTValues.VHA[GTValues.EV]);

    CR(id('ruthenium_sulfate_decomp'))
        .inputFluids('gtceu:ruthenium_sulfate', 'gtceu:ammonium_formate 6000')
        .itemOutputs('25x gtceu:ruthenium_complex_dust')
        .outputFluids('gtceu:sulfuric_acid 6000', 'gtceu:carbon_dioxide 6000')
        .duration(613)
        .EUt(GTValues.VHA[GTValues.IV]);

    Elec(id('rhodium_iii_hydroxide_decomp'))
        .itemInputs('14x gtceu:rhodium_iii_hydroxide_dust')
        .itemOutputs('5x gtceu:rhodium_iii_oxide_dust')
        .outputFluids('minecraft:water 3000')
        .duration(513)
        .EUt(GTValues.VHA[GTValues.EV]);

    CR(id('ruthenium_complex_to_impure'))
        .itemInputs('25x gtceu:ruthenium_complex_dust')
        .inputFluids('gtceu:hydrochloric_acid 6000')
        .itemOutputs('gtceu:impure_ruthenium_dust', '12x gtceu:ammonium_chloride_dust')
        .duration(642)
        .EUt(GTValues.VHA[GTValues.EV]);

    CR(id('ruthenium_purification'))
        .itemInputs('gtceu:impure_ruthenium_dust')
        .inputFluids('gtceu:hypochlorous_acid 4000')
        .itemOutputs('5x gtceu:ruthenium_tetroxide_dust')
        .outputFluids('gtceu:hydrochloric_acid 4000')
        .duration(245)
        .EUt(GTValues.VHA[GTValues.EV]);

    // Ir/Os
    // Theta
});
