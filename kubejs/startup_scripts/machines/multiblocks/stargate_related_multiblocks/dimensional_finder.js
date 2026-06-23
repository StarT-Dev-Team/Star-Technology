GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('dimensional_finder')
        .category('gate_construction')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('dimensional_finder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $OpticalComputationMachine(holder))
        .recipeType('dimensional_finder')
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '    B   B    |    B   B    |    B   B    |             |             |             |             |             |             |             |             |             |             |             |             |             |      C      |             |             |             |      C      |             ',
                '  DDEEEEEDD  |  DDEEEEEDD  |    B   B    |    F   F    |    F   F    |  GGF   FGG  |             |             |             |             |             |             |             |             |             |             |             |    H   H    |      H      |    H   H    |             |             ',
                '  DDEEEEEDD  |  DDEIIIEDD  |    B   B    |             |             |  GGGGGGGGG  |             |             |             |   GG   GG   |             |             |             |             |             |             |  H       H  |             |             |             |  H       H  |             ',
                ' BEEEEEEEEEB | BEEBBBBBEEB | BBBBJCJBBBB |  F BJBJB F  |  F BJCJB F  |  FGBIBIBGF  |    F   F    |    F   F    |    F   F    |   GGGGGGG   |             |             |             |    GG GG    |             |             |             |   C     C   |             |   C     C   |             |             ',
                '  EEEEEEEEE  |  EIBKKKBIE  |    JLLLJ    |    JLLLJ    |    JLLLJ    |   GIKBKIG   |     JCJ     |     JBJ     |     JCJ     |    GBBBG    |     F F     |     F F     |     F F     |    GGGGG    |             |H           H|             |             |             |             |             |H           H',
                '  EEEEEEEEE  |  EIBKKKBIE  |    CLLLC    |    BLLLB    |    CLLLC    |   GBBBBBG   |     CMC     |     BMB     |     CMC     |    GBKBG    |      J      |      N      |      J      |     GKG     |      K      |      C      |             |             |  C   O   C  |             |             |             ',
                '  EEEEEEEEE  |  EIBKKKBIE  |    JLLLJ    |    JLLLJ    |    JLLLJ    |   GIKBKIG   |     JCJ     |     JBJ     |     JCJ     |    GBBBG    |     F F     |     F F     |     F F     |    GGGGG    |             |H           H|             |             |             |             |             |H           H',
                ' BEEEEEEEEEB | BEEBBBBBEEB | BBBBJCJBBBB |  F BJBJB F  |  F BJCJB F  |  FGBIBIBGF  |    F   F    |    F   F    |    F   F    |   GGGGGGG   |             |             |             |    GG GG    |             |             |             |   C     C   |             |   C     C   |             |             ',
                '  DDEEEEEDD  |  DDEIIIEDD  |    B   B    |             |             |  GGGGGGGGG  |             |             |             |   GG   GG   |             |             |             |             |             |             |  H       H  |             |             |             |  H       H  |             ',
                '  DDEEEEEDD  |  DDEE@EEDD  |    B   B    |    F   F    |    F   F    |  GGF   FGG  |             |             |             |             |             |             |             |             |             |             |             |    H   H    |      H      |    H   H    |             |             ',
                '    B   B    |    B   B    |    B   B    |             |             |             |             |             |             |             |             |             |             |             |             |             |      C      |             |             |             |      C      |             ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    C: P.gtBlock('fusion_glass'),
                    D: P.gtBlock('heat_vent'),
                    E: P.anyOf([
                        P.gtBlock('high_temperature_smelting_casing'),
                        P.ability(PA.itemIn, { max: 3, prev: 1 }),
                        P.ability(PA.itemOut, { max: 1, prev: 1 }),
                        P.ability(PA.fluidIn, { max: 3, prev: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.compIn, { exact: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    F: P.gtBlock('trinaquadalloy_frame'),
                    G: P.gtBlock('sturdy_machine_casing'),
                    H: P.gtBlock('superconducting_coil'),
                    I: P.kjsBlock('enriched_naquadah_machine_casing'),
                    J: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    K: P.gtBlock('fusion_coil'),
                    L: P.kjsBlock('twinite_casing'),
                    M: P.kjsBlock('lumium_casing'),
                    N: P.kjsBlock('shellite_casing'),
                    O: P.kjsBlock('laser_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/machines/scanner'
        );
});
