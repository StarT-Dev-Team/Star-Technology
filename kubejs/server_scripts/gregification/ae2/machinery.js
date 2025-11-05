ServerEvents.recipes(event => {
    const id = global.id;

    const assembler = (id1, output, input, eu) => {
        event.recipes.gtceu.assembler(id(`${id1}`))
            .itemInputs(input)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`${output}`)
            .duration(400)
            .EUt(eu);
    }

    const assembler_rem = (id1, output, input, eu) => {
        event.remove({output: `${output}`})
        assembler(id1, output, input, eu)
    }

    const assemblerfluid = (id1, output, inputit, inputfl, eu, circuit) => {
        const recipe = event.recipes.gtceu.assembler(id(`${id1}`))
            recipe.itemInputs(inputit)
            recipe.inputFluids(`gtceu:${inputfl}`)
            recipe.itemOutputs(`${output}`)
            recipe.duration(400)
            recipe.EUt(eu);
        if (circuit) {
            recipe.circuit(circuit)
        }
    }

    const assemblerfluid_rem = (id1, output, inputit, inputfl, eu, circuit) => {
        event.remove({output: `${output}`})
        assemblerfluid(id1, output, inputit, inputfl, eu, circuit)
    }

    const extended = (item, input) => {
        assemblerfluid_rem(`extended_${item}`, `expatternprovider:ex_${item}`, [`ae2:${input}`, '4x ae2:calculation_processor', '#gtceu:circuits/ev', '8x gtceu:diamond_skystone_alloy_plate'],'sky_steel 576', 2048);
    }

    const assemblerspecex = (item,input) => {
        assembler_rem(`${item}_storage_bus`,`expatternprovider:${item}_storage_bus`,['2x ae2:storage_bus',`${input}`],2048);
        assembler_rem(`${item}_export_bus`,`expatternprovider:${item}_export_bus`,['2x ae2:export_bus',`${input}`],2048);
    }

    assemblerfluid('mega_interface','megacells:mega_interface', ['ae2:interface', '4x ae2:calculation_processor', '#gtceu:circuits/hv', '8x gtceu:diamond_skystone_alloy_plate'],'sky_steel 576', 512);
    assemblerfluid('mega_pattern_provider','megacells:mega_pattern_provider', ['ae2:pattern_provider', '4x ae2:calculation_processor', '#gtceu:circuits/hv', '8x gtceu:diamond_skystone_alloy_plate'],'sky_steel 576', 512);
    
    assemblerfluid('ex_interface', 'expatternprovider:ex_interface', ['megacells:mega_interface', '4x ae2:calculation_processor', '#gtceu:circuits/ev', '4x gtceu:double_certus_quartz_skystone_alloy_plate'],'sky_steel 576', 2048);
    assemblerfluid('ex_pattern_provider', 'expatternprovider:ex_pattern_provider', ['megacells:mega_pattern_provider', '4x ae2:calculation_processor', '#gtceu:circuits/ev', '4x gtceu:double_gold_skystone_alloy_plate'],'sky_steel 576', 2048);

    assemblerfluid('expanded_pattern_provider','expandedae:exp_pattern_provider', ['expatternprovider:ex_pattern_provider', '4x ae2:engineering_processor', '#gtceu:circuits/iv', '8x gtceu:netherite_certus_quartz_skystone_alloy_plate'],'fluix_steel 576', 8192);

    ['molecular_assembler', 'drive', 'io_port'].forEach(type => {
        extended(`${type}`, `${type}`);
    });

    assemblerfluid_rem('expanded_io_port','expandedae:exp_io_port', ['expatternprovider:ex_io_port', '4x ae2:engineering_processor', '#gtceu:circuits/iv', '8x gtceu:netherite_certus_quartz_skystone_alloy_plate'],'fluix_steel 576', 8192);
    
    ['import_bus', 'export_bus'].forEach(type => {
        assemblerfluid_rem(`extended_${type}_part`, `expatternprovider:ex_${type}_part`,[`ae2:${type}`, '4x ae2:calculation_processor', '#gtceu:circuits/ev', '4x gtceu:certus_quartz_skystone_alloy_plate','4x gtceu:gold_skystone_alloy_plate'],'sky_steel 576', 2048);
    });

    if (global.packmode !== 'hard'){(() => { // ME IO       
    ['input_bus', 'output_bus', 'input_hatch', 'output_hatch'].forEach(type => {
        assembler(`me_${type}`, `gtceu:me_${type}`, [`gtceu:ev_${type}`, '#gtceu:circuits/ev', 'ae2:fluix_smart_cable'], 8192);
    });
    })()};

    assemblerspecex('tag','gtceu:item_tag_filter');
    assemblerspecex('mod','gtceu:item_filter');
    assemblerspecex('precise','gtceu:mv_robot_arm');

    event.recipes.gtceu.wiremill(id('fluix_glass_cables'))
        .itemInputs('ae2:quartz_fiber', 'ae2:fluix_crystal')
        .itemOutputs('4x ae2:fluix_glass_cable')
        .duration(40)
        .EUt(16);
    
    const shapedRecipeRem = (output, pattern, key) => {
        event.remove({output: `${output}`});
        event.shaped(`${output}`, pattern, key).id(`start:shaped/ae/${output.split(':')[1]}`);
    }


    shapedRecipeRem('ae2:energy_cell', [
        'ABA',
        'BCB',
        'ABA'], {
        A: 'gtceu:silicon_plate',
        B: 'gtceu:diamond_skystone_alloy_plate',
        C: 'gtceu:energium_dust'
    });

    shapedRecipeRem('ae2:spatial_io_port', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'thermal:obsidian_glass',
        B: 'ae2:fluix_glass_cable',
        C: 'ae2:io_port',
        D: 'gtceu:sky_steel_plate',
        E: 'ae2:engineering_processor'
    });
    
    shapedRecipeRem('ae2:quantum_link', [
        'ABA',
        'BCB',
        'ABA'],{
        A: 'gtceu:double_tungsten_plate',
        B: 'gtceu:tungsten_rod',
        C: 'thermal:enderium_glass'
    });

    shapedRecipeRem('ae2:controller', [
        'HFH',
        'FCF',
        'HFH'
    ], {
        C: 'gtceu:fluix_steel_frame',
        F: 'gtceu:diamond_skystone_alloy_plate',
        H: 'ae2:engineering_processor'
    });

    shapedRecipeRem('ae2:molecular_assembler', [
            'HFH',
            'JCB',
            'HFH'
        ], {
            C: 'minecraft:crafting_table',
            H: 'ae2:quartz_glass',
            F: 'gtceu:gold_skystone_alloy_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core'
        });
    
    event.shaped('ae2:pattern_provider', [
            'HFH',
            'JAB',
            'HFH'
        ], {
            H: 'minecraft:crafting_table',
            F: 'gtceu:gold_skystone_alloy_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core',
            A: 'gtceu:sky_steel_frame'
        });

    event.shaped('ae2:interface', [
            'HFH',
            'JAB',
            'HFH'
        ], {
            H: '#forge:glass',
            F: 'gtceu:certus_quartz_skystone_alloy_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core',
            A: 'gtceu:sky_steel_frame'
        });

    ['minecraft:sand','minecraft:gravel','exnihilosequentia:dust','exnihilosequentia:crushed_blackstone'].forEach(Sediment => {
    event.shaped(Item.of('expatternprovider:infinity_cell', `{record:{"#c":"ae2:i",id:"${Sediment}"}}`),[
            'BAB',
            'CDC',
            'FEF'
    ],{
            A: 'gtceu:luv_electric_piston',
            B: Sediment,
            C: 'gtceu:double_netherite_certus_quartz_skystone_alloy_plate',
            D: Item.of('expatternprovider:infinity_cell', `{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}`),
            E: 'gtceu:luv_conveyor_module',
            F: 'gtceu:pure_netherite_gear'
    });
});

    shapedRecipeRem('ae2:crafting_unit', [
            'HFH',
            'BCB',
            'HFH'
        ], {
            C: 'gtceu:fluix_steel_frame',
            H: 'ae2:calculation_processor',
            F: 'gtceu:sky_steel_plate',
            B: 'ae2:fluix_glass_cable'
        });

    shapedRecipeRem('ae2:energy_acceptor', [
            'HFH',
            'FCF',
            'HFH'
        ], {
            C: 'gtceu:sky_steel_frame',
            F: 'ae2:quartz_glass',
            H: 'gtceu:sky_steel_plate',
        });

    shapedRecipeRem('ae2:drive', [
            'HFH',
            'BAB',
            'HFH'
        ], {
            F: 'ae2:engineering_processor',
            H: 'gtceu:sky_steel_plate',
            B: 'ae2:fluix_glass_cable',
            A: 'gtceu:fluix_steel_frame'
        });

    shapedRecipeRem('ae2:condenser', [
            'HFH',
            'FCF',
            'HFH'
        ], {
            C: 'gtceu:quantum_star',
            F: '#forge:glass',
            H: 'gtceu:sky_steel_plate',
        });

    shapedRecipeRem('ae2:cell_workbench', [
            'ABA',
            'CEC',
            'CCC'
        ], {
            A: 'gtceu:certus_quartz_skystone_alloy_plate',
            B: 'ae2:calculation_processor',
            C: 'gtceu:sky_steel_plate',
            E: '#forge:chests/wooden'
        });

    shapedRecipeRem('ae2:io_port', [
            'AAA',
            'BCB',
            'DED'
        ], {
            A: '#forge:glass',
            B: 'ae2:drive',
            C: 'gtceu:sky_steel_frame',
            D: 'gtceu:sky_steel_plate',
            E: 'ae2:engineering_processor'
        });

    shapedRecipeRem('ae2:chest', [
            'ABA',
            'CFC',
            'DED'
        ], {
            A: '#forge:glass',
            B: 'ae2:terminal',
            C: 'ae2:fluix_glass_cable',
            D: 'gtceu:sky_steel_plate',
            E: 'gtceu:gold_skystone_alloy_ingot',
            F: 'gtceu:sky_steel_frame'
        });

    shapedRecipeRem('ae2:memory_card',[
        'ABB',
        'CDC'],{
            A: 'ae2:calculation_processor',
            B: 'gtceu:diamond_skystone_alloy_plate',
            C: 'gtceu:gold_skystone_alloy_plate',
            D: 'minecraft:redstone'
        }
    );

    shapedRecipeRem('ae2wtlib:magnet_card',[
        'ABA',
        'ACA',
        'EDE'],{
            A: 'gtceu:certus_quartz_skystone_alloy_plate',
            B: 'gtceu:lv_field_generator',
            C: 'ae2:advanced_card',
            D: 'gtceu:lv_item_magnet',
            E: 'gtceu:diamond_skystone_alloy_plate'
        });

    shapedRecipeRem('ae2wtlib:quantum_bridge_card',[
        '   ',
        'ABA',
        ' C '],{
            A: 'ae2:fluix_pearl',
            B: 'ae2:quantum_link',
            C: 'ae2:wireless_receiver'
        })

    shapedRecipeRem('merequester:requester',[
        'ABA',
        'CDC',
        'EFE'],{
            A: 'gtceu:certus_quartz_skystone_alloy_plate',
            B: '#ae2:interface',
            C: 'ae2:crafting_accelerator',
            D: 'ae2:engineering_processor',
            E: 'gtceu:gold_skystone_alloy_ingot',
            F: 'gtceu:flawless_certus_quartz_gem'

        });

    shapedRecipeRem('ae2:pattern_access_terminal',[
        'AB',
        'C '],{
            A: 'gtceu:computer_monitor_cover',
            B: 'ae2:engineering_processor',
            C: '#ae2:pattern_provider'
    });
    
    shapedRecipeRem('ae2:terminal',[
        'AB',
        'CD'],{
            A: 'ae2:formation_core',
            B: 'gtceu:computer_monitor_cover',
            C: 'ae2:logic_processor',
            D: 'ae2:annihilation_core'
    });

    shapedRecipeRem('merequester:requester_terminal',[
        'AB',
        'C '],{
            A: 'gtceu:computer_monitor_cover',
            B: 'ae2:logic_processor',
            C: 'merequester:requester'
    });

    shapedRecipeRem('expatternprovider:wireless_connect',[
        'ABA',
        'CDC',
        'AEA'],{
            A: 'ae2:sky_dust',
            B: 'gtceu:mv_sensor',
            C: '#ae2:smart_cable',
            D: 'ae2:engineering_processor',
            E: 'gtceu:mv_emitter'
        });

    if (global.packmode !== 'hard'){(() => {       
    ['lv', 'mv', 'hv', 'ev', 'iv', 'luv'].forEach(voltage => {
        let cable = (voltage) => {
            let mat;
            switch(voltage) {
                case 'lv': {mat = 'tin'; break}
                case 'mv': {mat = 'copper'; break}
                case 'hv': {mat = 'gold'; break}
                case 'ev': {mat = 'aluminium'; break}
                case 'iv': {mat = 'platinum'; break}
                case 'luv': {mat = 'niobium_titanium'; break}
            }
            return mat
        };
        event.shaped(`gtceu:${voltage}_me_assembler`, [
            'ABC',
            'DED',
            'FFG'],{
            A: `gtceu:${voltage}_emitter`,
            B: `gtceu:${voltage}_conveyor_module`,
            C: `#gtceu:circuits/${voltage}`,
            D: `gtceu:${voltage}_robot_arm`,
            E: `gtceu:${voltage}_machine_hull`,
            F: `gtceu:${cable(voltage)}_single_cable`,
            G: `gtceu:${voltage}_electric_motor`
        }).id(`start:shaped/${voltage}_me_assembler`);        
    });

    event.shaped('2x kubejs:fluix_steel_casing', [
        'ABA',
        'ACA',
        'ADA'],{
        A: 'gtceu:double_fluix_steel_plate',
        B: '#forge:tools/hammers',
        C: 'gtceu:fluix_steel_frame',
        D: '#forge:tools/wrenches'
    });

    event.recipes.gtceu.assembler(id('fluix_steel_casing'))
        .itemInputs('6x gtceu:double_fluix_steel_plate', 'gtceu:fluix_steel_frame')
        .itemOutputs('2x kubejs:fluix_steel_casing')
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.assembler(id('large_me_assembler'))
        .itemInputs('kubejs:fluix_steel_casing', '2x gtceu:iv_robot_arm', 'gtceu:iv_emitter', '2x #gtceu:circuits/iv',
            '16x gtceu:fine_vanadium_gallium_wire', '8x gtceu:uranium_triplatinum_single_wire')
        .itemOutputs('gtceu:large_me_assembler')
        .duration(600)
        .EUt(8192);
    })()};

    assembler_rem('quantum_ring', 'ae2:quantum_ring', ['gtceu:tungsten_carbide_frame', 'gtceu:ev_field_generator', 'gtceu:ev_emitter', 'gtceu:quantum_star', '6x gtceu:double_fluix_steel_plate'], 2048);

    assemblerfluid_rem('mega_energy_cell', 'megacells:mega_energy_cell', ['gtceu:netherite_gold_skystone_alloy_frame', '8x ae2:dense_energy_cell', 'gtceu:lapotronic_energy_orb'], 'fluix_steel 576', 8192);
    assemblerfluid_rem('expanded_energy_cell', 'expandedae:exp_energy_cell', ['gtceu:void_frame', '8x megacells:mega_energy_cell', 'gtceu:max_battery', '6x gtceu:stellarium_plate'], 'netherite_gold_skystone_alloy 1152', 983040);

    assemblerfluid_rem('mega_crafting_unit','megacells:mega_crafting_unit',['gtceu:netherite_certus_quartz_skystone_alloy_frame', '8x ae2:crafting_unit','#gtceu:circuits/iv'],'fluix_steel 576',8192);

    assemblerfluid_rem('ex_pattern_access_part','expatternprovider:ex_pattern_access_part',['ae2:pattern_access_terminal','4x gtceu:certus_quartz_skystone_alloy_plate','4x ae2:engineering_processor','#gtceu:circuits/hv'],'fluix_steel 576', 128);
    
    assemblerfluid('oversize_interface','expatternprovider:oversize_interface',['expatternprovider:ex_interface','4x ae2:capacity_card','4x gtceu:gold_skystone_alloy_plate'],'sky_steel 576',2048);

    assemblerfluid_rem('pattern_terminal_upgrade','expatternprovider:pattern_terminal_upgrade',['4x gtceu:double_certus_quartz_skystone_alloy_plate','4x ae2:engineering_processor','#gtceu:circuits/ev'],'sky_steel 576',2048, 1);
    assemblerfluid_rem('io_bus_upgrade','expatternprovider:io_bus_upgrade',['4x ae2:calculation_processor','#gtceu:circuits/ev','4x gtceu:certus_quartz_skystone_alloy_plate','4x gtceu:gold_skystone_alloy_plate'],'sky_steel 576',2048, 1);
    assemblerfluid_rem('drive_upgrade','expatternprovider:drive_upgrade',['4x ae2:calculation_processor','#gtceu:circuits/ev','8x gtceu:diamond_skystone_alloy_plate', '4x gtceu:certus_quartz_skystone_alloy_plate'],'sky_steel 576',2048, 1);
    
    assemblerfluid_rem('interface_upgrade','expatternprovider:interface_upgrade',['8x ae2:calculation_processor','#gtceu:circuits/hv','#gtceu:circuits/ev','8x gtceu:diamond_skystone_alloy_plate','4x gtceu:double_certus_quartz_skystone_alloy_plate'],'sky_steel 1152',2048, 1);
    assemblerfluid_rem('pattern_provider_upgrade','expatternprovider:pattern_provider_upgrade',['8x ae2:calculation_processor','#gtceu:circuits/hv','#gtceu:circuits/ev','8x gtceu:diamond_skystone_alloy_plate','4x gtceu:double_gold_skystone_alloy_plate'],'sky_steel 1152',2048, 1);

    assemblerfluid_rem('expanded_pattern_provider_upgrade','expandedae:exp_pattern_provider_upgrade', ['expatternprovider:pattern_provider_upgrade', '4x ae2:engineering_processor', '#gtceu:circuits/iv', '8x gtceu:netherite_certus_quartz_skystone_alloy_plate'],'fluix_steel 576', 8192, 1);

    assemblerfluid_rem('assembler_matrix_frame','expatternprovider:assembler_matrix_frame',['gtceu:plascrete','2x ae2:fluix_smart_dense_cable','4x gtceu:ruthenium_plate'],'fluix_steel 576',2048);
    assemblerfluid_rem('assembler_matrix_wall','expatternprovider:assembler_matrix_wall',['gtceu:plascrete','4x ae2:fluix_smart_cable','2x gtceu:ruthenium_plate'],'fluix_steel 576',2048);
    assemblerfluid_rem('assembler_matrix_glass','expatternprovider:assembler_matrix_glass',['gtceu:cleanroom_glass','4x ae2:fluix_smart_cable','2x gtceu:ruthenium_plate'],'fluix_steel 576',2048);

    assemblerfluid_rem('assembler_matrix_pattern','expatternprovider:assembler_matrix_pattern',['expatternprovider:assembler_matrix_wall','2x expatternprovider:ex_pattern_provider'],'netherite_certus_quartz_skystone_alloy 576',2048);
    assemblerfluid_rem('assembler_matrix_crafter','expatternprovider:assembler_matrix_crafter',['expatternprovider:assembler_matrix_wall','2x expatternprovider:ex_molecular_assembler'],'netherite_certus_quartz_skystone_alloy 576',2048);
    assemblerfluid_rem('assembler_matrix_speed','expatternprovider:assembler_matrix_speed',['expatternprovider:assembler_matrix_wall','2x ae2:speed_card'],'netherite_certus_quartz_skystone_alloy 576',2048);

    const repIn = (recId, target, replace) => {
        event.replaceInput({ id: recId}, target, replace)
    };

    ['ae2:network/parts/tunnels_me', 'ae2:network/parts/export_bus', 'ae2:network/parts/import_bus', 'ae2:materials/basiccard', 'ae2:materials/advancedcard',
        'ae2netanalyser:analyser', 'ae2:network/parts/formation_plane', 'ae2:network/parts/formation_plane_alt', 'ae2:network/parts/annihilation_plane_alt',
        'ae2:network/parts/annihilation_plane_alt2'].forEach(type => {
        repIn(`${type}`,'minecraft:iron_ingot','gtceu:certus_quartz_skystone_alloy_plate');
    });

    ['ae2:network/crafting/patterns_blank', 'ae2:network/wireless_booster', 'megacells:network/cell_dock', 'megacells:crafting/decompression_module',
        'expatternprovider:ingredient_buffer', 'expatternprovider:wireless_tool'].forEach(type => {
       repIn(`${type}`,'minecraft:iron_ingot','gtceu:diamond_skystone_alloy_plate'); 
    });

    repIn('ae2:misc/tiny_tnt','minecraft:gunpowder','gtceu:gelled_toluene');
    repIn('ae2:network/blocks/energy_dense_energy_cell','ae2:calculation_processor','gtceu:energium_dust');
    repIn('ae2:materials/basiccard','minecraft:gold_ingot','gtceu:gold_skystone_alloy_plate');
    repIn('ae2:materials/advancedcard','minecraft:diamond','gtceu:diamond_skystone_alloy_plate');
    repIn('ae2netanalyser:analyser','minecraft:copper_ingot','gtceu:gold_skystone_alloy_plate');
    repIn('megacells:network/cell_dock','minecraft:copper_ingot','gtceu:gold_skystone_alloy_plate');
    repIn('megacells:crafting/decompression_module','megacells:accumulation_processor','#gtceu:circuits/hv');
    repIn('ae2:network/blocks/spatial_io_pylon', 'ae2:fluix_crystal','gtceu:fluix_steel_frame');
    repIn('expatternprovider:wireless_tool', 'ae2:calculation_processor','gtceu:machine_memory_card');
    repIn('expatternprovider:water_cell', 'minecraft:diamond','gtceu:double_diamond_skystone_alloy_plate');
    repIn('expatternprovider:cobblestone_cell', 'minecraft:diamond','gtceu:double_diamond_skystone_alloy_plate');
    repIn('aeinfinitybooster:infinity_card', 'minecraft:netherite_ingot','gtceu:netherite_certus_quartz_skystone_alloy_plate');
    repIn('aeinfinitybooster:dimension_card', 'minecraft:ender_eye','gtceu:exquisite_echo_shard_gem');
    repIn('aeinfinitybooster:dimension_card', 'minecraft:nether_star','gtceu:quantum_star');

});