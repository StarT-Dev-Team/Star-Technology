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
            FactoryBlockPattern.start()
                .aisle('       ', '       ', '       ', '       ', '       ', '       ', '  FFF  ')
                .aisle('  PPP  ', '  CCC  ', '  CGC  ', '  CGC  ', '  CGC  ', '  CCC  ', ' FMMMF ')
                .aisle(' PCCCP ', ' CIIIC ', ' CIIIC ', ' CIIIC ', ' CIIIC ', ' CIIIC ', 'FMEEEMF')
                .aisle(' PCCCP ', ' HIIIH ', ' HIPIH ', ' HIPIH ', ' HIPIH ', ' HIPIH ', 'FMEPEMF')
                .aisle(' PCCCP ', ' CIIIC ', ' CIIIC ', ' CIIIC ', ' CIIIC ', ' CIIIC ', 'FMEEEMF')
                .aisle('  PPP  ', '  C@C  ', '  CGC  ', '  CGC  ', '  CGC  ', '  CCC  ', ' FMMMF ')
                .aisle('       ', '       ', '       ', '       ', '       ', '       ', '  FFF  ')
                .where(
                    'C',
                    Predicates.blocks('gtceu:clean_machine_casing')
                        .setMinGlobalLimited(10)
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('P', Predicates.blocks('kubejs:pallaridium_pipe_casing'))
                .where('G', Predicates.blocks('gtceu:laminated_glass'))
                .where('F', Predicates.blocks('gtceu:iridium_frame'))
                .where('M', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
                .where('I', Predicates.blocks('gtceu:inert_machine_casing'))
                .where('E', Predicates.blocks('kubejs:pallaridium_engine_intake_casing'))
                .where('H', Predicates.blocks('gtceu:high_power_casing'))
                .where(' ', Predicates.any())
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/gas_collector'
        );
});
