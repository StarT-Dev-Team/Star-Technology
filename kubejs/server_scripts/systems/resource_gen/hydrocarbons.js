ServerEvents.recipes((event) => {
    const id = global.id;

    // Chem Cracking Removal
    event.remove({ id: /gtceu:chemical_reactor\/lightly.*crack.*/ });
    event.remove({ id: /gtceu:chemical_reactor\/severely.*crack.*/ });
    event.remove({ id: /gtceu:chemical_reactor\/hydro_crack.*/ });
    event.remove({ id: /gtceu:chemical_reactor\/steam_crack.*/ });
    event.remove({ id: /gtceu:large_chemical_reactor\/steam_crack.*/ });
    event.remove({ id: /gtceu:large_chemical_reactor\/hydro_crack.*/ });
    event.remove({ id: /gtceu:large_chemical_reactor\/lightly.*crack.*/ });
    event.remove({ id: /gtceu:large_chemical_reactor\/severely.*crack.*/ });

    event.recipes.gtceu
        .fermenter(id('fermented_biomass'))
        .inputFluids('gtceu:biomass 500')
        .outputFluids('gtceu:fermented_biomass 500')
        .duration(200)
        .EUt(2);

    global.farmCropList.forEach((crop) => {
        const cropName = crop.name;
        const cropIDArr = cropName.split(':');

        const blacklist = ['wheat', 'carrot', 'potato', 'beetroot', 'sugar_cane', 'cactus', 'chorus_fruit'];

        if (blacklist.includes(cropIDArr[1])) return;

        event.recipes.gtceu
            .compressor(id(`plant_ball_from_${cropIDArr[0]}_${cropIDArr[1]}`))
            .itemInputs(`8x ${cropName}`)
            .itemOutputs('gtceu:plant_ball')
            .duration(300)
            .EUt(2);
    });

    [
        { type: 'oil_light', source: 'gtceu:wood_dust', duration: 480 },
        { type: 'oil', source: 'gtceu:bio_chaff', duration: 320 },
        { type: 'oil_medium', source: 'gtceu:plant_ball', duration: 450 },
        { type: 'oil_heavy', source: '#minecraft:logs_that_burn', duration: 300 },
    ].forEach((oil) => {
        const { type, source, duration } = oil;
        event.recipes.gtceu
            .pyrolyse_oven(id(`${type}`))
            .itemInputs(`32x ${source}`)
            .itemOutputs('4x gtceu:ash_dust')
            .outputFluids(`gtceu:${type} 16000`)
            .duration(duration)
            .circuit(3)
            .EUt(type !== 'oil_heavy' ? 96 : 384);
    });

    event.recipes.gtceu
        .chemical_reactor(id('bacterial_sludge'))
        .inputFluids('gtceu:fermented_biomass 1000', 'gtceu:bacteria 1000')
        .outputFluids('gtceu:bacterial_sludge 1000')
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(1920);

    const FS = 'start_core:fermentibacter_solvis',
        XC = 'start_core:xylopseudomonas_creosotica',
        PS = 'start_core:petrospirillum_solvans',
        OS = 'start_core:octanivorax_sorbitolens',
        BC = 'start_core:bituminimonas_combustilis',
        CV = 'start_core:carbanogasibacter_volatilis';

    [
        { main: FS, primary: 'ethanol', secondary: 'acetic_acid', terniary: 'methanol' },
        { main: XC, primary: 'creosote', secondary: 'naphthalene', terniary: 'phenol' },
        { main: PS, primary: 'benzene', secondary: 'ethane', terniary: 'acetone' },
        { main: OS, primary: 'octane', secondary: 'sorbitol', terniary: 'butane' },
        { main: BC, primary: 'toluene', secondary: 'butadiene', terniary: 'propene' },
        { main: CV, primary: 'methane', secondary: 'butene', terniary: 'ethylene' },
    ].forEach((superSkip) => {
        const { main, primary, secondary, terniary } = superSkip;
        event.recipes.gtceu
            .electrolyzer(id(main.split(':')[1]))
            .inputFluids(`${main} 3000`)
            .outputFluids(`gtceu:${primary} 1000`, `gtceu:${secondary} 1000`, `gtceu:${terniary} 1000`)
            .duration(80)
            .EUtVA(IV);
    });

    /** @type {const} */ ([
        {
            output: 'polyimide 3024',
            fluidInput: [`${PS} 4125`, `${FS} 850`, `${BC} 825`, 'gtceu:nitric_acid 975', 'minecraft:water 9250'],
            inputItem: false,
            voltage: GTValues.VHA[UIV],
            duration: 274,
        },
        {
            output: 'polyvinyl_chloride 1512',
            fluidInput: [`${CV} 950`, 'gtceu:hydrochloric_acid 875', 'gtceu:oxygen 6250'],
            inputItem: false,
            voltage: GTValues.VHA[EV],
            duration: 96,
        },
        {
            output: 'polyphenylene_sulfide 1000',
            fluidInput: [`${PS} 1425`, 'gtceu:oxygen 6500'],
            inputItem: ['1x gtceu:sulfur_dust'],
            voltage: GTValues.VHA[EV],
            duration: 216,
        },
        {
            output: 'epoxy 1000',
            fluidInput: [`${BC} 1875`, `${PS} 1625`, 'gtceu:perchloric_acid 750'],
            inputItem: false,
            voltage: GTValues.VHA[LuV],
            duration: 150,
        },
        {
            output: 'polyvinyl_butyral 720',
            fluidInput: [`${BC} 875`, `${CV} 500`, `${FS} 500`, 'gtceu:oxygen 2500'],
            inputItem: ['gtceu:carbon_dust'],
            voltage: GTValues.VHA[LuV],
            duration: 75,
        },
        {
            output: 'perfluoroelastomer_rubber 9072',
            fluidInput: [`${CV} 9625`, `${BC} 1375`, `${FS} 250`, 'gtceu:fluorine 18500'],
            inputItem: ['7x gtceu:sulfur_dust'],
            voltage: GTValues.VHA[UHV],
            duration: 83,
        },
        {
            output: 'silicone_rubber 1296',
            fluidInput: [`${CV} 2000`, 'gtceu:silicic_acid 1000'],
            inputItem: ['gtceu:sulfur_dust'],
            voltage: GTValues.VA[EV],
            duration: 25,
        },
        {
            output: 'poly_34_ethylenedioxythiophene_polystyrene_sulfonate 864',
            fluidInput: [`${BC} 11250`, `${FS} 9750`, `${PS} 7500`, `${CV} 4250`, 'gtceu:bromine 25'],
            inputItem: ['gtceu:sulfur_dust', '6x minecraft:sugar'],
            voltage: GTValues.VA[UXV] / 3,
            duration: 117,
        },
        {
            output: 'polyether_ether_ketone 3456',
            fluidInput: [`${BC} 1250`, `${PS} 625`, 'gtceu:oxygen 750'],
            inputItem: false,
            voltage: GTValues.VA[UEV] / 3,
            duration: 42,
        },
        {
            output: 'polybenzimidazole 9072',
            fluidInput: [`${PS} 24625`, `${CV} 16250`, `${XC} 7625`, 'gtceu:ammonia 6500'],
            inputItem: ['gtceu:copper_dust'],
            voltage: GTValues.VHA[ZPM],
            duration: 285,
        },
    ]).forEach((superSkip) => {
        const { output, fluidInput, inputItem, voltage, duration } = superSkip;
        const recipe = event.recipes.gtceu.bacteria_synthesizer(id(`${output.split(' ')[0]}_synthesis`));
        recipe.inputFluids(fluidInput);
        recipe.outputFluids(`gtceu:${output}`);
        recipe.duration(duration);
        recipe.EUt(voltage);
        if (inputItem) {
            recipe.itemInputs(inputItem);
        }
    });
});
