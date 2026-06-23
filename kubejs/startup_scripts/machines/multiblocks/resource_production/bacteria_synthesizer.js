GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('bacteria_synthesizer')
        .category('resource_production')
        .setMaxIOSize(2, 0, 6, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('bacteria_synthesizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bacteria_synthesizer')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:peek_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '       BBBBB|       BBBBB|       CDDDC|       C   C|       C   C|       C   C|       CDDDC|       BBBBB|            |            |            |            |            ',
                '       BDDDB|       BDDDB|       DDDDD|        DED |        DED |        DED |       DDDDD|       BDDDB|            |            |            |            |            ',
                '       BDDDB|       BD DB|       DDFDD|        E E |        E E |        E E |       DD DD|       BDGDB|            |            |            |            |            ',
                '       BDDDB|       BDDDB|       DDDDD|        DED |        DED |        DED |       DDDDD|       BDDDB|            |            |            |            |            ',
                '       BBBBB|       BBBBB|       CDDDC|       C   C|       C   C|       C   C|       CDDDC|       BBBBB|            |            |            |            |            ',
                'BBBBBBBBDDDB| B     BDDDB|       DDDDD|        DED |        DED |        DED |       DDDDD|       BDDDB|            |            |            |   DDD      |            ',
                'BBBBBBBBDDDB|BBBBBBBBD DB| BB   BBDFDD| B     BD E | C     CD E | B     BD E | BB   BBD DD| BBBBBBBDGDB|  BB BB     |   B B      |   B B      | DDDDDDD    |            ',
                'BB     BDDDB| BBBBBBBDDDB| BHHHHH DDDD|  HHEHH DED |  HHEHH DED |  HHEHH DED | BHHHHH DDDD| BHHHHHBDDDB| BHHFHHB    |  HHFHH     |  HHFHH     | DDDDDDD    |   DDD      ',
                'BB     BBBBB| BBBBBBBBBBB|  HFFFHBDDDC|  H   HB   C|  H   HB   C|  H   HB   C|  HFFFHBDDDC| BH   HBBBBB| BH   HB    | BH   HB    | BH   HB    |DDD   DDD   |  DDDDD     ',
                'BB     BDDDB| BBBBBBBDDDB|  HFFFH DDDD|  E   H DED |  E   H DED |  E   H DED |  HFFFH DDDD| BH   HBDDDB|  F   F     |  F   F     |  F   F     |DDD   DDD   |  DDDDD     ',
                'BB     BDDDB| BBBBBBBD DB|  HFFFHBDFDD|  H   HBD E |  H   HBD E |  H   HBD E |  HFFFHBD DD| BH   HBDGDB| BH   HB    | BH   HB    | BH   HB    |DDD   DDD   |  DDDDD     ',
                'BB     BDDDB| BBBBBBBDDDB| BHHHHH DDDD|  HHHHH DED |  HH@HH DED |  HHHHH DED | BHHHHH DDDD| BHHHHHBDDDB| BHHFHHB    |  HHFHH     |  HHFHH     | DDDDDDD    |   DDD      ',
                'BBBBBBBBBBBB|BBBBBBBBBBBB| BB   BBDDDC| B     B   C| C     C   C| B     B   C| BB   BBDDDC| BBBBBBBBBBB|  BB BB     |   B B      |   B B      | DDDDDDD    |            ',
                'BBBBBBBBB   | B     B    |            |            |            |            |            |            |            |            |            |   DDD      |            ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.gtBlock('palladium_substation'),
                    C: P.gtBlock('trinaquadalloy_frame'),
                    D: P.gtBlock('atomic_casing'),
                    E: P.gtBlock('fusion_glass'),
                    F: P.gtBlock('molybdenum_disilicide_coil_block'),
                    G: P.kjsBlock('pallaridium_engine_intake_casing'),
                    H: P.anyOf([
                        P.kjsBlock('peek_casing'),
                        P.ability(PA.itemIn, { max: 2, prev: 1 }),
                        P.ability(PA.fluidIn, { max: 2, prev: 1 }),
                        P.ability(PA.fluidOut, { max: 2, prev: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                    ]),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/basic/machine_casing_peek', 'gtceu:block/multiblock/fusion_reactor');
});
