GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('supreme_chemistry')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxTooltips(4)
        .setMaxIOSize(6, 6, 6, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
        .setLayered();
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('true_synthesis_array', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $LayeredWorkableElectricMultiblockMachine(holder))
        .recipeTypes(['ordered_chemistry', 'supreme_chemistry'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:cattomolymer_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AABBBAA            ', 'CAADAAC            ', 'C     C            ', 'C     C            ', 'C     C            ', 'C     C            ', 'C     C            ', 'AAAAAAA            ') 
            .aisle('AAAAAAA            ', 'A  E  A            ', ' AAFAA             ', ' GGGGG             ', ' HIFIH             ', ' GGGGG             ', ' AAFAA             ', 'AAABAAA            ') 
            .aisle('BAAAAAB            ', 'A  E  A            ', ' A   A             ', ' G E G             ', ' I   I             ', ' G E G             ', ' A   A             ', 'AAFFFAA            ') 
            .aisle('BAAFAAB            ', 'AEEEEEA            ', ' F E F             ', ' GEEEG             ', ' F E F             ', ' GEEEG             ', ' F E F             ', 'ABFFFBA            ') 
            .aisle('BAAAAAB            ', 'A  E  A            ', ' A   A             ', ' G E G             ', ' I   I             ', ' G E G             ', ' A   A             ', 'AAFFFAA            ') 
            .aisle('AAAAAAA            ', 'A  E  A            ', ' A   A             ', ' GGGGG             ', ' HIFIH             ', ' GGGGG             ', ' AAFAA             ', 'AAABAAA            ') 
            .aisle('AAAFAAAABBBAAABBBAA', 'CAEEEEAAAAAACAAAAAC', 'CAAAAACC   CC     C', 'C     C     C     C', 'C     C     C     C', 'C     C     C     C', 'C     CC   CC     C', 'AAAAAAAAAAAAAAAAAAA') 
            .aisle('AAAAAAAAAAAAAAAAAAA', 'A  E  E  E  A  E  A', 'CAAFAAAAAFAAAAAFAA ', '        C C  GGGGG ', '         C   HIFIH ', '        C C  GGGGG ', 'C            AAFAA ', 'A     A     AAABAAA') 
            .aisle('BAAAAAAAAAAAAAAAAAB', 'A  E  E  E  E  E  A', ' AABAAAAAEAAA    A ', ' C           G E G ', '             I   I ', ' C           G E G ', '             A   A ', 'A     A     AAFFFAA') 
            .aisle('BAAFAAFAAFAAFAAFAAB', 'AEEEEEEEEEEEEEEEEEJ', ' FEBEFAFBBBFA  E F ', '             GEEEG ', ' C           F E F ', '             GEEEG ', '             F E F ', 'A     A     ABFFFBA') 
            .aisle('BAAAAAAAAAAAAAAAAAB', 'A  E  E  E  E EE  A', ' AABAAAAAEAAA E  A ', ' C           G E G ', '             I   I ', ' C           G E G ', '             A   A ', 'A     A     AAFFFAA') 
            .aisle('AAAAAAAAAAAAAAAAAAA', 'A  E  E  E  A  E  A', 'CAAFAAAAAFAAAAAFAA ', '        C C  GGGGG ', '         C   HIFIH ', '        C C  GGGGG ', 'C            AAFAA ', 'A     A     AAABAAA') 
            .aisle('AAAFAAAABBBAAABBBAA', 'CAEEEEAAA@AACAAAAAC', 'CAAAAACC   CC     C', 'C     C     C     C', 'C     C     C     C', 'C     C     C     C', 'C     CC   CC     C', 'AAAAAAAAAAAAAAAAAAA') 
            .aisle('AAAAAAA            ', 'A  E  A            ', ' A   A             ', ' GGGGG             ', ' HIFIH             ', ' GGGGG             ', ' AAFAA             ', 'AAABAAA            ') 
            .aisle('BAAAAAB            ', 'A  E  A            ', ' A   A             ', ' G E G             ', ' I   I             ', ' G E G             ', ' A   A             ', 'AAFFFAA            ') 
            .aisle('BAAFAAB            ', 'AEEEEEA            ', ' F E F             ', ' GEEEG             ', ' F E F             ', ' GEEEG             ', ' F E F             ', 'ABFFFBA            ') 
            .aisle('BAAAAAB            ', 'A  E  A            ', ' A   A             ', ' G E G             ', ' I   I             ', ' G E G             ', ' A   A             ', 'AAFFFAA            ') 
            .aisle('AAAAAAA            ', 'A  E  A            ', ' AAFAA             ', ' GGGGG             ', ' HIFIH             ', ' GGGGG             ', ' AAFAA             ', 'AAABAAA            ') 
            .aisle('AABBBAA            ', 'CAADAAC            ', 'C     C            ', 'C     C            ', 'C     C            ', 'C     C            ', 'C     C            ', 'AAAAAAA            ') 
            .where('A', P.kjsBlock('cattomolymer_casing')
                        .or(P.ability(PA.maintenance, {exact:1}))
                        .or(P.ability(PA.euIn).setMaxGlobalLimited(2))
                        .or(P.ability(PA.parallelHatch, {max:1}))
                )
                .where('B', P.kjsBlock('nyanium_heat_escape_casing'))
                .where(' ', P.any())
                .where('C', P.gtBlock('draconyallium_frame'))
                .where(
                    'D',
                    P.ability(PA.fluidIn).or(P.ability(PA.itemIn))
                )
                .where('E', P.kjsBlock('nyanium_pipe_casing'))
                .where('F', P.kjsBlock('nyanium_engine_intake_casing'))
                .where('G', P.kjsBlock('rhenotax_coil'))
                .where('H', P.kjsBlock('nyanium_machine_casing'))
                .where('I', P.kjsBlock('nyanium_firebox_casing'))
                .where(
                    'J',
                    P.ability(PA.itemOut).or(P.ability(PA.fluidOut))
                )
                .where('@', P.controller(definition))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/end_multis/cattomolymer_casing',
            'gtceu:block/multiblock/large_chemical_reactor'
        );
});
