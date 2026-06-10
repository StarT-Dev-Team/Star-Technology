GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('industrial_barrel_aqueous')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

    event
        .create('industrial_barrel_magmatic')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('industrial_barrel', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['industrial_barrel_aqueous', 'industrial_barrel_magmatic'])
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('FCCCF', 'FCCCF', 'FCCCF', 'FCCCF')
                .aisle('CCCCC', 'CPFPC', 'C   C', 'CGGGC')
                .aisle('CCCCC', 'CF FC', 'C   C', 'CGGGC')
                .aisle('CCCCC', 'CPFPC', 'C   C', 'CGGGC')
                .aisle('FCCCF', 'FC@CF', 'FCCCF', 'FCCCF')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where(
                    'C',
                    Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('F', Predicates.blocks('gtceu:black_steel_frame'))
                .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
                .where('G', Predicates.blocks('gtceu:laminated_glass'))
                .where(' ', Predicates.air())
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/distillery'
        );
});
