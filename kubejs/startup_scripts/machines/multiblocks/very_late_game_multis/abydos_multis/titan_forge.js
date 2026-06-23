GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('titan_forge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('titan_forge')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '     BCCCB     |     BBBBB     |               |               |               |               |     BBBBB     |      BBB      ',
                '   BBBBDBBBB   |   EBFFFFFBE   |   E       E   |   E       E   |   EE     EE   |   E E   E E   |   EBFFFFFBE   |   BBBBGBBBB   ',
                '  EBFBBDBBFBE  |  E BBFGFBB E  |    BB   BB    |  E  B   B  E  |     B   B     |    BB   BB    |  E BBFGFBB E  |  EBBBBDBBBBE  ',
                ' BBFFFBDBFFFBB | E HFFFGFFFH E | E           E | E           E | E           E | E           E | E HFFFFFFFH E | BBBFFFFFFFBBB ',
                ' BFFFFBDBFFFFB | BBFFIFGFIFFBB |  B         B  |               | E           E |  B         B  | BBFFEEFEEFFBB | BBFFIIFIIFFBB ',
                'BBBFFFFDFFFFBBB|BFBFIFFFFFIFBFB|  B         B  |  B         B  |  B         B  | EB         BE |BFBFEFFFFFEFBFB| BBFIFFFFFIFBB ',
                'CBBBBFFDFFBBBBC|BFFFFFBBBFFFFFB|               |               |               |               |BFFFEF F FEFFFB|BBBFIFEFEFIFBBB',
                'CDDDDDDDDDDDDDC|BFGGGFBJBFGGGFB|       J       |               |               |       J       |BFGFFFFJFFFFGFB|BGDFFFFKFFFFDGB',
                'CBBBBFFDFFBBBBC|BFFFFFBBBFFFFFB|               |               |               |               |BFFFEF F FEFFFB|BBBFIFEFEFIFBBB',
                'BBBFFFFDFFFFBBB|BFBFIFFFFFIFBFB|  B         B  |  B         B  |  B         B  | EB         BE |BFBFEFFFFFEFBFB| BBFIFFFFFIFBB ',
                ' BFFFFBDBFFFFB | BBFFIFGFIFFBB |  B         B  |               | E           E |  B         B  | BBFFEEFEEFFBB | BBFFIIFIIFFBB ',
                ' BBFFFBDBFFFBB | E HFFFGFFFH E | E           E | E           E | E           E | E           E | E HFFFFFFFH E | BBBFFFFFFFBBB ',
                '  EBFBBDBBFBE  |  E BBFGFBB E  |    BB   BB    |  E  B   B  E  |     B   B     |    BB   BB    |  E BBFGFBB E  |  EBBBBDBBBBE  ',
                '   BBBBDBBBB   |   EBFFFFFBE   |   E       E   |   E       E   |   EE     EE   |   E E   E E   |   EBFFFFFBE   |   BBBBGBBBB   ',
                '     BCCCB     |     BB@BB     |               |               |               |               |     BBBBB     |      BBB      ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('enriched_naquadah_machine_casing'),
                        Predicates.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    C: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    D: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    E: P.gtBlock('naquadah_alloy_frame'),
                    F: P.kjsBlock('tritanic_blasting_casing'),
                    G: P.kjsBlock('enriched_naquadah_heat_escape_casing'),
                    H: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    I: P.gtBlock('tritanium_coil_block'),
                    J: P.gtBlock('high_temperature_smelting_casing'),
                    K: P.ability(PA.muffler),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'gtceu:block/machines/bender');
});
