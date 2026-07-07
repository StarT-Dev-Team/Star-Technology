StartupEvents.registry('block', (event) => {
    function naq_casing(id, texture) {
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
            .textureAll(`kubejs:block/casings/naquadah/${texture}`);
    }

    naq_casing('enriched_naquadah_machine_casing', 'casing');
    naq_casing('enriched_naquadah_pipe_casing', 'pipe_casing');
    naq_casing('enriched_naquadah_gearbox', 'gearbox');
    naq_casing('enriched_naquadah_turbine_casing', 'turbine_casing');

    event
        .create('enriched_naquadah_firebox_casing', 'gtceu:active')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .firebox(
            'kubejs:block/casings/naquadah/casing',
            'kubejs:block/casings/naquadah/firebox_casing',
            'kubejs:block/casings/naquadah/casing'
        );

    event
        .create('enriched_naquadah_engine_intake_casing', 'gtceu:active')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .simple('kubejs:block/casings/naquadah/engine_intake_casing');

    event
        .create('enriched_naquadah_heat_escape_casing', 'gtceu:active')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .bloom('kubejs:block/casings/naquadah/heat_escape');
});
