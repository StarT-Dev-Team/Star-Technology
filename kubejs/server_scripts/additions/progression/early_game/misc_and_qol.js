ServerEvents.recipes((event) => {
    const id = global.id;

    event
        .shaped(Item.of('16x minecraft:stick'), ['L', 'L'], {
            L: '#minecraft:logs',
        })
        .id('start:shaped/bulk_stick');

    event
        .shaped(Item.of('4x minecraft:chest'), ['LLL', 'L L', 'LLL'], {
            L: '#minecraft:logs',
        })
        .id('start:shaped/bulk_chest');

    global.withModsLoaded('thermal', () => {
        event
            .shaped(Item.of('gtceu:rubber_plate'), ['H', 'R', 'R'], {
                H: '#forge:tools/hammers',
                R: 'thermal:cured_rubber',
            })
            .id('start:shaped/rubber_plate');

        event.replaceInput({ id: 'thermal:tools/satchel' }, '#thermal:rockwool', '#minecraft:wool');
    });

    event
        .shaped(Item.of('gtceu:wood_plate'), ['SSS'], {
            S: '#minecraft:wooden_slabs',
        })
        .id('start:shaped/wood_plate');

    event
        .shaped(Item.of('gtceu:treated_wood_plate'), ['SSS'], {
            S: 'gtceu:treated_wood_slab',
        })
        .id('start:shaped/treated_wood_plate');

    // glass tube shenanigans
    event
        .shaped(Item.of('2x gtceu:glass_tube'), ['   ', 'PPP', 'PPP'], {
            P: 'minecraft:glass_pane',
        })
        .id('start:shaped/glass_tube');

    event
        .shaped(Item.of('8x gtceu:compressed_fireclay'), ['DDD', 'DMD', 'DDD'], {
            D: 'gtceu:fireclay_dust',
            M: 'gtceu:brick_wooden_form',
        })
        .keepIngredient('gtceu:brick_wooden_form')
        .id('start:shaped/compressed_fireclay');

    global.withModsLoaded('kubejs_create', () => {
        global.withModsLoaded('thermal', () =>
            event.recipes.create
                .pressing('gtceu:rubber_plate', 'thermal:cured_rubber')
                .id('start:pressing/rubber_plate')
        );

        event.recipes.create
            .pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust')
            .id('start:pressing/compressed_fireclay');

        event.recipes.create
            .pressing('gtceu:compressed_clay', 'minecraft:clay_ball')
            .id('start:pressing/compressed_clay');
    });

    event.shapeless('4x minecraft:clay_ball', ['minecraft:clay']).id('start:shapeless/clay_decomp');

    event
        .shaped('8x gtceu:compressed_clay', ['CCC', 'CMC', 'CCC'], {
            C: 'minecraft:clay_ball',
            M: 'gtceu:brick_wooden_form',
        })
        .keepIngredient('gtceu:brick_wooden_form')
        .id('start:shaped/compressed_clay');

    global.withModsLoaded('thermal', () => {
        event
            .shaped(Item.of('thermal:redstone_servo', 1), ['RPR', ' I ', 'RPR'], {
                R: 'minecraft:redstone',
                P: 'gtceu:iron_plate',
                I: 'minecraft:iron_ingot',
            })
            .id('start:shaped/redstone_servo');

        event
            .shaped(Item.of('thermal:fluid_cell_frame'), ['BTB', 'TGT', 'BTB'], {
                B: 'gtceu:bronze_plate',
                T: 'gtceu:tin_plate',
                G: '#forge:glass',
            })
            .id('start:shaped/fluid_cell_frame');

        event.smelting('minecraft:slime_ball', 'thermal:slime_mushroom_spores').id('start:smelting/slitake');
    });

    event.remove({ id: 'minecraft:brick' });
    event.smelting('minecraft:brick', 'gtceu:compressed_clay').id('start:smelting/brick');

    event.campfireCooking('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot', 0, 400);

    event.campfireCooking('minecraft:glass', 'gtceu:glass_dust', 0, 300);

    event.shaped('gtceu:ulv_fluid_input', ['G', 'C', 'B'], {
        G: 'minecraft:glass',
        C: 'gtceu:bronze_machine_casing',
        B: 'minecraft:bucket',
    });

    event
        .shaped(Item.of('minecraft:moss_block'), ['BB', 'BB'], {
            B: 'kubejs:moss_ball',
        })
        .id('minecraft:moss_block');

    //pebble compressor recipes
    global.withModsLoaded('exnihilosequentia', () =>
        [
            'diorite',
            'blackstone',
            'basalt',
            'tuff',
            'deepslate',
            'dripstone',
            'granite',
            'calcite',
            'andesite',
            'stone',
        ].forEach((stone) => {
            let output = stone === 'dripstone' ? 'dripstone_block' : stone === 'stone' ? 'cobblestone' : stone;
            event.recipes.gtceu
                .compressor(id(`compress_${stone}_pebble`))
                .itemInputs(`4x exnihilosequentia:${stone}_pebble`)
                .itemOutputs(`minecraft:${output}`)
                .duration(50)
                .EUt(2);
        })
    );
});
