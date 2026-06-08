ServerEvents.recipes((event) => {
    const id = global.id;

    // === Chemical Skips ===

    event.recipes.gtceu
        .chemical_skip(id('fluoroantimonic_acid_skip'))
        .itemInputs('gtceu:antimony_dust')
        .inputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000')
        .outputFluids('gtceu:fluoroantimonic_acid 1000')
        .duration(150)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu
        .chemical_skip(id('plat_line_skip'))
        .itemInputs('24x gtceu:platinum_group_sludge_dust')
        .inputFluids('gtceu:aqua_regia 3000')
        .itemOutputs(
            '4x gtceu:platinum_dust',
            '3x gtceu:palladium_dust',
            '2x gtceu:ruthenium_dust',
            '2x gtceu:rhodium_dust',
            '1x gtceu:osmium_dust',
            '1x gtceu:iridium_dust'
        )
        .outputFluids('gtceu:nitric_acid 1000', 'gtceu:hydrochloric_acid 2000')
        .duration(485)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .chemical_skip(id('naquadah_line_skip'))
        .itemInputs('12x gtceu:naquadah_dust')
        .inputFluids('gtceu:fluoroantimonic_acid 2000')
        .itemOutputs(
            '3x gtceu:enriched_naquadah_dust',
            '3x gtceu:naquadria_dust',
            '2x gtceu:trinium_dust',
            '2x gtceu:antimony_dust',
            '2x gtceu:indium_phosphide_dust',
            '2x gtceu:titanium_dust'
        )
        .outputFluids('gtceu:hydrogen 4000', 'gtceu:fluorine 14000')
        .duration(1645)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .chemical_skip(id('uranite_line_skip'))
        .itemInputs('30x gtceu:uraninite_dust')
        .inputFluids('gtceu:hydrofluoric_acid 40000')
        .itemOutputs('9x gtceu:uranium_dust', 'gtceu:uranium_235_dust')
        .outputFluids('gtceu:fluorine 40000', 'gtceu:hydrogen 40000', 'gtceu:oxygen 10000')
        .duration(216)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu
        .chemical_skip(id('sodium_persulfate_skip'))
        .itemInputs('1x gtceu:sodium_dust', '1x gtceu:sulfur_dust')
        .inputFluids('gtceu:oxygen 4000')
        .outputFluids('gtceu:sodium_persulfate 500')
        .duration(30)
        .EUt(GTValues.VHA[GTValues.EV]);

    event.recipes.gtceu
        .chemical_skip(id('iron_iii_chloride_skip'))
        .itemInputs('1x gtceu:iron_dust')
        .inputFluids('gtceu:chlorine 3000')
        .outputFluids('gtceu:iron_iii_chloride 1000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu
        .chemical_skip(id('cupric_chloride_solution_skip'))
        .itemInputs('1x gtceu:copper_dust')
        .inputFluids('gtceu:hydrogen 2000', 'gtceu:chlorine 3000')
        .outputFluids('gtceu:cupric_chloride_solution 2000')
        .duration(30)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu
        .chemical_skip(id('borax_skip'))
        .itemInputs('4x gtceu:boron_dust', '14x gtceu:sodium_bisulfate_dust')
        .inputFluids('minecraft:water 12000')
        .itemOutputs('23x gtceu:borax_dust')
        .outputFluids('gtceu:diluted_sulfuric_acid 3000', 'gtceu:oxygen 6000')
        .duration(720)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu
        .chemical_skip(id('14_butanediol_skip'))
        .notConsumable('gtceu:palladium_on_carbon_dust')
        .inputFluids('gtceu:benzene 1500', 'gtceu:oxygen 6000', 'gtceu:hydrogen 18000')
        .outputFluids('gtceu:14_butanediol 3000', 'gtceu:methanol 3000')
        .duration(105)
        .circuit(8)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .chemical_skip(id('benzophenone_3344_tetracarboxylic_dianhydridenediol_skip'))
        .inputFluids(
            'gtceu:toluene 1000',
            'gtceu:benzene 1375',
            'gtceu:oxygen 9875',
            'gtceu:acetic_acid 1000',
            'gtceu:chlorine 3000'
        )
        .itemOutputs('30x gtceu:benzophenone_3344_tetracarboxylic_dianhydride_dust')
        .outputFluids(
            'gtceu:hydrogen_chloride 3000',
            'gtceu:carbon_dioxide 250',
            'minecraft:water 4125',
            'gtceu:hydrogen 3000'
        )
        .duration(30)
        .circuit(6)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .chemical_skip(id('tungstate_line'))
        .itemInputs('1x gtceu:tungstate_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('1x gtceu:tungsten_trioxide_dust', '1x gtceu:lithium_dust')
        .outputFluids('gtceu:chlorine 2000', 'gtceu:hydrogen 2000')
        .duration(175)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .chemical_skip(id('scheelite_line'))
        .itemInputs('1x gtceu:scheelite_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('1x gtceu:tungsten_trioxide_dust', '1x gtceu:calcium_dust')
        .outputFluids('gtceu:chlorine 2000', 'gtceu:hydrogen 2000')
        .duration(175)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .chemical_skip(id('mutagen_skip'))
        .itemInputs('1x gtceu:naquadria_dust')
        .inputFluids('gtceu:biomass 9000', 'gtceu:bacteria 9000')
        .outputFluids('gtceu:mutagen 1800')
        .duration(12)
        .EUt(GTValues.VHA[GTValues.UEV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu
        .chemical_skip(id('sic_skip'))
        .itemInputs('3x gtceu:silicon_dioxide_dust', '2x gtceu:carbon_dust')
        .inputFluids('gtceu:nitrogen 1000')
        .itemOutputs('gtceu:silicon_carbide_dust')
        .outputFluids('gtceu:carbon_dioxide 1000')
        .duration(20)
        .circuit(0)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu
        .chemical_skip(id('glycerol_skip'))
        .itemInputs('3x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 8000', 'gtceu:oxygen 3000')
        .outputFluids('gtceu:glycerol 1000')
        .duration(160)
        .circuit(3)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu
        .chemical_skip(id('caprolactam_skip'))
        .notConsumable('gtceu:nickel_dust')
        .inputFluids('gtceu:hydrogen 6000', 'gtceu:benzene 1000', 'gtceu:chlorine 1000', 'gtceu:nitric_oxide 1000')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .itemOutputs('19x gtceu:caprolactam_dust')
        .duration(42)
        .circuit(14)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu
        .chemical_skip(id('zapolgium_skip'))
        .itemInputs('4x gtceu:zapolite_dust', '5x gtceu:potassium_hydroxide_dust')
        .inputFluids('gtceu:hydrogen 2000', 'gtceu:hydrochloric_acid 2000')
        .itemOutputs(
            '5x gtceu:zapolgium_dust',
            '4x gtceu:bauxite_dust',
            '10x gtceu:iodine_dust',
            '4x gtceu:rock_salt_dust'
        )
        .outputFluids('minecraft:water 6000', 'gtceu:oxygen 5000')
        .duration(66)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu
        .chemical_skip(id('zirconium_skip'))
        .itemInputs('2x gtceu:titanite_dust')
        .inputFluids('gtceu:hydrochloric_acid 4000', 'gtceu:sulfuric_acid 2000')
        .itemOutputs('1x gtceu:zirconium_dust', '2x gtceu:silicon_dioxide_dust', '12x gtceu:calcium_sulfate_dust')
        .outputFluids('gtceu:titanium_tetrachloride 1000', 'minecraft:water 6000')
        .duration(14)
        .EUt(GTValues.VHA[GTValues.UIV]);

    // === Enlightened Chemistry ===

    event.recipes.gtceu
        .ordered_chemistry(id('better_draco_stem_cells'))
        .layeredRecipe((layers) =>
            layers.itemInputs('gtceu:echo_shard_dust').next().itemInputs('gtceu:nether_star_dust')
        )
        .inputFluids('gtceu:draconic_enrichment_serum 500')
        .itemOutputs('16x kubejs:draconic_stem_cells')
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .duration(53)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu
        .ordered_chemistry(id('better_draco_brain_matter_cells'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('8x gtceu:tiny_prismalium_dust')
                .inputFluids('thermal:ender 12500')
                .next()
                .itemInputs('16x kubejs:naquadic_netherite_fibers', '#gtceu:circuits/zpm')
        )
        .inputFluids('gtceu:draconic_enrichment_serum 375')
        .itemOutputs('32x kubejs:draconic_brain_matter_cells')
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .duration(93)
        .EUt(GTValues.VHA[GTValues.UIV]);
});
