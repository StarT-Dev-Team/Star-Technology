GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('pressure_heat_chamber')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_pressure_heat_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('pressure_heat_chamber')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '   BBBBBBB   |             |             |             |             |             |             |             |             |             |   BBBBBBB   |     CCC     ',
                '  BBCCCCCBB  |   DEEEEED   |   D EEE D   |      E      |   D EEE D   |   DEEFEED   |   D EEE D   |      E      |   D EEE D   |   DEEEEED   |  BBEEEEEBB  |     EEE     ',
                ' BBCCCCCCCBB |   CC   CC   |             |  D       D  |      C      |   EECGCEE   |      C      |  D       D  |             |   CCCCCCC   | BBEEEEEEEBB |      E      ',
                'BBCCCCCCCCCBB| DC   D   CD | D    H    D |     HHH     | D   HHH   D | DEE HGH EED | D   HHH   D |     HHH     | D    H    D | DCCCCCCCCCD |BBEEECCCEEEBB|     CCC     ',
                'BCCCCCCCCCCCB| EC       CE |     HHH     |    H   H    |    H   H    | EE H G H EE |    H   H    |    H   H    |     HHH     | ECCC   CCCE |BEEEC   CEEEB|    CCICC    ',
                'BCCCCCCCCCCCB| E   HHH   E | E  HHGHH  E |    H   H    | E H     H E | ECH  G  HCE | E H     H E |    H   H    | E  HHGHH  E | ECC HHH CCE |BEEC CCC CEEB|CE CCCICCC EC',
                'BCCCCCCCCCCCB| E D HHH D E | E DHGGGHD E | E HH G HH E | ECH  G  HCE | FGGGGGGGGGF | ECH  G  HCE | E HH G HH E | E  HGGGH  E | ECC HGH CCE |BEEC CGC CEEB|CEECIIIIICEEC',
                'BCCCCCCCCCCCB| E   HHH   E | E  HHGHH  E |    H   H    | E H     H E | ECH  G  HCE | E H     H E |    H   H    | E  HHGHH  E | ECC HHH CCE |BEEC CCC CEEB|CE CCCICCC EC',
                'BCCCCCCCCCCCB| EC       CE |     HHH     |    H   H    |    H   H    | EE H G H EE |    H   H    |    H   H    |     HHH     | ECCC   CCCE |BEEEC   CEEEB|    CCICC    ',
                'BBCCCCCCCCCBB| DC   D   CD | D    H    D |     HHH     | D   HHH   D | DEE HGH EED | D   HHH   D |     HHH     | D    H    D | DCCCCCCCCCD |BBEEECCCEEEBB|     CCC     ',
                ' BBCCCCCCCBB |   CC   CC   |             |  D       D  |      C      |   EECGCEE   |      C      |  D       D  |             |   CCCCCCC   | BBEEEEEEEBB |      E      ',
                '  BBCCCCCBB  |   DEEEEED   |   D EEE D   |      E      |   D EEE D   |   DEE@EED   |   D EEE D   |      E      |   D EEE D   |   DEEEEED   |  BBEEEEEBB  |     EEE     ',
                '   BBBBBBB   |             |             |             |             |             |             |             |             |             |   BBBBBBB   |     CCC     ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    C: P.kjsBlock('enriched_naquadah_machine_casing'),
                    D: P.gtBlock('hsla_steel_frame'),
                    E: P.anyOf([
                        P.gtBlock('stress_proof_casing'),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    F: P.kjsBlock('enriched_naquadah_heat_escape_casing'),
                    G: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    H: P.kjsBlock('signalum_casing'),
                    I: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
