// packmode: hard

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('steeled_blast_furnace', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('primitive_blast_furnace')
        .appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('FAF', 'AAA', 'AAA', 'AAA')
                .aisle('AAA', 'A A', 'A A', 'A A')
                .aisle('FAF', 'A@A', 'AAA', 'AAA')
                .where('A', Predicates.blocks(GTBlocks.CASING_PRIMITIVE_BRICKS.get()))
                .where('#', Predicates.blocks('minecraft:air'))
                .where('F', Predicates.blocks('gtceu:cast_iron_frame'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_primitive_bricks',
            'kubejs:block/multiblock/primitive_blast_furnace'
        )
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'steeled_blast_furnace',
                size: [166, 50],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [80, 16],
                    size: [20, 20],
                    texture: GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR,
                },
                inputs: [
                    { type: 'item', index: 0, pos: [16, 16], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 1, pos: [34, 16], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 2, pos: [52, 16], texture: GuiTextures.PRIMITIVE_SLOT },
                ],
                outputs: [
                    { type: 'item', index: 0, pos: [112, 16], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 1, pos: [130, 16], texture: GuiTextures.PRIMITIVE_SLOT },
                ],
            })
        );
});
