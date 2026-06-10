StartupEvents.registry('block', (event) => {
    event
        .create('draneko_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/end_multis/draneko_casing');

    event
        .create('abyssal_drill_1')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/end_multis/abyssal_drill_casing');

    event
        .create('abyssal_drill_2')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/end_multis/abyssal_drill_casing_2');

    event
        .create('cattomolymer_casing')
        .displayName('Cattomolymer Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/end_multis/cattomolymer_casing');

    event
        .create('draco_ware_casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(3)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/end_multis/draco_ware_casing');

    event
        .create('abyssal_inductor_hull')
        .hardness(5)
        .resistance(10)
        .lightLevel(3)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/end_multis/abyssal_inductor');

    event
        .create('draco_assembly_grating')
        .hardness(5)
        .resistance(10)
        .lightLevel(1)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/end_multis/draco_assembly_grating');

    event
        .create('draco_resilient_fusion_glass')
        .hardness(2)
        .resistance(2)
        .soundType('glass')
        .transparent(true)
        .defaultTranslucent()
        .requiresTool(false)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/end_multis/draco_resilient_fusion_glass');
});
