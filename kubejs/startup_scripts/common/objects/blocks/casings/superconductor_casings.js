StartupEvents.registry('block', (event) => {
    const SCcasing = (material, emmits_light) => {
        event
            .create(`${material}_casing`)
            .hardness(10)
            .resistance(1)
            .lightLevel(emmits_light ? 2 : 0)
            .soundType('metal')
            .requiresTool(true)
            .noValidSpawns(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/superconductors/${'casing_' + material}`);
    };

    SCcasing('soul_infused', false);
    SCcasing('signalum', true);
    SCcasing('lumium', true);
    SCcasing('enderium', false);
    SCcasing('shellite', false);
    SCcasing('twinite', false);
    SCcasing('dragonsteel', false);
    SCcasing('prismalium', true);
    SCcasing('melodium', true);
    SCcasing('stellarium', true);
    SCcasing('ancient_runicalium', true);
});
