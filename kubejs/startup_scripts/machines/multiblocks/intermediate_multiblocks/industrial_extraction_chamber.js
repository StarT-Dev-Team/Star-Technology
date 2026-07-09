GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('industrial_extraction_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('extractor')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '       |       |       |       |       ',
                '  PPP  |  CCC  |  CGC  |   G   |       ',
                ' PMMMP | C   C | C   C |       |   G   ',
                ' PMIMP | C I C | G I G | G I G |  GGG  ',
                ' PMMMP | C   C | C   C |       |   G   ',
                '  PPP  |  C@C  |  CGC  |   G   |       ',
                '       |       |       |       |       ',
            ])
                .whereDict({
                    C: P.anyOf([
                        P.block(GTBlocks.CASING_STAINLESS_CLEAN.get(), { min: 10 }),
                        P.ability(PA.itemIn, { max: 1 }),
                        P.ability(PA.itemOut, { max: 1 }),
                        P.ability(PA.fluidIn, { max: 1 }),
                        P.ability(PA.fluidOut, { max: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    P: P.kjsBlock('stainless_steel_firebox_casing'),
                    M: P.gtBlock('heatproof_machine_casing'),
                    I: P.gtBlock('titanium_pipe_casing'),
                    G: P.gtBlock('black_steel_frame'),
                    ' ': P.any(),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/extractor'
        );
});
