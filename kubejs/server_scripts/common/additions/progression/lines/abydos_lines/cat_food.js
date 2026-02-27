ServerEvents.recipes(event => {

    const id = global.id;

    /*
    Mixer 5 fish (cod or salmon) + wheat + carrot = cat food dough
    Bender cat food dough = cat food sheet
    Extruder cat food sheet + kibbles extrusion mold [NC] = wet kibbles
    VCRC wet kibbles + paper = dry cat food bag

    Shaped 3 tin plate = 3 tin can
    Compressor 4 mince meat = meat chunk
    Mixer 2 flour + 2 meat chunk + 1b water = 1b meaty gravy
    Extruder cat food sheet + chunks extrusion mold [NC] = wet cat food chunks
    Canner wet cat food chunks + tin can + 250mb meaty gravy = wet cat food can
    */

    const mixer = event.recipes.gtceu.mixer;
    const bender = event.recipes.gtceu.bender;
    const extruder = event.recipes.gtceu.extruder;
    const vcr = event.recipes.gtceu.vacuum_chemical_reaction_chamber;
    const compressor = event.recipes.gtceu.compressor;
    const canner = event.recipes.gtceu.canner;
    const doughFish = ["cod", "salmon"];

    doughFish.forEach(fish => {
        mixer(id(`cat_food_dough_${fish}`))
            .itemInputs(`5x minecraft:${fish}`, `minecraft:wheat`, `minecraft:carrot`)
            .itemOutputs(`kubejs:cat_food_dough`)
            .duration(30*20)
            .EUt(GTValues.VHA[GTValues.HV]);
    })

    bender(id(`cat_food_sheet`))
        .itemInputs(`kubejs:cat_food_dough`)
        .itemOutputs(`kubejs:cat_food_sheet`)
        .duration(40)
        .EUt(GTValues.VHA[GTValues.LV]);

    extruder(id(`wet_kibbles`))
        .notConsumable(`kubejs:kibbles_extrusion_mold`)
        .itemInputs(`kubejs:cat_food_sheet`)
        .itemOutputs(`kubejs:wet_kibbles`)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.MV]);

    vcr(id(`dry_cat_food_bag`))
        .itemInputs(`kubejs:wet_kibbles`, "minecraft:paper")
        .itemOutputs(`kubejs:dry_cat_food_bag`)
        .outputFluids(`minecraft:water 100`)
        .duration(60*20)
        .EUt(GTValues.VA[GTValues.IV])
        .vacuumLevel(90);

    event.shaped(`kubejs:tin_can`, [
        `   `,
        `P P`,
        ` P `
    ], {
        P: `gtceu:tin_plate`
    }).id(`start:shaped/tin_can`);

    compressor(id(`meat_chunk`))
        .itemInputs(`4x gtceu:meat_dust`)
        .itemOutputs(`kubejs:meat_chunk`)
        .duration(15*20)
        .EUt(2);

    mixer(id(`meaty_gravy`))
        .itemInputs(`2x gtceu:wheat_dust`, `2x kubejs:meat_chunk`)
        .inputFluids(`minecraft:water 1000`)
        .outputFluids(`gtceu:meaty_gravy 1000`)
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.EV]);
    
    extruder(id(`wet_cat_food_chunks`))
        .notConsumable(`kubejs:chunks_extrusion_mold`)
        .itemInputs(`kubejs:meat_chunk`)
        .itemOutputs(`kubejs:wet_cat_food_chunks`)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.MV]);

    canner(id(`wet_cat_food_can`))
        .itemInputs(`kubejs:tin_can`, `kubejs:wet_cat_food_chunks`)
        .inputFluids(`gtceu:meaty_gravy 250`)
        .itemOutputs(`kubejs:wet_cat_food_can`)
        .duration(60*20)
        .EUt(GTValues.VA[GTValues.IV]);
})