GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('composting')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('advanced_composter', 'primitive_singleblock')
        .recipeType('composting')
        .workableCasingModel('minecraft:block/stripped_dark_oak_log', 'gtceu:block/machines/advanced_composter')
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'advanced_composter',
                size: [166, 76],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [74, 29],
                    size: [20, 20],
                    texture: GuiTextures.PROGRESS_BAR_ARROW,
                },
                inputs: [{ type: 'item', index: 0, pos: [33, 29], texture: GuiTextures.PRIMITIVE_SLOT }],
                outputs: [{ type: 'item', index: 0, pos: [114, 29], texture: GuiTextures.PRIMITIVE_SLOT }],
            })
        );
});
