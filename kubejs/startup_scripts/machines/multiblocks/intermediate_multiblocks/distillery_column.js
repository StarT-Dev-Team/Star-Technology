GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('distillery_column', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('distillery')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:stable_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '       |       |       |       |       |       ',
                '  PPP  |  CCC  |  CCC  |   C   |       |       ',
                ' PMMMP | CGTGC | CGTGC |  GTG  |  GTG  |  GGG  ',
                ' PMMMP | CT TC | CT TC | CT TC |  T T  |  G G  ',
                ' PMMMP | CGTGC | CGTGC |  GTG  |  GTG  |  GGG  ',
                '  PPP  |  C@C  |  CCC  |   C   |       |       ',
                '       |       |       |       |       |       ',
            ])
                .whereDict({
                    C: P.anyOf([
                        P.gtBlock("stable_machine_casing", { min: 10 }),
                        P.ability(PA.itemIn, { max: 1 }),
                        P.ability(PA.itemOut, { max: 1 }),
                        P.ability(PA.fluidIn, { max: 1 }),
                        P.ability(PA.fluidOut, { max: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    P: P.gtBlock('titanium_firebox_casing'),
                    M: P.gtBlock('heat_vent'),
                    I: P.gtBlock('titanium_pipe_casing'),
                    G: P.gtBlock('black_steel_frame'),
                    T: P.gtBlock('tempered_glass'),
                    ' ': P.any(),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_stable_titanium',
            'gtceu:block/machines/distillery'
        );
});
