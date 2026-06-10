GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_vacuum_freezer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('vacuum_freezer')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:frostproof_machine_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('AAAAA', 'AAAAA', 'AABAA', 'AABAA', 'AAAAA')
                .aisle('AAAAA', 'ACCCA', 'AC#CA', 'AC#CA', 'AAAAA')
                .aisle('AAAAA', 'AC#CA', 'B###B', 'B###B', 'AAAAA')
                .aisle('AAAAA', 'AA@AA', 'ADDDA', 'ADDDA', 'AAAAA')
                .where(
                    'A',
                    Predicates.blocks('gtceu:frostproof_machine_casing')
                        .setMinGlobalLimited(5)
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('B', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
                .where('C', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
                .where('#', Predicates.air())
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('D', Predicates.blocks('gtceu:tempered_glass'))
                .build()
        )
        .workableCasingModel(
            `gtceu:block/casings/solid/machine_casing_frost_proof`,
            `gtceu:block/multiblock/vacuum_freezer`
        );
});
