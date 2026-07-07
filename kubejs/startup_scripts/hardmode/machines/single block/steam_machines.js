GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event.create('steam_blaster', 'steam').definition((tier, builder) => {
        builder
            .recipeType('electric_vanilla_blast_furnace')
            .workableCasingModel(
                'gtceu:block/casings/steam/bricked_steel/side',
                'gtceu:block/machines/blasting_single'
            );
    });
});
