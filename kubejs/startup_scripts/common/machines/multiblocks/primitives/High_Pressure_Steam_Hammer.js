GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('high_pressure_steam_hammer', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('forge_hammer')
        .machine((holder) => new $StartSteamMulti(holder))
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .recipeModifier($StarTRecipeModifiers.START_STEAM_PARALLEL)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAA', 'AAA', 'AAA')
            .aisle('AAA', 'A#A', 'AAA')
            .aisle('AAA', 'A@A', 'AAA')
            .where('A', Predicates.blocks('kubejs:high_steam_machine_casing')
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2)))
            .where('#', Predicates.blocks('minecraft:air'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/basic/high_steam_machine_casing',
            'gtceu:block/machines/forge_hammer');

});