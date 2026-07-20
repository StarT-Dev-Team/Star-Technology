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
        .treeType('latex')
        .duration(400);

    event.recipes.gtceu
        .arboreal_extractor(id('sap'))
        .notConsumable('gtceu:wood_screw')
        .outputFluids('thermal:sap 100')
        .treeType('sap')
        .duration(400);

    event.recipes.gtceu
        .arboreal_extractor(id('resin'))
        .notConsumable('gtceu:wood_screw')
        .outputFluids('thermal:resin 100')
        .treeType('resin')
        .duration(400);

    const fertilizers = ['minecraft:bone_meal', 'thermal:compost', 'gtceu:fertilizer'];

    /**
     * @param {string} fluid Fluid that will be outputed by the extractor
     * @param {string} fertilizer Ferilizer used in the recipe
     */
    const generateExtractorRecipe = (fluid, fertilizer) => {
        let outFluid = fluid.split(':')[1];
        let inFert = fertilizer.split(':')[1];
        event.recipes.gtceu
            .arboreal_extractor(id(`${outFluid}_${inFert}`))
            .notConsumable('gtceu:iron_screw')
            .chancedInput(fertilizer, 2500, 0)
            .outputFluids(`${fluid}} ${150}`)
            .duration(400);

        event.recipes.gtceu
            .arboreal_extractor(id(`${outFluid}_${inFert}`))
            .notConsumable('gtceu:iron_screw')
            .chancedInput(fertilizer, 2500, 0)
            .outputFluids(`${fluid}} ${200}`)
            .duration(400);

        event.recipes.gtceu
            .arboreal_extractor(id(`${outFluid}_${inFert}`))
            .notConsumable('gtceu:iron_screw')
            .chancedInput(fertilizer, 2500, 0)
            .outputFluids(`${fluid}} ${250}`)
            .duration(400);
    };

    fertilizers.forEach((fertilizer) => {
        generateExtractorRecipe('thermal:latex', fertilizer);
        generateExtractorRecipe('thermal:sap', fertilizer);
        generateExtractorRecipe('thermal:resin', fertilizer);
    });
});
