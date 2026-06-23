GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('heat_chamber')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('heat_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('heat_chamber')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '    BCDCB    |     CCC     |      C      |             |             |             |             |             |             |             |             |             |    BBBBB    ',
                '  BBBBBBBBB  |             |             |             |    BBBBB    |             |             |             |    BBBBB    |             |             |             |  BBBBBBBBB  ',
                ' BBBEEEEEBBB |  F EGHGE F  |  F  IEI  F  |  F  GHG  F  |  BBBBBBBBB  |   F     F   |   F     F   |   F     F   |  BBBBBBBBB  |  F  GHG  F  |  F  IEI  F  |  F EGHGE F  | BBBEEEEEBBB ',
                ' BBBBBHBBBBB |   CC   CC   |   CC   CC   |    C   C    |  BBBDDDBBB  |  F  JCJ  F  |  F  JDJ  F  |  F  JCJ  F  |  BBBDDDBBB  |    C   C    |   CC   CC   |   CC   CC   | BBBBBHBBBBB ',
                'BBEBBBEBBBEBB|  EC     CE  |   C     C   |   C     C   | BBBD   DBBB |    J   J    |    J   J    |    J   J    | BBBD   DBBB |   C     C   |   C     C   |  EC     CE  |BBEBBBEBBBEBB',
                'CBEBBBEBBBEBC|C G       G C|  I       I  |  G       G  | BBD     DBB |   J     J   |   J     J   |   J     J   | BBD     DBB |  G       G  |  I       I  |  G       G  |BBEBBBBBBBEBB',
                'DBEHEEEEEHEBD|C H       H C|C E       E C|  H       H  | BBD     DBB |   C     C   |   D     D   |   C     C   | BBD     DBB |  H       H  |  E       E  |  H       H  |BBEHEBKBEHEBB',
                'CBEBBBEBBBEBC|C G       G C|  I       I  |  G       G  | BBD     DBB |   J     J   |   J     J   |   J     J   | BBD     DBB |  G       G  |  I       I  |  G       G  |BBEBBBBBBBEBB',
                'BBEBBBEBBBEBB|  EC     CE  |   C     C   |   C     C   | BBBD   DBBB |    J   J    |    J   J    |    J   J    | BBBD   DBBB |   C     C   |   C     C   |  EC     CE  |BBEBBBEBBBEBB',
                ' BBBBBHBBBBB |   CC   CC   |   CC   CC   |    C   C    |  BBBDDDBBB  |  F  JCJ  F  |  F  JDJ  F  |  F  JCJ  F  |  BBBDDDBBB  |    C   C    |   CC   CC   |   CC   CC   | BBBBBHBBBBB ',
                ' BBBEEEEEBBB |  F EGHGE F  |  F  IEI  F  |  F  GHG  F  |  BBBBBBBBB  |   F     F   |   F     F   |   F     F   |  BBBBBBBBB  |  F  GHG  F  |  F  IEI  F  |  F EGHGE F  | BBBEEEEEBBB ',
                '  BBBBBBBBB  |             |             |             |    BBBBB    |             |             |             |    BBBBB    |             |             |             |  BBBBBBBBB  ',
                '    BCDCB    |     C@C     |      C      |             |             |             |             |             |             |             |             |             |    BBBBB    ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.kjsBlock('enderium_casing'),
                    C: P.anyOf([
                        P.gtBlock('high_temperature_smelting_casing'),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    D: P.gtBlock('heat_vent'),
                    E: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    F: P.gtBlock('rhodium_plated_palladium_frame'),
                    G: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    H: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    I: P.kjsBlock('enriched_naquadah_machine_casing'),
                    J: P.gtBlock('naquadah_coil_block'),
                    K: P.gtBlock('lv_muffler_hatch'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
