ServerEvents.recipes((event) => {
    const id = global.id;

    // Controller Block
    event
        .shaped('start_core:large_arboreal_extractor', ['RSR', 'PGP', 'BTB'], {
            R: 'gtceu:iron_rod',
            S: 'gtceu:lead_spring',
            P: 'gtceu:iron_plate',
            G: '#forge:glass',
            B: 'minecraft:bricks',
            T: 'thermal:redstone_servo',
        })
        .id('start:shaped/large_arboreal_extractor');

    event.recipes.gtceu
        .barrel(id('resin_to_glue'))
        .itemInputs('gtceu:charcoal_dust')
        .inputFluids('thermal:resin 500')
        .outputFluids('gtceu:glue 200')
        .duration(200);

    event.recipes.gtceu
        .mixer(id('resin_to_glue'))
        .itemInputs('#forge:dusts/coal') // coal, charcoal, carbon
        .inputFluids('thermal:resin 500')
        .outputFluids('gtceu:glue 500')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu
        .centrifuge(id('sap_to_sugar'))
        .inputFluids('thermal:sap 1000')
        .itemOutputs('8x minecraft:sugar')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.LV]);
});
