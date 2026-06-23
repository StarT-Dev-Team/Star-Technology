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
                .where('@', P.controller(definition))
                .where('E', P.kjsBlock('enderium_casing'))
                .where('N', P.gtBlock('neutronium_frame'))
                .where(
                    'H',
                    P.block(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING.get())
                        .setMinGlobalLimited(22)
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(P.ability(PA.maintenance, { exact: 1 }))
                        .or(P.ability(PA.parallelHatch, { max: 1 }))
                )
                .where('M', P.kjsBlock('zalloy_coil_block'))
                .where('S', P.kjsBlock('enriched_naquadah_engine_intake_casing'))
                .where('F', P.kjsBlock('enriched_naquadah_firebox_casing'))
                .where('O', P.ability(PA.muffler))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
