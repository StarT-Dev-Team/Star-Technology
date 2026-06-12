ServerEvents.recipes((event) => {
    const id = global.id;

    //sifting
    event
        .shaped('gtceu:rock_filtrator', ['ABA', 'BCB', 'ABA'], {
            A: '#gtceu:circuits/lv',
            B: 'gtceu:lv_electric_motor',
            C: 'gtceu:steel_machine_casing',
        })
        .id('start:shaped/rock_filtrator');

    event
        .shaped('gtceu:rock_sifter', ['ABA', 'BCB', 'ABA'], {
            A: '#gtceu:circuits/luv',
            B: 'gtceu:luv_electric_motor',
            C: 'gtceu:watertight_casing',
        })
        .id('start:shaped/rock_sifter');

    //Generalist Recipes
    event.recipes.gtceu
        .rock_filtrator(id('lv_geodes'))
        .itemInputs('32x minecraft:gravel')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:diamond_geode', 3500, 750)
        .chancedOutput('kubejs:emerald_geode', 3500, 750)
        .chancedOutput('kubejs:ruby_geode', 4500, 750)
        .chancedOutput('kubejs:realgar_geode', 4000, 750)
        .chancedOutput('kubejs:green_sapphire_geode', 5000, 500)
        .chancedOutput('kubejs:sapphire_geode', 5000, 500)
        .chancedOutput('kubejs:quartzite_geode', 3500, 500)
        .duration(1200)
        .circuit(0)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu
        .rock_filtrator(id('mv_geodes'))
        .itemInputs('32x minecraft:sand')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:blue_topaz_geode', 3500, 750)
        .chancedOutput('kubejs:topaz_geode', 3500, 750)
        .chancedOutput('kubejs:apatite_geode', 4500, 1000)
        .chancedOutput('kubejs:spessartine_geode', 3500, 500)
        .chancedOutput('kubejs:monazite_geode', 3750, 750)
        .chancedOutput('kubejs:certus_quartz_geode', 4500, 750)
        .duration(960)
        .circuit(0)
        .EUt(GTValues.VHA[GTValues.MV]);

    //Specialist Recipes LV
    let specialChanceMod = 1.2;
    let specialDuraionMod = 0.5;

    event.recipes.gtceu
        .rock_filtrator(id('lv_geodes_gem'))
        .itemInputs('32x minecraft:gravel')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:diamond_geode', 3500 * specialChanceMod, 750)
        .chancedOutput('kubejs:emerald_geode', 3500 * specialChanceMod, 750)
        .chancedOutput('kubejs:ruby_geode', 4500 * specialChanceMod, 750)
        .duration(1200 * specialDuraionMod)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu
        .rock_filtrator(id('lv_geodes_sapphire'))
        .itemInputs('32x minecraft:gravel')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:green_sapphire_geode', 5000 * specialChanceMod, 500)
        .chancedOutput('kubejs:sapphire_geode', 5000 * specialChanceMod, 500)
        .duration(1200 * specialDuraionMod)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu
        .rock_filtrator(id('lv_geodes_rough'))
        .itemInputs('32x minecraft:gravel')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:quartzite_geode', 3500 * specialChanceMod, 500)
        .chancedOutput('kubejs:realgar_geode', 4000 * specialChanceMod, 750)
        .duration(1200 * specialDuraionMod)
        .circuit(3)
        .EUt(GTValues.VHA[GTValues.LV]);

    //Specialist Recipes MV
    event.recipes.gtceu
        .rock_filtrator(id('mv_geodes_1'))
        .itemInputs('32x minecraft:sand')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:apatite_geode', 4500 * specialChanceMod, 1000)
        .chancedOutput('kubejs:spessartine_geode', 3500 * specialChanceMod, 500)
        .chancedOutput('kubejs:monazite_geode', 3750 * specialChanceMod, 750)
        .duration(960 * specialDuraionMod)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu
        .rock_filtrator(id('mv_geodes_2'))
        .itemInputs('32x minecraft:sand')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:blue_topaz_geode', 3500 * specialChanceMod, 750)
        .chancedOutput('kubejs:topaz_geode', 3500 * specialChanceMod, 750)
        .chancedOutput('kubejs:certus_quartz_geode', 4500 * specialChanceMod, 750)
        .duration(960 * specialDuraionMod)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.MV]);

    //Geode Harvesting
    const geode = [
        'diamond',
        'emerald',
        'ruby',
        'green_sapphire',
        'realgar',
        'sapphire',
        'quartzite',
        'certus_quartz',
        'apatite',
        'topaz',
        'blue_topaz',
        'spessartine',
        'monazite',
    ];

    geode.forEach((type) => {
        event.recipes.gtceu
            .cutter(id(`${type}_geode`))
            .itemInputs(`kubejs:${type}_geode`)
            .itemOutputs(`gtceu:raw_${type}`, 'gtceu:stone_dust')
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);

        event.recipes.gtceu
            .macerator(id(`${type}_geode`))
            .itemInputs(`kubejs:${type}_geode`)
            .itemOutputs(`gtceu:crushed_${type}_ore`)
            .chancedOutput(`gtceu:crushed_${type}_ore`, 5000, 250)
            .chancedOutput(`gtceu:crushed_${type}_ore`, 2500, 125)
            .chancedOutput(`gtceu:impure_${type}_dust`, 2500, 50)
            .duration(200)
            .EUt(GTValues.VHA[GTValues.LV]);
    });
});
