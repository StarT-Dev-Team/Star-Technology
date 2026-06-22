GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('plant_ore_processing')
        .category('ore_processing')
        .setEUIO('in')
        .setMaxIOSize(1, 6, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('ore_processing_plant', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('plant_ore_processing')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' AAA | FFF | FFF |  F  |     |     |     ',
                'AFFFA|FG GF|F   F| F F | FFF |  F  |  B  ',
                'AFFFA|F P F|F P F|F P F| FPF | FMF | B B ',
                'AFFFA|FG GF|F   F| F F | FFF |  F  |  B  ',
                ' AAA | FCF | FFF |  F  |     |     |     ',
            ])
                .whereDict({
                    C: P.controller(definition),
                    F: P.anyOf(
                        P.block(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get()), //All Hatches have a max
                        P.abilities(PA.itemIn, { max: 2, prev: 1 }),
                        P.abilities(PA.itemOut, { max: 2, prev: 1 }),
                        P.abilities(PA.fluidIn, { max: 2, prev: 1 }),
                        P.abilities(PA.euIn, { max: 2 }),
                        P.abilities(PA.maintenance, { exact: 1 }),
                        P.abilities(PA.parallelHatch, { max: 1 })
                    ),
                    M: P.abilities(PA.muffler),
                    P: P.block(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()),
                    G: P.block(GTBlocks.CASING_TUNGSTENSTEEL_GEARBOX.get()),
                    A: P.block(GTBlocks.FIREBOX_TUNGSTENSTEEL.get()),
                    B: P.gtBlock('bronze_machine_casing'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'kubejs:block/multiblock/primitive_blast_furnace'
        );
});
