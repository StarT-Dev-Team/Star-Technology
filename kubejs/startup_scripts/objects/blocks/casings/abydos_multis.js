StartupEvents.registry('block', (event) => {
    event
        .create('noble_mixing_casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/abydos_multis/noble_mixing_casing');

    event
        .create('quake_proof_casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/abydos_multis/quake_proof_casing');

    event
        .create('tritanic_blasting_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/abydos_multis/tritanic_blasting_casing');

    event
        .create('superdense_assembly_control_casing', 'gtceu:active')
        .displayName('Superdense Assembly Control Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .bloom('kubejs:block/casings/abydos_multis/superdense_assembly_control_casing');

    event
        .create('superdense_assembly_machine_casing')
        .displayName('Superdense Assembly Machine Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/abydos_multis/superdense_assembly_machine_casing');

    event
        .create('superdense_machine_casing')
        .displayName('Superdense Machine Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/abydos_multis/superdense_machine_casing');

    event
        .create('superalloy_casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/abydos_multis/superalloy_casing');

    event
        .create('reinforced_fusion_glass')
        .hardness(2)
        .resistance(2)
        .soundType('glass')
        .transparent(true)
        .defaultTranslucent()
        .requiresTool(false)
        .noValidSpawns(true)
        .textureAll('kubejs:block/casings/abydos_multis/reinforced_fusion_glass');
});
