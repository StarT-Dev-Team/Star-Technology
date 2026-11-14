GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('drone_reconnaissance')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(3, 12, 1, 0)
        .setSound(GTSoundEntries.COOLING)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('drone_nest', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('drone_reconnaissance')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:palladium_substation'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '       AAAAA       |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   ',
                '     AAAABAAAA     |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   ',
                '   AAACAABAACAAA   |                   |                   |                   |                   |                   |                   |                   |       C   C       |       CCCCC       |       CCCCC       |                   |                   |                   |                   ',
                '  AAAACAABAACAAAA  |                   |                   |                   |                   |                   |                   |                   |      C     C      |     CC     CC     |     CCDDDDDCC     |     CC     CC     |     C       C     |                   |                   ',
                '  AAAAAABEBAAAAAA  |    F C     C F    |    F         F    |    F         F    |    F         F    |    F         F    |    F         F    |    F         F    |    F         F    |    F         F    |    CDDDDBDDDDC    |    C         C    |    C         C    |    C         C    |    C         C    ',
                ' AAAAAAABEBAAAAAAA |                   |      C     C      |      C     C      |                   |                   |                   |                   |                   |   C           C   |   CDDAADBDAADDC   |   C           C   |   C           C   |                   |                   ',
                ' ACCAAAABEBAAAACCA |    C F     F C    |     CF     FC     |     CF     FC     |      CFFFFFC      |      C     C      |      CDDDDDC      |      D     D      |   C  D     D  C   |   C  D     D  C   |   CDADDDBDDDADC   |   C           C   |                   |                   |                   ',
                'AAAAAAABEEEBAAAAAAA|                   |                   |                   |      F     F      |                   |      DBEBEBD      |       GHHHG       |  C    EIIIE    C  |  C    GHHHG    C  |  CDDADDEBEDDADDC  |                   |                   |                   |                   ',
                'AAAABBBEEIEEBBBAAAA|        F F        |        F F        |        F F        |      F F F F      |        F F        |      DEEAEED      |       H   H       |       I   I       |  C    H   H    C  |  CDDDDEEAEEDDDDC  |                   |                   |                   |                   ',
                'ABBBEEEEIIIEEEEBBBA|                   |                   |                   |      F     F      |                   |      DBAAABD      |       H   H       |       I J I       |  C    H   H    C  |  CDBBBBAAABBBBDC  |                   |                   |                   |                   ',
                'AAAABBBEEIEEBBBAAAA|        F F        |        F F        |        F F        |      F F F F      |        F F        |      DEEAEED      |       H   H       |       I   I       |  C    H   H    C  |  CDDDDEEAEEDDDDC  |                   |                   |                   |                   ',
                'AAAAAAABEEEBAAAAAAA|                   |                   |                   |      F     F      |                   |      DBEBEBD      |       GHHHG       |  C    EIIIE    C  |  C    GHHHG    C  |  CDDADDEBEDDADDC  |                   |                   |                   |                   ',
                ' ACCAAAABEBAAAACCA |    C F     F C    |     CF     FC     |     CF     FC     |      CFFFFFC      |      C     C      |      CDDDDDC      |      D     D      |   C  D     D  C   |   C  D     D  C   |   CDADDDBDDDADC   |   C           C   |                   |                   |                   ',
                ' AAAAAAABEBAAAAAAA |                   |      C     C      |      C     C      |                   |                   |                   |                   |                   |   C           C   |   CDDAADBDAADDC   |   C           C   |   C           C   |                   |                   ',
                '  AAAAAABEBAAAAAA  |    F C     C F    |    F         F    |    F         F    |    F         F    |    F         F    |    F         F    |    F         F    |    F         F    |    F         F    |    CDDDDBDDDDC    |    C         C    |    C         C    |    C         C    |    C         C    ',
                '  AAAACAABAACAAAA  |                   |                   |                   |                   |                   |                   |                   |      C     C      |     CC     CC     |     CCDDDDDCC     |     CC     CC     |     C       C     |                   |                   ',
                '   AAACAABAACAAA   |                   |                   |                   |                   |                   |                   |                   |       C   C       |       CCCCC       |       CCCCC       |                   |                   |                   |                   ',
                '     AAAABAAAA     |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   ',
                '       AA@AA       |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   |                   ',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    A: P.anyOf([
                        P.gtBlock('palladium_substation'),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    B: P.gtBlock('high_power_casing'),
                    C: P.kjsBlock('enriched_naquadah_machine_casing'),
                    D: P.kjsBlock('enriched_naquadah_turbine_casing'),
                    E: P.gtBlock('advanced_computer_casing'),
                    F: P.gtBlock('prismalium_frame'),
                    G: P.kjsBlock('pallaridium_engine_intake_casing'),
                    H: P.gtBlock('computer_heat_vent'),
                    I: P.gtBlock('superconducting_coil'),
                    J: P.gtBlock('nether_star_block'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/multiblock/hpca'
        );
});
