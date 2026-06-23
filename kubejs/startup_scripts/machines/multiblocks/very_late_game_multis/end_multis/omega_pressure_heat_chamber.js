GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
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
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('    BBB    ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '    BBB    ')
            .aisle('  CCCBCCC  ', '   D E D   ', '   D E D   ', '    EEE    ', '   DEFED   ', '    EEE    ', '   D E D   ', '   D E D   ', '  CCCBCCC  ')
            .aisle(' CCCCBCCCC ', '           ', '           ', '  D CCC D  ', '    CGC    ', '  D CCC D  ', '           ', '           ', ' CCCCBCCCC ')
            .aisle(' CCBBBBBCC ', ' D       D ', ' D       D ', '    HHH    ', ' D  HGH  D ', '    HHH    ', ' D       D ', ' D       D ', ' CCBBBBBCC ')
            .aisle('BCCBCCCBCCB', '    III    ', '    HHH    ', ' ECH   HCE ', ' ECH   HCE ', ' ECH   HCE ', '    HHH    ', '    III    ', 'BCCBCCCBCCB')
            .aisle('BBBBCCCBBBB', ' E  IGI  E ', ' E  HGH  E ', ' ECH   HCE ', ' FGG   GGF ', ' ECH   HCE ', ' E  HGH  E ', ' E  IGI  E ', 'BBBBCFCBBBB')
            .aisle('BCCBCCCBCCB', '    III    ', '    HHH    ', ' ECH   HCE ', ' ECH   HCE ', ' ECH   HCE ', '    HHH    ', '    III    ', 'BCCBCCCBCCB')
            .aisle(' CCBBBBBCC ', '         D ', '         D ', '    HHH    ', ' D  HGH  D ', '    HHH    ', ' D       D ', ' D       D ', ' CCBBBBBCC ')
            .aisle(' CCCCBCCCC ', ' D         ', ' D         ', '  D CCC D  ', '    CGC    ', '  D CCC D  ', '           ', '           ', ' CCCCBCCCC ')
            .aisle('  CCCBCCC  ', '   D E D   ', '   D E D   ', '    EEE    ', '   DE@ED   ', '    EEE    ', '   D E D   ', '   D E D   ', '  CCCBCCC  ')
            .aisle('    BBB    ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '    BBB    ')
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('gtceu:high_temperature_smelting_casing'))
            .where('C', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
            .where('D', Predicates.blocks('gtceu:void_frame'))
            .where('E', Predicates.blocks('kubejs:extreme_temperature_smelting_casing')
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('F', Predicates.blocks('kubejs:enriched_naquadah_heat_escape_casing'))
                .where('G', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
                .where('H', Predicates.blocks('kubejs:signalum_casing'))
                .where('I', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/nether_multis/extreme_temperature_smelting_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
