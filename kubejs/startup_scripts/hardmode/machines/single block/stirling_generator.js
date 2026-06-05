// packmode: hard

GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('stirling_generator')
        .category('primitive')
        .setEUIO('out')
        .setMaxIOSize(1, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('stirling_generator', 'generator')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder
                .recipeType('stirling_generator')
                .regressWhenWaiting(false)
                .simpleGeneratorModel('gtceu:block/generators/steam_turbine');
        });
});
