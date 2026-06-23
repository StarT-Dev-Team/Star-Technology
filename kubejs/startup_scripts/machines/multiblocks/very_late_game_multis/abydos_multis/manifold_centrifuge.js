GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('manifold_centrifuge')
        .category('ultimate')
        .setEUIO('in')
        .setMaxIOSize(1, 6, 1, 6)
        .setSound(GTSoundEntries.CENTRIFUGE)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('manifold_centrifuge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('manifold_centrifuge')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:quake_proof_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '  D D  |  B B  |  BBB  |       |  BBB  |  CCC  |  BBB  |  D D  |       |       |       ',
                ' D E D | B E B | BFEFB |  GGG  | BBHBB | CHHHC | B   B | D   D | D   D | D   D | DD DD ',
                '   E   |B     B|BFFFFFB| GF FG |BBIIIBB|CHFFFHC|B     B|D     D|       |       | D   D ',
                ' EEEEE | E   E |BEFFFEB| G   G |BHIHIHB|CHFFFHC|B     B|       |       |       |       ',
                '   E   |B     B|BFFFFFB| GF FG |BBIIIBB|CHFFFHC|B     B|D     D|       |       | D   D ',
                ' D E D | B E B | BFEFB |  GGG  | BBHBB | CHHHC | B   B | D   D | D   D | D   D | DD DD ',
                '  D D  |  B B  |  BBB  |       |  BBB  |  C@C  |  BBB  |  D D  |       |       |       ',
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
                    E: P.gtBlock('vibration_safe_casing'),
                    F: P.kjsBlock('enriched_naquadah_machine_casing'),
                    G: P.gtBlock('uv_machine_casing'),
                    H: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    I: P.kjsBlock('enriched_naquadah_gearbox'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/abydos_multis/quake_proof_casing',
            'gtceu:block/machines/centrifuge'
        );
});
