GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    ['barrel', 'barrel_composting', 'barrel_transformation'].forEach((name) => {
        event
            .create(name)
            .category('primitive')
            .setEUIO('in')
            .setMaxIOSize(1, 1, 1, 1)
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.BATH);
    });
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('barrel', 'primitive_singleblock')
        .recipeTypes('barrel', 'barrel_composting', 'barrel_transformation')
        .workableCasingModel('minecraft:block/stripped_oak_log', 'gtceu:block/machines/wooden_barrel')
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'wooden_barrel',
                size: [166, 76],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [74, 29],
                    size: [20, 20],
                    texture: GuiTextures.PROGRESS_BAR_BATH,
                },
                inputs: [
                    { type: 'item', index: 0, pos: [31, 20], texture: GuiTextures.PRIMITIVE_SLOT },
                    {
                        type: 'fluid',
                        index: 0,
                        pos: [31, 38],
                        texture: new GuiTextureGroup(
                            GuiTextures.PRIMITIVE_SLOT,
                            GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)
                        ),
                    },
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
