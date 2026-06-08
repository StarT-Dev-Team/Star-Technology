GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('kaleidoscopic_fractalizer')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(6, 0, 1, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('kaleidoscopic_fractalizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('kaleidoscopic_fractalizer')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:aberration_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('             BBBBB                      ', '           BBB C BBB                    ', '           B C C C B                    ', '           BCDCDCDCB                    ', '           B C C C B                    ', '           BBB C BBB                    ', '             BBBBB                      ') 
            .aisle('              BBB                       ', '             EFGFE                      ', '            EGEGEGE                     ', '           BGHGHGHGB                    ', '            EGEGEGE                     ', '             EFGFE                      ', '              BBB                       ') 
            .aisle('               B                        ', '              EIE                       ', '             IIIII                      ', '            BIHHHIB                     ', '             IIIII                      ', '              EIE                       ', '               B                        ') 
            .aisle('               B                        ', '              EIE                       ', '             IIIII                      ', '            BIIHIIB                     ', '             IIIII                      ', '              EIE                       ', '               B                        ') 
            .aisle('                                        ', '               B                        ', '              III                       ', '             BIHIB                      ', '              III                       ', '               B                        ', '                                        ') 
            .aisle('                                        ', '               B                        ', '              III                       ', '             BIHIB                      ', '              III                       ', '               B                        ', '                                        ') 
            .aisle('                                        ', '                                        ', 'B     B B      J      B B     B       B ', 'BB   BB BB    JHJ    BB BB   BBB     BBB', 'B     B B      J      B B     B       B ', '                                        ', '                                        ') 
            .aisle('                                        ', 'B     BCB             BCB     B       B ', 'BE   EB BE     B     EB BE   EBEJ   JEBE', ' FBBBF   FBBB BHB  BBF   FBBBF JJ   JJF ', 'BE   EB BE     B     EB BE   EBEJ   JEBE', 'B     BCB             BCB     B       B ', '                                        ') 
            .aisle('B     B B             B B     B       B ', 'BE   EB BE     B     EB BE   EBEJ   JEBE', ' GIIIG   GII  E E  IIG   GIIIG   I I  G ', 'CGIIIGJJJGIIJB   BJIIGJJJGIIIG   IFI  GC', ' GIIIG   GII  E E  IIG   GIIIG   I I  G ', 'BE   EB BE     B     EB BE   EBEJ   JEBE', 'B     B B             B B     B       B ') 
            .aisle('BB   BB BB           BB BB   BBB     BBB', ' FBBBF   FBB  BJB  BBF   FBBBF JJ   JJF ', 'CGIIIGJJJGIIJB   BJIIGJJJGIIIG   IFI  GC', 'KLLLLMMMMMLLLL N LLLLMMMMMLLLLLL     LLO', 'CGIIIGJJJGIIJB   BJIIGJJJGIIIG   IFI  GC', ' FBBBF   FBB  BJB  BBF   FBBBF JJ   JJF ', 'BB   BB BB           BB BB   BBB     BBB') 
            .aisle('B     B B             B B     B       B ', 'BE   EB BE     B     EB BE   EBEJ   JEBE', ' GIIIG   GII  E E  IIG   GIIIG   I I  G ', 'CGIIIGJJJGIIJB   BJIIGJJJGIIIG   IFI  GC', ' GIIIG   GII  E E  IIG   GIIIG   I I  G ', 'BE   EB BE     B     EB BE   EBEJ   JEBE', 'B     B B             B B     B       B ') 
            .aisle('                                        ', 'B     BCB             BCB     B       B ', 'BE   EB BE     B     EB BE   EBEJ   JEBE', ' FBBBF   FBB  BHB  BBF   FB@BF JJ   JJF ', 'BE   EB BE     B     EB BE   EBEJ   JEBE', 'B     BCB             BCB     B       B ', '                                        ') 
            .aisle('                                        ', '                                        ', 'B     B B      J      B B     B       B ', 'BB   BB BB    JHJ    BB BB   BBB     BBB', 'B     B B      J      B B     B       B ', '                                        ', '                                        ') 
            .aisle('                                        ', '               B                        ', '              III                       ', '             BIHIB                      ', '              III                       ', '               B                        ', '                                        ') 
            .aisle('                                        ', '               B                        ', '              III                       ', '             BIHIB                      ', '              III                       ', '               B                        ', '                                        ') 
            .aisle('               B                        ', '              EIE                       ', '             IIIII                      ', '            BIIHIIB                     ', '             IIIII                      ', '              EIE                       ', '               B                        ') 
            .aisle('               B                        ', '              EIE                       ', '             IIIII                      ', '            BIHHHIB                     ', '             IIIII                      ', '              EIE                       ', '               B                        ') 
            .aisle('              BBB                       ', '             EFGFE                      ', '            EGEGEGE                     ', '           BGHGHGHGB                    ', '            EGEGEGE                     ', '             EFGFE                      ', '              BBB                       ') 
            .aisle('             BBBBB                      ', '           BBB C BBB                    ', '           B C C C B                    ', '           BCDCDCDCB                    ', '           B C C C B                    ', '           BBB C BBB                    ', '             BBBBB                      ') 
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('kubejs:aberration_casing')
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('gtceu:hvga_steel_frame'))
                .where('D', Predicates.blocks('gtceu:ulv_input_bus'))
                .where('E', Predicates.blocks('kubejs:draco_assembly_grating'))
                .where('F', Predicates.blocks('kubejs:nyanium_engine_intake_casing'))
                .where('G', Predicates.blocks('kubejs:aurouric_polarization_cell'))
                .where('H', Predicates.blocks('kubejs:prismalic_reflector_casing'))
                .where('I', Predicates.blocks('kubejs:draco_ware_casing'))
                .where('J', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
                .where(
                    'K',
                    Predicates.abilities(PartAbility.IMPORT_FLUIDS_1X)
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_4X))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_9X))
                        .or(Predicates.blocks('gtceu:me_stocking_input_hatch'))
                        .or(Predicates.blocks('gtceu:me_input_hatch'))
                )
                .where('L', Predicates.blocks('kubejs:nyanium_pipe_casing'))
                .where('M', Predicates.blocks('kubejs:abyssal_alloy_coil_block'))
                .where('N', Predicates.blocks('kubejs:core_casing'))
                .where('O', Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/riftic_multis/aberration_casing', 'gtceu:block/multiblock/hpca');
});
