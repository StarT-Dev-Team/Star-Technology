// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('dynamo_burning')
//         .category('generator')
//         .setEUIO('out')
//         .setMaxIOSize(5, 0, 1, 0)
//         .setSlotOverlay(false, true, true, GuiTextures.FURNACE_OVERLAY_2)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.TURBINE);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('super_dynamo', 'multiblock')
//         .rotationState(RotationState.ALL)
//         .recipeType('dynamo_burning')
//         .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('CCCCCCCCC', 'CFCFCFCFC', 'CFCFCFCFC', 'CCCCCCCCC', '#########', '#########', '#########', '#########')
//             .aisle('CFFFFFFFC', 'FIIIIIIIF', 'FIIIIIIIC', 'CCCCCCCCC', '#########', '#########', '#########', '#########')
//             .aisle('CFCCCCCFC', 'CIIIIIIIC', 'CIIIIIIIC', 'CCFFFFFCC', '##BBBBB##', '##BBBBB##', '##BBBBB##', '##FFFFF##')
//             .aisle('CFCFFFCFC', 'FIISLSIIF', 'FIISLSIIF', 'CCFSLSFCC', '##BSLSB##', '##BSLSB##', '##BSLSB##', '##FCOCF##')
//             .aisle('CFCFFFCFX', 'CIILSLIIC', 'CIILSLIIC', 'CCFLSLFCC', '##BLSLB##', '##BSLSB##', '##BSLSB##', '##FOMOF##')
//             .aisle('CFCFFFCFC', 'FIISLSIIF', 'FIISLSIIF', 'CCFSLSFCC', '##BSLSB##', '##BSLSB##', '##BSLSB##', '##FCOCF##')
//             .aisle('CFCCCCCFC', 'CIIIIIIIC', 'CIIIIIIIC', 'CCFFFFFCC', '##BBBBB##', '##BBBBB##', '##BBBBB##', '##FFFFF##')
//             .aisle('CFFFFFFFC', 'FIIIIIIIF', 'FIIIIIIIC', 'CCCCCCCCC', '#########', '#########', '#########', '#########')
//             .aisle('CCCCCCCCC', 'CFCFCFCFC', 'CFCFCFCFC', 'CCCCCCCCC', '#########', '#########', '#########', '#########')
//             .where('X', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get()).setMinGlobalLimited(130)
//                 .or(Predicates.autoAbilities(definition.getRecipeType()))
//                 .or(Predicates.autoAbilities(true, false)))
//             .where('F', Predicates.blocks(GTBlocks.FIREBOX_TITANIUM.get()).setExactLimit(97))
//             .where('L', Predicates.blocks('thermal:lumium_glass'))
//             .where('S', Predicates.blocks('thermal:signalum_glass'))
//             .where('I', Predicates.blocks('thermal_extra:soul_infused_block'))
//             .where('B', Predicates.heatingCoils())
//             .where('M', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
//             .where('O', Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(4))
//             .where('#', Predicates.air())
//             .build()
//         ).workableCasingRenderer('gtceu:block/casings/solid/machine_casing_stable_titanium',
//             'gtceu:block/multiblocks/electric_blast_furnace', false);
// });
