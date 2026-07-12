ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .fluid_heater(id('sorbitol_heating'))
        .inputFluids('gtceu:sorbitol 500')
        .outputFluids('gtceu:sorbitan 450', 'gtceu:steam 2456')
        .duration(120)
        .circuit(6)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu
        .large_chemical_reactor(id('sorbitan_esteration'))
        .inputFluids('gtceu:sorbitan 1200', 'gtceu:seed_oil 2675', 'gtceu:sulfuric_acid 1500')
        .outputFluids('gtceu:sorbitan_monoester 1000', 'gtceu:diluted_sulfuric_acid 1500')
        .duration(864)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu
        .mixer(id('sorbitan_polyermation'))
        .inputFluids('gtceu:sorbitan_monoester 100', 'gtceu:ethylene_glycol 2000')
        .outputFluids('gtceu:polysorbate_20 100')
        .duration(215)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('14_butanediol_transformation'))
        .inputFluids('gtceu:14_butanediol 1000', 'gtceu:phosphoric_acid 4000')
        .itemInputs('2x gtceu:sulfur_dust')
        .outputFluids('gtceu:pyrophosphoric_acid 2000', 'gtceu:sulfuric_acid 1000', 'gtceu:hydrogen 8000')
        .itemOutputs('9x gtceu:thiophene_dust')
        .duration(654)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('benzoyl_peroxidization'))
        .inputFluids('gtceu:benzoyl_chloride 2000')
        .itemInputs('5x gtceu:calcium_hydroxide_dust')
        .outputFluids('gtceu:hydrogen_chloride 2000')
        .itemOutputs('28x gtceu:benzoyl_peroxide_dust', '1x gtceu:calcium_dust')
        .duration(451)
        .EUt(GTValues.VA[GTValues.ZPM]);

    const crType = [event.recipes.gtceu.large_chemical_reactor, event.recipes.gtceu.chemical_reactor];
    crType.forEach((CR) => {
        CR(id('dimethylformamide_synthesis'))
            .inputFluids('gtceu:dimethylamine 1000', 'gtceu:formic_acid 1000')
            .outputFluids('gtceu:dimethylformamide 1000', 'minecraft:water 1000')
            .duration(567)
            .EUt(GTValues.VA[GTValues.LuV]);

        CR(id('hydrogen_chloride'))
            .inputFluids('gtceu:monochloramine 1000', 'gtceu:hydrogen 2000')
            .outputFluids('gtceu:hydrogen_chloride 1000', 'gtceu:ammonia 1000')
            .duration(248)
            .EUt(GTValues.VA[GTValues.HV]);

        CR(id('chlorosulfonic_acid'))
            .inputFluids('gtceu:hydrogen_chloride 500', 'gtceu:sulfur_trioxide 500')
            .outputFluids('gtceu:chlorosulfonic_acid 500')
            .duration(352)
            .EUt(GTValues.VA[GTValues.EV]);

        CR(id('ferric_nitrate'))
            .inputFluids('gtceu:nitric_acid 3000')
            .itemInputs('1x gtceu:iron_dust')
            .outputFluids('gtceu:hydrogen 3000')
            .itemOutputs('10x gtceu:ferric_nitrate_dust')
            .duration(289)
            .EUt(GTValues.VA[GTValues.EV]);

        CR(id('12_dibromoethane'))
            .inputFluids('gtceu:ethylene 1000', 'gtceu:bromine 2000')
            .notConsumableFluid('gtceu:iron_iii_chloride 250')
            .outputFluids('gtceu:12_dibromoethane 1000')
            .duration(324)
            .EUt(GTValues.VHA[GTValues.EV]);
    });

    event.recipes.gtceu
        .ordered_chemistry(id('edot_synthesis'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('9x gtceu:thiophene_dust')
                .inputFluids('gtceu:12_dibromoethane 1000', 'gtceu:dimethylformamide 2000')
                .next()
                .itemInputs('6x gtceu:potassium_carbonate_dust', '6x gtceu:sodium_hydroxide_dust')
                .inputFluids('gtceu:sulfuric_acid 1000', 'gtceu:carbon_monoxide 1000')
        )
        .itemOutputs('4x gtceu:potassium_bromide_dust', '8x gtceu:sodium_nitrite_dust')
        .outputFluids('gtceu:34_ethylenedioxythiophene 2000', 'gtceu:ethane 1000')
        .duration(242)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .ordered_chemistry(id('pss_synthesis'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('14x gtceu:benzoyl_peroxide_dust')
                .inputFluids('gtceu:chlorosulfonic_acid 500')
                .next()
                .itemInputs('7x gtceu:sodium_bisulfate_dust')
                .inputFluids('gtceu:styrene 875', 'minecraft:water 500')
        )
        .itemOutputs('6x gtceu:sodium_bicarbonate_dust')
        .outputFluids('gtceu:polystyrene_sulfate 1500', 'gtceu:hydrogen_chloride 500', 'gtceu:ethenone 500')
        .duration(139)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .large_chemical_reactor(id('pedot_synthesis'))
        .inputFluids('gtceu:34_ethylenedioxythiophene 500', 'gtceu:ethanol 1000', 'gtceu:sulfur_trioxide 1500')
        .notConsumable('1x gtceu:ferric_nitrate_dust')
        .itemInputs('6x minecraft:sugar')
        .outputFluids(
            'gtceu:poly_34_ethylenedioxythiophene 1000',
            'gtceu:diluted_sulfuric_acid 1500',
            'gtceu:ethylene_glycol 500',
            'minecraft:water 1000'
        )
        .duration(126)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('pedot_doping'))
        .inputFluids(
            'gtceu:poly_34_ethylenedioxythiophene 1000',
            'gtceu:polystyrene_sulfate 375',
            'minecraft:water 2000'
        )
        .outputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_solution 1000')
        .duration(316)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu
        .distillery(id('pedot_pss_purification'))
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_solution 1000')
        .outputFluids('gtceu:distilled_water 2000')
        .itemOutputs('1x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_paste_dust')
        .duration(180)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu
        .chemical_bath(id('pedot_pss_finalization'))
        .itemInputs('6x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_paste_dust')
        .inputFluids('gtceu:polysorbate_20 480')
        .outputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 864')
        .duration(82)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.UHV]);
});
