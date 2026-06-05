// packmode: hard

ServerEvents.tags('item', (event) => {
    ['tin', 'zinc', 'lead'].forEach((metal) => {
        event.removeAll(`forge:ingots/${metal}`);
        event.removeAll(`forge:nuggets/${metal}`);

        event.add(`forge:ingots/${metal}`, `gtceu:${metal}_ingot`);
        event.add(`forge:nuggets/${metal}`, `gtceu:${metal}_nugget`);
    });

    event.remove('minecraft:planks', 'gtceu:wood_plate');
    event.remove('minecraft:planks', 'gtceu:treated_wood_plate');
});

ServerEvents.tags('block', (event) => {
    event.removeAll('create:windmill_sails');
    event.add('create:windmill_sails', [/^create:.*_sail/, 'create:sail_frame']);
});

ServerEvents.recipes((event) => {
    const id = global.id;
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    // ~~~~~~~~~~~ PRE-COBBLEGEN ~~~~~~~~~~~ //
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

    const replaceShaped = (output, pattern, symbols) => {
        event.remove({ type: 'minecraft:crafting_shaped', output: output });
        event.shaped(output, pattern, symbols).id(`start:shaped/${output.split(':')[1]}`);
    };

    const replaceShapeless = (output, ingredients) => {
        event.remove({ type: 'minecraft:crafting_shapeless', output: output });
        event.shapeless(output, ingredients);
    };

    // Remove Tools (Wooden, Stone, Flint)

    const tools = ['mortar', 'pickaxe', 'shovel', 'axe', 'sword', 'knife', 'hoe'];

    const materials = [
        { mod: 'minecraft', material: 'wooden' },
        { mod: 'minecraft', material: 'stone' },
        { mod: 'gtceu', material: 'flint' },
    ];

    materials.forEach((type) => {
        tools.forEach((tool) => {
            const { mod, material } = type;

            event.remove({ output: `${mod}:${material}_${tool}` });
        });
    });

    // Adjusted Recipes

    event.remove({ output: 'ftbquests:loot_crate_opener' });

    event.replaceInput({ id: 'chipped:benches/carpenters_table' }, 'minecraft:wooden_axe', 'gtceu:flisnt_axe');
    event.replaceInput({ id: 'farmersdelight:cooking_pot' }, 'minecraft:wooden_shovel', 'gtceu:flisnt_shovel');

    event.remove({ id: 'gtceu:shapeless/fireclay_dust' });
    event.recipes.create
        .pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust')
        .id('start:pressing/compressed_fireclay');
    event.recipes.create.pressing('gtceu:compressed_clay', 'minecraft:clay_ball').id('start:pressing/compressed_clay');
    event.recipes.create.pressing('kubejs:mud_brick', 'kubejs:packed_mud_ball').id('start:pressing/mud_brick');
    event.recipes.create
        .pressing('gtceu:compressed_coke_clay', 'gtceu:coke_clay_dust')
        .id('start:pressing/compressed_coke_clay');

    ['andesite', 'granite', 'diorite'].forEach((stone) => {
        event.remove({ id: `create:compacting/${stone}_from_flint` });
    });
    event.remove({ id: 'create:compacting/blaze_cake' });

    event.recipes.create
        .mixing(Fluid.of('thermal:redstone', 1000), [Fluid.of('minecraft:water', 1000), `10x minecraft:redstone`])
        .heatRequirement('superheated')
        .id(`start:create_mixer/destabilized_redstone`);
    event.recipes.create
        .filling('xycraft_world:xychorium_gem_red', [
            Fluid.of('thermal:redstone', 500),
            'xycraft_world:xychorium_gem_light',
        ])
        .id('start:filling/redstone_gem');

    event
        .shapeless(Item.of('gtceu:wood_screw'), ['#forge:tools/files', 'gtceu:wood_bolt', 'gtceu:wood_bolt'])
        .id('start:shapeless/wood_screw');

    event.recipes.gtceu
        .assembler(id('fluid_cell_frame'))
        .itemInputs('gtceu:bronze_frame', '4x gtceu:tin_foil')
        .inputFluids('gtceu:glass 432')
        .itemOutputs('thermal:fluid_cell_frame')
        .duration(200)
        .EUt(7);

    event.remove({ id: 'minecraft:iron_trapdoor' });
    event
        .shaped('minecraft:iron_trapdoor', [' P ', 'PTP', ' P '], {
            P: 'gtceu:iron_plate',
            T: '#minecraft:trapdoors',
        })
        .id('start:shaped/iron_trapdoor');

    event.remove({ id: 'architects_palette:smelting/charcoal_block_from_logs_that_burn_smoking' });
    event.remove({ id: 'minecraft:stone_bricks_from_stone_stonecutting' });
    event.remove('rechiseled:chisel'); // Remove Chisel, replacement recipe later

    replaceShaped('gtceu:treated_wood_rod', ['SP'], {
        S: '#forge:tools/saws',
        P: 'gtceu:treated_wood_slab',
    });

    event.remove({ id: 'gtceu:smelting/wrought_iron_nugget' });

    event.replaceInput({ type: 'gtceu:fluid_solidifier' }, 'gtceu:ball_casting_mold', '#kubejs:ball_casting_mold');
    event.replaceInput({ type: 'gtceu:fluid_solidifier' }, 'gtceu:ingot_casting_mold', '#kubejs:ingot_casting_mold');

    event.recipes.gtceu
        .coke_oven(id('coke_from_coal'))
        .itemInputs('minecraft:coal')
        .outputFluids('gtceu:creosote 500')
        .itemOutputs('gtceu:coke_gem')
        .duration(1200);

    event.recipes.gtceu
        .coke_oven(id('coke_from_coal_block'))
        .itemInputs('minecraft:coal_block')
        .outputFluids('gtceu:creosote 4500')
        .itemOutputs('gtceu:coke_block')
        .duration(9000);

    // ================================ Post Cobble-Gen, Pre-Circuit ================================

    event.recipes.create
        .mechanical_crafting('gtceu:latex_plantation', ['RSR', 'PGP', 'BTB'], {
            R: 'gtceu:iron_rod',
            S: 'gtceu:lead_spring',
            P: 'gtceu:iron_plate',
            G: '#forge:glass',
            B: 'minecraft:bricks',
            T: 'thermal:redstone_servo',
        })
        .id('start:mechanical_crafting/latex_plantation');

    event.recipes.create
        .deploying('4x kubejs:packed_mud_ball', ['minecraft:packed_mud', 'minecraft:bowl'])
        .keepHeldItem();

    event.smelting('minecraft:slime_ball', 'thermal:slime_mushroom_spores').id('start:smelting/slime_ball');

    event.replaceInput({ output: 'toms_storage:ts.storage_terminal' }, 'minecraft:glowstone', '#gtceu:circuits/ulv');
    event.replaceInput({ output: 'toms_storage:ts.storage_terminal' }, '#forge:chests/wooden', 'toms_storage:ts.trim');
    event.replaceInput({ output: 'toms_storage:ts.wireless_terminal' }, 'minecraft:glowstone', '#gtceu:circuits/ulv');
    event.remove({ output: 'modularrouters:modular_router' });
    event.replaceInput({ output: 'functionalstorage:configuration_tool' }, 'minecraft:emerald', '#forge:dyes/lime');
    event.remove({ id: 'gtceu:shaped/casing_steel_solid' });
    event.remove({ id: 'gtceu:assembler/casing_steel_solid' });
    event.remove({ output: 'thermal:device_composter' });

    event.recipes.create
        .mechanical_crafting('thermal:device_composter', ['PRP', 'GCG', 'PRP'], {
            P: '#minecraft:planks',
            R: 'gtceu:iron_gear',
            G: 'minecraft:glass',
            C: 'gtceu:ulv_advanced_composter',
        })
        .id('start:mechanical_crafting/device_composter');

    event.recipes.create
        .mechanical_crafting('2x modularrouters:modular_router', ['PDP', 'DED', 'PDP'], {
            P: 'gtceu:steel_plate',
            D: 'gtceu:double_iron_plate',
            E: 'kubejs:ulv_emitter',
        })
        .id('start:mechanical_crafting/modular_router');

    event.recipes.gtceu
        .assembler(id('solid_machine_casing'))
        .itemInputs('6x gtceu:steel_plate', 'gtceu:steel_frame')
        .itemOutputs('2x gtceu:solid_machine_casing')
        .circuit(6)
        .duration(100)
        .EUt(8);

    event.recipes.gtceu
        .mixer(id('porcelain_clay'))
        .itemInputs('2x minecraft:clay_ball', 'minecraft:bone_meal', 'gtceu:small_ash_dust')
        .itemOutputs('3x exnihilosequentia:porcelain_clay')
        .duration(160)
        .EUt(4);

    event.remove({ output: 'laserio:logic_chip_raw' });
    event.remove({ output: 'laserio:logic_chip' });
    event.recipes.gtceu
        .circuit_facility(id('logic_chip_raw'))
        .itemInputs('#gtceu:circuits/lv', '8x exnihilosequentia:porcelain_clay', 'gtceu:small_redstone_dust')
        .inputFluids('gtceu:tin 36')
        .itemOutputs('laserio:logic_chip_raw')
        .duration(320)
        .EUt(24);

    event.recipes.gtceu
        .electric_blast_furnace(id('logic_chip'))
        .itemInputs('laserio:logic_chip_raw')
        .itemOutputs('laserio:logic_chip')
        .duration(400)
        .blastFurnaceTemp(960)
        .EUt(30);

    event.recipes.create
        .mechanical_crafting('gtceu:large_stone_barrel', ['SSUSS', 'SPTPS', 'UTBTU', 'SPTPS', 'SSUSS'], {
            S: 'minecraft:stone',
            U: '#gtceu:circuits/ulv',
            P: 'gtceu:ulv_electric_pump',
            T: 'gtceu:steel_small_fluid_pipe',
            B: 'gtceu:ulv_stone_barrel',
        })
        .id('start:mechanical_crafting/large_stone_barrel');

    event.recipes.create
        .mechanical_crafting('gtceu:large_barrel', ['SSUSS', 'SPTPS', 'UTBTU', 'SPTPS', 'SSUSS'], {
            S: 'gtceu:treated_wood_planks',
            U: '#gtceu:circuits/ulv',
            P: 'gtceu:ulv_electric_pump',
            T: 'gtceu:lead_small_fluid_pipe',
            B: 'gtceu:ulv_barrel',
        })
        .id('start:mechanical_crafting/large_barrel');

    event.recipes.create
        .mechanical_crafting('gtceu:large_farm', ['SSUSS', 'SPTPS', 'UTBTU', 'SPTPS', 'SSUSS'], {
            S: 'gtceu:treated_wood_planks',
            U: '#gtceu:circuits/ulv',
            P: 'gtceu:ulv_conveyor_module',
            T: 'thermal:compost',
            B: 'thermal:device_composter',
        })
        .id('start:mechanical_crafting/large_farm');

    event.recipes.create
        .mechanical_crafting('gtceu:bronze_firebox_casing', ['PRP', 'RFR', 'PRP'], {
            P: 'gtceu:bronze_plate',
            R: 'gtceu:bronze_rod',
            F: 'gtceu:bronze_frame',
        })
        .id('start:mechanical_crafting/bronze_firebox_casing');

    event.recipes.create
        .mechanical_crafting('gtceu:bronze_pipe_casing', ['PIP', 'IFI', 'PIP'], {
            P: 'gtceu:bronze_plate',
            I: 'gtceu:bronze_small_fluid_pipe',
            F: 'gtceu:bronze_frame',
        })
        .id('start:mechanical_crafting/bronze_pipe_casing');

    event.remove({ id: 'gtceu:compressor/compress_plate_dust_obsidian' });
    event.recipes.create
        .mechanical_crafting('itemcollectors:basic_collector', [' P ', ' S ', 'OOO'], {
            P: 'minecraft:ender_pearl',
            S: 'gtceu:steel_spring',
            O: 'gtceu:obsidian_plate',
        })
        .id('start:mechanical_crafting/basic_collector');

    event.recipes.create
        .mechanical_crafting('itemcollectors:advanced_collector', [' P ', ' S ', 'OOO'], {
            P: 'minecraft:ender_eye',
            S: 'gtceu:hsla_steel_spring',
            O: 'gtceu:obsidian_plate',
        })
        .id('start:mechanical_crafting/advanced_collector');

    event.recipes.create
        .mechanical_crafting('2x kubejs:meshblock', ['RSR', 'NFN', 'RSR'], {
            R: 'gtceu:treated_wood_rod',
            S: 'exnihilosequentia:string_mesh',
            N: 'exnihilosequentia:flint_mesh',
            F: 'gtceu:treated_wood_frame',
        })
        .id('start:mechanical_crafting/meshblock');

    event.recipes.gtceu
        .assembler(id('meshblock'))
        .itemInputs(
            '1x gtceu:treated_wood_frame',
            '2x exnihilosequentia:flint_mesh',
            '2x exnihilosequentia:string_mesh',
            '4x gtceu:treated_wood_rod'
        )
        .itemOutputs('2x kubejs:meshblock')
        .duration(80)
        .EUt(6);

    let fluidPipez = 'gtceu:iron_foil';
    event.recipes.create
        .sequenced_assembly([Item.of(`3x pipez:fluid_pipe`)], fluidPipez, [
            event.recipes.createDeploying(fluidPipez, [fluidPipez, `gtceu:copper_small_fluid_pipe`]),
            event.recipes.createDeploying(fluidPipez, [fluidPipez, `gtceu:bronze_small_fluid_pipe`]),
            event.recipes.createDeploying(fluidPipez, [fluidPipez, `gtceu:lead_small_fluid_pipe`]),
            event.recipes.createDeploying(fluidPipez, [fluidPipez, `gtceu:wrought_iron_ring`]),
            event.recipes.createPressing(fluidPipez, fluidPipez),
        ])
        .transitionalItem(fluidPipez)
        .loops(1);

    let itemPipez = 'gtceu:nickel_foil';
    event.recipes.create
        .sequenced_assembly([Item.of(`3x pipez:item_pipe`)], itemPipez, [
            event.recipes.createDeploying(itemPipez, [itemPipez, `gtceu:tin_small_item_pipe`]),
            event.recipes.createDeploying(itemPipez, [itemPipez, `gtceu:brass_small_item_pipe`]),
            event.recipes.createDeploying(itemPipez, [itemPipez, `gtceu:nickel_small_item_pipe`]),
            event.recipes.createDeploying(itemPipez, [itemPipez, `gtceu:wrought_iron_ring`]),
            event.recipes.createPressing(itemPipez, itemPipez),
        ])
        .transitionalItem(itemPipez)
        .loops(1);

    event.remove({ output: 'architects_palette:flint_block' });
    event
        .shaped(Item.of('4x architects_palette:flint_block'), ['FFF', 'F F', 'FFF'], {
            F: 'minecraft:flint',
        })
        .id('start:shaped/flint_block');

    event
        .shaped(Item.of('toms_storage:ts.trim', 2), ['CSC', 'SWS', 'CSC'], {
            C: 'createdieselgenerators:chip_wood_block',
            W: 'gtceu:wood_crate',
            S: '#minecraft:wooden_slabs',
        })
        .id('start:shaped/trim');

    event
        .shaped(Item.of('toms_storage:ts.open_crate'), ['T', 'B', 'T'], {
            T: 'toms_storage:ts.trim',
            B: 'minecraft:barrel',
        })
        .id('start:shaped/open_crate');

    event
        .shaped(Item.of('toms_storage:ts.inventory_proxy'), ['THT', 'LCL', 'THT'], {
            T: '#minecraft:wooden_trapdoors',
            H: 'minecraft:hopper',
            L: 'minecraft:lapis_lazuli',
            C: 'toms_storage:ts.open_crate',
        })
        .id('start:shaped/inventory_proxy');

    event.replaceInput({ output: 'minecraft:fishing_rod' }, 'gtceu:iron_ring', 'gtceu:steel_ring');

    event.shaped(Item.of('exnihilosequentia:iron_crook'), [' FR', 'GDS', 'DGV'], {
        R: 'gtceu:iron_ring',
        F: '#forge:tools/files',
        G: '#forge:string',
        D: 'gtceu:iron_rod',
        S: 'gtceu:iron_screw',
        V: '#forge:tools/screwdrivers',
    });

    event.recipes.create
        .mechanical_crafting(Item.of('gtceu:steam_ore_factory'), ['CIC', 'GOG', 'CIC'], {
            O: 'gtceu:primitive_ore_factory',
            I: 'gtceu:tin_alloy_large_fluid_pipe',
            G: 'gtceu:potin_gear',
            C: 'kubejs:high_steam_machine_casing',
        })
        .id('start:mechanical_crafter/steam_ore_factory');

    let cell = 'gtceu:wrought_iron_ring';
    event.recipes.create
        .sequenced_assembly([Item.of(`gtceu:fluid_cell`)], `gtceu:wrought_iron_ring`, [
            event.recipes.createDeploying(cell, [cell, `gtceu:rubber_ring`]),
            event.recipes.createDeploying(cell, [cell, `#forge:glass_panes`]),
            event.recipes.createDeploying(cell, [cell, `gtceu:wrought_iron_ring`]),
            event.recipes.createPressing(cell, cell),
        ])
        .transitionalItem(cell)
        .loops(2)
        .id('start:sequenced_assembly/fluid_cell');

    event
        .shaped(Item.of('thermal:satchel'), ['FWF', 'RCS', 'FWS'], {
            F: 'minecraft:leather',
            W: '#minecraft:wool',
            R: 'gtceu:tin_ring',
            C: 'minecraft:chest',
            S: '#forge:string',
        })
        .id('start:shaped/satchel_leather');

    event
        .shaped(Item.of('thermal:satchel'), ['FWF', 'RCS', 'FWS'], {
            F: 'thermal:beekeeper_fabric',
            W: '#minecraft:wool',
            R: 'gtceu:tin_ring',
            C: 'minecraft:chest',
            S: '#forge:string',
        })
        .id('start:shaped/satchel_fabric');

    event.remove({ id: 'gtceu:assembler/flower_pot' });
    event.recipes.gtceu
        .assembler(id('flower_pot'))
        .itemInputs('3x minecraft:brick')
        .itemOutputs('minecraft:flower_pot')
        .circuit(0)
        .duration(10)
        .EUt(2);

    //Mass Removals

    const thermalRemoval = [
        'redstone_servo',
        'device_tree_extractor',
        'drill_head',
        'fluid_cell_frame',
        'device_rock_gen',
        'device_water_gen',
        'satchel',
    ];
    thermalRemoval.forEach((item) => {
        event.remove({ output: `thermal:${item}` });
    });
    const gtceuRemoval = ['primitive_pump', 'lp_steam_alloy_smelter', 'compressed_coke_clay', 'matchbox'];
    gtceuRemoval.forEach((item) => {
        event.remove({ output: `gtceu:${item}` });
    });
    const minecraftRemoval = ['stonecutter', 'furnace', 'campfire', 'composter'];
    minecraftRemoval.forEach((item) => {
        event.remove({ output: `minecraft:${item}` });
    });
    const tomsSSRemoval = ['trim', 'open_crate', 'inventory_proxy'];
    tomsSSRemoval.forEach((item) => {
        event.remove({ output: `toms_storage:ts.${item}` });
    });
});
