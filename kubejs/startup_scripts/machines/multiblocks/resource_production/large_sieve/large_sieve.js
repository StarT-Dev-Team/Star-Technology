GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('large_sieve')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(1, 6, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('large_sieve', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_sieve')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .pattern((definition) =>
            newFactoryBlockPattern([
                'TTOTT|FTTTF|F   F|F   F|F   F|F   F|TTTTT',
                'TPPPT|TTFTT| SSS |  S  |  S  | SSS |TTFTT',
                'TFPFT|TFPFT| SPS | S S | S S | SPS |TFIFT',
                'TTTTT|TTFTT| SSS |  S  |  S  | SSS |TTFTT',
                'TTCTT|FTTTF|F   F|F   F|F   F|F   F|TTTTT',
            ])
                .whereDict({
                    C: P.controller(definition),
                    T: P.anyOf([
                        P.block(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                            .or(P.ability(PA.maintenance, { exact: 1 }))
                            .or(P.ability(PA.parallelHatch, { max: 1 }))
                            .or(P.ability(PA.euIn, { max: 2 })),
                    ]),
                    S: P.block(GCYMBlocks.CASING_STRESS_PROOF.get()),
                    F: P.gtBlock('tungsten_steel_frame'),
                    P: P.block(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()),
                    I: P.ability(PA.itemIn),
                    O: P.ability(PA.itemOut),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
