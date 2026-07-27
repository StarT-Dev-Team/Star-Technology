GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_implosion_compressor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('implosion_compressor')
        .machine((holder) => new $CoiledMulti(holder))
        .recipeModifiers([GTRecipeModifiers.MULTI_SMELTER_PARALLEL, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('gtceu:stress_proof_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'AABAA|CBBBC|CBDBC|CBBBC|AABAA',
                'ABBBA|BEEEB|BE#EB|BEEEB|ABBBA',
                'BBBBB|BE#EB|D###D|BE#EB|BBBBB',
                'ABBBA|BEEEB|BE#EB|BEEEB|ABBBA',
                'AABAA|CBBBC|CB@BC|CBBBC|AABAA',
            ])
                .whereDict({
                    A: P.gtBlock('steel_firebox_casing'),
                    B: P.anyOf([
                        P.gtBlock('stress_proof_casing', { min: 5 }),
                        P.ability(PA.itemIn, { view: 1 }),
                        P.ability(PA.itemOut, { view: 1 }),
                        P.ability(PA.fluidIn, { view: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.gtBlock('stainless_steel_frame'),
                    D: P.heatingCoil(),
                    E: P.gtBlock('steel_pipe_casing'),
                    '#': P.air(),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/implosion_compressor'
        )
        .additionalDisplay(global.multiSmelterParallelDisplay);
});
