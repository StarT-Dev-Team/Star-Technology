GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('bacteria_synthesizer')
        .category('resource_production')
        .setMaxIOSize(2, 0, 6, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('bacteria_synthesizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bacteria_synthesizer')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:peek_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle(
                    '       BBBBB',
                    '       BBBBB',
                    '       CDDDC',
                    '       C   C',
                    '       C   C',
                    '       C   C',
                    '       CDDDC',
                    '       BBBBB',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '            '
                )
                .aisle(
                    '       BDDDB',
                    '       BDDDB',
                    '       DDDDD',
                    '        DED ',
                    '        DED ',
                    '        DED ',
                    '       DDDDD',
                    '       BDDDB',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '            '
                )
                .aisle(
                    '       BDDDB',
                    '       BD DB',
                    '       DDFDD',
                    '        E E ',
                    '        E E ',
                    '        E E ',
                    '       DD DD',
                    '       BDGDB',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '            '
                )
                .aisle(
                    '       BDDDB',
                    '       BDDDB',
                    '       DDDDD',
                    '        DED ',
                    '        DED ',
                    '        DED ',
                    '       DDDDD',
                    '       BDDDB',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '            '
                )
                .aisle(
                    '       BBBBB',
                    '       BBBBB',
                    '       CDDDC',
                    '       C   C',
                    '       C   C',
                    '       C   C',
                    '       CDDDC',
                    '       BBBBB',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '            '
                )
                .aisle(
                    'BBBBBBBBDDDB',
                    ' B     BDDDB',
                    '       DDDDD',
                    '        DED ',
                    '        DED ',
                    '        DED ',
                    '       DDDDD',
                    '       BDDDB',
                    '            ',
                    '            ',
                    '            ',
                    '   DDD      ',
                    '            '
                )
                .aisle(
                    'BBBBBBBBDDDB',
                    'BBBBBBBBD DB',
                    ' BB   BBDFDD',
                    ' B     BD E ',
                    ' C     CD E ',
                    ' B     BD E ',
                    ' BB   BBD DD',
                    ' BBBBBBBDGDB',
                    '  BB BB     ',
                    '   B B      ',
                    '   B B      ',
                    ' DDDDDDD    ',
                    '            '
                )
                .aisle(
                    'BB     BDDDB',
                    ' BBBBBBBDDDB',
                    ' BHHHHH DDDD',
                    '  HHEHH DED ',
                    '  HHEHH DED ',
                    '  HHEHH DED ',
                    ' BHHHHH DDDD',
                    ' BHHHHHBDDDB',
                    ' BHHFHHB    ',
                    '  HHFHH     ',
                    '  HHFHH     ',
                    ' DDDDDDD    ',
                    '   DDD      '
                )
                .aisle(
                    'BB     BBBBB',
                    ' BBBBBBBBBBB',
                    '  HFFFHBDDDC',
                    '  H   HB   C',
                    '  H   HB   C',
                    '  H   HB   C',
                    '  HFFFHBDDDC',
                    ' BH   HBBBBB',
                    ' BH   HB    ',
                    ' BH   HB    ',
                    ' BH   HB    ',
                    'DDD   DDD   ',
                    '  DDDDD     '
                )
                .aisle(
                    'BB     BDDDB',
                    ' BBBBBBBDDDB',
                    '  HFFFH DDDD',
                    '  E   H DED ',
                    '  E   H DED ',
                    '  E   H DED ',
                    '  HFFFH DDDD',
                    ' BH   HBDDDB',
                    '  F   F     ',
                    '  F   F     ',
                    '  F   F     ',
                    'DDD   DDD   ',
                    '  DDDDD     '
                )
                .aisle(
                    'BB     BDDDB',
                    ' BBBBBBBD DB',
                    '  HFFFHBDFDD',
                    '  H   HBD E ',
                    '  H   HBD E ',
                    '  H   HBD E ',
                    '  HFFFHBD DD',
                    ' BH   HBDGDB',
                    ' BH   HB    ',
                    ' BH   HB    ',
                    ' BH   HB    ',
                    'DDD   DDD   ',
                    '  DDDDD     '
                )
                .aisle(
                    'BB     BDDDB',
                    ' BBBBBBBDDDB',
                    ' BHHHHH DDDD',
                    '  HHHHH DED ',
                    '  HH@HH DED ',
                    '  HHHHH DED ',
                    ' BHHHHH DDDD',
                    ' BHHHHHBDDDB',
                    ' BHHFHHB    ',
                    '  HHFHH     ',
                    '  HHFHH     ',
                    ' DDDDDDD    ',
                    '   DDD      '
                )
                .aisle(
                    'BBBBBBBBBBBB',
                    'BBBBBBBBBBBB',
                    ' BB   BBDDDC',
                    ' B     B   C',
                    ' C     C   C',
                    ' B     B   C',
                    ' BB   BBDDDC',
                    ' BBBBBBBBBBB',
                    '  BB BB     ',
                    '   B B      ',
                    '   B B      ',
                    ' DDDDDDD    ',
                    '            '
                )
                .aisle(
                    'BBBBBBBBB   ',
                    ' B     B    ',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '            ',
                    '   DDD      ',
                    '            '
                )
                .where(' ', Predicates.any())
                .where('B', Predicates.blocks('gtceu:palladium_substation'))
                .where('C', Predicates.blocks('gtceu:trinaquadalloy_frame'))
                .where('D', Predicates.blocks('gtceu:atomic_casing'))
                .where('E', Predicates.blocks('gtceu:fusion_glass'))
                .where('F', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
                .where('G', Predicates.blocks('kubejs:pallaridium_engine_intake_casing'))
                .where(
                    'H',
                    Predicates.blocks('kubejs:peek_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                )
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/basic/machine_casing_peek', 'gtceu:block/multiblock/fusion_reactor');
});
