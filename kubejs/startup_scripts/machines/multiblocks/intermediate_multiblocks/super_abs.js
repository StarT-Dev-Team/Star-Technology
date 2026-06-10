GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('super_abs', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('alloy_blast_smelter')
        .machine((holder) => new $CoiledMulti(holder))
        .recipeModifiers([
            GTRecipeModifiers.EBF_OVERCLOCK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            FactoryBlockPattern.start()
            .aisle('   AAA   ', '   AAA   ', '    B    ', '    B    ', '         ', '         ', '         ', '    B    ', '    B    ', '   AAA   ', '   AAA   ')
            .aisle(' CCAAACC ', ' CCCCCCC ', ' B DDD B ', ' B DDD B ', '    B    ', '   CDC   ', '    B    ', ' B DDD B ', ' B DDD B ', ' CCCCCCC ', ' CCAAACC ')
            .aisle(' CAAFAAC ', ' CFFFFFC ', '  DF FD  ', '  DF FD  ', '  BGFGB  ', '  DCDCD  ', '  BGFGB  ', '  DF FD  ', '  DF FD  ', ' CFFFFFC ', ' CAAFAAC ')
            .aisle('AAACCCAAA', 'ACF   FCA', ' DF   FD ', ' DF   FD ', '  G   G  ', ' CC F CC ', '  G   G  ', ' DF   FD ', ' DF   FD ', 'ACF   FCA', 'AAAAFAAAA')
            .aisle('AAFCFCFAA', 'ACF F FCA', 'BD  F  DB', 'BD  F  DB', ' BF F FB ', ' DDFFFDD ', ' BF F FB ', 'BD  F  DB', 'BD  F  DB', 'ACF F FCA', 'AAFFHFFAA')
            .aisle('AAACCCAAA', 'ACF   FCA', ' DF   FD ', ' DF   FD ', '  G   G  ', ' CC F CC ', '  G   G  ', ' DF   FD ', ' DF   FD ', 'ACF   FCA', 'AAAAFAAAA')
            .aisle(' CAAFAAC ', ' CFFFFFC ', '  DF FD  ', '  DF FD  ', '  BGFGB  ', '  DCDCD  ', '  BGFGB  ', '  DF FD  ', '  DF FD  ', ' CFFFFFC ', ' CAAFAAC ')
            .aisle(' CCAAACC ', ' CCCCCCC ', ' B DDD B ', ' B DDD B ', '    B    ', '   CDC   ', '    B    ', ' B DDD B ', ' B DDD B ', ' CCCCCCC ', ' CCAAACC ')
            .aisle('   AAA   ', '   A@A   ', '    B    ', '    B    ', '         ', '         ', '         ', '    B    ', '    B    ', '   AAA   ', '   AAA   ')
                .where(
                    'A',
                    Predicates.blocks('gtceu:high_temperature_smelting_casing')
                        .setMinGlobalLimited(5)
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where(' ', Predicates.any())
                .where('B', Predicates.blocks('gtceu:tungsten_frame'))
                .where('C', Predicates.blocks('gtceu:heat_vent'))
                .where('D', Predicates.heatingCoils())
                .where('F', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
                .where('G', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
                .where('H', Predicates.abilities(PartAbility.MUFFLER))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/gcym/blast_alloy_smelter'
        )
        .additionalDisplay(global.coilMachineTempDisplay);
});
