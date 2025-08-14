ServerEvents.recipes(event => {
    const id = global.id;

if (global.packmode !== 'hard'){(() => {
    
    //sifting
    event.shaped('gtceu:rock_filtrator',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: '#gtceu:circuits/lv',
        B: 'gtceu:lv_electric_motor',
        C: 'gtceu:steel_machine_casing'
    }).id('start:shaped/rock_filtrator');

    event.shaped('gtceu:rock_sifter',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: '#gtceu:circuits/luv',
        B: 'gtceu:luv_electric_motor',
        C: 'gtceu:watertight_casing'
    }).id('start:shaped/rock_sifter');
  
    //Generalist Recipes
    event.recipes.gtceu.rock_filtrator(id('lv_geodes'))
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

    event.recipes.gtceu.rock_filtrator(id('mv_geodes'))
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
    event.recipes.gtceu.rock_filtrator(id('lv_geodes_gem'))
        .itemInputs('32x minecraft:gravel')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:diamond_geode', 3500, 750)
        .chancedOutput('kubejs:emerald_geode', 3500, 750)
        .chancedOutput('kubejs:ruby_geode', 4500, 750)
        .duration(800)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.rock_filtrator(id('lv_geodes_sapphire'))
        .itemInputs('32x minecraft:gravel')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:green_sapphire_geode', 5000, 500)
        .chancedOutput('kubejs:sapphire_geode', 5000, 500)
        .duration(800)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.rock_filtrator(id('lv_geodes_quartz'))
        .itemInputs('32x minecraft:gravel')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:quartzite_geode', 3500, 500)
        .chancedOutput('kubejs:realgar_geode', 4000, 750)
        .duration(800)
        .circuit(3)
        .EUt(GTValues.VHA[GTValues.LV]);

    //Specialist Recipes MV
    event.recipes.gtceu.rock_filtrator(id('mv_geodes_gem'))
        .itemInputs('32x minecraft:sand')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:apatite_geode', 4500, 1000)
        .chancedOutput('kubejs:spessartine_geode', 3500, 500)
        .chancedOutput('kubejs:monazite_geode', 3750, 750)
        .duration(640)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu.rock_filtrator(id('mv_geodes_topaz'))
        .itemInputs('32x minecraft:sand')
        .inputFluids('gtceu:distilled_water 1000')
        .chancedOutput('kubejs:blue_topaz_geode', 3500, 750)
        .chancedOutput('kubejs:topaz_geode', 3500, 750)
        .chancedOutput('kubejs:certus_quartz_geode', 4500, 750)
        .duration(640)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.MV]);

    //Geode Harvesting
    const geode = ['diamond', 'emerald', 'ruby', 'green_sapphire', 'realgar', 'sapphire', 'quartzite', 'certus_quartz', 'apatite', 'topaz', 'blue_topaz', 'spessartine', 'monazite'];
  
    geode.forEach(type => {
        event.recipes.gtceu.cutter(id(`${type}_geode`))
            .itemInputs(`kubejs:${type}_geode`)
            .itemOutputs(`gtceu:raw_${type}`, 'gtceu:stone_dust')
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);

        event.recipes.gtceu.macerator(id(`${type}_geode`))
            .itemInputs(`kubejs:${type}_geode`)
            .itemOutputs(`gtceu:crushed_${type}_ore`)
            .chancedOutput(`gtceu:crushed_${type}_ore`, 5000, 250)
            .chancedOutput(`gtceu:crushed_${type}_ore`, 2500, 125)
            .chancedOutput(`gtceu:impure_${type}_dust`, 2500, 50)
            .duration(200)
            .EUt(GTValues.VHA[GTValues.LV]);
    });
  
    // // Scrapped
    // event.recipes.gtceu.rock_sifter(id('geode_harvesting'))
    //     .itemInputs('64x minecraft:gravel')
    //     .chancedOutput('kubejs:diamond_geode', 3500, 500)
    //     .chancedOutput('kubejs:emerald_geode', 3500, 500)
    //     .chancedOutput('kubejs:ruby_geode', 4500, 750)
    //     .chancedOutput('kubejs:green_sapphire_geode', 4500, 750)
    //     .chancedOutput('kubejs:sapphire_geode', 4500, 750)
    //     .chancedOutput('kubejs:quartzite_geode', 3500, 500)
    //     .chancedOutput('kubejs:certus_quartz_geode', 5000, 1500)
    //     .chancedOutput('kubejs:blue_topaz_geode', 3500, 500)
    //     .chancedOutput('kubejs:topaz_geode', 3500, 500)
    //     .chancedOutput('kubejs:amethyst_geode', 6000, 2000)
    //     .duration(300)
    //     .EUt(28);

    // //cracking
    // event.shaped('gtceu:heated_cracking_unit',[
    //     'ABC',
    //     'DEA',
    //     'ABF'
    // ],{
    //     A: '#gtceu:circuits/lv',
    //     B: 'gtceu:lv_electric_motor',
    //     C: 'gtceu:tempered_glass',
    //     D: 'gtceu:cupronickel_coil_block',
    //     E: 'gtceu:solid_machine_casing',
    //     F: 'gtceu:lv_conveyor_module'
    // }).id('start:shaped/heated_cracking_unit');

    // event.shaped('gtceu:pressure_cracker',[
    //     'ABC',
    //     'DEA',
    //     'ABF'
    // ],{
    //     A: '#gtceu:circuits/luv',
    //     B: 'gtceu:luv_electric_motor',
    //     C: 'gtceu:laminated_glass',
    //     D: 'gtceu:hssg_coil_block',
    //     E: 'gtceu:heatproof_machine_casing',
    //     F: 'gtceu:luv_conveyor_module'
    // }).id('start:shaped/pressure_cracker');

    // ['diamond', 'emerald', 'ruby', 'green_sapphire', 'sapphire', 'quartzite', 'certus_quartz', 'blue_topaz', 'topaz', 'amethyst'].forEach(type => {
    //     event.recipes.gtceu.heated_cracking_unit(id(`${type}_cracking`))
    //         .itemInputs(`kubejs:${type}_geode`)
    //         .itemOutputs(`kubejs:cracked_${type}_geode`)
    //         .blastFurnaceTemp(1800)
    //         .duration(600)
    //         .EUt(60);

    //     event.recipes.gtceu.pressure_cracker(id(`${type}_cracking`))
    //         .itemInputs(`kubejs:${type}_geode`)
    //         .itemOutputs(`kubejs:cracked_${type}_geode`)
    //         .blastFurnaceTemp(1800)
    //         .duration(600)
    //         .EUt(60);
    // });

    // //crushing
    // ['diamond', 'emerald', 'ruby', 'green_sapphire', 'sapphire', 'quartzite', 'certus_quartz', 'blue_topaz', 'topaz', 'amethyst'].forEach(type => {
    //     event.recipes.gtceu.macerator(id(`cracked_${type}_geode_crushing`))
    //         .itemInputs(`kubejs:cracked_${type}_geode`)
    //         .itemOutputs(`2x gtceu:crushed_${type}_ore`)
    //         .chancedOutput(`gtceu:crushed_${type}_ore`, 5000, 1500)
    //         .chancedOutput(`gtceu:crushed_${type}_ore`, 3000, 500)
    //         .chancedOutput(`gtceu:crushed_${type}_ore`, 1000, 250)
    //         .duration(100)
    //         .EUt(24);
    // });

})()}

});