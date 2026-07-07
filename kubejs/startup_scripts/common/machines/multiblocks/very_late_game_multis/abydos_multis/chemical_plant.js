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
            FactoryBlockPattern.start()
                .aisle('FHHHF', 'TFFFT', 'T   T', 'T   T', 'T   T', 'FFFFF')
                .aisle('HFFFH', 'FPPPF', ' FFF ', ' MMM ', ' FFF ', 'FEEEF')
                .aisle('HFFFH', 'FP PF', ' F F ', ' M M ', ' F F ', 'FEEEF')
                .aisle('HFFFH', 'FPPPF', ' FFF ', ' MMM ', ' FFF ', 'FEEEF')
                .aisle('FHHHF', 'TFCFT', 'T   T', 'T   T', 'T   T', 'FFFFF')
                .where('C', Predicates.controller(Predicates.blocks(definition.get())))
                .where(
                    'F',
                    Predicates.blocks('kubejs:peek_casing')
                        .setMinGlobalLimited(40)
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                )
                .where('E', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
                .where('H', Predicates.blocks(GCYMBlocks.HEAT_VENT.get()))
                .where('M', Predicates.heatingCoils())
                .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))
                .where('T', Predicates.blocks('gtceu:tungsten_frame'))
                .where(' ', Predicates.any())
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/basic/machine_casing_peek',
            'gtceu:block/multiblock/large_chemical_reactor'
        )
        .additionalDisplay(global.chemicalOverclockDisplay);
});
