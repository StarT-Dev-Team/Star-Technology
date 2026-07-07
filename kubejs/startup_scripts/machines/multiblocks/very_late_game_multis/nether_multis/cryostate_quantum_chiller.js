GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('quantum_cooling')
        .category('extremely_advanced')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // Filler pre-multi
    event
        .create('cryostate_quantum_chiller', 'multiblock')
        .machine((holder) => new $BulkingMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['quantum_cooling', 'vacuum_freezer'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            $BulkingMulti.modifier,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:subzero_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '       BBBBBBB       |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |       CCCCCCC       |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     ',
                '     BBBDDDDDBBB     |        DEEED        |        DEFED        |        DEEED        |        DEFED        |        DEEED        |     CCCBBBBBCCC     |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |       CCCCCCC       |                     |                     |                     |                     |                     |                     |                     |       CCCCCCC       |                     ',
                '    BBDDDDDDDDDBB    |      DDFFFFFDD      |      DDFCGCFDD      |      DDFCFCFDD      |      DDFCFCFDD      |      DDFCGCFDD      |    CCBBFFFFFBBCC    |        DEEED        |        DEFED        |        DEEED        |        DEEED        |        DEFED        |        DEEED        |     CCCBBBBBCCC     |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |     CCCBBBBBCCC     |        DDDDD        ',
                '   BBDDDDDFDDDDDBB   |   C DFF     FFD C   |   C DFC     CFD C   |   C DFC     CFD C   |   C DFC     CFD C   |   C DFC     CFD C   |   CCBFF     FFBCC   |      DDEEEEEDD      |      DDFFFFFDD      |      DDGCFCGDD      |      DDFCFCFDD      |      DDFCFCFDD      |      DDGCFCGDD      |    CCBBFFFFFBBCC    |        DEEED        |        DEFED        |        DEEED        |        DEFED        |        DEEED        |        DEFED        |        DEEED        |    CCBBEEEEEBBCC    |      DD     DD      ',
                '  BBDDDDDDFDDDDDDBB  |    DF         FD    |    DC         CD    |    DC         CD    |    DC         CD    |    DC         CD    |  CCBF         FBCC  |     DEE     EED     |     DFF     FFD     |     DFC     CFD     |     DFC     CFD     |     DFC     CFD     |     DFC     CFD     |   CCBFF     FFBCC   |      DDEEEEEDD      |      DDFFFFFDD      |      DDFCGCFDD      |      DDFCFCFDD      |      DDFCFCFDD      |      DDFCGCFDD      |      DDFFFFFDD      |   CCBEEEEEEEEEBCC   |     D         D     ',
                ' BBDDDDDEEEEEDDDDDBB |   DFF         FFD   |   DCG         GCD   |   DCF         FCD   |   DCF         FCD   |   DCG         GCD   | CCBFF         FFBCC |    DE         ED    |    DF         FD    |    DC         CD    |    DC         CD    |    DC         CD    |    DC         CD    |  CCBF         FBCC  |     DEE     EED     |     DFF     FFD     |     DFC     CFD     |     DFC     CFD     |     DFC     CFD     |     DFC     CFD     |     DFF     FFD     |  CCBEEEEEEEEEEEBCC  |    D           D    ',
                ' BDDDDDEHHHHHEDDDDDB |  DF             FD  |  DF             FD  |  DF             FD  |  DF             FD  |  DF             FD  | CBF             FBC |   DE           ED   |   DF           FD   |   DF           FD   |   DF           FD   |   DF           FD   |   DF           FD   |  CBF           FBC  |    DE         ED    |    DF         FD    |    DF         FD    |    DF         FD    |    DF         FD    |    DF C EEE C FD    |    DF   EEE   FD    |  CBEEEEEEEEEEEEEBC  |   D             D   ',
                'BBDDDDEEEEEEEEEDDDDBB|C DF             FD C|C DC             CD C|C DC             CD C|C DC             CD C|C DC             CD C|CCBF             FBCC| C DE           ED C | C DF           FD C | C DC           CD C | C DC           CD C | C DC           CD C | C DC           CD C | CCBF           FBCC |  C DE         ED C  |  C DF         FD C  |  C DC         CD C  |  C DC         CD C  |  C DC         CD C  |  C DCCCE   ECCCD C  |  C DF  EIIIE  FD C  | CCBEEEEE   EEEEEBCC |   D             D   ',
                'BDDDDEHEGGFGGEHEDDDDB| DF               FD | DF               FD | DF               FD | DF               FD | DF               FD |CBF               FBC|  DE             ED  |  DF      G      FD  |  DG             GD  |  DF             FD  |  DF             FD  |  DG             GD  | CBF             FBC |   DE           ED   |   DF           FD   |   DF           FD   |   DF           FD   |   DF           FD   |   DF  E     E  FD   |   DF  EIIIIIE  FD   | CBEEEEE     EEEEEBC |  D               D  ',
                'BDDDDEHEGGFGGEHEDDDDB| EF               FE | EC               CE | EC               CE | EC       F       CE | EC               CE |CBF               FBC|  EE             EE  |  EF      F      FE  |  EC             CE  |  EC             CE  |  EC             CE  |  EC      F      CE  | CBF             FBC |   EE           EE   |   EF           FE   |   EC           CE   |   EC           CE   |   EC           CE   |   EC E       E CE   |   EF EIIIIIIIE FE   | CBEEEE       EEEEBC |  D               D  ',
                'BDDFFEHEFFFFFEHEFFDDB| EF       F       FE | FG       F       GF | EF       F       FE | FF      FFF      FF | EG       F       GE |CBF       F       FBC|  EE      F      EE  |  FF    GFFFG    FF  |  EF      F      FE  |  EF      F      FE  |  FF      F      FF  |  EF     FFF     FE  | CBF      F      FBC |   EE     F     EE   |   FF     F     FF   |   EG           GE   |   FF           FF   |   EF           FE   |   FG E       E GF   |   EF EIIIIIIIE FE   | CBEEEE       EEEEBC |  D               D  ',
                'BDDDDEHEGGFGGEHEDDDDB| EF               FE | EC               CE | EC               CE | EC       F       CE | EC               CE |CBF               FBC|  EE             EE  |  EF      F      FE  |  EC             CE  |  EC             CE  |  EC             CE  |  EC      F      CE  | CBF             FBC |   EE           EE   |   EF           FE   |   EC           CE   |   EC           CE   |   EC           CE   |   EC E       E CE   |   EF EIIIIIIIE FE   | CBEEEE       EEEEBC |  D               D  ',
                'BDDDDEHEGGFGGEHEDDDDB| DF               FD | DF               FD | DF               FD | DF               FD | DF               FD |CBF               FBC|  DE             ED  |  DF      G      FD  |  DG             GD  |  DF             FD  |  DF             FD  |  DG             GD  | CBF             FBC |   DE           ED   |   DF           FD   |   DF           FD   |   DF           FD   |   DF           FD   |   DF  E     E  FD   |   DF  EIIIIIE  FD   | CBEEEEE     EEEEEBC |  D               D  ',
                'BBDDDDEEEEEEEEEDDDDBB|C DF             FD C|C DC             CD C|C DC             CD C|C DC             CD C|C DC             CD C|CCBF             FBCC| C DE           ED C | C DF           FD C | C DC           CD C | C DC           CD C | C DC           CD C | C DC           CD C | CCBF           FBCC |  C DE         ED C  |  C DF         FD C  |  C DC         CD C  |  C DC         CD C  |  C DC         CD C  |  C DCCCE   ECCCD C  |  C DF  EIIIE  FD C  | CCBEEEEE   EEEEEBCC |   D             D   ',
                ' BDDDDDEHHHHHEDDDDDB |  DF             FD  |  DF             FD  |  DF             FD  |  DF             FD  |  DF             FD  | CBF             FBC |   DE           ED   |   DF           FD   |   DF           FD   |   DF           FD   |   DF           FD   |   DF           FD   |  CBF           FBC  |    DE         ED    |    DF         FD    |    DF         FD    |    DF         FD    |    DF         FD    |    DF C EEE C FD    |    DF   EEE   FD    |  CBEEEEEEEEEEEEEBC  |   D             D   ',
                ' BBDDDDDEEEEEDDDDDBB |   DFF         FFD   |   DCG         GCD   |   DCF         FCD   |   DCF         FCD   |   DCG         GCD   | CCBFF         FFBCC |    DE         ED    |    DF         FD    |    DC         CD    |    DC         CD    |    DC         CD    |    DC         CD    |  CCBF         FBCC  |     DEE     EED     |     DFF     FFD     |     DFC     CFD     |     DFC     CFD     |     DFC     CFD     |     DFC     CFD     |     DFF     FFD     |  CCBEEEEEEEEEEEBCC  |    D           D    ',
                '  BBDDDDDDFDDDDDDBB  |    DF         FD    |    DC         CD    |    DC         CD    |    DC         CD    |    DC         CD    |  CCBF         FBCC  |     DEE     EED     |     DFF     FFD     |     DFC     CFD     |     DFC     CFD     |     DFC     CFD     |     DFC     CFD     |   CCBFF     FFBCC   |      DDEEEEEDD      |      DDFFFFFDD      |      DDFCGCFDD      |      DDFCFCFDD      |      DDFCFCFDD      |      DDFCGCFDD      |      DDFFFFFDD      |   CCBEEEEEEEEEBCC   |     D         D     ',
                '   BBDDDDDFDDDDDBB   |   C DFF     FFD C   |   C DFC     CFD C   |   C DFC     CFD C   |   C DFC     CFD C   |   C DFC     CFD C   |   CCBFF     FFBCC   |      DDEEEEEDD      |      DDFFFFFDD      |      DDGCFCGDD      |      DDFCFCFDD      |      DDFCFCFDD      |      DDGCFCGDD      |    CCBBFFFFFBBCC    |        DEEED        |        DEFED        |        DEEED        |        DEFED        |        DEEED        |        DEFED        |        DEEED        |    CCBBEEEEEBBCC    |      DD     DD      ',
                '    BBDDDDDDDDDBB    |      DDFFFFFDD      |      DDFCFCFDD      |      DDFCFCFDD      |      DDFCFCFDD      |      DDFCGCFDD      |    CCBBFFFFFBBCC    |        DEEED        |        DEFED        |        DEEED        |        DEEED        |        DEFED        |        DEEED        |     CCCBBBBBCCC     |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |     CCCBBBBBCCC     |        DDDDD        ',
                '     BBBDDDDDBBB     |        DEEED        |        DE@ED        |        DEEED        |        DEEED        |        DEEED        |     CCCBBBBBCCC     |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |       CCCCCCC       |                     |                     |                     |                     |                     |                     |                     |       CCCCCCC       |                     ',
                '       BBBBBBB       |       C     C       |       C     C       |       C     C       |       C     C       |       C     C       |       CCCCCCC       |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     |                     ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    C: P.gtBlock('void_frame'),
                    D: P.kjsBlock('reinforced_cryostone_casing'),
                    E: P.anyOf([
                        P.kjsBlock('subzero_casing'),
                        P.ability(PA.itemIn, { max: 8, view: 1 }),
                        P.ability(PA.itemOut, { max: 8, view: 1 }),
                        P.ability(PA.fluidIn, { max: 8, view: 1 }),
                        P.ability(PA.fluidOut, { max: 8, view: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    F: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    G: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    H: P.gtBlock('heat_vent'),
                    I: P.gtBlock('cleanroom_glass'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/nether_multis/subzero_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
