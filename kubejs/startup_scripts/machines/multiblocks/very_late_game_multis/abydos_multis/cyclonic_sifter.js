GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('cyclonic_sifter')
        .category('ultimate')
        .setEUIO('in')
        .setMaxIOSize(2, 6, 2, 3)
        .setSound(GTSoundEntries.CENTRIFUGE)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('cyclonic_sifter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('cyclonic_sifter')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:quake_proof_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '         |         |         |         |   BBB   |   CCC   |   BBB   |         |         |         |         |         ',
                '   DDD   |    D    |    D    |   BBB   | BBBBBBB | CCEEECC | BB F BB |    D    |    D    |    D    |    D    |  DDDDD  ',
                '  D   D  |  D   D  |  D   D  |  BBBBB  | BBGBGBB | CE F EC | B  F  B |    F    |         |    D    |         | D     D ',
                ' D     D |         |         | BBGGGBB |BBGGGGGBB|CE     EC|B       B|         |         |    D    |         | D     D ',
                ' D     D | D     D | D     D | BBGGGBB |BBBGGGBBB|CEF   FEC|BFF   FFB| DF   FD | D     D | DDDDDDD | D     D | D     D ',
                ' D     D |         |         | BBGGGBB |BBGGGGGBB|CE     EC|B       B|         |         |    D    |         | D     D ',
                '  D   D  |  D   D  |  D   D  |  BBBBB  | BBGBGBB | CE F EC | B  F  B |    F    |         |    D    |         | D     D ',
                '   DDD   |    D    |    D    |   BBB   | BBBBBBB | CCEEECC | BB F BB |    D    |    D    |    D    |    D    |  DDDDD  ',
                '         |         |         |         |   BBB   |   C@C   |   BBB   |         |         |         |         |         ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.kjsBlock('quake_proof_casing'),
                    C: P.anyOf([
                        P.gtBlock('fusion_glass'),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    D: P.gtBlock('thacoloy_nq_42x_frame'),
                    E: P.gtBlock('uv_machine_casing'),
                    F: P.gtBlock('vibration_safe_casing'),
                    G: P.gtBlock('assembly_line_grating'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/abydos_multis/quake_proof_casing', 'gtceu:block/machines/sifter');
});
