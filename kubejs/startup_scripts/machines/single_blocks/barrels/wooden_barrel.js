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
        .create('barrel', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder
                .recipeTypes('barrel', 'barrel_composting', 'barrel_transformation')
                .workableCasingModel('minecraft:block/stripped_oak_log', 'gtceu:block/machines/wooden_barrel');
        });
});
