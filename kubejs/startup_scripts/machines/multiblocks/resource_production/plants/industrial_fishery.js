GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('industrial_fishery')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('industrial_fishery', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_fishery')
        .appearanceBlock(() => Block.getBlock('gtceu:clean_machine_casing'))
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .pattern((definition) =>
            newFactoryBlockPattern([
                'A BBB A|A BBB A|A BBB A|A BBB A|A BBB A|AABBBAA',
                ' BBBBB | BCCCB | BCCCB | BCCCB | BCCCB |ABDDDBA',
                'BBBBBBB|BCCCCCB|BCCCCCB|BCCCCCB|BCCCCCB|BDDDDDB',
                'BBBBBBB|BCCCCCB|BCCCCCB|BCCCCCB|BCCCCCB|BDDDDDB',
                'BBBBBBB|BCCCCCB|BCCCCCB|BCCCCCB|BCCCCCB|BDDDDDB',
                ' BBBBB | BCCCB | BCCCB | BCCCB | BCCCB |ABDDDBA',
                'A BBB A|A B@B A|A BBB A|A BBB A|A BBB A|AABBBAA',
            ])
                .whereDict({
                    A: P.gtBlock('blue_steel_frame'),
                    ' ': P.any(),
                    B: P.anyOf([
                        P.gtBlock('clean_machine_casing'),
                        P.ability(PA.itemin, { max: 5, prev: 1 }),
                        P.ability(PA.itemOut, { max: 2, prev: 1 }),
                        P.ability(PA.fluidIn, { max: 5, prev: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.block('minecraft:water'),
                    D: P.gtBlock('laminated_glass'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/centrifuge'
        );
});
