GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('byteforce_unified_incomparable_logistics_depot', 'multiblock')
        .machine((holder) => new $BulkingThreadedMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['assembler', 'circuit_assembler', 'me_assembler'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULKING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:advanced_assembly_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '  BCCCB       BCCCB  |  BC CB       BC CB  |   CCC         CCC   |                     |                     |                     |   CCC         CCC   |  BC CB       BC CB  |  BCCCB       BCCCB  ',
                ' BBBBBBB     BBBBBBB | BBCDCBB     BBCDCBB | BBCCCBB     BBCCCBB |  BEEEB       BEEEB  |  BEEEB       BEEEB  |  BEEEB       BEEEB  | BBCCCBB     BBCCCBB | BBCDCBB     BBCDCBB | BBBBBBB     BBBBBBB ',
                ' BBBBBBBBBBBBBBBBBBB | BBBBBBBBBBBBBBBBBBB | BFFFFFBBB BBBFFFFFB | BF   FBB   BBF   FB | BF   FBB   BBF   FB | BF   FBB   BBF   FB | BFFFFFBBB BBBFFFFFB | BBBBBBBBBBBBBBBBBBB | BBBBBBBBBBBBBBBBBBB ',
                'BBBBBBBBBBBBBBBBBBBBB|BBBBBBBBBBBBBBBBBBBBB| BFFFFFBBBBBBBFFFFFB | BFGGGFBBBBBBBFGGGFB | BFGGGFBBBHBBBFGGGFB | BFGGGFBBBBBBBFGGGFB | BFFFFFBBBBBBBFFFFFB |BBBBFBBBBBBBBBBBFBBBB|BBBBIBBBBBBBBBBBIBBBB',
                'CBBBBBBBBBBBBBBBBBBBC|CCBBJJBBBBBBBBBJJBBCC|CCFFKKFBBBBBBBFKKFFCC| E G  GJJJJJJJG  G E | E G  GJJJKJJJG  G E | E G  GJJJJJJJG  G E |CCFFKKFBBBBBBBFKKFFCC|CCBBJJBBBBBBBBBJJBBCC|CBBBBBBBBBBBBBBBBBBBC',
                'CBBBBBBBBBBBBBBBBBBBC| DBBJJBBBBBBBBBJJBBD |CCFFKKFFFFFFFFFKKFFCC| E G  GJJJJJJJG  G E | E G  GKKKKKKKG  G E | E G  GJJJJJJJG  G E |CCFFKKFFFFFFFFFKKFFCC| DBBJJBBBBFBBBBJJBBD |CBBBBBBBBBIBBBBBBBBBC',
                'CBBBBBBBBBBBBBBBBBBBC|CCBBJJBBBBBBBBBJJBBCC|CCFFKKFBBBBBBBFKKFFCC| E G  GJJJJJJJG  G E | E G  GJJJKJJJG  G E | E G  GJJJJJJJG  G E |CCFFKKFBBBBBBBFKKFFCC|CCBBJJBBBBBBBBBJJBBCC|CBBBBBBBBBBBBBBBBBBBC',
                'BBBBBBBBBBBBBBBBBBBBB|BBBBBBBBBBBBBBBBBBBBB| BFFFFFBBBBBBBFFFFFB | BFGGGFBBBBBBBFGGGFB | BFGGGFBBB@BBBFGGGFB | BFGGGFBBBBBBBFGGGFB | BFFFFFBBBBBBBFFFFFB |BBBBFBBBBBBBBBBBFBBBB|BBBBIBBBBBBBBBBBIBBBB',
                ' BBBBBBBBBBBBBBBBBBB | BBBBBBBBBBBBBBBBBBB | BFFFFFBBB BBBFFFFFB | BF   FBB   BBF   FB | BF   FBB   BBF   FB | BF   FBB   BBF   FB | BFFFFFBBB BBBFFFFFB | BBBBBBBBBBBBBBBBBBB | BBBBBBBBBBBBBBBBBBB ',
                ' BBBBBBB     BBBBBBB | BBCDCBB     BBCDCBB | BBCCCBB     BBCCCBB |  BEEEB       BEEEB  |  BEEEB       BEEEB  |  BEEEB       BEEEB  | BBCCCBB     BBCCCBB | BBCDCBB     BBCDCBB | BBBBBBB     BBBBBBB ',
                '  BCCCB       BCCCB  |  BC CB       BC CB  |   CCC         CCC   |                     |                     |                     |   CCC         CCC   |  BC CB       BC CB  |  BCCCB       BCCCB  ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('advanced_assembly_casing'),
                        P.ability(PA.itemIn, { max: 20, view: 1 }),
                        P.ability(PA.itemOut, { max: 20, view: 1 }),
                        P.ability(PA.fluidIn, { max: 20, view: 1 }),
                        P.ability(PA.fluidOut, { max: 20, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.kjsBlock('draco_assembly_grating'),
                    D: P.threadingBlocks(),
                    E: P.kjsBlock('draco_resilient_fusion_glass'),
                    F: P.kjsBlock('nyanium_pipe_casing'),
                    G: P.coreBlock('advanced_fusion_coil'),
                    H: P.coreBlock('threading_controller'),
                    I: P.gtBlock('uiv_rotor_holder'),
                    J: P.kjsBlock('superdense_assembly_machine_casing'),
                    K: P.kjsBlock('superdense_assembly_control_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/advanced_assembly_casing',
            'gtceu:block/machines/assembler'
        );
});
