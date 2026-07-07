GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('auto_scavenger')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(3, 10, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('auto_scavenger', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder
                .recipeType('auto_scavenger')
                .workableCasingModel('create:block/brass_casing', 'gtceu:block/machines/rock_crusher');
        });
});
