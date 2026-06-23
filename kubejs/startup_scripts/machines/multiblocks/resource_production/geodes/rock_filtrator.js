GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('rock_filtrator')
        .category('resource_production')
        .setMaxIOSize(2, 9, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('rock_filtrator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('rock_filtrator')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('SFS', 'SGS', 'SGS', 'SFS')
                .aisle('FBF', 'GMG', 'GMG', 'FIF')
                .aisle('SCS', 'SGS', 'SGS', 'SFS')
                .whereDict({
                    C: P.controller(definition),
                    S: P.anyOf([
                        P.gtBlock('solid_machine_casing'),
                        P.ability(PA.fluidIn, { max: 1, view: 1 }),
                        P.ability(PA.itemOut, { max: 3, view: 2 }),
                        P.ability(PA.euIn, { max: 1, view: 1 }),
                    ]),
                    F: P.gtBlock('steel_firebox_casing'),
                    B: P.gtBlock('cupronickel_coil_block'),
                    G: P.gtBlock('tempered_glass'),
                    M: P.kjsBlock('mesh_block'),
                    I: P.ability(PA.itemIn),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
