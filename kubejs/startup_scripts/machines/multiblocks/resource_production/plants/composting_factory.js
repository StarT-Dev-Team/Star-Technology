GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('composting_factory')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('composting_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('composting_factory')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:robust_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' ABA | CDC | CDC | CDC | CBC ',
                'AABAA|CE EC|CE EC|CE EC|CCBCC',
                'BBCBB|D F D|D F D|D F D|BBGBB',
                'AABAA|CE EC|CE EC|CE EC|CCBCC',
                ' ABA | CDC | C@C | CDC | CBC ',
            ])
                .whereDict({
                    ' ': P.any(),
                    A: P.gtBlock('tungstensteel_firebox_casing'),
                    B: P.gtBlock('secure_maceration_casing'),
                    C: P.anyOf([
                        P.gtBlock('robust_machine_casing'),
                        P.ability(PA.itemIn, { max: 2, prev: 1 }),
                        P.ability(PA.itemOut, { max: 2, prev: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    D: P.block('thermal:enderium_glass'),
                    E: P.gtBlock('tungstensteel_gearbox'),
                    F: P.gtBlock('tungstensteel_pipe_casing'),
                    G: P.gtBlock('extreme_engine_intake_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/machines/advanced_composter'
        );
});
