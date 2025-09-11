//requires: vintage
global.not_hardmode(() => {
ServerEvents.recipes(event => {
    const id = global.id;

    const vintage = event.recipes.vintage;
    const create = event.recipes.create;  

    // Machinery
    ['turning', 'coiling', 'pressurizing', 'curving', 'hammering', 'laser_cutting', 'centrifugation'].forEach(type => {
        event.remove({type: `vintage:${type}`});
    });

    event.remove({output: 'vintage:curving_press'});
    event.remove({output: 'vintage:laser'});

    event.remove({id: 'vintage:sequenced_assembly/redstone_module'});
    create.deploying('vintage:redstone_module', ['create:precision_mechanism', 'minecraft:redstone_block']).id(id('deploying/redstone_module'));

    event.remove({id: 'vintage:sequenced_assembly/recipe_card'});
    create.deploying('vintage:recipe_card', ['gtceu:brass_plate', 'create:empty_schematic']).id(id('deploying/recipe_card'));

    // Material Processing
    event.remove({type: 'create:pressing', mod: 'vintage'});
    event.remove({output: /vintage:.*_rod/});
    event.remove({output: /vintage:.*_wire/});

    event.replaceInput({input: 'vintage:iron_spring'}, 'vintage:iron_spring', 'gtceu:iron_spring');

    // Either removes manual and curving recipe, or none when `, type: 'vintage:curving'` is added, seems to be some kind of hardcoded compat :/
    // ['framedblocks:framed_flower_pot', 'manyideas_core:block/mortar___crafting', 'framedblocks:framed_prism_corner', 'minecraft:bowl', 'createlowheated:basic_burner',
    //     'minecraft:flower_pot', 'woodenbucket:wooden_bucket', 'framedblocks:framed_inner_prism_corner', 'framedblocks:framed_inner_threeway_corner',
    //     'framedblocks:framed_threeway_corner', 'framedblocks:framed_slope'].forEach(recipeID => {
    //     event.remove({id: recipeID, type: 'vintage:curving'});
    // });

    [
        {modID: 'minecraft', metal: 'copper', rod: true, spring: true, small_spring: true, double_plate: true},
        {modID: 'minecraft', metal: 'gold', rod: true, spring: true, small_spring: true, double_plate: true},
        {modID: 'minecraft', metal: 'iron', rod: true, spring: true, small_spring: true, double_plate: true},
        {modID: 'gtceu', metal: 'lead', rod: true, spring: true, small_spring: true, double_plate: true},
        {modID: 'gtceu', metal: 'tin', rod: true, spring: true, small_spring: true, double_plate: true},
        {modID: 'gtceu', metal: 'red_alloy', rod: true, spring: true, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'wrought_iron', rod: true, spring: false, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'bronze', rod: true, spring: false, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'silver', rod: true, spring: false, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'brass', rod: true, spring: false, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'invar', rod: true, spring: false, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'soul_infused', rod: true, spring: false, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'zinc', rod: true, spring: false, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'potin', rod: true, spring: false, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'cobalt_brass', rod: true, spring: false, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'tin_alloy', rod: true, spring: false, small_spring: false, double_plate: true},
        {modID: 'gtceu', metal: 'nickel', rod: false, spring: false, small_spring: false, double_plate: true}
    ].forEach(material => {
        const {modID, metal, rod, spring, small_spring, double_plate} = material;
        vintage.polishing(`gtceu:${metal}_dust`, `${modID}:${metal}_ingot`).id(id(`polishing/${metal}_ingot`));
        if (rod) {
            vintage.turning(`gtceu:${metal}_rod`, `${modID}:${metal}_ingot`).id(id(`turning/${metal}_rod`));
        }
        if (spring) {
            vintage.coiling(`gtceu:${metal}_spring`, `gtceu:long_${metal}_rod`).id(id(`coiling/${metal}_spring`));
        }
        if (small_spring) {
            vintage.coiling(`gtceu:small_${metal}_spring`, `gtceu:${metal}_rod`).id(id(`coiling/small_${metal}_spring`));
        }
        if (double_plate) {// For some reason Item.of(`gtceu:${metal}_plate`, 2) does not work
            vintage.hammering(`gtceu:double_${metal}_plate`, [`gtceu:${metal}_plate`, `gtceu:${metal}_plate`]).hammerBlows(3).id(id(`hammering/double_${metal}_plate`));
        }
    });

    [
        {input: 'minecraft:brown_mushroom_block', output: '3x minecraft:brown_mushroom'},
        {input: 'minecraft:red_mushroom_block', output: '3x minecraft:red_mushroom'},
        {input: 'minecraft:bone', output: '2x minecraft:bone_meal'},
        {input: 'minecraft:gravel', output: 'minecraft:flint'},
        {input: 'minecraft:soul_sand', output: 'thermal_extra:soul_sand_dust'},
        {input: 'gtceu:antimony_ingot', output: 'gtceu:antimony_dust'},
        {input: 'gtceu:annealed_copper_ingot', output: 'gtceu:annealed_copper_dust'},
        {input: 'minecraft:charcoal', output: 'gtceu:charcoal_dust'},
        {input: 'minecraft:coal', output: 'gtceu:coal_dust'},
        {input: 'gtceu:flawless_coal_gem', output: '2x gtceu:coal_dust'},
        {input: 'gtceu:exquisite_coal_gem', output: '4x gtceu:coal_dust'},
        {input: 'gtceu:electrum_ingot', output: 'gtceu:electrum_dust'},
        {input: 'gtceu:coke_gem', output: 'gtceu:coke_dust'},
        {input: 'gtceu:flawless_coke_gem', output: '2x gtceu:coke_dust'},
        {input: 'gtceu:exquisite_coke_gem', output: '4x gtceu:coke_dust'},
        {input: 'gtceu:steel_ingot', output: 'gtceu:steel_dust'},
        {input: 'minecraft:wheat', output: 'gtceu:wheat_dust'},
        {input: 'minecraft:sand', output: 'gtceu:quartz_sand_dust'},
        {input: 'minecraft:flint', output: 'gtceu:flint_dust'},
        {input: 'minecraft:clay', output: 'gtceu:clay_dust'},
        {input: 'minecraft:bricks', output: 'gtceu:brick_dust'},
        {input: 'minecraft:clay_ball', output: 'gtceu:small_clay_dust'},
        {input: 'minecraft:brick', output: 'gtceu:small_brick_dust'}
    ].forEach(set => {
        const {input, output} = set;
        vintage.polishing(`${output}`, `${input}`).id(id(`polishing/${input.split(':')[1]}`));
    });

    vintage.centrifugation('3x gtceu:raw_rubber_dust', 'gtceu:sticky_resin').minimalRPM(64).id(id('centrifugation/sticky_resin'));
    event.recipes.create.mixing(Fluid.of('gtceu:rubber', 720), ['9x gtceu:raw_rubber_dust', 'gtceu:sulfur_dust']).heatRequirement('lowheated').id('start:create_mixing/rubber');;
    vintage.pressurizing('thermal:cured_rubber', Fluid.of('gtceu:rubber', 144)).heatRequirement('lowheated').id(id('centrifugation/cured_rubber'));

    // Create Ore Proc
    [// Main, secondary, tertiary
        {mainOre: 'copper', secOre: 'gold', terOre: 'nickel'},
        {mainOre: 'iron', secOre: 'nickel', terOre: 'tin'},
        {mainOre: 'magnetite', secOre: 'gold', terOre: 'gold'},
        {mainOre: 'sphalerite', secOre: 'gallium', terOre: 'sulfur'},
        {mainOre: 'tin', secOre: 'iron', terOre: 'zinc'},
        {mainOre: 'galena', secOre: 'silver', terOre: 'sulfur'},
        {mainOre: 'stibnite', secOre: 'antimony', terOre: 'sulfur'}
    ].forEach(matSet => {
        const {mainOre, secOre, terOre} = matSet;
        vintage.vibrating([`gtceu:impure_${mainOre}_dust`, Item.of(`gtceu:${secOre}_dust`).withChance(0.15)], `gtceu:crushed_${mainOre}_ore`).id(id(`vibrating/crushed_${mainOre}`));
        vintage.centrifugation([`gtceu:${mainOre}_dust`, Item.of(`gtceu:${secOre}_dust`).withChance(0.07)], `gtceu:impure_${mainOre}_dust`).minimalRPM(128).id(id(`centrifugation/impure_${mainOre}`));
        create.splashing([`gtceu:${mainOre}_dust`, Item.of(`gtceu:${terOre}_dust`).withChance(0.07)], `gtceu:impure_${mainOre}_dust`).id(id(`splashing/impure_${mainOre}`));

        create.splashing([`gtceu:purified_${mainOre}_ore`, Item.of(`gtceu:${secOre}_dust`).withChance(0.20)], `gtceu:crushed_${mainOre}_ore`).id(id(`splashing/crushed_${mainOre}`));
        vintage.vibrating([`gtceu:pure_${mainOre}_dust`, Item.of(`gtceu:${terOre}_dust`).withChance(0.15)], `gtceu:purified_${mainOre}_ore`).id(id(`vibrating/purified_${mainOre}`));
        vintage.centrifugation([`gtceu:${mainOre}_dust`, Item.of(`gtceu:${secOre}_dust`).withChance(0.07)], `gtceu:pure_${mainOre}_dust`).minimalRPM(128).id(id(`centrifugation/pure_${mainOre}`));
        create.splashing([`gtceu:${mainOre}_dust`, Item.of(`gtceu:${terOre}_dust`).withChance(0.07)], `gtceu:pure_${mainOre}_dust`).id(id(`splashing/pure_${mainOre}`));
    });

})});