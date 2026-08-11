StartupEvents.registry('item', (event) => {
    ['ev', 'iv', 'luv', 'zpm', 'uv', 'uhv'].forEach((tier) => {
        event
            .create(`${tier}_photovoltaic_cell`)
            .texture(`kubejs:item/solar/photovoltaic_cells/${tier}_photovoltaic_cell`);

        event
            .create(`damaged_${tier}_photovoltaic_cell`)
            .texture(`kubejs:item/solar/photovoltaic_cells/${tier}_photovoltaic_cell`) // TODO: Add damaged texture
            .tooltip(Text.translatable('item.kubejs.damaged_photovoltaic_cell.tooltip'));
    });
});
