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
    // prettier-ignore
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
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('          BBB          ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '          CCC          ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ')
            .aisle('  BBB   BBDDDBB   BBB  ', '          DDD          ', '          EEE          ', '  CCC     EEE     CCC  ', '          EEE          ', '          FFF          ', '          DDD          ', '  CCC    C   C    CCC  ', '                       ', '                       ', '                       ', '  CCC                  ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ')
            .aisle(' BDDDB  BDDDDDB  BDDDB ', '  GGG    DHHHD    GGG  ', '  DID    EHHHE    DID  ', ' CDIDC   EHHHE   CDIDC ', '  DID    EHHHE    DID  ', '  FFF    FHHHF    FFF  ', '  DID    DEEED    DID  ', ' CDIDC  C     C  CDIDC ', '  DID             DID  ', '  GGG             GGG  ', '  DID             XXX  ', ' CDIDC                 ', '  DID                  ', '   I                   ', '   I                   ', '  CCC                  ', '                       ', '                       ', '                       ', '                       ', '                       ')
            .aisle('BDDDDDBBDDDDDDDBBDDDDDB', ' G   G  DH   HD  G   G ', ' D   D  DH   HD  D   D ', 'CD   DC DH   HD CD   DC', ' D   D  DH   HD  D   D ', ' F   F  FHHHHHF  F   F ', ' D   D  DEEEEED  D   D ', 'CD   DCC       CCD   DC', ' D   D           D   D ', ' G   G           G   G ', ' D   D           X   X ', 'CD   DC           FFF  ', ' D   D            F F  ', '  D D                  ', '  D D                  ', ' CDIDC                 ', '  FFF                  ', '  DID                  ', '  DID                  ', '  JJJ                  ', '  FFF                  ')
            .aisle('BDDDDDBBDDDDDDDBBDDDDDB', ' G   GCCDH   HDC G   G ', ' I   ICCDH   HDC I   I ', 'CI   ICCDH   HDCCI   IC', ' I   ICCDH   HDC I   I ', ' F   FCCFBHHHHFC F   F ', ' I   ICCDBEEEBDC I   I ', 'CI   ICC B   B CCI   IC', ' I   IC  B   B   I   I ', ' G   GBBBB   BBBBG   G ', ' I   IC          X   X ', 'CI   IC           FBF  ', ' I   IC            B   ', ' I   IC            B   ', ' I   IC            B   ', ' CI ICC                ', '  F F                  ', '  I I                  ', '  I I                  ', '  J J                  ', '  FBF                  ')
            .aisle('BDDDDDBBDDDDDDDBBDDDDDB', ' G   G  DH   HD  G   G ', ' D   D  DH   HD  D   D ', 'CD   DC DH   HD CD   DC', ' D   D  DH   HD  D   D ', ' F   F  FHHHHHF  F   F ', ' D   D  DEEEEED  D   D ', 'CD   DCC       CCD   DC', ' D   D           D   D ', ' G   G           G   G ', ' D   D           X   X ', 'CD   DC           FFF  ', ' D   D            F F  ', '  D D                  ', '  D D                  ', ' CDIDC                 ', '  FFF                  ', '  DID                  ', '  DID                  ', '  JJJ                  ', '  FFF                  ')
            .aisle(' BDDDB  BDDDDDB  BDDDB ', '  GGG    DHHHD    GGG  ', '  DID    EHHHE    DID  ', ' CDIDC   EHHHE   CDIDC ', '  DID    EHHHE    DID  ', '  FFF    FHHHF    FFF  ', '  DID    DEEED    DID  ', ' CDIDC  C     C  CDIDC ', '  DID             DID  ', '  GGG             GGG  ', '  DID             XXX  ', ' CDIDC                 ', '  DID                  ', '   I                   ', '   I                   ', '  CCC                  ', '                       ', '                       ', '                       ', '                       ', '                       ')
            .aisle('  BBB   BBDDDBB   BBB  ', '          DDD          ', '          ELE          ', '  CCC     EEE     CCC  ', '          EEE          ', '          FFF          ', '          DDD          ', '  CCC    C   C    CCC  ', '                       ', '                       ', '                       ', '  CCC                  ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ')
            .aisle('          BBB          ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '          CCC          ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ')
                .where(' ', Predicates.any())
                .where('X', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
                .where('B', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
                .where('C', Predicates.blocks('gtceu:naquadah_alloy_frame'))
                .where('D', Predicates.blocks('gtceu:clean_machine_casing'))
                .where(
                    'E',
                    Predicates.blocks('gtceu:fusion_glass')
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                )
                .where('F', Predicates.blocks('gtceu:atomic_casing'))
                .where('G', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
                .where('H', Predicates.blocks('gtceu:inert_machine_casing'))
                .where('I', Predicates.blocks('gtceu:high_power_casing'))
                .where('J', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
                .where('L', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/gas_collector'
        );
});
