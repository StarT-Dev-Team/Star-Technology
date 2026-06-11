StartupEvents.registry('block', (event) => {
    event
        .create('husk_of_the_flame')
        .hardness(5)
        .resistance(10)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/structures/husk_of_the_flame');

    event
        .create('husk_brick')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/structures/husk_brick');
});
