GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('rock_sifter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('rock_filtrator')
        .appearanceBlock(GCYMBlocks.CASING_WATERTIGHT)
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .pattern((definition) =>
            newFactoryBlockPattern([
                '  BBB  |  CDC  |  CDC  |  CDC  |  CDC  |  CDC  |  BBB  ',
                ' BDDDB | DEFED | DEFED | DEFED | DEFED | DEFED | BDDDB ',
                'BDDDDDB|CE*G*EC|CEGGGEC|CEH*HEC|CEIIIEC|CE***EC|BDDDDDB',
                'BDDJDDB|DFGGGFD|DFGGGFD|DF*H*FD|DFIIIFD|DF*G*FD|BDDKDDB',
                'BDDDDDB|CE*G*EC|CEGGGEC|CEH*HEC|CEIIIEC|CE***EC|BDDDDDB',
                ' BDDDB | DEFED | DEFED | DEFED | DEFED | DEFED | BDDDB ',
                '  BBB  |  CDC  |  CDC  |  C@C  |  CDC  |  CDC  |  BBB  ',
            ])
                .whereDict({
                    ' ': P.any(),
                    '*': P.air(),
                    B: P.gtBlock('tungstensteel_firebox_casing'),
                    C: P.gtBlock('laminated_glass'),

                    D: P.anyOf([
                        P.gtBlock('watertight_casing'),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1, prev: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.fluidIn, { max: 2, prev: 1 }),
                    ]),
                    E: P.gtBlock('rtm_alloy_coil_block'),
                    F: P.gtBlock('extreme_engine_intake_casing'),
                    G: P.gtBlock('tungstensteel_pipe_casing'),
                    H: P.gtBlock('tungstensteel_gearbox'),
                    I: P.gtBlock('crushing_wheels'),
                    J: P.ability(PA.itemOut),
                    K: P.ability(PA.itemIn),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/watertight_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
