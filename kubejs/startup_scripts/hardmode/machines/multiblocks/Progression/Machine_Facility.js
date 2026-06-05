// packmode: hard

GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('simple_machine_facility')
        .category('HM')
        .setEUIO('in')
        .setMaxIOSize(7, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

    event
        .create('advanced_machine_facility')
        .category('HM')
        .setEUIO('in')
        .setMaxIOSize(12, 1, 3, 0)
        .setHasResearchSlot(true)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('machine_facility', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['simple_machine_facility', 'advanced_machine_facility'])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('#BBBBB#', 'BCCCCCB', 'BCACACB', 'BCCCCCB', '#BBBBB#')
                .aisle('BCCCCCB', 'A#####A', 'A##E##A', 'A#####A', 'BCCCCCB')
                .aisle('BCCCCCB', 'A##E##A', 'FFFFFFF', 'A##E##A', 'BCACACB')
                .aisle('BCCCCCB', 'A#####A', 'A##E##A', 'A#####A', 'BCCCCCB')
                .aisle('#BBBBB#', 'BCCCCCB', 'BCA@ACB', 'BCCCCCB', '#BBBBB#')
                .where('A', Predicates.blocks('gtceu:tempered_glass'))
                .where('B', Predicates.blocks('gtceu:cast_iron_frame'))
                .where('#', Predicates.any())
                .where(
                    'C',
                    Predicates.blocks('gtceu:solid_machine_casing')
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(3))
                        .or(Predicates.abilities(PartAbility.DATA_ACCESS).setPreviewCount(0).setMaxGlobalLimited(1))
                )
                .where('E', Predicates.blocks('gtceu:steel_gearbox'))
                .where('F', Predicates.blocks('gtceu:steel_pipe_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/machines/assembler');
});
