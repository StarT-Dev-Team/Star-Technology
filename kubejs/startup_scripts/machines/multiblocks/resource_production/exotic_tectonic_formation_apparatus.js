GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('exotic_rock_crushing')
        .category('resource_production')
        .setMaxIOSize(3, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('exotic_tectonic_formation_apparatus', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('exotic_rock_crushing')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '   bbb   |         |         |         |         |         |         |         |         ',
                '  bbbbb  |   ddd   |         |         |         |         |         |         |   bbb   ',
                ' bbbbbbb |  ddddd  |         |         |         |         |         |   bbb   |  bbbbb  ',
                ' bbbbbbb |  ddddd  |  e   e  |  e   e  |  e   e  |  e   e  |  e   e  |  eddde  | bbbbbbb ',
                'bbbbbbbbb| ddddddd |    d    |         |         |         |    d    |  ddddd  | bbbbbbb ',
                'bbbbbbbbb|bdddddddb|   dhd   |    h    |    h    |    h    |   dhd   |  ddddd  | bbbbbbb ',
                'bbbbbbbbb|bdddddddb|    d    |         |         |         |    d    |  ddddd  | bbbbbbb ',
                'bbbbbbbbb| bdddddb |  e   e  |  e   e  |  e   e  |  e   e  |  e   e  |  eddde  | bbbbbbb ',
                'bbbbbbbbb| bdddddb |         |         |         |         |         |   ddd   |  bbbbb  ',
                ' bbbbbbb |  bdddb  |    d    |    d    |    d    |    d    |   ddd   |   ddd   |  bbbbb  ',
                ' bbbbbbb |  bbbbb  |   bbb   |    b    |    b    |   bbb   |   bbb   |   bbb   |   bbb   ',
                '  bbbbb  |   bbb   |   bbb   |   bbb   |   b@b   |   bbb   |   bbb   |   bbb   |         ',
            ])
                .whereDict({
                    ' ': P.any(),
                    b: P.anyOf([
                        P.gtBlock('high_temperature_smelting_casing'),
                        P.ability(PA.itemIn, { max: 2, prev: 1 }),
                        P.ability(PA.fluidIn, { max: 2, prev: 1 }),
                        P.ability(PA.itemOut, { max: 2, prev: 1 }),
                        P.ability(PA.fluidOut, { max: 2, prev: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                    ]),
                    d: P.kjsBlock('tritanic_blasting_casing'),
                    e: P.gtBlock('silicon_bronze_frame'),
                    h: P.gtBlock('naquadah_coil_block'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/fusion_reactor'
        );
});
