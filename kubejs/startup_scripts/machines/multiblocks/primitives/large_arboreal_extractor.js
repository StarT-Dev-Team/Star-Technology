GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('arboreal_extractor')
        .category('primitive')
        .setMaxIOSize(3, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:recipe_category', () => {
    // kjs recipe types don't support addDataInfo
    // we add it here because it's called after recipe_types are registered.
    GTRecipeTypes.get('arboreal_extractor').addDataInfo((tag) => {
        // TODO: localization
        const variant = tag.getString('treeVariant');
        return `Tree variant: ${variant}`;
    });
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('large_arboreal_extractor', 'primitive')
        .machine((holder) => new $ArborealExtractorMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('arboreal_extractor')
        .recipeModifier($StarTRecipeModifiers.ARBOREAL_EXTRACTOR)
        .appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
        .pattern((definition) =>
            newFactoryBlockPattern([
                'BOB|SSS|   |   |   | L |   ',
                'BDB|BGB| G | G | G |LGL| L ',
                'BIB|BCB|SSS|   |   | L |   ',
            ])
                .whereDict({
                    C: P.controller(definition),
                    B: P.block('minecraft:bricks'),
                    O: P.anyOf([P.ability(PA.fluidOut), P.block('minecraft:bricks')]),
                    I: P.anyOf([P.ability(PA.itemIn), P.block('minecraft:bricks')]),
                    S: P.block('minecraft:brick_slab'),
                    L: P.leaves(),
                    G: P.logs(),
                    D: P.block('minecraft:dirt'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel('minecraft:block/bricks', 'gtceu:block/machines/extractor')
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'arboreal_extractor',
                size: [166, 100],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [82, 38],
                    size: [20, 18],
                    texture: GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR,
                },
                inputs: [
                    { type: 'item', index: 0, pos: [34, 38], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 1, pos: [52, 38], texture: GuiTextures.PRIMITIVE_SLOT },
                ],
                outputs: [
                    {
                        type: 'fluid',
                        index: 0,
                        pos: [114, 38],
                        texture: new GuiTextureGroup(
                            GuiTextures.PRIMITIVE_SLOT,
                            GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)
                        ),
                    },
                ],
            })
        );
});
