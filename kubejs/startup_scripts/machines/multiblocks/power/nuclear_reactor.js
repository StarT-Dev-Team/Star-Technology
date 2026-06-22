GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('nuclear_fission')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(1, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('nuclear_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('nuclear_fission')
        .generator(true)
        .regressWhenWaiting(false)
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH)
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            newFactoryBlockPattern([
                'HHHXHHH| VHGHV | VHGHV | VHGHV |HHHHHHH',
                ' VHHHV |  E E  |  H H  |  E E  | VHHHV ',
                ' VHHHV |  HPH  |  G G  |  HPH  | VHHHV ',
                ' VHHHV |  EPE  |  HPH  |  EPE  | VHHHV ',
                'HHHHHHH| VHPHV | VHPHV | VHPHV |HHHHHHH',
                ' VHHHV |  EPE  |  HPH  |  EPE  | VHHHV ',
                ' VHHHV |  HPH  |  G G  |  HPH  | VHHHV ',
                ' VHHHV |  E E  |  H H  |  E E  | VHHHV ',
                'HHH@HHH| VHGHV | VHGHV | VHGHV |HHHHHHH',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    H: P.anyOf([
                        P.gtBlock('gtceu:high_temperature_smelting_casing')
                            .or(P.ability(PA.itemIn, { max: 2, prev: 1 }).setMaxGlobalLimited(2).setPreviewCount(1))
                            .or(P.ability(PA.itemOut, { max: 2, prev: 1 }).setMaxGlobalLimited(2).setPreviewCount(1))
                            .or(P.ability(PA.maintenance, { exact: 1 }).setExactLimit(1))
                            .or(P.ability(PA.fluidIn, { max: 2, prev: 1 }).setMaxGlobalLimited(2).setPreviewCount(1))
                            .or(P.ability(PA.fluidOut, { max: 2, prev: 1 }).setMaxGlobalLimited(2).setPreviewCount(1))
                            .or(P.ability(PA.parallelHatch, { max: 1 }).setMaxGlobalLimited(1)),
                    ]),
                    V: P.gtBlock('heat_vent'),
                    G: P.gtBlock('laminated_glass'),
                    P: P.gtBlock('tungstensteel_pipe_casing'),
                    E: P.kjsBlock('pallaridium_engine_intake_casing'),
                    X: P.abilityOr([P.ability(PA.euOut), P.ability(PA.laserOut)]),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
