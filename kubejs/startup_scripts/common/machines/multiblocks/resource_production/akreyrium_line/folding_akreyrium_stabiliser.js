GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('folding_akreyrium_stabiliser')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSound(GTSoundEntries.MACERATOR)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('folding_akreyrium_stabiliser', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('folding_akreyrium_stabiliser')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('                 ', '        B        ', '        B        ', '        B        ', '        B        ', '        B        ', '                 ')
            .aisle('       BBB       ', '        B        ', '     B     B     ', '     BCCCCCB     ', '     B     B     ', '        B        ', '       BBB       ')
            .aisle('      BXXXB      ', '     B     B     ', '    EEE   EEE    ', 'FDDFFFE   EFFFDDF', '    EEE   EEE    ', '     B     B     ', '      BXXXB      ')
            .aisle('      BXGXB      ', '     BC G CB     ', 'FDDFFFE G EFFFDDF', 'MGGGGGGGGGGGGGGGM', 'FDDFFFE G EFFFDDF', '     BC G CB     ', '      BXGXB      ')
            .aisle('      BXXXB      ', '     B     B     ', '    EEE   EEE    ', 'FDDFFFE G EFFFDDF', '    EEE   EEE    ', '     B     B     ', '      BXXXB      ')
            .aisle('       BBB       ', '        B        ', '     B     B     ', '     BCCGCCB     ', '     B     B     ', '        B        ', '       BBB       ')
            .aisle('                 ', '        B        ', '        B        ', '        @        ', '        B        ', '        B        ', '                 ')
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('gtceu:robust_machine_casing'))
            .where('C', Predicates.blocks('gtceu:hastelloy_x_frame'))
            .where('D', Predicates.blocks('gtceu:fusion_glass'))
            .where('M', Predicates.blocks('gtceu:ulv_input_bus'))
            .where('X', Predicates.blocks('gtceu:fusion_glass')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_1X))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_4X))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_9X))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.blocks('gtceu:me_stocking_input_hatch'))
                .or(Predicates.blocks('gtceu:me_input_hatch')))
            .where('E', Predicates.blocks('gtceu:high_power_casing'))
            .where('F', Predicates.blocks('gtceu:computer_casing'))
            .where('G', Predicates.blocks('gtceu:advanced_computer_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/hpca');

});
