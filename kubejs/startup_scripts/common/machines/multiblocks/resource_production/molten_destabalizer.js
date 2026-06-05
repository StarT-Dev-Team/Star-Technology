GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('molten_destabilizing')
        .category('resource_production')
        .setMaxIOSize(0, 12, 1, 8)
        .setSound(GTSoundEntries.MINER)
        .setProgressBar(GuiTextures.PROGRESS_BAR_DISTILLATION_TOWER, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('molten_destabiliser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('molten_destabilizing')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle(
                    '   FFF   ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '   BBB   ',
                    '         ',
                    '         ',
                    '         ',
                    '         '
                )
                .aisle(
                    ' FFHHHFF ',
                    '  BHHHB  ',
                    '  BHTHB  ',
                    '  BHTHB  ',
                    '  BHHHB  ',
                    '  BZZZB  ',
                    '    B    ',
                    '    B    ',
                    '   HHH   ',
                    '         '
                )
                .aisle(
                    ' FHHHHHF ',
                    ' BHCPCHB ',
                    ' BHCPCHB ',
                    ' BHCPCHB ',
                    ' BHCPCHB ',
                    ' BZCPCZB ',
                    '  BNTNB  ',
                    '  BNTNB  ',
                    '  HHHHH  ',
                    '    B    '
                )
                .aisle(
                    'FHHHHHHHF',
                    ' HCB BCH ',
                    ' HCB BCH ',
                    ' HCB BCH ',
                    ' HCB BCH ',
                    'BZCB BCZB',
                    '  NBPBN  ',
                    '  NB BN  ',
                    ' HHB BHH ',
                    '   NNN   '
                )
                .aisle(
                    'FHHHHHHHF',
                    ' HP P PH ',
                    ' TP P PT ',
                    ' TP P PT ',
                    ' HP P PH ',
                    'BZP P PZB',
                    ' BTPPPTB ',
                    ' BT P TB ',
                    ' HH P HH ',
                    '  BNMNB  '
                )
                .aisle(
                    'FHHHHHHHF',
                    ' HCB BCH ',
                    ' HCB BCH ',
                    ' HCB BCH ',
                    ' HCB BCH ',
                    'BZCB BCZB',
                    '  NBPBN  ',
                    '  NB BN  ',
                    ' HHB BHH ',
                    '   NNN   '
                )
                .aisle(
                    ' FHHHHHF ',
                    ' BHCPCHB ',
                    ' BHCPCHB ',
                    ' BHCPCHB ',
                    ' BHCPCHB ',
                    ' BZCPCZB ',
                    '  BNTNB  ',
                    '  BNTNB  ',
                    '  HHHHH  ',
                    '    B    '
                )
                .aisle(
                    ' FFHHHFF ',
                    '  BHHHB  ',
                    '  BH@HB  ',
                    '  BHHHB  ',
                    '  BHHHB  ',
                    '  BZZZB  ',
                    '    B    ',
                    '    B    ',
                    '   HHH   ',
                    '         '
                )
                .aisle(
                    '   FFF   ',
                    '         ',
                    '         ',
                    '         ',
                    '         ',
                    '   BBB   ',
                    '         ',
                    '         ',
                    '         ',
                    '         '
                )
                .where(' ', Predicates.any())
                .where(
                    'H',
                    Predicates.blocks('gtceu:high_temperature_smelting_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(3))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(12))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                )
                .where('F', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
                .where('B', Predicates.blocks('gtceu:black_steel_frame'))
                .where('T', Predicates.blocks('gtceu:heat_vent'))
                .where('Z', Predicates.blocks('gtceu:zpm_machine_casing'))
                .where('C', Predicates.blocks('gtceu:trinium_coil_block'))
                .where('P', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
                .where('N', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
                .where('M', Predicates.abilities(PartAbility.MUFFLER))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/machines/electromagnetic_separator'
        );
});
