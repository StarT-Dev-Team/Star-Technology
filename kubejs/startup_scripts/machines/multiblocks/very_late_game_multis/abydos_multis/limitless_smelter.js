GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('limitless_smelter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $CoiledMulti(holder))
        .recipeTypes([
            'electric_furnace',
            'electric_vanilla_blast_furnace',
            'electric_smoking_furnace',
            'alloy_smelter',
        ])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.MULTI_SMELTER_PARALLEL,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:high_temperature_smelting_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'ABBBA|A B A|A A A|A B A|ABBBA',
                'BBBBB| CCC | CCC | CCC |BBBBB',
                'BBBBB|BC CB|AC CA|BC CB|BBDBB',
                'BBBBB| CCC | CCC | CCC |BBBBB',
                'AB@BA|A B A|A A A|A B A|ABBBA',
            ])
                .whereDict({
                    A: P.gtBlock('tungsten_frame'),
                    B: P.anyOf([
                        P.gtBlock('high_temperature_smelting_casing'),
                        P.ability(PA.itemIn, { max: 8, view: 1 }),
                        P.ability(PA.itemOut, { max: 8, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    ' ': P.any(),
                    C: P.heatingCoil(),
                    D: P.ability(PA.muffler),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/machines/electric_furnace'
        )
        .additionalDisplay(global.multiSmelterParallelDisplay);
});
