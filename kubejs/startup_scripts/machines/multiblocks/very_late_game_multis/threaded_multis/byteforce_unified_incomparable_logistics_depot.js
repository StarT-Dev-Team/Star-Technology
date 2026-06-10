GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('byteforce_unified_incomparable_logistics_depot', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['assembler', 'circuit_assembler', 'me_assembler'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:advanced_assembly_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('  BCCCB       BCCCB  ', '  BC CB       BC CB  ', '   CCC         CCC   ', '                     ', '                     ', '                     ', '   CCC         CCC   ', '  BC CB       BC CB  ', '  BCCCB       BCCCB  ')
            .aisle(' BBBBBBB     BBBBBBB ', ' BBCDCBB     BBCDCBB ', ' BBCCCBB     BBCCCBB ', '  BEEEB       BEEEB  ', '  BEEEB       BEEEB  ', '  BEEEB       BEEEB  ', ' BBCCCBB     BBCCCBB ', ' BBCDCBB     BBCDCBB ', ' BBBBBBB     BBBBBBB ')
            .aisle(' BBBBBBBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBBBBBBB ', ' BFFFFFBBB BBBFFFFFB ', ' BF   FBB   BBF   FB ', ' BF   FBB   BBF   FB ', ' BF   FBB   BBF   FB ', ' BFFFFFBBB BBBFFFFFB ', ' BBBBBBBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBBBBBBB ')
            .aisle('BBBBBBBBBBBBBBBBBBBBB', 'BBBBBBBBBBBBBBBBBBBBB', ' BFFFFFBBBBBBBFFFFFB ', ' BFGGGFBBBBBBBFGGGFB ', ' BFGGGFBBBHBBBFGGGFB ', ' BFGGGFBBBBBBBFGGGFB ', ' BFFFFFBBBBBBBFFFFFB ', 'BBBBFBBBBBBBBBBBFBBBB', 'BBBBIBBBBBBBBBBBIBBBB')
            .aisle('CBBBBBBBBBBBBBBBBBBBC', 'CCBBJJBBBBBBBBBJJBBCC', 'CCFFKKFBBBBBBBFKKFFCC', ' E G  GJJJJJJJG  G E ', ' E G  GJJJKJJJG  G E ', ' E G  GJJJJJJJG  G E ', 'CCFFKKFBBBBBBBFKKFFCC', 'CCBBJJBBBBBBBBBJJBBCC', 'CBBBBBBBBBBBBBBBBBBBC')
            .aisle('CBBBBBBBBBBBBBBBBBBBC', ' DBBJJBBBBBBBBBJJBBD ', 'CCFFKKFFFFFFFFFKKFFCC', ' E G  GJJJJJJJG  G E ', ' E G  GKKKKKKKG  G E ', ' E G  GJJJJJJJG  G E ', 'CCFFKKFFFFFFFFFKKFFCC', ' DBBJJBBBBFBBBBJJBBD ', 'CBBBBBBBBBIBBBBBBBBBC')
            .aisle('CBBBBBBBBBBBBBBBBBBBC', 'CCBBJJBBBBBBBBBJJBBCC', 'CCFFKKFBBBBBBBFKKFFCC', ' E G  GJJJJJJJG  G E ', ' E G  GJJJKJJJG  G E ', ' E G  GJJJJJJJG  G E ', 'CCFFKKFBBBBBBBFKKFFCC', 'CCBBJJBBBBBBBBBJJBBCC', 'CBBBBBBBBBBBBBBBBBBBC')
            .aisle('BBBBBBBBBBBBBBBBBBBBB', 'BBBBBBBBBBBBBBBBBBBBB', ' BFFFFFBBBBBBBFFFFFB ', ' BFGGGFBBBBBBBFGGGFB ', ' BFGGGFBBB@BBBFGGGFB ', ' BFGGGFBBBBBBBFGGGFB ', ' BFFFFFBBBBBBBFFFFFB ', 'BBBBFBBBBBBBBBBBFBBBB', 'BBBBIBBBBBBBBBBBIBBBB')
            .aisle(' BBBBBBBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBBBBBBB ', ' BFFFFFBBB BBBFFFFFB ', ' BF   FBB   BBF   FB ', ' BF   FBB   BBF   FB ', ' BF   FBB   BBF   FB ', ' BFFFFFBBB BBBFFFFFB ', ' BBBBBBBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBBBBBBB ')
            .aisle(' BBBBBBB     BBBBBBB ', ' BBCDCBB     BBCDCBB ', ' BBCCCBB     BBCCCBB ', '  BEEEB       BEEEB  ', '  BEEEB       BEEEB  ', '  BEEEB       BEEEB  ', ' BBCCCBB     BBCCCBB ', ' BBCDCBB     BBCDCBB ', ' BBBBBBB     BBBBBBB ')
            .aisle('  BCCCB       BCCCB  ', '  BC CB       BC CB  ', '   CCC         CCC   ', '                     ', '                     ', '                     ', '   CCC         CCC   ', '  BC CB       BC CB  ', '  BCCCB       BCCCB  ')
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('kubejs:advanced_assembly_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('kubejs:draco_assembly_grating'))
                .where('D', $StarTThreadingStatBlocks.threadingStatBlocks())
                .where('E', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
                .where('F', Predicates.blocks('kubejs:nyanium_pipe_casing'))
                .where('G', Predicates.blocks('start_core:advanced_fusion_coil'))
                .where('H', Predicates.blocks('start_core:threading_controller'))
                .where('I', Predicates.blocks('gtceu:uiv_rotor_holder'))
                .where('J', Predicates.blocks('kubejs:superdense_assembly_machine_casing'))
                .where('K', Predicates.blocks('kubejs:superdense_assembly_control_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/advanced_assembly_casing',
            'gtceu:block/machines/assembler'
        );
});
