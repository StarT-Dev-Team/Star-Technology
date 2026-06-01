GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('bulk_ore_processing_array')
        .category('ore_processing')
        .setEUIO('in')
        .setMaxIOSize(1, 6, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('bulk_ore_processing_array', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bulk_ore_processing_array')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, $StarTRecipeModifiers.THROUGHPUT_BOOSTING, $StarTRecipeModifiers.BULK_PROCESSING, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('  BBB  ', '  AAA  ', '  AAA  ', '   A   ', '       ', '       ', '       ', '       ', '       ')
            .aisle(' BAAAB ', ' ACDCA ', ' A###A ', '  A#A  ', '  AAA  ', '   A   ', '       ', '       ', '       ')
            .aisle('BAAAAAB', 'AC#D#CA', 'A#####A', ' A###A ', ' A###A ', '  A#A  ', '  AAA  ', '   A   ', '   E   ')
            .aisle('BAAAAAB', 'ADDDDDA', 'A##D##A', 'A##D##A', ' A#D#A ', ' A#D#A ', '  ADA  ', '  AMA  ', '  E E  ')
            .aisle('BAAAAAB', 'AC#D#CA', 'A#####A', ' A###A ', ' A###A ', '  A#A  ', '  AAA  ', '   A   ', '   E   ')
            .aisle(' BAAAB ', ' ACDCA ', ' A###A ', '  A#A  ', '  AAA  ', '   A   ', '       ', '       ', '       ')
            .aisle('  BBB  ', '  A@A  ', '  AAA  ', '   A   ', '       ', '       ', '       ', '       ', '       ')
            .where('A', Predicates.blocks('kubejs:enriched_naquadah_machine_casing').setMinGlobalLimited(20)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where(' ', Predicates.any())
            .where('#', Predicates.air())
            .where('B', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
            .where('C', Predicates.blocks('kubejs:enriched_naquadah_gearbox'))
            .where('D', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
            .where('E', Predicates.blocks('kubejs:noble_mixing_casing'))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/naquadah/casing',
            'kubejs:block/multiblock/primitive_blast_furnace');

});
