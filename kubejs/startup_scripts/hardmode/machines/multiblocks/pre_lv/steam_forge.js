// packmode: hard

// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
// 	event.create('gt_blasting')
// 		.category('primitive')
// 		.setMaxIOSize(1, 1, 0, 0)
// 		.setSound(GTSoundEntries.FURNACE)
// });

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('steam_forge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('electric_vanilla_blast_furnace')
        .machine((holder) => new $SteamMulti(holder, 4))
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('BBB', 'CCC', 'CCC', '#C#')
                .aisle('BAB', 'C C', 'C C', 'CCC')
                .aisle('BBB', 'C@C', 'CCC', '#C#')
                .where('A', Predicates.blocks('gtceu:steel_machine_casing'))
                .where(
                    'B',
                    Predicates.blocks('gtceu:steel_firebox_casing').or(
                        Predicates.abilities(PartAbility.STEAM).setExactLimit(1)
                    )
                )
                .where(
                    'C',
                    Predicates.blocks('kubejs:high_steam_machine_casing')
                        .or(
                            Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS)
                                .setPreviewCount(1)
                                .setMaxGlobalLimited(2)
                        )
                        .or(
                            Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)
                                .setPreviewCount(1)
                                .setMaxGlobalLimited(2)
                        )
                )
                .where(' ', Predicates.blocks('minecraft:air'))
                .where('#', Predicates.any())
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/basic/high_steam_machine_casing', 'gtceu:block/machines/blasting');
});
