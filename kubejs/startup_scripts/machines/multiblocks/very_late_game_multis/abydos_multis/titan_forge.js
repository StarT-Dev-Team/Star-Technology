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
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('kubejs:enriched_naquadah_machine_casing')
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                )
                .where('C', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
                .where('D', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
                .where('E', Predicates.blocks('gtceu:naquadah_alloy_frame'))
                .where('F', Predicates.blocks('kubejs:tritanic_blasting_casing'))
                .where('G', Predicates.blocks('kubejs:enriched_naquadah_heat_escape_casing'))
                .where('H', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
                .where('I', Predicates.blocks('gtceu:tritanium_coil_block'))
                .where('J', Predicates.blocks('gtceu:high_temperature_smelting_casing'))
                .where('K', Predicates.abilities(PartAbility.MUFFLER))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'gtceu:block/machines/bender');
});
