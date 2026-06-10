GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('material_annihilation_array', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['bulk_ore_processing_array', 'arc_furnace', 'macerator', 'pulverizer'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:absolute_annihilation_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('      BBBBB      ', '      BBBBB      ', '      BBBBB      ', '      BBBBB      ', '      BBBBB      ', '      BBBBB      ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('      BBBBB      ', '      BCDCB      ', '      BCCCB      ', '      BCDCB      ', '      BEEEB      ', '      B   B      ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('      BBBBB      ', '      BDDDB      ', '      BDCDB      ', '      BDDDB      ', '      BEEEB      ', '      B   B      ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('BBBBB BBBBB BBBBB', 'BBBBB BCDCB BBBBB', 'BBBBB BCCCB BBBBB', 'BBBBB BCDCB BBBBB', 'BBBBB BEEEB BBBBB', 'BBBBB B   B BBBBB', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('BBBBB BBBBB BBBBB', 'BCDCB BBBBB BCDCB', 'BCDCB BBCBB BCDCB', 'BCDCB BBBBB BCDCB', 'BEEEB BBBBB BEEEB', 'B   B BBBBB B   B', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('BBBBB       BBBBB', 'BDDDB   F   BDDDB', 'BCCCB   C   BCCCB', 'BDDDB   F   BDDDB', 'BEEEB       BEEEB', 'B   B       B   B', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('BBBBB       BBBBB', 'BCDCBFF F FFBCDCB', 'BCDCCCC C CCCCDCB', 'BCDCBFF F FFBCDCB', 'BEEEB       BEEEB', 'B   B       B   B', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('BBBBB       BBBBB', 'BBBBB F F F BBBBB', 'BBBBB C C C BBBBB', 'BBBBB F F F BBBBB', 'BBBBB       BBBBB', 'BBBBB       BBBBB', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('                 ', '      F F F      ', '      C C C      ', '      F F F      ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('                 ', '      F F F      ', '      C C C      ', '      F F F      ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('     BBBBBBB     ', '     BBBBBBB     ', '     BCBCBCB     ', '     BBBBBBB     ', '     BBBBBBB     ', '      BBBBB      ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('   BBBBBBBBBBB   ', '   BBBBBBBBBBB   ', '   BBBCBCBCBBB   ', '    BBBBBBBBB    ', '    BBBBBBBBB    ', '    BBBBBBBBB    ', '     BBBBBBB     ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('  BBBBBBBBBBBBB  ', '  BBBBDDDDDBBBB  ', '  BBBBCCCCCBBBB  ', '   BBBDDDDDBBB   ', '   BBBBBBBBBBB   ', '    BBBBBBBBB    ', '    BBBBBBBBB    ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('  BBBBBBBBBBBBB  ', '  BBDDDFDFDDDBB  ', '  BBD  FCF  DBB  ', '  BBD  FFF  DBB  ', '  BBBB F F BBBB  ', '  BBBBEEEEEBBBB  ', '   BBB     BBB   ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle(' BBBBBBBBBBBBBBB ', ' BBBDFDFDFDFDBBB ', ' BBB F  C  F BBB ', ' BBB F     F BBB ', ' BBBBF     FBBBB ', '  BBBEEEEEEEBBB  ', '  BBB       BBB  ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle(' BBBBBBBBBBBBBBB ', ' BBDDDDDDDDDDDBB ', ' BBC    C    CBB ', ' BBD         DBB ', ' BBB         BBB ', ' BBBEEEBBBEEEBBB ', '  BB   BBB   BB  ', '       BBB       ', '        B        ', '                 ', '                 ', '                 ')
            .aisle(' BBBBBBBBBBBBBBB ', '  GDFFDFFFDFFDG  ', '  BCF  FCF  FCB  ', '  GDF  FFF  FDG  ', ' BBBF  F F  FBBB ', ' BBBEEBBBBBEEBBB ', '  BB  BDFDB  BB  ', '      B F B      ', '       B B       ', '       BBB       ', '        B        ', '        H        ')
            .aisle(' BBBBBBBBBBBBBBB ', '  BDDDDFFFDDDDB  ', '  BCCCCCCCCCCCB  ', '  BDF  FCF  FDB  ', ' BBB    C    BBB ', ' BBBEEBBCBBEEBBB ', '  BB  BFCFB  BB  ', '      BFCFB      ', '      B C B      ', '       BCB       ', '       BIB       ', '       H H       ')
            .aisle(' BBBBBBBBBBBBBBB ', '  GDFFDFFFDFFDG  ', '  BCF  FCF  FCB  ', '  GDF  FFF  FDG  ', ' BBBF  F F  FBBB ', ' BBBEEBBBBBEEBBB ', '  BB  BDFDB  BB  ', '      B F B      ', '       B B       ', '       BBB       ', '        B        ', '        H        ')
            .aisle(' BBBBBBBBBBBBBBB ', ' BBDDDDDDDDDDDBB ', ' BBC    C    CBB ', ' BBD         DBB ', ' BBB         BBB ', ' BBBEEEBBBEEEBBB ', '  BB   BBB   BB  ', '       BJB       ', '        B        ', '                 ', '                 ', '                 ')
            .aisle(' BBBBBBBBBBBBBBB ', ' BBBDFDFDFDFDBBB ', ' BBB F  C  F BBB ', ' BBB F     F BBB ', ' BBBBF     FBBBB ', '  BBBEEEEEEEBBB  ', '  BBB       BBB  ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('  BBBBBBBBBBBBB  ', '  BBDDDFDFDDDBB  ', '  BBD  FCF  DBB  ', '  BBD  FFF  DBB  ', '  BBBB F F BBBB  ', '  BBBBEEEEEBBBB  ', '   BBB     BBB   ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('  BBBBBBBBBBBBB  ', '  BBBBDDDDDBBBB  ', '  BBBBCCCCCBBBB  ', '   BBBDDDDDBBB   ', '   BBBBBBBBBBB   ', '    BBBBBBBBB    ', '    BBBBBBBBB    ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('   BBBBBBBBBBB   ', '   BBBBBBBBBBB   ', '   BBBBB@BBBBB   ', '    BBBBBBBBB    ', '    BBBBBBBBB    ', '    BBBBBBBBB    ', '     BBBBBBB     ', '                 ', '                 ', '                 ', '                 ', '                 ')
            .aisle('     BBBBBBB     ', '     BB   BB     ', '     BB   BB     ', '     BB   BB     ', '     BBBBBBB     ', '      BBBBB      ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ')
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('kubejs:absolute_annihilation_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('kubejs:nyanium_pipe_casing'))
                .where('D', Predicates.blocks('kubejs:nyanium_gearbox'))
                .where('E', Predicates.blocks('kubejs:absolute_annihilators'))
                .where('F', Predicates.blocks('gtceu:zeroidic_trinate_steel_frame'))
                .where('G', $StarTThreadingStatBlocks.threadingStatBlocks())
                .where('H', Predicates.blocks('kubejs:atomic_convergence_casing'))
                .where('I', Predicates.abilities(PartAbility.MUFFLER))
                .where('J', Predicates.blocks('start_core:threading_controller'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/absolute_annihilation_casing',
            'gtceu:block/machines/macerator'
        );
});
