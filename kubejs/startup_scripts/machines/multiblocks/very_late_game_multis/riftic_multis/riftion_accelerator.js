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
    // prettier-ignore
    event
        .create('riftion_accelerator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $OpticalComputationMachine(holder))
        .recipeType('riftion_accelerator')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:primordial_ware_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('                     B       B', '                              ', '                              ', '                              ', '                              ', '                              ', '                     B       B')
            .aisle('                              ', '                     B       B', '                         C    ', '                        CCC   ', '                         C    ', '                     B       B', '                              ') 
            .aisle('                              ', '                         C    ', '          D      D   D EE EE D', '        FCDCF    DCGCDEE   EED', '          D      D   D EE EE D', '                         C    ', '                              ') 
            .aisle('   B                          ', '                        CCC   ', '        FFDFF    DCGCDEE   EED', '      CCHHHHHIIIIHHHHHIIIJIIIK', '        FFDFF    DCGCDEE   EED', '                        CCC   ', '   B                          ') 
            .aisle('                              ', '    B                    C    ', '     EFF  D  FEE D   D EE EE D', '     EHHFCDCFHHE DCGCDEE   EED', '     EFF  D  FFE D   D EE EE D', '    B                    C    ', '                              ') 
            .aisle('                              ', '                     B       B', '    EEE       EEE        C    ', '    ELEC     CELE       CCC   ', '    EEE       EEE        C    ', '                     B       B', '                              ') 
            .aisle('                     B       B', '      B                       ', '    FE         EF             ', '   CHE         EHC            ', '    FE         EF             ', '      B                       ', '                     B       B') 
            .aisle('       B                      ', '                              ', '    F           F             ', '   CHC         CHC            ', '    F           F             ', '                              ', '       B                      ') 
            .aisle('                              ', '                              ', '   F             F            ', '  FHF           FHF           ', '   F             F            ', '                              ', '                              ') 
            .aisle('                              ', '                              ', '   F             F            ', '  CHC           CHC           ', '   F             F            ', '                              ', '                              ') 
            .aisle('                              ', '                              ', '  DDD           DDD           ', '  DHD           DHD           ', '  DDD           DDD           ', '                              ', '                              ') 
            .aisle('                              ', '                              ', '   F             F            ', '  CHC           CHC           ', '   F             F            ', '                              ', '                              ') 
            .aisle('                              ', '                              ', '   F             F            ', '  FHF           FHF           ', '   F             F            ', '                              ', '                              ') 
            .aisle('             B                ', '                              ', '    F           F             ', '   IHC         CHC            ', '    F           F             ', '                              ', '             B                ') 
            .aisle('                              ', '              B               ', '    FE         EF             ', '   IHE         EHC            ', '    FE         EF             ', '              B               ', '                              ') 
            .aisle('                              ', '                              ', '    EEE       EEE             ', '   IELEC     CELE             ', '    EEE       EEE             ', '                              ', '                              ') 
            .aisle('                              ', '                B             ', '     EFF  D  FFE              ', '   I EHHFCDCFHHE              ', '     EFF  D  FFE              ', '                B             ', '                              ') 
            .aisle('                 B            ', '                              ', '  DDD   FFDFF                 ', '  DHD CCHHHHHCC               ', '  DDD   FFDFF                 ', '                              ', '                 B            ') 
            .aisle('                              ', '                              ', '   C      D                   ', '  CHC   FC@CF                 ', '   C      D                   ', '                              ', '                              ') 
            .aisle('                              ', '                              ', '   G                          ', '  GHG                         ', '   G                          ', '                              ', '                              ') 
            .aisle('                              ', '                              ', '   C                          ', '  CHC                         ', '   C                          ', '                              ', '                              ') 
            .aisle('B     B                       ', ' B   B                        ', '  DDD                         ', '  DND                         ', '  DDD                         ', ' B   B                        ', 'B     B                       ') 
                .where(' ', Predicates.any())
                .where('B', Predicates.blocks('gtceu:hvga_steel_frame'))
                .where('C', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
                .where(
                    'D',
                    Predicates.blocks('kubejs:primordial_ware_casing')
                        .or(Predicates.blocks('gtceu:ulv_input_bus').setMaxGlobalLimited(1).setPreviewCount(0))
                        .or(
                            Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION)
                                .setExactLimit(1)
                                .setPreviewCount(0)
                        )
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                )
                .where('E', Predicates.blocks('kubejs:aberration_casing'))
                .where('F', Predicates.blocks('start_core:auxiliary_boosted_fusion_casing_mk2'))
                .where('G', Predicates.blocks('kubejs:nyanium_engine_intake_casing'))
                .where('H', Predicates.blocks('kubejs:prismalic_reflector_casing'))
                .where('I', Predicates.blocks('kubejs:nyanium_pipe_casing'))
                .where('J', Predicates.blocks('gtceu:neutronium_block'))
                .where('K', Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .where('L', Predicates.blocks('kubejs:core_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('N', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/riftic_multis/primordial_ware_casing',
            'kubejs:block/multiblock/riftion/accelerator'
        );
});
