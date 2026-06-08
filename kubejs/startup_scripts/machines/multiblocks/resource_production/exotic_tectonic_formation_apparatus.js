GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('exotic_rock_crushing')
        .category('resource_production')
        .setMaxIOSize(3, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('exotic_tectonic_formation_apparatus', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('exotic_rock_crushing')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle(
                    '   bbb   ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '         '
                )
                .aisle(
                    '  bbbbb  ',
                    '   ddd   ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '   bbb   '
                )
                .aisle(
                    ' bbbbbbb ',
                    '  ddddd  ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '   bbb   ',
                    '  bbbbb  '
                )
                .aisle(
                    ' bbbbbbb ',
                    '  ddddd  ',
                    '  e   e  ',
                    '  e   e  ',
                    '  e   e  ',
                    '  e   e  ',
                    '  e   e  ',
                    '  eddde  ',
                    ' bbbbbbb '
                )
                .aisle(
                    'bbbbbbbbb',
                    ' ddddddd ',
                    '    d    ',
                    '         ',
                    '         ',
                    '         ',
                    '    d    ',
                    '  ddddd  ',
                    ' bbbbbbb '
                )
                .aisle(
                    'bbbbbbbbb',
                    'bdddddddb',
                    '   dhd   ',
                    '    h    ',
                    '    h    ',
                    '    h    ',
                    '   dhd   ',
                    '  ddddd  ',
                    ' bbbbbbb '
                )
                .aisle(
                    'bbbbbbbbb',
                    'bdddddddb',
                    '    d    ',
                    '         ',
                    '         ',
                    '         ',
                    '    d    ',
                    '  ddddd  ',
                    ' bbbbbbb '
                )
                .aisle(
                    'bbbbbbbbb',
                    ' bdddddb ',
                    '  e   e  ',
                    '  e   e  ',
                    '  e   e  ',
                    '  e   e  ',
                    '  e   e  ',
                    '  eddde  ',
                    ' bbbbbbb '
                )
                .aisle(
                    'bbbbbbbbb',
                    ' bdddddb ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '   ddd   ',
                    '  bbbbb  '
                )
                .aisle(
                    ' bbbbbbb ',
                    '  bdddb  ',
                    '    d    ',
                    '    d    ',
                    '    d    ',
                    '    d    ',
                    '   ddd   ',
                    '   ddd   ',
                    '  bbbbb  '
                )
                .aisle(
                    ' bbbbbbb ',
                    '  bbbbb  ',
                    '   bbb   ',
                    '    b    ',
                    '    b    ',
                    '   bbb   ',
                    '   bbb   ',
                    '   bbb   ',
                    '   bbb   '
                )
                .aisle(
                    '  bbbbb  ',
                    '   bbb   ',
                    '   bbb   ',
                    '   bbb   ',
                    '   b@b   ',
                    '   bbb   ',
                    '   bbb   ',
                    '   bbb   ',
                    '         '
                )
                .where(' ', Predicates.any())
                .where(
                    'b',
                    Predicates.blocks('gtceu:high_temperature_smelting_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                )
                .where('d', Predicates.blocks('kubejs:tritanic_blasting_casing'))
                .where('e', Predicates.blocks('gtceu:silicon_bronze_frame'))
                .where('h', Predicates.blocks('gtceu:naquadah_coil_block'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/fusion_reactor'
        );
});
