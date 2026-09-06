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
                .whereDict({
                    A: P.block('minecraft:stripped_jungle_wood'),
                    B: P.block('minecraft:mud_bricks'),
                    '#': P.any(),
                    C: P.block('minecraft:campfire'),
                    D: P.controller(definition),
                })
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
