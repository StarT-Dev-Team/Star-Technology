GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_cutter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('cutter')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:beryllium_bronze_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('AAAAA', 'AAAAA', 'AAAAA')
                .aisle('AAAAA', 'ABCCA', 'AADDA')
                .aisle('AAAAA', 'A@DDA', 'AADDA')
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('beryllium_bronze_casing', { min: 5 }),
                        P.ability(PA.itemIn, { view: 1 }),
                        P.ability(PA.itemOut, { view: 1 }),
                        P.ability(PA.fluidIn, { view: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { max: 1 }),
                    ]),
                    B: P.gtBlock('steel_pipe_casing'),
                    C: P.gtBlock('stainless_steel_gearbox'),
                    D: P.gtBlock('tempered_glass'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(`kubejs:block/casings/large_cubes/beryllium_bronze_casing`, `gtceu:block/machines/cutter`);
});
