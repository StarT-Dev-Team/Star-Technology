// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('large_greens_extractor')
//         .category('large_greens_extractor')
//         .setMaxIOSize(2, 3, 2, 0)
//         .setSound(GTSoundEntries.BATH);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('large_greens_extractor', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('large_greens_extractor')
//         .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('PPPPP', 'F   F', 'F   F', ' FFF ')
//             .aisle('PGGGP', ' ### ', '     ', 'F   F')
//             .aisle('PGGGP', ' ### ', '     ', 'F   F')
//             .aisle('PGGGP', ' ### ', '     ', 'F   F')
//             .aisle('PPCPP', 'F   F', 'F   F', ' FFF ')
//             .where('C', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('P', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get())
//                 .or(Predicates.autoAbilities(definition.getRecipeTypes())))
//             .where('G', Predicates.blocks('minecraft:grass_block'))
//             .where('F', Predicates.blocks('gtceu:treated_wood_frame'))
//             .where('#', Predicates.blocks('minecraft:air'))
//             .where(' ', Predicates.any())
//             .build())
//         .workableCasingRenderer('gtceu:block/treated_wood_planks',
//         'gtceu:block/machines/cutter', false);
// });
