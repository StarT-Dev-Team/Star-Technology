GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('exotic_gas_siphon')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 0, 18)
        .setSlotOverlay(false, false, GuiTextures.INT_CIRCUIT_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('exotic_gas_siphon', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .recipeTypes([GTRecipeTypes.get('exotic_gas_siphon'), GTRecipeTypes.get('gas_collector')])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '          BBB          |                       |                       |                       |                       |                       |                       |          CCC          |                       |                       |                       |                       |                       |                       |                       |                       |                       |                       |                       |                       |                       ',
                '  BBB   BBDDDBB   BBB  |          DDD          |          EEE          |  CCC     EEE     CCC  |          EEE          |          FFF          |          DDD          |  CCC    C   C    CCC  |                       |                       |                       |  CCC                  |                       |                       |                       |                       |                       |                       |                       |                       |                       ',
                ' BDDDB  BDDDDDB  BDDDB |  GGG    DHHHD    GGG  |  DID    EHHHE    DID  | CDIDC   EHHHE   CDIDC |  DID    EHHHE    DID  |  FFF    FHHHF    FFF  |  DID    DEEED    DID  | CDIDC  C     C  CDIDC |  DID             DID  |  GGG             GGG  |  DID             XXX  | CDIDC                 |  DID                  |   I                   |   I                   |  CCC                  |                       |                       |                       |                       |                       ',
                'BDDDDDBBDDDDDDDBBDDDDDB| G   G  DH   HD  G   G | D   D  DH   HD  D   D |CD   DC DH   HD CD   DC| D   D  DH   HD  D   D | F   F  FHHHHHF  F   F | D   D  DEEEEED  D   D |CD   DCC       CCD   DC| D   D           D   D | G   G           G   G | D   D           X   X |CD   DC           FFF  | D   D            F F  |  D D                  |  D D                  | CDIDC                 |  FFF                  |  DID                  |  DID                  |  JJJ                  |  FFF                  ',
                'BDDDDDBBDDDDDDDBBDDDDDB| G   GCCDH   HDC G   G | I   ICCDH   HDC I   I |CI   ICCDH   HDCCI   IC| I   ICCDH   HDC I   I | F   FCCFBHHHHFC F   F | I   ICCDBEEEBDC I   I |CI   ICC B   B CCI   IC| I   IC  B   B   I   I | G   GBBBB   BBBBG   G | I   IC          X   X |CI   IC           FBF  | I   IC            B   | I   IC            B   | I   IC            B   | CI ICC                |  F F                  |  I I                  |  I I                  |  J J                  |  FBF                  ',
                'BDDDDDBBDDDDDDDBBDDDDDB| G   G  DH   HD  G   G | D   D  DH   HD  D   D |CD   DC DH   HD CD   DC| D   D  DH   HD  D   D | F   F  FHHHHHF  F   F | D   D  DEEEEED  D   D |CD   DCC       CCD   DC| D   D           D   D | G   G           G   G | D   D           X   X |CD   DC           FFF  | D   D            F F  |  D D                  |  D D                  | CDIDC                 |  FFF                  |  DID                  |  DID                  |  JJJ                  |  FFF                  ',
                ' BDDDB  BDDDDDB  BDDDB |  GGG    DHHHD    GGG  |  DID    EHHHE    DID  | CDIDC   EHHHE   CDIDC |  DID    EHHHE    DID  |  FFF    FHHHF    FFF  |  DID    DEEED    DID  | CDIDC  C     C  CDIDC |  DID             DID  |  GGG             GGG  |  DID             XXX  | CDIDC                 |  DID                  |   I                   |   I                   |  CCC                  |                       |                       |                       |                       |                       ',
                '  BBB   BBDDDBB   BBB  |          DDD          |          ELE          |  CCC     EEE     CCC  |          EEE          |          FFF          |          DDD          |  CCC    C   C    CCC  |                       |                       |                       |  CCC                  |                       |                       |                       |                       |                       |                       |                       |                       |                       ',
                '          BBB          |                       |                       |                       |                       |                       |                       |          CCC          |                       |                       |                       |                       |                       |                       |                       |                       |                       |                       |                       |                       |                       ',
            ])
                .whereDict({
                    ' ': P.any(),
                    X: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    B: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    C: P.gtBlock('naquadah_alloy_frame'),
                    D: P.gtBlock('clean_machine_casing'),
                    E: P.anyOf([
                        P.gtBlock('fusion_glass'),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    F: P.gtBlock('atomic_casing'),
                    G: P.gtBlock('molybdenum_disilicide_coil_block'),
                    H: P.gtBlock('inert_machine_casing'),
                    I: P.gtBlock('high_power_casing'),
                    J: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    L: P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/gas_collector'
        );
});
