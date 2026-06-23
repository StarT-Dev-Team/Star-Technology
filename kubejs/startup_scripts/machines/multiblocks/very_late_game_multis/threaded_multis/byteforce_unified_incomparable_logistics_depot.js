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
                .where(' ', P.any())
                .where(
                    'B', P.anyOf([
                    P.kjsBlock('advanced_assembly_casing'),
                        P.ability(PA.itemIn, {max:20,prev:1}),
                        P.ability(PA.itemOut, {max:20,prev:1}),
                        P.ability(PA.fluidIn, {max:20,prev:1}),
                        P.ability(PA.fluidOut, {max:20,prev:1}),
                        P.ability(PA.parallelHatch, {max:1}),
                        P.ability(PA.euIn).setMaxGlobalLimited(1),
                        P.ability(PA.maintenance, {exact:1}),
                ]))
                .where('C', P.kjsBlock('draco_assembly_grating'))
                .where('D', P.threadingBlocks())
                .where('E', P.kjsBlock('draco_resilient_fusion_glass'))
                .where('F', P.kjsBlock('nyanium_pipe_casing'))
                .where('G', P.coreBlock('advanced_fusion_coil'))
                .where('H', P.coreBlock('threading_controller'))
                .where('I', P.gtBlock('uiv_rotor_holder'))
                .where('J', P.kjsBlock('superdense_assembly_machine_casing'))
                .where('K', P.kjsBlock('superdense_assembly_control_casing'))
                .where('@', P.controller(definition))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/advanced_assembly_casing',
            'gtceu:block/machines/assembler'
        );
});
