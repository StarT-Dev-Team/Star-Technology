GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('chemical_skip')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxTooltips(4)
        .setMaxIOSize(6, 6, 6, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('chemical_plant', 'multiblock')
        .machine((holder) => new $CoiledMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['chemical_skip'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.CHEMICAL_REACTOR_OVERCLOCK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:peek_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'FHHHF|TFFFT|T   T|T   T|T   T|FFFFF',
                'HFFFH|FPPPF| FFF | MMM | FFF |FEEEF',
                'HFFFH|FP PF| F F | M M | F F |FEEEF',
                'HFFFH|FPPPF| FFF | MMM | FFF |FEEEF',
                'FHHHF|TFCFT|T   T|T   T|T   T|FFFFF',
            ])
                .whereDict({
                    C: P.controller(definition),
                    F: P.anyOf([
                        P.kjsBlock('peek_casing', { min: 40 }),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    E: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    H: P.block(GCYMBlocks.HEAT_VENT.get()),
                    M: P.heatingCoil(),
                    P: P.block(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()),
                    T: P.gtBlock('tungsten_frame'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/basic/machine_casing_peek',
            'gtceu:block/multiblock/large_chemical_reactor'
        )
        .additionalDisplay(global.chemicalOverclockDisplay);
});
