GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('bulk_ore_processing_array')
        .category('ore_processing')
        .setEUIO('in')
        .setMaxIOSize(1, 6, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('bulk_ore_processing_array', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bulk_ore_processing_array')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '  BBB  |  AAA  |  AAA  |   A   |       |       |       |       |       ',
                ' BAAAB | ACDCA | A###A |  A#A  |  AAA  |   A   |       |       |       ',
                'BAAAAAB|AC#D#CA|A#####A| A###A | A###A |  A#A  |  AAA  |   A   |   E   ',
                'BAAAAAB|ADDDDDA|A##D##A|A##D##A| A#D#A | A#D#A |  ADA  |  AMA  |  E E  ',
                'BAAAAAB|AC#D#CA|A#####A| A###A | A###A |  A#A  |  AAA  |   A   |   E   ',
                ' BAAAB | ACDCA | A###A |  A#A  |  AAA  |   A   |       |       |       ',
                '  BBB  |  A@A  |  AAA  |   A   |       |       |       |       |       ',
            ])
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('kubejs:enriched_naquadah_machine_casing', { min: 20 }),
                        P.ability(PA.itemIn, { prev: 1 }),
                        P.ability(PA.itemOut, { prev: 1 }),
                        P.ability(PA.fluidIn, { prev: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    ' ': P.any(),
                    '#': P.air(),
                    B: P.kjsBlock('kubejs:enriched_naquadah_firebox_casing'),
                    C: P.kjsBlock('kubejs:enriched_naquadah_gearbox'),
                    D: P.kjsBlock('kubejs:enriched_naquadah_pipe_casing'),
                    E: P.kjsBlock('kubejs:noble_mixing_casing'),
                    M: P.ability(PartAbility.MUFFLER),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'kubejs:block/multiblock/primitive_blast_furnace');
});
