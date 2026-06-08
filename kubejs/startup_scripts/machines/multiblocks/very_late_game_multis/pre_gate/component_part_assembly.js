GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('component_part_assembly')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 2, 0)
        .setHasResearchSlot(true)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setMaxTooltips(4);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('component_part_assembly', 'multiblock')
        .machine((holder) => new $AssemblyLineMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('component_part_assembly')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start($RelativeDirection.BACK, $RelativeDirection.UP, $RelativeDirection.RIGHT)
                .aisle('SSISS', '@SSSS', ' SSS ')
                .aisle('HAIAH', 'GLCLG', ' GSG ')
                .aisle('HAIAH', 'GCCCG', ' GSG ')
                .aisle('SSISS', 'SCLCS', ' SSS ')
                .aisle('HAIAH', 'GCCCG', ' GSG ')
                .aisle('HAIAH', 'GLCLG', ' GSG ')
                .aisle('SSOSS', 'SSSSS', ' SSS ')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where(
                    'S',
                    Predicates.blocks('kubejs:enriched_naquadah_machine_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(3).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.OPTICAL_DATA_RECEPTION).setExactLimit(1))
                )
                .where('G', Predicates.blocks('gtceu:fusion_glass'))
                .where('I', Predicates.blocks('gtceu:ulv_input_bus'))
                .where(
                    'O',
                    Predicates.abilities(PartAbility.EXPORT_ITEMS).addTooltips(
                        Component.translatable('gtceu.multiblock.pattern.location_end')
                    )
                )
                .where('H', Predicates.blocks('gtceu:sturdy_machine_casing'))
                .where('A', Predicates.blocks('gtceu:assembly_line_grating'))
                .where('L', Predicates.blocks('gtceu:assembly_line_unit'))
                .where('C', Predicates.blocks('gtceu:fusion_coil'))
                .where(' ', Predicates.any())
                .build()
        )
        ['partSorter(java.util.function.Function)']((mc) => $AssemblyLineMulti.partSorter(mc))
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'gtceu:block/multiblock/implosion_compressor');
});
