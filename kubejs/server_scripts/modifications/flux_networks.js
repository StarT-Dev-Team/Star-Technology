//requires: fluxnetworks
ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .large_chemical_reactor(id('flux_dust'))
        .itemInputs('32x minecraft:redstone')
        .inputFluids('minecraft:lava 64000')
        .itemOutputs('64x fluxnetworks:flux_dust')
        .duration(2400)
        .EUt(1024)
        .circuit(1);
});

ServerEvents.recipes((event) => {
    const fluxItems = [
        'fluxnetworks:flux_plug',
        'fluxnetworks:flux_point',
        'fluxnetworks:basic_flux_storage',
        'fluxnetworks:herculean_flux_storage',
        'fluxnetworks:gargantuan_flux_storage',
    ];

    fluxItems.forEach((id) => {
        event
            .shapeless(Item.of(id), ['fluxnetworks:flux_configurator', id])
            .modifyResult((grid, result) => {
                let fluxConfigurator = grid.find(Item.of('fluxnetworks:flux_configurator'));

                if (!fluxConfigurator || !fluxConfigurator.nbt || !fluxConfigurator.nbt.FluxConfig) {
                    return Item.of(id);
                }

                let data = fluxConfigurator.nbt.FluxConfig;
                let newData = {
                    FluxData: {
                        limit: data.limit,
                        networkID: data.networkID,
                        priority: data.priority,
                        disableLimit: data.disableLimit,
                        surgeMode: data.surgeMode,
                    },
                };
                let existingItemData = grid.find(Item.of(id)).nbt;

                return Item.of(id).withNBT(existingItemData).withNBT(newData);
            })
            .keepIngredient('fluxnetworks:flux_configurator');
    });
});
