const tiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv'];

ServerEvents.recipes((event) => {
    const id = global.id;

    tiers.forEach((tier) => {
        event.recipes.gtceu
            .assembler(id(`${tier}_universal_circuit`))
            .circuit(5)
            .itemInputs(`#gtceu:circuits/${tier}`)
            .itemOutputs(`kubejs:${tier}_universal_circuit`)
            .EUt(4)
            .duration(1);
    });
});

ServerEvents.tags('item', (event) => {
    tiers.forEach((tier) => {
        event.add(`gtceu:circuits/${tier}`, `kubejs:${tier}_universal_circuit`);
    });
});
