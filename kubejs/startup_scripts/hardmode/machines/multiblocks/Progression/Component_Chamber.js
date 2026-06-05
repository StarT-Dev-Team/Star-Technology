// packmode: hard

GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('component_chamber')
        .category('HM')
        .setEUIO('in')
        .setMaxIOSize(7, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('component_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('component_chamber')
        .appearanceBlock(GTBlocks.CASING_ALUMINIUM_FROSTPROOF)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('ABBBA', 'ABCBA', 'ABCBA', 'ABCBA', 'ABBBA')
                .aisle('BDDDB', 'B###B', 'B###B', 'B###B', 'BDDDB')
                .aisle('BDEDB', 'C###C', 'C#F#C', 'C###C', 'BDEDB')
                .aisle('BDDDB', 'B###B', 'B###B', 'B###B', 'BDDDB')
                .aisle('AB@BA', 'ABCBA', 'ABCBA', 'ABCBA', 'ABBBA')
                .where('A', Predicates.blocks('gtceu:steel_frame'))
                .where('B', Predicates.blocks('gtceu:heatproof_machine_casing'))
                .where('C', Predicates.blocks('gtceu:tempered_glass'))
                .where(
                    'D',
                    Predicates.blocks('gtceu:frostproof_machine_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(4).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(3).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('#', Predicates.any())
                .where('E', Predicates.blocks('gtceu:cupronickel_coil_block'))
                .where('F', Predicates.blocks('gtceu:steel_pipe_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_frost_proof', 'gtceu:block/machines/assembler');
});
