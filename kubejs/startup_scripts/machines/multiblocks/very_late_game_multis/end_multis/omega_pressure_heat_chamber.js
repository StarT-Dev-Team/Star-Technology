GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('omega_pressure_heat_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('pressure_heat_chamber')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:extreme_temperature_smelting_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '    BBB    |           |           |           |           |           |           |           |    BBB    ',
                '  CCCBCCC  |   D E D   |   D E D   |    EEE    |   DEFED   |    EEE    |   D E D   |   D E D   |  CCCBCCC  ',
                ' CCCCBCCCC |           |           |  D CCC D  |    CGC    |  D CCC D  |           |           | CCCCBCCCC ',
                ' CCBBBBBCC | D       D | D       D |    HHH    | D  HGH  D |    HHH    | D       D | D       D | CCBBBBBCC ',
                'BCCBCCCBCCB|    III    |    HHH    | ECH   HCE | ECH   HCE | ECH   HCE |    HHH    |    III    |BCCBCCCBCCB',
                'BBBBCCCBBBB| E  IGI  E | E  HGH  E | ECH   HCE | FGG   GGF | ECH   HCE | E  HGH  E | E  IGI  E |BBBBCFCBBBB',
                'BCCBCCCBCCB|    III    |    HHH    | ECH   HCE | ECH   HCE | ECH   HCE |    HHH    |    III    |BCCBCCCBCCB',
                ' CCBBBBBCC |         D |         D |    HHH    | D  HGH  D |    HHH    | D       D | D       D | CCBBBBBCC ',
                ' CCCCBCCCC | D         | D         |  D CCC D  |    CGC    |  D CCC D  |           |           | CCCCBCCCC ',
                '  CCCBCCC  |   D E D   |   D E D   |    EEE    |   DE@ED   |    EEE    |   D E D   |   D E D   |  CCCBCCC  ',
                '    BBB    |           |           |           |           |           |           |           |    BBB    ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.gtBlock('high_temperature_smelting_casing'),
                    C: P.kjsBlock('enriched_naquadah_machine_casing'),
                    D: P.gtBlock('void_frame'),
                    E: P.anyOf([
                        P.kjsBlock('extreme_temperature_smelting_casing'),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    F: P.kjsBlock('enriched_naquadah_heat_escape_casing'),
                    G: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    H: P.kjsBlock('signalum_casing'),
                    I: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/nether_multis/extreme_temperature_smelting_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
