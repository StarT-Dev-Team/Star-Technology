// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('kinetic_box')
//         .category('kinetic_box')
//         .setEUIO('in')
//         .setMaxIOSize(0, 0, 0, 0)
//         .setSound(GTSoundEntries.ARC);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('kinetic_box', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('kinetic_box')
//         .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('SSS', 'SSS', '   ')
//             .aisle('SSS', 'PGP', 'SSS')
//             .aisle('SSS', 'SCS', '   ')
//             .where('C', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
//             .where('P', Predicates.abilities(PA.euIn).setExactLimit(1)
//                 .or(Predicates.abilities(PartAbility.OUTPUT_KINETIC).setExactLimit(1)))
//             .where('G', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
//             .where(' ', Predicates.any())
//             .build())
//         .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel',
//         'gtceu:block/multiblock/primitive_blast_furnace', false);
// });
