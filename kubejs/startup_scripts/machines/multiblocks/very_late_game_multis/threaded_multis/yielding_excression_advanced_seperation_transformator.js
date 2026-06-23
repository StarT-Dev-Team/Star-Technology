GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('yielding_excression_advanced_seperation_transformator', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['distillation_tower', 'distillery', 'brewery', 'fermenter', 'fluid_heater'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:quantumly_resistant_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '   BBBBB         |   BBBBB         |   BBBBB         |   BBBBB         |   BBBBB         |   BBBBB         |   BBBBB         |   BBBBB         |   BBBBB         |   BBBBB         |                 |                 ',
                ' BBBBBBBBB       | BBBCCCBBB       | BBBCDCBBB       |   BCDCB         | BBBCDCBBB       | BBBCCCBBB       | BBBCDCBBB       |   BCCCB         | BBBCDCBBB       | BBBCCCBBB       |    BBB          |                 ',
                ' BBBBBBBBB       | BCC D CCB       | BCD   DCB       |  EC D CE        | BCD   DCB       | BCC D CCB       | BCD   DCB       |  EC   CE        | BCD   DCB       | BCC C CCB       |  BBBBBBB        |                 ',
                'BBBBBBBBBBB      |BBC DCD CBB      |BBD  C  DBB      |BBC DCD CBB      |BBD  C  DBB      |BBC DCD CBB      |BBD  C  DBB      |BBC  C  CBB      |BBD  C  DBB      |BBC  C  CBB      |  BB D BB        |    BBB          ',
                'BBBBBBBBBBB  BBB |BC DCDCD CB  BBB |BC  D D  CB  BBB |BC DCDCD CB  BBB |BC  D D  CB  BBB |BC DCDCD CB  BBB |BC       CB  BBB |BC       CB   B  |BC   C   CB      |BC       CB      | BB     BB       |   BBBBB         ',
                'BBBBBBBBBBB BBBBB|BCDCDCDCDCB BBDBB|BD C C C DB BBDBB|BDDCDCDCDCB BBDBB|BD C C C DB BBDBB|BCDCDCDCDCB BBDBB|BD C C C DB BBDBB|BC C C C CB  BBB |BD CCCCC DB      |BCCC C CCCB      | BBD C DBB       |   BBFBB         ',
                'BBBBBBBBBBB BBBBB|BC DCDCD CB BD DB|BC  D D  CB BDCDB|BC DCDCD CB BDCDB|BC  D D  CBDBDCDB|BC DCDCD CCCCCCDB|BC       CBDBDGDB|BC       CB BBHBB|BC   C   CB      |BC       CB      | BB     BB       |   BBBBB         ',
                'BBBBBBBBBBB BBBBB|BBC DCD CBB BBDBB|BBD  C  DBB BBDBB|BBC DCD CBB BBDBB|BBD  C  DBB BBDBB|BBC DCD CBB BBDBB|BBD  C  DBB BBDBB|BBC  C  CBB  BBB |BBD  C  DBB      |BBC  C  CBB      |  BB D BB        |    BBB          ',
                ' BBBBBBBBB   BBB | BCC D CCB   BBB | BCD   DCB   BBB |  EC D CE    BBB | BCD   DCB   BBB | BCC D CCB   BBB | BCD   DCB   BBB |  EC   CE     B  | BCD   DCB       | BCC C CCB       |  BBBBBBB        |                 ',
                ' BBBBBBBBB       | BBBCCCBBB       | BBBCDCBBB       |   BCDCB         | BBBCDCBBB       | BBBCCCBBB       | BBBCDCBBB       |   BCCCB         | BBBCDCBBB       | BBBCCCBBB       |    BBB          |                 ',
                '   BBBBB         |   BBBBB         |   BBBBB         |   BB@BB         |   BBBBB         |   BBBBB         |   BBBBB         |   BBIBB         |   BBBBB         |   BBBBB         |                 |                 ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('quantumly_resistant_casing'),
                        P.ability(PA.itemIn, { max: 20, view: 1 }),
                        P.ability(PA.itemOut, { max: 20, view: 1 }),
                        P.ability(PA.fluidIn, { max: 20, view: 1 }),
                        P.ability(PA.fluidOut, { max: 20, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.kjsBlock('nyanium_pipe_casing'),
                    D: P.gtBlock('aerorelient_steel_frame'),
                    E: P.threadingBlocks(),
                    F: P.gtBlock('uiv_rotor_holder'),
                    G: P.coreBlock('advanced_fusion_coil'),
                    H: P.kjsBlock('draco_resilient_fusion_glass'),
                    '@': P.controller(definition),
                    I: P.coreBlock('threading_controller'),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/quantumly_resistant_casing',
            'gtceu:block/machines/distillery'
        );
});
