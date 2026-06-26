GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('fermenting')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('casket', 'primitive_singleblock')
        .recipeType('fermenting')
        .workableCasingModel('gtceu:block/treated_wood_planks', 'gtceu:block/machines/casket')
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'casket',
                size: [166, 76],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [74, 29],
                    size: [20, 20],
                    texture: GuiTextures.PROGRESS_BAR_ARROW,
                },
                inputs: [
                    { type: 'item', index: 0, pos: [15, 29], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 1, pos: [33, 29], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 2, pos: [51, 29], texture: GuiTextures.PRIMITIVE_SLOT },
                ],
                outputs: [
                    { type: 'item', index: 0, pos: [114, 20], texture: GuiTextures.PRIMITIVE_SLOT },
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
