StartupEvents.registry('block', (event) => {
    /**
     * @param {string} id
     * @param {string} texture
     */
    function runicCasing(id, texture) {
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

    runicCasing('blank_runic_casing', 'base');
    runicCasing('runic_stabilization_casing', 'stabilization');
    runicCasing('runic_transportation_casing', 'transportation');
    runicCasing('runic_pathway_casing', 'pathway');
});
