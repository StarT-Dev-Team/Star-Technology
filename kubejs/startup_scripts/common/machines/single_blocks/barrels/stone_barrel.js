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
        .create('stone_barrel', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder
                .recipeType('stone_barrel')
                .workableCasingModel('minecraft:block/stone', 'gtceu:block/machines/stone_barrel');
        });
});
