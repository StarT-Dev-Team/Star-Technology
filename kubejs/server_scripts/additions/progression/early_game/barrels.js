ServerEvents.recipes((event) => {
    const id = global.id;
    const isModLoaded = global.withModsLoaded;

    event
        .shaped('gtceu:barrel', ['ADA', 'ACA', 'ADA'], {
            A: '#forge:stripped_logs',
            C: 'woodenbucket:wooden_bucket',
            D: '#minecraft:wooden_slabs',
        })
        .id('start:shaped/barrel');

    event
        .shaped('gtceu:stone_barrel', ['ADA', 'ACA', 'ADA'], {
            A: '#forge:stone',
            C: 'minecraft:bucket',
            D: 'minecraft:stone_slab',
        })
        .id('start:shaped/stone_barrel');

    /**
     * @param {string} output
     * @param {string} fluidcons
     * @param {string} nconsfluid
     * @param {number} circ
     */
    const sbarrel = (output, fluidcons, nconsfluid, circ) => {
        event.recipes.gtceu
            .stone_barrel(id(`${output}`))
            .notConsumableFluid(`${nconsfluid}`)
            .inputFluids(`${fluidcons} 1000`)
            .itemOutputs(`minecraft:${output}`)
            .circuit(circ)
            .duration(15);
    };

    sbarrel('cobblestone', 'minecraft:water', 'minecraft:lava', 0);
    sbarrel('obsidian', 'minecraft:lava', 'minecraft:water', 10);

    event.recipes.gtceu
        .stone_barrel(id('tempered_glass'))
        .itemInputs('minecraft:glass')
        .inputFluids('minecraft:lava 1000')
        .itemOutputs('gtceu:tempered_glass')
        .duration(600);

    /**
     * @param {string} output
     * @param {string} item
     * @param {string} fluid
     */
    const barrel = (output, item, fluid) => {
        event.recipes.gtceu
            .barrel(id(`${output.split(':')[1]}`))
            .itemInputs(`${item}`)
            .inputFluids(`${fluid} 1000`)
            .itemOutputs(`${output}`)
            .duration(15);
    };

    isModLoaded('exnihilosequentia', () => {
        sbarrel('blackstone', 'exnihilosequentia:witch_water', 'minecraft:lava', 0);

        barrel('minecraft:clay', 'exnihilosequentia:dust', 'minecraft:water');
        barrel('minecraft:pointed_dripstone', 'exnihilosequentia:crushed_dripstone', 'minecraft:water');
        barrel('minecraft:brown_mushroom_block', 'exnihilosequentia:mycelium_spores', 'exnihilosequentia:witch_water');
        barrel('minecraft:red_mushroom_block', 'minecraft:brown_mushroom_block', 'exnihilosequentia:witch_water');
        barrel('minecraft:soul_sand', '#minecraft:smelts_to_glass', 'exnihilosequentia:witch_water');
        barrel('minecraft:soul_soil', 'minecraft:coarse_dirt', 'exnihilosequentia:witch_water');
        barrel('minecraft:blackstone', 'minecraft:cobblestone', 'exnihilosequentia:witch_water');
        barrel('minecraft:slime_block', 'minecraft:red_mushroom_block', 'exnihilosequentia:witch_water');
        barrel('minecraft:tube_coral_block', 'exnihilosequentia:tube_coral_larva', 'exnihilosequentia:sea_water');
        barrel('minecraft:brain_coral_block', 'exnihilosequentia:brain_coral_larva', 'exnihilosequentia:sea_water');
        barrel('minecraft:bubble_coral_block', 'exnihilosequentia:bubble_coral_larva', 'exnihilosequentia:sea_water');
        barrel('minecraft:fire_coral_block', 'exnihilosequentia:fire_coral_larva', 'exnihilosequentia:sea_water');
        barrel('minecraft:horn_coral_block', 'exnihilosequentia:horn_coral_larva', 'exnihilosequentia:sea_water');
    });

    barrel('minecraft:mud', 'minecraft:dirt', 'minecraft:water');

    const compost = [
        '#forge:seeds',
        '#forge:crops',
        '#minecraft:flowers',
        '#minecraft:saplings',
        '#minecraft:leaves',
        'minecraft:hanging_roots',
        'minecraft:pumpkin_pie',
        'minecraft:string',
        'minecraft:apple',
        'minecraft:pumpkin',
        'minecraft:mangrove_roots',
        'minecraft:big_dripleaf',
        'minecraft:spore_blossom',
        'minecraft:vine',
        'minecraft:lily_pad',
        'minecraft:sweet_berries',
        'minecraft:red_mushroom',
        'minecraft:brown_mushroom',
        'minecraft:spider_eye',
        'minecraft:melon_slice',
        'minecraft:sugar_cane',
        'minecraft:fern',
        'minecraft:bamboo',
        'minecraft:bread',
        'minecraft:glow_berries',
        'minecraft:cactus',
    ];

    /**
     * @param {string} output
     * @param {string} ncItem
     */
    const transformation = (output, ncItem) => {
        event.recipes.gtceu
            .barrel_transformation(id(`${output.split(':')[1]}`))
            .notConsumable(`${ncItem}`)
            .inputFluids('minecraft:water 1000')
            .outputFluids(`${output} 1000`)
            .duration(400);
    };

    isModLoaded('exnihilosequentia', () => {
        compost.push(
            'exnihilosequentia:grass_seeds',
            'exnihilosequentia:mycelium_spores',
            'exnihilosequentia:silkworm'
        );

        transformation('exnihilosequentia:sea_water', '#minecraft:smelts_to_glass');
        transformation('exnihilosequentia:witch_water', 'exnihilosequentia:mycelium_spores');
    });

    compost.forEach((type) => {
        event.recipes.gtceu
            .barrel_composting(id(`${type.split(':')[1]}_composting`))
            .itemInputs(`4x ${type}`)
            .itemOutputs('minecraft:dirt')
            .duration(15);
    });

    event
        .shaped(Item.of('gtceu:large_barrel'), ['PSP', 'IBI', 'PSP'], {
            P: 'gtceu:treated_wood_planks',
            S: 'gtceu:treated_wood_rod',
            B: 'gtceu:barrel',
            I: 'gtceu:wrought_iron_plate',
        })
        .id('start:shaped/large_barrel');

    event
        .shaped(Item.of('gtceu:large_stone_barrel'), ['PSP', 'IBI', 'PSP'], {
            P: 'minecraft:stone',
            S: 'gtceu:treated_wood_rod',
            B: 'gtceu:stone_barrel',
            I: 'gtceu:wrought_iron_plate',
        })
        .id('start:shaped/large_stone_barrel');

    event
        .shaped(Item.of('gtceu:industrial_barrel'), ['LSL', 'PEP', 'CHC'], {
            L: 'gtceu:gold_single_cable',
            S: 'gtceu:kanthal_spring',
            P: 'gtceu:hv_electric_pump',
            E: 'gtceu:hv_emitter',
            C: '#gtceu:circuits/hv',
            H: 'gtceu:hv_machine_hull',
        })
        .id('start:shaped/industrial_barrel');
});
