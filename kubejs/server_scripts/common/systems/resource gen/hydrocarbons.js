ServerEvents.recipes(event => {
    const id = global.id;

    const chem = event.recipes.gtceu.large_chemical_reactor || event.recipes.gtceu.chemical_reactor;

    event.recipes.gtceu.fermenter(id('fermented_biomass'))
        .inputFluids('gtceu:biomass 500')
        .outputFluids('gtceu:fermented_biomass 500')
        .duration(200)
        .EUt(2);

    global.farmCropList.forEach(crop => {
        const cropName = crop.name;
        const cropIDArr = cropName.split(':');

        blacklist = ['wheat', 'carrot', 'potato', 'beetroot', 'sugar_cane', 'cactus'];

        if(blacklist.includes(cropIDArr[1])) return;

        event.recipes.gtceu.compressor(id(`plant_ball_from_${cropIDArr[0]}_${cropIDArr[1]}`))
            .itemInputs(`8x ${cropName}`)
            .itemOutputs('gtceu:plant_ball')
            .duration(300)
            .EUt(2);
    });

    [
        {type: 'oil_light', source: 'gtceu:bio_chaff'},
        {type: 'oil', source: 'gtceu:wood_dust'},
        {type: 'oil_heavy', source: '#minecraft:logs_that_burn'}
    ].forEach(oil => {
        const { type, source } = oil;
        event.recipes.gtceu.pyrolyse_oven(id(`${type}`))
            .itemInputs(`32x ${source}`)
            .itemOutputs('4x gtceu:ash_dust')
            .outputFluids(`gtceu:${type} 16000`)
            .duration(100)
            .circuit(3)
            .EUt(128);
    });

    chem(id('bacterial_sludge'))
        .inputFluids('gtceu:fermented_biomass 1000', 'gtceu:bacteria 1000')
        .outputFluids('gtceu:bacterial_sludge 1000')
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(1920);
    
    /*
    [ ] - Bacteria Multiblocks made easier to get (UV tier)
    [ ] - Recipes added: 3B Bacteria(Type) Electroylzes to 1B a1, 1B a2, 1B a3
    [ ] - Multiblock added: Bacterial Synthesizer (for super skips)
    [ ] - Current Bacteria Multiblocks revamped (maybe)
    [ ] - Perchloric Chem Plant Skip (for epoxy super skip)
    [ ] - All polymer and rubber chem plant(and plant 2) skips removed (Chem Plant and Bacteria unlocked at the same time), stuff like 1-4 Buta stays in Chem Plant
    */

});