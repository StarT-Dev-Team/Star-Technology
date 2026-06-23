GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('riftion_injector')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR)
        .setMaxTooltips(4);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('riftion_injector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('riftion_injector')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
            GTRecipeModifiers.CONSUME_EU_TO_START,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:gravitationally_strained_stabilization_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '      BBBBB      |        C        |        C        |        C        |       CCC       |        C        |        B        |       BBB       |       BDB       |      BBBBB      |      BBEBB      |      BBBBB      |       BDB       |       BBB       |        B        |        C        |       CCC       |        C        |        C        |                 ',
                '    BBBBBBBBB    |     C     C     |     CBBBBBC     |      C   C      |                 |                 |                 |                 |        F        |       GGG       |     CFGGGFC     |       GGG       |        F        |                 |                 |                 |                 |      C   C      |     CBBBBBC     |        C        ',
                '  BBBBDBBBDBBBB  |        C        |    BBBBBBBBB    |    C       C    |                 |                 |                 |                 |                 |    C       C    |                 |    C       C    |                 |                 |                 |                 |                 |    C       C    |    BBBBBBBBB    |      C C C      ',
                '  BBBBDBBBDBBBB  |   C         C   |   CBBBBBBBBBC   |   C         C   |   C         C   |   C         C   |   C         C   |   C         C   |   C    H    C   |       HHH       |      HHHHH      |       HHH       |   C    H    C   |   C         C   |   C         C   |   C         C   |   C         C   |   C         C   |   CBBBBBBBBBC   |      BBBBB      ',
                ' BBBBBFBBBFBBBBB |                 |  BBBBBBBBBBBBB  |  C           C  |                 |                 |                 |      HHHHH      |     HHHHHHH     |  C  HH   HH  C  |     HH   HH     |  C  HH   HH  C  |     HHHHHHH     |      HHHHH      |                 |                 |                 |  C           C  |  BBBBBBBBBBBBB  |    CBBBBBBBC    ',
                ' BBBBBFBBBFBBBBB | C             C | CBBBBBBBBBBBBBC |                 |                 |                 |      HHHHH      |     HH   HH     |    HH     HH    |    H       H    | C  H       H  C |    H       H    |    HH     HH    |     HH   HH     |      HHHHH      |                 |                 |                 | CBBBBBBBBBBBBBC |    BBBBBBBBB    ',
                'BBDDFFFFFFFFFDDBB|      FHHHF      | BBBBBFFFFFBBBBB | C      F      C |                 |        H        |     HHHHHHH     |    HH     HH    |    H       H    |B   H   I   H   B|BF HH  III  HH FB|B   H   I   H   B|    H       H    |    HH     HH    |     HHHHHHH     |        H        |                 | C      F      C | BBBBBFFFFFBBBBB |  CBBBBBDBBBBBC  ',
                'BBBBBBFJJJFBBBBBB|      HGGGH      | BBBBBFJJJFBBBBB |       GGG       |C               C|       HHH       |     HH   HH     |B   H       H   B|B   H   I   H   B|BG H   III   H GB|BG H  IIIII  H GB|BG H   III   H GB|B   H   I   H   B|B   H       H   B|     HH   HH     |       HHH       |C               C|       GGG       | BBBBBFJJJFBBBBB |   BBBBEDEBBBB   ',
                'BBBBBBFJFJFBBBBBB|C C   HGFGH   C C|CBBBBBFJFJFBBBBBC|C     FGGGF     C|C               C|C     HHHHH     C|B    HH   HH    B|B   H       H   B|DF HH  III  HH FD|BG H  IIIII  H GB|EG H  IIIII  H GE|BG H  IIIII  H GB|DF HH  III  HH FD|B   H       H   B|B    HH   HH    B|C     HHHHH     C|C               C|C     FGGGF     C|CBBBBBFJFJFBBBBBC| CCBBBDDFDDBBBCC ',
                'BBBBBBFJJJFBBBBBB|      HGGGH      | BBBBBFJJJFBBBBB |       GGG       |C               C|       HHH       |     HH   HH     |B   H       H   B|B   H   I   H   B|BG H   III   H GB|BG H  IIIII  H GB|BG H   III   H GB|B   H   I   H   B|B   H       H   B|     HH   HH     |       HHH       |C               C|       GGG       | BBBBBFJJJFBBBBB |   BBBBEDEBBBB   ',
                'BBDDFFFFFFFFFDDBB|      FHHHF      | BBBBBFFFFFBBBBB | C      F      C |                 |        H        |     HHHHHHH     |    HH     HH    |    H       H    |B   H   I   H   B|BF HH  III  HH FB|B   H   I   H   B|    H       H    |    HH     HH    |     HHHHHHH     |        H        |                 | C      F      C | BBBBBFFFFFBBBBB |  CBBBBBDBBBBBC  ',
                ' BBBBBFBBBFBBBBB | C             C | CBBBBBBBBBBBBBC |                 |                 |                 |      HHHHH      |     HH   HH     |    HH     HH    |    H       H    | C  H       H  C |    H       H    |    HH     HH    |     HH   HH     |      HHHHH      |                 |                 |                 | CBBBBBBBBBBBBBC |    BBBBBBBBB    ',
                ' BBBBBFBBBFBBBBB |                 |  BBBBBBBBBBBBB  |  C           C  |                 |                 |                 |      HHHHH      |     HHHHHHH     |  C  HH   HH  C  |     HH   HH     |  C  HH   HH  C  |     HHHHHHH     |      HHHHH      |                 |                 |                 |  C           C  |  BBBBBBBBBBBBB  |    CBBBBBBBC    ',
                '  BBBBDBBBDBBBB  |   C         C   |   CBBBBBBBBBC   |   C         C   |   C         C   |   C         C   |   C         C   |   C         C   |   C    H    C   |       HHH       |      HHHHH      |       HHH       |   C    H    C   |   C         C   |   C         C   |   C         C   |   C         C   |   C         C   |   CBBBBBBBBBC   |      BBBBB      ',
                '  BBBBDBBBDBBBB  |        C        |    BBBBBBBBB    |    C       C    |                 |                 |                 |                 |                 |    C       C    |                 |    C       C    |                 |                 |                 |                 |                 |    C       C    |    BBBBBBBBB    |      C C C      ',
                '    BBBBBBBBB    |     C     C     |     CBBBBBC     |      C   C      |                 |                 |                 |                 |        F        |       GGG       |     CFGGGFC     |       GGG       |        F        |                 |                 |                 |                 |      C   C      |     CBBBBBC     |        C        ',
                '      BBBBB      |        C        |        C        |        C        |       CCC       |        C        |        B        |       BBB       |       BDB       |      BBBBB      |      BB@BB      |      BBBBB      |       BDB       |       BBB       |        B        |        C        |       CCC       |        C        |        C        |                 ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('gravitationally_strained_stabilization_casing'),
                        P.ability(PA.itemIn, { max: 4, prev: 1 }),
                        P.ability(PA.itemOut, { max: 4, prev: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                    ]),
                    C: P.gtBlock('stellarium_frame'),
                    D: P.kjsBlock('nyanium_heat_escape_casing'),
                    E: P.kjsBlock('nyanium_engine_intake_casing'),
                    F: P.kjsBlock('nyanium_pipe_casing'),
                    G: P.block('start_core:advanced_fusion_coil'),
                    H: P.kjsBlock('draco_resilient_fusion_glass'),
                    I: P.kjsBlock('core_casing'),
                    J: P.kjsBlock('nyanium_gearbox'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/gravitationally_strained_stabilization_casing',
            'gtceu:block/multiblock/hpca'
        );
});
