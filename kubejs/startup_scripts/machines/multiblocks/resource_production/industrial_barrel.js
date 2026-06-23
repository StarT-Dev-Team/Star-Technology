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
            newFactoryBlockPattern([
                'FCCCF|FCCCF|FCCCF|FCCCF',
                'CCCCC|CPFPC|C   C|CGGGC',
                'CCCCC|CF FC|C   C|CGGGC',
                'CCCCC|CPFPC|C   C|CGGGC',
                'FCCCF|FC@CF|FCCCF|FCCCF',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    C: P.anyOf([
                        P.block(GTBlocks.CASING_STAINLESS_CLEAN.get()),
                        P.ability(PartAbility.IMPORT_ITEMS, { max: 2, prev: 1 }),
                        P.ability(PartAbility.INPUT_ENERGY, { max: 2, prev: 1 }),
                        P.ability(PartAbility.EXPORT_ITEMS, { max: 2, prev: 1 }),
                        P.ability(PartAbility.IMPORT_FLUIDS, { max: 2, prev: 1 }),
                        P.ability(PartAbility.EXPORT_FLUIDS, { max: 2, prev: 1 }),
                        P.ability(PartAbility.MAINTENANCE, { exact: 1 }),
                    ]),
                    F: P.gtBlock('black_steel_frame'),
                    P: P.block(GTBlocks.CASING_STEEL_PIPE.get()),
                    G: P.gtBlock('laminated_glass'),
                    ' ': P.air(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/distillery'
        );
});
