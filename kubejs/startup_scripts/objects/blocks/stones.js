StartupEvents.registry('block', (event) => {
    event
        .create('cryostone')
        .hardness(2)
        .resistance(2)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/stones/cryostone');

    event
        .create('brimstone')
        .hardness(2)
        .resistance(2)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/stones/brimstone');
});
