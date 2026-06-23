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
    event
        .create('kaleidoscopic_fractalizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('kaleidoscopic_fractalizer')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:aberration_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '             BBBBB                      |           BBB C BBB                    |           B C C C B                    |           BCDCDCDCB                    |           B C C C B                    |           BBB C BBB                    |             BBBBB                      ',
                '              BBB                       |             EFGFE                      |            EGEGEGE                     |           BGHGHGHGB                    |            EGEGEGE                     |             EFGFE                      |              BBB                       ',
                '               B                        |              EIE                       |             IIIII                      |            BIHHHIB                     |             IIIII                      |              EIE                       |               B                        ',
                '               B                        |              EIE                       |             IIIII                      |            BIIHIIB                     |             IIIII                      |              EIE                       |               B                        ',
                '                                        |               B                        |              III                       |             BIHIB                      |              III                       |               B                        |                                        ',
                '                                        |               B                        |              III                       |             BIHIB                      |              III                       |               B                        |                                        ',
                '                                        |                                        |B     B B      J      B B     B       B |BB   BB BB    JHJ    BB BB   BBB     BBB|B     B B      J      B B     B       B |                                        |                                        ',
                '                                        |B     BCB             BCB     B       B |BE   EB BE     B     EB BE   EBEJ   JEBE| FBBBF   FBBB BHB  BBF   FBBBF JJ   JJF |BE   EB BE     B     EB BE   EBEJ   JEBE|B     BCB             BCB     B       B |                                        ',
                'B     B B             B B     B       B |BE   EB BE     B     EB BE   EBEJ   JEBE| GIIIG   GII  E E  IIG   GIIIG   I I  G |CGIIIGJJJGIIJB   BJIIGJJJGIIIG   IFI  GC| GIIIG   GII  E E  IIG   GIIIG   I I  G |BE   EB BE     B     EB BE   EBEJ   JEBE|B     B B             B B     B       B ',
                'BB   BB BB           BB BB   BBB     BBB| FBBBF   FBB  BJB  BBF   FBBBF JJ   JJF |CGIIIGJJJGIIJB   BJIIGJJJGIIIG   IFI  GC|KLLLLMMMMMLLLL N LLLLMMMMMLLLLLL     LLO|CGIIIGJJJGIIJB   BJIIGJJJGIIIG   IFI  GC| FBBBF   FBB  BJB  BBF   FBBBF JJ   JJF |BB   BB BB           BB BB   BBB     BBB',
                'B     B B             B B     B       B |BE   EB BE     B     EB BE   EBEJ   JEBE| GIIIG   GII  E E  IIG   GIIIG   I I  G |CGIIIGJJJGIIJB   BJIIGJJJGIIIG   IFI  GC| GIIIG   GII  E E  IIG   GIIIG   I I  G |BE   EB BE     B     EB BE   EBEJ   JEBE|B     B B             B B     B       B ',
                '                                        |B     BCB             BCB     B       B |BE   EB BE     B     EB BE   EBEJ   JEBE| FBBBF   FBB  BHB  BBF   FB@BF JJ   JJF |BE   EB BE     B     EB BE   EBEJ   JEBE|B     BCB             BCB     B       B |                                        ',
                '                                        |                                        |B     B B      J      B B     B       B |BB   BB BB    JHJ    BB BB   BBB     BBB|B     B B      J      B B     B       B |                                        |                                        ',
                '                                        |               B                        |              III                       |             BIHIB                      |              III                       |               B                        |                                        ',
                '                                        |               B                        |              III                       |             BIHIB                      |              III                       |               B                        |                                        ',
                '               B                        |              EIE                       |             IIIII                      |            BIIHIIB                     |             IIIII                      |              EIE                       |               B                        ',
                '               B                        |              EIE                       |             IIIII                      |            BIHHHIB                     |             IIIII                      |              EIE                       |               B                        ',
                '              BBB                       |             EFGFE                      |            EGEGEGE                     |           BGHGHGHGB                    |            EGEGEGE                     |             EFGFE                      |              BBB                       ',
                '             BBBBB                      |           BBB C BBB                    |           B C C C B                    |           BCDCDCDCB                    |           B C C C B                    |           BBB C BBB                    |             BBBBB                      ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('aberration_casing'),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.gtBlock('hvga_steel_frame'),
                    D: P.gtBlock('ulv_input_bus'),
                    E: P.kjsBlock('draco_assembly_grating'),
                    F: P.kjsBlock('nyanium_engine_intake_casing'),
                    G: P.kjsBlock('aurouric_polarization_cell'),
                    H: P.kjsBlock('prismalic_reflector_casing'),
                    I: P.kjsBlock('draco_ware_casing'),
                    J: P.kjsBlock('draco_resilient_fusion_glass'),
                    K: P.anyOf([
                        P.abilityOr(PA.fluidIn_1X, PA.fluidIn_4X, PA.fluidIn_9X),
                        P.gtBlock('me_stocking_input_hatch'),
                        P.gtBlock('me_input_hatch'),
                    ]),
                    L: P.kjsBlock('nyanium_pipe_casing'),
                    M: P.kjsBlock('abyssal_alloy_coil_block'),
                    N: P.kjsBlock('core_casing'),
                    O: P.ability(PA.fluidOut),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/riftic_multis/aberration_casing', 'gtceu:block/multiblock/hpca');
});
