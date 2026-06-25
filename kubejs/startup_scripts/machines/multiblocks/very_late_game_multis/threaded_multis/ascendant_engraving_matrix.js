GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('ascendant_engraving_matrix', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['laser_engraver', 'runic_circuitry_assembling_station', 'runic_inscribe_manipulate'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:ionic_engraving_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '      BCCCB      |     DBCCCBD     |    DDBCCCBDD    |   DDBBCCCBBDD   |  DDBBBCCCBBBDD  | DDBBEBBBBBEBBDD |BBBBBBBDDDBBBBBBB|CCCCCBDD DDBCCCCC|CCCCCBDA ADBCCCCC|CCCCCBDD DDBCCCCC|BBBBBBBDDDBBBBBBB| DDBBEBBBBBEBBDD |  DDBBBCCCBBBDD  |   DDBBCCCBBDD   |    DDBCCCBDD    |     DBCCCBD     |      BCCCB      ',
                '     DBCCCBD     |   BB   F   BB   |  BB    F    BB  | BB     F     BB | B             B |D      GGG      D|B     GDDDG     B|C    GDDNDDG    C|CFFF GDDNDDG FFFC|C    GDDNDDG    C|B     GDDDG     B|D      GGG      D| B             B | BB     F     BB |  BB    F    BB  |   BB   F   BB   |     DBCCCBD     ',
                '    DDBCCCBDD    |  BB    F    BB  | B             B | B             B |D               D|D               D|B      CCC      B|C     C H C     C|CF    CHIHC    FC|C     C H C     C|B      CCC      B|D               D|D               D| B             B | B             B |  BB    F    BB  |    DDBCCCBDD    ',
                '   DDBBCCCBBDD   | BB     F     BB | B             B |D               D|D               D|B               B|B      CCC      B|C     C H C     C|CF    CHIHC    FC|C     C H C     C|B      CCC      B|B               B|D               D|D               D| B             B | BB     F     BB |   DDBBCCCBBDD   ',
                '  DDBBBCCCBBBDD  | B             B |D               D|D               D|B               B|B               B|B      CCC      B|C     C H C     C|C     CHIHC     C|C     C H C     C|B      CCC      B|B               B|B               B|D               D|D               D| B             B |  DDBBBCCCBBBDD  ',
                ' DDBBEBBBBBEBBDD |D      GGG      D|D               D|B               B|B               B|E               E|B      CCC      B|BG    C   C    GB|BG    C I C    GB|BG    C   C    GB|B      CCC      B|E               E|B               B|B               B|D               D|D      GGG      D| DDBBBBBBBBBBBDD ',
                'BBBBBBBDDDBBBBBBB|B     GDDDG     B|B      CCC      B|B      CCC      B|B      CCC      B|B      CCC      B|BG     JJJ     GB|DDCCCCJ   JCCCCDD|DDCCCCJ L JCCCCDD|DDCCCCJ   JCCCCDD|BG     JJJ     GB|B      CCC      B|B      CCC      B|B      CCC      B|B      CCC      B|B     GDDDG     B|BBBBBBBDDDBBBBBBB',
                'CCCCCBDDADDBCCCCC|C    GDDDDDG    C|C     C H C     C|C     C H C     C|C     C H C     C|BG    C   C    GB|DDCCCCJ   JCCCCDD|DD             DD|ADHHH       HHHDA|DD             DD|DDCCCCJ   JCCCCDD|BG    C   C    GB|C     C H C     C|C     C H C     C|C     C H C     C|C    GDDDDDG    C|CCCCCBDDADDBCCCCC',
                'CCCCCBDAAADBCCCCC|CFFF GDDDDDG FFFC|CF    CHIHC    FC|CF    CHIHC    FC|C     CHIHC     C|BG    C I C    GB|DDCCCCJ L JCCCCDD| NHHH       HHHN | NIIIIL K LIIIIN | NHHH       HHHN |DDCCCCJ L JCCCCDD|BG    C I C    GB|C     CHIHC     C|CF    CHIHC    FC|CF    CHIHC    FC|CFFF GDDDDDG FFFC|CCCCCBDAAADBCCCCC',
                'CCCCCBDDADDBCCCCC|C    GDDDDDG    C|C     C H C     C|C     C H C     C|C     C H C     C|BG    C   C    GB|DDCCCCJ   JCCCCDD|DD             DD|ADHHH       HHHDA|DD             DD|DDCCCCJ   JCCCCDD|BG    C   C    GB|C     C H C     C|C     C H C     C|C     C H C     C|C    GDDDDDG    C|CCCCCBDDADDBCCCCC',
                'BBBBBBBDDDBBBBBBB|B     GDDDG     B|B      CCC      B|B      CCC      B|B      CCC      B|B      CCC      B|BG     JJJ     GB|DDCCCCJ   JCCCCDD|DDCCCCJ L JCCCCDD|DDCCCCJ   JCCCCDD|BG     JJJ     GB|B      CCC      B|B      CCC      B|B      CCC      B|B      CCC      B|B     GDDDG     B|BBBBBBBDDDBBBBBBB',
                ' DDBBEBBBBBEBBDD |D      GGG      D|D               D|B               B|B               B|E               E|B      CCC      B|BG    C   C    GB|BG    C I C    GB|BG    C   C    GB|B      CCC      B|E               E|B               B|B               B|D               D|D      GGG      D| DDBBBBBBBBBBBDD ',
                '  DDBBBCCCBBBDD  | B             B |D               D|D               D|B               B|B               B|B      CCC      B|C     C H C     C|C     CHIHC     C|C     C H C     C|B      CCC      B|B               B|B               B|D               D|D               D| B             B |  DDBBBCCCBBBDD  ',
                '   DDBBCCCBBDD   | BB     F     BB | B             B |D               D|D               D|B               B|B      CCC      B|C     C H C     C|CF    CHIHC    FC|C     C H C     C|B      CCC      B|B               B|D               D|D               D| B             B | BB     F     BB |   DDBBCCCBBDD   ',
                '    DDBCCCBDD    |  BB    F    BB  | B             B | B             B |D               D|D               D|B      CCC      B|C     C H C     C|CF    CHIHC    FC|C     C H C     C|B      CCC      B|D               D|D               D| B             B | B             B |  BB    F    BB  |    DDBCCCBDD    ',
                '     DBCCCBD     |   BB   F   BB   |  BB    F    BB  | BB     F     BB | B             B |D      GGG      D|B     GDDDG     B|C    GDDDDDG    C|CFFF GDDDDDG FFFC|C    GDDDDDG    C|B     GDDDG     B|D      GGG      D| B             B | BB     F     BB |  BB    F    BB  |   BB   F   BB   |     DBCCCBD     ',
                '      BCCCB      |     DBCCCBD     |    DDBCCCBDD    |   DDBBCCCBBDD   |  DDBBBCCCBBBDD  | DDBBEBB@BBEBBDD |BBBBBBBDDDBBBBBBB|CCCCCBDDADDBCCCCC|CCCCCBDAAADBCCCCC|CCCCCBDDADDBCCCCC|BBBBBBBDDDBBBBBBB| DDBBEBBMBBEBBDD |  DDBBBCCCBBBDD  |   DDBBCCCBBDD   |    DDBCCCBDD    |     DBCCCBD     |      BCCCB      ',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    A: P.kjsBlock('nyanium_heat_escape_casing'),
                    B: P.anyOf([
                        P.kjsBlock('ionic_engraving_casing'),
                        P.ability(PA.itemIn, { max: 20, view: 1 }),
                        P.ability(PA.itemOut, { max: 20, view: 1 }),
                        P.ability(PA.fluidIn, { max: 20, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.kjsBlock('draco_resilient_fusion_glass'),
                    D: P.kjsBlock('draco_assembly_grating'),
                    E: P.kjsBlock('nyanium_engine_intake_casing'),
                    F: P.gtBlock('superconducting_coil'),
                    G: P.gtBlock('palladium_substation'),
                    H: P.gtBlock('expetidalloy_d_17_frame'),
                    I: P.kjsBlock('melodium_casing'),
                    J: P.coreBlock('advanced_fusion_coil'),
                    K: P.kjsBlock('inscribe_casing'),
                    L: P.kjsBlock('laser_casing'),
                    M: P.coreBlock('threading_controller'),
                    N: P.threadingBlocks(),
                    ' ': P.any(),
                })
                .build()
        )

        // .pattern(definition => FactoryBlockPattern.start()
        //     .aisle('   BCCCB   ', '   BC CB   ', '   BCDCB   ', '   BCDCB   ', '   BC CB   ', '   BCCCB   ', '   BBBBB   ', '   B   B   ', '   B   B   ', '   B   B   ', '   BBBBB   ', '    CCC    ', '    C C    ', '    CCC    ', '   BBBBB   ', '     B     ', '     B     ', '           ', '           ')
        //     .aisle('  CCCCCCC  ', '  CCCECCC  ', '  CCCFCCC  ', '  CCCFCCC  ', '    CECG   ', '    CFCG   ', '  BBCCCBB  ', '    CCC    ', '           ', '    CCC    ', '  BBCCCBB  ', '   BCCCB   ', '   BCECB   ', '   BCCCB   ', '  BBGGGBB  ', '    GGG    ', '     B     ', '     B     ', '           ')
        //     .aisle(' CCDDDDDCC ', ' CC  F  CC ', ' CCFFFFFCC ', ' CC  F  CC ', '  GG F  G  ', '  GG F  G  ', ' BBG D GBB ', '   G D G   ', '    DDD    ', '   G   G   ', ' BBG   GBB ', '  GG   GG  ', '  GG H GG  ', '  GG   GG  ', ' BBG   GBB ', '   G   G   ', '    GGG    ', '     B     ', '     B     ')
        //     .aisle('BCDDDDDDDCB', 'BC       CB', 'BCF     FCB', 'BC       CB', 'B G      GB', 'B G      GB', 'BBG     GBB', 'B G     G B', 'B  D   D  B', 'B G     G B', 'BBG     GBB', ' BG     GB ', ' BG  H  GB ', ' BG     GB ', 'BBG     GBB', '  G     G  ', '   G   G   ', '    GGG    ', '     B     ')
        //     .aisle('CCDDDDDDDCC', 'CC       CC', 'CCF     FCC', 'CC       CC', 'CC       CC', 'CC       CC', 'BC       CB', ' C       C ', '  D     D  ', ' C       C ', 'BC       CB', 'CC       CC', 'CC       CC', 'CC       CC', 'BG       GB', ' G       G ', '  G     G  ', '   GGGGG   ', '     B     ')
        //     .aisle('CCDDDDDDDCC', ' EF     FE ', 'DFF     FFD', 'DFF     FFD', ' EF     FE ', 'CFF  I  FFC', 'BCD     DCB', ' CD     DC ', '  D  J  D  ', ' C       C ', 'BC       CB', 'CC   I   CC', ' EHH   HHE ', 'CC       CC', 'BG       GB', 'BG       GB', 'BBG     GBB', ' BBGGGGGBB ', '  BBBBBBB  ')
        //     .aisle('CCDDDDDDDCC', 'CC       CC', 'CCF     FCC', 'CC       CC', 'CC       CC', 'CC       CC', 'BC       CB', ' C       C ', '  D     D  ', ' C       C ', 'BC       CB', 'CC       CC', 'CC       CC', 'CC       CC', 'BG       GB', ' G       G ', '  G     G  ', '   GGGGG   ', '     B     ')
        //     .aisle('BCDDDDDDDCB', 'BC       CB', 'BCF     FCB', 'BC       CB', 'B G     G B', 'B G     G B', 'BBG     GBB', 'B G     G B', 'B  D   D  B', 'B G     G B', 'BBG     GBB', ' BG     GB ', ' BG  H  GB ', ' BG     GB ', 'BBG     GBB', '  G     G  ', '   G   G   ', '    GGG    ', '     B     ')
        //     .aisle(' CCDDDDDCC ', ' CC  F  CC ', ' CCFFFFFCC ', ' CC  F  CC ', '  GG F GG  ', '  GG F GG  ', ' BBG D GBB ', '   G D G   ', '    DDD    ', '   G   G   ', ' BBG   GBB ', '  GG   GG  ', '  GG H GG  ', '  GG   GG  ', ' BBG   GBB ', '   G   G   ', '    GGG    ', '     B     ', '     B     ')
        //     .aisle('  CCCCCCC  ', '  CCCFCCC  ', '  CCCFCCC  ', '  CCCFCCC  ', '    CFC    ', '    CFC    ', '  BBCCCBB  ', '    CCC    ', '           ', '    CCC    ', '  BBCCCBB  ', '   BCCCB   ', '   BCKCB   ', '   BCCCB   ', '  BBGGGBB  ', '    GGG    ', '     B     ', '     B     ', '           ')
        //     .aisle('   BCCCB   ', '   BCCCB   ', '   BCCCB   ', '   BC@CB   ', '   BCCCB   ', '   BCCCB   ', '   BBBBB   ', '   B   B   ', '   B   B   ', '   B   B   ', '   BBBBB   ', '    CCC    ', '    C C    ', '    CCC    ', '   BBBBB   ', '     B     ', '     B     ', '           ', '           ')
        //     ' ', Predicates.any())
        //     'B', Predicates.blocks('gtceu:expetidalloy_d_17_frame'))
        //     'C', Predicates.blocks('kubejs:ionic_engraving_casing')
        //         Predicates.abilities(PartAbility.IMPORT_ITEMS, {max:20,prev:1}),
        //         Predicates.abilities(PartAbility.EXPORT_ITEMS, {max:20,prev:1}),
        //         Predicates.abilities(PartAbility.IMPORT_FLUIDS, {max:20,prev:1}),
        //         Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
        //         Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
        //         Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
        //     'D', Predicates.blocks('kubejs:draco_assembly_grating'))
        //     'E', $StarTThreadingStatBlocks.threadingStatBlocks())
        //     'F', Predicates.blocks('kubejs:superdense_assembly_control_casing'))
        //     'G', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
        //     'H', Predicates.blocks('start_core:advanced_fusion_coil'))
        //     'I', Predicates.blocks('kubejs:laser_casing'))
        //     'J', Predicates.blocks('kubejs:inscribe_casing'))
        //     'K', Predicates.blocks('start_core:threading_controller'))
        //     '@', Predicates.controller(Predicates.blocks(definition.get())))
        // .build())
        .workableCasingModel(
            'kubejs:block/casings/threading/ionic_engraving_casing',
            'gtceu:block/machines/laser_engraver'
        );
});
