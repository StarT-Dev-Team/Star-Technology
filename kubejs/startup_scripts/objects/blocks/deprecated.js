StartupEvents.registry('block', (event) => {
    event
        .create('austenitic_stainless_steel_304_casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/deprecated/casing_austenitic_stainless_steel_304');

    event
        .create('inconel_625_casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/deprecated/casing_inconel_625');
});
