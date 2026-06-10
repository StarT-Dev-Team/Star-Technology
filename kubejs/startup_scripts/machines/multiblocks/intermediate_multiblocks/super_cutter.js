GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_cutter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('cutter')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:beryllium_bronze_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('AAAAA', 'AAAAA', 'AAAAA')
                .aisle('AAAAA', 'ABCCA', 'AADDA')
                .aisle('AAAAA', 'A@DDA', 'AADDA')
                .where(
                    'A',
                    Predicates.blocks('kubejs:beryllium_bronze_casing')
                        .setMinGlobalLimited(5)
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('B', Predicates.blocks('gtceu:steel_pipe_casing'))
                .where('C', Predicates.blocks('gtceu:stainless_steel_gearbox'))
                .where('D', Predicates.blocks('gtceu:tempered_glass'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(`kubejs:block/casings/large_cubes/beryllium_bronze_casing`, `gtceu:block/machines/cutter`);
});
