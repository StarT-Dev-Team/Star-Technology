GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event.create('kiln').category('primitive').setMaxIOSize(2, 1, 0, 0).setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('gtceu:kiln', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('kiln')
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('BBB', 'BBB', 'BBB', '#B#', '#A#')
                .aisle('BBB', 'BCB', 'B#B', 'B#B', 'A#A')
                .aisle('BBB', 'BDB', 'BBB', '#B#', '#A#')
                .where('A', Predicates.blocks('minecraft:stripped_jungle_wood'))
                .where('B', Predicates.blocks('minecraft:mud_bricks'))
                .where('#', Predicates.any())
                .where('C', Predicates.blocks('minecraft:campfire'))
                .where('D', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('minecraft:block/mud_bricks', 'gtceu:block/multiblock/primitive_blast_furnace')
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'kiln',
                size: [166, 100],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [77, 38],
                    size: [20, 18],
                    texture: GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR,
                },
                inputs: [
                    { type: 'item', index: 0, pos: [52, 29], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 1, pos: [52, 47], texture: GuiTextures.PRIMITIVE_SLOT },
                ],
                outputs: [{ type: 'item', index: 0, pos: [104, 38], texture: GuiTextures.PRIMITIVE_SLOT }],
            })
        );
});
