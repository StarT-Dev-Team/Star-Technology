GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('fermenting_arboreal_rejuvenation_monstrosity', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['hydroponic_garden', 'industrial_fishery', 'tree_greenhouse', 'composting_factory'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:true_revitilization_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '             BCCCCCB |             BC C CB |             BCCDCCB |             BC C CB |             BCCCCCB |              BBBBB  |                     ',
                '       B     CCCCCCC |       B     CCEFECC |       B     CCFDFCC |       B     CCEFECC |       B     CCCCCCC |               CCC   |                B    ',
                '     CCCCC   CCCCCCC |     CCCCC   CCCCCCC |     CCCCC   C     C |     CCCCC   C     C |     CCCCC   C     C |       B      CCCCC  |                B    ',
                '     CCCCC   CCGGGCC |     CHHHC   CIIIIIC |     CHHHC   C     C |     CHHHC   C     C |     CHHHC   J     J |      JJJ     JCCCJ  |       B        B    ',
                '    BCCCCCB  CCCGCCC |    BCHFHCB  CIIIIIC |    BCHFHCB  C     C |    BCHFHCB  J     J |    BCHHHCB  J     J |     BJJJB    JJCJJ  |      BBB       B    ',
                '     CCCCC  BCCGGGCCB|     CHHHC  BCIIIIICB|     CHHHC  BC     CB|     CHHHC  BJ     JB|     CHHHC  BJ     JB|      JJJ    BJJCJJB |       B      BBBBB  ',
                '     CCCCC   CCCGCCC |     CCCCC   CIIIIIC |     CCCCC   C     C |     CCGCC   J     J |     CCCCC   J     J |       B      JJCJJ  |                B    ',
                '       B     CCCGCCC |       B     CHHHHHC |       B     C     C |       G     C     C |       B     J     J |       B      JCCCJ  |                B    ',
                'BCCCCCCCC    CCCGCCC |BCCCCCCCC    CIIIIIC |BCCCCCCCC    C     C |BJCCCCCGC    C     C |BJJJCCCCC    C     C |BJJJJJCCC     CCCCC  | BBBBBBBC       B    ',
                'CCCCCCCCCB  BCCGGGCC |CKKKKKCGCB  BCIIGIIC |C     CGCBBBBC  G  C |J     CGGGGGGGGGG  C |J     CCCBBBBC     C |J     CCCB    CCCCC  |BJJJJJCCCB      B    ',
                'CCCCCCCCC    CCCGCCC |CKKKKKCGC    CIIIIIC |C L L CCC    C     C |J M M CCCB   C     C |J M M CCC    C     C |J     CCC     CCCCC  |BJJJCCCCCB      B    ',
                'CCCCCCCCC    CCCGCCC |CKKKKKGCC    CHHHHHC |C     CCC    C     C |J     CCCB   C     C |J     CCC    J     J |J     CCC     JCCCJ  |BJCCCCCCCB      B    ',
                'CCCCCCCCC    CCCGCCC |CKKKKKCGC    CIIIIIC |C L L CCC    C     C |J M M CCCB   J     J |J M M CCC    J     J |J     CCC     JJCJJ  |BJJJCCCCCB      B    ',
                'CCCCCCCCCB  BCCGGGCCB|CKKKKKCGCB  BCIIIIICB|C     CCCB  BC     CB|J     CCCB  BJ     JB|J     CCCB  BJ     JB|J     CCCB   BJJCJJB |BJJJJJCCCB    BBBBB  ',
                'BCCCCCCCC    CCCGCCC |BCCCCCCCC    CIIIIIC |BCCCNC@CC    C     C |BJCCCCCCC    J     J |BJJJCCCCC    J     J |BJJJJJCCC     JJCJJ  | BBBBBBBC       B    ',
                '             CCGGGCC |             CIIIIIC |             C     C |             C     C |             J     J |              JCCCJ  |                B    ',
                '             CCCCCCC |             CCCCCCC |             C     C |             C     C |             C     C |              CCCCC  |                B    ',
                '             CCCCCCC |             CCEFECC |             CCFDFCC |             CCEFECC |             CCCCCCC |               CCC   |                B    ',
                '             BCCCCCB |             BC C CB |             BCCDCCB |             BC C CB |             BCCCCCB |              BBBBB  |                     ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.gtBlock('chaotixic_alloy_frame'),
                    C: P.anyOf([
                        P.kjsBlock('true_revitilization_casing'),
                        P.ability(PA.itemIn, { max: 20, view: 1 }),
                        P.ability(PA.itemOut, { max: 20, view: 1 }),
                        P.ability(PA.fluidIn, { max: 20, view: 1 }),
                        P.ability(PA.fluidOut, { max: 20, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    D: P.kjsBlock('nyanium_engine_intake_casing'),
                    E: P.threadingBlocks(),
                    F: P.coreBlock('advanced_fusion_coil'),
                    G: P.kjsBlock('nyanium_pipe_casing'),
                    H: P.block('minecraft:water'),
                    I: P.block('farmersdelight:rich_soil_farmland'),
                    J: P.kjsBlock('draco_resilient_fusion_glass'),
                    K: P.block('minecraft:podzol'),
                    L: P.block('minecraft:spruce_fence'),
                    M: P.block('minecraft:spruce_leaves'),
                    N: P.coreBlock('threading_controller'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/true_revitilization_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
