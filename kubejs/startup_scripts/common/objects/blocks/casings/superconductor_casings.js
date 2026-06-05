StartupEvents.registry('block', (event) => {
    const scCasing = (material, emmitsLight) => {
        event
            .create(`${material}_casing`)
            .hardness(10)
            .resistance(1)
            .lightLevel(emmitsLight ? 2 : 0)
            .soundType('metal')
            .requiresTool(true)
            .noValidSpawns(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/superconductors/${'casing_' + material}`);
    };

    scCasing('soul_infused', false);
    scCasing('signalum', true);
    scCasing('lumium', true);
    scCasing('enderium', false);
    scCasing('shellite', false);
    scCasing('twinite', false);
    scCasing('dragonsteel', false);
    scCasing('prismalium', true);
    scCasing('melodium', true);
    scCasing('stellarium', true);
    scCasing('ancient_runicalium', true);
});
