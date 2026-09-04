GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('supreme_chemistry')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxTooltips(4)
        .setMaxIOSize(6, 6, 6, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
        .setLayered();
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('true_synthesis_array', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $LayeredWorkableElectricMultiblockMachine(holder))
        .recipeTypes(['ordered_chemistry', 'supreme_chemistry'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:cattomolymer_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'AABBBAA            |CAADAAC            |C     C            |C     C            |C     C            |C     C            |C     C            |AAAAAAA            ',
                'AAAAAAA            |A  E  A            | AAFAA             | GGGGG             | HIFIH             | GGGGG             | AAFAA             |AAABAAA            ',
                'BAAAAAB            |A  E  A            | A   A             | G E G             | I   I             | G E G             | A   A             |AAFFFAA            ',
                'BAAFAAB            |AEEEEEA            | F E F             | GEEEG             | F E F             | GEEEG             | F E F             |ABFFFBA            ',
                'BAAAAAB            |A  E  A            | A   A             | G E G             | I   I             | G E G             | A   A             |AAFFFAA            ',
                'AAAAAAA            |A  E  A            | A   A             | GGGGG             | HIFIH             | GGGGG             | AAFAA             |AAABAAA            ',
                'AAAFAAAABBBAAABBBAA|CAEEEEAAAAAACAAAAAC|CAAAAACC   CC     C|C     C     C     C|C     C     C     C|C     C     C     C|C     CC   CC     C|AAAAAAAAAAAAAAAAAAA',
                'AAAAAAAAAAAAAAAAAAA|A  E  E  E  A  E  A|CAAFAAAAAFAAAAAFAA |        C C  GGGGG |         C   HIFIH |        C C  GGGGG |C            AAFAA |A     A     AAABAAA',
                'BAAAAAAAAAAAAAAAAAB|A  E  E  E  E  E  A| AABAAAAAEAAA    A | C           G E G |             I   I | C           G E G |             A   A |A     A     AAFFFAA',
                'BAAFAAFAAFAAFAAFAAB|AEEEEEEEEEEEEEEEEEJ| FEBEFAFBBBFA  E F |             GEEEG | C           F E F |             GEEEG |             F E F |A     A     ABFFFBA',
                'BAAAAAAAAAAAAAAAAAB|A  E  E  E  E  E  A| AABAAAAAEAAA    A | C           G E G |             I   I | C           G E G |             A   A |A     A     AAFFFAA',
                'AAAAAAAAAAAAAAAAAAA|A  E  E  E  A  E  A|CAAFAAAAAFAAAAAFAA |        C C  GGGGG |         C   HIFIH |        C C  GGGGG |C            AAFAA |A     A     AAABAAA',
                'AAAFAAAABBBAAABBBAA|CAEEEEAAA@AACAAAAAC|CAAAAACC   CC     C|C     C     C     C|C     C     C     C|C     C     C     C|C     CC   CC     C|AAAAAAAAAAAAAAAAAAA',
                'AAAAAAA            |A  E  A            | A   A             | GGGGG             | HIFIH             | GGGGG             | AAFAA             |AAABAAA            ',
                'BAAAAAB            |A  E  A            | A   A             | G E G             | I   I             | G E G             | A   A             |AAFFFAA            ',
                'BAAFAAB            |AEEEEEA            | F E F             | GEEEG             | F E F             | GEEEG             | F E F             |ABFFFBA            ',
                'BAAAAAB            |A  E  A            | A   A             | G E G             | I   I             | G E G             | A   A             |AAFFFAA            ',
                'AAAAAAA            |A  E  A            | AAFAA             | GGGGG             | HIFIH             | GGGGG             | AAFAA             |AAABAAA            ',
                'AABBBAA            |CAADAAC            |C     C            |C     C            |C     C            |C     C            |C     C            |AAAAAAA            ',
            ])
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('cattomolymer_casing'),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    B: P.kjsBlock('nyanium_heat_escape_casing'),
                    ' ': P.any(),
                    C: P.gtBlock('draconyallium_frame'),
                    D: P.abilityOr([PA.fluidIn, PA.itemIn]),
                    E: P.kjsBlock('nyanium_pipe_casing'),
                    F: P.kjsBlock('nyanium_engine_intake_casing'),
                    G: P.kjsBlock('rhenotax_coil'),
                    H: P.kjsBlock('nyanium_machine_casing'),
                    I: P.kjsBlock('nyanium_firebox_casing'),
                    J: P.abilityOr([PA.itemOut, PA.fluidOut]),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/end_multis/cattomolymer_casing',
            'gtceu:block/multiblock/large_chemical_reactor'
        );
});
