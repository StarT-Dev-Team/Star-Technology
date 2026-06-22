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
                .whereDict({
                    A: P.gtBlock('bronze_machine_casing'),
                    B: P.anyOf([
                        P.gtBlock('steam_machine_casing'),
                        P.ability(PA.steamIn, { max: 2, prev: 1 }),
                        P.ability(PA.steam, { exact: 1 }),
                        P.ability(PA.steamOut, { max: 2, prev: 1 }),
                    ]),
                    '#': P.any(),
                    C: P.block('farmersdelight:stove'),
                    D: P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_bronze_plated_bricks',
            'gtceu:block/multiblock/primitive_blast_furnace'
        );
});
