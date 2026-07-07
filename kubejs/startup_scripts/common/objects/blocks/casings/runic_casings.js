StartupEvents.registry('block', (event) => {
    function runic_casing(id, texture) {
        event
            .create(id)
            .hardness(10)
            .resistance(1)
            .lightLevel(2)
            .soundType('stone')
            .requiresTool(true)
            .noValidSpawns(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_diamond_tool')
            .textureAll(`kubejs:block/casings/runic/${texture}`);
    }

    runic_casing('blank_runic_casing', 'base');
    runic_casing('runic_stabilization_casing', 'stabilization');
    runic_casing('runic_transportation_casing', 'transportation');
    runic_casing('runic_pathway_casing', 'pathway');
});
