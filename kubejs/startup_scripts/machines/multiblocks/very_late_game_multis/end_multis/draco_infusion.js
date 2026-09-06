GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('draco_infusion')
        .category('extremely_advanced')
        .setEUIO('in')
        .setMaxIOSize(7, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('draco_infusion', 'multiblock')
        .machine((holder) => new $StarTDraconicInfusionMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('draco_infusion')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
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
                        P.kjsBlock('enriched_naquadah_machine_casing'),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    M: P.gtBlock('atomic_casing'),
                    A: P.gtBlock('assembly_line_grating'),
                    H: P.gtBlock('high_power_casing'),
                    F: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    V: P.gtBlock('void_frame'),
                    P: P.kjsBlock('runic_pathway_casing'),
                    G: P.kjsBlock('reinforced_fusion_glass'),
                    T: P.gtBlock('trinium_coil_block'),
                    U: P.kjsBlock('shellite_casing'),
                    C: P.kjsBlock('core_casing'),
                    O: P.ability(PA.itemOut),
                    I: P.ability(PA.fluidIn),
                    0: P.gtBlock('ulv_input_bus'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'kubejs:block/multiblock/draco_infusion');
});
