ServerEvents.recipes((event) => {
    const id = global.id;

    // Removals
    event.remove({ id: 'gtceu:centrifuge/rare_earth_separation' });

    const CRtype = [event.recipes.gtceu.large_chemical_reactor, event.recipes.gtceu.chemical_reactor];
    CRtype.forEach((CR) => {
        // RE => Residues

        // LD Residue (Nd/La)
        CR(id('lanthanum_dust_refining'))
            .itemInputs('2x gtceu:unrefined_lanthanum_dust', '9x gtceu:sodium_hydroxide_dust')
            .inputFluids('gtceu:chlorine 6000')
            .itemOutputs('5x gtceu:lanthanum_oxide_dust', '6x gtceu:salt_dust')
            .outputFluids('gtceu:hydrochloric_acid 3000')
            .duration(489)
            .EUt(GTValues.VHA[GTValues.MV]);

        CR(id('lanthanum_deoxidization'))
            .itemInputs('5x gtceu:lanthanum_oxide_dust')
            .inputFluids('gtceu:hydrochloric_acid 6000')
            .itemOutputs('8x gtceu:lanthanum_iii_chloride_dust')
            .outputFluids('minecraft:water 3000')
            .duration(572)
            .EUt(GTValues.VA[GTValues.MV]);

        CR(id('lanthanum'))
            .itemInputs('4x gtceu:lanthanum_iii_chloride_dust')
            .inputFluids('gtceu:hydrogen 3000')
            .itemOutputs('gtceu:lanthanum_dust')
            .outputFluids('gtceu:hydrochloric_acid 3000')
            .duration(674)
            .EUt(GTValues.VHA[GTValues.MV]);

        // MD Residue (Sm/Pm)
        CR(id('samarium_dust_refining'))
            .itemInputs('gtceu:unrefined_samarium_dust')
            .inputFluids('gtceu:hydrochloric_acid 4000')
            .itemOutputs('4x gtceu:samarium_iii_chloride_dust')
            .outputFluids('gtceu:diluted_hydrochloric_acid 2000')
            .duration(452)
            .EUt(GTValues.VHA[GTValues.HV]);

        CR(id('promethium'))
            .itemInputs('5x gtceu:promethium_iii_oxide_dust', '3x gtceu:zinc_dust')
            .itemOutputs('2x gtceu:promethium_dust', '6x gtceu:zincite_dust')
            .duration(563)
            .EUt(GTValues.VHA[GTValues.HV]);

        // HD Residue (Ho/Y/Dy)
        CR(id('holmium_dust_refining'))
            .itemInputs('gtceu:unrefined_holmium_dust', '9x gtceu:potassium_hydroxide_dust')
            .inputFluids('gtceu:hydrofluoric_acid 3000')
            .itemOutputs('4x gtceu:holmium_iii_fluoride_dust', '3x gtceu:potassium_dust')
            .outputFluids('minecraft:water 3000')
            .duration(354)
            .EUt(GTValues.VHA[GTValues.EV]);

        CR(id('holmium'))
            .itemInputs('4x gtceu:holmium_iii_fluoride_dust')
            .inputFluids('gtceu:hydrogen 3000')
            .itemOutputs('gtceu:holmium_dust')
            .outputFluids('gtceu:hydrofluoric_acid 3000')
            .duration(245)
            .EUt(GTValues.VA[GTValues.IV]);

        CR(id('dysprosium_dust_refining'))
            .itemInputs('gtceu:unrefined_dysprosium_dust')
            .inputFluids('gtceu:chlorine_trifluoride 1000')
            .itemOutputs('4x gtceu:dysprosium_iii_fluoride_dust')
            .outputFluids('gtceu:chlorine 1000')
            .duration(453)
            .EUt(GTValues.VHA[GTValues.EV]);

        CR(id('yttrium_dust_refining'))
            .itemInputs('1x gtceu:unrefined_yttrium_dust', '9x gtceu:potassium_carbonate_dust')
            .inputFluids('minecraft:water 3000')
            .itemOutputs('7x gtceu:yttrium_carbonate_dust', '9x gtceu:potassium_hydroxide_dust')
            .outputFluids('gtceu:hydrogen 3000')
            .duration(572)
            .EUt(GTValues.VHA[GTValues.EV]);

        CR(id('yttrium_chlorination'))
            .itemInputs('7x gtceu:yttrium_carbonate_dust', '9x gtceu:calcium_chloride_dust')
            .inputFluids('gtceu:hydrogen 3000')
            .itemOutputs('4x gtceu:yttrium_chloride_dust', '9x gtceu:calcium_carbonate_dust')
            .outputFluids('gtceu:hydrochloric_acid 3000')
            .duration(245)
            .EUt(GTValues.VA[GTValues.EV]);

        CR(id('yttrium'))
            .itemInputs('4x gtceu:yttrium_chloride_dust')
            .inputFluids('gtceu:hydrogen 3000')
            .itemOutputs('gtceu:yttrium_dust')
            .outputFluids('gtceu:hydrochloric_acid 3000')
            .duration(453)
            .EUt(GTValues.VHA[GTValues.EV]);
    });
    // Initial RE
    event.recipes.gtceu
        .electrolyzer(id('metallic_ore_sludge_decomp'))
        .itemInputs('4x gtceu:rare_sludge_dust')
        .itemOutputs('3x gtceu:rare_earth_dust', '1x gtceu:metallic_ore_sludge_dust')
        .duration(480)
        .EUt(GTValues.VA[GTValues.MV]);

    // RE => Residues
    event.recipes.gtceu
        .mixer(id('rare_earth_acid_leaching'))
        .itemInputs('1x gtceu:small_rare_earth_dust')
        .inputFluids('gtceu:perchloric_acid 400')
        .outputFluids('gtceu:acid_leached_rare_earth_sludge 500')
        .duration(456)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu
        .centrifuge(id('acid_leached_rare_earth_separation'))
        .inputFluids('gtceu:acid_leached_rare_earth_sludge 1000')
        .outputFluids('gtceu:fractionated_rare_earth_slurry 800', 'gtceu:rare_earth_waste_residue 200')
        .duration(653)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu
        .electrolyzer(id('rare_earth_waste_recycling'))
        .inputFluids('gtceu:rare_earth_waste_residue 500')
        .itemOutputs('11x gtceu:calcium_perchlorate_dust')
        .outputFluids('minecraft:water 200')
        .duration(127)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu
        .distillation_tower(id('fractionated_rare_earth_separation'))
        .inputFluids('gtceu:fractionated_rare_earth_slurry 7500')
        .outputFluids(
            'gtceu:high_density_rare_earth_residue 2500',
            'gtceu:moderate_density_rare_earth_residue 2500',
            'gtceu:low_density_rare_earth_residue 2500'
        )
        .chancedOutput('1x gtceu:rare_earth_dust', 8000, 0)
        .duration(720)
        .EUt(GTValues.VHA[GTValues.HV]);
    // LD Residue (Nd/La)
    event.recipes.gtceu
        .centrifuge(id('ld_re_decomp'))
        .inputFluids('gtceu:low_density_rare_earth_residue 1000')
        .chancedOutput('1x gtceu:unrefined_neodymium_dust', 7000, 0)
        .chancedOutput('1x gtceu:unrefined_neodymium_dust', 4000, 0)
        .chancedOutput('1x gtceu:metal_mixture_dust', 1500, 0)
        .chancedOutput('1x gtceu:unrefined_lanthanum_dust', 7000, 0)
        .chancedOutput('1x gtceu:unrefined_lanthanum_dust', 4000, 0)
        .chancedOutput('1x gtceu:metal_mixture_dust', 1500, 0)
        .duration(681)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu
        .electromagnetic_separator(id('unrefined_neodymium_dust'))
        .itemInputs('gtceu:unrefined_neodymium_dust')
        .itemOutputs('gtceu:neodymium_iii_oxide_dust')
        .chancedOutput('gtceu:neodymium_iii_oxide_dust', 8000, 0)
        .chancedOutput('gtceu:iron_2_hydroxide_dust', 2000, 0)
        .duration(240)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu
        .electric_blast_furnace(id('neodymium_from_neodymium_iii_oxide'))
        .itemInputs('10x gtceu:neodymium_iii_oxide_dust', '3x gtceu:carbon_dust')
        .itemOutputs('4x gtceu:neodymium_dust')
        .outputFluids('gtceu:carbon_dioxide 3000')
        .blastFurnaceTemp(1561)
        .duration(1053)
        .EUt(GTValues.VHA[GTValues.HV]);

    // MD Residue (Sm/Pm)
    event.recipes.gtceu
        .centrifuge(id('md_re_decomp'))
        .inputFluids('gtceu:moderate_density_rare_earth_residue 1000')
        .chancedOutput('1x gtceu:unrefined_samarium_dust', 9250, 0)
        .chancedOutput('1x gtceu:unrefined_samarium_dust', 5250, 0)
        .chancedOutput('1x gtceu:metal_mixture_dust', 1500, 0)
        .chancedOutput('1x gtceu:small_unrefined_promethium_dust', 750, 0)
        .chancedOutput('1x gtceu:tiny_unrefined_promethium_dust', 750, 0)
        .chancedOutput('1x gtceu:metal_mixture_dust', 1500, 0)
        .duration(652)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu
        .extractor(id('samarium'))
        .itemInputs('gtceu:samarium_iii_chloride_dust')
        .itemOutputs('gtceu:small_samarium_dust')
        .outputFluids('gtceu:chlorine 750')
        .duration(121)
        .EUt(GTValues.VHA[GTValues.EV]);

    event.recipes.gtceu
        .centrifuge(id('promenthium_refinement'))
        .itemInputs('1x gtceu:unrefined_promethium_dust')
        .itemOutputs('1x gtceu:promethium_iii_oxide_dust')
        .chancedOutput('1x gtceu:small_unrefined_neodymium_dust', 1000, 0)
        .chancedOutput('1x gtceu:small_unrefined_samarium_dust', 1000, 0)
        .duration(325)
        .EUt(GTValues.VHA[GTValues.HV]);

    // HD Residue (Ho/Y/Dy)
    event.recipes.gtceu
        .centrifuge(id('hd_re_decomp'))
        .inputFluids('gtceu:high_density_rare_earth_residue 1500')
        .chancedOutput('1x gtceu:unrefined_holmium_dust', 7000, 0)
        .chancedOutput('1x gtceu:unrefined_holmium_dust', 4000, 0)
        .chancedOutput('1x gtceu:unrefined_dysprosium_dust', 7000, 0)
        .chancedOutput('1x gtceu:unrefined_yttrium_dust', 7000, 0)
        .chancedOutput('1x gtceu:unrefined_yttrium_dust', 4000, 0)
        .chancedOutput('1x gtceu:unrefined_dysprosium_dust', 4000, 0)
        .duration(252)
        .EUt(GTValues.VHA[GTValues.EV]);

    event.recipes.gtceu
        .extractor(id('dysprosium'))
        .itemInputs('gtceu:dysprosium_iii_fluoride_dust')
        .itemOutputs('gtceu:small_dysprosium_dust')
        .outputFluids('gtceu:fluorine 750')
        .duration(286)
        .EUt(GTValues.VHA[GTValues.EV]);
});
