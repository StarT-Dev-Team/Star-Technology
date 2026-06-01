GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('plant_ore_processing')
        .category('ore_processing')
        .setEUIO('in')
        .setMaxIOSize(1, 6, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('ore_processing_plant', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('plant_ore_processing')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' AAA ', ' FFF ', ' FFF ', '  F  ', '     ', '     ', '     ')
            .aisle('AFFFA', 'FG GF', 'F   F', ' F F ', ' FFF ', '  F  ', '  B  ')
            .aisle('AFFFA', 'F P F', 'F P F', 'F P F', ' FPF ', ' FMF ', ' B B ')
            .aisle('AFFFA', 'FG GF', 'F   F', ' F F ', ' FFF ', '  F  ', '  B  ')
            .aisle(' AAA ', ' FCF ', ' FFF ', '  F  ', '     ', '     ', '     ')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get()) //All Hatches have a max
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('P', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
            .where('G', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_GEARBOX.get()))
            .where('A', Predicates.blocks(GTBlocks.FIREBOX_TUNGSTENSTEEL.get()))
            .where('B', Predicates.blocks('gtceu:bronze_machine_casing'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'kubejs:block/multiblock/primitive_blast_furnace');

});
