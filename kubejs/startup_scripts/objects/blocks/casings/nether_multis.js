StartupEvents.registry('block', (event) => {
    event
        .create('extreme_temperature_smelting_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/nether_multis/extreme_temperature_smelting_casing');

    event
        .create('subzero_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/nether_multis/subzero_casing');

    event
        .create('reinforced_cryostone_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/nether_multis/reinforced_cryostone_casing');

    event
        .create('reinforced_brimstone_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/nether_multis/reinforced_brimstone_casing');

    event
        .create('heart_of_the_flame')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/nether_multis/heart_of_the_flame');
});
