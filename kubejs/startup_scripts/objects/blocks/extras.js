StartupEvents.registry('block', (event) => {
    // Extras
    event
        .create('meshblock')
        .hardness(2)
        .resistance(2)
        .soundType('wood')
        .transparent(true)
        .defaultTranslucent()
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/axe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/misc/meshblock');

    event
        .create('void_saturation_sponge')
        .hardness(1)
        .resistance(1)
        .soundType('froglight')
        .textureAll('kubejs:block/misc/void_saturation_sponge');

    event
        .create('why_are_you_worrying') //removed before theta release
        .displayName('I Said to !Not Worry About It')
        .hardness(1)
        .resistance(1)
        .soundType('metal')
        .textureAll('kubejs:item/stargate/gate_items/misc/worry');
});
