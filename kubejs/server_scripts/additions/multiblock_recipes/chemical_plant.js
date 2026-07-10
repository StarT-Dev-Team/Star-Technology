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

    event.recipes.gtceu // +5% on original platline for Ru, Rh, Os and Ir
        .chemical_skip(id('plat_line_skip'))
        .itemInputs('30x gtceu:purified_cooperite_ore')
        .inputFluids('gtceu:aqua_regia 24000')
        .itemOutputs(
            '20x gtceu:platinum_dust',
            '12x gtceu:palladium_dust',
            '7x gtceu:ruthenium_dust',
            '7x gtceu:rhodium_dust',
            '3x gtceu:osmium_dust',
            '3x gtceu:iridium_dust'
        )
        .outputFluids('gtceu:nitric_acid 8000', 'gtceu:hydrochloric_acid 16000')
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
        .outputFluids('gtceu:fluorine 40000', 'gtceu:hydrogen 40000', 'gtceu:oxygen 20000')
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
        .inputFluids('gtceu:hydrogen 1000', 'gtceu:chlorine 2000')
        .outputFluids('gtceu:cupric_chloride_solution 1000')
        .duration(30)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu
        .chemical_skip(id('borax_skip'))
        .itemInputs('4x gtceu:boron_dust', '14x gtceu:sodium_bisulfate_dust')
        .inputFluids('minecraft:water 12000', 'gtceu:oxygen 6000')
        .itemOutputs('23x gtceu:borax_dust')
        .outputFluids('gtceu:diluted_sulfuric_acid 3000')
        .duration(720)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu
        .chemical_skip(id('14_butanediol_skip'))
        .notConsumable('gtceu:palladium_on_carbon_dust')
        .inputFluids('gtceu:benzene 3000', 'gtceu:oxygen 19000', 'gtceu:hydrogen 38000')
        .outputFluids(
            'gtceu:14_butanediol 3000',
            'gtceu:methanol 4000',
            'gtceu:carbon_dioxide 2000',
            'minecraft:water 5000'
        )
        .duration(105)
        .circuit(8)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .chemical_skip(id('benzophenone_3344_tetracarboxylic_dianhydridenediol_skip'))
        .notConsumable('gtceu:aluminium_dust')
        .inputFluids(
            'gtceu:toluene 8000',
            'gtceu:benzene 11000',
            'gtceu:oxygen 77000',
            'gtceu:acetic_acid 8000',
            'gtceu:chlorine 3000'
        )
        .itemOutputs('240x gtceu:benzophenone_3344_tetracarboxylic_dianhydride_dust')
        .outputFluids(
            'gtceu:hydrogen_chloride 3000',
            'gtceu:carbon_dioxide 2000',
            'minecraft:water 33000',
            'gtceu:hydrogen 45000'
        )
        .duration(30)
        .circuit(6)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .chemical_skip(id('tungstate_line'))
        .itemInputs('1x gtceu:tungstate_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('1x gtceu:tungsten_dust', '2x gtceu:lithium_dust')
        .outputFluids('gtceu:chlorine 2000', 'gtceu:hydrogen 2000', 'gtceu:oxygen 4000')
        .duration(175)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .chemical_skip(id('scheelite_line'))
        .itemInputs('6x gtceu:scheelite_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('1x gtceu:tungsten_dust', '1x gtceu:calcium_dust')
        .outputFluids('gtceu:chlorine 2000', 'gtceu:hydrogen 2000', 'gtceu:oxygen 4000')
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
        .itemInputs('70x gtceu:zapolite_dust', '60x gtceu:potassium_hydroxide_dust')
        .inputFluids('gtceu:hydrogen 18000', 'gtceu:hydrochloric_acid 20000')
        .itemOutputs(
            '10x gtceu:zapolgium_dust',
            '5x gtceu:bauxite_dust',
            '20x gtceu:iodine_dust',
            '40x gtceu:rock_salt_dust'
        )
        .outputFluids('minecraft:water 29000', 'gtceu:oxygen 21000')
        .duration(66)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu
        .chemical_skip(id('zirconium_skip'))
        .itemInputs('80x gtceu:titanite_dust')
        .inputFluids('gtceu:hydrogen 20000')
        .itemOutputs(
            '10x gtceu:zirconium_dust',
            '10x gtceu:titanium_dust',
            '30x gtceu:silicon_dioxide_dust',
            '50x gtceu:calcium_hydroxide_dust'
        )
        .outputFluids('gtceu:oxygen 10000')
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
