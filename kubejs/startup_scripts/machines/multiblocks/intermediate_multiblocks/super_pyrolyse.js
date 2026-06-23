GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_pyrolyse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('pyrolyse_oven')
        .machine((holder) => new $CoiledMulti(holder))
        .recipeModifiers([
            GTRecipeModifiers.PYROLYSE_OVEN_OVERCLOCK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:robust_machine_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('ABBBA|BBCBB|BCDCB|BBCBB|ABBBA')
                .aisle('A B A| EEE |BEFEB| EEE |A B A')
                .aisle('A B A| EEE |BEFEB| EEE |A B A')
                .aisle('A B A| EEE |BEFEB| EEE |A B A')
                .aisle('BBBBB|BBBBB|BBFBB|BBBBB|BBBBB')
                .aisle('A B A| EEE |BEFEB| EEE |A B A')
                .aisle('A B A| EEE |BEFEB| EEE |A B A')
                .aisle('A B A| EEE |BEFEB| EEE |A B A')
                .aisle('ABBBA|BBCBB|BC@CB|BBCBB|ABBBA')
                .whereDict({
                    ' ': P.any(),
                    A: P.gtBlock('tungsten_steel_frame'),
                    B: P.anyOf([
                        P.gtBlock('robust_machine_casing'),
                        P.ability(PA.itemIn, { max: 2, prev: 1 }),
                        P.ability(PA.euIn, { max: 1, prev: 1 }),
                        P.ability(PA.itemOut, { max: 2, prev: 1 }),
                        P.ability(PA.fluidIn, { max: 2, prev: 1 }),
                        P.ability(PA.fluidOut, { max: 2, prev: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.gtBlock('extreme_engine_intake_casing'),
                    D: P.ability(PA.muffler),
                    E: P.heatingCoil(),
                    F: P.gtBlock('tungstensteel_pipe_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/pyrolyse_oven'
        )
        .additionalDisplay(global.pyrolyseOvenOverclockDisplay);
});
