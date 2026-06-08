GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('industrial_fishery')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('industrial_fishery', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_fishery')
        .appearanceBlock(() => Block.getBlock('gtceu:clean_machine_casing'))
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('A BBB A', 'A BBB A', 'A BBB A', 'A BBB A', 'A BBB A', 'AABBBAA')
                .aisle(' BBBBB ', ' BCCCB ', ' BCCCB ', ' BCCCB ', ' BCCCB ', 'ABDDDBA')
                .aisle('BBBBBBB', 'BCCCCCB', 'BCCCCCB', 'BCCCCCB', 'BCCCCCB', 'BDDDDDB')
                .aisle('BBBBBBB', 'BCCCCCB', 'BCCCCCB', 'BCCCCCB', 'BCCCCCB', 'BDDDDDB')
                .aisle('BBBBBBB', 'BCCCCCB', 'BCCCCCB', 'BCCCCCB', 'BCCCCCB', 'BDDDDDB')
                .aisle(' BBBBB ', ' BCCCB ', ' BCCCB ', ' BCCCB ', ' BCCCB ', 'ABDDDBA')
                .aisle('A BBB A', 'A B@B A', 'A BBB A', 'A BBB A', 'A BBB A', 'AABBBAA')
                .where('A', Predicates.blocks('gtceu:blue_steel_frame'))
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('gtceu:clean_machine_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(5).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(5).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('minecraft:water'))
                .where('D', Predicates.blocks('gtceu:laminated_glass'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/centrifuge'
        );
});
