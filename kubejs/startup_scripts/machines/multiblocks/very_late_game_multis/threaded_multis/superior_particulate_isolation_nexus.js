GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('superior_particulate_isolation_nexus', 'multiblock')
        .machine((holder) => new $BulkingThreadedMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['sifter', 'centrifuge', 'thermal_centrifuge'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULKING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:tectonic_defiance_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' BBB BBB BBB |             |             |             |             |             |             |     BBB     |  CBBBDBBBC  |  CBEEEEEBC  |  CBFFFFFBC  |  CBFFFFFBC  |  CBEEEEEBC  |  CBBBBBBBC  |             |             |             ',
                'BBBBCBBBCBBBB|  C   C   C  |      C      |             |             |             |             |   CGBBBGC   | BBBGBBBGBBB | BBBGGGGGBBB |   B     B   |   B     B   | BBBGGGGGBBB | BBBGBBBGBBB |   CGBBBGC   |             |             ',
                'BBBB BBB BBBB| C         C |  C       C  |  C  C C  C  |   CC   CC   |  C       C  |  CCCBBBCCC  |  BBBBBBBBB  |CBBBBGHGBBBBC|CBHHHHHHHHHBC|C IB     BI C|C IB     BI C|CBHHHHHHHHHBC|CBBBBGHGBBBBC|  BBBBBBBBB  |  CCCBBBCCC  |             ',
                'BBB       BBB|             |             |             |  C  C C  C  |     CCC     |  CBBBBBBBC  | CBBBBHBBBBC |BBBJJGHGJJBBB|BBHJ     JHBB|BBBJ     JBBB|BBBJ     JBBB|BBHJ     JHBB|BBBJJGHGJJBBB| CBBBBHBBBBC |  CBBBBBBBC  |     CCC     ',
                ' C         C |             |             |             |  C       C  |    C   C    |  CBEEEEEBC  | GBBKKHKKBBG |BGBJ     JBGB|EGH       HGE|F           F|F           F|EGH       HGE|BGBJ     JBGB| GBBKKHKKBBG |  CBEEEEEBC  |    C   C    ',
                'BBB       BBB|             |             |  C       C  |   C     C   |   C     C   |  BBEGGGEBB  | BBBKKHKKBBB |BBGG     GGBB|EGH       HGE|F           F|F           F|EGH       HGE|BBGG     GGBB| BBBKKHKKBBB |  BBEGGGEBB  |   C     C   ',
                'BBB       BBB| C         C | C         C |             |             |   C     C   |  BBEGGGEBB  | BBHHHHHHHBB |BBHH  H  HHBB|EGH   H   HGE|F     H     F|F     H     F|EGH   H   HGE|BBHH  H  HHBB| BBHHHHHHHBB |  BBEGGGEBB  |   C     C   ',
                'BBB       BBB|             |             |  C       C  |   C     C   |   C     C   |  BBEGGGEBB  | BBBKKHKKBBB |BBGG     GGBB|EGH       HGE|F           F|F           F|EGH       HGE|BBGG     GGBB| BBBKKHKKBBB |  BBEGGGEBB  |   C     C   ',
                ' C         C |             |             |             |  C       C  |    C   C    |  CBEEEEEBC  | GBBKKHKKBBG |BGBJ     JBGB|EGH       HGE|F           F|F           F|EGH       HGE|BGBJ     JBGB| GBBKKHKKBBG |  CBEEEEEBC  |    C   C    ',
                'BBB       BBB|             |             |             |  C  C C  C  |     CCC     |  CBBBBBBBC  | CBBBBHBBBBC |BBBJJGHGJJBBB|BBHJ     JHBB|BBBJ     JBBB|BBBJ     JBBB|BBHJ     JHBB|BBBJJGHGJJBBB| CBBBBHBBBBC |  CBBBBBBBC  |     CCC     ',
                'BBBB BBB BBBB| C         C |  C       C  |  C  C C  C  |   CC   CC   |  C       C  |  CCCBBBCCC  |  BBBBBBBBB  |CBBBBGHGBBBBC|CBHHHHHHHHHBC|C IB  H  BI C|C IB  H  BI C|CBHHHHHHHHHBC|CBBBBGHGBBBBC|  BBBBBBBBB  |  CCCBBBCCC  |             ',
                'BBBBCBBBCBBBB|  C   C   C  |      C      |             |             |             |             |   CGBBBGC   | BBBGBBBGBBB | BBBGGGGGBBB |   B     B   |   B     B   | BBBGGGGGBBB | BBBGBBBGBBB |   CGBBBGC   |             |             ',
                ' BBB BBB BBB |             |             |             |             |             |             |     BBB     |  CBBB@BBBC  |  CBEEEEEBC  |  CBFFFFFBC  |  CBFFFFFBC  |  CBEEEEEBC  |  CBBBBBBBC  |             |             |             ',
            ])
                .whereDict({
                    B: P.anyOf([
                        P.kjsBlock('tectonic_defiance_casing'),
                        P.ability(PA.itemIn, { max: 20, view: 1 }),
                        P.ability(PA.itemOut, { max: 20, view: 1 }),
                        P.ability(PA.fluidIn, { max: 20, view: 1 }),
                        P.ability(PA.fluidOut, { max: 20, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    ' ': P.any(),
                    C: P.gtBlock('melastrium_mox_frame'),
                    D: P.coreBlock('threading_controller'),
                    E: P.kjsBlock('draco_assembly_grating'),
                    F: P.kjsBlock('draco_resilient_fusion_glass'),
                    G: P.kjsBlock('nyanium_engine_intake_casing'),
                    H: P.kjsBlock('nyanium_pipe_casing'),
                    I: P.threadingBlocks(),
                    J: P.coreBlock('auxiliary_boosted_fusion_casing_mk2'),
                    K: P.coreBlock('advanced_fusion_coil'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/tectonic_defiance_casing',
            'gtceu:block/machines/centrifuge'
        );
});
