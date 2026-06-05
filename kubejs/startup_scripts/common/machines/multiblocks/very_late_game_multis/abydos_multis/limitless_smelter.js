GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('limitless_smelter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $CoiledMulti(holder))
        .recipeTypes([
            'electric_furnace',
            'electric_vanilla_blast_furnace',
            'electric_smoking_furnace',
            'alloy_smelter',
        ])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.MULTI_SMELTER_PARALLEL,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:high_temperature_smelting_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('ABBBA', 'A B A', 'A A A', 'A B A', 'ABBBA')
                .aisle('BBBBB', ' CCC ', ' CCC ', ' CCC ', 'BBBBB')
                .aisle('BBBBB', 'BC CB', 'AC CA', 'BC CB', 'BBDBB')
                .aisle('BBBBB', ' CCC ', ' CCC ', ' CCC ', 'BBBBB')
                .aisle('AB@BA', 'A B A', 'A A A', 'A B A', 'ABBBA')
                .where('A', Predicates.blocks('gtceu:tungsten_frame'))
                .where(
                    'B',
                    Predicates.blocks('gtceu:high_temperature_smelting_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                )
                .where(' ', Predicates.any())
                .where('C', Predicates.heatingCoils())
                .where('D', Predicates.abilities(PartAbility.MUFFLER))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/machines/electric_furnace'
        )
        .additionalDisplay(global.multiSmelterParallelDisplay);
});
