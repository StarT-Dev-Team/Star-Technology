GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('industrial_brewing_station', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('brewery')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:stable_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([ //
                '       |       |       |       ',
                ' GCCCG | GTTTG | GTTTG |  GGG  ',
                ' CPPPC | T   T | T   T | GCCCG ',
                ' CPMPC | T M T | T M T | GCCCG ',
                ' CPPPC | T   T | T   T | GCCCG ',
                ' GC@CG | GTTTG | GTTTG |  GGG  ',
                '       |       |       |       ',
            ])
                .whereDict({ //
                    C: P.anyOf([
                        P.gtBlock("titanium_firebox_casing", { min: 6 }),
                        P.ability(PA.itemIn, { max: 1 }),
                        P.ability(PA.itemOut, { max: 1 }),
                        P.ability(PA.fluidIn, { max: 1 }),
                        P.ability(PA.fluidOut, { max: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    P: P.gtBlock('stable_machine_casing'),
                    M: P.gtBlock('heat_vent'),
                    G: P.gtBlock('black_steel_frame'),
                    T: P.gtBlock('laminated_glass'),
                    ' ': P.any(),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel( //
            'gtceu:block/casings/solid/machine_casing_stable_titanium',
            'gtceu:block/machines/brewery'
        );
});
