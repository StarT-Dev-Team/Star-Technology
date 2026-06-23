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
                .where(' ', P.any())
                .where(
                    'B',
                    P.kjsBlock('aberration_casing')
                        .or(P.ability(PA.euIn).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(P.ability(PA.maintenance, {exact:1}))
                )
                .where('C', P.gtBlock('hvga_steel_frame'))
                .where('D', P.gtBlock('ulv_input_bus'))
                .where('E', P.kjsBlock('draco_assembly_grating'))
                .where('F', P.kjsBlock('nyanium_engine_intake_casing'))
                .where('G', P.kjsBlock('aurouric_polarization_cell'))
                .where('H', P.kjsBlock('prismalic_reflector_casing'))
                .where('I', P.kjsBlock('draco_ware_casing'))
                .where('J', P.kjsBlock('draco_resilient_fusion_glass'))
                .where(
                    'K',
                    P.ability(PA.fluidIn_1X)
                        .or(P.ability(PA.fluidIn_4X))
                        .or(P.ability(PA.fluidIn_9X))
                        .or(P.gtBlock('me_stocking_input_hatch'))
                        .or(P.gtBlock('me_input_hatch'))
                )
                .where('L', P.kjsBlock('nyanium_pipe_casing'))
                .where('M', P.kjsBlock('abyssal_alloy_coil_block'))
                .where('N', P.kjsBlock('core_casing'))
                .where('O', P.ability(PA.fluidOut))
                .where('@', P.controller(definition))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/riftic_multis/aberration_casing', 'gtceu:block/multiblock/hpca');
});
