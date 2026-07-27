StartupEvents.registry('block', (event) => {
    /**
     * @param {string} gate
     * @param {string} type
     * @param {string} side
     * @param {string} front
     */
    const gateRingBlocks = (gate, type, side, front) => {
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
    gateRingBlocks('ancient', 'ring', 'ring', 'ring');
    gateRingBlocks('ancient', 'base', 'ring', 'base');
    gateRingBlocks('ancient', 'chevron', 'chevron', 'chevron');

    // === DSG ===
    gateRingBlocks('draconic', 'ring', 'ring', 'ring');
    gateRingBlocks('draconic', 'base', 'ring', 'base');
    gateRingBlocks('draconic', 'chevron', 'chevron', 'chevron');
});
