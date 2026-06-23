GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('solid_blast_furnace')
        .category('primitive')
        .setMaxIOSize(3, 3, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);

    // event.create('bessemer_blast_furnace')
    //     .category('primitive')
    //     .setMaxIOSize(3, 3, 0, 0)
    //     .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW , FillDirection.LEFT_TO_RIGHT)
    //     .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('solid_blast_furnace', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('solid_blast_furnace')
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('DDD', 'PPP', 'PPP', 'PPP')
                .aisle('DDD', 'P P', 'P P', 'P P')
                .aisle('DDD', 'PCP', 'PPP', 'PPP')
                .whereDict({
                    C: P.controller(definition),
                    P: P.anyOf([
                        P.kjsBlock('high_steam_machine_casing', { min: 15 }),
                        P.ability(PA.itemIn, { max: 2, prev: 1 }),
                        P.ability(PA.itemOut, { max: 2, prev: 1 }),
                    ]),
                    D: P.blocks('gtceu:steel_firebox_casing'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/basic/high_steam_machine_casing',
            'kubejs:block/multiblock/primitive_blast_furnace'
        )
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'rugged_alloyer',
                size: [166, 50],
                background: GuiTextures.BACKGROUND,
                progress: {
                    pos: [71, 16],
                    size: [20, 20],
                    texture: GuiTextures.PROGRESS_BAR_ARROW,
                },
                inputs: [
                    { type: 'item', index: 0, pos: [7, 16], texture: GuiTextures.SLOT },
                    { type: 'item', index: 1, pos: [25, 16], texture: GuiTextures.SLOT },
                    { type: 'item', index: 2, pos: [43, 16], texture: GuiTextures.SLOT },
                ],
                outputs: [
                    { type: 'item', index: 0, pos: [103, 16], texture: GuiTextures.SLOT },
                    { type: 'item', index: 1, pos: [121, 16], texture: GuiTextures.SLOT },
                    { type: 'item', index: 2, pos: [139, 16], texture: GuiTextures.SLOT },
                ],
            })
        );
});
