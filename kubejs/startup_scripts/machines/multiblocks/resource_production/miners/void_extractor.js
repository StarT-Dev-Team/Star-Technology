GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('void_excavation')
        .category('resource_production')
        .setMaxIOSize(0, 6, 1, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('void_extractor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('void_excavation')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('SSS', ' F ', ' F ', '   ', '   ', '   ')
                .aisle('SSS', 'FGF', 'FGF', ' F ', ' F ', ' F ')
                .aisle('SCS', ' F ', ' F ', '   ', '   ', '   ')
                .whereDict({
                    C: P.controller(definition),
                    S: P.anyOf([
                        P.gtBlock('solid_machine_casing'),
                        P.ability(PA.fluidIn, { max: 1, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 2 }),
                        P.ability(PA.fluidOut, { max: 2, view: 2 }),
                        P.ability(PA.euIn, { max: 2, view: 2 }),
                    ]),
                    F: P.gtBlock('steel_frame'),
                    G: P.gtBlock('steel_gearbox'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/large_miner'
        );
});
