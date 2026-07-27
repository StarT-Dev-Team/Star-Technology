GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('molecular_inducing_xanadu', 'multiblock')
        .machine((holder) => new $BulkingThreadedMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['autoclave', 'mixer', 'ore_washer', 'chemical_bath'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULKING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:atomic_convergence_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '     BBBBB     |     BBBBB     |     BBBBB     |     BBBBB     |     BBBBB     |     BBBBB     |     BBBBB     |     BBBBB     |     BBBBB     |     BBBBB     |     BBBBB     |      CCC      |               |               ',
                ' C BBBBBBBBB C | C BBBDEDBBB C | C BBBDEDBBB C | C BBBDEDBBB C | C BBBDEDBBB C | C  BBDEDBB  C | C BBBDEDBBB C | C BBBDEDBBB C | C BBBDEDBBB C | C BBBDEDBBB C | C BBBDEDBBB C |    CCBBBCC    |       C       |               ',
                '  BBBBBBBBBBB  |  BBED   DEBB  |  BBED   DEBB  |  BBED   DEBB  |  BBED   DEBB  |   FED   DEF   |  BBED   DEBB  |  BBED   DEBB  |  BBED   DEBB  |  BBED   DEBB  |  BBED   DEBB  |  CCBBBBBBBCC  |       C       |               ',
                ' BBBBBBBBBBBBB | BBD       DBB | BBD   G   DBB | BBD       DBB | BBD       DBB |  FD       DF  | BBD   G   DBB | BBD       DBB | BBD       DBB | BBD       DBB | BBD       DBB |  CBBBHHHBBBC  |   C   C   C   |               ',
                ' BBBBBBBBBBBBB | BE         EB | BE    G    EB | BE         EB | BE   CCC   EB | BE         EB | BE    G    EB | BE         EB | BE   CCC   EB | BE         EB | BE         EB | CBBBHHHHHBBBC |    C  C  C    |       C       ',
                'BBBBBBBBBBBBBBB|BBD         DBB|BBD  CCGCC  DBB|BBD         DBB|BBD  C I C  DBB|BBD         DBB|BBD  CCGCC  DBB|BBD         DBB|BBD  C I C  DBB|BBD         DBB|BBD         DBB| CBBHHHHHHHBBC |     C   C     |     C C C     ',
                'BBBBBBBBBBBBBBB|BD           DB|BD  C  G  C  DB|BD           DB|BD   C I C   DB|BD           DB|BD  C  G  C  DB|BD           DB|BD   C I C   DB|BD           DB|BD           DB|CBBHHHHHHHHHBBC|               |      CCC      ',
                'BBBBBBBBBBBBBBB|BE     I     EB|BE  CIIIIIC  EB|BE     I     EB|BE GGGGIGGGG EB|BE     I     EB|BE  CIIIIIC  EB|BE     I     EB|BE GGGGIGGGG EB|BE     I     EB|BE     I     EB|CBBHHHHIHHHHBBC| CCCC  I  CCCC |    CCCICCC    ',
                'BBBBBBBBBBBBBBB|BD           DB|BD  C  G  C  DB|BD           DB|BD   C I C   DB|BD           DB|BD  C  G  C  DB|BD           DB|BD   C I C   DB|BD           DB|BD           DB|CBBHHHHHHHHHBBC|               |      CCC      ',
                'BBBBBBBBBBBBBBB|BBD         DBB|BBD  CCGCC  DBB|BBD         DBB|BBD  C I C  DBB|BBD         DBB|BBD  CCGCC  DBB|BBD         DBB|BBD  C I C  DBB|BBD         DBB|BBD         DBB| CBBHHHHHHHBBC |     C   C     |     C C C     ',
                ' BBBBBBBBBBBBB | BE         EB | BE    G    EB | BE         EB | BE   CCC   EB | BE         EB | BE    G    EB | BE         EB | BE   CCC   EB | BE         EB | BE         EB | CBBBHHHHHBBBC |    C  C  C    |       C       ',
                ' BBBBBBBBBBBBB | BBD       DBB | BBD   G   DBB | BBD       DBB | BBD       DBB |  FD       DF  | BBD   G   DBB | BBD       DBB | BBD       DBB | BBD       DBB | BBD       DBB |  CBBBHHHBBBC  |   C   C   C   |               ',
                '  BBBBBBBBBBB  |  BBED   DEBB  |  BBED   DEBB  |  BBED   DEBB  |  BBED   DEBB  |   FED   DEF   |  BBED   DEBB  |  BBED   DEBB  |  BBED   DEBB  |  BBED   DEBB  |  BBED   DEBB  |  CCBBBBBBBCC  |       C       |               ',
                ' C BBBBBBBBB C | C BBBDEDBBB C | C BBBDEDBBB C | C BBBDEDBBB C | C BBBDEDBBB C | C  BBDEDBB  C | C BBBDEDBBB C | C BBBDEDBBB C | C BBBDEDBBB C | C BBBDEDBBB C | C BBBDEDBBB C |    CCBBBCC    |       C       |               ',
                '     BBBBB     |     BBBBB     |     BBBBB     |     BBBBB     |     BB@BB     |     BBBBB     |     BBBBB     |     BBJBB     |     BBBBB     |     BBBBB     |     BBBBB     |      CCC      |               |               ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('atomic_convergence_casing'),
                        P.ability(PA.itemIn, { max: 20, view: 1 }),
                        P.ability(PA.itemOut, { max: 20, view: 1 }),
                        P.ability(PA.fluidIn, { max: 20, view: 1 }),
                        P.ability(PA.fluidOut, { max: 20, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.gtBlock('melastrium_mox_frame'),
                    D: P.coreBlock('auxiliary_boosted_fusion_casing_mk2'),
                    E: P.kjsBlock('nyanium_engine_intake_casing'),
                    F: P.threadingBlocks(),
                    G: P.kjsBlock('nyanium_pipe_casing'),
                    H: P.kjsBlock('draco_resilient_fusion_glass'),
                    I: P.kjsBlock('nyanium_gearbox'),
                    '@': P.controller(definition),
                    J: P.coreBlock('threading_controller'),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/threading/atomic_convergence_casing', 'gtceu:block/machines/mixer');
});
