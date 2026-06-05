// packmode: hard

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:dead_bush')
        .removeLoot(Ingredient.all)
        .addLoot('minecraft:stick')
        .limitCount([1, 2]);
    event
        .addBlockLootModifier('minecraft:dead_bush')
        .matchMainHand(Item.of('gtceu:flisnt_knife'))
        .removeLoot(Ingredient.all)
        .addLoot('farmersdelight:straw')
        .limitCount([2, 3]);
    event
        .addBlockLootModifier('minecraft:campfire')
        .removeLoot(Ingredient.all)
        .addLoot('gtceu:ash_dust')
        .limitCount([2, 3]);

    ['oak', 'spruce', 'birch', 'dark_oak', 'jungle', 'acacia'].forEach((tree) => {
        event
            .addBlockLootModifier(`minecraft:${tree}_leaves`)
            .matchMainHand(Item.of('exnihilosequentia:wooden_crook'))
            .addLoot(
                LootEntry.of(`minecraft:${tree}_sapling`).when((c) => c.randomChance(0.15)),
                tree === 'jungle' && LootEntry.of('minecraft:cocoa_beans').when((c) => c.randomChance(0.01))
            );
        event
            .addBlockLootModifier(`minecraft:${tree}_leaves`)
            .matchMainHand(Item.of('gtceu:flisnt_scythe'))
            .addLoot(
                LootEntry.of(`farmersdelight:straw`).when((c) => c.randomChance(0.1)),
                LootEntry.of(`kubejs:plant_fibers`).when((c) => c.randomChance(0.05))
            );
        event
            .addBlockLootModifier(`minecraft:${tree}_leaves`)
            .matchMainHand(Item.of('exnihilosequentia:iron_crook'))
            .addLoot(
                LootEntry.of(`minecraft:${tree}_sapling`).when((c) => c.randomChance(0.2)),
                tree === 'jungle' && LootEntry.of('minecraft:cocoa_beans').when((c) => c.randomChance(0.02))
            );
    });
});
