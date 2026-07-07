StartupEvents.registry('block', (event) => {
    const ThreadingCasing = (type) => {
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

    ThreadingCasing('ionic_engraving_casing');
    ThreadingCasing('advanced_assembly_casing');
    ThreadingCasing('aurouric_resilient_casing');
    ThreadingCasing('atomic_convergence_casing');
    ThreadingCasing('gravitationally_strained_stabilization_casing');
    ThreadingCasing('inoculated_nuclei_seperation_casing');
    ThreadingCasing('nuclei_seperators');
    ThreadingCasing('subatomically_secure_casing');
    ThreadingCasing('quantumly_resistant_casing');
    ThreadingCasing('absolute_annihilation_casing');
    ThreadingCasing('absolute_annihilators');
    ThreadingCasing('tectonic_defiance_casing');
    ThreadingCasing('true_revitilization_casing');

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
