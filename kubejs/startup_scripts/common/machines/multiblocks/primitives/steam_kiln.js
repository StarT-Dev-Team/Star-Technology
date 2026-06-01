GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event.create('steam_kiln').category('primitive').setMaxIOSize(2, 1, 0, 0).setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('gtceu:steam_kiln', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('steam_kiln')
        .machine((holder) => new $SteamMulti(holder, 4))
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('BBB', 'BBB', 'BBB', '#B#', '#A#')
                .aisle('BBB', 'BCB', 'B#B', 'B#B', 'A#A')
                .aisle('BBB', 'BDB', 'BBB', '#B#', '#A#')
                .where('A', Predicates.blocks('gtceu:bronze_machine_casing'))
                .where(
                    'B',
                    Predicates.blocks('gtceu:steam_machine_casing')
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
                .where('C', Predicates.blocks('farmersdelight:stove'))
                .where('D', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_bronze_plated_bricks',
            'gtceu:block/multiblock/primitive_blast_furnace'
        );
});
