GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('dimensional_destabiliser')
        .category('resource_production')
        .setMaxIOSize(3, 3, 3, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('dimensional_destabiliser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('dimensional_destabiliser')
        .recipeModifiers([
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle(
                    '    BBBBB    ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             '
                )
                .aisle(
                    '  BBBBBBBBB  ',
                    '      C      ',
                    '      C      ',
                    '      C      ',
                    '      C      ',
                    '      C      ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             '
                )
                .aisle(
                    ' BBBBBDBBBBB ',
                    '     CCC     ',
                    '     CCC     ',
                    '     CCC     ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             '
                )
                .aisle(
                    ' BBBBBEBBBBB ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '             ',
                    '             ',
                    '             ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '             ',
                    '             ',
                    '             '
                )
                .aisle(
                    'BBBBBBBBBBBBB',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '      E      '
                )
                .aisle(
                    'BBBBBFFFBBBBB',
                    '  C       C  ',
                    '  C       C  ',
                    '  C       C  ',
                    '             ',
                    '      G      ',
                    '     GGG     ',
                    '      G      ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             '
                )
                .aisle(
                    'BBDEBFDFBEDBB',
                    ' CCE     ECC ',
                    ' CCE     ECC ',
                    ' CCE  G  ECC ',
                    ' CEE  G  EEC ',
                    ' CE  GGG  EC ',
                    '  E  GAG  E  ',
                    '  E  GGG  E  ',
                    '  EE  G  EE  ',
                    '   E  G  E   ',
                    '   EE   EE   ',
                    '    E   E    ',
                    '    E   E    ',
                    '    E   E    '
                )
                .aisle(
                    'BBBBBFFFBBBBB',
                    '  C       C  ',
                    '  C       C  ',
                    '  C       C  ',
                    '             ',
                    '      G      ',
                    '     GGG     ',
                    '      G      ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             '
                )
                .aisle(
                    'BBBBBBBBBBBBB',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '      E      '
                )
                .aisle(
                    ' BBBBBEBBBBB ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '             ',
                    '             ',
                    '             ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '             ',
                    '             ',
                    '             '
                )
                .aisle(
                    ' BBBBBDBBBBB ',
                    '     CCC     ',
                    '     CCC     ',
                    '     CCC     ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '      E      ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             '
                )
                .aisle(
                    '  BBBBBBBBB  ',
                    '      C      ',
                    '      C      ',
                    '      C      ',
                    '      C      ',
                    '      C      ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             '
                )
                .aisle(
                    '    BB@BB    ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             ',
                    '             '
                )
                .where('A', Predicates.blocks('gtceu:nether_star_block'))
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('gtceu:stress_proof_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                )
                .where('C', Predicates.blocks('gtceu:tungsten_carbide_frame'))
                .where('D', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
                .where('E', Predicates.blocks('gtceu:nonconducting_casing'))
                .where('F', Predicates.blocks('gtceu:assembly_line_grating'))
                .where('G', Predicates.blocks('thermal_extra:shellite_glass'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('gtceu:block/casings/gcym/stress_proof_casing', 'gtceu:block/multiblock/fusion_reactor');
});
