GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('dimensional_destabiliser')
        .category('resource_production')
        .setMaxIOSize(3, 3, 3, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('dimensional_destabiliser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('dimensional_destabiliser')
        .recipeModifiers([
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '    BBBBB    |             |             |             |             |             |             |             |             |             |             |             |             |             ',
                '  BBBBBBBBB  |      C      |      C      |      C      |      C      |      C      |             |             |             |             |             |             |             |             ',
                ' BBBBBDBBBBB |     CCC     |     CCC     |     CCC     |      E      |      E      |      E      |      E      |      E      |             |             |             |             |             ',
                ' BBBBBEBBBBB |      E      |      E      |      E      |      E      |             |             |             |      E      |      E      |      E      |             |             |             ',
                'BBBBBBBBBBBBB|             |             |             |             |             |             |             |             |             |      E      |      E      |      E      |      E      ',
                'BBBBBFFFBBBBB|  C       C  |  C       C  |  C       C  |             |      G      |     GGG     |      G      |             |             |             |             |             |             ',
                'BBDEBFDFBEDBB| CCE     ECC | CCE     ECC | CCE  G  ECC | CEE  G  EEC | CE  GGG  EC |  E  GAG  E  |  E  GGG  E  |  EE  G  EE  |   E  G  E   |   EE   EE   |    E   E    |    E   E    |    E   E    ',
                'BBBBBFFFBBBBB|  C       C  |  C       C  |  C       C  |             |      G      |     GGG     |      G      |             |             |             |             |             |             ',
                'BBBBBBBBBBBBB|             |             |             |             |             |             |             |             |             |      E      |      E      |      E      |      E      ',
                ' BBBBBEBBBBB |      E      |      E      |      E      |      E      |             |             |             |      E      |      E      |      E      |             |             |             ',
                ' BBBBBDBBBBB |     CCC     |     CCC     |     CCC     |      E      |      E      |      E      |      E      |      E      |             |             |             |             |             ',
                '  BBBBBBBBB  |      C      |      C      |      C      |      C      |      C      |             |             |             |             |             |             |             |             ',
                '    BB@BB    |             |             |             |             |             |             |             |             |             |             |             |             |             ',
            ])
                .whereDict({
                    A: P.gtBlock('nether_star_block'),
                    ' ': P.any(),
                    B: P.anyOf([
                        P.gtBlock('stress_proof_casing'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                    ]),
                    C: P.gtBlock('tungsten_carbide_frame'),
                    D: P.gtBlock('molybdenum_disilicide_coil_block'),
                    E: P.gtBlock('nonconducting_casing'),
                    F: P.gtBlock('assembly_line_grating'),
                    G: P.block('thermal_extra:shellite_glass'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('gtceu:block/casings/gcym/stress_proof_casing', 'gtceu:block/multiblock/fusion_reactor');
});
