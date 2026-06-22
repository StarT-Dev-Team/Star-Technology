GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('high_pressure_steam_hammer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('forge_hammer')
        .machine((holder) => new $StartSteamMulti(holder))
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .recipeModifier($StarTRecipeModifiers.START_STEAM_PARALLEL)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('AAA', 'AAA', 'AAA')
                .aisle('AAA', 'A#A', 'AAA')
                .aisle('AAA', 'A@A', 'AAA')
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('high_steam_machine_casing'),
                        P.ability(PA.steamIn, { max: 2, prev: 1 }),
                        P.ability(PA.steam, { exact: 1 }),
                        P.ability(PA.steamOut, { max: 2, prev: 1 }),
                    ]),
                    '#': P.blocks('minecraft:air'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/basic/high_steam_machine_casing',
            'gtceu:block/machines/forge_hammer'
        );
});
