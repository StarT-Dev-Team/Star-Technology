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
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('                BBBBB                ', '               B     B               ', '              B B   B B              ', '              B  CCC  B              ', '              B  CDC  B              ', '              B  CCC  B              ', '              B B   B B              ', '               B     B               ', '                BBBBB                ') 
            .aisle('                                     ', '               B     B               ', '                                     ', '                                     ', '                  E                  ', '                                     ', '                                     ', '               B     B               ', '                                     ') 
            .aisle('                                     ', '               B     B               ', '                 FFF                 ', '                F   F                ', '                F E F                ', '                F   F                ', '                 FFF                 ', '               B     B               ', '                                     ') 
            .aisle('                                     ', '               B     B               ', '                                     ', '                                     ', '                  E                  ', '                                     ', '                                     ', '               B     B               ', '                                     ') 
            .aisle('                BBBBB                ', '               B     B               ', '              B B   B B              ', '              B  CCC  B              ', '              B  CEC  B              ', '              B  CCC  B              ', '              B B   B B              ', '               B     B               ', '                BBBBB                ') 
            .aisle('                                     ', '                  B                  ', '                                     ', '                  G                  ', '               B GEG B               ', '                  G                  ', '                                     ', '                  B                  ', '                                     ') 
            .aisle('                                     ', '                  B                  ', 'B   B   B   B           B   B   B   B', 'B   B   B   B     G     B   B   B   B', 'B   B   B   B  B GEG B  B   B   B   B', 'B   B   B   B     G     B   B   B   B', 'B   B   B   B           B   B   B   B', '                  B                  ', '                                     ') 
            .aisle('                                     ', 'BBBBB   BBBBB   HHHHH   BBBBB   BBBBB', '               HHIIIHH               ', '               HIIGIIH               ', '     BBB     BBHIGEGIHBB     BBB     ', '               HIIGIIH               ', '               HHIIIHH               ', 'BBBBB   BBBBB   HHHHH   BBBBB   BBBBB', '                                     ') 
            .aisle('B   B   B   B           B   B   B   B', '               HHIIIHH               ', 'B   B   B   B  H     H  B   B   B   B', '  F       F    I     I    F       F  ', '  F       F    I  E  I    F       F  ', '  F       F    I     I    F       F  ', 'B   B   B   B  H     H  B   B   B   B', '               HHIIIHH               ', 'B   B   B   B           B   B   B   B') 
            .aisle('B   B   B   B           B   B   B   B', '               HIIGIIH               ', '  F       F    I     I    F       F  ', 'C   C   C   C  I     I  C   C   C   C', 'C   CIJIC   CGGG     GGGC   CIJIC   C', 'C   C   C   C  I     I  C   C   C   C', '  F       F    I     I    F       F  ', '               HIIGIIH               ', 'B   B   B   B           B   B   B   B') 
            .aisle('B   B   B   B           B   B   B   B', '     BBB     BBHIGGGIHBB     BBB     ', '  F       F    I     I    F       F  ', 'C   CIJIC   CGGG     GGGC   CIJIC   C', 'KEEELLLLLEEELLLLL M LLLLLEEELLLLLEEEK', 'C   CIJIC   CGGG     GGGC   CIJIC   C', '  F       F    I     I    F       F  ', '     BBB     BBHIGGGIH       BBB     ', 'B   B   B   B           B   B   B   B') 
            .aisle('B   B   B   B           B   B   B   B', '               HIIGIIH               ', '  F       F    I     I    F       F  ', 'C   C   C   C  I     I  C   C   C   C', 'C   CIJIC   CGGG     GGGC   CIJIC   C', 'C   C   C   C  I     I  C   C   C   C', '  F       F    I     I    F       F  ', '               HIIGIIH               ', 'B   B   B   B           B   B   B   B') 
            .aisle('B   B   B   B           B   B   B   B', '               HHIIIHH               ', 'B   B   B   B  H     H  B   B   B   B', '  F       F    I     I    F       F  ', '  F       F    I     I    F       F  ', '  F       F    I     I    F       F  ', 'B   B   B   B  H     H  B   B   B   B', '               HHIIIHH               ', 'B   B   B   B           B   B   B   B') 
            .aisle('                                     ', 'BBBBB   BBBBB   HHHHH   BBBBB   BBBBB', '               HHIIIHH               ', '               HIIGIIH               ', '     BBB     BBHIG@GIHBB     BBB     ', '               HIIGIIH               ', '               HHIIIHH               ', 'BBBBB   BBBBB   HHHHH   BBBBB   BBBBB', '                                     ') 
            .aisle('                                     ', '                                     ', 'B   B   B   B           B   B   B   B', 'B   B   B   B           B   B   B   B', 'B   B   B   B           B   B   B   B', 'B   B   B   B           B   B   B   B', 'B   B   B   B           B   B   B   B', '                                     ', '                                     ') 
                .where(' ', Predicates.any())
                .where('B', Predicates.blocks('gtceu:hvga_steel_frame'))
                .where('C', Predicates.blocks('kubejs:draco_ware_casing'))
                .where('D', Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .where('E', Predicates.blocks('kubejs:nyanium_pipe_casing'))
                .where('F', Predicates.blocks('start_core:auxiliary_fusion_coil_mk2'))
                .where(
                    'G',
                    Predicates.blocks('kubejs:nyanium_machine_casing').or(
                        Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0)
                    )
                )
                .where('H', Predicates.blocks('kubejs:aberration_casing'))
                .where('I', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
                .where('J', Predicates.blocks('kubejs:nyanium_engine_intake_casing'))
                .where('K', Predicates.blocks('gtceu:ulv_input_bus'))
                .where('L', Predicates.blocks('kubejs:prismalic_reflector_casing'))
                .where('M', Predicates.blocks('kubejs:core_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/nyanium/casing', 'gtceu:block/multiblock/hpca');
});
