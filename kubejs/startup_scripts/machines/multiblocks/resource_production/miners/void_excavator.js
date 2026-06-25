GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('aqueous_void_excavation')
        .category('resource_production')
        .setMaxIOSize(0, 0, 1, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('void_excavator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['void_excavation', 'aqueous_void_excavation'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' SFS |  E  |  E  |  E  |     |     |     |     |     |     |     |     ',
                'SSSSS| ERE | EGE |  E  |  E  |  E  |  E  |     |     |     |     |     ',
                'FSSSF|ERRRE|EGHGE|EEGEE| EGE | EGE | EGE |  E  |  E  |  E  |  E  |  E  ',
                'SSSSS| ERE | EGE |  E  |  E  |  E  |  E  |     |     |     |     |     ',
                ' SCS |  E  |  E  |  E  |     |     |     |     |     |     |     |     ',
            ])
                .whereDict({
                    C: P.controller(definition),
                    S: P.anyOf([
                        P.gtBlock('robust_machine_casing'),
                        P.ability(PA.fluidIn, { max: 1, view: 1 }),
                        P.ability(PA.itemIn, { max: 4, view: 1 }),
                        P.ability(PA.fluidOut, { max: 4, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    F: P.gtBlock('tungstensteel_firebox_casing'),
                    R: P.gtBlock('rtm_alloy_coil_block'),
                    E: P.gtBlock('tungsten_steel_frame'),
                    G: P.gtBlock('tungstensteel_gearbox'),
                    H: P.gtBlock('stress_proof_casing'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/large_miner'
        );
});
