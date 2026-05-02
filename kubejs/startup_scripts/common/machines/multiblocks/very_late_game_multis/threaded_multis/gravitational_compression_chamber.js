GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gravitational_compression_chamber', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.ALL)
        .tooltips([
            Text.translate("block.start_core.gap"),
            Text.translate("block.kubejs.threading.tooltip")
        ])
        .recipeTypes(['bender', 'compressor', 'forge_hammer', 'forming_press', 'packer'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, $StarTRecipeModifiers.THREADING_MACHINE, $StarTRecipeModifiers.BULK_PROCESSING, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:gravitationally_strained_stabilization_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('                     ', '                     ', '                     ', '                     ', ' BBB             BBB ', ' BBBBB         BBBBB ', ' BBBBBCC     CCBBBBB ', ' BBBBB         BBBBB ', ' BBB             BBB ', '                     ', '                     ', '                     ', '                     ')
            .aisle('                     ', '                     ', ' BB               BB ', ' BBBB           BBBB ', ' BBBBB  C   C  BBBBB ', 'BBBBBBBBC   CBBBBBBBB', 'BBBBDBBBC   CBBBDBBBB', 'BBBBBBBBC   CBBBBBBBB', ' BBBBB  C   C  BBBBB ', ' BBB            BBBB ', ' BB               BB ', '                     ', '                     ')
            .aisle('                     ', ' BB               BB ', ' BBBBCCC     CCCBBBB ', 'BBBBBBBBC   CBBBBBBBB', 'BB  BBBBB   BBB    BB', 'BB  C  BBBBBBB  C  BB', 'BB CDC BBBEBBB CDC BB', 'BB  C  BBBBBBB  C  BB', 'BB  BBBBB   BBBBB  BB', 'BBBBBBBBC   CBBBBBBBB', ' BBBBCCC     CCCBBBB ', ' BB               BB ', '                     ')
            .aisle('                     ', ' BBBB           BBBB ', 'BBBBBBBBC   CBBBBBBBB', 'BB   BBBBBBBBBBB   BB', 'BB      BBBBB      BB', 'BB  C     C     C  BB', 'BB CDCCCCCDCCCCCDC BB', 'BB  C     C     C  BB', 'BB      BBBBB      BB', 'BB   BBBBBBBBBBB   BB', 'BBBBBBBBC   CBBBBBBBB', ' BBB            BBBB ', '                     ')
            .aisle(' BBB             BBB ', ' BBBBB  C   C  BBBBB ', 'BB  BBBBB   BBBBB  BB', 'BB      BBBBB      BB', 'BB        C        BB', ' B  CCCCCCCCCCCCC  B ', ' BCCDDDDDDDDDDDDDCCB ', ' B  CCCCCCCCCCCCC  B ', 'BB        C        BB', 'BB      BBBBB      BB', 'BB  BBBBB   BBBBB  BB', ' BBBBB  C   C  BBBBB ', ' BBB             BBB ')
            .aisle(' BBBBB         BBBBB ', 'BBBBBBBBC   CBBBBBBBB', 'BB  C  BBBBBBB  C  BB', 'BB  C           C  BB', ' B  CCCCCCCCCCCCC  B ', ' FCCC           CCCF ', ' FDDD           DDDF ', ' FCCC           CCCF ', ' B  CCCCCCCCCCCCC  B ', 'BB  C           C  BB', 'BB  C  BBBBBBB  C  BB', 'BBBBBBBBC   CBBBBBBBB', ' BBBBB         BBBBB ')
            .aisle(' BBBBBCC     CCBBBBB ', 'BBBBDBBBC   CBBBDBBBB', 'BB CDC BBBBBBB CDC BB', 'BB CDCCCCCCCCCCCDC BB', ' B CDDDDDDDDDDDDDC B ', ' B CD           DC B ', ' BCCDCCCCCCCCCCCDCCB ', ' B CD           DCBB ', ' B CDDDDDDDDDDDDDC B ', 'BB CDCCCCCCCCCCCDC BB', 'BB CDC BBBBBBB CDC BB', 'BBBBDBBBC   CBBBDBBBB', ' BBBBBCC     CCBBBBB ')
            .aisle(' BBBBB         BBBBB ', 'BBBBBBBBC   CBBBBBBBB', 'BB  C  BBBBBBB  C  BB', 'BB  C           C  BB', ' B  CCCCCCCCCCCCC  B ', ' FCCC           CCCF ', ' FDDD           DDDF ', ' FCCC           CCCF ', ' B  CCCCCCCCCCCCC  B ', 'BB  C           C  BB', 'BB  C  BBBBBBB  C  BB', 'BBBBBBBBC   CBBBBBBBB', ' BBBBB         BBBBB ')
            .aisle(' BBB             BBB ', ' BBBBB  C   C  BBBBB ', 'BB  BBBBB   BBBBB  BB', 'BB      BBBBB      BB', 'BB        C        BB', ' B  CCCCCCCCCCCCC  B ', ' BCCDDDDDDDDDDDDDCCB ', ' B  CCCCCCCCCCCCC  B ', 'BB        C        BB', 'BB      BBBBB      BB', 'BB  BBBBB   BBBBB  BB', ' BBBBB  C   C  BBBBB ', ' BBB             BBB ')
            .aisle('                     ', ' BBBB           BBBB ', 'BBBBBBBBC   CBBBBBBBB', 'BB   BBBBBBBBBBB   BB', 'BB      BBBBB      BB', 'BB  C     C     C  BB', 'BB CDCCCCCDCCCCCDC BB', 'BB  C     C     C  BB', 'BB      BBBBB      BB', 'BB   BBBBBBBBBBB   BB', 'BBBBBBBBC   CBBBBBBBB', ' BBBB            BBB ', '                     ')
            .aisle('                     ', ' BB               BB ', ' BBBBCCC     CCCBBBB ', 'BBBBBBBBC   CBBBBBBBB', 'BB  BBBBB   BBBBB  BB', 'BB  C  BBBBBBB  C  BB', 'BB CDC BBB@BBB CDC BB', 'BB  C  BBBBBBB  C  BB', 'BB  BBBBB   BBBBB  BB', 'BBBBBBBBC   CBBBBBBBB', ' BBBBCCC     CCCBBBB ', ' BB               BB ', '                     ')
            .aisle('                     ', '                     ', ' BB               BB ', ' BBBB           BBBB ', ' BBBBB  C   C  BBBBB ', 'BBBBBBBBC   CBBBBBBBB', 'BBBBDBBBC   CBBBDBBBB', 'BBBBBBBBC   CBBBBBBBB', ' BBBBB  C   C  BBBBB ', ' BBBB            BBB ', ' BB               BB ', '                     ', '                     ')
            .aisle('                     ', '                     ', '                     ', '                     ', ' BBB             BBB ', ' BBBBB         BBBBB ', ' BBBBBCC     CCBBBBB ', ' BBBBB         BBBBB ', ' BBB             BBB ', '                     ', '                     ', '                     ', '                     ')
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('kubejs:gravitationally_strained_stabilization_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('C', Predicates.blocks('gtceu:abyssal_alloy_frame'))
            .where('D', Predicates.blocks('kubejs:nyanium_gearbox'))
            .where('E', Predicates.blocks('start_core:threading_controller'))
            .where('F', $StarTThreadingStatBlocks.threadingStatBlocks())
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/threading/gravitationally_strained_stabilization_casing',
            'gtceu:block/multiblock/implosion_compressor');

});