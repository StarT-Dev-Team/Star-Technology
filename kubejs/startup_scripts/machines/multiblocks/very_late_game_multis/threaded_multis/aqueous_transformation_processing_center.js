GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('aqueous_transformation_processing_center', 'multiblock')
        .machine((holder) => new $BulkingThreadedMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['extractor', 'canner', 'fluid_solidifier'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULKING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:subatomically_secure_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '                   |  BBB              | BBBBB             | BBKBB             | BBBBB             |  BBB              |                   |                   |                   ',
                ' BBBBB             |BBBBBBB            |BBBBBBB            |BBBBBBB            |BBBBBBB            |BBBBBBB            | BBBBB             |                   |                   ',
                '  BBB              | BBCBB             |B     B            |D  E  B            |B     B            | BBBBB             |  BBB              |                   |                   ',
                '  BBB       BBB    | BBCBB      BBB    |B     B     BBB    |D  E  B            |B     B            | BBBBB             |  BBB              |                   |                   ',
                '  BBB     BBBBBBB  | BBCBB     FGGGF   |B     B   BBBBBBB  |D  E  B     BDB    |B     B     BDB    | BBBBB      BDB    |  BBB       BDB    |            BBB    |                   ',
                '  BBB    BBBBBBBBB | BBCBB    GBGGGBG  |B     BB BBB   BBB |D  E  BB  BD   DB  |B     BB  BD   DB  | BBBBB    BD   DB  |  BBB     BD   DB  |           BBBBB   |            BBB    ',
                'BBBBBBB  BBBBBBBBB |BBBCBBB  FBGGGGGBF |B     BBBBB  E  BB |D  E  BBBBB  E  D  |B     BBBBB  E  D  |BBBBBBB   B  E  D  |BBBBBBB   B  E  D  |          BBGGGBB  |           BBBBB   ',
                'H BBB H  BBBBBBBBBB| BBCBBBBBBGGGCGGGGB|B        I       BB|D  E     I       B |B        I       B | BBBBBBBBB       B |H BBB H  B       B |         BBGGGGGBB |          BBBBBBB  ',
                'H BBB H  BBBBBBBBBB| BBCBBBBBBGGCCCGGGB|B        I E   E BB|D  EEEEEEI E   E D |B        I E   E D | BBBBBBBBB E   E D |H BBBBBBBB E   E D |         BBGGGGGBB |          BBBBBBB  ',
                'H BBB H  BBBBBBBBBB| BBCBBBBBBGGGCGGGGB|B        I       BB|D  E     I       B |B        I       B | BBBBBBBBB       B |H BBB H  B       B |         BBGGGGGBB |          BBBBBBB  ',
                'BBBBBBB  BBBBBBBBB |BBBCBBB  FBGGGGGBF |B     BBBBB  E  BB |D  E  BBBBB  E  D  |B     BBBBB  E  D  |BBBBBBB   B  E  D  |BBBBBBB   B  E  D  |          BBGGGBB  |           BBBBB   ',
                '  BBB    BBBBBBBBB | BBCBB    GBGGGBG  |B     BB BBB   BBB |D  E  BB  BD   DB  |B     BB  BD   DB  | BBBBB    BD   DB  |  BBB     BD   DB  |           BBBBB   |            BBB    ',
                '  BBB     BBBBBBB  | BBCBB     FGGGF   |B     B   BBBBBBB  |D  E  B     BDB    |B     B     BDB    | BBBBB      BDB    |  BBB       BDB    |            BBB    |                   ',
                '  BBB       BBB    | BBCBB      BBB    |B     B     BBB    |D  E  B            |B     B            | BBBBB             |  BBB              |                   |                   ',
                '  BBB              | BBCBB             |B     B            |D  E  B            |B     B            | BBBBB             |  BBB              |                   |                   ',
                ' BBBBB             |BBBBBBB            |BBBJBBB            |BBJEJBB            |BBBJBBB            |BBBBBBB            | BBBBB             |                   |                   ',
                '                   |  BBB              | BBBBB             | BB@BB             | BBBBB             |  BBB              |                   |                   |                   ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('subatomically_secure_casing'),
                        P.ability(PA.itemIn, { max: 20, view: 1 }),
                        P.ability(PA.itemOut, { max: 20, view: 1 }),
                        P.ability(PA.fluidIn, { max: 20, view: 1 }),
                        P.ability(PA.fluidOut, { max: 20, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.kjsBlock('rhenotax_coil'),
                    D: P.kjsBlock('draco_resilient_fusion_glass'),
                    E: P.kjsBlock('nyanium_pipe_casing'),
                    F: P.threadingBlocks(),
                    G: P.kjsBlock('nyanium_machine_casing'),
                    H: P.gtBlock('abyssal_alloy_frame'),
                    I: P.kjsBlock('nyanium_heat_escape_casing'),
                    J: P.kjsBlock('nyanium_firebox_casing'),
                    K: P.coreBlock('threading_controller'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/subatomically_secure_casing',
            'gtceu:block/machines/fluid_solidifier'
        );
});
