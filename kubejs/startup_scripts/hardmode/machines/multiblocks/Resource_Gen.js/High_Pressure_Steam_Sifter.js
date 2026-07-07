GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('primitive_sifter')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('high_pressure_steam_sifter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('primitive_sifter')
        .machine((holder) => new $StartSteamMulti(holder))
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .recipeModifier($StarTRecipeModifiers.START_STEAM_PARALLEL)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('ABBBA', 'ACCCA', 'ACCCA', '#AAA#')
                .aisle('BCCCB', 'CDDDC', 'C###C', 'A#A#A')
                .aisle('BCCCB', 'CDDDC', 'C###C', 'AAAAA')
                .aisle('BCCCB', 'CDDDC', 'C###C', 'A#A#A')
                .aisle('ABBBA', 'AC@CA', 'ACCCA', '#AAA#')
                .where('A', Predicates.blocks('gtceu:cast_iron_frame'))
                .where('B', Predicates.blocks('gtceu:steel_machine_casing'))
                .where(
                    'C',
                    Predicates.blocks('kubejs:high_steam_machine_casing')
                        .or(
                            Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS)
                                .setPreviewCount(1)
                                .setMaxGlobalLimited(2)
                        )
                        .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                        .or(
                            Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)
                                .setPreviewCount(1)
                                .setMaxGlobalLimited(2)
                        )
                )
                .where('#', Predicates.any())
                .where('D', Predicates.blocks('kubejs:meshblock'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/basic/high_steam_machine_casing', 'gtceu:block/machines/sifter');
});
