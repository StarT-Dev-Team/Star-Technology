GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('incomprehensible_chemical_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $CoiledMulti(holder))
        .recipeTypes(['large_chemical_reactor'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.CHEMICAL_REACTOR_OVERCLOCK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:cattomolymer_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '       BBCCCBB|       DBBBBBD|       BEBEBEB|       BCBCBCB|       BEBEBEB|       DBBBBBD|       BBCCCBB',
                'BBFBB  BBBBBBB|B   B  BG G GB| D D   EG G GE|  E    CG G GC| D D   EG G GE|B   B  BG G GB|BBFBB  BBBBBBB',
                'BBBBB  CBBBBBC| HHH   B     B|DHHHD  B G G B| HGH   B     B|DHHHD  B G G B| HHH   B     B|BBBBB  CBBBBBC',
                'FBCBF  CBBBBBC| HGH   BG G GB| HGH   EG G GE|EGGGGGGGG G GC| HGH   EG G GE| HGH   BG G GB|FBCBF  CBBBBBC',
                'BBBBB  CBBBBBC| HHH   B     B|DHHHD  B G G B| HGH   B     B|DHHHD  B G G B| HHH   B     B|BBBBB  CBBBBBC',
                'BBFBB  BBBBBBB|B   B  BG G GB| D D   EG G GE|  E    CG G GC| D D   EG G GE|B   B  BG G GB|BBFBB  BBBBBBB',
                '       BBCCCBB|       DBBBBBD|       BEBEBEB|       BCB@BCB|       BEBEBEB|       DBBBBBD|       BBCCCBB',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('cattomolymer_casing'),
                        P.ability(PA.itemIn, { max: 8, prev: 1 }),
                        P.ability(PA.itemOut, { max: 8, prev: 1 }),
                        P.ability(PA.fluidIn, { max: 8, prev: 1 }),
                        P.ability(PA.fluidOut, { max: 8, prev: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    C: P.kjsBlock('nyanium_heat_escape_casing'),
                    D: P.gtBlock('nyanium_frame'),
                    E: P.kjsBlock('nyanium_engine_intake_casing'),
                    F: P.kjsBlock('nyanium_firebox_casing'),
                    G: P.kjsBlock('nyanium_pipe_casing'),
                    H: P.heatingCoil(),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/end_multis/cattomolymer_casing',
            'gtceu:block/multiblock/large_chemical_reactor'
        )
        .additionalDisplay(global.chemicalOverclockDisplay);
});
