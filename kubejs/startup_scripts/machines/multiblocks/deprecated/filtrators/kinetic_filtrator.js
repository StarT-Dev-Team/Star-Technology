// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('kinetic_filtrator')
//         .category('kinetic_filtrator')
//         .setMaxIOSize(0, 5, 1, 0)
//         .setSound(GTSoundEntries.MACERATOR);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('kinetic_filtrator', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('kinetic_filtrator')
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('BBBBB', 'SSSSS', 'SXXXS', 'SSSSS')
//             .aisle('BBBBB', 'SPPPS', 'XMMMX', 'STTTS')
//             .aisle('BBKBB', 'SPPPS', 'XMMMX', 'STITS')
//             .aisle('BBBBB', 'SPPPS', 'XMMMX', 'STTTS')
//             .aisle('BBCBB', 'SSSSS', 'SGGGS', 'SSSSS')
//             .where('B', Predicates.blocks('gtceu:bronze_brick_casing').setMinGlobalLimited(21)
//                 .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setExactLimit(1)))
//             .where('C', Predicates.controller(Predicates.blocks(definition.get())))
//             //.where('K', Predicates.abilities(PartAbility.INPUT_KINETIC))
//             .where('K', Predicates.blocks('minecraft:stone'))
//             .where('I', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
//             .where('S', Predicates.blocks('gtceu:steam_machine_casing'))
//             .where('P', Predicates.blocks('gtceu:bronze_pipe_casing'))
//             .where('X', Predicates.blocks('gtceu:bronze_firebox_casing'))
//             .where('M', Predicates.blocks('kubejs:meshblock'))
//             .where('G', Predicates.blocks('thermal_extra:soul_infused_glass'))
//             .where('T', Predicates.blocks('kubejs:treatedwood_casing'))
//             .where('.', Predicates.any())
//             .build())
//         .workableCasingRenderer('gtceu:block/casings/steam/bricked_bronze/top',
//         'gtceu:block/multiblock/primitive_blast_furnace', false);
// });
