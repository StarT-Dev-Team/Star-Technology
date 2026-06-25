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
            newFactoryBlockPattern([
                ' EEHEE | N   N | N   N | N   N | N   N | EEHEE ',
                'EEEHEEE|N FSF N|N MMM N|N MMM N|N FSF N|EEEHEEE',
                'EEHHHEE| FEEEF | M M M | M M M | FEEEF |EEHHHEE',
                'HHHHHHH| SEEES | MMMMM | MMMMM | SEEES |HHHOHHH',
                'EEHHHEE| FEEEF | M M M | M M M | FEEEF |EEHHHEE',
                'EEEHEEE|N FSF N|N MMM N|N MMM N|N FSF N|EEEHEEE',
                ' EE@EE | N   N | N   N | N   N | N   N | EEHEE ',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    E: P.kjsBlock('enderium_casing'),
                    N: P.gtBlock('neutronium_frame'),
                    H: P.anyOf([
                        P.block(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING.get(), { min: 22 }),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    M: P.kjsBlock('zalloy_coil_block'),
                    S: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    F: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    O: P.ability(PA.muffler),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
