GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('stone_barrel')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('stone_barrel', 'primitive_singleblock')
        .recipeType('stone_barrel')
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/machines/stone_barrel')
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'stone_barrel',
                size: [166, 76],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [74, 29],
                    size: [20, 20],
                    texture: GuiTextures.PROGRESS_BAR_BATH,
                },
                inputs: [
                    { type: 'item', index: 0, pos: [33, 20], texture: GuiTextures.PRIMITIVE_SLOT },
                    {
                        type: 'fluid',
                        index: 0,
                        pos: [24, 38],
                        texture: new GuiTextureGroup(
                            GuiTextures.PRIMITIVE_SLOT,
                            GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)
                        ),
                    },
                    {
                        type: 'fluid',
                        index: 1,
                        pos: [42, 38],
                        texture: new GuiTextureGroup(
                            GuiTextures.PRIMITIVE_SLOT,
                            GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)
                        ),
                    },
                ],
                outputs: [{ type: 'item', index: 0, pos: [114, 29], texture: GuiTextures.PRIMITIVE_SLOT }],
            })
        );
});
