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
        {type: 'oil_light', source: 'gtceu:bio_chaff', duration: 480},
        {type: 'oil', source: 'gtceu:wood_dust', duration: 320},
        {type: 'oil_heavy', source: '#minecraft:logs_that_burn', duration: 300}
    ].forEach(oil => {
        const { type, source, duration } = oil;
        event.recipes.gtceu.pyrolyse_oven(id(`${type}`))
            .itemInputs(`32x ${source}`)
            .itemOutputs('4x gtceu:ash_dust')
            .outputFluids(`gtceu:${type} 16000`)
            .duration(duration)
            .circuit(3)
            .EUt((type != 'oil_heavy') ? 96 : 384);
    });

    chem(id('bacterial_sludge'))
        .inputFluids('gtceu:fermented_biomass 1000', 'gtceu:bacteria 1000')
        .outputFluids('gtceu:bacterial_sludge 1000')
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(1920);

    const FS = 'start_core:fermentibacter_solvis', XC = 'start_core:xylopseudomonas_creosotica', PS = 'start_core:petrospirillum_solvans', OS = 'start_core:octanivorax_sorbitolens', BC = 'start_core:bituminimonas_combustilis', CV = 'start_core:carbanogasibacter_volatilis';

    [
        {main: FS, primary: 'ethanol', secondary: 'acetic_acid', terniary: 'methanol'},
        {main: XC, primary: 'creosote', secondary: 'naphthalene', terniary: 'phenol'},
        {main: PS, primary: 'benzene', secondary: 'ethane', terniary: 'acetone'},
        {main: OS, primary: 'octane', secondary: 'sorbitol', terniary: 'butane'},
        {main: BC, primary: 'toluene', secondary: 'butadiene', terniary: 'propene'},
        {main: CV, primary: 'methane', secondary: 'butene', terniary: 'ethylene'}
    ].forEach(superSkip => {
        const { main, primary, secondary, terniary } = superSkip;
        event.recipes.gtceu.electrolyzer(id(main.split(':')[1]))
            .inputFluids(`${main} 3000`)
            .outputFluids(`gtceu:${primary} 1000`, `gtceu:${secondary} 1000`, `gtceu:${terniary} 1000`)
            .duration(80)
            .EUt(global.va['iv']);
    });

    [
        {output: 'polyimide', fluidInput: [`${FS} 1000`, `${BC} 1000`, `${PS} 1000`, 'gtceu:nitric_acid 1000'], inputItem: false, voltage: 'uhv'},
        {output: 'polystyrene_sulfate', fluidInput: [`${PS} 1000`, 'gtceu:oxygen 1000'], inputItem: 'gtceu:sulfur_dust', voltage: 'uev'},
        {output: 'polyvinyl_chloride', fluidInput: [`${CV} 1000`, 'gtceu:hydrochloric_acid 1000', 'gtceu:oxygen 1000'], inputItem: false, voltage: 'ev'},
        {output: 'epoxy', fluidInput: [`${BC} 1000`, `${PS} 1000`, 'gtceu:perchloric_acid 1000'], inputItem: false, voltage: 'luv'},
        {output: 'polyvinyl_butyral', fluidInput: [`${BC} 1000`, `${CV} 1000`, `${FS} 1000`, 'gtceu:oxygen 1000'], inputItem: false, voltage: 'iv'},
        {output: 'perfluoroelastomer_rubber', fluidInput: [`${FS} 1000`, `${CV} 2000`, 'gtceu:fluorine 1000'], inputItem: 'gtceu:sulfur_dust', voltage: 'uhv'},
        {output: 'sorbitol', fluidInput: [`${BC} 1000`, `${PS} 2000`], inputItem: 'gtceu:sulfur_dust', voltage: 'uv'},
        {output: 'silicone_rubber', fluidInput: [`${CV} 2000`, 'gtceu:silicic_acid 1000'], inputItem: 'gtceu:sulfur_dust', voltage: 'ev'},
        {output: 'poly_34_ethylenedioxythiophene_polystyrene_sulfate', fluidInput: [`${OS} 1000`, `${PS} 1000`, `${FS} 1000`, 'gtceu:bromine 1000', 'gtceu:sulfuric_acid'], inputItem: false, voltage: 'uiv'},
        {output: 'polyether_ether_ketone', fluidInput: [`${BC} 2000`, `${PS} 1000`, 'gtceu:oxygen 1000'], inputItem: false, voltage: 'uv'},
        {output: 'polybenzimidazole', fluidInput: [`${PS} 1000`, `${XC} 1000`, 'gtceu:ammonia 1000'], inputItem: false, voltage: 'zpm'}
    ].forEach(superSkip => {
        const { output, fluidInput, inputItem, voltage } = superSkip;
        const recipe = event.recipes.gtceu.bacteria_synthesizer(id(`${output}_synthesis`))
            recipe.inputFluids(fluidInput)
            recipe.outputFluids(`gtceu:${output} 1000`)
            recipe.duration(200)
            recipe.EUt(global.va[voltage])
            if(inputItem) {recipe.itemInputs(inputItem)}
    });

});