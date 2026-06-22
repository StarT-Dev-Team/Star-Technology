GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('folding_akreyrium_stabiliser')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSound(GTSoundEntries.MACERATOR)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('folding_akreyrium_stabiliser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('folding_akreyrium_stabiliser')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '                 |        B        |        B        |        B        |        B        |        B        |                 ',
                '       BBB       |        B        |     B     B     |     BCCCCCB     |     B     B     |        B        |       BBB       ',
                '      BXXXB      |     B     B     |    EEE   EEE    |FDDFFFE   EFFFDDF|    EEE   EEE    |     B     B     |      BXXXB      ',
                '      BXGXB      |     BC G CB     |FDDFFFE G EFFFDDF|MGGGGGGGGGGGGGGGM|FDDFFFE G EFFFDDF|     BC G CB     |      BXGXB      ',
                '      BXXXB      |     B     B     |    EEE   EEE    |FDDFFFE G EFFFDDF|    EEE   EEE    |     B     B     |      BXXXB      ',
                '       BBB       |        B        |     B     B     |     BCCGCCB     |     B     B     |        B        |       BBB       ',
                '                 |        B        |        B        |        @        |        B        |        B        |                 ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.gtBlock('robust_machine_casing'),
                    C: P.gtBlock('hastelloy_x_frame'),
                    D: P.gtBlock('fusion_glass'),
                    M: P.gtBlock('ulv_input_bus'),
                    X: P.anyOf([
                        P.gtBlock('fusion_glass'),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.abilityOr([PA.itemOut, PA.fluidIn, PA.fluidOut]),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    E: P.gtBlock('high_power_casing'),
                    F: P.gtBlock('computer_casing'),
                    G: P.gtBlock('advanced_computer_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/hpca'
        );
});
