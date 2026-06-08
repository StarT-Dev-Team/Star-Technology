StartupEvents.registry('block', (event) => {
    const kubeCasing = (type) => {
        event
            .create(`${type}_casing`)
            .hardness(5)
            .resistance(1)
            .soundType('metal')
            .requiresTool(true)
            .noValidSpawns(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/large_cubes/${type}_casing`);
    };

    kubeCasing('beryllium_aluminium_alloy');
    kubeCasing('birmabright');
    kubeCasing('beryllium_bronze');
    kubeCasing('blue_steel');
    kubeCasing('duralumin');
    kubeCasing('elgiloy');
    kubeCasing('hydronalium');
    kubeCasing('kovar');
    kubeCasing('red_steel');
    kubeCasing('silicon_bronze');
    kubeCasing('sterling_silver');
    kubeCasing('zamak');
    kubeCasing('tumbaga');
    kubeCasing('silicone_rubber');
    kubeCasing('black_steel');
    kubeCasing('manganin');
    kubeCasing('galvanized_steel');
});
