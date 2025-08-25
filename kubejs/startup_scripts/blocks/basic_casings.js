
StartupEvents.registry('block', event => {

    event.create('austenitic_stainless_steel_304_casing')
        .displayName('Austenitic Stainless Steel 304 Nuclear Casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-austenitic-stainless-steel-304');

    event.create('inconel_625_casing')
        .displayName('Inconel 625 Thermal Fluctuation Resistant Casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-inconel-625');

    event.create('wood_casing')
        .displayName('Treated Wood Reinforced Casing')
        .hardness(5)
        .resistance(1)
        .material('wood')
        .requiresTool(true)
        .tagBlock('mineable/axe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/casings/casing-wood');

    event.create('peek_casing')
        .displayName('PEEK Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/machine_casing_peek');

    event.create('fluix_steel_casing')
        .displayName('Fluix Steel Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/fluix_casing');

    event.create('superalloy_casing')
        .displayName('Superalloy Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superalloy_casing');

});