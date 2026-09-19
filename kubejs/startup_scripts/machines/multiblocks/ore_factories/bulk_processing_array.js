GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('bulk_ore_processing_array', 'multiblock')
        .machine((holder) => new $BulkingMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bulk_ore_factory')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            $StarTRecipeModifiers.BULKING,
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
                        P.kjsBlock('enriched_naquadah_machine_casing', { min: 20 }),
                        P.ability(PA.itemIn, { view: 1 }),
                        P.ability(PA.itemOut, { view: 1 }),
                        P.ability(PA.fluidIn, { view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    ' ': P.any(),
                    '#': P.air(),
                    B: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    C: P.kjsBlock('enriched_naquadah_gearbox'),
                    D: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    E: P.kjsBlock('noble_mixing_casing'),
                    M: P.ability(PA.muffler),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'kubejs:block/multiblock/primitive_blast_furnace');
});
