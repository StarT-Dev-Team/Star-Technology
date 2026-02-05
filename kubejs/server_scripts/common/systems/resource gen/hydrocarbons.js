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
    Changes to mutation recipes:
    [ ] - Removal of runes and mutagen since this will be accessible prior (CSG being moved earlier)
    [ ] - Reawakening recipe is now: Dormant + Nether Star + Liquid Naquadria
    [ ] - Mutate Bacteria to Random is now: Bacteria + Nether Star + Liquid Naquadria
    [ ] - Mutate Affinities/Stats is now: Bacteria + Nether Star + Enriched Naquadah
    [ ] - Recipes no longer impacted by mutability (helps with tps) and times are increased 12s=>20s for Mutate Affinities, 12s=>32s for Mutate Bacteria to Random, and 24s=>60s for reawaken

    Changes to breeding recipes:
    [ ] - 2B Bacteria(GT fluid) input changed to be 2B of Biostimulating Mixture
    [ ] - Recipe changed to be 90s at ZPM from 40s at UV

    Changes to harvesting recipes:
    [ ] - Recipe Changed to be: 
        Bacteria(a1,a2,a3)(p,c,m) + 2^c Sugar + 100mb * 2^c Biomass + 1B Distilled Water
        =>
        1.5 * p B of a1, 0.75 * p B of a2, 0.25 * p B of a3, 1 * p B of Bacteria(Type), 0.5 * p B of Bacteria(GT Fluid).
        Time changed 12=>8s and made half tier volt

    Other adjacent changes:
    [X] - Biostimulating Mixture to no longer need Mutagen but Fermented Biomass instead
    [X] - Fermented Biomass Pyrolyze Removed and Fermenter recipe made to be 500mb at 10s instead of 100mb at 7.5s
    [X] - Biomass Pyrolyze Removed and more crop to plant ball recipes added
    [ ] - Brewery Bacteria Removed (replaced with method above)
    [X] - Bacterial Sludge Biomass input swapped for Fermented Biomass
    [X] - Overworld Fluid Drilling Removed (Additional Oil Pyrolyze recipes added, Wood Pulp + Biomass, to compensate)
    [ ] - Bacteria Multiblocks made easier to get (UV tier)
    [ ] - Recipes added: 3B Bacteria(Type) Electroylzes to 1B a1, 1B a2, 1B a3
    [ ] - Multiblock added: Bacterial Synthesizer (for super skips)
    [ ] - Current Bacteria Multiblocks revamped (maybe)
    [ ] - Perchloric Chem Plant Skip (for epoxy super skip)
    [ ] - All polymer and rubber chem plant(and plant 2) skips removed (Chem Plant and Bacteria unlocked at the same time), stuff like 1-4 Buta stays in Chem Plant

    Super Skips:
    Key
    Fermentibacter Solvatis = FS
    Xylopseudomonas Creosotica = XC
    Petrospirillum Solvans = PS
    Octanivorax Sorbitolens = OS
    Bituminimonas Combustilis = BC
    Carbanogasibacter Volatilis = CV
    FKKM = Perfluoroelastomer Rubber
    Common Abbreviations such as PVC and PEEK are used
    Skips
    [ ] - Polymide = FS + BC+ PS + Nitric Acid
    [ ] - PSS = PS + Sulfur + Oxygen
    [ ] - PVC = CV + Hydorchloric Acid + Oxygen
    [ ] - Epoxy = BC + PS + Perchloric Acid
    [ ] - PVB = BC + CV + FS + Oxygen
    [ ] - FKKM= FS + "2"CV + Fluorine + Sulfur
    [ ] - SBR = BC + "2"PS +Sulfur
    [ ] - Silicone Rubber = "2"CV + Silicic Acid + Sulfur
    [ ] - PEDOT:PSS= OS + PS + FS + Bromine + Sulfuric Acid
    [ ] - PEEK = "2"BC + PS + Oxygen
    [ ] - PBI = PS + XC + Ammonia
    */

});