ServerEvents.recipes((event) => {
    const id = global.id;

    event
        .shaped('gtceu:ulv_advanced_composter', ['PRP', 'PGP', 'ISI'], {
            P: 'gtceu:treated_wood_slab',
            G: 'minecraft:glass',
            R: 'gtceu:iron_gear',
            I: 'gtceu:iron_plate',
            S: 'thermal:redstone_servo',
        })
        .id('start:shaped/ulv_advanced_composter');

    event
        .shaped('gtceu:composting_factory', ['AAB', 'BCD', 'EFE'], {
            A: '#gtceu:circuits/iv',
            B: 'gtceu:iv_electric_piston',
            C: 'gtceu:ulv_advanced_composter',
            D: 'gtceu:iv_conveyor_module',
            E: 'gtceu:tungsten_single_cable',
            F: 'gtceu:iv_electric_motor',
        })
        .id('start:shaped/composting_factory');

    /**
     * @param {number} odds
     * @param {string} fuel
     */
    const composting = (odds, fuel) => {
        event.recipes.gtceu
            .composting(id(fuel.split(':')[1]))
            .itemInputs(`${fuel}`)
            .chancedOutput('minecraft:bone_meal', odds, 0)
            .duration(42);

        event.recipes.gtceu
            .composting_factory(id(fuel.split(':')[1]))
            .itemInputs(`${fuel}`)
            .chancedOutput('minecraft:bone_meal', odds, 0)
            .duration(42)
            .EUt(7);
    };

    // 30%
    [
        '#minecraft:fox_food',
        'farmersdelight:straw',
        'farmersdelight:sandy_shrub',
        'minecraft:seagrass',
        'minecraft:pink_petals',
        'minecraft:dried_kelp',
        'minecraft:pitcher_pod',
        'minecraft:mangrove_roots',
        'minecraft:hanging_roots',
        'minecraft:grass',
        'minecraft:kelp',
        'minecraft:small_dripleaf',
        'farmersdelight:tree_bark',
        'farmersdelight:rice_panicle',
        'minecraft:moss_carpet',
        'minecraft:torchflower_seeds',
        '#minecraft:saplings',
        '#minecraft:leaves',
        '#forge:seeds',
    ].forEach((organic) => {
        composting(3000, organic);
    });

    // 50%
    [
        'minecraft:tall_grass',
        'minecraft:vine',
        'minecraft:cactus',
        'farmersdelight:kelp_roll_slice',
        'minecraft:nether_sprouts',
        'minecraft:sugar_cane',
        'minecraft:twisting_vines',
        'farmersdelight:pumpkin_slice',
        'minecraft:glow_lichen',
        'farmersdelight:cabbage_leaf',
        'minecraft:weeping_vines',
        'thermal:frost_melon_slice',
        'minecraft:melon_slice',
    ].forEach((organic) => {
        composting(5000, organic);
    });

    // 65%
    [
        '#farmersdelight:wild_crops',
        '#forge:vegetables',
        '#forge:mushrooms',
        '#forge:crops/onion',
        '#forge:crops/tomato',
        'minecraft:melon',
        'minecraft:shroomlight',
        'minecraft:lilac',
        'thermal:amaranth',
        'minecraft:dandelion',
        'thermal:green_bean',
        'farmersdelight:cabbage',
        'thermal:sadiroot',
        'minecraft:sunflower',
        'minecraft:pumpkin',
        'thermal:flax',
        'minecraft:apple',
        'minecraft:crimson_roots',
        'minecraft:orange_tulip',
        'thermal:spinach',
        'minecraft:fern',
        'thermal:eggplant',
        'thermal:barley',
        'minecraft:pink_tulip',
        'thermal:peanut',
        'minecraft:carved_pumpkin',
        'minecraft:moss_block',
        'thermal:corn',
        'minecraft:lily_of_the_valley',
        'minecraft:cocoa_beans',
        'thermal:frost_melon',
        'minecraft:blue_orchid',
        'minecraft:rose_bush',
        'minecraft:lily_pad',
        'minecraft:azure_bluet',
        'minecraft:sea_pickle',
        'minecraft:crimson_fungus',
        'thermal:rice',
        'thermal:radish',
        'thermal:bell_pepper',
        'minecraft:warped_roots',
        'thermal:tea',
        'minecraft:spore_blossom',
        'minecraft:big_dripleaf',
        'thermal:strawberry',
        'minecraft:wheat',
        'minecraft:peony',
        'minecraft:nether_wart',
        'minecraft:large_fern',
        'farmersdelight:pie_crust',
        'minecraft:cornflower',
        'minecraft:red_tulip',
        'minecraft:poppy',
        'minecraft:mushroom_stem',
        'minecraft:warped_fungus',
        'minecraft:wither_rose',
        'minecraft:allium',
        'minecraft:oxeye_daisy',
        'minecraft:white_tulip',
    ].forEach((organic) => {
        composting(6500, organic);
    });

    // 85%
    [
        'farmersdelight:rice_bale',
        'farmersdelight:cake_slice',
        'farmersdelight:sweet_berry_cookie',
        'minecraft:hay_block',
        'minecraft:pitcher_plant',
        'minecraft:brown_mushroom_block',
        'minecraft:nether_wart_block',
        'minecraft:baked_potato',
        'minecraft:warped_wart_block',
        'farmersdelight:rotten_tomato',
        'farmersdelight:honey_cookie',
        'minecraft:red_mushroom_block',
        'farmersdelight:kelp_roll',
        'minecraft:bread',
        'minecraft:torchflower',
        'farmersdelight:apple_pie_slice',
        'farmersdelight:chocolate_pie_slice',
        'farmersdelight:sweet_berry_cheesecake_slice',
        'farmersdelight:raw_pasta',
        'minecraft:cookie',
    ].forEach((organic) => {
        composting(8500, organic);
    });

    // 100%
    [
        'farmersdelight:stuffed_pumpkin_block',
        'exnihilosequentia:cooked_silkworm',
        'exnihilosequentia:grass_seeds',
        'minecraft:cake',
        'exnihilosequentia:mycelium_spores',
        'farmersdelight:brown_mushroom_colony',
        'farmersdelight:apple_pie',
        'exnihilosequentia:silkworm',
        'farmersdelight:dumplings',
        'farmersdelight:red_mushroom_colony',
        'farmersdelight:chocolate_pie',
        'farmersdelight:sweet_berry_cheesecake',
        'minecraft:pumpkin_pie',
    ].forEach((organic) => {
        composting(10000, organic);
    });
});
