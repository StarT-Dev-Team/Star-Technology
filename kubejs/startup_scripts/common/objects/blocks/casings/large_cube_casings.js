StartupEvents.registry('block', (event) => {
    const KubeCasing = (type) => {
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

    KubeCasing('beryllium_aluminium_alloy');
    KubeCasing('birmabright');
    KubeCasing('beryllium_bronze');
    KubeCasing('blue_steel');
    KubeCasing('duralumin');
    KubeCasing('elgiloy');
    KubeCasing('hydronalium');
    KubeCasing('kovar');
    KubeCasing('red_steel');
    KubeCasing('silicon_bronze');
    KubeCasing('sterling_silver');
    KubeCasing('zamak');
    KubeCasing('tumbaga');
    KubeCasing('silicone_rubber');
    KubeCasing('black_steel');
    KubeCasing('manganin');
    KubeCasing('galvanized_steel');
});
