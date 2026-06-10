StartupEvents.registry('block', (event) => {
    const threadingCasing = (type) => {
        event
            .create(type)
            .hardness(5)
            .resistance(10)
            .soundType('metal')
            .requiresTool(true)
            .noValidSpawns(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_diamond_tool')
            .textureAll(`kubejs:block/casings/threading/${type}`);
    };

    threadingCasing('ionic_engraving_casing');
    threadingCasing('advanced_assembly_casing');
    threadingCasing('aurouric_resilient_casing');
    threadingCasing('atomic_convergence_casing');
    threadingCasing('gravitationally_strained_stabilization_casing');
    threadingCasing('inoculated_nuclei_seperation_casing');
    threadingCasing('nuclei_seperators');
    threadingCasing('subatomically_secure_casing');
    threadingCasing('quantumly_resistant_casing');
    threadingCasing('absolute_annihilation_casing');
    threadingCasing('absolute_annihilators');
    threadingCasing('tectonic_defiance_casing');
    threadingCasing('true_revitilization_casing');

    event
        .create('aurouric_polarization_cell', 'gtceu:active')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .bloom('kubejs:block/casings/threading/aurouric_polarization_cell');
});
