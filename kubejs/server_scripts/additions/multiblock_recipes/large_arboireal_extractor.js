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
     * @param {string} fluid Fluid that will be outputed by the extractor
     * @param {'latex' | 'sap' | 'resin'} treeType Ferilizer used in the recipe
     * @param {string | null} fertilizer Ferilizer used in the recipe
     * @param {number} buffMultipler By how much to multiply the output buff
     */
    const generateExtractorRecipe = (fluid, treeType, fertilizer, buffMultipler) => {
        let outFluid = fluid.split(':')[1];
        let inFert = fertilizer ? `_${fertilizer.split(':')[1]}` : '';

        console.log(`id: ${outFluid}${inFert}, ${fluid}, ${treeType}, ${fertilizer}, ${buffMultipler}`);

        let recipe = event.recipes.gtceu
            .arboreal_extractor(id(`${outFluid}${inFert}1`))
            .outputFluids(`${fluid} ${100 + 50 * buffMultipler}`)
            .treeType(treeType)
            .duration(400);

        if (fertilizer) {
            recipe.chancedInput(fertilizer, 2500, 0).notConsumable('gtceu:iron_screw');
        } else {
            recipe.notConsumable('gtceu:wood_screw');
        }
    };

    const fertilizers = [null, 'minecraft:bone_meal', 'thermal:compost', 'gtceu:fertilizer'];

    fertilizers.forEach((fertilizer, index) => {
        generateExtractorRecipe('thermal:latex', 'latex', fertilizer, index);
        generateExtractorRecipe('thermal:sap', 'sap', fertilizer, index);
        generateExtractorRecipe('thermal:resin', 'resin', fertilizer, index);
    });
});
