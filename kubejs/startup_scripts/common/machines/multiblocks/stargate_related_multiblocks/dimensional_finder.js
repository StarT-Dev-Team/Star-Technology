GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('dimensional_finder')
        .category('gate_construction')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('dimensional_finder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $OpticalComputationMachine(holder))
        .recipeType('dimensional_finder')
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('    B   B    ', '    B   B    ', '    B   B    ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '      C      ', '             ', '             ', '             ', '      C      ', '             ') 
            .aisle('  DDEEEEEDD  ', '  DDEEEEEDD  ', '    B   B    ', '    F   F    ', '    F   F    ', '  GGF   FGG  ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '    H   H    ', '      H      ', '    H   H    ', '             ', '             ') 
            .aisle('  DDEEEEEDD  ', '  DDEIIIEDD  ', '    B   B    ', '             ', '             ', '  GGGGGGGGG  ', '             ', '             ', '             ', '   GG   GG   ', '             ', '             ', '             ', '             ', '             ', '             ', '  H       H  ', '             ', '             ', '             ', '  H       H  ', '             ') 
            .aisle(' BEEEEEEEEEB ', ' BEEBBBBBEEB ', ' BBBBJCJBBBB ', '  F BJBJB F  ', '  F BJCJB F  ', '  FGBIBIBGF  ', '    F   F    ', '    F   F    ', '    F   F    ', '   GGGGGGG   ', '             ', '             ', '             ', '    GG GG    ', '             ', '             ', '             ', '   C     C   ', '             ', '   C     C   ', '             ', '             ') 
            .aisle('  EEEEEEEEE  ', '  EIBKKKBIE  ', '    JLLLJ    ', '    JLLLJ    ', '    JLLLJ    ', '   GIKBKIG   ', '     JCJ     ', '     JBJ     ', '     JCJ     ', '    GBBBG    ', '     F F     ', '     F F     ', '     F F     ', '    GGGGG    ', '             ', 'H           H', '             ', '             ', '             ', '             ', '             ', 'H           H') 
            .aisle('  EEEEEEEEE  ', '  EIBKKKBIE  ', '    CLLLC    ', '    BLLLB    ', '    CLLLC    ', '   GBBBBBG   ', '     CMC     ', '     BMB     ', '     CMC     ', '    GBKBG    ', '      J      ', '      N      ', '      J      ', '     GKG     ', '      K      ', '      C      ', '             ', '             ', '  C   O   C  ', '             ', '             ', '             ') 
            .aisle('  EEEEEEEEE  ', '  EIBKKKBIE  ', '    JLLLJ    ', '    JLLLJ    ', '    JLLLJ    ', '   GIKBKIG   ', '     JCJ     ', '     JBJ     ', '     JCJ     ', '    GBBBG    ', '     F F     ', '     F F     ', '     F F     ', '    GGGGG    ', '             ', 'H           H', '             ', '             ', '             ', '             ', '             ', 'H           H') 
            .aisle(' BEEEEEEEEEB ', ' BEEBBBBBEEB ', ' BBBBJCJBBBB ', '  F BJBJB F  ', '  F BJCJB F  ', '  FGBIBIBGF  ', '    F   F    ', '    F   F    ', '    F   F    ', '   GGGGGGG   ', '             ', '             ', '             ', '    GG GG    ', '             ', '             ', '             ', '   C     C   ', '             ', '   C     C   ', '             ', '             ') 
            .aisle('  DDEEEEEDD  ', '  DDEIIIEDD  ', '    B   B    ', '             ', '             ', '  GGGGGGGGG  ', '             ', '             ', '             ', '   GG   GG   ', '             ', '             ', '             ', '             ', '             ', '             ', '  H       H  ', '             ', '             ', '             ', '  H       H  ', '             ') 
            .aisle('  DDEEEEEDD  ', '  DDEE@EEDD  ', '    B   B    ', '    F   F    ', '    F   F    ', '  GGF   FGG  ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '    H   H    ', '      H      ', '    H   H    ', '             ', '             ') 
            .aisle('    B   B    ', '    B   B    ', '    B   B    ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '      C      ', '             ', '             ', '             ', '      C      ', '             ') 
                .where(' ', Predicates.any())
                .where('B', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
                .where('C', Predicates.blocks('gtceu:fusion_glass'))
                .where('D', Predicates.blocks('gtceu:heat_vent'))
                .where(
                    'E',
                    Predicates.blocks('gtceu:high_temperature_smelting_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(3).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(3).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('F', Predicates.blocks('gtceu:trinaquadalloy_frame'))
                .where('G', Predicates.blocks('gtceu:sturdy_machine_casing'))
                .where('H', Predicates.blocks('gtceu:superconducting_coil'))
                .where('I', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
                .where('J', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
                .where('K', Predicates.blocks('gtceu:fusion_coil'))
                .where('L', Predicates.blocks('kubejs:twinite_casing'))
                .where('M', Predicates.blocks('kubejs:lumium_casing'))
                .where('N', Predicates.blocks('kubejs:shellite_casing'))
                .where('O', Predicates.blocks('kubejs:laser_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/machines/scanner'
        );
});
