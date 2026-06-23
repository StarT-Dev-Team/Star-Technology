GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('superior_particulate_isolation_nexus', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['sifter', 'centrifuge', 'thermal_centrifuge'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:tectonic_defiance_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' BBB BBB BBB ', '             ', '             ', '             ', '             ', '             ', '             ', '     BBB     ', '  CBBBDBBBC  ', '  CBEEEEEBC  ', '  CBFFFFFBC  ', '  CBFFFFFBC  ', '  CBEEEEEBC  ', '  CBBBBBBBC  ', '             ', '             ', '             ')
            .aisle('BBBBCBBBCBBBB', '  C   C   C  ', '      C      ', '             ', '             ', '             ', '             ', '   CGBBBGC   ', ' BBBGBBBGBBB ', ' BBBGGGGGBBB ', '   B     B   ', '   B     B   ', ' BBBGGGGGBBB ', ' BBBGBBBGBBB ', '   CGBBBGC   ', '             ', '             ')
            .aisle('BBBB BBB BBBB', ' C         C ', '  C       C  ', '  C  C C  C  ', '   CC   CC   ', '  C       C  ', '  CCCBBBCCC  ', '  BBBBBBBBB  ', 'CBBBBGHGBBBBC', 'CBHHHHHHHHHBC', 'C IB     BI C', 'C IB     BI C', 'CBHHHHHHHHHBC', 'CBBBBGHGBBBBC', '  BBBBBBBBB  ', '  CCCBBBCCC  ', '             ')
            .aisle('BBB       BBB', '             ', '             ', '             ', '  C  C C  C  ', '     CCC     ', '  CBBBBBBBC  ', ' CBBBBHBBBBC ', 'BBBJJGHGJJBBB', 'BBHJ     JHBB', 'BBBJ     JBBB', 'BBBJ     JBBB', 'BBHJ     JHBB', 'BBBJJGHGJJBBB', ' CBBBBHBBBBC ', '  CBBBBBBBC  ', '     CCC     ')
            .aisle(' C         C ', '             ', '             ', '             ', '  C       C  ', '    C   C    ', '  CBEEEEEBC  ', ' GBBKKHKKBBG ', 'BGBJ     JBGB', 'EGH       HGE', 'F           F', 'F           F', 'EGH       HGE', 'BGBJ     JBGB', ' GBBKKHKKBBG ', '  CBEEEEEBC  ', '    C   C    ')
            .aisle('BBB       BBB', '             ', '             ', '  C       C  ', '   C     C   ', '   C     C   ', '  BBEGGGEBB  ', ' BBBKKHKKBBB ', 'BBGG     GGBB', 'EGH       HGE', 'F           F', 'F           F', 'EGH       HGE', 'BBGG     GGBB', ' BBBKKHKKBBB ', '  BBEGGGEBB  ', '   C     C   ')
            .aisle('BBB       BBB', ' C         C ', ' C         C ', '             ', '             ', '   C     C   ', '  BBEGGGEBB  ', ' BBHHHHHHHBB ', 'BBHH  H  HHBB', 'EGH   H   HGE', 'F     H     F', 'F     H     F', 'EGH   H   HGE', 'BBHH  H  HHBB', ' BBHHHHHHHBB ', '  BBEGGGEBB  ', '   C     C   ')
            .aisle('BBB       BBB', '             ', '             ', '  C       C  ', '   C     C   ', '   C     C   ', '  BBEGGGEBB  ', ' BBBKKHKKBBB ', 'BBGG     GGBB', 'EGH       HGE', 'F           F', 'F           F', 'EGH       HGE', 'BBGG     GGBB', ' BBBKKHKKBBB ', '  BBEGGGEBB  ', '   C     C   ')
            .aisle(' C         C ', '             ', '             ', '             ', '  C       C  ', '    C   C    ', '  CBEEEEEBC  ', ' GBBKKHKKBBG ', 'BGBJ     JBGB', 'EGH       HGE', 'F           F', 'F           F', 'EGH       HGE', 'BGBJ     JBGB', ' GBBKKHKKBBG ', '  CBEEEEEBC  ', '    C   C    ')
            .aisle('BBB       BBB', '             ', '             ', '             ', '  C  C C  C  ', '     CCC     ', '  CBBBBBBBC  ', ' CBBBBHBBBBC ', 'BBBJJGHGJJBBB', 'BBHJ     JHBB', 'BBBJ     JBBB', 'BBBJ     JBBB', 'BBHJ     JHBB', 'BBBJJGHGJJBBB', ' CBBBBHBBBBC ', '  CBBBBBBBC  ', '     CCC     ')
            .aisle('BBBB BBB BBBB', ' C         C ', '  C       C  ', '  C  C C  C  ', '   CC   CC   ', '  C       C  ', '  CCCBBBCCC  ', '  BBBBBBBBB  ', 'CBBBBGHGBBBBC', 'CBHHHHHHHHHBC', 'C IB  H  BI C', 'C IB  H  BI C', 'CBHHHHHHHHHBC', 'CBBBBGHGBBBBC', '  BBBBBBBBB  ', '  CCCBBBCCC  ', '             ')
            .aisle('BBBBCBBBCBBBB', '  C   C   C  ', '      C      ', '             ', '             ', '             ', '             ', '   CGBBBGC   ', ' BBBGBBBGBBB ', ' BBBGGGGGBBB ', '   B     B   ', '   B     B   ', ' BBBGGGGGBBB ', ' BBBGBBBGBBB ', '   CGBBBGC   ', '             ', '             ')
            .aisle(' BBB BBB BBB ', '             ', '             ', '             ', '             ', '             ', '             ', '     BBB     ', '  CBBB@BBBC  ', '  CBEEEEEBC  ', '  CBFFFFFBC  ', '  CBFFFFFBC  ', '  CBEEEEEBC  ', '  CBBBBBBBC  ', '             ', '             ', '             ')
            .where('B', P.kjsBlock('tectonic_defiance_casing')
                        .or(P.ability(PA.itemIn).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.itemOut).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.fluidIn).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.fluidOut).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.parallelHatch, {max:1}))
                        .or(P.ability(PA.euIn).setMaxGlobalLimited(2))
                        .or(P.ability(PA.maintenance, {exact:1}))
                )
                .where(' ', P.any())
                .where('C', P.gtBlock('melastrium_mox_frame'))
                .where('D', P.block('start_core:threading_controller'))
                .where('E', P.kjsBlock('draco_assembly_grating'))
                .where('F', P.kjsBlock('draco_resilient_fusion_glass'))
                .where('G', P.kjsBlock('nyanium_engine_intake_casing'))
                .where('H', P.kjsBlock('nyanium_pipe_casing'))
                .where('I', $StarTThreadingStatBlocks.threadingStatBlocks())
                .where('J', P.block('start_core:auxiliary_boosted_fusion_casing_mk2'))
                .where('K', P.block('start_core:advanced_fusion_coil'))
                .where('@', P.controller(definition))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/tectonic_defiance_casing',
            'gtceu:block/machines/centrifuge'
        );
});
