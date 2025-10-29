ServerEvents.recipes(event => {
    const id = global.id;

// === LARGE BARREL ===

    if (global.packmode !== 'hard'){
        (() => {   
    event.shaped(Item.of('gtceu:large_barrel'), [
        'PSP',
        'IBI',
        'PSP'
    ], {
        P: 'gtceu:treated_wood_planks',
        S: 'gtceu:treated_wood_rod',
        B: 'gtceu:ulv_barrel',
        I: 'gtceu:wrought_iron_plate'
    }).id('start:shaped/large_barrel');
    })()
    }

    const LargeBarItem = (item,fluid,dur,mod,output) => {

        event.recipes.gtceu.large_barrel(id(`${output}_large_barrel`))
            .itemInputs(item)
            .inputFluids(`${fluid} 250`)
            .itemOutputs(`${mod}:${output}`)
            .duration(dur);

    }

    LargeBarItem('exnihilosequentia:dust', 'minecraft:water', 5, 'minecraft', 'clay');
    LargeBarItem('minecraft:sand', 'exnihilosequentia:witch_water', 5, 'minecraft', 'soul_sand');
    LargeBarItem('minecraft:dirt', 'minecraft:water', 5, 'minecraft', 'mud');
    LargeBarItem('minecraft:red_mushroom_block', 'exnihilosequentia:witch_water', 10, 'minecraft', 'slime_block');
    LargeBarItem('minecraft:brown_mushroom_block', 'exnihilosequentia:witch_water', 10, 'minecraft', 'red_mushroom_block');
    LargeBarItem('exnihilosequentia:mycelium_spores', 'exnihilosequentia:witch_water', 10, 'minecraft', 'brown_mushroom_block');

    event.recipes.gtceu.large_barrel(id('witch_water'))
        .notConsumable('exnihilosequentia:mycelium_spores')
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:witch_water 1000')
        .duration(80);

    event.recipes.gtceu.large_barrel(id('slimeshroom_dupe'))
        .notConsumable('thermal:slime_mushroom_spores')
        .inputFluids('exnihilosequentia:witch_water 100')
        .chancedOutput('thermal:slime_mushroom_spores', 9500, 0)
        .duration(20);

    [
        'black','blue','brown','cyan','green','gray','lime','light_blue','light_gray',
        'magenta','orange','purple','red','white','yellow','pink'
    ].forEach(color => {   

        event.recipes.gtceu.large_barrel(id(`${color}_concrete`))
            .itemInputs(`minecraft:${color}_concrete_powder`)
            .inputFluids('minecraft:water 1000')
            .itemOutputs(`minecraft:${color}_concrete`)
            .duration(1);

    });

    // Mycelium => Leather
    event.recipes.gtceu.large_barrel(id('mycelium_growth_bonemeal'))
        .duration(600)
        .itemInputs('minecraft:bone_meal', 'exnihilosequentia:mycelium_spores')
        .inputFluids(`minecraft:water 500`)
        .itemOutputs('kubejs:mycelium_growth');
    // Mycelium Duping
    event.recipes.gtceu.large_barrel(id('mycelium_spores'))
        .duration(300)
        .notConsumable('minecraft:red_mushroom')
        .itemInputs('4x minecraft:dirt')
        .inputFluids(`exnihilosequentia:witch_water 750`)
        .chancedOutput('exnihilosequentia:mycelium_spores', 8500, 0);

// === LARGE STONE BARREL ===

    if (global.packmode !== 'hard'){
        (() => {   
    event.shaped(Item.of('gtceu:large_stone_barrel'), [
        'PSP',
        'IBI',
        'PSP'
    ], {
        P: 'minecraft:stone',
        S: 'gtceu:treated_wood_rod',
        B: 'gtceu:ulv_stone_barrel',
        I: 'gtceu:wrought_iron_plate'
    }).id('start:shaped/large_stone_barrel');
    })()
    }    

    event.recipes.gtceu.large_stone_barrel(id('lava_from_stones'))
        .itemInputs('#forge:stone')
        .notConsumable('minecraft:soul_campfire')
        .outputFluids('minecraft:lava 500')
        .duration(200);

    event.recipes.gtceu.large_stone_barrel(id('lava_from_cobblestones'))
        .itemInputs('#forge:cobblestone')
        .notConsumable('minecraft:soul_campfire')
        .outputFluids('minecraft:lava 500')
        .duration(200);

    event.recipes.gtceu.large_stone_barrel(id('obsidian'))
        .notConsumableFluid('minecraft:water 1000')
        .inputFluids('minecraft:lava 1000')
        .itemOutputs('minecraft:obsidian')
        .circuit(10)
        .duration(5);

    const LSB_Pebbles = (type, circuitType, aqueous, fluid_quantity) => {

        event.recipes.gtceu.large_stone_barrel(id(`${type}_pebbles`))
            .inputFluids(`minecraft:lava ${fluid_quantity}`, `${aqueous} ${fluid_quantity}`)
            .chancedOutput(`exnihilosequentia:${type}_pebble`, 6000, 0)
            .circuit(circuitType)
            .duration(1);

    }

    LSB_Pebbles('stone', 0, 'minecraft:water', 1);
    LSB_Pebbles('andesite', 1, 'minecraft:water', 1);
    LSB_Pebbles('diorite', 2, 'minecraft:water', 1);
    LSB_Pebbles('granite', 3, 'minecraft:water', 1);
    LSB_Pebbles('dripstone', 4, 'minecraft:water', 1);
    LSB_Pebbles('deepslate', 5, 'minecraft:water', 2);
    LSB_Pebbles('calcite', 6, 'minecraft:water', 1);
    LSB_Pebbles('tuff', 7, 'minecraft:water', 1);
    LSB_Pebbles('blackstone', 0, 'exnihilosequentia:witch_water', 1);
    LSB_Pebbles('basalt', 1, 'exnihilosequentia:witch_water', 1);

    // === INDUSTRIAL BARREL ===

    if (global.packmode !== 'hard'){(() => {   
    event.shaped(Item.of('gtceu:industrial_barrel'), [
        'LSL',
        'PEP', 
        'CHC'
    ], {
        L: 'gtceu:gold_single_cable',
        S: 'gtceu:kanthal_spring',
        P: 'gtceu:hv_electric_pump',
        E: 'gtceu:hv_emitter',
        C: '#gtceu:circuits/hv',
        H: 'gtceu:hv_machine_hull'
    }).id('start:shaped/industrial_barrel');
    })()};

    event.recipes.gtceu.industrial_barrel_magmatic(id('lava'))
        .itemInputs('#forge:cobblestone')
        .outputFluids('minecraft:lava 10000')
        .duration(1600)
        .EUt(GTValues.VHA[GTValues.LV]);

    const IndBar_Pebbles = (type, circuitType, aqueous, fluid_quantity) => {

        event.recipes.gtceu.industrial_barrel_magmatic(id(`${type}_pebbles`))
            .notConsumableFluid(`minecraft:lava ${fluid_quantity}`)
            .notConsumableFluid(`${aqueous} ${fluid_quantity}`)
            .itemOutputs(`64x exnihilosequentia:${type}_pebble`)
            .circuit(circuitType)
            .duration(1 * 64)
            .EUt(GTValues.VHA[GTValues.LV]);

    }

    IndBar_Pebbles('stone', 0, 'minecraft:water', 1);
    IndBar_Pebbles('andesite', 1, 'minecraft:water', 1);
    IndBar_Pebbles('diorite', 2, 'minecraft:water', 1);
    IndBar_Pebbles('granite', 3, 'minecraft:water', 1);
    IndBar_Pebbles('dripstone', 4, 'minecraft:water', 1);
    IndBar_Pebbles('deepslate', 5, 'minecraft:water', 2);
    IndBar_Pebbles('calcite', 6, 'minecraft:water', 1);
    IndBar_Pebbles('tuff', 7, 'minecraft:water', 1);
    IndBar_Pebbles('blackstone', 0, 'exnihilosequentia:witch_water', 1);
    IndBar_Pebbles('basalt', 1, 'exnihilosequentia:witch_water', 1);

    const IndBarItemAq = (item,fluid,dur,mod,output) => {

        event.recipes.gtceu.industrial_barrel_aqueous(id(`${output}_large_barrel`))
            .itemInputs(item)
            .inputFluids(`${fluid} 250`)
            .itemOutputs(`${mod}:${output}`)
            .duration(dur)
            .EUt(GTValues.VHA[GTValues.LV]);
    }

    IndBarItemAq('exnihilosequentia:dust', 'minecraft:water', 5, 'minecraft', 'clay');
    IndBarItemAq('minecraft:sand', 'exnihilosequentia:witch_water', 5, 'minecraft', 'soul_sand');
    IndBarItemAq('minecraft:dirt', 'minecraft:water', 5, 'minecraft', 'mud');
    IndBarItemAq('minecraft:red_mushroom_block', 'exnihilosequentia:witch_water', 10, 'minecraft', 'slime_block');
    IndBarItemAq('minecraft:brown_mushroom_block', 'exnihilosequentia:witch_water', 10, 'minecraft', 'red_mushroom_block');
    IndBarItemAq('exnihilosequentia:mycelium_spores', 'exnihilosequentia:witch_water', 10, 'minecraft', 'brown_mushroom_block');

    event.recipes.gtceu.industrial_barrel_aqueous(id(`crimson_nylium_spores`))
        .itemInputs('exnihilosequentia:mycelium_spores', 'mysticalagriculture:nether_agglomeratio')
        .inputFluids(`gtceu:nether_air 500`)
        .itemOutputs(`exnihilosequentia:crimson_nylium_spores`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu.industrial_barrel_aqueous(id(`warped_nylium_spores`))
        .itemInputs('exnihilosequentia:crimson_nylium_spores', 'gtceu:warped_dust')
        .inputFluids(`gtceu:ender_air 500`)
        .itemOutputs(`exnihilosequentia:warped_nylium_spores`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu.industrial_barrel_aqueous(id(`nether_wart_block`))
        .itemInputs('exnihilosequentia:crimson_nylium_spores')
        .inputFluids(`gtceu:fermented_biomass 500`)
        .itemOutputs(`minecraft:nether_wart_block`)
        .duration(160)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu.industrial_barrel_aqueous(id(`warped_wart_block`))
        .itemInputs('exnihilosequentia:warped_nylium_spores')
        .inputFluids(`gtceu:fermented_biomass 500`)
        .itemOutputs(`minecraft:warped_wart_block`)
        .duration(160)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.industrial_barrel_aqueous(id('witch_water'))
        .notConsumable('exnihilosequentia:mycelium_spores')
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:witch_water 1000')
        .duration(80)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.industrial_barrel_aqueous(id('sea_water'))
        .notConsumable('minecraft:sand')
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:sea_water 1000')
        .duration(80)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.industrial_barrel_aqueous(id('slimeshroom_dupe'))
        .notConsumable('thermal:slime_mushroom_spores')
        .inputFluids('exnihilosequentia:witch_water 100')
        .chancedOutput('thermal:slime_mushroom_spores', 9500, 0)
        .duration(20)
        .EUt(GTValues.VHA[GTValues.LV]);
      
    event.recipes.gtceu.industrial_barrel_aqueous(id('mycelium_growth_bonemeal'))
        .duration(600)
        .itemInputs('minecraft:bone_meal', 'exnihilosequentia:mycelium_spores')
        .inputFluids(`minecraft:water 500`)
        .itemOutputs('kubejs:mycelium_growth')
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.industrial_barrel_aqueous(id('mycelium_spores'))
        .duration(300)
        .notConsumable('minecraft:red_mushroom')
        .itemInputs('4x minecraft:dirt')
        .inputFluids(`exnihilosequentia:witch_water 750`)
        .chancedOutput('exnihilosequentia:mycelium_spores', 8500, 0)
        .EUt(GTValues.VHA[GTValues.LV]);

});
