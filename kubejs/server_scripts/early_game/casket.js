ServerEvents.recipes(event => {
    const id = global.id;

    if (global.packmode !== 'hard'){
        (() => {
    
    event.shaped('gtceu:ulv_casket',[
        'PRP',
        'PGP',
        'ISI'],{
        P: 'gtceu:treated_wood_slab',
        G: 'create:basin',
        R: 'gtceu:iron_gear',
        I: 'gtceu:iron_plate',
        S: 'thermal:redstone_servo'
    }).id('start:shaped/ulv_casket');

    const fermenting = (input, outputItem, outputFluid, duration, recipeID) => {
        const recipe = event.recipes.gtceu.fermenting(id(recipeID));
        recipe.itemInputs(input);
        if (outputItem) {
            recipe.itemOutputs(outputItem);
        }
        recipe.outputFluids(outputFluid);
        recipe.duration(duration);
    };
    
    fermenting('8x #forge:crops', 'gtceu:bio_chaff', 'gtceu:ethanol 200', 600, 'ethanol');
    
    const potionRecipes = (fermentationMixture, potionID) => {
        fermenting(fermentationMixture, false, `kubejs:${potionID} 100`, 100, potionID);

        event.recipes.create.filling(`kubejs:${potionID}`, [Fluid.of(`kubejs:${potionID}`, 250), 'minecraft:glass_bottle']).id(`start:filling/${potionID}`);

        event.shapeless(`4x kubejs:${potionID}`, [`kubejs:${potionID}_bucket`, 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle']).id(`start:shapeless/${potionID}`);
    };

    potionRecipes(['3x thermal:corn', '3x minecraft:wheat', '2x minecraft:sugar'], 'sweetcord_beer'); // Haste
    potionRecipes(['6x minecraft:apple', '2x minecraft:sugar'], 'apple_cidar'); // Slow Falling
    potionRecipes(['4x minecraft:carrot', '2x minecraft:wheat', '2x minecraft:sugar'], 'carrot_ale'); // Night Vision
    potionRecipes(['6x #forge:berries', '2x minecraft:sugar'], 'berry_wine'); // Speed
    potionRecipes(['7x minecraft:bread', 'minecraft:sugar'], 'wheat_kvas'); // Jump Boost
    potionRecipes(['#forge:crops/rice', 'minecraft:sugar'], 'sake'); // Reach, [custom effect?, Komaru related?]

    })()
    }

});