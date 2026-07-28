ServerEvents.recipes((event) => {
    [
        { tier: 'lv', cable: 'tin', rotor: 'tin', casing: 'steam_machine_casing' },
        { tier: 'mv', cable: 'copper', rotor: 'bronze', casing: 'solid_machine_casing' },
        { tier: 'hv', cable: 'gold', rotor: 'steel', casing: 'clean_machine_casing' },
    ].forEach((genData) => {
        const { tier, cable, rotor, casing } = genData;
        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_compound_generator`), ['RSR', 'C@G', 'KKK'], {
                C: `gtceu:${tier}_combustion`,
                S: `gtceu:${tier}_steam_turbine`,
                G: `gtceu:${tier}_gas_turbine`,
                K: Item.of(`gtceu:${cable}_single_cable`),
                '@': Item.of(`gtceu:${casing}`),
                R: Item.of(`gtceu:${rotor}_rotor`),
            })
            .id(`start:shaped/${tier}_compound_generator`);
    });
});
