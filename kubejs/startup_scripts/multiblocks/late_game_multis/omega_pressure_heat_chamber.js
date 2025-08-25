GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('omega_pressure_heat_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('pressure_heat_chamber')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, $StarTRecipeModifiers.ABSOLUTE_PARALLEL, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GCYMBlocks.CASING_STRESS_PROOF)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AABBBAA', '###B###', '##BBB##', '##BBB##', '##BBB##', '###B###', 'AABBBAA') 
            .aisle('ABABABA', '#C###C#', '#C###C#', '#C#D#C#', '#C###C#', '#C###C#', 'AAABAAA') 
            .aisle('BABABAB', '###E###', 'B##D##B', 'B#DCD#B', 'B##D##B', '###E###', 'BABFBAB') 
            .aisle('BBABABB', 'B#EDE#B', 'B#DCD#B', 'BDCCCDB', 'B#DCD#B', 'B#EDE#B', 'BBFFFBB') 
            .aisle('BABABAB', '###E###', 'B##D##B', 'B#DCD#B', 'B##D##B', '###E###', 'BABFBAB') 
            .aisle('ABABABA', '#C###C#', '#C###C#', '#C#D#C#', '#C###C#', '#C###C#', 'AAABABA') 
            .aisle('AABBBAA', '###B###', '##BBB##', '##B@B##', '##BBB##', '###B###', 'AABBBAA') 
            .where('A', Predicates.blocks('kubejs:extreme_temperature_smelting_casing'))
            .where('B', Predicates.blocks(GCYMBlocks.CASING_STRESS_PROOF.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities($StarTPartAbility.ABSOLUTE_PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('#', Predicates.any())
            .where('C', Predicates.blocks('gtceu:stellarium_frame'))
            .where('D', Predicates.blocks('kubejs:signalum_casing'))
            .where('E', Predicates.blocks('start_core:enriched_naquadah_firebox_casing'))
            .where('F', Predicates.blocks('start_core:enriched_naquadah_engine_intake_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer('gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/implosion_compressor', false);

});