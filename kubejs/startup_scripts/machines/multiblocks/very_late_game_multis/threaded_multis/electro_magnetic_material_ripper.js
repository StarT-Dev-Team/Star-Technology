GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('electro_magnetic_material_ripper', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['polarizer', 'electromagnetic_separator', 'electrolyzer'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:aurouric_resilient_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '               BBBBB|               BBBBB| BBBBBBB       BBBBB| BB   BB       BBBBB| B     B       BBBBB| B     B       BBBBB| B     B       BBBBB| BB   BB       BBBBB| BBBBBBB       BBBBB|                    ',
                ' C  C  C       BBBBB| BBBBBBB       BBBD | BBBBBBB       BBBD | BBEDEBBBBFFFBBBBBD | DGGDGGBBFFFFFBBBBBB| DDDEDDBBFFFFFBBBBBB| DGGDGGBBFFFFFBBBBBB| BBEDEBBBBFFFBBBBBBB| BBBBBBB       BBBBB| BBBBBBB       BBBBB',
                '               BBBBB| BB   BB       BBBD | BBGDGBBBBFFFBBBBBD |BBCCCCCB       BBBD |BBC F CB       BBBBB|BBCFHFCBC     CBBBBB|BBC F CB       BBBD |BBCCCCCB       BBBD | BBGDGBBBBFFFBBBBBBB| BB   BB       BBBBB',
                '               BBBBB| B     B       BBBBB| DGGDGGBBFFFFFBBBBBB|BBC   CB       BBBBB| D  F  DCB   BCDBBBB| DFFHFFDFDD DDFDBBBB| D  F  DCB   BCDBBD |BBC   CB       BBBD | DGGDGGBBFFFFFBBBBBB| B     B       BBBBB',
                '               BBBBB| B     B       BBBBB| DDDDDDBBFFFFFBBBBBB|BBC   CBC     CBBBBB| DFFFFFDFDD DDFDBBBB| IHHHHHHHHHHHHHHHHBB| DFFFFFDFDD DDFDBBD |BBC   CBC     CBBBD | DDDDDDBBFFFFFBBBBBB| B     B       BBBBB',
                '               BBBBB| B     B       BBBBB| DGGDGGBBFFFFFBBBBBB|BBC   CB       BBBBB| D  F  DCB   BCDBBBB| DFFHFFDFDD DDFDBJBB| D  F  DCB   BCDBBD |BBC   CB       BBBD | DGGDGGBBFFFFFBBBBBB| B     B       BBBBB',
                '               BBBBB| BB   BB       BBBD | BBGDGBBBBFFFBBBBBD |BBCCCCCB       BBBD |BBC F CB       BBBBB|BBCFHFCBC     CBBJBB|BBC F CB       BBBD |BBCCCCCB       BBBD | BBGDGBBBBFFFBBBBBBB| BB   BB       BBBBB',
                ' C  C  C       BBBBB| BBBBBBB       BDDD | BBBBBBB       BDDD | BBEDEBBBBFFFBBBDDD | DGGDGGBBFFFFFBBBBBB| DDDEDDBBFFFFFBBBJBB| DGGDGGBBFFFFFBBBBBB| BBEDEBBBBFFFBBBBBBB| BBBBBBB       BBBBB| BBBBBBB       BBBBB',
                '               BBBBB|               B   B| BBBBBBB       B   B| BB   BB       B   B| B     B       BBBBB| B     B       BB@BB| B     B       BBBBB| BB   BB       BBBBB| BBBBBBB       BBBBB|                    ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('aurouric_resilient_casing'),
                        P.ability(PA.itemIn, { max: 20, prev: 1 }),
                        P.ability(PA.itemOut, { max: 20, prev: 1 }),
                        P.ability(PA.fluidIn, { max: 20, prev: 1 }),
                        P.ability(PA.fluidOut, { max: 20, prev: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.gtBlock('draco_abyssal_frame'),
                    D: P.kjsBlock('aurouric_polarization_cell'),
                    E: P.threadingBlocks(),
                    F: P.kjsBlock('draco_resilient_fusion_glass'),
                    G: P.kjsBlock('draco_assembly_grating'),
                    H: P.coreBlock('advanced_fusion_coil'),
                    I: P.coreBlock('threading_controller'),
                    J: P.kjsBlock('nyanium_pipe_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/aurouric_resilient_casing',
            'gtceu:block/machines/electrolyzer'
        );
});
