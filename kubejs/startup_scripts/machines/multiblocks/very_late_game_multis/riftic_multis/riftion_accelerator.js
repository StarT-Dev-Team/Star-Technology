GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('riftion_accelerator')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(1, 12, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('riftion_accelerator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $OpticalComputationMachine(holder))
        .recipeType('riftion_accelerator')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:primordial_ware_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '                     B       B|                              |                              |                              |                              |                              |                     B       B',
                '                              |                     B       B|                         C    |                        CCC   |                         C    |                     B       B|                              ',
                '                              |                         C    |          D      D   D EE EE D|        FCDCF    DCGCDEE   EED|          D      D   D EE EE D|                         C    |                              ',
                '   B                          |                        CCC   |        FFDFF    DCGCDEE   EED|      CCHHHHHIIIIHHHHHIIIJIIIK|        FFDFF    DCGCDEE   EED|                        CCC   |   B                          ',
                '                              |    B                    C    |     EFF  D  FEE D   D EE EE D|     EHHFCDCFHHE DCGCDEE   EED|     EFF  D  FFE D   D EE EE D|    B                    C    |                              ',
                '                              |                     B       B|    EEE       EEE        C    |    ELEC     CELE       CCC   |    EEE       EEE        C    |                     B       B|                              ',
                '                     B       B|      B                       |    FE         EF             |   CHE         EHC            |    FE         EF             |      B                       |                     B       B',
                '       B                      |                              |    F           F             |   CHC         CHC            |    F           F             |                              |       B                      ',
                '                              |                              |   F             F            |  FHF           FHF           |   F             F            |                              |                              ',
                '                              |                              |   F             F            |  CHC           CHC           |   F             F            |                              |                              ',
                '                              |                              |  DDD           DDD           |  DHD           DHD           |  DDD           DDD           |                              |                              ',
                '                              |                              |   F             F            |  CHC           CHC           |   F             F            |                              |                              ',
                '                              |                              |   F             F            |  FHF           FHF           |   F             F            |                              |                              ',
                '             B                |                              |    F           F             |   IHC         CHC            |    F           F             |                              |             B                ',
                '                              |              B               |    FE         EF             |   IHE         EHC            |    FE         EF             |              B               |                              ',
                '                              |                              |    EEE       EEE             |   IELEC     CELE             |    EEE       EEE             |                              |                              ',
                '                              |                B             |     EFF  D  FFE              |   I EHHFCDCFHHE              |     EFF  D  FFE              |                B             |                              ',
                '                 B            |                              |  DDD   FFDFF                 |  DHD CCHHHHHCC               |  DDD   FFDFF                 |                              |                 B            ',
                '                              |                              |   C      D                   |  CHC   FC@CF                 |   C      D                   |                              |                              ',
                '                              |                              |   G                          |  GHG                         |   G                          |                              |                              ',
                '                              |                              |   C                          |  CHC                         |   C                          |                              |                              ',
                'B     B                       | B   B                        |  DDD                         |  DND                         |  DDD                         | B   B                        |B     B                       ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.gtBlock('hvga_steel_frame'),
                    C: P.kjsBlock('draco_resilient_fusion_glass'),
                    D: P.anyOf([
                        P.kjsBlock('primordial_ware_casing'),
                        P.gtBlock('ulv_input_bus', { max: 1, prev: 1 }),
                        P.ability(PA.compIn, { exact: 1, prev: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                    ]),
                    E: P.kjsBlock('aberration_casing'),
                    F: P.block('start_core:auxiliary_boosted_fusion_casing_mk2'),
                    G: P.kjsBlock('nyanium_engine_intake_casing'),
                    H: P.kjsBlock('prismalic_reflector_casing'),
                    I: P.kjsBlock('nyanium_pipe_casing'),
                    J: P.gtBlock('neutronium_block'),
                    K: P.ability(PA.itemOut),
                    L: P.kjsBlock('core_casing'),
                    '@': P.controller(definition),
                    N: P.ability(PA.fluidIn),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/riftic_multis/primordial_ware_casing',
            'kubejs:block/multiblock/riftion/accelerator'
        );
});
