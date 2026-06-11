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
        .create('casket', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder
                .recipeType('fermenting')
                .workableCasingModel('gtceu:block/treated_wood_planks', 'gtceu:block/machines/casket');
        });
});
