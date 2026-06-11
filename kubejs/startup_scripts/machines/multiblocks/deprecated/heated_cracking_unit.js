// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('heated_cracking_unit')
//         .category('heated_cracking_unit')
//         .setMaxIOSize(2, 2, 0, 0)
//         .setSound(GTSoundEntries.FIRE);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('heated_cracking_unit', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('heated_cracking_unit')
//         .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
//         .recipeModifier(GTRecipeModifiers.OC_PERFECT)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('F###F', 'F###F', 'F###F', 'F###F', 'FFFFF')
//             .aisle('#SSS#', '#BGB#', '#BGB#', '#BGB#', 'FSSSF')
//             .aisle('#SSS#', '#GTG#', '#GTG#', '#GTG#', 'FSSSF')
//             .aisle('#SCS#', '#BGB#', '#BGB#', '#BGB#', 'FSSSF')
//             .aisle('F###F', 'F###F', 'F###F', 'F###F', 'FFFFF')
//             .where('C', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('S', Predicates.blocks('gtceu:solid_machine_casing')
//                 .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
//                 .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
//                 .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2))
//                 .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2))
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
//             .where('B', Predicates.blocks('gtceu:steel_firebox_casing'))
//             .where('F', Predicates.blocks('gtceu:steel_frame'))
//             .where('G', Predicates.blocks('gtceu:tempered_glass'))
//             .where('T', Predicates.blocks('gtceu:cupronickel_coil_block'))
//             .where('#', Predicates.any())
//             .build())
//         .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel',
//         'gtceu:block/multiblock/cracking_unit', false);
// });
