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

    /**
     * @type {{fluid: 'latex' | 'sap' | 'resin', fertilizer: string | null, buffMultipler: number}[]}
     */
    const arborealData = [
        { fluid: 'latex', fertilizer: null, buffMultipler: 0 },
        { fluid: 'latex', fertilizer: 'minecraft:bone_meal', buffMultipler: 1 },
        { fluid: 'latex', fertilizer: 'thermal:compost', buffMultipler: 2 },
        { fluid: 'latex', fertilizer: 'gtceu:fertilizer', buffMultipler: 3 },
        { fluid: 'sap', fertilizer: null, buffMultipler: 0 },
        { fluid: 'sap', fertilizer: 'minecraft:bone_meal', buffMultipler: 1 },
        { fluid: 'sap', fertilizer: 'thermal:compost', buffMultipler: 2 },
        { fluid: 'sap', fertilizer: 'gtceu:fertilizer', buffMultipler: 3 },
        { fluid: 'resin', fertilizer: null, buffMultipler: 0 },
        { fluid: 'resin', fertilizer: 'minecraft:bone_meal', buffMultipler: 1 },
        { fluid: 'resin', fertilizer: 'thermal:compost', buffMultipler: 2 },
        { fluid: 'resin', fertilizer: 'gtceu:fertilizer', buffMultipler: 3 },
    ];

    arborealData.forEach((entry) => {
        let { fluid, fertilizer, buffMultipler } = entry;
        let recipe = event.recipes.gtceu
            .arboreal_extractor(id(`${fluid}${fertilizer ? `_${fertilizer.split(':')[1]}` : ''}`))
            .notConsumable(fertilizer ? 'gtceu:iron_screw' : 'gtceu:wood_screw')
            .outputFluids(`thermal:${fluid} ${100 + 50 * buffMultipler}`)
            .treeType(fluid)
            .duration(400);

        if (fertilizer) {
            recipe.chancedInput(fertilizer, 2500, 0);
        }
    });
});
