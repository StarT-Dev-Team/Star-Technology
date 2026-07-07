// ServerEvents.recipes(event => {
//     const id = global.id;

//     event.recipes.gtceu.assembler(id('cobbleworks'))
//         .itemInputs('gtceu:iv_machine_hull', '2x #gtceu:circuits/iv', '2x gtceu:double_maraging_steel_300_plate' ,'4x gtceu:pure_netherite_gear')
//         .itemOutputs('gtceu:cobbleworks')
//         .duration(1200)
//         .EUt(1240);

//     const overclock = [256, 512, 1024, 2048];

//     for (let i = 0; i < 4; i++) {
//         event.recipes.gtceu.cobbleworks(id(`cobble_to_gravel_${i}`))
//             .chancedFluidInput('minecraft:water 1', 1, 0)
//             .chancedFluidInput('minecraft:lava 1', 1, 0)
//             .itemOutputs(`${overclock[i]}x minecraft:gravel`)
//             .duration(20 * (i + 1))
//             .EUt(320)
//             .circuit(i);

//         event.recipes.gtceu.cobbleworks(id(`cobble_to_sand_${i + 4}`))
//             .chancedFluidInput('minecraft:water 1', 1, 0)
//             .chancedFluidInput('minecraft:lava 1', 1, 0)
//             .itemOutputs(`${overclock[i]}x minecraft:sand`)
//             .duration(40 * (i + 1))
//             .EUt(320)
//             .circuit(i + 4);

//         event.recipes.gtceu.cobbleworks(id(`cobble_to_dust_${i + 8}`))
//             .chancedFluidInput('minecraft:water 1', 1, 0)
//             .chancedFluidInput('minecraft:lava 1', 1, 0)
//             .itemOutputs(`${overclock[i]}x exnihilosequentia:dust`)
//             .duration(60 * (i + 1))
//             .EUt(320)
//             .circuit(i + 8);

//         event.recipes.gtceu.cobbleworks(id(`blackstone_to_crushed_blackstone_${i}`))
//             .chancedFluidInput('exnihilosequentia:witch_water 1', 1, 0)
//             .chancedFluidInput('minecraft:lava 1', 1, 0)
//             .itemOutputs(`${overclock[i]}x exnihilosequentia:crushed_blackstone`)
//             .duration(20 * (i + 1))
//             .EUt(320)
//             .circuit(i);
//     }

// });
