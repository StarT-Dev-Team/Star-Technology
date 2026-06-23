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
    // prettier-ignore

    event
        .create('cryostate_quantum_chiller', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['quantum_cooling', 'vacuum_freezer'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:subzero_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('       BBBBBBB       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       CCCCCCC       ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ')
            .aisle('     BBBDDDDDBBB     ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '     CCCBBBBBCCC     ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       CCCCCCC       ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '       CCCCCCC       ', '                     ')
            .aisle('    BBDDDDDDDDDBB    ', '      DDFFFFFDD      ', '      DDFCGCFDD      ', '      DDFCFCFDD      ', '      DDFCFCFDD      ', '      DDFCGCFDD      ', '    CCBBFFFFFBBCC    ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '     CCCBBBBBCCC     ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '     CCCBBBBBCCC     ', '        DDDDD        ')
            .aisle('   BBDDDDDFDDDDDBB   ', '   C DFF     FFD C   ', '   C DFC     CFD C   ', '   C DFC     CFD C   ', '   C DFC     CFD C   ', '   C DFC     CFD C   ', '   CCBFF     FFBCC   ', '      DDEEEEEDD      ', '      DDFFFFFDD      ', '      DDGCFCGDD      ', '      DDFCFCFDD      ', '      DDFCFCFDD      ', '      DDGCFCGDD      ', '    CCBBFFFFFBBCC    ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '    CCBBEEEEEBBCC    ', '      DD     DD      ')
            .aisle('  BBDDDDDDFDDDDDDBB  ', '    DF         FD    ', '    DC         CD    ', '    DC         CD    ', '    DC         CD    ', '    DC         CD    ', '  CCBF         FBCC  ', '     DEE     EED     ', '     DFF     FFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '   CCBFF     FFBCC   ', '      DDEEEEEDD      ', '      DDFFFFFDD      ', '      DDFCGCFDD      ', '      DDFCFCFDD      ', '      DDFCFCFDD      ', '      DDFCGCFDD      ', '      DDFFFFFDD      ', '   CCBEEEEEEEEEBCC   ', '     D         D     ')
            .aisle(' BBDDDDDEEEEEDDDDDBB ', '   DFF         FFD   ', '   DCG         GCD   ', '   DCF         FCD   ', '   DCF         FCD   ', '   DCG         GCD   ', ' CCBFF         FFBCC ', '    DE         ED    ', '    DF         FD    ', '    DC         CD    ', '    DC         CD    ', '    DC         CD    ', '    DC         CD    ', '  CCBF         FBCC  ', '     DEE     EED     ', '     DFF     FFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '     DFF     FFD     ', '  CCBEEEEEEEEEEEBCC  ', '    D           D    ')
            .aisle(' BDDDDDEHHHHHEDDDDDB ', '  DF             FD  ', '  DF             FD  ', '  DF             FD  ', '  DF             FD  ', '  DF             FD  ', ' CBF             FBC ', '   DE           ED   ', '   DF           FD   ', '   DF           FD   ', '   DF           FD   ', '   DF           FD   ', '   DF           FD   ', '  CBF           FBC  ', '    DE         ED    ', '    DF         FD    ', '    DF         FD    ', '    DF         FD    ', '    DF         FD    ', '    DF C EEE C FD    ', '    DF   EEE   FD    ', '  CBEEEEEEEEEEEEEBC  ', '   D             D   ')
            .aisle('BBDDDDEEEEEEEEEDDDDBB', 'C DF             FD C', 'C DC             CD C', 'C DC             CD C', 'C DC             CD C', 'C DC             CD C', 'CCBF             FBCC', ' C DE           ED C ', ' C DF           FD C ', ' C DC           CD C ', ' C DC           CD C ', ' C DC           CD C ', ' C DC           CD C ', ' CCBF           FBCC ', '  C DE         ED C  ', '  C DF         FD C  ', '  C DC         CD C  ', '  C DC         CD C  ', '  C DC         CD C  ', '  C DCCCE   ECCCD C  ', '  C DF  EIIIE  FD C  ', ' CCBEEEEE   EEEEEBCC ', '   D             D   ')
            .aisle('BDDDDEHEGGFGGEHEDDDDB', ' DF               FD ', ' DF               FD ', ' DF               FD ', ' DF               FD ', ' DF               FD ', 'CBF               FBC', '  DE             ED  ', '  DF      G      FD  ', '  DG             GD  ', '  DF             FD  ', '  DF             FD  ', '  DG             GD  ', ' CBF             FBC ', '   DE           ED   ', '   DF           FD   ', '   DF           FD   ', '   DF           FD   ', '   DF           FD   ', '   DF  E     E  FD   ', '   DF  EIIIIIE  FD   ', ' CBEEEEE     EEEEEBC ', '  D               D  ')
            .aisle('BDDDDEHEGGFGGEHEDDDDB', ' EF               FE ', ' EC               CE ', ' EC               CE ', ' EC       F       CE ', ' EC               CE ', 'CBF               FBC', '  EE             EE  ', '  EF      F      FE  ', '  EC             CE  ', '  EC             CE  ', '  EC             CE  ', '  EC      F      CE  ', ' CBF             FBC ', '   EE           EE   ', '   EF           FE   ', '   EC           CE   ', '   EC           CE   ', '   EC           CE   ', '   EC E       E CE   ', '   EF EIIIIIIIE FE   ', ' CBEEEE       EEEEBC ', '  D               D  ')
            .aisle('BDDFFEHEFFFFFEHEFFDDB', ' EF       F       FE ', ' FG       F       GF ', ' EF       F       FE ', ' FF      FFF      FF ', ' EG       F       GE ', 'CBF       F       FBC', '  EE      F      EE  ', '  FF    GFFFG    FF  ', '  EF      F      FE  ', '  EF      F      FE  ', '  FF      F      FF  ', '  EF     FFF     FE  ', ' CBF      F      FBC ', '   EE     F     EE   ', '   FF     F     FF   ', '   EG           GE   ', '   FF           FF   ', '   EF           FE   ', '   FG E       E GF   ', '   EF EIIIIIIIE FE   ', ' CBEEEE       EEEEBC ', '  D               D  ')
            .aisle('BDDDDEHEGGFGGEHEDDDDB', ' EF               FE ', ' EC               CE ', ' EC               CE ', ' EC       F       CE ', ' EC               CE ', 'CBF               FBC', '  EE             EE  ', '  EF      F      FE  ', '  EC             CE  ', '  EC             CE  ', '  EC             CE  ', '  EC      F      CE  ', ' CBF             FBC ', '   EE           EE   ', '   EF           FE   ', '   EC           CE   ', '   EC           CE   ', '   EC           CE   ', '   EC E       E CE   ', '   EF EIIIIIIIE FE   ', ' CBEEEE       EEEEBC ', '  D               D  ')
            .aisle('BDDDDEHEGGFGGEHEDDDDB', ' DF               FD ', ' DF               FD ', ' DF               FD ', ' DF               FD ', ' DF               FD ', 'CBF               FBC', '  DE             ED  ', '  DF      G      FD  ', '  DG             GD  ', '  DF             FD  ', '  DF             FD  ', '  DG             GD  ', ' CBF             FBC ', '   DE           ED   ', '   DF           FD   ', '   DF           FD   ', '   DF           FD   ', '   DF           FD   ', '   DF  E     E  FD   ', '   DF  EIIIIIE  FD   ', ' CBEEEEE     EEEEEBC ', '  D               D  ')
            .aisle('BBDDDDEEEEEEEEEDDDDBB', 'C DF             FD C', 'C DC             CD C', 'C DC             CD C', 'C DC             CD C', 'C DC             CD C', 'CCBF             FBCC', ' C DE           ED C ', ' C DF           FD C ', ' C DC           CD C ', ' C DC           CD C ', ' C DC           CD C ', ' C DC           CD C ', ' CCBF           FBCC ', '  C DE         ED C  ', '  C DF         FD C  ', '  C DC         CD C  ', '  C DC         CD C  ', '  C DC         CD C  ', '  C DCCCE   ECCCD C  ', '  C DF  EIIIE  FD C  ', ' CCBEEEEE   EEEEEBCC ', '   D             D   ')
            .aisle(' BDDDDDEHHHHHEDDDDDB ', '  DF             FD  ', '  DF             FD  ', '  DF             FD  ', '  DF             FD  ', '  DF             FD  ', ' CBF             FBC ', '   DE           ED   ', '   DF           FD   ', '   DF           FD   ', '   DF           FD   ', '   DF           FD   ', '   DF           FD   ', '  CBF           FBC  ', '    DE         ED    ', '    DF         FD    ', '    DF         FD    ', '    DF         FD    ', '    DF         FD    ', '    DF C EEE C FD    ', '    DF   EEE   FD    ', '  CBEEEEEEEEEEEEEBC  ', '   D             D   ')
            .aisle(' BBDDDDDEEEEEDDDDDBB ', '   DFF         FFD   ', '   DCG         GCD   ', '   DCF         FCD   ', '   DCF         FCD   ', '   DCG         GCD   ', ' CCBFF         FFBCC ', '    DE         ED    ', '    DF         FD    ', '    DC         CD    ', '    DC         CD    ', '    DC         CD    ', '    DC         CD    ', '  CCBF         FBCC  ', '     DEE     EED     ', '     DFF     FFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '     DFF     FFD     ', '  CCBEEEEEEEEEEEBCC  ', '    D           D    ')
            .aisle('  BBDDDDDDFDDDDDDBB  ', '    DF         FD    ', '    DC         CD    ', '    DC         CD    ', '    DC         CD    ', '    DC         CD    ', '  CCBF         FBCC  ', '     DEE     EED     ', '     DFF     FFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '     DFC     CFD     ', '   CCBFF     FFBCC   ', '      DDEEEEEDD      ', '      DDFFFFFDD      ', '      DDFCGCFDD      ', '      DDFCFCFDD      ', '      DDFCFCFDD      ', '      DDFCGCFDD      ', '      DDFFFFFDD      ', '   CCBEEEEEEEEEBCC   ', '     D         D     ')
            .aisle('   BBDDDDDFDDDDDBB   ', '   C DFF     FFD C   ', '   C DFC     CFD C   ', '   C DFC     CFD C   ', '   C DFC     CFD C   ', '   C DFC     CFD C   ', '   CCBFF     FFBCC   ', '      DDEEEEEDD      ', '      DDFFFFFDD      ', '      DDGCFCGDD      ', '      DDFCFCFDD      ', '      DDFCFCFDD      ', '      DDGCFCGDD      ', '    CCBBFFFFFBBCC    ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '    CCBBEEEEEBBCC    ', '      DD     DD      ')
            .aisle('    BBDDDDDDDDDBB    ', '      DDFFFFFDD      ', '      DDFCFCFDD      ', '      DDFCFCFDD      ', '      DDFCFCFDD      ', '      DDFCGCFDD      ', '    CCBBFFFFFBBCC    ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '        DEEED        ', '        DEFED        ', '        DEEED        ', '     CCCBBBBBCCC     ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '     CCCBBBBBCCC     ', '        DDDDD        ')
            .aisle('     BBBDDDDDBBB     ', '        DEEED        ', '        DE@ED        ', '        DEEED        ', '        DEEED        ', '        DEEED        ', '     CCCBBBBBCCC     ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       CCCCCCC       ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '       CCCCCCC       ', '                     ')
            .aisle('       BBBBBBB       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       C     C       ', '       CCCCCCC       ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ', '                     ')
                .where(' ', P.any())
                .where('B', P.kjsBlock('enriched_naquadah_firebox_casing'))
                .where('C', P.gtBlock('void_frame'))
                .where('D', P.kjsBlock('reinforced_cryostone_casing'))
                .where(
                    'E',
                    P.kjsBlock('subzero_casing')
                        .or(P.ability(PA.itemIn).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(P.ability(PA.itemOut).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(P.ability(PA.fluidIn).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(P.ability(PA.fluidOut).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(P.ability(PA.euIn).setMaxGlobalLimited(2))
                        .or(P.ability(PA.maintenance, {exact:1}))
                        .or(P.ability(PA.parallelHatch, {max:1}))
                )
                .where('F', P.kjsBlock('enriched_naquadah_pipe_casing'))
                .where('G', P.kjsBlock('enriched_naquadah_engine_intake_casing'))
                .where('H', P.gtBlock('heat_vent'))
                .where('I', P.gtBlock('cleanroom_glass'))
                .where('@', P.controller(definition))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/nether_multis/subzero_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
