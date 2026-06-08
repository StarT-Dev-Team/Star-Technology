ServerEvents.recipes((event) => {
    const id = global.id;

    [
        { stone: 'andesite', energy: 60 },
        { stone: 'basalt', energy: 240 },
        { stone: 'blackstone', energy: 7 },
        { stone: 'calcite', energy: 7 },
        { stone: 'cobblestone', energy: 60 },
        { stone: 'deepslate', energy: 960 },
        { stone: 'diorite', energy: 60 },
        { stone: 'dripstone_block', energy: 7 },
        { stone: 'granite', energy: 60 },
        { stone: 'obsidian', energy: 240 },
        { stone: 'stone', energy: 60 },
        { stone: 'tuff', energy: 7 },
    ].forEach((type) => {
        event.recipes.gtceu
            .large_rock_crusher(id(type.stone))
            .notConsumable(`minecraft:${type.stone}`)
            .notConsumableFluid(
                type.stone === 'blackstone' ? 'exnihilosequentia:witch_water 1000' : 'minecraft:water 1000'
            )
            .notConsumableFluid('minecraft:lava 1000')
            .itemOutputs(`minecraft:${type.stone}`)
            .duration(16)
            .EUt(type.energy);
    });

    [
        { stone: 'red_granite', energy: 960 },
        { stone: 'marble', energy: 240 },
    ].forEach((type) => {
        event.recipes.gtceu
            .large_rock_crusher(id(type.stone))
            .notConsumable(`gtceu:${type.stone}`)
            .notConsumableFluid('minecraft:water 1000')
            .notConsumableFluid('minecraft:lava 1000')
            .itemOutputs(`gtceu:${type.stone}`)
            .duration(16)
            .EUt(type.energy);
    });
});
