GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_cracker', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('cracker')
        .machine((holder) => new $CoiledMulti(holder))
        .recipeModifiers([
            GTRecipeModifiers.CRACKER_OVERCLOCK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GTBlocks.CASING_PALLADIUM_SUBSTATION)
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' BCCCDDDCCCB | B   BBB   B |BBBBBBEBBBBBB| B   BBB   B | BCCCDDDCCCB ',
                ' B   BBB   B |BBFFF   FFFBB|BBFFF   FFFBB|BBFFF   FFFBB| B   BBB   B ',
                'BBBBBBBBBBBBB|BBFFF   FFFBB|GHHHHHHHHHHHG|BBFFF   FFFBB|BBBBBBBBBBBBB',
                ' B   BBB   B |BBFFF   FFFBB|BBFFF   FFFBB|BBFFF   FFFBB| B   BBB   B ',
                ' BCCCDDDCCCB | B   BBB   B |BBBBBB@BBBBBB| B   BBB   B | BCCCDDDCCCB ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.gtBlock('palladium_substation'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.euIn, { max: 1, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.gtBlock('birmabright_frame'),
                    D: P.kjsBlock('pallaridium_firebox_casing'),
                    E: P.ability(PA.muffler),
                    F: P.heatingCoil(),
                    G: P.kjsBlock('pallaridium_engine_intake_casing'),
                    H: P.kjsBlock('pallaridium_pipe_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/multiblock/cracking_unit'
        )
        .additionalDisplay(global.crackerOverclockDisplay);
});
