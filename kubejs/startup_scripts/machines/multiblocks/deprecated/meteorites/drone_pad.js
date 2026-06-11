// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('drone_pad')
//         .category('drone_pad')
//         .setMaxIOSize(2, 3, 1, 0)
//         .setSound(GTSoundEntries.MACERATOR);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('drone_pad', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('drone_pad')
//         .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
//         .recipeModifier(GTRecipeModifiers.OC_PERFECT)
//         .pattern(definition => FactoryBlockPattern.start()
//         .aisle('AABAA', 'AACCA', 'A####', 'D####', 'D####', 'D####', 'D####')
//         .aisle('AEEEA', 'A###C', '#####', '#####', '#####', '#####', '#####')
//         .aisle('BEEEB', 'C###C', '#####', '#####', '#####', '#####', '#####')
//         .aisle('AEEEA', 'C###C', '#####', '#####', '#####', '#####', '#####')
//         .aisle('AAZAA', 'ACCCA', '#####', '#####', '#####', '#####', '#####')
//         .where('Z', Predicates.controller(Predicates.blocks(definition.get())))
//         .where('A', Predicates.blocks('gtceu:solid_machine_casing')
//             .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
//             .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
//             .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1))
//             .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1))
//             .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
//             .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
//         .where('B', Predicates.blocks('gtceu:steel_firebox_casing'))
//         .where('C', Predicates.blocks('minecraft:iron_bars'))
//         .where('D', Predicates.blocks('gtceu:steel_frame'))
//         .where('E', Predicates.blocks('chipped:grill_yellow_concrete'))
//         .where('#', Predicates.any())
//             .build())
//         .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel',
//             'gtceu:block/multiblock/large_miner', false);
// });
