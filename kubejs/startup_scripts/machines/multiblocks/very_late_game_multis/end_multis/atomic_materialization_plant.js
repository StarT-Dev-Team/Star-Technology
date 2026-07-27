GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('atomic_materialization_plant', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $BulkingCoiledMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['chemical_skip'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.CHEMICAL_REACTOR_OVERCLOCK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            $StarTRecipeModifiers.BULKING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:cattomolymer_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'ABBCBBA    |DAAAAAD    |D     D    |D     D    |D     D    |DAAAAAD    |ABBCBBA    |           |           |           |           ',
                'BAABAAB E  |AEEEEEA F  | AAAAAFFF  | GGGGG     | AAAAA     |AGGGGGA    |BDHHHDB    | D   D     | D   D     | D   D     | AAAAA     ',
                'BAABAAB    |AEIIIEA    | ADDDA     | G   G     | ADDDA     |AG   GA    |BHAAAHB    |  AAA      |  MMM      |  AAA      | ACCCA     ',
                'CAAAAAC JJ |AEIIIEA JJ | ADFDADDJJ | G F G  JJ | ADFDA  JJ |AG F GA JJ |CHAFAHC JJ |  AFA   JJ |  MFM      |  AAA      | ACCCA     ',
                'BAABAAB JJ |AEIIIEA JJ | ADFDA  JJ | G   G  JJ | ADDDADDJJ |AG   GA JJ |BHAAAHB JJ |  AAA   JJ |  MEM      |  AAA      | ACCCA     ',
                'BAABAAB    |AEEEEEA    | ADFDA     | GDDDG     | ADDDA     |AGGGGGA    |BDHHHDB    | D D D     | D E D     | D D D     | AAAAA     ',
                'ABAAAAA BBB|DAAEAEADABA|D AFAAAHAAA|D AAAGADABA|D AAAAA BBB|DAAAAAD    |ABBCBEA    |           |   H       |           |           ',
                '  ABABA BBB|  ADGGAHAFA|  AFGGF IFK|  ADGGAHAFA|  AAAAA BBB|           |   D E     |           |   H       |           |           ',
                '  ABABA BBB|  AEDEADABA|  LFDFAHAAA|  AEDEADABA|  AEAEA BBB|   E E     |   HDE     |   H       |   H       |           |           ',
                '  AAAA     |  AAHA     |  A@HA     |  AAHA     |  AAAA     |           |           |           |           |           |           ',
            ])
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('cattomolymer_casing'),
                        P.ability(PA.itemIn, { max: 8, view: 1 }),
                        P.ability(PA.itemOut, { max: 8, view: 1 }),
                        P.ability(PA.fluidIn, { max: 8, view: 1 }),
                        P.ability(PA.fluidOut, { max: 8, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    B: P.gtBlock('heat_vent'),
                    C: P.kjsBlock('nyanium_engine_intake_casing'),
                    ' ': P.any(),
                    D: P.gtBlock('draco_abyssal_frame'),
                    E: P.gtBlock('ptfe_pipe_casing'),
                    F: P.kjsBlock('nyanium_pipe_casing'),
                    G: P.kjsBlock('rhenotax_coil'),
                    H: P.kjsBlock('draco_resilient_fusion_glass'),
                    I: P.kjsBlock('abyssal_inductor_hull'),
                    J: P.kjsBlock('noble_mixing_casing'),
                    K: P.ability(PA.muffler),
                    L: P.gtBlock('uev_rotor_holder'),
                    M: P.heatingCoil(),
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
