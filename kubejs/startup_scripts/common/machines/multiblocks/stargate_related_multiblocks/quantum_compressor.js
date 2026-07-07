//To be rebirthed post DSG with easier singularities

// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

//     // event.create('large_quantum_compressor')
//     //     .category('gate_construction')
//     //     .setEUIO('in')
//     //     .setMaxIOSize(18, 1, 0, 0)
//     //     .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS , FillDirection.LEFT_TO_RIGHT)
//     //     .setSound(GTSoundEntries.ARC);

//     event.create('quantum_compressor_extraction')
//         .category('gate_construction')
//         .setEUIO('in')
//         .setMaxIOSize(1, 0, 0, 2)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT , FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.ARC);

//     event.create('quantum_compressor_infusion')
//         .category('gate_construction')
//         .setEUIO('in')
//         .setMaxIOSize(2, 1, 3, 0)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR , FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.ARC);

// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {

//     event.create('large_quantum_compressor', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeTypes(['quantum_compressor_extraction', 'quantum_compressor_infusion'])
//         .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
//         .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('    FFF    ', '    HDH    ', '    HDH    ', '    HDH    ', '    ASA    ', '     S     ', '           ', '           ')
//             .aisle('  FFGGGFF  ', '  AAIIIAA  ', '  AAIIIAA  ', '  AAIIIAA  ', '   AAAAA   ', '    ASA    ', '           ', '           ')
//             .aisle(' FGGWGWGGF ', ' A33   33A ', ' A33   33A ', ' A33   33A ', '  AGWGWGA  ', '  AAAAAAA  ', '     S     ', '           ')
//             .aisle(' FGGWGWGGF ', ' A33   33A ', ' A33   33A ', ' A33   33A ', ' AGGWGWGGA ', '  AAIIIAA  ', '   ASSSA   ', '           ')
//             .aisle('FGWWGGGWWGF', 'TI       IT', 'TI       IT', 'TI       IT', 'AGWWGGGWWGA', ' AAIGIGIAA ', '   SGIGS   ', '    SSS    ')
//             .aisle('FGGGGPGGGGF', 'DI       ID', 'DI       ID', 'DI       ID', 'SGGGGPGGGGS', 'SSAIIPIIASS', '  SSIPISS  ', '    SSS    ')
//             .aisle('FGWWGGGWWGF', 'TI       IT', 'TI       IT', 'TI       IT', 'AGWWGGGWWGA', ' AAIGIGIAA ', '   SGIGS   ', '    SSS    ')
//             .aisle(' FGGWGWGGF ', ' A33   33A ', ' A33   33A ', ' A33   33A ', ' AGGWGWGGA ', '  AAIIIAA  ', '   ASSSA   ', '           ')
//             .aisle(' FGGWGWGGF ', ' A33   33A ', ' A33   33A ', ' A33   33A ', '  AGWGWGA  ', '  AAAAAAA  ', '     S     ', '           ')
//             .aisle('  FFGGGFF  ', '  AAIIIAA  ', '  AAIIIAA  ', '  AAIIIAA  ', '   AAAAA   ', '    ASA    ', '           ', '           ')
//             .aisle('    FFF    ', '    HDH    ', '    HDH    ', '    HDH    ', '    AKA    ', '     S     ', '           ', '           ')
//             .where('K', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('S', Predicates.blocks(GCYMBlocks.CASING_STRESS_PROOF.get())
//                 .or(Predicates.autoAbilities(definition.getRecipeTypes()))
//                 .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
//             .where('H', Predicates.blocks('thermal_extra:shellite_glass'))
//             .where('T', Predicates.blocks('thermal_extra:twinite_glass'))
//             .where('D', Predicates.blocks('thermal_extra:dragonsteel_glass'))
//             .where('I', Predicates.blocks('kubejs:soul_infused_casing'))
//             .where('P', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
//             .where('G', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_GEARBOX.get()))
//             .where('F', Predicates.blocks(GTBlocks.FIREBOX_TUNGSTENSTEEL.get()))
//             .where('A', Predicates.blocks(GCYMBlocks.CASING_ATOMIC.get()))
//             .where('3', Predicates.blocks(GTBlocks.FUSION_CASING.get()))
//             .where('W', Predicates.blocks(GTBlocks.HIGH_POWER_CASING.get()))
//             .where(' ', Predicates.any())
//             .build())
//         .workableCasingModel('gtceu:block/casings/gcym/stress_proof_casing',
//             'gtceu:block/multiblock/implosion_compressor');

// });
