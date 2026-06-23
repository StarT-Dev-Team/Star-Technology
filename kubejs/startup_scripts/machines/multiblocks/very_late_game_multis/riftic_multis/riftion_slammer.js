GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('riftion_slammer')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR)
        .setMaxTooltips(4);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('riftion_slammer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('riftion_slammer')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
            GTRecipeModifiers.CONSUME_EU_TO_START,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:nyanium_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '                BBBBB                |               B     B               |              B B   B B              |              B  CCC  B              |              B  CDC  B              |              B  CCC  B              |              B B   B B              |               B     B               |                BBBBB                ',
                '                                     |               B     B               |                                     |                                     |                  E                  |                                     |                                     |               B     B               |                                     ',
                '                                     |               B     B               |                 FFF                 |                F   F                |                F E F                |                F   F                |                 FFF                 |               B     B               |                                     ',
                '                                     |               B     B               |                                     |                                     |                  E                  |                                     |                                     |               B     B               |                                     ',
                '                BBBBB                |               B     B               |              B B   B B              |              B  CCC  B              |              B  CEC  B              |              B  CCC  B              |              B B   B B              |               B     B               |                BBBBB                ',
                '                                     |                  B                  |                                     |                  G                  |               B GEG B               |                  G                  |                                     |                  B                  |                                     ',
                '                                     |                  B                  |B   B   B   B           B   B   B   B|B   B   B   B     G     B   B   B   B|B   B   B   B  B GEG B  B   B   B   B|B   B   B   B     G     B   B   B   B|B   B   B   B           B   B   B   B|                  B                  |                                     ',
                '                                     |BBBBB   BBBBB   HHHHH   BBBBB   BBBBB|               HHIIIHH               |               HIIGIIH               |     BBB     BBHIGEGIHBB     BBB     |               HIIGIIH               |               HHIIIHH               |BBBBB   BBBBB   HHHHH   BBBBB   BBBBB|                                     ',
                'B   B   B   B           B   B   B   B|               HHIIIHH               |B   B   B   B  H     H  B   B   B   B|  F       F    I     I    F       F  |  F       F    I  E  I    F       F  |  F       F    I     I    F       F  |B   B   B   B  H     H  B   B   B   B|               HHIIIHH               |B   B   B   B           B   B   B   B',
                'B   B   B   B           B   B   B   B|               HIIGIIH               |  F       F    I     I    F       F  |C   C   C   C  I     I  C   C   C   C|C   CIJIC   CGGG     GGGC   CIJIC   C|C   C   C   C  I     I  C   C   C   C|  F       F    I     I    F       F  |               HIIGIIH               |B   B   B   B           B   B   B   B',
                'B   B   B   B           B   B   B   B|     BBB     BBHIGGGIHBB     BBB     |  F       F    I     I    F       F  |C   CIJIC   CGGG     GGGC   CIJIC   C|KEEELLLLLEEELLLLL M LLLLLEEELLLLLEEEK|C   CIJIC   CGGG     GGGC   CIJIC   C|  F       F    I     I    F       F  |     BBB     BBHIGGGIH       BBB     |B   B   B   B           B   B   B   B',
                'B   B   B   B           B   B   B   B|               HIIGIIH               |  F       F    I     I    F       F  |C   C   C   C  I     I  C   C   C   C|C   CIJIC   CGGG     GGGC   CIJIC   C|C   C   C   C  I     I  C   C   C   C|  F       F    I     I    F       F  |               HIIGIIH               |B   B   B   B           B   B   B   B',
                'B   B   B   B           B   B   B   B|               HHIIIHH               |B   B   B   B  H     H  B   B   B   B|  F       F    I     I    F       F  |  F       F    I     I    F       F  |  F       F    I     I    F       F  |B   B   B   B  H     H  B   B   B   B|               HHIIIHH               |B   B   B   B           B   B   B   B',
                '                                     |BBBBB   BBBBB   HHHHH   BBBBB   BBBBB|               HHIIIHH               |               HIIGIIH               |     BBB     BBHIG@GIHBB     BBB     |               HIIGIIH               |               HHIIIHH               |BBBBB   BBBBB   HHHHH   BBBBB   BBBBB|                                     ',
                '                                     |                                     |B   B   B   B           B   B   B   B|B   B   B   B           B   B   B   B|B   B   B   B           B   B   B   B|B   B   B   B           B   B   B   B|B   B   B   B           B   B   B   B|                                     |                                     ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.gtBlock('hvga_steel_frame'),
                    C: P.kjsBlock('draco_ware_casing'),
                    D: P.ability(PA.itemOut),
                    E: P.kjsBlock('nyanium_pipe_casing'),
                    F: P.block('start_core:auxiliary_fusion_coil_mk2'),
                    G: P.anyOf([P.kjsBlock('nyanium_machine_casing'), P.ability(PA.euIn, { max: 2, prev: 1 })]),
                    H: P.kjsBlock('aberration_casing'),
                    I: P.kjsBlock('draco_resilient_fusion_glass'),
                    J: P.kjsBlock('nyanium_engine_intake_casing'),
                    K: P.gtBlock('ulv_input_bus'),
                    L: P.kjsBlock('prismalic_reflector_casing'),
                    M: P.kjsBlock('core_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/nyanium/casing', 'gtceu:block/multiblock/hpca');
});
