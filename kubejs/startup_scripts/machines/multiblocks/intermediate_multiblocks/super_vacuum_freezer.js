GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_vacuum_freezer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('vacuum_freezer')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:frostproof_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'AAAAA|AAAAA|AABAA|AABAA|AAAAA',
                'AAAAA|ACCCA|AC#CA|AC#CA|AAAAA',
                'AAAAA|AC#CA|B###B|B###B|AAAAA',
                'AAAAA|AA@AA|ADDDA|ADDDA|AAAAA',
            ])
                .whereDict({
                    A: P.anyOf([
                        P.gtBlock('frostproof_machine_casing', { min: 5 }),
                        P.ability(PA.itemIn, { prev: 1 }),
                        P.ability(PA.itemOut, { prev: 1 }),
                        P.ability(PA.fluidIn, { prev: 1 }),
                        P.ability(PA.fluidOut, { prev: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    B: P.gtBlock('extreme_engine_intake_casing'),
                    C: P.gtBlock('tungstensteel_pipe_casing'),
                    '#': P.air(),
                    '@': P.controller(definition),
                    D: P.gtBlock('tempered_glass'),
                })
                .build()
        )
        .workableCasingModel(
            `gtceu:block/casings/solid/machine_casing_frost_proof`,
            `gtceu:block/multiblock/vacuum_freezer`
        );
});
