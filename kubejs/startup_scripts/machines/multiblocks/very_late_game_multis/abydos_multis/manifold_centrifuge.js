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
                .where(' ', Predicates.any())
                .where('B', Predicates.blocks('kubejs:quake_proof_casing'))
                .where(
                    'C',
                    Predicates.blocks('gtceu:fusion_glass')
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                )
                .where('D', Predicates.blocks('gtceu:thacoloy_nq_42x_frame'))
                .where('E', Predicates.blocks('gtceu:vibration_safe_casing'))
                .where('F', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
                .where('G', Predicates.blocks('gtceu:uv_machine_casing'))
                .where('H', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
                .where('I', Predicates.blocks('kubejs:enriched_naquadah_gearbox'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/abydos_multis/quake_proof_casing',
            'gtceu:block/machines/centrifuge'
        );
});
