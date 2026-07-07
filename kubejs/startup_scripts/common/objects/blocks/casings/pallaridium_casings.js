//priority: 1
StartupEvents.registry('block', (event) => {
    function pallaridium_casing(id, texture) {
        event
            .create(id)
            .hardness(5)
            .resistance(10)
            .lightLevel(0)
            .soundType('metal')
            .requiresTool(true)
            .noValidSpawns(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/pallaridium/${texture}`);
    }

    pallaridium_casing('pallaridium_pipe_casing', 'pipe_casing');
    pallaridium_casing('pallaridium_gearbox', 'gearbox');
    pallaridium_casing('pallaridium_turbine_casing', 'turbine_casing');

    event
        .create('pallaridium_firebox_casing', 'gtceu:active')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .firebox(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'kubejs:block/casings/pallaridium/firebox_casing',
            'gtceu:block/casings/solid/machine_casing_palladium_substation'
        );

    event
        .create('pallaridium_engine_intake_casing', 'gtceu:active')
        .displayName('Unreal Engine Intake Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .simple('kubejs:block/casings/pallaridium/engine_intake_casing');
});
