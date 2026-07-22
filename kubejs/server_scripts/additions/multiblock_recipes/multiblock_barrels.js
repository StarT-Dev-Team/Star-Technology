ServerEvents.recipes((event) => {
    const id = global.id;

    // === LARGE BARREL ===
    /**
     * @param {string} item
     * @param {string} fluid
     * @param {number} dur
     * @param {string} mod
     * @param {string} output
     */
    const largeBarrelItem = (item, fluid, dur, mod, output) => {
        event.recipes.gtceu
            .large_barrel(id(`${output}_large_barrel`))
            .itemInputs(item)
            .inputFluids(`${fluid} 250`)
            .itemOutputs(`${mod}:${output}`)
            .duration(dur);
    };

    largeBarrelItem('exnihilosequentia:dust', 'minecraft:water', 5, 'minecraft', 'clay');
    largeBarrelItem('minecraft:sand', 'exnihilosequentia:witch_water', 5, 'minecraft', 'soul_sand');
    largeBarrelItem('minecraft:dirt', 'minecraft:water', 5, 'minecraft', 'mud');
    largeBarrelItem('minecraft:red_mushroom_block', 'exnihilosequentia:witch_water', 10, 'minecraft', 'slime_block');
    largeBarrelItem(
        'minecraft:brown_mushroom_block',
        'exnihilosequentia:witch_water',
        10,
        'minecraft',
        'red_mushroom_block'
    );

    event.recipes.gtceu
        .large_barrel(id('witch_water'))
        .notConsumable('exnihilosequentia:mycelium_spores')
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:witch_water 1000')
        .duration(80);

    event.recipes.gtceu
        .large_barrel(id('slimeshroom_dupe'))
        .notConsumable('thermal:slime_mushroom_spores')
        .inputFluids('exnihilosequentia:witch_water 100')
        .chancedOutput('thermal:slime_mushroom_spores', 9500, 0)
        .duration(20);

    [
        'black',
        'blue',
        'brown',
        'cyan',
        'green',
        'gray',
        'lime',
        'light_blue',
        'light_gray',
        'magenta',
        'orange',
        'purple',
        'red',
        'white',
        'yellow',
        'pink',
    ].forEach((color) => {
        event.recipes.gtceu
            .large_barrel(id(`${color}_concrete`))
            .itemInputs(`minecraft:${color}_concrete_powder`)
            .inputFluids('minecraft:water 1000')
            .itemOutputs(`minecraft:${color}_concrete`)
            .duration(1);
    });

    event.recipes.gtceu
        .large_barrel(id('brown_mushroom_block_large_barrel'))
        .itemInputs('exnihilosequentia:mycelium_spores')
        .notConsumable('minecraft:brown_mushroom')
        .inputFluids('exnihilosequentia:witch_water 250')
        .itemOutputs('minecraft:brown_mushroom_block')
        .duration(10);

    // Mycelium => Leather
    event.recipes.gtceu
        .large_barrel(id('mycelium_growth_bonemeal'))
        .duration(600)
        .itemInputs('minecraft:bone_meal', 'exnihilosequentia:mycelium_spores')
        .inputFluids('exnihilosequentia:witch_water 250')
        .itemOutputs('kubejs:mycelium_growth');

    // Mycelium Duping
    event.recipes.gtceu
        .large_barrel(id('mycelium_spores'))
        .duration(300)
        .itemInputs('4x minecraft:dirt')
        .notConsumable('minecraft:red_mushroom')
        .inputFluids('exnihilosequentia:witch_water 750')
        .chancedOutput('exnihilosequentia:mycelium_spores', 8500, 0);

    // === LARGE STONE BARREL ===

    event.recipes.gtceu
        .large_stone_barrel(id('lava_from_stones'))
        .itemInputs('#forge:stone')
        .notConsumable('minecraft:soul_campfire')
        .outputFluids('minecraft:lava 500')
        .duration(200);

    event.recipes.gtceu
        .large_stone_barrel(id('lava_from_cobblestones'))
        .itemInputs('#forge:cobblestone')
        .notConsumable('minecraft:soul_campfire')
        .outputFluids('minecraft:lava 500')
        .duration(200);

    event.recipes.gtceu
        .large_stone_barrel(id('obsidian'))
        .notConsumableFluid('minecraft:water 1000')
        .notConsumable('minecraft:obsidian')
        .inputFluids('minecraft:lava 1000')
        .itemOutputs('minecraft:obsidian')
        .duration(5);

    /**
     * @param {string} type
     * @param {string} aqueous
     */
    const pebblesLargeStoneBarrel = (type, aqueous) => {
        event.recipes.gtceu
            .large_stone_barrel(id(`${type}_pebbles`))
            .notConsumable(`1x exnihilosequentia:${type}_pebble`)
            .notConsumableFluid('minecraft:lava 1')
            .notConsumableFluid(`${aqueous} 1`)
            .chancedOutput(`exnihilosequentia:${type}_pebble`, 6000, 0)
            .duration(1);
    };

    pebblesLargeStoneBarrel('stone', 'minecraft:water');
    pebblesLargeStoneBarrel('andesite', 'minecraft:water');
    pebblesLargeStoneBarrel('diorite', 'minecraft:water');
    pebblesLargeStoneBarrel('granite', 'minecraft:water');
    pebblesLargeStoneBarrel('dripstone', 'minecraft:water');
    pebblesLargeStoneBarrel('deepslate', 'minecraft:water');
    pebblesLargeStoneBarrel('calcite', 'minecraft:water');
    pebblesLargeStoneBarrel('tuff', 'minecraft:water');
    pebblesLargeStoneBarrel('blackstone', 'exnihilosequentia:witch_water');
    pebblesLargeStoneBarrel('basalt', 'exnihilosequentia:witch_water');

    // === INDUSTRIAL BARREL ===

    event.recipes.gtceu
        .industrial_barrel_magmatic(id('lava'))
        .itemInputs('#forge:cobblestone')
        .outputFluids('minecraft:lava 10000')
        .duration(1600)
        .EUtVHA(LV);

    /**
     * @param {string} type
     * @param {string} aqueous
     */
    const industrialBarrelPebbles = (type, aqueous) => {
        event.recipes.gtceu
            .industrial_barrel_magmatic(id(`${type}_pebbles`))
            .notConsumable(`1x exnihilosequentia:${type}_pebble`)
            .notConsumableFluid('minecraft:lava 1')
            .notConsumableFluid(`${aqueous} 1`)
            .itemOutputs(`64x exnihilosequentia:${type}_pebble`)
            .duration(1 * 64)
            .EUtVHA(LV);
    };

    industrialBarrelPebbles('stone', 'minecraft:water');
    industrialBarrelPebbles('andesite', 'minecraft:water');
    industrialBarrelPebbles('diorite', 'minecraft:water');
    industrialBarrelPebbles('granite', 'minecraft:water');
    industrialBarrelPebbles('dripstone', 'minecraft:water');
    industrialBarrelPebbles('deepslate', 'minecraft:water');
    industrialBarrelPebbles('calcite', 'minecraft:water');
    industrialBarrelPebbles('tuff', 'minecraft:water');
    industrialBarrelPebbles('blackstone', 'exnihilosequentia:witch_water');
    industrialBarrelPebbles('basalt', 'exnihilosequentia:witch_water');

    /**
     * @param {string} item
     * @param {string} fluid
     * @param {number} dur
     * @param {string} mod
     * @param {string} output
     */
    const industrialBarrelItemAqueous = (item, fluid, dur, mod, output) => {
        event.recipes.gtceu
            .industrial_barrel_aqueous(id(`${output}_large_barrel`))
            .itemInputs(item)
            .inputFluids(`${fluid} 250`)
            .itemOutputs(`${mod}:${output}`)
            .duration(dur)
            .EUtVHA(LV);
    };

    industrialBarrelItemAqueous('exnihilosequentia:dust', 'minecraft:water', 5, 'minecraft', 'clay');
    industrialBarrelItemAqueous('minecraft:sand', 'exnihilosequentia:witch_water', 5, 'minecraft', 'soul_sand');
    industrialBarrelItemAqueous('minecraft:dirt', 'minecraft:water', 5, 'minecraft', 'mud');
    industrialBarrelItemAqueous(
        'minecraft:red_mushroom_block',
        'exnihilosequentia:witch_water',
        10,
        'minecraft',
        'slime_block'
    );
    industrialBarrelItemAqueous(
        'minecraft:brown_mushroom_block',
        'exnihilosequentia:witch_water',
        10,
        'minecraft',
        'red_mushroom_block'
    );

    event.recipes.gtceu
        .industrial_barrel_aqueous(id('brown_mushroom_block_large_barrel'))
        .itemInputs('exnihilosequentia:mycelium_spores')
        .notConsumable('minecraft:brown_mushroom')
        .inputFluids('exnihilosequentia:witch_water 250')
        .itemOutputs('minecraft:brown_mushroom_block')
        .duration(10)
        .EUtVHA(LV);

    event.recipes.gtceu
        .industrial_barrel_aqueous(id('crimson_nylium_spores'))
        .itemInputs('exnihilosequentia:mycelium_spores', 'gtceu:netherrack_dust')
        .inputFluids('gtceu:nether_air 500')
        .itemOutputs('exnihilosequentia:crimson_nylium_spores')
        .duration(200)
        .EUtVHA(IV);

    event.recipes.gtceu
        .industrial_barrel_aqueous(id('warped_nylium_spores'))
        .itemInputs('exnihilosequentia:crimson_nylium_spores', 'gtceu:warped_dust')
        .inputFluids('gtceu:ender_air 500')
        .itemOutputs('exnihilosequentia:warped_nylium_spores')
        .duration(200)
        .EUtVHA(IV);

    event.recipes.gtceu
        .industrial_barrel_aqueous(id('nether_wart_block'))
        .itemInputs('exnihilosequentia:crimson_nylium_spores')
        .inputFluids('gtceu:fermented_biomass 500')
        .itemOutputs('minecraft:nether_wart_block')
        .duration(160)
        .EUtVHA(IV);

    event.recipes.gtceu
        .industrial_barrel_aqueous(id('warped_wart_block'))
        .itemInputs('exnihilosequentia:warped_nylium_spores')
        .inputFluids('gtceu:fermented_biomass 500')
        .itemOutputs('minecraft:warped_wart_block')
        .duration(160)
        .EUtVHA(LuV);

    event.recipes.gtceu
        .industrial_barrel_aqueous(id('witch_water'))
        .notConsumable('exnihilosequentia:mycelium_spores')
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:witch_water 1000')
        .duration(80)
        .EUtVHA(LV);

    event.recipes.gtceu
        .industrial_barrel_aqueous(id('sea_water'))
        .notConsumable('minecraft:sand')
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:sea_water 1000')
        .duration(80)
        .EUtVHA(LV);

    event.recipes.gtceu
        .industrial_barrel_aqueous(id('slimeshroom_dupe'))
        .notConsumable('thermal:slime_mushroom_spores')
        .inputFluids('exnihilosequentia:witch_water 100')
        .chancedOutput('thermal:slime_mushroom_spores', 9500, 0)
        .duration(20)
        .EUtVHA(LV);

    event.recipes.gtceu
        .industrial_barrel_aqueous(id('mycelium_growth_bonemeal'))
        .duration(600)
        .itemInputs('minecraft:bone_meal', 'exnihilosequentia:mycelium_spores')
        .inputFluids('minecraft:water 500')
        .itemOutputs('kubejs:mycelium_growth')
        .EUtVHA(LV);

    event.recipes.gtceu
        .industrial_barrel_aqueous(id('mycelium_spores'))
        .duration(300)
        .notConsumable('minecraft:red_mushroom')
        .itemInputs('4x minecraft:dirt')
        .inputFluids('exnihilosequentia:witch_water 750')
        .chancedOutput('exnihilosequentia:mycelium_spores', 8500, 0)
        .EUtVHA(LV);
});
