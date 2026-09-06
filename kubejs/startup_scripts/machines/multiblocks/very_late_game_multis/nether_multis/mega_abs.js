GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('mega_abs', 'multiblock')
        .machine((holder) => new $CoiledMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('alloy_blast_smelter')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.EBF_OVERCLOCK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:extreme_temperature_smelting_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '     B  B  B     |     BBBBBBB     |     C     C     |     C     C     |     CCCCCCC     |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 ',
                ' B  BDEFDFEDB  B | BBBBDDDDDDDBBBB | C   D     D   C | C   DD   DD   C | CCCCCDDDDDCCCCC |      C   C      |       C C       |     CCCCCCC     |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 ',
                '  GEDDDDDDDDDEG  | BDDDDDDDDDDDDDB |  D DDEGHGEDD D  |  D  DDFIFDD  D  | CDDDDDDDDDDDDDC |  C  C     C  C  |   C C     C C   |    CCDDDDDCC    |      C   C      |       C C       |       C C       |       C C       |      C   C      |     C DDD C     |                 |                 |                 |       DDD       |                 |                 |                 |                 |                 |                 ',
                '  EDDDDDDDDDDDE  | BDDDDDDDDDDDDDB |   IDDDDFDDDDI   |   IIDDDDDDDII   | CDFDDDDDDDDDFDC |   F         F   |  CI         IC  |   FDDDDDDDDDF   |   GC   F   CG   |   C    I    C   |   C    G    C   |   C    I    C   |   C    F    C   |   CDDDDIDDDDC   |    C C   C C    |      C   C      |      C   C      |    DDDDDDDDD    |        C        |                 |                 |                 |                 |      BBBBB      ',
                ' BDDDDDDDDDDDDDB | BDDDDDDDDDDDDDB |  DDDDFFFFFDDDD  |   IDDFGFGFDDI   | CDDDDDEFEDDDDDC |       JGJ       |       EFE       |  CDDDDDFDDDDDC  |   CF  GFG  FC   |    I  HHH  I    |    G  HHH  G    |    I  HHH  I    |    F  GFG  F    |   DFDDDEDDDFD   |   CG  FGF  GC   |    E  EHE  E    |    G  FGF  G    |   DFDDDDDDDFD   |    GC  J  CG    |      C F C      |       CGC       |        F        |        J        |    BBBDDDBBB    ',
                'BDDDDDDDDDDDDDDDB|BDDDDDDHFHDDDDDDB|CDDDDDE F EDDDDDC|CDDDDDF   FDDDDDC|CCDDDDG   GDDDDCC|  C  JF   FJ  C  |  C  EG   GE  C  | CCDDDDIGIDDDDCC |     EE   EE     |     HH   HH     |     FH   HF     |     HH   HH     |     EE   EE     |  CDDDDJ JDDDDC  |      E   E      |     JH   HJ     |      E   E      |   DDDDJFJDDDD   |    CFGEJEGFC    |     I HHH I     |     G HHH G     |     I HHH I     |     FGEFEGF     |    BDDDFDDDB    ',
                ' EDDDDDDDDDDDDDE |BDDDDDDHFHDDDDDDB|  EDFEG   GEFDE  | DDDFF     FFDDD |CDDDDG     GDDDDC| C   F     F   C |     G     G     | CDDDDF   FDDDDC |  C  E     E  C  |     H     H     |     H     H     |     H     H     |  C  E     E  C  |   DDDG   GDDD   |   C E     E C   |   C H     H C   |   C E     E C   |   DDDF   FDDD   |     G     G     |    C H   H C    |      F   F      |      H   H      |     GJ   JG     |   BBDFFFFFDBB   ',
                ' FDDDDDDDDDDDDDF |BDDDDHHHIHHHDDDDB|  GDF       FDG  |  FDG       GDF  |CDDDE       EDDDC|    J       J    | C  E       E  C | CDDDI     IDDDC |    G       G    |  C H       H C  |  C H       H C  |  C H       H C  |    G       G    |  DDDJ     JDDD  |    F       F    |    E       E    |    F       F    |  DDDJ     JDDD  |     E     E     |     H     H     |    CH     HC    |     H     H     |     E GIG E     |   BDDFDDDFDDB   ',
                'BDDDDDDDDDDDDDDDB|BDDDDFFIGIFFDDDDB|  HFFF     FFFH  |  I F       F I  |CDDDF       FDDDC|    G       G    |    F       F    | CDDFG     GFDDC |   FF       FF   |   IH       HI   |   GH       HG   |   IH       HI   |   FF       FF   |  DIE       EID  |    G       G    |    H       H    |    G       G    |  DDDF     FDDD  |   CJJ     JJC   |    FH     HF    |    GH     HG    |    FH     HF    |    JF IFI FJ    |   BDFFDKDFFDB   ',
                ' FDDDDDDDDDDDDDF |BDDDDHHHIHHHDDDDB|  GDF       FDG  |  FDG       GDF  |CDDDE       EDDDC|    J       J    | C  E       E  C | CDDDI     IDDDC |    G       G    |  C H       H C  |  C H       H C  |  C H       H C  |    G       G    |  DDDJ     JDDD  |    F       F    |    E       E    |    F       F    |  DDDJ     JDDD  |     E     E     |     H     H     |    CH     HC    |     H     H     |     E GIG E     |   BDDFDDDFDDB   ',
                ' EDDDDDDDDDDDDDE |BDDDDDDHFHDDDDDDB|  EDFEG   GEFDE  | DDDFF     FFDDD |CDDDDG     GDDDDC| C   F     F   C |     G     G     | CDDDDF   FDDDDC |  C  E     E  C  |     H     H     |     H     H     |     H     H     |  C  E     E  C  |   DDDG   GDDD   |   C E     E C   |   C H     H C   |   C E     E C   |   DDDF   FDDD   |     G     G     |    C H   H C    |      F   F      |      H   H      |     GJ   JG     |   BBDFFFFFDBB   ',
                'BDDDDDDDDDDDDDDDB|BDDDDDDHFHDDDDDDB|CDDDDDE F EDDDDDC|CDDDDDF   FDDDDDC|CCDDDDG   GDDDDCC|  C  JF   FJ  C  |  C  EG   GE  C  | CCDDDDIGIDDDDCC |     EE   EE     |     HH   HH     |     FH   HF     |     HH   HH     |     EE   EE     |  CDDDDJ JDDDDC  |      E   E      |     JH   HJ     |      E   E      |   DDDDJFJDDDD   |    CFGEJEGFC    |     I HHH I     |     G HHH G     |     I HHH I     |     FGEFEGF     |    BDDDFDDDB    ',
                ' BDDDDDDDDDDDDDB | BDDDDDDDDDDDDDB |  DDDDFFFFFDDDD  |   IDDFGFGFDDI   | CDDDDDEFEDDDDDC |       JGJ       |       EFE       |  CDDDDDFDDDDDC  |   CF  GFG  FC   |    I  HHH  I    |    G  HHH  G    |    I  HHH  I    |    F  GFG  F    |   DFDDDEDDDFD   |   CG  FGF  GC   |    E  EHE  E    |    G  FGF  G    |   DFDDDDDDDFD   |    GC  J  CG    |      C F C      |       CGC       |        F        |        J        |    BBBDDDBBB    ',
                '  EDDDDDDDDDDDE  | BDDDDDDDDDDDDDB |   IDDDDFDDDDI   |   IIDDD DDDII   | CDFDDDDDDDDDFDC |   F         F   |  CI         IC  |   FDDDDDDDDDF   |   GC   F   CG   |   C    I    C   |   C    G    C   |   C    I    C   |   C    F    C   |   CDDDDIDDDDC   |    C C   C C    |      C   C      |      C   C      |    DDDDDDDDD    |        C        |                 |                 |                 |                 |      BBBBB      ',
                '  GEDDDDDDDDDEG  | BDDDDDDDDDDDDDB |  D DDEG@GEDD D  |  D  DDFIFDD  D  | CDDDDDDDDDDDDDC |  C  C     C  C  |   C C     C C   |    CCDDDDDCC    |      C   C      |       C C       |       C C       |       C C       |      C   C      |     C DDD C     |                 |                 |                 |       DDD       |                 |                 |                 |                 |                 |                 ',
                ' B  BDEFDFEDB  B | BBBBDDDDDDDBBBB | C   D     D   C | C   DD   DD   C | CCCCCDDDDDCCCCC |      C   C      |       C C       |     CCCCCCC     |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 ',
                '     B  B  B     |     BBBBBBB     |     C     C     |     C     C     |     CCCCCCC     |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |                 ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.kjsBlock('reinforced_brimstone_casing'),
                    C: P.gtBlock('enriched_estalt_frame'),

                    D: P.anyOf([
                        P.kjsBlock('extreme_temperature_smelting_casing', { min: 898 }),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    E: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    F: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    G: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    H: P.heatingCoil(),
                    I: P.kjsBlock('enriched_naquadah_heat_escape_casing'),
                    J: P.kjsBlock('enriched_naquadah_machine_casing'),
                    K: P.ability(PA.muffler),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/nether_multis/extreme_temperature_smelting_casing',
            'gtceu:block/multiblock/gcym/blast_alloy_smelter'
        )
        .additionalDisplay(global.coilMachineTempDisplay);
});
