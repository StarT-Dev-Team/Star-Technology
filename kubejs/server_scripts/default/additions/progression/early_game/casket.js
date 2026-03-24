global.not_hardmode(() => {

    ServerEvents.recipes(event => {
        const id = global.id;
        
        event.shaped('gtceu:ulv_casket',[
            'RPR',
            'SMS',
            'TTT'],{
            T: 'gtceu:treated_wood_slab',
            M: 'exnihilosequentia:string_mesh',
            R: 'gtceu:rubber_ring',
            P: 'gtceu:wrought_iron_plate',
            S: 'gtceu:treated_wood_rod'
        }).id(id('shaped/ulv_casket'));

        const fermenting = (input, outputItem, outputFluid, duration, recipeID, circuit) => {
            const recipe = event.recipes.gtceu.fermenting(id(recipeID));
            recipe.itemInputs(input);
            if (outputItem) {
                recipe.itemOutputs(outputItem);
            }
            recipe.outputFluids(outputFluid);
            recipe.duration(duration);
            if (circuit) {
                recipe.circuit(circuit);
            }
        };
        
        fermenting('8x #forge:crops', 'gtceu:bio_chaff', 'gtceu:ethanol 200', 600, 'ethanol', 1);
        
        const potionRecipes = (fermentationMixture, potionID) => {
            fermenting(fermentationMixture, false, `kubejs:${potionID} 100`, 100, potionID);

            event.recipes.create.filling(`kubejs:${potionID}`, [Fluid.of(`kubejs:${potionID}`, 250), 'minecraft:glass_bottle']).id(`start:filling/${potionID}`);

            event.recipes.gtceu.fermenter(id(potionID))
                .itemInputs(fermentationMixture)
                .outputFluids(`kubejs:${potionID} 125`)
                .duration(100)
                .EUt(GTValues.VHA[GTValues.LV]);
        };

        potionRecipes(['3x thermal:corn', '3x minecraft:wheat', '2x minecraft:sugar'], 'sweetcorn_beer'); // Haste
        potionRecipes(['6x minecraft:apple', '2x minecraft:sugar'], 'apple_cidar'); // Slow Falling
        potionRecipes(['4x minecraft:carrot', '2x minecraft:wheat', '2x minecraft:sugar'], 'carrot_ale'); // Night Vision
        potionRecipes(['6x #forge:berries', '2x minecraft:sugar'], 'berry_wine'); // Speed
        potionRecipes(['7x minecraft:bread', 'minecraft:sugar'], 'wheat_kvas'); // Jump Boost
        potionRecipes(['#forge:crops/rice', 'minecraft:sugar'], 'sake'); // Reach, [custom effect?, Komaru related?]

        // .replaceIngredient() does not like template strings
        event.shapeless(`4x kubejs:sweetcorn_beer`, [`kubejs:sweetcorn_beer_bucket`, 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle']).replaceIngredient(`kubejs:sweetcorn_beer_bucket`, 'minecraft:bucket').id(`start:shapeless/sweetcorn_beer`);
        event.shapeless(`4x kubejs:apple_cidar`, [`kubejs:apple_cidar_bucket`, 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle']).replaceIngredient(`kubejs:apple_cidar_bucket`, 'minecraft:bucket').id(`start:shapeless/apple_cidar`);
        event.shapeless(`4x kubejs:carrot_ale`, [`kubejs:carrot_ale_bucket`, 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle']).replaceIngredient(`kubejs:carrot_ale_bucket`, 'minecraft:bucket').id(`start:shapeless/carrot_ale`);
        event.shapeless(`4x kubejs:berry_wine`, [`kubejs:berry_wine_bucket`, 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle']).replaceIngredient(`kubejs:berry_wine_bucket`, 'minecraft:bucket').id(`start:shapeless/berry_wine`);
        event.shapeless(`4x kubejs:wheat_kvas`, [`kubejs:wheat_kvas_bucket`, 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle']).replaceIngredient(`kubejs:wheat_kvas_bucket`, 'minecraft:bucket').id(`start:shapeless/wheat_kvas`);
        event.shapeless(`4x kubejs:sake`, [`kubejs:sake_bucket`, 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle']).replaceIngredient(`kubejs:sake_bucket`, 'minecraft:bucket').id(`start:shapeless/sake`);

    });
});