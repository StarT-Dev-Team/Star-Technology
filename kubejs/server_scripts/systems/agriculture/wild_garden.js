ServerEvents.recipes((event) => {
    const id = global.id;
    const isModLoaded = global.withModsLoaded;

    event.recipes.gtceu
        .wild_garden(id('flowers'))
        .itemInputs('minecraft:bone_meal')
        .chancedOutput('minecraft:dandelion', 800, 200)
        .chancedOutput('minecraft:poppy', 800, 200)
        .chancedOutput('minecraft:blue_orchid', 800, 200)
        .chancedOutput('minecraft:allium', 800, 200)
        .chancedOutput('minecraft:azure_bluet', 800, 200)
        .chancedOutput('minecraft:red_tulip', 800, 200)
        .chancedOutput('minecraft:orange_tulip', 800, 200)
        .chancedOutput('minecraft:white_tulip', 800, 200)
        .chancedOutput('minecraft:pink_tulip', 800, 200)
        .chancedOutput('minecraft:oxeye_daisy', 800, 200)
        .chancedOutput('minecraft:cornflower', 800, 200)
        .chancedOutput('minecraft:lily_of_the_valley', 800, 200)
        .duration(100)
        .EUt(global.vha['lv'])
        .circuit(0);

    event.recipes.gtceu
        .wild_garden(id('tall_flowers_and_wither_rose'))
        .itemInputs('minecraft:bone_meal')
        .chancedOutput('minecraft:torchflower_seeds', 200, 200)
        .chancedOutput('minecraft:pitcher_pod', 200, 200)
        .chancedOutput('minecraft:lilac', 800, 200)
        .chancedOutput('minecraft:rose_bush', 800, 200)
        .chancedOutput('minecraft:peony', 800, 200)
        .chancedOutput('minecraft:sunflower', 800, 200)
        .chancedOutput('minecraft:wither_rose', 200, 200)
        .duration(100)
        .EUt(global.vha['lv'])
        .circuit(1);

    event.recipes.gtceu
        .wild_garden(id('sea_crops'))
        .itemInputs('minecraft:bone_meal')
        .chancedOutput('minecraft:seagrass', 800, 200)
        .chancedOutput('minecraft:kelp', 800, 200)
        .chancedOutput('minecraft:sea_pickle', 800, 200)
        .chancedOutput('minecraft:lily_pad', 800, 200)
        .duration(100)
        .EUt(global.vha['lv'])
        .circuit(2);

    isModLoaded('farmersdelight', () => {
        event.recipes.gtceu
            .wild_garden(id('wild_crops'))
            .itemInputs('minecraft:bone_meal')
            .chancedOutput('minecraft:glow_berries', 500, 200)
            .chancedOutput('farmersdelight:wild_beetroots', 800, 200)
            .chancedOutput('farmersdelight:wild_cabbages', 800, 200)
            .chancedOutput('farmersdelight:wild_tomatoes', 800, 200)
            .chancedOutput('farmersdelight:wild_onions', 800, 200)
            .chancedOutput('farmersdelight:wild_rice', 800, 200)
            .duration(100)
            .EUt(global.vha['lv'])
            .circuit(3);
    });

    isModLoaded('thermal', () => {
        event.recipes.gtceu
            .wild_garden(id('thermal_crops_1'))
            .itemInputs('minecraft:bone_meal')
            .chancedOutput('thermal:barley_seeds', 800, 200)
            .chancedOutput('thermal:corn_seeds', 800, 200)
            .chancedOutput('thermal:onion_seeds', 800, 200)
            .chancedOutput('thermal:radish_seeds', 800, 200)
            .chancedOutput('thermal:rice_seeds', 800, 200)
            .chancedOutput('thermal:spinach_seeds', 800, 200)
            .chancedOutput('thermal:bell_pepper_seeds', 800, 200)
            .chancedOutput('thermal:eggplant_seeds', 800, 200)
            .chancedOutput('thermal:green_bean_seeds', 800, 200)
            .chancedOutput('thermal:strawberry_seeds', 800, 200)
            .chancedOutput('thermal:tomato_seeds', 800, 200)
            .duration(100)
            .EUt(global.vha['lv'])
            .circuit(4);

        event.recipes.gtceu
            .wild_garden(id('thermal_crops_2'))
            .itemInputs('minecraft:bone_meal')
            .chancedOutput('thermal:amaranth_seeds', 800, 200)
            .chancedOutput('thermal:sadiroot_seeds', 800, 200)
            .chancedOutput('thermal:peanut_seeds', 800, 200)
            .chancedOutput('thermal:coffee_seeds', 800, 200)
            .chancedOutput('thermal:hops_seeds', 800, 200)
            .chancedOutput('thermal:tea_seeds', 800, 200)
            .chancedOutput('thermal:frost_melon_seeds', 200, 200)
            .duration(100)
            .EUt(global.vha['lv'])
            .circuit(5);
    });
});
