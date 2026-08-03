GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_gas_collector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('gas_collector')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '       |       |       |       |       |       |  FFF  ',
                '  PPP  |  CCC  |  CGC  |  CGC  |  CGC  |  CCC  | FMMMF ',
                ' PCCCP | CIIIC | CIIIC | CIIIC | CIIIC | CIIIC |FMEEEMF',
                ' PCCCP | HIIIH | HIPIH | HIPIH | HIPIH | HIPIH |FMEPEMF',
                ' PCCCP | CIIIC | CIIIC | CIIIC | CIIIC | CIIIC |FMEEEMF',
                '  PPP  |  C@C  |  CGC  |  CGC  |  CGC  |  CCC  | FMMMF ',
                '       |       |       |       |       |       |  FFF  ',
            ])
                .whereDict({
                    C: P.anyOf([
                        P.gtBlock('clean_machine_casing', { min: 10 }),
                        P.ability(PA.itemIn, { max: 1 }),
                        P.ability(PA.fluidOut, { max: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    P: P.kjsBlock('pallaridium_pipe_casing'),
                    G: P.gtBlock('laminated_glass'),
                    F: P.gtBlock('iridium_frame'),
                    M: P.gtBlock('molybdenum_disilicide_coil_block'),
                    I: P.gtBlock('inert_machine_casing'),
                    E: P.kjsBlock('pallaridium_engine_intake_casing'),
                    H: P.gtBlock('high_power_casing'),
                    ' ': P.any(),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/gas_collector'
        );
});
