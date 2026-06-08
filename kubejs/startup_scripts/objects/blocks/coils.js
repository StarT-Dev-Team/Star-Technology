StartupEvents.registry('block', (event) => {
    event
        .create('zalloy_coil_block', 'gtceu:coil')
        .temperature(13499)
        .level(24)
        .energyDiscount(12)
        .tier(8)
        .coilMaterial(() => GTMaterials.get('zalloy'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true);

    event
        .create('magmada_alloy_coil_block', 'gtceu:coil')
        .temperature(16199)
        .level(32)
        .energyDiscount(16)
        .tier(9)
        .coilMaterial(() => GTMaterials.get('magmada_alloy'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true);

    event
        .create('abyssal_alloy_coil_block', 'gtceu:coil')
        .temperature(18888)
        .level(40)
        .energyDiscount(20)
        .tier(10)
        .coilMaterial(() => GTMaterials.get('abyssal_alloy'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true);

    event
        .create('rhenotax_coil', 'gtceu:active')
        .displayName('Rhenotax Coil')
        .hardness(3)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/wrench')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .bloom('kubejs:block/coils/rhenotax/coil');
});
