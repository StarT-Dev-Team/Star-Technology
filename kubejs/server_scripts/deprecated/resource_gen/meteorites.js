// ServerEvents.recipes(event => {
//     const id = global.id;

//     /*/reflective metal //hardmode :)
//     event.recipes.gtceu.mixer(id('reflective_metal_dust'))
//         .itemInputs('5x gtceu:aluminium_dust', '3x gtceu:steel_dust', '2x minecraft:glowstone')
//         .itemOutputs('10x gtceu:reflective_metal_dust')
//         .duration(240)
//         .EUt(60);

//     event.recipes.gtceu.chemical_bath(id('reflective_metal_cool_down_water'))
//         .itemInputs('gtceu:hot_reflective_metal_ingot')
//         .inputFluids('minecraft:water 100')
//         .itemOutputs('gtceu:reflective_metal_ingot')
//         .duration(400)
//         .EUt(60);

//     event.recipes.gtceu.chemical_bath(id('reflective_metal_cool_down_distilled_water'))
//         .itemInputs('gtceu:hot_reflective_metal_ingot')
//         .inputFluids('gtceu:distilled_water 100')
//         .itemOutputs('gtceu:reflective_metal_ingot')
//         .duration(250)
//         .EUt(60);

//     event.shaped('kubejs:reflective_casing',[
//         'ABA',
//         'ACA',
//         'ADA'
//       ],{
//         A: 'gtceu:reflective_metal_plate',
//         B: '#forge:tools/hammers',
//         C: 'gtceu:reflective_metal_frame',
//         D: '#forge:tools/wrenches'
//     });*/
//     //reflective casing
//     event.shaped('kubejs:reflective_casing',[
//         'ABA',
//         'ACA',
//         'ADA'
//       ],{
//         A: 'gtceu:double_silver_plate',
//         B: '#forge:tools/hammers',
//         C: 'gtceu:steel_frame',
//         D: '#forge:tools/wrenches'
//     });

//     //scan files
//     event.recipes.gtceu.assembler(id('undetermined_scan_file'))
//         .itemInputs('gtceu:phenolic_printed_circuit_board', 'gtceu:data_stick', '#forge:dyes/blue')
//         .inputFluids('gtceu:soldering_alloy 288')
//         .itemOutputs('kubejs:undetermined_scan_file')
//         .duration(200)
//         .EUt(60);

//     //scanner
//     function scan(type, catalyst, coolant, duration, energy){
//         event.recipes.gtceu.deep_space_scanner(type)
//             .itemInputs('kubejs:undetermined_scan_file', catalyst)
//             .inputFluids(`gtceu:${coolant} 1000`)
//             .itemOutputs(`kubejs:${type}_scan_file`)
//             .duration(duration)
//             .EUt(energy);
//     };

//     scan('skystone', 'ae2:fluix_block', 'nitrogen', 1200, 80);
//     scan('pollucite', 'gtceu:caesium_dust', 'helium', 6000, 512);
//     scan('lepidolite', 'gtceu:lithium_dust', 'helium', 6000, 512);
//     scan('bastnasite', 'gtceu:cerium_dust', 'helium', 6000, 512);

//     event.recipes.gtceu.assembler(id('cargo_drone'))
//         .itemInputs('gtceu:power_thruster', '2x #gtceu:circuits/mv', 'gtceu:plastic_printed_circuit_board', '5x gtceu:double_stainless_steel_plate')
//         .inputFluids('gtceu:soldering_alloy 288')
//         .itemOutputs('kubejs:cargo_drone')
//         .duration(200)
//         .EUt(100);

//     function drone(meteorite, fuel, duration, energy){
//         event.recipes.gtceu.drone_pad(id(`${meteorite}_meteorite`))
//             .notConsumable(`kubejs:${meteorite}_scan_file`)
//             .itemInputs('kubejs:cargo_drone')
//             .inputFluids(`gtceu:rocket_fuel ${fuel}`)
//             .itemOutputs(`3x kubejs:${meteorite}_meteorite`)
//             .duration(duration)
//             .EUt(energy);

//         event.recipes.gtceu.docking_station(id(`${meteorite}_meteorite`))
//             .notConsumable(`kubejs:${meteorite}_scan_file`)
//             .itemInputs('kubejs:cargo_drone')
//             .inputFluids(`gtceu:rocket_fuel ${fuel}`)
//             .itemOutputs(`3x kubejs:${meteorite}_meteorite`)
//             .duration(duration)
//             .EUt(energy);
//     };

//     drone('skystone', 4000, 6000, 80);
//     drone('pollucite', 8000, 6000, 512);
//     drone('lepidolite', 8000, 6000, 512);
//     drone('bastnasite', 8000, 6000, 512);

//     function macerate(type, rock, ore, dust, duration, eu){
//         event.recipes.gtceu.macerator(id(`${type}_meteorite`))
//             .itemInputs(`kubejs:${type}_meteorite`)
//             .itemOutputs(`64x ${rock}`, `5x gtceu:crushed_${ore}_ore`, `2x gtceu:${dust}_dust`)
//             .duration(duration)
//             .EUt(eu);
//     };

//     macerate('skystone', 'ae2:sky_stone_block', 'certus_quartz', 'boron', 1200, 128);
//     macerate('pollucite', 'gtceu:granite_apatite_ore', 'pollucite', 'silicon_dioxide', 1200, 512);
//     macerate('lepidolite', 'gtceu:granite_topaz_ore', 'lepidolite', 'spodumene', 1200, 512);
//     macerate('bastnasite', 'gtceu:granite_bauxite_ore', 'bastnasite', 'monazite', 1200, 512);

//     //skystone stuff
//     event.remove({ id: 'ae2:inscriber/sky_stone_dust'});
//     event.remove({ id: 'create:milling/compat/ae2/sky_stone_block'});

//     event.recipes.gtceu.macerator(id('sky_stone_block'))
//         .itemInputs('ae2:sky_dust')
//         .itemOutputs('ae2:sky_stone_block')
//         .duration(1200)
//         .EUt(110);

// });
