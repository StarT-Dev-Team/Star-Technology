StartupEvents.registry('item', (event) => {
    ['ev', 'iv', 'luv', 'zpm', 'uv', 'uhv'].forEach((tier) => {
        event
            .create(`${tier}_photovoltaic_cell`)
            .texture(`kubejs:item/solar/photovoltaic_cells/${tier}_photovoltaic_cell`);
    });
});
