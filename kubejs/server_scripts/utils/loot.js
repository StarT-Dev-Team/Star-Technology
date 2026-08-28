// requires: lootjs
LootJS.modifiers((event) => {
    const isModLoaded = global.withModsLoaded;

    isModLoaded('sgjourney', () => {
        const abydosTempleTomb = [
            { loot: 'minecraft:gold_block', chance: 0.1 },
            { loot: 'minecraft:enchanted_golden_apple', chance: 0.05 },
            { loot: 'start_core:bacteria_dormant', chance: 0.15 },
            { loot: 'kubejs:runic_tablet_1', chance: 0.08 },
            { loot: 'kubejs:runic_tablet_2', chance: 0.08 },
            { loot: 'kubejs:runic_tablet_3', chance: 0.08 },
            { loot: 'kubejs:runic_tablet_4', chance: 0.08 },
            { loot: 'kubejs:runic_tablet_5', chance: 0.08 },
            { loot: 'kubejs:runic_tablet_6', chance: 0.08 },
        ];

        abydosTempleTomb.forEach((templeLoot) => {
            event
                .addLootTableModifier('sgjourney:chests/desert_pyramid_loot_room')
                .randomChance(templeLoot.chance)
                .addLoot(templeLoot.loot);
        });

        const abydosTempleSpawnerRoom = [
            { loot: 'sgjourney:naquadah_helmet', chance: 0.1 },
            { loot: 'sgjourney:naquadah_chestplate', chance: 0.1 },
            { loot: 'sgjourney:naquadah_leggings', chance: 0.1 },
            { loot: 'sgjourney:naquadah_boots', chance: 0.1 },
            { loot: 'sgjourney:naquadah_sword', chance: 0.1 },
            { loot: 'sgjourney:naquadah_pickaxe', chance: 0.1 },
            { loot: 'sgjourney:naquadah_axe', chance: 0.1 },
            { loot: 'sgjourney:naquadah_shovel', chance: 0.1 },
            { loot: 'sgjourney:naquadah_alloy', chance: 0.1 },
            { loot: '2x gtceu:naquadah_alloy_ingot', chance: 0.05 },
            { loot: '3x gtceu:naquadah_alloy_ingot', chance: 0.02 },
        ];

        abydosTempleSpawnerRoom.forEach((templeLoot) => {
            event
                .addLootTableModifier('sgjourney:chests/desert_pyramid_challenge_room')
                .randomChance(templeLoot.chance)
                .addLoot(templeLoot.loot);
        });
    });

    [
        'minecraft:chests/bastion_bridge',
        'minecraft:chests/bastion_hoglin_stable',
        'minecraft:chests/bastion_other',
        'minecraft:chests/bastion_treasure',
        'minecraft:chests/nether_bridge',
    ].forEach((loottable) => {
        event.addLootTableModifier(loottable).randomChance(0.12).addLoot('kubejs:nether_talisman');
    });

    event.addLootTableModifier('minecraft:chests/end_city_treasure').randomChance(0.12).addLoot('kubejs:end_talisman');
});
