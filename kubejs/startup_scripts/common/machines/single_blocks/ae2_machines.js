GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('me_assembler')
        .category('me_assembler')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('me_assembler', 'simple')
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
            builder.recipeType('me_assembler').workableTieredHullModel('gtceu:block/machines/assembler');
        });
});
