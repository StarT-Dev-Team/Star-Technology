GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('industrial_pump')
        .category('resource_gen')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('industrial_pump', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_pump')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('CCOCC', '  F  ', '  F  ')
                .aisle('CPPPC', 'F P F', 'FFIFF')
                .aisle('CC@CC', '  F  ', '  F  ')
                .where('C', Predicates.blocks('gtceu:solid_machine_casing'))
                .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
                .where('F', Predicates.blocks('gtceu:steel_frame'))
                .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .where('O', Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/primitive_pump'
        );
});
