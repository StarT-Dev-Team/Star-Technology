// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('electro_kinetic_filtrator')
//         .category('electro_kinetic_filtrator')
//         .setMaxIOSize(0, 5, 1, 0)
//         .setSound(GTSoundEntries.MACERATOR);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('electro_kinetic_filtrator', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('electro_kinetic_filtrator')
//         .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
//         .recipeModifier(GTRecipeModifiers.OC_PERFECT)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('BBBBB', 'SSSSS', 'SXXXS', 'SSSSS')
//             .aisle('BBBBB', 'SPPPS', 'XMMMX', 'STTTS')
//             .aisle('BBKBB', 'SPPPS', 'XMMMX', 'STITS')
//             .aisle('BBBBB', 'SPPPS', 'XMMMX', 'STTTS')
//             .aisle('BBCBB', 'SSSSS', 'SGGGS', 'SSSSS')
//             .where('B', Predicates.blocks('gtceu:steel_brick_casing').setMinGlobalLimited(19)
//                 .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
//             .where('C', Predicates.controller(Predicates.blocks(definition.get())))
//             //.where('K', Predicates.abilities(PartAbility.INPUT_KINETIC))
//             .where('K', Predicates.blocks('minecraft:stone'))
//             .where('I', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
//             .where('S', Predicates.blocks('gtceu:solid_machine_casing'))
//             .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
//             .where('X', Predicates.blocks('gtceu:steel_firebox_casing'))
//             .where('M', Predicates.blocks('gtceu:cupronickel_coil_block'))
//             .where('G', Predicates.blocks('thermal:obsidian_glass'))
//             .where('T', Predicates.blocks('gtceu:steel_machine_casing'))
//             .where('.', Predicates.any())
//             .build())
//         .workableCasingRenderer('gtceu:block/casings/steam/bricked_steel/top',
//         'gtceu:block/multiblock/implosion_compressor', false);
// });
