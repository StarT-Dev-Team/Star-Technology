GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('draco_infusion')
        .category('extremely_advanced')
        .setEUIO('in')
        .setMaxIOSize(7, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('draco_infusion', 'multiblock')
        .machine((holder) => new $StarTDraconicInfusionMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType('draco_infusion')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '     TTTTT     ', '               ', '               ', '               ', '               ', '               ')
            .aisle('     NFFFN     ', '     NNONN     ', '      NNN      ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '       V       ', '   TT     TT   ', '               ', '               ', '               ', '               ', '               ')
            .aisle('    NNHHHNN    ', '    NNNHNNN    ', '     VVHVV     ', '       V       ', '       V       ', '       V       ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '     TTTTT     ', '               ', '  T         T  ', '               ', '               ', '               ', '               ', '               ')
            .aisle('   MMAAHAAMM   ', '   MM     MM   ', '   MM     MM   ', '               ', '               ', '     TTTTT     ', '       V       ', '       V       ', '               ', '               ', '               ', '               ', '       V       ', '   TT     TT   ', '               ', ' T           T ', '               ', '               ', '               ', '               ', '               ')
            .aisle('  NMAAAHAAAMN  ', '  NM       MN  ', '   M       M   ', '               ', '               ', '    T     T    ', '               ', '     TTTTT     ', '       V       ', '       V       ', '               ', '               ', '       V       ', '   T       T   ', '               ', ' T           T ', '       U       ', '      U U      ', '       U       ', '               ', '               ')
            .aisle(' NNAAPAAAPAANN ', ' NN         NN ', '  V         V  ', '               ', '               ', '   T  GGG  T   ', '               ', '    T     T    ', '               ', '     TTTTT     ', '       V       ', '       V       ', '               ', '  T         T  ', '               ', 'T     U U     T', '     U   U     ', '     0   0     ', '     U   U     ', '      U U      ', '               ')
            .aisle(' FHAAAAAAAAAHF ', ' NN         NN ', ' NV         VN ', '               ', '               ', '   T GGGGG T   ', '               ', '    T GGG T    ', '               ', '     T   T     ', '               ', '      TTT      ', '               ', '  T         T  ', '       U       ', 'T    U   U    T', '      V V      ', '    U     U    ', '      V V      ', '     U   U     ', '       U       ')
            .aisle(' FHHHAAAAAHHHF ', ' 0H    N    H0 ', ' NH    N    HN ', '  V    0    V  ', '  V         V  ', '  VT GGGGG TV  ', '   V       V   ', '   VT GGG TV   ', '    V     V    ', '    VT G TV    ', '     V   V     ', '     VT TV     ', '   VV     VV   ', '  T    G    T  ', ' V    U U    V ', 'T      N      T', '    U     U    ', '       C       ', '    U     U    ', '       I       ', '      U U      ')
            .aisle(' FHAAAAAAAAAHF ', ' NN         NN ', ' NV         VN ', '               ', '               ', '   T GGGGG T   ', '               ', '    T GGG T    ', '               ', '     T   T     ', '               ', '      TTT      ', '               ', '  T         T  ', '       U       ', 'T    U   U    T', '      V V      ', '    U     U    ', '      V V      ', '     U   U     ', '       U       ')
            .aisle(' NNAAPAAAPAANN ', ' NN         NN ', '  V         V  ', '               ', '               ', '   T  GGG  T   ', '               ', '    T     T    ', '               ', '     TTTTT     ', '       V       ', '       V       ', '               ', '  T         T  ', '               ', 'T     U U     T', '     U   U     ', '     0   0     ', '     U   U     ', '      U U      ', '               ')
            .aisle('  NMAAAHAAAMN  ', '  NM       MN  ', '   M       M   ', '               ', '               ', '    T     T    ', '               ', '     TTTTT     ', '       V       ', '       V       ', '               ', '               ', '       V       ', '   T       T   ', '               ', ' T           T ', '       U       ', '      U U      ', '       U       ', '               ', '               ')
            .aisle('   MMAAHAAMM   ', '   MM     MM   ', '   MM     MM   ', '               ', '               ', '     TTTTT     ', '       V       ', '       V       ', '               ', '               ', '               ', '               ', '       V       ', '   TT     TT   ', '               ', ' T           T ', '               ', '               ', '               ', '               ', '               ')
            .aisle('    NNHHHNN    ', '    NNNHNNN    ', '     VVHVV     ', '       V       ', '       V       ', '       V       ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '     TTTTT     ', '               ', '  T         T  ', '               ', '               ', '               ', '               ', '               ')
            .aisle('     NFFFN     ', '     NN@NN     ', '      NNN      ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '       V       ', '   TT     TT   ', '               ', '               ', '               ', '               ', '               ')
            .aisle('               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '     TTTTT     ', '               ', '               ', '               ', '               ', '               ')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('N', Predicates.blocks('kubejs:enriched_naquadah_machine_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('M', Predicates.blocks('gtceu:atomic_casing'))
            .where('A', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('H', Predicates.blocks('gtceu:high_power_casing'))
            .where('F', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
            .where('V', Predicates.blocks('gtceu:void_frame'))
            .where('P', Predicates.blocks('kubejs:runic_pathway_casing'))
            .where('G', Predicates.blocks('kubejs:reinforced_fusion_glass'))
            .where('T', Predicates.blocks('gtceu:trinium_coil_block'))
            .where('U', Predicates.blocks('kubejs:shellite_casing'))
            .where('C', Predicates.blocks('kubejs:core_casing'))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where('I', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
            .where('0', Predicates.blocks('gtceu:ulv_input_bus'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingModel('kubejs:block/casings/naquadah/casing',
            'kubejs:block/multiblock/draco_infusion');

});