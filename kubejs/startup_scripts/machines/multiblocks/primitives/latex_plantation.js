GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('latex_plantation')
        .category('primitive')
        .setMaxIOSize(3, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('latex_plantation', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('latex_plantation')
        .appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
        .pattern((definition) =>
            newFactoryBlockPattern([
                'BOB|SSS|###|###|###|#L#|###',
                'BDB|BGB|#G#|#G#|#G#|LGL|#L#',
                'BIB|BCB|SSS|###|###|#L#|###',
            ])
                .whereDict({
                    C: P.controller(definition),
                    B: P.block('minecraft:bricks'),
                    O: P.anyOf([P.ability(PA.fluidOut), P.block('minecraft:bricks')]),
                    I: P.anyOf([P.ability(PA.itemIn), P.block('minecraft:bricks')]),
                    S: P.block('minecraft:brick_slab'),
                    L: P.block('minecraft:jungle_leaves'),
                    G: P.block('minecraft:jungle_log'),
                    D: P.block('minecraft:dirt'),
                    '#': P.any(),
                })
                .build()
        )
        .workableCasingModel('minecraft:block/bricks', 'gtceu:block/machines/extractor')
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'latex',
                size: [166, 100],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [82, 38],
                    size: [20, 18],
                    texture: GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR,
                },
                inputs: [
                    { type: 'item', index: 1, pos: [52, 38], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 0, pos: [34, 38], texture: GuiTextures.PRIMITIVE_SLOT },
                ],
                outputs: [
                    {
                        type: 'fluid',
                        index: 0,
                        pos: [114, 38],
                        texture: GuiTextures.PRIMITIVE_SLOT,
                    },
                ],
            })
        );
});
