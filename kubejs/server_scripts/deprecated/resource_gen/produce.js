// //greens tag
// ServerEvents.tags('item', event => {

//     ['plants', 'seeds', 'roots'].forEach(type => {
//         event.add('kubejs:ball_of_greens', `kubejs:ball_${type}`);
//     });

// });

// ServerEvents.recipes(event => {
//     const id = global.id;

//     //Multi for greens
//     event.recipes.gtceu.large_greens_extractor(id('harvesting'))
//         .notConsumable('minecraft:stone_hoe')
//         .chancedInput('4x gtceu:fertilizer', 2500, 0)
//         .inputFluids('minecraft:water 1000')
//         .chancedOutput('kubejs:ball_plants', 7000, 0)
//         .chancedOutput('kubejs:ball_seeds', 7000, 0)
//         .chancedOutput('kubejs:ball_roots', 7000, 0)
//         .duration(350);

//     //making compost
//     event.custom({
//         "type": "exnihilosequentia:precipitate",
//         "fluid": ('exnihilosequentia:sea_water'),
//         "input": {
//             "tag": "kubejs:ball_of_greens"},
//         "result": 'kubejs:ball_compost'
//     });

//     event.recipes.gtceu.large_barrel(id('ball_compost'))
//         .itemInputs('#kubejs:ball_of_greens')
//         .inputFluids('exnihilosequentia:sea_water 1000')
//         .itemOutputs('kubejs:ball_compost')
//         .duration(80);

//     //Farmers Delight seeds
//     function switcher(item1, item2){event.shapeless(item1, item2);event.shapeless(item2, item1);};
//     switcher('farmersdelight:rice', 'thermal:rice_seeds');
//     switcher('farmersdelight:tomato_seeds', 'thermal:tomato_seeds');

//     //Automating grinding
//     event.recipes.gtceu.centrifuge(id('ball_plants'))
//         .itemInputs('kubejs:ball_plants')
//         .chancedOutput('minecraft:bamboo', 7000, 1000)
//         .chancedOutput('minecraft:cactus', 7000, 1000)
//         .chancedOutput('minecraft:fern', 7000, 1000)
//         .chancedOutput('minecraft:sunflower', 7000, 1000)
//         .chancedOutput('minecraft:sweet_berries', 7000, 1000)
//         .chancedOutput('minecraft:large_fern', 7000, 1000)
//         .chancedOutput('minecraft:cocoa_beans', 7000, 1000)
//         .duration(240)
//         .EUt(32);

//     event.recipes.gtceu.centrifuge(id('ball_seeds'))
//         .itemInputs('kubejs:ball_seeds')
//         .chancedOutput('minecraft:wheat_seeds', 500, 1000)
//         .chancedOutput('minecraft:pumpkin_seeds', 1000, 1000)
//         .chancedOutput('minecraft:melon_seeds', 1000, 1000)
//         .chancedOutput('minecraft:beetroot_seeds', 500, 1000)
//         .chancedOutput('thermal:flax_seeds', 1500, 1000)
//         .chancedOutput('exnihilosequentia:grass_seeds', 1000, 1000)
//         .chancedOutput('farmersdelight:cabbage_seeds', 1000, 1000)
//         .duration(240)
//         .EUt(32);

//     event.recipes.gtceu.centrifuge(id('ball_roots'))
//         .itemInputs('kubejs:ball_roots')
//         .chancedOutput('minecraft:carrot', 1000, 1000)
//         .chancedOutput('minecraft:potato', 1000, 1000)
//         .chancedOutput('minecraft:sugar_cane', 1000, 1000)
//         .duration(240)
//         .EUt(32);

//     event.recipes.gtceu.centrifuge(id('ball_compost'))
//         .itemInputs('kubejs:ball_compost')
//         .chancedOutput('exnihilosequentia:mycelium_spores', 3000, 1000)
//         .chancedOutput('thermal:slime_mushroom_spores', 5000, 1000)
//         .duration(240)
//         .EUt(32);

// });

// //getting greens
// BlockEvents.rightClicked('minecraft:grass_block', event => {
//     if (event.player.isCrouching() && event.player.getMainHandItem() === 'minecraft:stick') {
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('kubejs:ball_plants'), 'up');
//         }
//         if (Math.random() < 0.05) {
//             event.block.popItemFromFace(Item.of('kubejs:ball_seeds'), 'up');
//         }
//         if (Math.random() < 0.05) {
//             event.block.popItemFromFace(Item.of('kubejs:ball_roots'), 'up');
//         }
//     }
// });

// //getting produce
// BlockEvents.rightClicked('minecraft:grindstone', event => {
//     //using plants
//     if (event.player.isCrouching() && event.player.getMainHandItem() === 'kubejs:ball_plants') {
//         if (Math.random() < 0.15) {
//             event.block.popItemFromFace(Item.of('minecraft:bamboo'), 'up');
//         }
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('minecraft:cactus'), 'up');
//         }
//         if (Math.random() < 0.05) {
//             event.block.popItemFromFace(Item.of('minecraft:fern'), 'up');
//         }
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('minecraft:sunflower'), 'up');
//         }
//         if (Math.random() < 0.05) {
//             event.block.popItemFromFace(Item.of('minecraft:sweet_berries'), 'up');
//         }
//         if (Math.random() < 0.05) {
//             event.block.popItemFromFace(Item.of('minecraft:large_fern'), 'up');
//         }
//         if (Math.random() < 0.05) {
//             event.block.popItemFromFace(Item.of('minecraft:cocoa_beans'), 'up');
//         }
//         ['acacia', 'birch', 'cherry', 'dark_oak', 'jungle', 'oak', 'spruce'].forEach(sapling => {
//             if (Math.random() < 0.10) {
//                 event.block.popItemFromFace(Item.of(`minecraft:${sapling}_sapling`), 'up');
//             }
//         });
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('minecraft:mangrove_propagule'), 'up');
//         }
//     }
//     //using seeds
//     if (event.player.isCrouching() && event.player.getMainHandItem() === 'kubejs:ball_seeds') {
//         if (Math.random() < 0.05) {
//             event.block.popItemFromFace(Item.of('minecraft:wheat_seeds'), 'up');
//         }
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('minecraft:pumpkin_seeds'), 'up');
//         }
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('minecraft:melon_seeds'), 'up');
//         }
//         if (Math.random() < 0.05) {
//             event.block.popItemFromFace(Item.of('minecraft:beetroot_seeds'), 'up');
//         }
//         if (Math.random() < 0.15) {
//             event.block.popItemFromFace(Item.of('thermal:flax_seeds'), 'up');
//         }
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('exnihilosequentia:grass_seeds'), 'up');
//         }
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('farmersdelight:cabbage_seeds'), 'up');
//         }
//     }
//     //using roots
//     if (event.player.isCrouching() && event.player.getMainHandItem() === 'kubejs:ball_roots') {
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('minecraft:carrot'), 'up');
//         }
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('minecraft:potato'), 'up');
//         }
//         if (Math.random() < 0.10) {
//             event.block.popItemFromFace(Item.of('minecraft:sugar_cane'), 'up');
//         }
//     }
//     //using compost
//     if (event.player.isCrouching() && event.player.getMainHandItem() === 'kubejs:ball_compost') {
//         if (Math.random() < 0.30) {
//             event.block.popItemFromFace(Item.of('exnihilosequentia:mycelium_spores'), 'up');
//         }
//         if (Math.random() < 0.50) {
//             event.block.popItemFromFace(Item.of('thermal:slime_mushroom_spores'), 'up');
//         }
//     }
// });
