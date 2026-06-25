GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_abs', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('alloy_blast_smelter')
        .machine((holder) => new $CoiledMulti(holder))
        .recipeModifiers([
            GTRecipeModifiers.EBF_OVERCLOCK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '   AAA   |   AAA   |    B    |    B    |         |         |         |    B    |    B    |   AAA   |   AAA   ',
                ' CCAAACC | CCCCCCC | B DDD B | B DDD B |    B    |   CDC   |    B    | B DDD B | B DDD B | CCCCCCC | CCAAACC ',
                ' CAAFAAC | CFFFFFC |  DF FD  |  DF FD  |  BGFGB  |  DCDCD  |  BGFGB  |  DF FD  |  DF FD  | CFFFFFC | CAAFAAC ',
                'AAACCCAAA|ACF   FCA| DF   FD | DF   FD |  G   G  | CC F CC |  G   G  | DF   FD | DF   FD |ACF   FCA|AAAAFAAAA',
                'AAFCFCFAA|ACF F FCA|BD  F  DB|BD  F  DB| BF F FB | DDFFFDD | BF F FB |BD  F  DB|BD  F  DB|ACF F FCA|AAFFHFFAA',
                'AAACCCAAA|ACF   FCA| DF   FD | DF   FD |  G   G  | CC F CC |  G   G  | DF   FD | DF   FD |ACF   FCA|AAAAFAAAA',
                ' CAAFAAC | CFFFFFC |  DF FD  |  DF FD  |  BGFGB  |  DCDCD  |  BGFGB  |  DF FD  |  DF FD  | CFFFFFC | CAAFAAC ',
                ' CCAAACC | CCCCCCC | B DDD B | B DDD B |    B    |   CDC   |    B    | B DDD B | B DDD B | CCCCCCC | CCAAACC ',
                '   AAA   |   A@A   |    B    |    B    |         |         |         |    B    |    B    |   AAA   |   AAA   ',
            ])
                .whereDict({
                    A: P.anyOf([
                        P.gtBlock('high_temperature_smelting_casing', { min: 5 }),
                        P.ability(PA.itemIn, { view: 1 }),
                        P.ability(PA.itemOut, { view: 1 }),
                        P.ability(PA.fluidIn, { view: 1 }),
                        P.ability(PA.fluidOut, { view: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { max: 1 }),
                    ]),
                    B: P.gtBlock('tungsten_frame'),
                    C: P.gtBlock('heat_vent'),
                    D: P.heatingCoil(),
                    F: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    G: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    H: P.ability(PA.muffler),
                    '@': P.controller(definition),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/gcym/blast_alloy_smelter'
        )
        .additionalDisplay(global.coilMachineTempDisplay);
});
