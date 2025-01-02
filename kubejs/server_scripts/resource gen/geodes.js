ServerEvents.recipes(event => {
    
  //sifting
  event.shaped('gtceu:rock_filtrator',[
      'ABA',
      'BCB',
      'ABA'
    ],{
      A: '#gtceu:circuits/lv',
      B: 'gtceu:lv_electric_motor',
      C: 'gtceu:steel_machine_casing'
  });

  event.shaped('gtceu:rock_sifter',[
      'ABA',
      'BCB',
      'ABA'
    ],{
      A: '#gtceu:circuits/luv',
      B: 'gtceu:luv_electric_motor',
      C: 'gtceu:watertight_casing'
  });
    
  event.recipes.gtceu.rock_filtrator('lv_geodes')
    .itemInputs('64x minecraft:gravel')
    .inputFluids('gtceu:distilled_water 1000')
    .chancedOutput('kubejs:diamond_geode', 4000, 500)
    .chancedOutput('kubejs:emerald_geode', 4000, 500)
    .chancedOutput('kubejs:ruby_geode', 4500, 750)
    .chancedOutput('kubejs:green_sapphire_geode', 4500, 750)
    .chancedOutput('kubejs:sapphire_geode', 4500, 750)
    .chancedOutput('kubejs:quartzite_geode', 3500, 500)
    .chancedOutput('kubejs:certus_quartz_geode', 4000, 750)
    .duration(1500)
    .EUt(GTValues.VHA[GTValues.LV]);

  event.recipes.gtceu.rock_filtrator('mv_geodes')
    .itemInputs('64x minecraft:sand')
    .inputFluids('gtceu:distilled_water 1000')
    .chancedOutput('kubejs:blue_topaz_geode', 3500, 750)
    .chancedOutput('kubejs:topaz_geode', 3500, 750)
    .chancedOutput('kubejs:apatite_geode', 4500, 1000)
    .chancedOutput('kubejs:spessartine_geode', 3500, 500)
    .chancedOutput('kubejs:monazite_geode', 3500, 500)
    .duration(1200)
    .EUt(GTValues.VHA[GTValues.MV]);

  const geodeLV = ['diamond', 'emerald', 'ruby', 'green_sapphire', 
    'sapphire', 'quartzite', 'certus_quartz'];
  const geodeMV = ['apatite', 'topaz', 'blue_topaz', 'spessartine', 'monazite'];
  
  geodeLV.forEach(type => {
    event.recipes.gtceu.cutter(`${type}_geode`)
      .itemInputs(`kubejs:${type}_geode`)
      .itemOutputs(`gtceu:raw_${type}`, 'gtceu:stone_dust')
      .duration(200)
      .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.macerator(`${type}_geode`)
      .itemInputs(`kubejs:${type}_geode`)
      .itemOutputs(`gtceu:crushed_${type}_ore`)
      .chancedOutput(`gtceu:crushed_${type}_ore`, 5000, 250)
      .chancedOutput(`gtceu:crushed_${type}_ore`, 2500, 125)
      .chancedOutput(`gtceu:impure_${type}_dust`, 2500, 50)
      .duration(200)
      .EUt(GTValues.VHA[GTValues.LV]);
  });

  geodeMV.forEach(type => {
    event.recipes.gtceu.cutter(`${type}_geode`)
      .itemInputs(`kubejs:${type}_geode`)
      .itemOutputs(`gtceu:raw_${type}`, 'gtceu:stone_dust')
      .duration(200)
      .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.macerator(`${type}_geode`)
      .itemInputs(`kubejs:${type}_geode`)
      .itemOutputs(`gtceu:crushed_${type}_ore`)
      .chancedOutput(`gtceu:crushed_${type}_ore`, 5000, 250)
      .chancedOutput(`gtceu:crushed_${type}_ore`, 2500, 125)
      .chancedOutput(`gtceu:impure_${type}_dust`, 2500, 50)
      .duration(200)
      .EUt(GTValues.VHA[GTValues.MV]);
  });
  

  // event.recipes.gtceu.rock_sifter('geode_harvesting')
  //   .itemInputs('64x minecraft:gravel')
  //   .chancedOutput('kubejs:diamond_geode', 3500, 500)
  //   .chancedOutput('kubejs:emerald_geode', 3500, 500)
  //   .chancedOutput('kubejs:ruby_geode', 4500, 750)
  //   .chancedOutput('kubejs:green_sapphire_geode', 4500, 750)
  //   .chancedOutput('kubejs:sapphire_geode', 4500, 750)
  //   .chancedOutput('kubejs:quartzite_geode', 3500, 500)
  //   .chancedOutput('kubejs:certus_quartz_geode', 5000, 1500)
  //   .chancedOutput('kubejs:blue_topaz_geode', 3500, 500)
  //   .chancedOutput('kubejs:topaz_geode', 3500, 500)
  //   .chancedOutput('kubejs:amethyst_geode', 6000, 2000)
  //   .duration(300)
  //   .EUt(28);

//   //cracking
//   event.shaped('gtceu:heated_cracking_unit',[
//       'ABC',
//       'DEA',
//       'ABF'
//     ],{
//       A: '#gtceu:circuits/lv',
//       B: 'gtceu:lv_electric_motor',
//       C: 'gtceu:tempered_glass',
//       D: 'gtceu:cupronickel_coil_block',
//       E: 'gtceu:solid_machine_casing',
//       F: 'gtceu:lv_conveyor_module'
//     });

//   event.shaped('gtceu:pressure_cracker',[
//       'ABC',
//       'DEA',
//       'ABF'
//     ],{
//       A: '#gtceu:circuits/luv',
//       B: 'gtceu:luv_electric_motor',
//       C: 'gtceu:laminated_glass',
//       D: 'gtceu:hssg_coil_block',
//       E: 'gtceu:heatproof_machine_casing',
//       F: 'gtceu:luv_conveyor_module'
//   });

//   ['diamond', 'emerald', 'ruby', 'green_sapphire', 'sapphire', 'quartzite', 'certus_quartz', 'blue_topaz', 'topaz', 'amethyst'].forEach(type => {
//     event.recipes.gtceu.heated_cracking_unit(`${type}_cracking`)
//       .itemInputs(`kubejs:${type}_geode`)
//       .itemOutputs(`kubejs:cracked_${type}_geode`)
//       .blastFurnaceTemp(1800)
//       .duration(600)
//       .EUt(60);

//     event.recipes.gtceu.pressure_cracker(`${type}_cracking`)
//       .itemInputs(`kubejs:${type}_geode`)
//       .itemOutputs(`kubejs:cracked_${type}_geode`)
//       .blastFurnaceTemp(1800)
//       .duration(600)
//       .EUt(60);
//   });

//   //crushing
//   ['diamond', 'emerald', 'ruby', 'green_sapphire', 'sapphire', 'quartzite', 'certus_quartz', 'blue_topaz', 'topaz', 'amethyst'].forEach(type => {
//     event.recipes.gtceu.macerator(`cracked_${type}_geode_crushing`)
//         .itemInputs(`kubejs:cracked_${type}_geode`)
//         .itemOutputs(`2x gtceu:crushed_${type}_ore`)
//         .chancedOutput(`gtceu:crushed_${type}_ore`, 5000, 1500)
//         .chancedOutput(`gtceu:crushed_${type}_ore`, 3000, 500)
//         .chancedOutput(`gtceu:crushed_${type}_ore`, 1000, 250)
//         .duration(100)
//         .EUt(24);
//   });

});