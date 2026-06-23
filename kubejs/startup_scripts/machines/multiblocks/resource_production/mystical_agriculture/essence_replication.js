GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('essence_replication')
        .category('mystical')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('essence_replicator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('essence_replication')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.CASING_INVAR_HEATPROOF)
        .pattern((definition) =>
            newFactoryBlockPattern([
                'IIIII|     |     |     |IIIII',
                'ISSSI| FGF | FGF | FGF |ISSSI',
                'ISSSI| G G | G G | G G |ISSSI',
                'ISSSI| FGF | FGF | FGF |ISSSI',
                'IICII|     |     |     |IIIII',
            ])
                .whereDict({
                    C: P.controller(definition),
                    I: P.anyOf([
                        P.block(GTBlocks.CASING_INVAR_HEATPROOF.get(), { min: 25 }),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    S: P.block(GTBlocks.FIREBOX_STEEL.get()),
                    F: P.gtBlock('aluminium_frame'),
                    G: P.block('thermal:obsidian_glass'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_heatproof',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
