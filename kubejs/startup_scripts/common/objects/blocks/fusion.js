StartupEvents.registry('block', (event) => {
    ['basic', 'advanced', 'complex', 'reinforced', 'borealic', 'dragonic', 'prismalic'].forEach((reflector, i) => {
        event
            .create(`${reflector}_reflector_casing`, 'gtceu:fusion_reflector')
            .tier(i + 1)
            .hardness(5)
            .resistance(10)
            .transparent(true)
            .defaultTranslucent()
            .soundType('metal')
            .tagBlock('minecraft:needs_iron_tool')
            .requiresTool(true)
            .noValidSpawns(true)
            .texture(`kubejs:block/fusion/${reflector}_reflector/casing`);
    });
});
