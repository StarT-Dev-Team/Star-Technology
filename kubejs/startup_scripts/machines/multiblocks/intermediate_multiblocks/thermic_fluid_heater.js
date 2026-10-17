GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('thermic_fluid_heater', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .bottomTooltips([Text.translate('start.multiblock_contest.1M.top_20', Text.literal('kiiyoko'))])
        .recipeType('fluid_heater')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:clean_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' AAA | BBB | CCC | CCC | CCC | BBB |     ',
                'AABAA|BBEBB|CF FC|CF FC|CF FC|BBEBB|  B  ',
                'ABBBA|BEGEB|C G C|C G C|C G C|BEGEB| BHB ',
                'AABAA|BBEBB|CF FC|CF FC|CF FC|BBEBB|  B  ',
                ' AAA | B@B | CCC | CCC | CCC | BBB |     ',
            ])
                .whereDict({
                    B: P.anyOf([
                        P.gtBlock('clean_machine_casing', { min: 10 }),
                        P.ability(PA.fluidIn, { max: 1 }),
                        P.ability(PA.fluidOut, { max: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    A: P.kjsBlock('stainless_steel_firebox_casing'),
                    C: P.gtBlock('cleanroom_glass'),
                    E: P.gtBlock('steel_pipe_casing'),
                    F: P.gtBlock('kanthal_coil_block'),
                    G: P.gtBlock('titanium_pipe_casing'),
                    H: P.gtBlock('stainless_steel_frame'),
                    ' ': P.any(),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/fluid_heater'
        );
});
