StartupEvents.registry('block', (event) => {
    const GateRingBlocks = (gate, type, side, front) => {
        event
            .create(gate + '_stargate_' + type + '_block')
            .hardness(5)
            .resistance(10)
            .soundType('metal')
            .requiresTool(true)
            .noValidSpawns(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_netherite_tool')
            .texture('up', `kubejs:block/stargate/${gate}_stargate_block_tops`)
            .texture('down', `kubejs:block/stargate/${gate}_stargate_block_tops`)
            .texture('east', `kubejs:block/stargate/${gate}_stargate_block_${side}`)
            .texture('west', `kubejs:block/stargate/${gate}_stargate_block_${side}`)
            .texture('south', `kubejs:block/stargate/${gate}_stargate_block_${side}`)
            .texture('north', `kubejs:block/stargate/${gate}_stargate_block_${front}`);
    };

    // === ASG ===
    GateRingBlocks('ancient', 'ring', 'ring', 'ring');
    GateRingBlocks('ancient', 'base', 'ring', 'base');
    GateRingBlocks('ancient', 'chevron', 'chevron', 'chevron');

    // === DSG ===
    GateRingBlocks('draconic', 'ring', 'ring', 'ring');
    GateRingBlocks('draconic', 'base', 'ring', 'base');
    GateRingBlocks('draconic', 'chevron', 'chevron', 'chevron');
});
