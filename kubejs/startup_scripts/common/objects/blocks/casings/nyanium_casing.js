StartupEvents.registry('block', (event) => {
    function nyan_casing(id, texture) {
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
            .textureAll(`kubejs:block/casings/nyanium/${texture}`);
    }

    nyan_casing('nyanium_machine_casing', 'casing');
    nyan_casing('nyanium_pipe_casing', 'pipe_casing');
    nyan_casing('nyanium_gearbox', 'gearbox');
    nyan_casing('nyanium_turbine_casing', 'turbine_casing');

    event
        .create('nyanium_firebox_casing', 'gtceu:active')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .firebox(
            'kubejs:block/casings/nyanium/casing',
            'kubejs:block/casings/nyanium/firebox_casing',
            'kubejs:block/casings/nyanium/casing'
        );

    event
        .create('nyanium_engine_intake_casing', 'gtceu:active')
        .displayName('Nyinsane Engine Intake Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .simple('kubejs:block/casings/nyanium/engine_intake_casing');

    event
        .create('nyanium_heat_escape_casing', 'gtceu:active')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .bloom('kubejs:block/casings/nyanium/heat_escape');
});
