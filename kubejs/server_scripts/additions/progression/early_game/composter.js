ServerEvents.recipes((event) => {
    const id = global.id;
    const isModLoaded = global.withModsLoaded;

    event.recipes.gtceu
        .shaped('gtceu:advanced_composter', ['PRP', 'PGP', 'ISI'], {
            P: 'gtceu:treated_wood_slab',
            G: 'minecraft:glass',
            R: 'gtceu:iron_gear',
            I: 'gtceu:iron_plate',
            S: 'thermal:redstone_servo',
        })
        .id('start:shaped/advanced_composter');

    event.recipes.gtceu
        .shaped('gtceu:composting_factory', ['AAB', 'BCD', 'EFE'], {
            A: '#gtceu:circuits/iv',
            B: 'gtceu:iv_electric_piston',
            C: 'gtceu:advanced_composter',
            D: 'gtceu:iv_conveyor_module',
            E: 'gtceu:tungsten_single_cable',
            F: 'gtceu:iv_electric_motor',
        })
        .id('start:shaped/composting_factory')
        .addMaterialInfo();

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

    const compost30 = [
        '#forge:seeds',
        '#minecraft:saplings',
        '#minecraft:leaves',
        '#minecraft:fox_food',
        'minecraft:seagrass',
        'minecraft:pink_petals',
        'minecraft:dried_kelp',
        'minecraft:pitcher_pod',
        'minecraft:mangrove_roots',
        'minecraft:hanging_roots',
        'minecraft:grass',
        'minecraft:kelp',
        'minecraft:small_dripleaf',
        'minecraft:moss_carpet',
        'minecraft:torchflower_seeds',
    ];

    const compost50 = [
        'minecraft:tall_grass',
        'minecraft:vine',
        'minecraft:cactus',
        'minecraft:nether_sprouts',
        'minecraft:sugar_cane',
        'minecraft:twisting_vines',
        'minecraft:glow_lichen',
        'minecraft:weeping_vines',
        'minecraft:melon_slice',
    ];

    const compost65 = [
        '#forge:mushrooms',
        'minecraft:melon',
        'minecraft:shroomlight',
        'minecraft:lilac',
        'minecraft:dandelion',
        'minecraft:sunflower',
        'minecraft:pumpkin',
        'minecraft:apple',
        'minecraft:crimson_roots',
        'minecraft:orange_tulip',
        'minecraft:fern',
        'minecraft:pink_tulip',
        'minecraft:carved_pumpkin',
        'minecraft:moss_block',
        'minecraft:lily_of_the_valley',
        'minecraft:cocoa_beans',
        'minecraft:blue_orchid',
        'minecraft:rose_bush',
        'minecraft:lily_pad',
        'minecraft:azure_bluet',
        'minecraft:sea_pickle',
        'minecraft:crimson_fungus',
        'minecraft:warped_roots',
        'minecraft:spore_blossom',
        'minecraft:big_dripleaf',
        'minecraft:wheat',
        'minecraft:peony',
        'minecraft:nether_wart',
        'minecraft:large_fern',
        'minecraft:cornflower',
        'minecraft:red_tulip',
        'minecraft:poppy',
        'minecraft:mushroom_stem',
        'minecraft:warped_fungus',
        'minecraft:wither_rose',
        'minecraft:allium',
        'minecraft:oxeye_daisy',
        'minecraft:white_tulip',
    ];

    const compost85 = [
        'minecraft:hay_block',
        'minecraft:pitcher_plant',
        'minecraft:brown_mushroom_block',
        'minecraft:nether_wart_block',
        'minecraft:baked_potato',
        'minecraft:warped_wart_block',
        'minecraft:red_mushroom_block',
        'minecraft:bread',
        'minecraft:torchflower',
        'minecraft:cookie',
    ];

    const compost100 = ['minecraft:cake', 'minecraft:pumpkin_pie'];

    isModLoaded('farmersdelight', () => {
        compost30.push(
            'farmersdelight:straw',
            'farmersdelight:sandy_shrub',
            'farmersdelight:tree_bark',
            'farmersdelight:rice_panicle'
        );

        compost50.push('farmersdelight:kelp_roll_slice', 'farmersdelight:pumpkin_slice', 'farmersdelight:cabbage_leaf');

        compost65.push('#farmersdelight:wild_crops', 'farmersdelight:cabbage', 'farmersdelight:pie_crust', '#forge:vegetables');

        compost85.push(
            'farmersdelight:rice_bale',
            'farmersdelight:cake_slice',
            'farmersdelight:sweet_berry_cookie',
            'farmersdelight:rotten_tomato',
            'farmersdelight:honey_cookie',
            'farmersdelight:kelp_roll',
            'farmersdelight:apple_pie_slice',
            'farmersdelight:chocolate_pie_slice',
            'farmersdelight:sweet_berry_cheesecake_slice',
            'farmersdelight:raw_pasta'
        );

        compost100.push(
            'farmersdelight:stuffed_pumpkin_block',
            'farmersdelight:brown_mushroom_colony',
            'farmersdelight:apple_pie',
            'farmersdelight:dumplings',
            'farmersdelight:red_mushroom_colony',
            'farmersdelight:chocolate_pie',
            'farmersdelight:sweet_berry_cheesecake'
        );
    });

    isModLoaded('thermal', () => {
        compost50.push('thermal:frost_melon_slice');

        compost65.push(
            'thermal:amaranth',
            'thermal:green_bean',
            'thermal:sadiroot',
            'thermal:flax',
            'thermal:spinach',
            'thermal:eggplant',
            'thermal:barley',
            'thermal:peanut',
            'thermal:corn',
            'thermal:frost_melon',
            'thermal:rice',
            'thermal:radish',
            'thermal:bell_pepper',
            'thermal:tea',
            'thermal:strawberry',
            '#forge:crops/onion',
            '#forge:crops/tomato'
        );
    });

    isModLoaded('exnihilosequentia', () =>
        compost100.push(
            'exnihilosequentia:cooked_silkworm',
            'exnihilosequentia:grass_seeds',
            'exnihilosequentia:mycelium_spores',
            'exnihilosequentia:silkworm'
        )
    );

    compost30.forEach((organic) => {
        composting(3000, organic);
    });

    compost50.forEach((organic) => {
        composting(5000, organic);
    });

    compost65.forEach((organic) => {
        composting(6500, organic);
    });

    compost85.forEach((organic) => {
        composting(8500, organic);
    });

    compost100.forEach((organic) => {
        composting(10000, organic);
    });
});
