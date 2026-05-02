GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('pressure_heat_chamber')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('super_pressure_heat_chamber', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('pressure_heat_chamber')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   BBBBBBB   ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '   BBBBBBB   ', '     CCC     ')
            .aisle('  BBCCCCCBB  ', '   DEEEEED   ', '   D EEE D   ', '      E      ', '   D EEE D   ', '   DEEFEED   ', '   D EEE D   ', '      E      ', '   D EEE D   ', '   DEEEEED   ', '  BBEEEEEBB  ', '     EEE     ')
            .aisle(' BBCCCCCCCBB ', '   CC   CC   ', '             ', '  D       D  ', '      C      ', '   EECGCEE   ', '      C      ', '  D       D  ', '             ', '   CCCCCCC   ', ' BBEEEEEEEBB ', '      E      ')
            .aisle('BBCCCCCCCCCBB', ' DC   D   CD ', ' D    H    D ', '     HHH     ', ' D   HHH   D ', ' DEE HGH EED ', ' D   HHH   D ', '     HHH     ', ' D    H    D ', ' DCCCCCCCCCD ', 'BBEEECCCEEEBB', '     CCC     ')
            .aisle('BCCCCCCCCCCCB', ' EC       CE ', '     HHH     ', '    H   H    ', '    H   H    ', ' EE H G H EE ', '    H   H    ', '    H   H    ', '     HHH     ', ' ECCC   CCCE ', 'BEEEC   CEEEB', '    CCICC    ')
            .aisle('BCCCCCCCCCCCB', ' E   HHH   E ', ' E  HHGHH  E ', '    H   H    ', ' E H     H E ', ' ECH  G  HCE ', ' E H     H E ', '    H   H    ', ' E  HHGHH  E ', ' ECC HHH CCE ', 'BEEC CCC CEEB', 'CE CCCICCC EC')
            .aisle('BCCCCCCCCCCCB', ' E D HHH D E ', ' E DHGGGHD E ', ' E HH G HH E ', ' ECH  G  HCE ', ' FGGGGGGGGGF ', ' ECH  G  HCE ', ' E HH G HH E ', ' E  HGGGH  E ', ' ECC HGH CCE ', 'BEEC CGC CEEB', 'CEECIIIIICEEC')
            .aisle('BCCCCCCCCCCCB', ' E   HHH   E ', ' E  HHGHH  E ', '    H   H    ', ' E H     H E ', ' ECH  G  HCE ', ' E H     H E ', '    H   H    ', ' E  HHGHH  E ', ' ECC HHH CCE ', 'BEEC CCC CEEB', 'CE CCCICCC EC')
            .aisle('BCCCCCCCCCCCB', ' EC       CE ', '     HHH     ', '    H   H    ', '    H   H    ', ' EE H G H EE ', '    H   H    ', '    H   H    ', '     HHH     ', ' ECCC   CCCE ', 'BEEEC   CEEEB', '    CCICC    ')
            .aisle('BBCCCCCCCCCBB', ' DC   D   CD ', ' D    H    D ', '     HHH     ', ' D   HHH   D ', ' DEE HGH EED ', ' D   HHH   D ', '     HHH     ', ' D    H    D ', ' DCCCCCCCCCD ', 'BBEEECCCEEEBB', '     CCC     ')
            .aisle(' BBCCCCCCCBB ', '   CC    C   ', '             ', '  D       D  ', '      C      ', '   EECGCEE   ', '      C      ', '  D       D  ', '             ', '   CCCCCCC   ', ' BBEEEEEEEBB ', '      E      ')
            .aisle('  BBCCCCCBB  ', '   DEEEEED   ', '   D EEE D   ', '      E      ', '   D EEE D   ', '   DEE@EED   ', '   D EEE D   ', '      E      ', '   D EEE D   ', '   DEEEEED   ', '  BBEEEEEBB  ', '     EEE     ')
            .aisle('   BBBBBBB   ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '   BBBBBBB   ', '     CCC     ')
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
            .where('C', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
            .where('D', Predicates.blocks('gtceu:hsla_steel_frame'))
            .where('E', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('F', Predicates.blocks('kubejs:enriched_naquadah_heat_escape_casing'))
            .where('G', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
            .where('H', Predicates.blocks('kubejs:signalum_casing'))
            .where('I', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/implosion_compressor');

});