GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_compact_heat_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('heat_chamber')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle(' EEHEE ', ' N   N ', ' N   N ', ' N   N ', ' N   N ', ' EEHEE ')
                .aisle('EEEHEEE', 'N FSF N', 'N MMM N', 'N MMM N', 'N FSF N', 'EEEHEEE')
                .aisle('EEHHHEE', ' FEEEF ', ' M M M ', ' M M M ', ' FEEEF ', 'EEHHHEE')
                .aisle('HHHHHHH', ' SEEES ', ' MMMMM ', ' MMMMM ', ' SEEES ', 'HHHOHHH')
                .aisle('EEHHHEE', ' FEEEF ', ' M M M ', ' M M M ', ' FEEEF ', 'EEHHHEE')
                .aisle('EEEHEEE', 'N FSF N', 'N MMM N', 'N MMM N', 'N FSF N', 'EEEHEEE')
                .aisle(' EE@EE ', ' N   N ', ' N   N ', ' N   N ', ' N   N ', ' EEHEE ')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('E', Predicates.blocks('kubejs:enderium_casing'))
                .where('N', Predicates.blocks('gtceu:neutronium_frame'))
                .where(
                    'H',
                    Predicates.blocks(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING.get())
                        .setMinGlobalLimited(22)
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                )
                .where('M', Predicates.blocks('kubejs:zalloy_coil_block'))
                .where('S', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
                .where('F', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
                .where('O', Predicates.abilities(PartAbility.MUFFLER))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
