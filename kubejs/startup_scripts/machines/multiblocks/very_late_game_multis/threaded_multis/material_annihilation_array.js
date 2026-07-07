GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('material_annihilation_array', 'multiblock')
        .machine((holder) => new $BulkingThreadedMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['bulk_ore_processing_array', 'arc_furnace', 'macerator', 'pulverizer'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $BulkingThreadedMulti.modifier,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:absolute_annihilation_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '      BBBBB      |      BBBBB      |      BBBBB      |      BBBBB      |      BBBBB      |      BBBBB      |                 |                 |                 |                 |                 |                 ',
                '      BBBBB      |      BCDCB      |      BCCCB      |      BCDCB      |      BEEEB      |      B   B      |                 |                 |                 |                 |                 |                 ',
                '      BBBBB      |      BDDDB      |      BDCDB      |      BDDDB      |      BEEEB      |      B   B      |                 |                 |                 |                 |                 |                 ',
                'BBBBB BBBBB BBBBB|BBBBB BCDCB BBBBB|BBBBB BCCCB BBBBB|BBBBB BCDCB BBBBB|BBBBB BEEEB BBBBB|BBBBB B   B BBBBB|                 |                 |                 |                 |                 |                 ',
                'BBBBB BBBBB BBBBB|BCDCB BBBBB BCDCB|BCDCB BBCBB BCDCB|BCDCB BBBBB BCDCB|BEEEB BBBBB BEEEB|B   B BBBBB B   B|                 |                 |                 |                 |                 |                 ',
                'BBBBB       BBBBB|BDDDB   F   BDDDB|BCCCB   C   BCCCB|BDDDB   F   BDDDB|BEEEB       BEEEB|B   B       B   B|                 |                 |                 |                 |                 |                 ',
                'BBBBB       BBBBB|BCDCBFF F FFBCDCB|BCDCCCC C CCCCDCB|BCDCBFF F FFBCDCB|BEEEB       BEEEB|B   B       B   B|                 |                 |                 |                 |                 |                 ',
                'BBBBB       BBBBB|BBBBB F F F BBBBB|BBBBB C C C BBBBB|BBBBB F F F BBBBB|BBBBB       BBBBB|BBBBB       BBBBB|                 |                 |                 |                 |                 |                 ',
                '                 |      F F F      |      C C C      |      F F F      |                 |                 |                 |                 |                 |                 |                 |                 ',
                '                 |      F F F      |      C C C      |      F F F      |                 |                 |                 |                 |                 |                 |                 |                 ',
                '     BBBBBBB     |     BBBBBBB     |     BCBCBCB     |     BBBBBBB     |     BBBBBBB     |      BBBBB      |                 |                 |                 |                 |                 |                 ',
                '   BBBBBBBBBBB   |   BBBBBBBBBBB   |   BBBCBCBCBBB   |    BBBBBBBBB    |    BBBBBBBBB    |    BBBBBBBBB    |     BBBBBBB     |                 |                 |                 |                 |                 ',
                '  BBBBBBBBBBBBB  |  BBBBDDDDDBBBB  |  BBBBCCCCCBBBB  |   BBBDDDDDBBB   |   BBBBBBBBBBB   |    BBBBBBBBB    |    BBBBBBBBB    |                 |                 |                 |                 |                 ',
                '  BBBBBBBBBBBBB  |  BBDDDFDFDDDBB  |  BBD  FCF  DBB  |  BBD  FFF  DBB  |  BBBB F F BBBB  |  BBBBEEEEEBBBB  |   BBB     BBB   |                 |                 |                 |                 |                 ',
                ' BBBBBBBBBBBBBBB | BBBDFDFDFDFDBBB | BBB F  C  F BBB | BBB F     F BBB | BBBBF     FBBBB |  BBBEEEEEEEBBB  |  BBB       BBB  |                 |                 |                 |                 |                 ',
                ' BBBBBBBBBBBBBBB | BBDDDDDDDDDDDBB | BBC    C    CBB | BBD         DBB | BBB         BBB | BBBEEEBBBEEEBBB |  BB   BBB   BB  |       BBB       |        B        |                 |                 |                 ',
                ' BBBBBBBBBBBBBBB |  GDFFDFFFDFFDG  |  BCF  FCF  FCB  |  GDF  FFF  FDG  | BBBF  F F  FBBB | BBBEEBBBBBEEBBB |  BB  BDFDB  BB  |      B F B      |       B B       |       BBB       |        B        |        H        ',
                ' BBBBBBBBBBBBBBB |  BDDDDFFFDDDDB  |  BCCCCCCCCCCCB  |  BDF  FCF  FDB  | BBB    C    BBB | BBBEEBBCBBEEBBB |  BB  BFCFB  BB  |      BFCFB      |      B C B      |       BCB       |       BIB       |       H H       ',
                ' BBBBBBBBBBBBBBB |  GDFFDFFFDFFDG  |  BCF  FCF  FCB  |  GDF  FFF  FDG  | BBBF  F F  FBBB | BBBEEBBBBBEEBBB |  BB  BDFDB  BB  |      B F B      |       B B       |       BBB       |        B        |        H        ',
                ' BBBBBBBBBBBBBBB | BBDDDDDDDDDDDBB | BBC    C    CBB | BBD         DBB | BBB         BBB | BBBEEEBBBEEEBBB |  BB   BBB   BB  |       BJB       |        B        |                 |                 |                 ',
                ' BBBBBBBBBBBBBBB | BBBDFDFDFDFDBBB | BBB F  C  F BBB | BBB F     F BBB | BBBBF     FBBBB |  BBBEEEEEEEBBB  |  BBB       BBB  |                 |                 |                 |                 |                 ',
                '  BBBBBBBBBBBBB  |  BBDDDFDFDDDBB  |  BBD  FCF  DBB  |  BBD  FFF  DBB  |  BBBB F F BBBB  |  BBBBEEEEEBBBB  |   BBB     BBB   |                 |                 |                 |                 |                 ',
                '  BBBBBBBBBBBBB  |  BBBBDDDDDBBBB  |  BBBBCCCCCBBBB  |   BBBDDDDDBBB   |   BBBBBBBBBBB   |    BBBBBBBBB    |    BBBBBBBBB    |                 |                 |                 |                 |                 ',
                '   BBBBBBBBBBB   |   BBBBBBBBBBB   |   BBBBB@BBBBB   |    BBBBBBBBB    |    BBBBBBBBB    |    BBBBBBBBB    |     BBBBBBB     |                 |                 |                 |                 |                 ',
                '     BBBBBBB     |     BB   BB     |     BB   BB     |     BB   BB     |     BBBBBBB     |      BBBBB      |                 |                 |                 |                 |                 |                 ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('absolute_annihilation_casing'),
                        P.ability(PA.itemIn, { max: 20, view: 1 }),
                        P.ability(PA.itemOut, { max: 20, view: 1 }),
                        P.ability(PA.fluidIn, { max: 20, view: 1 }),
                        P.ability(PA.fluidOut, { max: 20, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.kjsBlock('nyanium_pipe_casing'),
                    D: P.kjsBlock('nyanium_gearbox'),
                    E: P.kjsBlock('absolute_annihilators'),
                    F: P.gtBlock('zeroidic_trinate_steel_frame'),
                    G: P.threadingBlocks(),
                    H: P.kjsBlock('atomic_convergence_casing'),
                    I: P.ability(PA.muffler),
                    J: P.coreBlock('threading_controller'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/absolute_annihilation_casing',
            'gtceu:block/machines/macerator'
        );
});
