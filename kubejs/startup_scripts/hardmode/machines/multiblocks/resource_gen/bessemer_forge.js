// packmode: hard

GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('bessemer_forge')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(2, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MACERATE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FIRE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('bessemer_forgery', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bessemer_forge')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('AA###AA', '#######', '#######', '#######', '#######', '#######', '#######', '#######')
                .aisle('ABCCCBA', '#D###D#', '#D###D#', '#D###D#', '#DEEED#', '#DEEED#', '##EEE##', '##EEE##')
                .aisle('#CAAAC#', '###D###', '###D###', '##EEE##', '#ED DE#', '#ED DE#', '#ED DE#', '#E   E#')
                .aisle('#CAHAC#', '##DHD##', '##DHD##', '##EEE##', '#E   E#', '#E   E#', '#E   E#', '#E   E#')
                .aisle('#CAAAC#', '###D###', '###D###', '##EEE##', '#ED DE#', '#ED DE#', '#ED DE#', '#E   E#')
                .aisle('ABCCCBA', '#D###D#', '#D###D#', '#D###D#', '#DEEED#', '#DE@ED#', '##EEE##', '##EEE##')
                .aisle('AA###AA', '#######', '#######', '#######', '#######', '#######', '#######', '#######')
                .where('A', Predicates.blocks('kubejs:high_steam_machine_casing'))
                .where(' ', Predicates.blocks('minecraft:air'))
                .where('#', Predicates.any())
                .where('B', Predicates.blocks('gtceu:steel_machine_casing'))
                .where(
                    'C',
                    Predicates.blocks('gtceu:steel_firebox_casing').or(
                        Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1)
                    )
                )
                .where('D', Predicates.blocks('gtceu:steel_frame'))
                .where(
                    'E',
                    Predicates.blocks('gtceu:solid_machine_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(3))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                )
                .where('H', Predicates.blocks('gtceu:steel_pipe_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/machines/compressor');
});
