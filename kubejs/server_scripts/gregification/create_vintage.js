ServerEvents.recipes(event => {
    const id = global.id;

    ['turning', 'coiling', 'pressurizing', 'vacuumizing', 'curving', 'hammering', 'laser_cutting', 'centrifugation'].forEach(type => {
        event.remove({type: `vintage:${type}`});
    });

    ['framedblocks:framed_flower_pot', 'manyideas_core:block/mortar___crafting', 'framedblocks:framed_prism_corner', 'minecraft:bowl', 'createlowheated:basic_burner',
        'minecraft:flower_pot', 'woodenbucket:wooden_bucket', 'framedblocks:framed_inner_prism_corner', 'framedblocks:framed_inner_threeway_corner',
        'framedblocks:framed_threeway_corner', 'framedblocks:framed_slope'].forEach(recipeID => {
        event.remove({id: recipeID});
    });

    event.remove({type: 'create:pressing', mod: 'vintage'}); // Random plates recipes
    
    // if (global.packmode !== 'hard'){(() => {   

    const vintage = event.recipes.vintage;
    const create = event.recipes.create;

    event.remove({id: 'vintage:sequenced_assembly/redstone_module'});
    create.deploying('vintage:redstone_module', ['create:precision_mechanism', 'minecraft:redstone_block']).id('start:deploying/redstone_module');

    event.remove({id: 'vintage:sequenced_assembly/recipe_card'});
    create.deploying('vintage:recipe_card', ['gtceu:brass_plate', 'create:empty_schematic']).id('start:deploying/recipe_card');

    [
        {modID: 'gtceu', metals: ['lead','silver','tin','zinc', 'brass','bronze','red_alloy','nickel','invar','soul_infused','cobalt_brass','wrought_iron','potin']},
        {modID: 'minecraft', metals: ['iron', 'gold', 'copper']}
    ].forEach(mod => {
        mod.metals.forEach(metal => {
            vintage.turning(`gtceu:${metal}_rod`,`${mod.modID}:${metal}_ingot`).id(`start:turning/${metal}_rod`);

            vintage.coiling(`gtceu:${metal}_spring`,`gtceu:long_${metal}_rod`).id(`start:coiling/${metal}_spring`);
            vintage.coiling(`gtceu:small_${metal}_spring`,`gtceu:${metal}_single_wire`).id(`start:coiling/small_${metal}_spring`);
        });
    });

    //Carried over from source code
        // event.custom({
        // "type": "create:sequenced_assembly",
        // "ingredient": {"tag": "forge:plates/brass"},
        // "loops": 3,
        // "results": [{"item": "vintageimprovements:recipe_card"}],
        // "sequence": [{
        //     "type": "create:deploying",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_recipe_card"},{"item": "minecraft:redstone"}],
        //     "results": [{"item": "vintageimprovements:incomplete_recipe_card"}]
        // },
        // {
        //     "type": "create:pressing",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_recipe_card"}],
        //     "results": [{"item": "vintageimprovements:incomplete_recipe_card"}]
        // },
        // {
        //     "type": "vintageimprovements:polishing",
        //     "speed_limits": 2,
        //     "ingredients": [{"item": "vintageimprovements:incomplete_recipe_card"}],
        //     "results": [{"item": "vintageimprovements:incomplete_recipe_card"}]
        // }],
        // "transitionalItem": {"item": "vintageimprovements:incomplete_recipe_card"}
        // }).id(`start:sequenced_assembly/recipe_card`);

        // event.custom(
        // {
        // "type": "create:sequenced_assembly",
        // "ingredient": {"tag": "forge:plates/gold"},
        // "loops": 3,
        // "results": [{"item": "vintageimprovements:redstone_module"}],
        // "sequence": [{
        //     "type": "create:deploying",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_redstone_module"},{"item": "minecraft:redstone"}],
        //     "results": [{"item": "vintageimprovements:incomplete_redstone_module"}]
        // },
        // {
        //     "type": "vintageimprovements:vibrating",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_redstone_module"}],
        //     "results": [{"item": "vintageimprovements:incomplete_redstone_module"}]
        // },
        // {
        //     "type": "create:deploying",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_redstone_module"},{"tag": "forge:gems/quartz"}],
        //     "results": [{"item": "vintageimprovements:incomplete_redstone_module"}]
        // },
        // {
        //     "type": "create:pressing",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_redstone_module"}],
        //     "results": [{"item": "vintageimprovements:incomplete_redstone_module"}]
        // },
        // {
        //     "type": "create:deploying",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_redstone_module"},{"tag": "forge:nuggets/iron"}],
        //     "results": [{"item": "vintageimprovements:incomplete_redstone_module"}]
        // }],
        // "transitionalItem": {"item": "vintageimprovements:incomplete_redstone_module"}
        // }).id(`start:sequenced_assembly/redstone_module`);

// })()}

});