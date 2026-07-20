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
     * @param {'latex' | 'sap' | 'resin'} fluid Fluid output and tree type of the recipe
     * @param {string | null} fertilizer Fertilizer used in the recipe
     * @param {number} buffMultipler By how much to multiply the output buff
     */
    const generateExtractorRecipe = (fluid, fertilizer, buffMultipler) => {
        let recipeId = `${fluid}${fertilizer ? `_${fertilizer.split(':')[1]}` : ''}`;

        console.log(
            `id: "${recipeId}" | fluid/tree type: "${fluid}" | fertilizer: "${fertilizer}" | multiplier: "${buffMultipler}"`
        );

        let recipe = event.recipes.gtceu
            .arboreal_extractor(id(recipeId))
            .outputFluids(`thermal:${fluid} ${100 + 50 * buffMultipler}`)
            .treeType(fluid)
            .duration(400);

        if (fertilizer) {
            recipe.chancedInput(fertilizer, 2500, 0);
            recipe.notConsumable('gtceu:iron_screw');
            console.log('fertilizing');
        } else {
            recipe.notConsumable('gtceu:wood_screw');
            console.log('no shit');
        }
    };

    const fertilizers = [null, 'minecraft:bone_meal', 'thermal:compost', 'gtceu:fertilizer'];

    fertilizers.forEach((fertilizer, index) => {
        generateExtractorRecipe('latex', fertilizer, index); // bone meal
        generateExtractorRecipe('sap', fertilizer, index);
        generateExtractorRecipe('resin', fertilizer, index); // null, compost, fertilizer
    });
});
