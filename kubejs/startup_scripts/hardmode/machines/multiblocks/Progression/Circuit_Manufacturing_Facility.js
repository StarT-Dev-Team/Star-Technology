GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('circuit_facility')
        .category('HM')
        .setEUIO('in')
        .setMaxIOSize(12, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('circuit_manufacturing_facility', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('circuit_facility')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('ABCCCBA', 'ABDDDBA', 'ABDDDBA', '#ABBBA#', '##AAA##')
                .aisle('#CDDDC#', '#DEEED#', '#DFGFD#', '#AHHHA#', '###A###')
                .aisle('#CDDDC#', '#DEIED#', '#DG GD#', '#AHHHA#', '###A###')
                .aisle('#CDDDC#', '#DEIED#', '#DF FD#', '#AHHHA#', '###A###')
                .aisle('#CDDDC#', '#DEIED#', '#DG GD#', '#AHHHA#', '###A###')
                .aisle('#CDDDC#', '#DEEED#', '#DFGFD#', '#AHHHA#', '###A###')
                .aisle('ABCCCBA', 'ABD@DBA', 'ABDDDBA', '#ABBBA#', '##AAA##')
                .where('A', Predicates.blocks('gtceu:steel_frame'))
                .where('B', Predicates.blocks('gtceu:steel_machine_casing'))
                .where('C', Predicates.blocks('gtceu:steel_firebox_casing'))
                .where(
                    'D',
                    Predicates.blocks('gtceu:solid_machine_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(6))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(3))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                )
                .where('#', Predicates.any())
                .where('E', Predicates.blocks('gtceu:steel_gearbox'))
                .where('F', Predicates.blocks('create:mechanical_arm'))
                .where('G', Predicates.blocks('gtceu:steel_pipe_casing'))
                .where('H', Predicates.blocks('gtceu:tempered_glass'))
                .where('I', Predicates.blocks('create:depot'))
                .where(' ', Predicates.blocks('minecraft:air'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/machines/circuit_assembler'
        );
});
