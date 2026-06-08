GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('greenhouse_growing')
        .category('mystical')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

    event
        .create('essence_burning')
        .category('mystical')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('mystical_greenhouse', 'simple')
        .tiers(
            GTValues.LV,
            GTValues.MV,
            GTValues.HV,
            GTValues.EV,
            GTValues.IV,
            GTValues.LuV,
            GTValues.ZPM,
            GTValues.UV,
            GTValues.UHV,
            GTValues.UEV,
            GTValues.UIV
        )
        .definition((tier, builder) => {
            return builder.recipeType('greenhouse_growing').workableTieredHullModel('gtceu:block/machines/extruder');
        });

    event
        .create('essence_burner', 'simple')
        .tiers(
            GTValues.LV,
            GTValues.MV,
            GTValues.HV,
            GTValues.EV,
            GTValues.IV,
            GTValues.LuV,
            GTValues.ZPM,
            GTValues.UV,
            GTValues.UHV,
            GTValues.UEV,
            GTValues.UIV
        )
        .definition((tier, builder) => {
            return builder.recipeType('essence_burning').workableTieredHullModel('gtceu:block/machines/cutter');
        });
});
