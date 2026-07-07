// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

//     event.create('cobbleworks')
//         .category('resource_production')
//         .setEUIO('in')
//         .setMaxIOSize(1, 1, 2, 0)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.COOLING);

// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {

//     event.create('cobbleworks', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('cobbleworks')
//         .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
//         .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('FTTTF', 'FSSSF', 'FSISF', 'FSSSF', 'FTTTF')
//             .aisle('TTFTT', 'SWWWS', 'SWWWS', 'SWWWS', 'TTSTT')
//             .aisle('TFOFT', 'SW WS', 'HP PH', 'SW WS', 'TSSST')
//             .aisle('TTFTT', 'SWWWS', 'SWWWS', 'SWWWS', 'TTSTT')
//             .aisle('FTTTF', 'FSSSF', 'FSCSF', 'FSSSF', 'FTTTF')
//             .where('C', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('S', Predicates.blocks(GCYMBlocks.CASING_STRESS_PROOF.get())
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
//             .where('T', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get()))
//             .where('F', Predicates.blocks('gtceu:tungsten_steel_frame'))
//             .where('P', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
//             .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
//             .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
//             .where('H', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
//             .where('W', Predicates.blocks(GCYMBlocks.CRUSHING_WHEELS.get()))
//             .where(' ', Predicates.any())
//             .build())
//         .workableCasingRenderer('gtceu:block/casings/gcym/stress_proof_casing',
//         'gtceu:block/multiblock/implosion_compressor', false);

// });
