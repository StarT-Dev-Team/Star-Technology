/**
 * @typedef StargateDefinition
 * @property {string} stargateType - The type of the stargate
 * @property {string} base - The base block of the stargate, e.g. kubejs:draconic_stargate_base_block
 * @property {string} ring - The ring block of the stargate, e.g. kubejs:draconic_stargate_ring_block
 * @property {string} chevron - The chevron block of the stargate, e.g. kubejs:draconic_stargate_chevron_block
 * @property {string} gate - The block to place at the end of the stargate, e.g. sgjourney:pegasus_stargate
 */

/**
 * @typedef RingDefinition
 * @property {number} dxz - The x/z offset of the ring block from the controller block
 * @property {number} dy - The y offset of the ring block from the controller block
 * @property {'ring' | 'chevron'} type - The type of the ring block
 */

/** @type {(x: number, y: number) => RingDefinition} */
const ringBlock = (x, y) => {
    return { dxz: x, dy: y, type: 'ring' };
};

/** @type {(x: number, y: number) => RingDefinition} */
const chevronBlock = (x, y) => {
    return { dxz: x, dy: y, type: 'chevron' };
};

/** @type {{gates: StargateDefinition[], ring: RingDefinition[], resultNbt: string}} */
const STARGATES = {
    gates: [
        {
            stargateType: 'ancient',
            base: 'kubejs:ancient_stargate_base_block',
            ring: 'kubejs:ancient_stargate_ring_block',
            chevron: 'kubejs:ancient_stargate_chevron_block',
            gate: 'sgjourney:milky_way_stargate',
        },
        {
            stargateType: 'pegasus',
            base: 'kubejs:draconic_stargate_base_block',
            ring: 'kubejs:draconic_stargate_ring_block',
            chevron: 'kubejs:draconic_stargate_chevron_block',
            gate: 'sgjourney:pegasus_stargate',
        },
    ],
    ring: [
        chevronBlock(-1, 0),
        ringBlock(-2, 0),
        ringBlock(-2, 1),
        chevronBlock(-3, 1),
        ringBlock(-3, 2),
        ringBlock(-3, 3),
        chevronBlock(-3, 4),
        ringBlock(-3, 5),
        ringBlock(-2, 5),
        chevronBlock(-2, 6),
        ringBlock(-1, 6),
        chevronBlock(0, 6),
        ringBlock(1, 6),
        chevronBlock(2, 6),
        ringBlock(2, 5),
        ringBlock(3, 5),
        chevronBlock(3, 4),
        ringBlock(3, 3),
        ringBlock(3, 2),
        chevronBlock(3, 1),
        ringBlock(2, 1),
        ringBlock(2, 0),
        chevronBlock(1, 0),
    ],
    resultNbt: '{LocalPointOfOrigin:1b}',
};

BlockEvents.rightClicked((event) => {
    const level = event.level;
    const server = event.server;
    const pos = event.block.pos;

    const stargateDefinitionIndex = STARGATES.gates.findIndex((gate) => gate.base === event.block.id);
    const stargateType = STARGATES.gates[stargateDefinitionIndex].stargateType;

    if (!stargateType) return;

    let xNeighbourBlock = level.getBlock(pos.x + 1, pos.y, pos.z);
    let zNeighbourBlock = level.getBlock(pos.x, pos.y, pos.z + 1);

    let axis = null;

    if (xNeighbourBlock.id === 'minecraft.air' && zNeighbourBlock.id !== 'minecraft.air') {
        axis = 'x';
    } else if (xNeighbourBlock.id === 'minecraft.air' && xNeighbourBlock.id !== 'minecraft.air') {
        axis = 'z';
    } else {
        return;
    }

    const structureBlocks = STARGATES.ring.map((part) => {
        let newPos = pos.offset(axis === 'x' ? part.dxz : 0, part.dy, axis === 'z' ? part.dxz : 0);
        return { pos: newPos, block: STARGATES.gates[stargateDefinitionIndex][part.type] };
    });

    const missing = structureBlocks.filter(
        (block) => level.getBlock(block.pos.x, block.pos.y, block.pos.z).id !== block.block
    );

    if (missing.length > 0) return;

    structureBlocks.forEach((block) => level.setBlock(block.pos, 'minecraft:air', 3));

    const command = `setblock ${pos.x} ${pos.y} ${pos.z} ${STARGATES.gates[stargateDefinitionIndex].gate}${STARGATES.resultNbt}`;
    server.runCommandSilent(command);
});
