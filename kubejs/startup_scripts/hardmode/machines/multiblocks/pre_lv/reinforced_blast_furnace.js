GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('reinforced_blast_furnace')
        .category('primitive')
        .setMaxIOSize(3, 3, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('reinforced_blast_furnace', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('reinforced_blast_furnace')
        .appearanceBlock(() => Block.getBlock('dustrial_decor:cinder_block'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('DDD', 'PPP', 'PPP', 'PPP')
                .aisle('DDD', 'P P', 'P P', 'P P')
                .aisle('DDD', 'PCP', 'PPP', 'PPP')
                .where('C', Predicates.controller(Predicates.blocks(definition.get())))
                .where('P', Predicates.blocks('dustrial_decor:cinder_block'))
                .where('D', Predicates.blocks('dustrial_decor:cinder_bricks'))
                .where(' ', Predicates.blocks('minecraft:air'))
                .build()
        )
        .workableCasingModel('dustrial_decor:block/cinder_block_side', 'gtceu:block/multiblock/primitive_blast_furnace')
        .editableUI(
            global.ui_builder({
                group: 'primitive',
                name: 'reinforced_blast_furnace',
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
