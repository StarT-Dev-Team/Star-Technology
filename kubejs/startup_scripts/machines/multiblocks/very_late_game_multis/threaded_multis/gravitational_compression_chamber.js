GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('gravitational_compression_chamber', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['bender', 'compressor', 'forge_hammer', 'forming_press', 'packer'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:gravitationally_strained_stabilization_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '                     |                     |                     |                     | BBB             BBB | BBBBB         BBBBB | BBBBBCC     CCBBBBB | BBBBB         BBBBB | BBB             BBB |                     |                     |                     |                     ',
                '                     |                     | BB               BB | BBBB           BBBB | BBBBB  C   C  BBBBB |BBBBBBBBC   CBBBBBBBB|BBBBDBBBC   CBBBDBBBB|BBBBBBBBC   CBBBBBBBB| BBBBB  C   C  BBBBB | BBB            BBBB | BB               BB |                     |                     ',
                '                     | BB               BB | BBBBCCC     CCCBBBB |BBBBBBBBC   CBBBBBBBB|BB  BBBBB   BBB    BB|BB  C  BBBBBBB  C  BB|BB CDC BBBEBBB CDC BB|BB  C  BBBBBBB  C  BB|BB  BBBBB   BBBBB  BB|BBBBBBBBC   CBBBBBBBB| BBBBCCC     CCCBBBB | BB               BB |                     ',
                '                     | BBBB           BBBB |BBBBBBBBC   CBBBBBBBB|BB   BBBBBBBBBBB   BB|BB      BBBBB      BB|BB  C     C     C  BB|BB CDCCCCCDCCCCCDC BB|BB  C     C     C  BB|BB      BBBBB      BB|BB   BBBBBBBBBBB   BB|BBBBBBBBC   CBBBBBBBB| BBB            BBBB |                     ',
                ' BBB             BBB | BBBBB  C   C  BBBBB |BB  BBBBB   BBBBB  BB|BB      BBBBB      BB|BB        C        BB| B  CCCCCCCCCCCCC  B | BCCDDDDDDDDDDDDDCCB | B  CCCCCCCCCCCCC  B |BB        C        BB|BB      BBBBB      BB|BB  BBBBB   BBBBB  BB| BBBBB  C   C  BBBBB | BBB             BBB ',
                ' BBBBB         BBBBB |BBBBBBBBC   CBBBBBBBB|BB  C  BBBBBBB  C  BB|BB  C           C  BB| B  CCCCCCCCCCCCC  B | FCCC           CCCF | FDDD           DDDF | FCCC           CCCF | B  CCCCCCCCCCCCC  B |BB  C           C  BB|BB  C  BBBBBBB  C  BB|BBBBBBBBC   CBBBBBBBB| BBBBB         BBBBB ',
                ' BBBBBCC     CCBBBBB |BBBBDBBBC   CBBBDBBBB|BB CDC BBBBBBB CDC BB|BB CDCCCCCCCCCCCDC BB| B CDDDDDDDDDDDDDC B | B CD           DC B | BCCDCCCCCCCCCCCDCCB | B CD           DCBB | B CDDDDDDDDDDDDDC B |BB CDCCCCCCCCCCCDC BB|BB CDC BBBBBBB CDC BB|BBBBDBBBC   CBBBDBBBB| BBBBBCC     CCBBBBB ',
                ' BBBBB         BBBBB |BBBBBBBBC   CBBBBBBBB|BB  C  BBBBBBB  C  BB|BB  C           C  BB| B  CCCCCCCCCCCCC  B | FCCC           CCCF | FDDD           DDDF | FCCC           CCCF | B  CCCCCCCCCCCCC  B |BB  C           C  BB|BB  C  BBBBBBB  C  BB|BBBBBBBBC   CBBBBBBBB| BBBBB         BBBBB ',
                ' BBB             BBB | BBBBB  C   C  BBBBB |BB  BBBBB   BBBBB  BB|BB      BBBBB      BB|BB        C        BB| B  CCCCCCCCCCCCC  B | BCCDDDDDDDDDDDDDCCB | B  CCCCCCCCCCCCC  B |BB        C        BB|BB      BBBBB      BB|BB  BBBBB   BBBBB  BB| BBBBB  C   C  BBBBB | BBB             BBB ',
                '                     | BBBB           BBBB |BBBBBBBBC   CBBBBBBBB|BB   BBBBBBBBBBB   BB|BB      BBBBB      BB|BB  C     C     C  BB|BB CDCCCCCDCCCCCDC BB|BB  C     C     C  BB|BB      BBBBB      BB|BB   BBBBBBBBBBB   BB|BBBBBBBBC   CBBBBBBBB| BBBB            BBB |                     ',
                '                     | BB               BB | BBBBCCC     CCCBBBB |BBBBBBBBC   CBBBBBBBB|BB  BBBBB   BBBBB  BB|BB  C  BBBBBBB  C  BB|BB CDC BBB@BBB CDC BB|BB  C  BBBBBBB  C  BB|BB  BBBBB   BBBBB  BB|BBBBBBBBC   CBBBBBBBB| BBBBCCC     CCCBBBB | BB               BB |                     ',
                '                     |                     | BB               BB | BBBB           BBBB | BBBBB  C   C  BBBBB |BBBBBBBBC   CBBBBBBBB|BBBBDBBBC   CBBBDBBBB|BBBBBBBBC   CBBBBBBBB| BBBBB  C   C  BBBBB | BBBB            BBB | BB               BB |                     |                     ',
                '                     |                     |                     |                     | BBB             BBB | BBBBB         BBBBB | BBBBBCC     CCBBBBB | BBBBB         BBBBB | BBB             BBB |                     |                     |                     |                     ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('gravitationally_strained_stabilization_casing'),
                        P.ability(PA.itemIn, { max: 20, view: 1 }),
                        P.ability(PA.itemOut, { max: 20, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.gtBlock('abyssal_alloy_frame'),
                    D: P.kjsBlock('nyanium_gearbox'),
                    E: P.coreBlock('threading_controller'),
                    F: P.threadingBlocks(),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/gravitationally_strained_stabilization_casing',
            'gtceu:block/machines/compressor'
        );
});
