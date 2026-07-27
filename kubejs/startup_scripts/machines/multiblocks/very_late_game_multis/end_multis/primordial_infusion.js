GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('primordial_infusion', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([
            Text.translate('block.gtceu.draco_infusion.tooltip.3'),
            Text.translate('block.gtceu.draco_infusion.tooltip.4'),
            Text.translate('block.gtceu.draco_infusion.tooltip.5'),
        ])
        .machine((holder) => new $StarTDraconicInfusionMachine(holder))
        .recipeType('draco_infusion')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, $StarTRecipeModifiers.THROUGHPUT_BOOSTING])
        .appearanceBlock(() => Block.getBlock('kubejs:nyanium_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '               |               |               |               |               |               |               |               |               |               |               |               |               |               |               |     TTTTT     |               |               |               |               |               ',
                '     NFFFN     |     NNONN     |      NNN      |               |               |               |               |               |               |               |               |               |               |               |       V       |   TT     TT   |               |               |               |               |               ',
                '    NNHHHNN    |    NNNHNNN    |     VVHVV     |       V       |       V       |       V       |               |               |               |               |               |               |               |     TTTTT     |               |  T         T  |               |               |               |               |               ',
                '   MMAAHAAMM   |   MM     MM   |   MM     MM   |               |               |     TTTTT     |       V       |       V       |               |               |               |               |       V       |   TT     TT   |               | T           T |               |               |               |               |               ',
                '  NMAAAHAAAMN  |  NM       MN  |   M       M   |               |               |    T     T    |               |     TTTTT     |       V       |       V       |               |               |       V       |   T       T   |               | T           T |       U       |      U U      |       U       |               |               ',
                ' NNAAPAAAPAANN | NN         NN |  V         V  |               |               |   T  GGG  T   |               |    T     T    |               |     TTTTT     |       V       |       V       |               |  T         T  |               |T     U U     T|     U   U     |     0   0     |     U   U     |      U U      |               ',
                ' FHAAAAAAAAAHF | NN         NN | NV         VN |               |               |   T GGGGG T   |               |    T GGG T    |               |     T   T     |               |      TTT      |               |  T         T  |       U       |T    U   U    T|      V V      |    U     U    |      V V      |     U   U     |       U       ',
                ' FHHHAAAAAHHHF | 0H    N    H0 | NH    N    HN |  V    0    V  |  V         V  |  VT GGGGG TV  |   V       V   |   VT GGG TV   |    V     V    |    VT G TV    |     V   V     |     VT TV     |   VV     VV   |  T    G    T  | V    U U    V |T      N      T|    U     U    |       C       |    U     U    |       I       |      U U      ',
                ' FHAAAAAAAAAHF | NN         NN | NV         VN |               |               |   T GGGGG T   |               |    T GGG T    |               |     T   T     |               |      TTT      |               |  T         T  |       U       |T    U   U    T|      V V      |    U     U    |      V V      |     U   U     |       U       ',
                ' NNAAPAAAPAANN | NN         NN |  V         V  |               |               |   T  GGG  T   |               |    T     T    |               |     TTTTT     |       V       |       V       |               |  T         T  |               |T     U U     T|     U   U     |     0   0     |     U   U     |      U U      |               ',
                '  NMAAAHAAAMN  |  NM       MN  |   M       M   |               |               |    T     T    |               |     TTTTT     |       V       |       V       |               |               |       V       |   T       T   |               | T           T |       U       |      U U      |       U       |               |               ',
                '   MMAAHAAMM   |   MM     MM   |   MM     MM   |               |               |     TTTTT     |       V       |       V       |               |               |               |               |       V       |   TT     TT   |               | T           T |               |               |               |               |               ',
                '    NNHHHNN    |    NNNHNNN    |     VVHVV     |       V       |       V       |       V       |               |               |               |               |               |               |               |     TTTTT     |               |  T         T  |               |               |               |               |               ',
                '     NFFFN     |     NN@NN     |      NNN      |               |               |               |               |               |               |               |               |               |               |               |       V       |   TT     TT   |               |               |               |               |               ',
                '               |               |               |               |               |               |               |               |               |               |               |               |               |               |               |     TTTTT     |               |               |               |               |               ',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    N: P.anyOf([
                        P.kjsBlock('nyanium_machine_casing'),
                        P.ability(PA.euIn, { exact: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    M: P.kjsBlock('aberration_casing'),
                    A: P.kjsBlock('draco_assembly_grating'),
                    H: P.kjsBlock('draco_ware_casing'),
                    F: P.kjsBlock('nyanium_firebox_casing'),
                    V: P.gtBlock('draco_abyssal_frame'),
                    P: P.kjsBlock('runic_pathway_casing'),
                    G: P.kjsBlock('draco_resilient_fusion_glass'),
                    T: P.kjsBlock('abyssal_alloy_coil_block'),
                    U: P.kjsBlock('melodium_casing'),
                    C: P.kjsBlock('core_casing'),
                    O: P.ability(PA.itemOut),
                    I: P.ability(PA.fluidIn),
                    0: P.ability(PA.itemIn),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/nyanium/casing', 'kubejs:block/multiblock/draco_infusion');
});
