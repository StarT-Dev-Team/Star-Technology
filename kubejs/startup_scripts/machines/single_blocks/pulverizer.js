// GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
//     event
//         .create('pulverizer')
//         .category('pulverizer')
//         .setEUIO('in')
//         .setMaxIOSize(2, 2, 0, 0)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.MACERATOR)
//         .setIconSupplier(() => Item.of('gtceu:lv_pulverizer'));
// });

// GTCEuStartupEvents.registry('gtceu:recipe_category', (event) => {
//     event.create('pulverizer_heated').recipeType('pulverizer');
// });

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('pulverizer', 'simple')
        .tiersBetween(GTValues.LV, GTValues.UIV)
        .definition((tier, builder) => {
            builder.recipeType('pulverizer').workableTieredHullModel('gtceu:block/machines/pulverizer');
        });
});
