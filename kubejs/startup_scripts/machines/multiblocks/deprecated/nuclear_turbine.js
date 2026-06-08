// const LargeTurbineMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine')

// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('nuclear_turbine')
//         .category('nuclear_turbine')
//         .setEUIO('out')
//         .setMaxIOSize(0, 0, 1, 1)
//         .setSound(GTSoundEntries.TURBINE);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('nuclear_turbine', 'multiblock' /*, (holder) => new LargeTurbineMachine(holder, GTValues.HV)*/)
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('nuclear_turbine')
//         .recipeModifier((machine, recipe) => LargeTurbineMachine.recipeModifier(machine, recipe), true)
//         .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('  HHH SSS HHH  ', '   H  SES  H   ', '  HHH SSS HHH  ')
//             .aisle('  HHH SSS HHH  ', '  HHH  F  HHH  ', '  HHH SSS HHH  ')
//             .aisle('  HHHHSSSHHHH  ', '   HHFSSSFHH   ', '  HHHHSSSHHHH  ')
//             .aisle('    HHHSHHH    ', '    FHSGSHF    ', '    HHHSHHH    ')
//             .aisle('CCC  CHHHC  CCC', ' CCCCCHGHCCCCC ', 'CCC  CHHHC  CCC')
//             .aisle('COCCCCHHHCCCCOC', 'CPPPPPPGPPPPPPC', 'COCCCCHHHCCCCOC')
//             .aisle('CCC  CHHHC  CCC', ' CCCCCHGHCCCCC ', 'CCC  CHHHC  CCC')
//             .aisle('    HHHSHHH    ', '    FHSGSHF    ', '    HHHSHHH    ')
//             .aisle('  HHHHSSSHHHH  ', '   HHFSRSFHH   ', '  HHHHSKSHHHH  ')
//             .aisle('  HHH     HHH  ', '  HHH     HHH  ', '  HHH     HHH  ')
//             .aisle('  HHH     HHH  ', '   H       H   ', '  HHH     HHH  ')
//             .where('K', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('F', Predicates.blocks('gtceu:blue_steel_frame'))
//             .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
//             .where('H', Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get()))
//             .where('G', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
//             .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
//             .where('E', Predicates.abilities(PartAbility.OUTPUT_ENERGY))
//             .where('R', Predicates.abilities(PartAbility.ROTOR_HOLDER))
//             .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
//             .where('O', Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setMinGlobalLimited(1)
//                     .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setMinGlobalLimited(1))
//                     .or(Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())))
//             .where(' ', Predicates.air())
//             .build())
//         .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel',
//         'gtceu:block/multiblock/implosion_compressor', false);
// });
