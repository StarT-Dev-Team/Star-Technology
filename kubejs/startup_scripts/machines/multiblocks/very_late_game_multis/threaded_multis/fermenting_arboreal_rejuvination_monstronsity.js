GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
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
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('             BCCCCCB ', '             BC C CB ', '             BCCDCCB ', '             BC C CB ', '             BCCCCCB ', '              BBBBB  ', '                     ')
            .aisle('       B     CCCCCCC ', '       B     CCEFECC ', '       B     CCFDFCC ', '       B     CCEFECC ', '       B     CCCCCCC ', '               CCC   ', '                B    ')
            .aisle('     CCCCC   CCCCCCC ', '     CCCCC   CCCCCCC ', '     CCCCC   C     C ', '     CCCCC   C     C ', '     CCCCC   C     C ', '       B      CCCCC  ', '                B    ')
            .aisle('     CCCCC   CCGGGCC ', '     CHHHC   CIIIIIC ', '     CHHHC   C     C ', '     CHHHC   C     C ', '     CHHHC   J     J ', '      JJJ     JCCCJ  ', '       B        B    ')
            .aisle('    BCCCCCB  CCCGCCC ', '    BCHFHCB  CIIIIIC ', '    BCHFHCB  C     C ', '    BCHFHCB  J     J ', '    BCHHHCB  J     J ', '     BJJJB    JJCJJ  ', '      BBB       B    ')
            .aisle('     CCCCC  BCCGGGCCB', '     CHHHC  BCIIIIICB', '     CHHHC  BC     CB', '     CHHHC  BJ     JB', '     CHHHC  BJ     JB', '      JJJ    BJJCJJB ', '       B      BBBBB  ')
            .aisle('     CCCCC   CCCGCCC ', '     CCCCC   CIIIIIC ', '     CCCCC   C     C ', '     CCGCC   J     J ', '     CCCCC   J     J ', '       B      JJCJJ  ', '                B    ')
            .aisle('       B     CCCGCCC ', '       B     CHHHHHC ', '       B     C     C ', '       G     C     C ', '       B     J     J ', '       B      JCCCJ  ', '                B    ')
            .aisle('BCCCCCCCC    CCCGCCC ', 'BCCCCCCCC    CIIIIIC ', 'BCCCCCCCC    C     C ', 'BJCCCCCGC    C     C ', 'BJJJCCCCC    C     C ', 'BJJJJJCCC     CCCCC  ', ' BBBBBBBC       B    ')
            .aisle('CCCCCCCCCB  BCCGGGCC ', 'CKKKKKCGCB  BCIIGIIC ', 'C     CGCBBBBC  G  C ', 'J     CGGGGGGGGGG  C ', 'J     CCCBBBBC     C ', 'J     CCCB    CCCCC  ', 'BJJJJJCCCB      B    ')
            .aisle('CCCCCCCCC    CCCGCCC ', 'CKKKKKCGC    CIIIIIC ', 'C L L CCC    C     C ', 'J M M CCCB   C     C ', 'J M M CCC    C     C ', 'J     CCC     CCCCC  ', 'BJJJCCCCCB      B    ')
            .aisle('CCCCCCCCC    CCCGCCC ', 'CKKKKKGCC    CHHHHHC ', 'C     CCC    C     C ', 'J     CCCB   C     C ', 'J     CCC    J     J ', 'J     CCC     JCCCJ  ', 'BJCCCCCCCB      B    ')
            .aisle('CCCCCCCCC    CCCGCCC ', 'CKKKKKCGC    CIIIIIC ', 'C L L CCC    C     C ', 'J M M CCCB   J     J ', 'J M M CCC    J     J ', 'J     CCC     JJCJJ  ', 'BJJJCCCCCB      B    ')
            .aisle('CCCCCCCCCB  BCCGGGCCB', 'CKKKKKCGCB  BCIIIIICB', 'C     CCCB  BC     CB', 'J     CCCB  BJ     JB', 'J     CCCB  BJ     JB', 'J     CCCB   BJJCJJB ', 'BJJJJJCCCB    BBBBB  ')
            .aisle('BCCCCCCCC    CCCGCCC ', 'BCCCCCCCC    CIIIIIC ', 'BCCCNC@CC    C     C ', 'BJCCCCCCC    J     J ', 'BJJJCCCCC    J     J ', 'BJJJJJCCC     JJCJJ  ', ' BBBBBBBC       B    ')
            .aisle('             CCGGGCC ', '             CIIIIIC ', '             C     C ', '             C     C ', '             J     J ', '              JCCCJ  ', '                B    ')
            .aisle('             CCCCCCC ', '             CCCCCCC ', '             C     C ', '             C     C ', '             C     C ', '              CCCCC  ', '                B    ')
            .aisle('             CCCCCCC ', '             CCEFECC ', '             CCFDFCC ', '             CCEFECC ', '             CCCCCCC ', '               CCC   ', '                B    ')
            .aisle('             BCCCCCB ', '             BC C CB ', '             BCCDCCB ', '             BC C CB ', '             BCCCCCB ', '              BBBBB  ', '                     ')
                .where(' ', Predicates.any())
                .where('B', Predicates.blocks('gtceu:chaotixic_alloy_frame'))
                .where(
                    'C',
                    Predicates.blocks('kubejs:true_revitilization_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('D', Predicates.blocks('kubejs:nyanium_engine_intake_casing'))
                .where('E', $StarTThreadingStatBlocks.threadingStatBlocks())
                .where('F', Predicates.blocks('start_core:advanced_fusion_coil'))
                .where('G', Predicates.blocks('kubejs:nyanium_pipe_casing'))
                .where('H', Predicates.blocks('minecraft:water'))
                .where('I', Predicates.blocks('farmersdelight:rich_soil_farmland'))
                .where('J', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
                .where('K', Predicates.blocks('minecraft:podzol'))
                .where('L', Predicates.blocks('minecraft:spruce_fence'))
                .where('M', Predicates.blocks('minecraft:spruce_leaves'))
                .where('N', Predicates.blocks('start_core:threading_controller'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/true_revitilization_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
