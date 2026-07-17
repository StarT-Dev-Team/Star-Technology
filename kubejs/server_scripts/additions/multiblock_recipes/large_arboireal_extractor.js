ServerEvents.recipes((event) => {
    const id = global.id;
    // Controller Block
    event
        .shaped('gtceu:large_arboreal_extractor', ['RSR', 'PGP', 'BTB'], {
            R: 'gtceu:iron_rod',
            S: 'gtceu:lead_spring',
            P: 'gtceu:iron_plate',
            G: '#forge:glass',
            B: 'minecraft:bricks',
            T: 'thermal:redstone_servo',
        })
        .id('start:shaped/large_arboreal_extractor');

    //Usage
    event.recipes.gtceu
        .arboreal_extractor(id('latex'))
        .notConsumable('gtceu:wood_screw')
        .outputFluids('thermal:latex 100')
        .treeType('latext')
        .duration(400);

    event.recipes.gtceu
        .arboreal_extractor(id('sap'))
        .notConsumable('gtceu:wood_screw')
        .outputFluids('thermal:tree_sap 100')
        .treeType('sap')
        .duration(400);

    event.recipes.gtceu
        .arboreal_extractor(id('resin'))
        .notConsumable('gtceu:wood_screw')
        .outputFluids('thermal:resin 100')
        .treeType('resin')
        .duration(400);

    const taps = [
        { fuel: 'minecraft:bone_meal', circ: 1 },
        { fuel: 'thermal:compost', circ: 2 },
        { fuel: 'gtceu:fertilizer', circ: 3 },
    ];

    taps.forEach((latex) => {
        event.recipes.gtceu
            .arboreal_extractor(id(`latex_${latex.circ}`))
            .chancedInput(`${latex.fuel}`, 2500, 0)
            .notConsumable('gtceu:iron_screw')
            .circuit(latex.circ)
            .outputFluids(`thermal:latex ${100 + 50 * latex.circ}`)
            .duration(400);

        event.recipes.gtceu
            .arboreal_extractor(id(`sap_${latex.circ}`))
            .chancedInput(`${latex.fuel}`, 2500, 0)
            .notConsumable('gtceu:iron_screw')
            .circuit(latex.circ)
            .outputFluids(`thermal:tree_sap ${100 + 50 * latex.circ}`)
            .duration(400);

        event.recipes.gtceu
            .arboreal_extractor(id(`resin_${latex.circ}`))
            .chancedInput(`${latex.fuel}`, 2500, 0)
            .notConsumable('gtceu:iron_screw')
            .circuit(latex.circ)
            .outputFluids(`thermal:resin ${100 + 50 * latex.circ}`)
            .duration(400);
    });
});
