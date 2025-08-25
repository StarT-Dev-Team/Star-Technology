GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('injection_mixer')
        .category('ultimate')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 6, 1)
        .setSound(GTSoundEntries.MIXER)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('injection_mixer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('injection_mixer')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:noble_mixing_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(" BBB ", " CCC ", " BBB ", "  B  ", "     ", "  B  ", " BBB ", "     ", "     ", "     ", "     ", "     ", "     ") 
            .aisle("BBDBB", "CDDDC", "BEEEB", " FEF ", " FGF ", " FDF ", "BDDDB", " DFD ", "  F  ", "  C  ", "  C  ", "  C  ", "  D  ") 
            .aisle("BDDDB", "CDGDC", "BEGEB", "BEGEB", " GGG ", "BDGDB", "BDGDB", " FGF ", " FGF ", " CHC ", " CHC ", " CHC ", " DED ") 
            .aisle("BBDBB", "CDDDC", "BEEEB", " FEF ", " FGF ", " FDF ", "BDDDB", " DFD ", "  F  ", "  C  ", "  C  ", "  C  ", "  D  ") 
            .aisle(" BBB ", " C@C ", " BBB ", "  B  ", "     ", "  B  ", " BBB ", "     ", "     ", "     ", "     ", "     ", "     ") 
            .where("B", Predicates.blocks("kubejs:noble_mixing_casing"))
            .where(" ", Predicates.any())
            .where('C', Predicates.blocks('gtceu:fusion_glass')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("D", Predicates.blocks("gtceu:atomic_casing"))
            .where("E", Predicates.blocks("kubejs:enriched_naquadah_pipe_casing"))
            .where("F", Predicates.blocks("kubejs:enriched_naquadah_machine_casing"))
            .where("G", Predicates.blocks("kubejs:enriched_naquadah_gearbox"))
            .where("H", Predicates.blocks("start_core:enriched_naquadah_engine_intake_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer('kubejs:block/casings/ultimate_multis/noble_mixing_casing',
            'gtceu:block/machines/mixer', false);

});
