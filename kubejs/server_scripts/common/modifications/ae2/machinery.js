ServerEvents.recipes(event => {
    const id = global.id;

    const assembler = (id1, output, input, eu, circuit) => {
        const recipe = event.recipes.gtceu.assembler(id(`${id1}`));

        recipe
            .itemInputs(input)
            .itemOutputs(`${output}`)
            .duration(400)
            .EUt(eu);

        if (circuit) {
            recipe.circuit(circuit);
        }
    }

    const assembler_rem = (id1, output, input, eu, circuit) => {
        event.remove({output: `${output}`})
        assembler(id1, output, input, eu, circuit)
    }

    const assemblerFluid = (id1, output, inputit, inputfl, eu, circuit) => {
        const recipe = event.recipes.gtceu.assembler(id(`${id1}`))

        recipe
            .itemInputs(inputit)
            .inputFluids(`gtceu:${inputfl}`)
            .itemOutputs(`${output}`)
            .duration(400)
            .EUt(eu);
        
        if (circuit) {
            recipe.circuit(circuit)
        }
    }

    const assemblerFluidRem = (id1, output, inputit, inputfl, eu, circuit) => {
        event.remove({output: `${output}`})
        assemblerFluid(id1, output, inputit, inputfl, eu, circuit)
    }

    const extended = (item, input) => {
        assemblerFluidRem(`extended_${item}`, `expatternprovider:ex_${item}`, [
                `ae2:${input}`, '4x ae2:calculation_processor', '#gtceu:circuits/ev', '8x gtceu:diamond_skystone_alloy_plate'
            ], 'sky_steel 576', GTValues.V[GTValues.EV]);
    }

    const assemblerspecex = (item,input) => {
        assemblerFluidRem(`${item}_storage_bus`, `expatternprovider:${item}_storage_bus`, [
                '2x ae2:storage_bus',`${input}`
            ], 'soldering_alloy 144', GTValues.V[GTValues.EV]);
        assemblerFluidRem(`${item}_export_bus`, `expatternprovider:${item}_export_bus`, [
                '2x ae2:export_bus',`${input}`
            ], 'soldering_alloy 144', GTValues.V[GTValues.EV]);
    }

    //Energy Cells
    assemblerFluidRem('mega_energy_cell', 'megacells:mega_energy_cell', [
            'gtceu:netherite_gold_skystone_alloy_frame', '8x ae2:dense_energy_cell', 'gtceu:lapotronic_energy_orb'
        ], 'fluix_steel 576', GTValues.V[GTValues.IV]);

    assemblerFluidRem('expanded_energy_cell', 'expandedae:exp_energy_cell', [
            'gtceu:void_frame', '8x megacells:mega_energy_cell', 'gtceu:max_battery'
        ], 'netherite_gold_skystone_alloy 1152', GTValues.VHA[GTValues.UHV]);

    //Interfaces
    assemblerFluid('mega_interface','megacells:mega_interface', [
            'ae2:interface', '4x ae2:calculation_processor', '#gtceu:circuits/hv', '8x gtceu:diamond_skystone_alloy_plate'
        ], 'sky_steel 576', GTValues.V[GTValues.HV]);

    assemblerFluid('ex_interface', 'expatternprovider:ex_interface', [
        'megacells:mega_interface', '4x ae2:calculation_processor', '#gtceu:circuits/ev', '4x gtceu:double_certus_quartz_skystone_alloy_plate'
    ], 'sky_steel 576', GTValues.V[GTValues.EV]);

    assemblerFluid('oversize_interface','expatternprovider:oversize_interface', [
            'expatternprovider:ex_interface','4x ae2:capacity_card','4x gtceu:gold_skystone_alloy_plate'
        ], 'sky_steel 576',GTValues.V[GTValues.EV]);
    
    //Pattern Providers
    assemblerFluid('mega_pattern_provider','megacells:mega_pattern_provider', [
            'ae2:pattern_provider', '4x ae2:calculation_processor', '#gtceu:circuits/hv', '8x gtceu:diamond_skystone_alloy_plate'
        ], 'sky_steel 576', GTValues.V[GTValues.HV]);

    assemblerFluid('ex_pattern_provider', 'expatternprovider:ex_pattern_provider', [
            'megacells:mega_pattern_provider', '4x ae2:calculation_processor', '#gtceu:circuits/ev', '4x gtceu:double_gold_skystone_alloy_plate'
        ], 'sky_steel 576', GTValues.V[GTValues.EV]);

    assemblerFluid('expanded_pattern_provider','expandedae:exp_pattern_provider', [
            'expatternprovider:ex_pattern_provider', '4x ae2:engineering_processor', '#gtceu:circuits/iv', '8x gtceu:netherite_certus_quartz_skystone_alloy_plate'
        ], 'fluix_steel 576', GTValues.V[GTValues.IV]);

    assemblerFluid('giga_pattern_provider', 'expandedae:giga_pattern_provider', [
            'expandedae:exp_pattern_provider', '16x ae2:engineering_processor', '#gtceu:circuits/uhv', '8x gtceu:double_netherite_gold_skystone_alloy_plate'
        ], 'fluix_steel 2304', GTValues.V[GTValues.UHV]);
    
    //Upgrade Kits
    let ppu = 'pattern_provider_upgrade';
    assemblerFluidRem('pattern_terminal_upgrade', 'expatternprovider:pattern_terminal_upgrade', [
            '4x gtceu:double_certus_quartz_skystone_alloy_plate', '4x ae2:engineering_processor', '#gtceu:circuits/ev'
        ], 'sky_steel 576', GTValues.V[GTValues.EV], 1);

    assemblerFluidRem('io_bus_upgrade', 'expatternprovider:io_bus_upgrade', [
            '4x ae2:calculation_processor', '#gtceu:circuits/ev', '4x gtceu:certus_quartz_skystone_alloy_plate', '4x gtceu:gold_skystone_alloy_plate'
        ], 'sky_steel 576', GTValues.V[GTValues.EV], 1);

    assemblerFluidRem('drive_upgrade', 'expatternprovider:drive_upgrade', [
            '4x ae2:calculation_processor', '#gtceu:circuits/ev', '8x gtceu:diamond_skystone_alloy_plate', '4x gtceu:certus_quartz_skystone_alloy_plate'
        ], 'sky_steel 576', GTValues.V[GTValues.EV], 1);
    
    assemblerFluidRem('interface_upgrade', 'expatternprovider:interface_upgrade', [
            '8x ae2:calculation_processor', '#gtceu:circuits/hv', '#gtceu:circuits/ev', '8x gtceu:diamond_skystone_alloy_plate', '4x gtceu:double_certus_quartz_skystone_alloy_plate'
        ], 'sky_steel 1152', GTValues.V[GTValues.EV], 1);

    assemblerFluidRem(ppu, `expatternprovider:${ppu}`, [
            '8x ae2:calculation_processor', '#gtceu:circuits/hv', '#gtceu:circuits/ev', '8x gtceu:diamond_skystone_alloy_plate', '4x gtceu:double_gold_skystone_alloy_plate'
        ], 'sky_steel 1152', GTValues.V[GTValues.EV], 1);
        
    assemblerFluidRem(`mega_${ppu}`, `expandedae:mega_${ppu}`, [
        `expandedae:ext_${ppu}`, '4x ae2:calculation_processor', '#gtceu:circuits/ev', 'gtceu:double_gold_skystone_alloy_plate'
    ], 'sky_steel 576', GTValues.V[GTValues.HV], 1);

    assemblerFluidRem(`ext_${ppu}`, `expandedae:ext_${ppu}`, [
            '4x ae2:engineering_processor', '#gtceu:circuits/iv', '8x gtceu:netherite_certus_quartz_skystone_alloy_plate'
        ], 'fluix_steel 576', GTValues.V[GTValues.IV], 1);

    assemblerFluidRem(`expanded_${ppu}`, `expandedae:exp_${ppu}`, [
            `expatternprovider:${ppu}`, '4x ae2:engineering_processor', '#gtceu:circuits/iv', '8x gtceu:netherite_certus_quartz_skystone_alloy_plate'
        ], 'fluix_steel 576', GTValues.V[GTValues.IV], 1);

    assemblerFluid(`m2g_${ppu}`, `expandedae:m2g_${ppu}`, [
        `expandedae:ext2g_${ppu}`, '4x ae2:calculation_processor', '#gtceu:circuits/ev', '4x gtceu:double_gold_skystone_alloy_plate'
        ], 'sky_steel 576', GTValues.V[GTValues.EV], 1);

    assemblerFluid(`ext2g_${ppu}`, `expandedae:ext2g_${ppu}`, [
        `expandedae:exp2g_${ppu}`, '4x ae2:engineering_processor', '#gtceu:circuits/iv', '8x gtceu:netherite_certus_quartz_skystone_alloy_plate'
        ], 'fluix_steel 576', GTValues.V[GTValues.IV], 1);

    assemblerFluid(`exp2g_${ppu}`, `expandedae:exp2g_${ppu}`, [
        '16x ae2:engineering_processor', '#gtceu:circuits/uhv', '8x gtceu:double_netherite_gold_skystone_alloy_plate'
        ], 'fluix_steel 2304', GTValues.V[GTValues.UHV], 1);

    event.recipes.gtceu.assembler(id(`p2g_${ppu}`))
        .itemInputs(`expatternprovider:${ppu}`, `expandedae:ext2g_${ppu}`)
        .itemOutputs(`expandedae:p2g_${ppu}`)
        .circuit(5)
        .duration(1)
        .EUt(GTValues.VH[GTValues.ULV]);
    
    //Infinity Cells
    [
        'minecraft:sand','minecraft:gravel','exnihilosequentia:dust','exnihilosequentia:crushed_blackstone'
    ].forEach(Sediment => {
        event.shaped(Item.of('expatternprovider:infinity_cell', `{record:{"#c":"ae2:i",id:"${Sediment}"}}`), [
            'BAB',
            'CDC',
            'FEF'
        ],{
            A: 'gtceu:luv_electric_piston',
            B: Sediment,
            C: 'gtceu:double_netherite_certus_quartz_skystone_alloy_plate',
            D: Item.of('expatternprovider:infinity_cell', `{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}`).strongNBT(),
            E: 'gtceu:luv_conveyor_module',
            F: 'gtceu:pure_netherite_gear'
        });
    });

    //General AE
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
            'ABA'
        ], {
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
            'ABA'
        ],{
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

    shapedRecipeRem('ae2:memory_card', [
            'ABB',
            'CDC'
        ],{
                A: 'ae2:calculation_processor',
                B: 'gtceu:diamond_skystone_alloy_plate',
                C: 'gtceu:gold_skystone_alloy_plate',
                D: 'minecraft:redstone'
            }
        );

    shapedRecipeRem('ae2wtlib:magnet_card', [
            'ABA',
            'ACA',
            'EDE'
        ],{
            A: 'gtceu:certus_quartz_skystone_alloy_plate',
            B: 'gtceu:lv_field_generator',
            C: 'ae2:advanced_card',
            D: 'gtceu:lv_item_magnet',
            E: 'gtceu:diamond_skystone_alloy_plate'
        });

    shapedRecipeRem('ae2wtlib:quantum_bridge_card', [
            '   ',
            'ABA',
            ' C '
        ],{
            A: 'ae2:fluix_pearl',
            B: 'ae2:quantum_link',
            C: 'ae2:wireless_receiver'
        })

    shapedRecipeRem('merequester:requester', [
            'ABA',
            'CDC',
            'EFE'
        ],{
            A: 'gtceu:certus_quartz_skystone_alloy_plate',
            B: '#ae2:interface',
            C: 'ae2:crafting_accelerator',
            D: 'ae2:engineering_processor',
            E: 'gtceu:gold_skystone_alloy_ingot',
            F: 'gtceu:flawless_certus_quartz_gem'
        });

    shapedRecipeRem('ae2:pattern_access_terminal', [
            'AB',
            'C '
        ],{
            A: 'gtceu:computer_monitor_cover',
            B: 'ae2:engineering_processor',
            C: '#ae2:pattern_provider'
        });
    
    shapedRecipeRem('ae2:terminal', [
            'AB',
            'CD'
        ],{
            A: 'ae2:formation_core',
            B: 'gtceu:computer_monitor_cover',
            C: 'ae2:logic_processor',
            D: 'ae2:annihilation_core'
        });

    shapedRecipeRem('merequester:requester_terminal', [
            'AB',
            'C '
        ],{
            A: 'gtceu:computer_monitor_cover',
            B: 'ae2:logic_processor',
            C: 'merequester:requester'
        });

    shapedRecipeRem('megacells:cell_dock', [
            'DGD',
            'PWP'
        ],{
            D: 'gtceu:diamond_skystone_alloy_plate',
            G: 'gtceu:gold_skystone_alloy_plate',
            P: 'ae2:engineering_processor',
            W: '#ae2:glass_cable'
        });

    shapedRecipeRem('expatternprovider:wireless_connect', [
            'ABA',
            'CDC',
            'AEA'
        ],{
            A: 'ae2:sky_dust',
            B: 'gtceu:mv_sensor',
            C: '#ae2:smart_cable',
            D: 'ae2:engineering_processor',
            E: 'gtceu:mv_emitter'
        });

    assemblerFluidRem('quantum_ring', 'ae2:quantum_ring', [
            'gtceu:tungsten_carbide_frame', 'gtceu:ev_field_generator', 'gtceu:ev_emitter', 'gtceu:quantum_star', '6x gtceu:double_fluix_steel_plate'
        ], 'soldering_alloy 144', GTValues.V[GTValues.EV]);

    //Assembler Matrix
    assemblerFluidRem('assembler_matrix_frame','expatternprovider:assembler_matrix_frame', [
            'gtceu:plascrete','2x ae2:fluix_smart_dense_cable', '4x gtceu:ruthenium_plate'
        ], 'fluix_steel 576', GTValues.V[GTValues.EV]);

    assemblerFluidRem('assembler_matrix_wall','expatternprovider:assembler_matrix_wall', [
            'gtceu:plascrete','4x ae2:fluix_smart_cable', '2x gtceu:ruthenium_plate'
        ], 'fluix_steel 576', GTValues.V[GTValues.EV]);

    assemblerFluidRem('assembler_matrix_glass','expatternprovider:assembler_matrix_glass', [
            'gtceu:cleanroom_glass','4x ae2:fluix_smart_cable', '2x gtceu:ruthenium_plate'
        ], 'fluix_steel 576', GTValues.V[GTValues.EV]);

    assemblerFluidRem('assembler_matrix_pattern','expatternprovider:assembler_matrix_pattern', [
            'expatternprovider:assembler_matrix_wall', '2x expatternprovider:ex_pattern_provider'
        ], 'netherite_certus_quartz_skystone_alloy 576', GTValues.V[GTValues.EV]);

    assemblerFluidRem('assembler_matrix_crafter','expatternprovider:assembler_matrix_crafter', [
            'expatternprovider:assembler_matrix_wall','2x expatternprovider:ex_molecular_assembler'
        ], 'netherite_certus_quartz_skystone_alloy 576', GTValues.V[GTValues.EV]);

    assemblerFluidRem('assembler_matrix_speed','expatternprovider:assembler_matrix_speed', [
            'expatternprovider:assembler_matrix_wall','2x ae2:speed_card'
        ], 'netherite_certus_quartz_skystone_alloy 576', GTValues.V[GTValues.EV]);
    
    //ME Hatches
    let consTier;
    let input;
    let casingMaterial;
    let pipeMaterial;
    let circuit;
    let recId;
    let fluidMulti;

    ['luv', 'zpm'].forEach(tier => {
        casingMaterial = global.casingMaterials[tier];
        consTier = (tier == 'luv') ? 'ZPM' : 'UV';
        input = (tier == 'luv') ? 'input' : 'stocking_input';
        
        ['bus', 'hatch'].forEach(type => {
            assembler(`expanded_me_${input}_${type}`, `expandedgt:expanded_me_${input}_${type}`, [
                `gtceu:me_${input}_${type}`, `4x ${casingMaterial}_plate`, '2x ae2:capacity_card', `3x #gtceu:circuits/${tier}` 
            ], GTValues.V[GTValues[consTier]]);
        });
    });
    
    ['luv'].forEach(tier => { //to allow for dual stockings to be thrown into this when done
        casingMaterial = global.casingMaterials[tier];
        pipeMaterial = (tier == 'luv') ? 'gtceu:niobium_titanium' : 'gtceu:polybenzimidazole';
        fluidMulti = (tier == 'luv') ? 7 : 8;
        consTier = (tier == 'luv') ? 'ZPM' : 'UV';

        ['input', 'output'].forEach(io => {
            recId = (io == 'input' && tier == 'luv') ? 'input' : (io == 'input' && tier == 'luv') ? 'stocking_input' : 'output';
            input = (tier == 'luv') ? 'input' : 'stocking_input';
            circuit = (io == 'input') ? 1 : 2;
            
            if (io == 'output' && tier == 'zpm') {
                return;
            }

            assemblerFluid(`dual_me_${recId}_hatch`, `expandedgt:dual_me_${recId}_hatch`, [
                `expandedgt:expanded_me_${input}_hatch`, `expandedgt:expanded_me_${input}_bus`, `${pipeMaterial}_nonuple_fluid_pipe`, `3x ${casingMaterial}_frame` 
            ], `polybenzimidazole ${144 * fluidMulti}`, GTValues.V[GTValues[consTier]], circuit);
        });
    });

    ['bus', 'hatch'].forEach(type => {
        assembler(`me_tag_filter_stocking_${type}`, `expandedgt:me_tag_filter_stocking_${type}`, [
            `gtceu:me_stocking_input_${type}`, Item.of('gtceu:item_tag_filter'), '4x gtceu:naquadah_alloy_plate', 'gtceu:zpm_sensor', 'gtceu:zpm_emitter'
        ], GTValues.V[GTValues.UV]);
    });
        
    //Misc
    assemblerFluid('linked_terminal', 'expandedgt:linked_terminal', [
        'gtceu:terminal', 'gtceu:titanium_plate', '2x gtceu:aluminium_double_wire', 'gtceu:ev_sensor', 'gtceu:ev_emitter'
    ], 'soldering_alloy 576', GTValues.VHA[GTValues.EV]);

    ['molecular_assembler', 'drive', 'io_port'].forEach(type => {
        extended(`${type}`, `${type}`);
    });

    assemblerFluidRem('mega_crafting_unit','megacells:mega_crafting_unit', [
            'gtceu:netherite_certus_quartz_skystone_alloy_frame', '8x ae2:crafting_unit','#gtceu:circuits/iv'
        ], 'fluix_steel 576', GTValues.V[GTValues.IV]);

    assemblerFluidRem('ex_pattern_access_part','expatternprovider:ex_pattern_access_part', [
            'ae2:pattern_access_terminal','4x gtceu:certus_quartz_skystone_alloy_plate','4x ae2:engineering_processor','#gtceu:circuits/hv'
        ], 'fluix_steel 576', GTValues.V[GTValues.MV]);

    assemblerFluidRem('expanded_io_port','expandedae:exp_io_port', [
            'expatternprovider:ex_io_port', '4x ae2:engineering_processor', '#gtceu:circuits/iv', '8x gtceu:netherite_certus_quartz_skystone_alloy_plate'
        ], 'fluix_steel 576', GTValues.V[GTValues.IV]);
    
    ['import_bus', 'export_bus'].forEach(type => {
        assemblerFluidRem(`extended_${type}_part`, `expatternprovider:ex_${type}_part`, [
                `ae2:${type}`, '4x ae2:calculation_processor', '#gtceu:circuits/ev', '4x gtceu:certus_quartz_skystone_alloy_plate','4x gtceu:gold_skystone_alloy_plate'
            ], 'sky_steel 576', GTValues.V[GTValues.EV]);
    });

    assemblerspecex('tag','gtceu:item_tag_filter');
    assemblerspecex('mod','gtceu:item_filter');
    assemblerspecex('precise','gtceu:mv_robot_arm');

    //Replaced Inputs
    const repIn = (recId, target, replace) => {
        event.replaceInput({ id: recId}, target, replace)
    };

    [
        'ae2:network/parts/tunnels_me', 'ae2:network/parts/export_bus', 'ae2:network/parts/import_bus', 'ae2:materials/basiccard', 'ae2:materials/advancedcard',
        'ae2netanalyser:analyser', 'ae2:network/parts/formation_plane', 'ae2:network/parts/formation_plane_alt', 'ae2:network/parts/annihilation_plane_alt',
        'ae2:network/parts/annihilation_plane_alt2'
    ].forEach(type => {
        repIn(`${type}`,'minecraft:iron_ingot','gtceu:certus_quartz_skystone_alloy_plate');
    });

    [
        'ae2:network/crafting/patterns_blank', 'ae2:network/wireless_booster', 'megacells:crafting/decompression_module', 'expatternprovider:ingredient_buffer', 'expatternprovider:wireless_tool'
    ].forEach(type => {
       repIn(`${type}`,'minecraft:iron_ingot','gtceu:diamond_skystone_alloy_plate'); 
    });

    repIn('ae2:misc/tiny_tnt','minecraft:gunpowder','gtceu:gelled_toluene');
    repIn('ae2:network/blocks/energy_dense_energy_cell','ae2:calculation_processor','gtceu:energium_dust');
    repIn('ae2:materials/basiccard','minecraft:gold_ingot','gtceu:gold_skystone_alloy_plate');
    repIn('ae2:materials/advancedcard','minecraft:diamond','gtceu:diamond_skystone_alloy_plate');
    repIn('ae2netanalyser:analyser','minecraft:copper_ingot','gtceu:gold_skystone_alloy_plate');
    repIn('megacells:crafting/decompression_module','megacells:accumulation_processor','#gtceu:circuits/hv');
    repIn('ae2:network/blocks/spatial_io_pylon', 'ae2:fluix_crystal','gtceu:fluix_steel_frame');
    repIn('expatternprovider:wireless_tool', 'ae2:calculation_processor','gtceu:machine_memory_card');
    repIn('expatternprovider:water_cell', 'minecraft:diamond','gtceu:double_diamond_skystone_alloy_plate');
    repIn('expatternprovider:cobblestone_cell', 'minecraft:diamond','gtceu:double_diamond_skystone_alloy_plate');
    repIn('aeinfinitybooster:infinity_card', 'minecraft:netherite_ingot','gtceu:netherite_certus_quartz_skystone_alloy_plate');
    repIn('aeinfinitybooster:dimension_card', 'minecraft:ender_eye','gtceu:exquisite_echo_shard_gem');
    repIn('aeinfinitybooster:dimension_card', 'minecraft:nether_star','gtceu:quantum_star');

});