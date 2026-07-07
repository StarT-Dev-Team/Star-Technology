StartupEvents.registry('item', (event) => {
    ['ev', 'iv', 'luv', 'zpm', 'uv', 'uhv'].forEach((tier) => {
        event.create(`${tier}_energy_core`).texture(`kubejs:item/solar/energy_cores/${tier}_energy_core`);
    });
});
