// const $EditableMachineUI = Java.loadClass('com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI')
// const $WidgetGroup = Java.loadClass('com.lowdragmc.lowdraglib.gui.widget.WidgetGroup')
// const $PrimitiveWorkableMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.primitive.PrimitiveWorkableMachine')

// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('primitive_alloy_smelter')
//         .category('primitive_alloy_smelter')
//         .setMaxIOSize(3, 2, 0, 0)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.FIRE);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('primitive_alloy_smelter', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('primitive_alloy_smelter')
//         // .editableUI(new $EditableMachineUI('primitive_alloy_smelter', 'ldlib/assets/ldlib/primitive_alloy_smelter.ui', () => new $WidgetGroup(), (template, machine) => {
//         //     if (machine instanceof $PrimitiveWorkableMachine) {
//         //         machine.recipeType.createEditableUITemplate(false, false).setupUI(template,
//         //         new GTRecipeType.RecipeHolder(() => machine.recipeLogic.getProgressPercent,
//         //                 machine.importItems.storage,
//         //                 machine.exportItems.storage,
//         //                 machine.importFluids,
//         //                 machine.exportFluids,
//         //                 false, false))
//         //     }
//         // }))
//         .appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('SFFFS', 'SFFFS', 'SFFFS', 'SBBBS')
//             .aisle('FFFFF', 'FF#FF', 'FF#FF', 'BFBFB')
//             .aisle('FFFFF', 'F###F', 'F###F', 'BBBBB')
//             .aisle('FFFFF', 'FF#FF', 'FF#FF', 'BFBFB')
//             .aisle('SFFFS', 'SFCFS', 'SFFFS', 'SBBBS')
//             .where('C', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('F', Predicates.blocks(GTBlocks.CASING_PRIMITIVE_BRICKS.get()).setMinGlobalLimited(20)
//                 .or(Predicates.autoAbilities(definition.getRecipeTypes())))
//             .where('S', Predicates.blocks('gtceu:bronze_frame'))
//             .where('B', Predicates.blocks('gtceu:bronze_machine_casing'))
//             .where('#', Predicates.air())
//             .build())
//         .workableCasingRenderer('gtceu:block/casings/solid/machine_primitive_bricks',
//         'gtceu:block/multiblock/primitive_blast_furnace', false);
// });
