GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_barrel', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeTypes(['industrial_barrel_aqueous', 'industrial_barrel_magmatic'])
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.PARALLEL_HATCH,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GTBlocks.CASING_PALLADIUM_SUBSTATION)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '    BBB    |           |           |           |    BBB    ',
                '  BBBBBBB  |  C BBB C  |  C BDB C  |  C BBB C  |  BBBBBBB  ',
                ' BBBBBBBBB | CEEEEEEEC | CEEEFEEEC | CEEEEEEEC | BBBBBBBBB ',
                ' BBBBBBBBB |  EF   FE  |  E  F  E  |  E     E  | BBGGGGGBB ',
                'BBBBBBBBBBB| BE F F EB | BE  F  EB | BE     EB |BBBGGGGGBBB',
                'BBBBBBBBBBB| BE     EB | DFFFFFFFD | BE     EB |BBBGGGGGBBB',
                'BBBBBBBBBBB| BE F F EB | BE  F  EB | BE     EB |BBBGGGGGBBB',
                ' BBBBBBBBB |  EF   FE  |  E  F  E  |  E     E  | BBGGGGGBB ',
                ' BBBBBBBBB | CEEEEEEEC | CEEEFEEEC | CEEEEEEEC | BBBBBBBBB ',
                '  BBBBBBB  |  C BBB C  |  C B@B C  |  C BBB C  |  BBBBBBB  ',
                '    BBB    |           |           |           |    BBB    ',
            ])
                .whereDict({
                    ' ': P.air(),
                    B: P.anyOf([
                        P.gtBlock('palladium_substation'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.euIn, { max: 1, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    C: P.gtBlock('rhodium_plated_palladium_frame'),
                    D: P.kjsBlock('pallaridium_engine_intake_casing'),
                    E: P.gtBlock('clean_machine_casing'),
                    F: P.kjsBlock('pallaridium_pipe_casing'),
                    G: P.gtBlock('fusion_glass'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/machines/distillery'
        );
});
