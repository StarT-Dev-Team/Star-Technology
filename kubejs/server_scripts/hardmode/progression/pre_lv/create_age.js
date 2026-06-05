// packmode: hard

ServerEvents.recipes((event) => {
    const id = global.id;

    const plate = (metal) => `gtceu:${metal}_plate`;
    const rod = (metal) => `gtceu:${metal}_rod`;

    // Metallurgy Rework via Create

    event.remove({ id: /^create:pressing.*_ingot/ });
    event.remove({ output: /^create_new_age.*wire/ });

    const minecraftMetals = ['iron', 'copper', 'gold'];

    const plates = [
        'iron',
        'copper',
        'gold',
        'lead',
        'tin',
        'zinc',
        'bronze',
        'brass',
        'nickel',
        'pig_iron',
        'tin_alloy',
        'potin',
        'cupronickel',
        'wrought_iron',
        'cast_iron',
        'steel',
        'red_alloy',
        'damascus_steel',
    ];
    const platesBlock = ['iron', 'copper', 'lead'];
    const rods = [
        'iron',
        'copper',
        'gold',
        'lead',
        'tin',
        'zinc',
        'bronze',
        'brass',
        'pig_iron',
        'tin_alloy',
        'potin',
        'cupronickel',
        'wrought_iron',
        'cast_iron',
        'steel',
        'red_alloy',
        'damascus_steel',
    ];
    const rings = [
        'iron',
        'copper',
        'gold',
        'lead',
        'tin',
        'zinc',
        'bronze',
        'brass',
        'pig_iron',
        'tin_alloy',
        'potin',
        'cupronickel',
        'wrought_iron',
        'cast_iron',
        'steel',
    ];
    const foils = [
        'iron',
        'copper',
        'gold',
        'lead',
        'tin',
        'zinc',
        'bronze',
        'brass',
        'nickel',
        'pig_iron',
        'tin_alloy',
        'potin',
        'cupronickel',
        'wrought_iron',
        'cast_iron',
        'steel',
        'red_alloy',
    ];
    const screwsAndBolts = [
        'iron',
        'copper',
        'gold',
        'lead',
        'tin',
        'bronze',
        'brass',
        'pig_iron',
        'tin_alloy',
        'potin',
        'wrought_iron',
        'cast_iron',
        'steel',
        'red_alloy',
        'damascus_steel',
    ];
    const longRods = [
        'iron',
        'copper',
        'gold',
        'lead',
        'tin',
        'bronze',
        'brass',
        'pig_iron',
        'wrought_iron',
        'cast_iron',
        'steel',
        'red_alloy',
    ];
    const doublePlates = [
        'iron',
        'copper',
        'gold',
        'lead',
        'tin',
        'bronze',
        'brass',
        'pig_iron',
        'wrought_iron',
        'cast_iron',
        'steel',
        'red_alloy',
    ];
    const gears = [
        'iron',
        'lead',
        'bronze',
        'pig_iron',
        'wrought_iron',
        'cast_iron',
        'steel',
        'potin',
        'damascus_steel',
    ];
    const smallGears = [
        'iron',
        'lead',
        'bronze',
        'pig_iron',
        'wrought_iron',
        'cast_iron',
        'steel',
        'potin',
        'damascus_steel',
    ];
    const rotors = ['iron', 'copper', 'lead', 'bronze', 'pig_iron', 'steel', 'cast_iron', 'tin_alloy'];
    const springs = ['iron', 'copper', 'gold', 'lead', 'tin', 'steel', 'red_alloy'];
    const smallSprings = ['iron', 'copper', 'gold', 'lead', 'tin', 'steel'];
    const wires = ['iron', 'copper', 'gold', 'lead', 'tin', 'steel', 'red_alloy'];
    const fineWires = ['copper', 'gold', 'lead', 'tin', 'zinc', 'steel', 'red_alloy'];
    const fluidPipes = ['copper', 'steel', 'lead', 'bronze', 'tin_alloy', 'potin'];
    const itemPipes = ['tin', 'brass', 'cupronickel', 'nickel'];

    const seqAssembly = (output, input, inter, sequence, loops) => {
        const steps = sequence.map((step) => {
            let result;

            if (step === 'cut') result = event.recipes.createCutting(inter, inter);
            if (step === 'press') result = event.recipes.createPressing(inter, inter);
            if (Array.isArray(step)) {
                const [type, fluitem] = step;

                if (type === 'fill') result = event.recipes.createFilling(inter, [inter, fluitem]);
                if (type === 'deploy') result = event.recipes.createDeploying(inter, [inter, fluitem]);
            }

            return result;
        });

        event.recipes.create
            .sequenced_assembly(output, input, steps)
            .transitionalItem(inter)
            .loops(loops)
            .id(`start:sequenced_assembly/${output.split(':')[1]}`);
    };

    plates.forEach((metal) => {
        let mod = minecraftMetals.includes(metal) ? 'minecraft' : 'gtceu';
        event.recipes.create.compacting(plate(metal), `2x ${mod}:${metal}_ingot`).id(`start:compacting/${metal}_plate`);
    });

    platesBlock.forEach((metal) => {
        let mod = minecraftMetals.includes(metal) ? 'minecraft' : 'gtceu';
        event
            .shaped(`1x gtceu:${metal}_plate`, [' I ', 'HI ', ' I '], {
                I: `${mod}:${metal}_ingot`,
                H: '#forge:tools/hammers',
            })
            .id(`start:shaped/${metal}_plate`);
    });

    rods.forEach((metal) => {
        event.recipes.create.cutting([`2x gtceu:${metal}_rod`], plate(metal)).id(`start:cutting/${metal}_rod`);
    });

    rings.forEach((metal) => {
        event.recipes.create.pressing([`gtceu:${metal}_ring`], rod(metal)).id(`start:pressing/${metal}_ring`);
    });

    foils.forEach((metal) => {
        event.recipes.create.pressing([`gtceu:${metal}_foil`], plate(metal)).id(`start:pressing/${metal}_foil`);
    });

    screwsAndBolts.forEach((metal) => {
        event.recipes.create.cutting([`2x gtceu:${metal}_bolt`], rod(metal)).id(`start:cutting/${metal}_bolt`);
        event.recipes.create
            .compacting([`gtceu:${metal}_screw`], `2x gtceu:${metal}_bolt`)
            .id(`start:compacting/${metal}_screw`);
    });

    longRods.forEach((metal) =>
        seqAssembly(
            `gtceu:long_${metal}_rod`,
            rod(metal),
            'kubejs:incomplete_long_rod',
            [['deploy', rod(metal)], 'press'],
            1
        )
    );

    doublePlates.forEach((metal) =>
        seqAssembly(
            `gtceu:double_${metal}_plate`,
            plate(metal),
            'kubejs:incomplete_double_plate',
            [['deploy', plate(metal)], 'press'],
            1
        )
    );

    smallGears.forEach((metal) =>
        seqAssembly(
            `gtceu:small_${metal}_gear`,
            plate(metal),
            'kubejs:incomplete_small_gear',
            [['deploy', rod(metal)]],
            2
        )
    );

    gears.forEach((metal) =>
        seqAssembly(
            `gtceu:${metal}_gear`,
            `gtceu:small_${metal}_gear`,
            'kubejs:incomplete_gear',
            [
                ['deploy', plate(metal)],
                ['deploy', rod(metal)],
            ],
            2
        )
    );

    rotors.forEach((metal) =>
        seqAssembly(
            `gtceu:${metal}_rotor`,
            `gtceu:${metal}_ring`,
            'kubejs:incomplete_rotor',
            [['deploy', plate(metal)], 'press', ['deploy', `gtceu:${metal}_screw`]],
            4
        )
    );

    springs.forEach((metal) =>
        seqAssembly(
            `gtceu:${metal}_spring`,
            `gtceu:long_${metal}_rod`,
            'kubejs:incomplete_spring',
            ['cut', 'press', 'press'],
            2
        )
    );

    smallSprings.forEach((metal) =>
        seqAssembly(
            `2x gtceu:small_${metal}_spring`,
            `gtceu:${metal}_spring`,
            'kubejs:incomplete_small_spring',
            ['cut', 'cut', 'press'],
            2
        )
    );

    wires.forEach((metal) =>
        seqAssembly(
            `gtceu:${metal}_single_wire`,
            plate(metal),
            'kubejs:incomplete_single_wire',
            [['deploy', '#forge:tools/wire_cutters'], 'cut'],
            2
        )
    );

    fineWires.forEach((metal) =>
        seqAssembly(
            `gtceu:fine_${metal}_wire`,
            `gtceu:${metal}_foil`,
            'kubejs:incomplete_fine_wire',
            [['deploy', '#forge:tools/wire_cutters'], 'cut'],
            2
        )
    );

    itemPipes.forEach((metal) => {
        const small = `gtceu:${metal}_small_item_pipe`;
        const normal = `gtceu:${metal}_normal_item_pipe`;
        const large = `gtceu:${metal}_large_item_pipe`;
        const huge = `gtceu:${metal}_huge_item_pipe`;

        const inter = 'kubejs:incomplete_item_pipe';
        const sequence = [['deploy', plate(metal)], 'press'];

        seqAssembly(small, `gtceu:${metal}_foil`, inter, sequence, 1);
        seqAssembly(normal, small, inter, sequence, 2);
        seqAssembly(large, normal, inter, sequence, 3);
        seqAssembly(huge, large, inter, sequence, 6);
    });

    fluidPipes.forEach((metal) => {
        const tiny = `gtceu:${metal}_tiny_fluid_pipe`;
        const small = `gtceu:${metal}_small_fluid_pipe`;
        const normal = `gtceu:${metal}_normal_fluid_pipe`;
        const large = `gtceu:${metal}_large_fluid_pipe`;
        const huge = `gtceu:${metal}_huge_fluid_pipe`;

        const inter = 'kubejs:incomplete_fluid_pipe';
        const sequence = [['deploy', plate(metal)], 'press'];

        seqAssembly(small, `gtceu:${metal}_foil`, inter, sequence, 1);
        seqAssembly(normal, small, inter, sequence, 2);
        seqAssembly(large, normal, inter, sequence, 3);
        seqAssembly(huge, large, inter, sequence, 6);

        event.recipes.create.cutting(Item.of(tiny, 2), small).id(`start:cutting/${metal}_tiny_fluid_pipe`);
    });

    const woodPipe = (size, loops, start) => {
        seqAssembly(
            `gtceu:wood_${size}_fluid_pipe`,
            start,
            'kubejs:incomplete_fluid_pipe',
            [['deploy', 'gtceu:wood_plate'], ['deploy', 'gtceu:wood_screw'], 'press', 'cut'],
            loops
        );
    };

    woodPipe('small', 1, 'gtceu:wood_plate');
    woodPipe('normal', 2, 'gtceu:wood_small_fluid_pipe');
    woodPipe('large', 3, 'gtceu:wood_normal_fluid_pipe');

    //==================================================================//

    event.recipes.create
        .mechanical_crafting('gtceu:primitive_pump', ['TNT', 'SVR', 'CLC'], {
            N: 'gtceu:wood_normal_fluid_pipe',
            R: 'gtceu:iron_rotor',
            T: 'gtceu:treated_wood_planks',
            L: 'gtceu:wood_large_fluid_pipe',
            C: 'minecraft:cobblestone_slab',
            S: 'gtceu:iron_screw',
            V: 'thermal:redstone_servo',
        })
        .id('start:mechanical_crafting/primitive_pump');

    event.remove({ id: /gtceu:.*glass.*_dust_flint.*/ });
    event.recipes.create
        .mixing('2x gtceu:glass_dust', ['2x gtceu:quartz_sand_dust', '1x gtceu:flint_dust'])
        .id('start:create_mixer/glass_dust');

    event.recipes.create
        .mixing('2x gtceu:fireclay_dust', ['1x gtceu:clay_dust', '1x gtceu:brick_dust'])
        .id('start:create_mixer/fireclay_dust');
    event.recipes.gtceu
        .mixer(id('fireclay'))
        .itemInputs('1x gtceu:clay_dust', '1x gtceu:brick_dust')
        .itemOutputs('2x gtceu:fireclay_dust')
        .duration(80)
        .EUt(6);

    event.recipes.gtceu
        .mixer(id('coke_clay'))
        .itemInputs('4x gtceu:quartz_sand_dust', '4x gtceu:clay_dust')
        .itemOutputs('8x gtceu:coke_clay_dust')
        .duration(240)
        .EUt(6);
    event.recipes.create
        .mixing('8x gtceu:coke_clay_dust', ['4x gtceu:quartz_sand_dust', '4x gtceu:clay_dust'])
        .id('start:create_mixer/coke_clay_dust');
    event.recipes.gtceu
        .centrifuge(id('coke_clay'))
        .itemInputs('8x gtceu:coke_clay_dust')
        .itemOutputs('4x gtceu:quartz_sand_dust', '4x gtceu:clay_dust')
        .duration(168)
        .EUt(30);

    event.remove({ id: 'minecraft:charcoal' });
    event
        .smelting(`kubejs:charcoal_pellet`, `#minecraft:logs_that_burn`)
        .id('kjs:smelting/charcoal_pellet_manual_only')
        .id('start:smelting/charcoal_pellet');
    event.recipes.create.crushing(
        ['2x kubejs:charcoal_pellet', Item.of('kubejs:charcoal_pellet').withChance(0.5)],
        'minecraft:charcoal'
    );
    event.recipes.create.milling(['gtceu:charcoal_dust'], 'minecraft:charcoal');
    event.recipes.create.milling(['minecraft:sand'], 'minecraft:gravel');
    event.recipes.create.milling(['exnihilosequentia:dust'], 'minecraft:sand');

    event.remove({ id: 'thermal:rubber_3' });
    event.recipes.create
        .compacting(Fluid.of('thermal:latex', 20), `10x minecraft:jungle_log`)
        .heatRequirement('lowheated')
        .id('start:compacting/latex');
    event.recipes.create
        .mixing(Fluid.of('gtceu:rubber', 288), [Fluid.of('thermal:latex', 288), '1x gtceu:sulfur_dust'])
        .heatRequirement('superheated')
        .id('start:create_mixer/rubber');
    event.recipes.create
        .compacting(`1x thermal:cured_rubber`, Fluid.of('gtceu:rubber', 144))
        .id('start:compacting/rubber');
    event.recipes.create
        .compacting(`1x gtceu:rubber_plate`, `2x thermal:cured_rubber`)
        .id('start:compacting/rubber_plate');

    event
        .shapeless(Item.of('gtceu:wood_plate', 2), [
            '#forge:tools/files',
            '#minecraft:planks',
            '#minecraft:planks',
            '#minecraft:planks',
            '#forge:tools/saws',
        ])
        .id('start:shapeless/wood_plate');
    event.recipes.create.cutting(['gtceu:wood_plate'], '#minecraft:planks').id('start:cutting/wood_plate');

    event
        .shapeless(Item.of('gtceu:treated_wood_plate', 2), [
            '#forge:tools/files',
            '#forge:treated_wood',
            '#forge:treated_wood',
            '#forge:treated_wood',
            '#forge:tools/saws',
        ])
        .id('start:shapeless/treated_wood_plate');
    event.recipes.create
        .cutting(['gtceu:treated_wood_plate'], '#forge:treated_wood')
        .id('start:cutting/treated_wood_plate');

    event
        .shaped(Item.of('gtceu:iron_buzz_saw_blade'), ['HPM', 'PPP', 'WPF'], {
            M: '#forge:tools/mallets',
            W: '#forge:tools/wrenches',
            F: '#forge:tools/files',
            H: '#forge:tools/hammers',
            P: 'gtceu:iron_plate',
        })
        .id('start:shaped/iron_buzz_saw_blade');

    event.recipes.create
        .mechanical_crafting('thermal:redstone_servo', ['TPT', ' F ', 'TPT'], {
            P: 'gtceu:iron_plate',
            T: 'create:electron_tube',
            F: 'gtceu:fine_copper_wire',
        })
        .id('start:mechanical_crafting/redstone_servo');

    event.recipes.create
        .mechanical_crafting('gtceu:ulv_stone_barrel', ['PN NP', 'NSRSN', ' SCS ', 'NSTSN', 'PN NP'], {
            R: 'gtceu:iron_rotor',
            S: 'minecraft:stone',
            P: 'gtceu:nickel_plate',
            T: 'thermal:redstone_servo',
            C: 'minecraft:cauldron',
            N: 'gtceu:iron_plate',
        })
        .id('start:mechanical_crafting/ulv_stone_barrel');

    event.recipes.create
        .mechanical_crafting('gtceu:primitive_ore_factory', ['BPB', 'RSR', 'BFB'], {
            R: 'gtceu:brass_rod',
            S: 'thermal:redstone_servo',
            P: 'gtceu:brass_plate',
            B: 'gtceu:firebricks',
            F: 'minecraft:furnace',
        })
        .id('start:mechanical_crafting/primitive_ore_factory');

    event.remove({ id: 'gtceu:smelting/smelt_dust_bronze_to_ingot' });
    event.remove({ id: 'gtceu:smelting/smelt_dust_brass_to_ingot' });

    event.recipes.create
        .mixing('2x gtceu:brass_dust', ['1x gtceu:zinc_dust', '3x gtceu:copper_dust'])
        .heatRequirement('lowheated')
        .id('start:create_mixer/brass_dust');
    event.recipes.create
        .mixing('2x gtceu:bronze_dust', ['1x gtceu:tin_dust', '3x gtceu:copper_dust'])
        .heatRequirement('lowheated')
        .id('start:create_mixer/bronze_dust');
    event.recipes.create
        .mixing(Fluid.of('gtceu:brass', 576), ['1x gtceu:zinc_ingot', '3x minecraft:copper_ingot'])
        .heatRequirement('superheated')
        .id('start:create_mixer/liquid_brass');
    event.recipes.create
        .mixing(Fluid.of('gtceu:bronze', 576), ['1x gtceu:tin_ingot', '3x minecraft:copper_ingot'])
        .heatRequirement('superheated')
        .id('start:create_mixer/liquid_bronze');
    event.recipes.create
        .compacting(`1x gtceu:brass_ingot`, Fluid.of('gtceu:brass', 192))
        .id('start:compacting/brass_ingot');
    event.recipes.create
        .compacting(`1x gtceu:bronze_ingot`, Fluid.of('gtceu:bronze', 192))
        .id('start:compacting/bronze_ingot');

    event.recipes.create
        .mechanical_crafting(
            'exnihilosequentia:flint_mesh',
            ['FSFSFSF', 'SRSRSRS', 'FSFSFSF', 'SRSRSRS', 'FSFSFSF', 'SRSRSRS', 'FSFSFSF'],
            {
                F: 'minecraft:flint',
                R: 'gtceu:tin_ring',
                S: '#forge:string',
            }
        )
        .id('start:mechanical_crafting/flint_mesh');

    event.recipes.create
        .mechanical_crafting('gtceu:ulv_barrel', ['PN NP', 'NLRLN', ' LCL ', 'NLTLN', 'PN NP'], {
            R: 'gtceu:iron_rotor',
            L: '#forge:stripped_logs',
            P: 'gtceu:treated_wood_plate',
            T: 'thermal:redstone_servo',
            C: 'minecraft:cauldron',
            N: 'gtceu:wood_plate',
        })
        .id('start:mechanical_crafting/ulv_barrel');

    event.replaceInput({ id: 'gtceu:shaped/coke_oven' }, '#forge:tools/wrenches', 'minecraft:furnace');

    event.remove({ id: 'exnihilosequentia:ens_porcelain_clay' });
    event.recipes.create
        .mixing(Item.of('exnihilosequentia:porcelain_clay', 2), [
            '2x minecraft:clay_ball',
            'minecraft:bone_meal',
            '1x gtceu:small_ash_dust',
        ])
        .id('start:create_mixer/porcelain_clay');

    event.recipes.create
        .compacting('kubejs:unfired_raw_ceramic_casting_mold', '4x exnihilosequentia:porcelain_clay')
        .id('start:compacting/unfired_raw_ceramic_casting_mold');
    event.recipes.create
        .compacting(
            ['kubejs:unfired_ball_ceramic_casting_mold', 'minecraft:bowl'],
            ['kubejs:unfired_raw_ceramic_casting_mold', 'minecraft:bowl']
        )
        .id('start:compacting/unfired_ball_ceramic_casting_mold');
    event.recipes.create
        .compacting(
            ['kubejs:unfired_ingot_ceramic_casting_mold', 'gtceu:wood_plate'],
            ['kubejs:unfired_raw_ceramic_casting_mold', 'gtceu:wood_plate']
        )
        .id('start:compacting/unfired_ingot_ceramic_casting_mold');

    ['coals', 'poor_coals'].forEach((fuelType) => {
        let boost = fuelType === 'coals' ? 0.6 : 1;
        // event.recipes.gtceu.auto_scavenger(id(`coarse_dirt_${fuelType}`))
        // 	.notConsumable('minecraft:coarse_dirt')
        // 	.chancedInput(`#minecraft:${fuelType}`, 2500, 0)
        // 	.chancedOutput('1x minecraft:flint', 9500, 0)
        // 	.chancedOutput('1x minecraft:flint', 8000, 0)
        // 	.chancedOutput('1x minecraft:flint', 6500, 0)
        // 	.duration(480);
        event.recipes.gtceu
            .auto_scavenger(id(`coarse_dirt_1_${fuelType}`))
            .notConsumable('minecraft:coarse_dirt')
            .chancedInput('kubejs:basic_scavenging_rod', 40, 0)
            .chancedInput(`#minecraft:${fuelType}`, 2500, 0)
            .chancedOutput('4x minecraft:flint', 8000, 0)
            .chancedOutput('4x minecraft:flint', 6400, 0)
            .chancedOutput('4x minecraft:flint', 4800, 0)
            .chancedOutput('4x minecraft:flint', 3200, 0)
            .chancedOutput('4x minecraft:flint', 1600, 0)
            .chancedOutput('2x minecraft:flint', 8000, 0)
            .chancedOutput('2x minecraft:flint', 6400, 0)
            .chancedOutput('2x minecraft:flint', 4800, 0)
            .chancedOutput('2x minecraft:flint', 3200, 0)
            .chancedOutput('2x minecraft:flint', 1600, 0)
            .duration(600 * boost);
        event.recipes.gtceu
            .auto_scavenger(id(`coarse_dirt_2_${fuelType}`))
            .notConsumable('minecraft:coarse_dirt')
            .chancedInput('kubejs:scavenging_rod', 20, 0)
            .chancedInput(`#minecraft:${fuelType}`, 2500, 0)
            .chancedOutput('4x exnihilosequentia:stone_pebble', 5000, 0)
            .chancedOutput('4x minecraft:flint', 9000, 0)
            .chancedOutput('4x minecraft:flint', 8000, 0)
            .chancedOutput('4x minecraft:flint', 7000, 0)
            .chancedOutput('3x minecraft:flint', 6000, 0)
            .chancedOutput('3x minecraft:flint', 5000, 0)
            .chancedOutput('3x minecraft:flint', 4000, 0)
            .chancedOutput('2x minecraft:flint', 3000, 0)
            .chancedOutput('2x minecraft:flint', 2000, 0)
            .chancedOutput('2x minecraft:flint', 1000, 0)
            .duration(600 * boost);
        event.recipes.gtceu
            .auto_scavenger(id(`grass_1_${fuelType}`))
            .notConsumable('minecraft:grass_block')
            .chancedInput('kubejs:basic_scavenging_rod', 60, 0)
            .chancedInput(`#minecraft:${fuelType}`, 4000, 0)
            .chancedOutput('4x exnihilosequentia:stone_pebble', 400, 0)
            .chancedOutput('4x exnihilosequentia:andesite_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:basalt_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:blackstone_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:deepslate_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:diorite_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:granite_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:tuff_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:calcite_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:dripstone_pebble', 1200, 0)
            .duration(960 * boost);
        event.recipes.gtceu
            .auto_scavenger(id(`grass_2_${fuelType}`))
            .notConsumable('minecraft:grass_block')
            .chancedInput('kubejs:scavenging_rod', 30, 0)
            .chancedInput(`#minecraft:${fuelType}`, 4000, 0)
            .chancedOutput('4x exnihilosequentia:stone_pebble', 750, 0)
            .chancedOutput('4x exnihilosequentia:andesite_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:basalt_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:blackstone_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:deepslate_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:diorite_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:granite_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:tuff_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:calcite_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:dripstone_pebble', 1750, 0)
            .duration(960 * boost);
    });

    event
        .shapeless(Item.of('3x kubejs:flint_shard'), ['minecraft:flint', '#forge:tools/hammers'])
        .id('start:shapeless/flint_shard');

    event
        .shaped('gtceu:ulv_auto_scavenger', ['TDT', 'GFG', 'TPT'], {
            G: 'gtceu:small_bronze_gear',
            P: 'create:precision_mechanism',
            F: 'gtceu:brass_frame',
            T: 'gtceu:treated_wood_plate',
            D: 'create:deployer',
        })
        .id('start:shaped/ulv_auto_scavenger');

    event.recipes.create
        .mechanical_crafting('gtceu:ulv_advanced_composter', ['PRP', 'PGP', 'ISI'], {
            P: 'gtceu:treated_wood_slab',
            G: 'minecraft:glass',
            R: 'gtceu:iron_gear',
            I: 'gtceu:iron_plate',
            S: 'thermal:redstone_servo',
        })
        .id('start:mechanical_crafting/ulv_advanced_composter');

    event.recipes.create
        .mixing('8x minecraft:tuff', ['8x minecraft:gravel', Fluid.of('minecraft:lava', 10)])
        .heatRequirement('superheated')
        .id('start:create_mixer/tuff');
});
