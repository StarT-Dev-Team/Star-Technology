// packmode: hard

GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('rugged_alloyer')
        .category('primitive')
        .setMaxIOSize(3, 2, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('rugged_alloyer', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('rugged_alloyer')
        .appearanceBlock(() => Block.getBlock('kubejs:reinforced_stone_bricks'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('AAA', 'AAA', 'AAA', 'AAA')
                .aisle('AAA', 'A#A', 'A#A', 'A#A')
                .aisle('AAA', 'ABA', 'AAA', 'AAA')
                .where('A', Predicates.blocks('kubejs:reinforced_stone_bricks'))
                .where('#', Predicates.blocks('minecraft:air'))
                .where('B', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('kubejs:block/hardmode/reinforced_stone_bricks', 'gtceu:block/machines/electric_furnace')
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'rugged_alloyer',
                size: [166, 50],
                background: GuiTextures.BACKGROUND,
                progress: {
                    pos: [80, 16],
                    size: [20, 20],
                    texture: GuiTextures.PROGRESS_BAR_ARROW,
                },
                inputs: [
                    { type: 'item', index: 0, pos: [16, 16], texture: GuiTextures.SLOT },
                    { type: 'item', index: 1, pos: [34, 16], texture: GuiTextures.SLOT },
                    { type: 'item', index: 2, pos: [52, 16], texture: GuiTextures.SLOT },
                ],
                outputs: [
                    { type: 'item', index: 0, pos: [112, 16], texture: GuiTextures.SLOT },
                    { type: 'item', index: 1, pos: [130, 16], texture: GuiTextures.SLOT },
                ],
            })
        );
});
