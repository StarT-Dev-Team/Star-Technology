StartupEvents.registry('block', (event) => {
    event
        .create('absolute_temperature_smelting_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/riftic_multis/absolute_temperature_smelting_casing');

    event
        .create('aberration_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/riftic_multis/aberration_casing');

    event
        .create('infernally_reinforced_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/riftic_multis/infernally_reinforced_casing');

    event
        .create('soul_of_the_flame')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/riftic_multis/soul_of_the_flame');

    // event.create('particle_rod_holder', 'gtceu:active')
    //     .hardness(5)
    //     .resistance(10)
    //     .soundType('metal')
    //     .tagBlock('mineable/pickaxe')
    //     .tagBlock('minecraft:needs_iron_tool')
    //     .requiresTool(true)
    //     .noValidSpawns(true)
    //     .bloom('kubejs:block/casings/riftic_multis/particle_rod_holder');

    // event.create('riftion_injection_core', 'gtceu:active')
    //     .hardness(5)
    //     .resistance(10)
    //     .soundType('metal')
    //     .tagBlock('mineable/pickaxe')
    //     .tagBlock('minecraft:needs_iron_tool')
    //     .requiresTool(true)
    //     .noValidSpawns(true)
    //     .bloom('kubejs:block/casings/riftic_multis/riftion_injection_core');

    event
        .create('primordial_ware_casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(3)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/riftic_multis/primordial_ware_casing');

    event
        .create('primordial_assembly_grating')
        .hardness(5)
        .resistance(10)
        .lightLevel(1)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/riftic_multis/primordial_assembly_grating');
});
