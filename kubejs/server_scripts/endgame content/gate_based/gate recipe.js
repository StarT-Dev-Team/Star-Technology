ServerEvents.recipes(event => {
    const id = global.id;

    //Non Mandatory Display Controller
    event.shaped(Item.of('gtceu:classic_stargate_display'), [
        'GGG',
        'ROR',
        'SSS'
    ], {
        R: 'kubejs:stargate_rod',
        O: 'gtceu:object_holder',
        G: 'minecraft:glass',
        S: 'minecraft:smooth_stone'
    }).id('start:shaped/classic_stargate_display');

    //Multiblock Recipes
    
    event.recipes.gtceu.assembly_line(id('heat_chamber'))
        .itemInputs('gtceu:iridium_frame', '4x #gtceu:circuits/zpm', 'gtceu:double_rhodium_plated_palladium_plate', 
                'gtceu:double_tritanium_plate', 'gtceu:zpm_field_generator', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', 
                '32x gtceu:uhpic_chip', '48x gtceu:dragonsteel_single_wire')
        .inputFluids('gtceu:hsss 6912', 'gtceu:niobium_nitride 1728')
        .itemOutputs('gtceu:heat_chamber')
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uv_electric_furnace'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(48)
            )
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line(id('super_heat_chamber'))
            .itemInputs('gtceu:heat_chamber', '4x #gtceu:circuits/uv', 'gtceu:double_dragonsteel_plate', 
                    'gtceu:double_titanium_carbide_plate', 'gtceu:uv_field_generator', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '32x gtceu:uhpic_chip', '48x gtceu:prismalium_single_wire')
            .inputFluids('gtceu:hsse 6912', 'gtceu:niobium_titanium 1728')
            .itemOutputs('gtceu:super_pressure_heat_chamber')
            .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:heat_chamber'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(64)
            )
            .duration(3200)
            .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line(id('super_compact_heat_chamber'))
        .itemInputs('gtceu:heat_chamber', '4x #gtceu:circuits/uhv', 'gtceu:double_stellarium_plate', 
                'gtceu:double_ancient_netherite_plate', 'gtceu:uhv_field_generator', '64x kubejs:uepic_chip', 
                '32x kubejs:uepic_chip', '48x gtceu:ancient_runicalium_single_wire')
        .inputFluids('gtceu:hsse 6912', 'gtceu:tritanium 1728')
        .itemOutputs('gtceu:super_compact_heat_chamber')
        .stationResearch(
        researchRecipeBuilder => researchRecipeBuilder
            .researchStack(Item.of('gtceu:super_pressure_heat_chamber'))
            .EUt(GTValues.VHA[GTValues.UHV])
            .CWUt(160)
        )
        .duration(4800)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line(id('large_rotor_machine'))
        .itemInputs('gtceu:shellite_frame', '4x #gtceu:circuits/luv', 'gtceu:double_vanadium_gallium_plate', 
                'gtceu:double_red_steel_plate', 'gtceu:luv_field_generator', '2x gtceu:luv_electric_motor', '64x gtceu:uhpic_chip', 
                '32x gtceu:uhpic_chip', '4x gtceu:advanced_power_thruster', '4x gtceu:hssg_spring')
        .inputFluids('gtceu:soldering_alloy 3456', 'gtceu:yttrium_barium_cuprate 5184')
        .itemOutputs('gtceu:large_rotor_machine')
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
            .researchStack(Item.of('gtceu:long_void_rod'))
            .EUt(GTValues.VHA[GTValues.UV])
            .CWUt(64)
        )
        .duration(3000)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line(id('runic_engraver'))
            .itemInputs('gtceu:lumium_frame', '4x #gtceu:circuits/uv', 'gtceu:double_tantalum_carbide_plate', 
                    'gtceu:double_titanium_carbide_plate', '2x gtceu:uv_field_generator', '4x gtceu:uv_emitter', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '48x gtceu:blue_alloy_screw', 'gtceu:gravi_star')
            .inputFluids('gtceu:hsse 5184', 'gtceu:hssg 5184', 'gtceu:hsss 5184')
            .itemOutputs('gtceu:runic_circuitry_assembling_station')
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('kubejs:runic_wave_generator'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
            .duration(6000)
            .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line(id('quantum_compressor'))
            .itemInputs('gtceu:melodium_frame', '3x #gtceu:circuits/uv', 'gtceu:double_trinaquadalloy_plate', 
                    'gtceu:double_trinaquadalloy_plate', '2x gtceu:uv_field_generator', '16x gtceu:uv_electric_piston', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '32x gtceu:uhpic_chip', '48x gtceu:tritanium_screw')
            .inputFluids('gtceu:hsse 5184', 'gtceu:hssg 5184', 'gtceu:hsss 5184')
            .itemOutputs('gtceu:large_quantum_compressor')
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uv_compressor'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
            .duration(2400)
            .EUt(GTValues.VHA[GTValues.UV]);
    
    event.recipes.gtceu.assembly_line(id('stargate_component_assembly'))
            .itemInputs('gtceu:prismalium_frame', '4x #gtceu:circuits/uhv', '2x gtceu:uv_field_generator', '8x gtceu:gravi_star', 
                    '4x gtceu:uv_robot_arm', '4x gtceu:uv_robot_arm', '4x gtceu:uv_robot_arm', '4x gtceu:uv_robot_arm', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', 
                    '56x gtceu:stellarium_screw', '32x gtceu:melodium_single_wire')
            .inputFluids('gtceu:prismalium 36864', 'gtceu:pcb_coolant 64000', 'gtceu:osmiridium 73728')
            .itemOutputs('gtceu:stargate_component_assembly')
            .duration(6400)
            .stationResearch(
        researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('kubejs:stargate_rod'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
            )
            .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line(id('gate_assembly'))
            .itemInputs('gtceu:ancient_runicalium_frame', '32x #gtceu:circuits/uhv', '8x gtceu:uhv_field_generator', '8x kubejs:uhv_catalyst_core', 
                    '16x gtceu:uhv_robot_arm', '16x gtceu:uhv_robot_arm', '16x gtceu:uhv_robot_arm', '16x gtceu:uhv_robot_arm', 
                    '64x kubejs:uepic_chip', '64x kubejs:uepic_chip', '64x kubejs:uepic_chip', '64x kubejs:uepic_chip', 
                    '56x gtceu:ancient_runicalium_screw', '32x gtceu:stellarium_single_wire')
            .inputFluids('gtceu:stellarium 36864', 'gtceu:akreyrium_pcb_graphite_nanoparticle_coolant 64000', 'gtceu:tritanium 73728')
            .itemOutputs('gtceu:gate_assembly')
            .duration(9600)
            .stationResearch(
        researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:stargate_component_assembly'))
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(144)
            )
            .EUt(GTValues.VHA[GTValues.UEV]);
                
    event.recipes.gtceu.assembly_line(id('drackion_runic_laser_gen'))
            .itemInputs('gtceu:exquisite_runic_laser_source_base_gem', '2x gtceu:uv_field_generator', '4x gtceu:uv_sensor', '4x gtceu:uv_emitter', 
                '16x gtceu:energy_cluster', '16x gtceu:energy_cluster', '16x gtceu:energy_cluster','16x gtceu:energy_cluster', 
                '4x #gtceu:circuits/uhv', '16x gtceu:uv_voltage_coil', '4x gtceu:neutron_reflector', '24x gtceu:stellarium_screw',
                '64x gtceu:uhpic_wafer', '64x gtceu:uhpic_wafer', '16x gtceu:melodium_foil', '16x gtceu:prismalium_foil')
            .inputFluids('gtceu:neutronium 63000', 'gtceu:polybenzimidazole 54000', 'gtceu:naquadria 32000')
            .itemOutputs('kubejs:runic_wave_generator')
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('gtceu:exquisite_runic_laser_source_base_gem'))
                    .EUt(GTValues.VHA[GTValues.UV])
                    .CWUt(128)
            )
            .duration(24000)
            .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.assembler(id('laser_casing'))
        .itemInputs('6x gtceu:double_stellarium_plate', 'gtceu:stellarium_frame', 'kubejs:runic_wave_generator', 'gtceu:uv_field_generator', 'gtceu:uv_emitter')
        .itemOutputs('kubejs:laser_casing')
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UV])
        .circuit(7);

    event.recipes.gtceu.assembler(id('inscribe_casing'))
        .itemInputs('6x gtceu:double_ancient_runicalium_plate', 'gtceu:ancient_runicalium_frame', 'kubejs:runic_wave_generator', 'gtceu:uhv_field_generator', 'gtceu:uhv_emitter')
        .itemOutputs('kubejs:inscribe_casing')
        .duration(36000)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(7);

    //Void Line

    event.recipes.gtceu.extractor(id('echo_fluid'))
        .itemInputs('minecraft:echo_shard')
        .outputFluids('gtceu:echo_r 144')
        .duration(5000)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.fluid_solidifier(id('raw_void_ingot'))
        .itemInputs('gtceu:neutronium_ingot')
        .inputFluids('gtceu:echo_r 144')
        .itemOutputs('gtceu:raw_void_ingot')
        .duration(4000)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.remove({output: 'gtceu:hot_void_ingot'});

    event.recipes.gtceu.heat_chamber(id('crude_to_void_ingot'))
        .itemInputs('gtceu:raw_void_ingot')
        .itemOutputs('gtceu:hot_void_ingot')
        .blastFurnaceTemp(10799)
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.LuV]);

    //Material Adjustments
    event.replaceInput({id: 'gtceu:electric_blast_furnace/blast_weapon_grade_naquadah_gas'},
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );

    event.recipes.gtceu.bender(id('nether_star_foil'))
        .itemInputs('gtceu:nether_star_plate')
        .itemOutputs('4x gtceu:nether_star_foil')
        .duration(300)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.bender(id('echo_shard_foil'))
        .itemInputs('gtceu:echo_shard_plate')
        .itemOutputs('4x gtceu:echo_shard_foil')
        .duration(160)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LuV]);

    //Classic Gate Components
    event.recipes.gtceu.assembly_line(id('classic_stargate_computer_core'))
        .itemInputs('gtceu:stellarium_frame', '4x kubejs:computational_super_matrix', '16x gtceu:ruthenium_trinium_americium_neutronate_octal_wire', '16x gtceu:ruthenium_trinium_americium_neutronate_octal_wire',
            '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:fine_trinaquadalloy_wire', '64x gtceu:fine_trinaquadalloy_wire')
        .inputFluids('gtceu:soldering_alloy 72000', 'gtceu:sterilized_growth_medium 13500')
        .itemOutputs('kubejs:classic_stargate_computer_core')
        .duration(24000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('kubejs:abydos_coordinate_crystal'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line(id('crystal_interface'))
            .itemInputs('kubejs:stellarium_casing', '2x gtceu:double_iridium_plate', 'gtceu:uv_voltage_coil', 
                    '4x gtceu:stellarium_hex_wire', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', 
                    '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip')
            .inputFluids('gtceu:sodium_potassium 49000', 'gtceu:soldering_alloy 36864')
            .itemOutputs('sgjourney:crystal_interface')
            .duration(84000)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('gtceu:uhv_16a_energy_converter'))
                    .EUt(GTValues.VHA[GTValues.UV])
                    .CWUt(144)
            )
            .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembler(id('clasic_dhd'))
            .itemInputs('gtceu:atomic_casing', 'gtceu:computer_monitor_cover', 'gtceu:uv_field_generator', 'gtceu:uv_emitter', 'gtceu:uv_sensor', '8x gtceu:uhpic_chip', 'kubejs:runic_engraved_plating', '4x kubejs:runic_pathway_engraved_plating')
            .inputFluids('gtceu:soldering_alloy 1728')
            .itemOutputs('sgjourney:classic_dhd')
            .duration(8000)
            .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.stargate_component_assembly(id('classic_stargate_base_block'))
        .itemInputs('sgjourney:classic_stargate_ring_block','24x kubejs:runic_pathway_engraved_plating', '16x kubejs:runic_engraved_plating','16x kubejs:stargate_rod', 'kubejs:classic_stargate_computer_core', '64x gtceu:uhpic_chip')
        .inputFluids('gtceu:soldering_alloy 12000', 'gtceu:naquadria 36000', 'gtceu:sterilized_growth_medium 8000')
        .itemOutputs('sgjourney:classic_stargate_base_block')
        .duration(48000)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.stargate_component_assembly(id('classic_stargate_ring_block'))
        .itemInputs('gtceu:stellarium_frame', '36x gtceu:double_naquadah_alloy_plate', '8x kubejs:runic_pathway_engraved_plating','56x kubejs:stargate_rod', '64x gtceu:fine_trinaquadalloy_wire','64x gtceu:fine_trinaquadalloy_wire')
        .inputFluids('gtceu:soldering_alloy 12000', 'gtceu:naquadria 56000')
        .itemOutputs('sgjourney:classic_stargate_ring_block')
        .duration(20000)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.stargate_component_assembly(id('classic_stargate_chevron_block'))
        .itemInputs('sgjourney:classic_stargate_ring_block','12x kubejs:runic_pathway_engraved_plating', '8x kubejs:runic_engraved_plating','12x kubejs:stargate_rod','kubejs:classic_chevron_disk','32x gtceu:fine_stellarium_wire')
        .inputFluids('gtceu:soldering_alloy 12000', 'gtceu:naquadria 32000', 'gtceu:radon 62000')
        .itemOutputs('sgjourney:classic_stargate_chevron_block')
        .duration(32000)
        .EUt(GTValues.VHA[GTValues.UHV]);
    
    event.recipes.gtceu.assembly_line(id('compuation_super_matrix'))
        .itemInputs('gtceu:melodium_frame', '16x #gtceu:circuits/uhv', '16x #gtceu:circuits/uhv', '16x #gtceu:circuits/uhv', 
                '16x #gtceu:circuits/uhv', '16x #gtceu:circuits/uhv', '16x #gtceu:circuits/uhv', '16x #gtceu:circuits/uhv', '48x gtceu:prismalium_screw')
        .inputFluids('gtceu:soldering_alloy 40000')
        .itemOutputs('kubejs:computational_super_matrix')
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:wetware_processor_mainframe'))
                .EUt(GTValues.VHA[GTValues.ZPM])
                .CWUt(128)
        )
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UV]);
    
    event.recipes.gtceu.pressure_heat_chamber(id('stargate_rod'))
        .itemInputs('kubejs:crude_stargate_rod')
        .itemOutputs('kubejs:stargate_rod')
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.assembly_line(id('classic_chevron_disk'))
        .itemInputs('gtceu:prismalium_frame', 'gtceu:exquisite_naquadic_netherite_gem', '8x #gtceu:circuits/uhv', '6x gtceu:uv_sensor', '6x gtceu:uv_emitter', '6x gtceu:uv_field_generator', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip')
        .inputFluids('gtceu:naquadria 48000', 'gtceu:borosilicate_glass 136000')
        .itemOutputs('kubejs:classic_chevron_disk')
        .duration(6000)
        .stationResearch(
        researchRecipeBuilder => researchRecipeBuilder
            .researchStack(Item.of('gtceu:exquisite_naquadic_netherite_gem'))
            .EUt(GTValues.VHA[GTValues.UV])
            .CWUt(144)
        )
        .EUt(GTValues.VHA[GTValues.UHV]);

    //Crude Gate Rods
    const CrudeRod = (type, core, coreFoil, MainOutline, SpecialOutline, Fluid, eu) => {
    event.recipes.gtceu.large_rotor_machine(id(`${type}_stargate_rod`))
        .itemInputs('gtceu:long_void_rod', SpecialOutline, MainOutline, MainOutline, core, SpecialOutline, SpecialOutline, coreFoil, MainOutline, MainOutline, coreFoil, SpecialOutline, SpecialOutline, coreFoil, MainOutline, MainOutline, SpecialOutline)
        .inputFluids('gtceu:lubricant 50000', Fluid)
        .itemOutputs(`kubejs:${type}_stargate_rod`)
        .duration(1600)
        .EUt(eu);
    };
    CrudeRod('crude', 'gtceu:gravi_star', '8x gtceu:nether_star_foil', '12x gtceu:neutronium_foil', '24x gtceu:weapon_grade_naquadah_foil', 'gtceu:nether_star_concentrate 1440', GTValues.VHA[GTValues.LuV]);
    CrudeRod('untreated_infernal', 'kubejs:inferno_fragment', '12x gtceu:netherite_foil', '16x gtceu:void_foil', '12x kubejs:stargate_rod', 'gtceu:blaze 14400', GTValues.VHA[GTValues.UV]);
    CrudeRod('untreated_abyssal', 'kubejs:abyss_fragment', '12x gtceu:echo_shard_foil', '16x gtceu:void_foil', '12x kubejs:stargate_rod', 'thermal:ender 14400', GTValues.VHA[GTValues.UV]);  

    //Ancient Gate
        
        //Gate Rods
        
        event.recipes.gtceu.pressure_heat_chamber(id('infernal_stargate_rod'))
            .itemInputs('64x minecraft:blaze_rod','kubejs:untreated_infernal_stargate_rod','64x minecraft:blaze_rod')
            .inputFluids('gtceu:blaze 64000')
            .itemOutputs('kubejs:infernal_stargate_rod')
            .duration(2400)
            .EUt(GTValues.VHA[GTValues.UHV]);

        event.recipes.gtceu.pressure_heat_chamber(id('abyssal_stargate_rod'))
            .itemInputs('64x minecraft:echo_shard','kubejs:untreated_abyssal_stargate_rod','64x minecraft:echo_shard')
            .inputFluids('thermal:ender 64000')
            .itemOutputs('kubejs:abyssal_stargate_rod')
            .duration(2400)
            .EUt(GTValues.VHA[GTValues.UHV]);

        //DHD
        event.recipes.gtceu.assembly_line(id('milky_way_gate'))
            .itemInputs('sgjourney:classic_dhd', '8x gtceu:uhv_field_generator', '8x gtceu:uhv_emitter', '8x gtceu:uhv_sensor', '64x kubejs:uepic_chip', '8x kubejs:runic_engraved_plating', '32x kubejs:runic_energized_pathway_plating', '32x kubejs:runic_energized_transportation_plating')
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 13824')
            .itemOutputs('sgjourney:milky_way_dhd')
            .duration(10000)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('sgjourney:classic_dhd'))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(160)
                )
            .EUt(GTValues.VA[GTValues.UEV])

        //Chevrons
        event.recipes.gtceu.assembly_line(id('classic_chevron_assembly'))
            .itemInputs('gtceu:stellarium_frame', 'kubejs:classic_chevron_disk', 'kubejs:classic_chevron_disk', 'kubejs:classic_chevron_disk', '6x #gtceu:circuits/uev', '8x kubejs:uhv_catalyst_core', '24x kubejs:uhv_super_magnetic_core', '12x kubejs:uhv_high_strength_panel')
            .inputFluids('gtceu:utopian_akreyrium 24000', 'gtceu:naquadria 56000', 'gtceu:borosilicate_glass 180000')
            .itemOutputs('kubejs:classic_chevron_assembly')
            .duration(9000)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('kubejs:classic_chevron_disk'))
                    .EUt(GTValues.VHA[GTValues.UV])
                    .CWUt(160)
                )
            .EUt(GTValues.VHA[GTValues.UHV]);

        event.recipes.gtceu.assembly_line(id('ancient_chevron_disk'))
            .itemInputs('gtceu:ancient_runicalium_frame', 'kubejs:classic_chevron_disk', '2x kubejs:classic_chevron_assembly', '6x gtceu:uhv_sensor', '6x gtceu:uhv_emitter', '6x gtceu:uhv_field_generator', '64x kubejs:uepic_chip', '64x kubejs:uepic_chip')
            .inputFluids('gtceu:utopian_akreyrium 48000', 'gtceu:naquadria 96000', 'gtceu:borosilicate_glass 196000')
            .itemOutputs('kubejs:ancient_chevron_disk')
            .duration(12000)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('kubejs:classic_chevron_assembly'))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(176)
                )
            .EUt(GTValues.VHA[GTValues.UEV]);

        //Ancient Encoded Computational Unit
        event.recipes.gtceu.assembly_line(id('ancient_stargate_computer_core'))
            .itemInputs('gtceu:ancient_runicalium_frame','6x kubejs:computational_super_matrix','16x gtceu:iron_selenide_over_strontium_titanium_oxide_octal_wire','16x gtceu:iron_selenide_over_strontium_titanium_oxide_octal_wire',
                '64x kubejs:uepic_chip','64x kubejs:uepic_chip','24x #gtceu:circuits/uev','kubejs:draconic_coordinate_core')
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 128000', 'gtceu:sterilized_growth_medium 54000')
            .itemOutputs('kubejs:ancient_stargate_computer_core')
            .duration(48000)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('kubejs:classic_stargate_computer_core'))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(192)
                )
            .EUt(GTValues.VA[GTValues.UEV]);

        //Draconic Coordinate Core
        event.recipes.gtceu.pressure_heat_chamber(id('draconic_coordinate_core'))
            .itemInputs('kubejs:hell_core','kubejs:void_core')
            .inputFluids('gtceu:blaze 50000','thermal:ender 50000')
            .itemOutputs('kubejs:draconic_coordinate_core')
            .duration(30000)
            .EUt(GTValues.VA[GTValues.UEV]);

        event.recipes.gtceu.assembly_line(id('empty_coordinate_core'))
            .itemInputs('gtceu:ancient_runicalium_frame','32x kubejs:uhv_high_strength_panel','32x kubejs:uhv_high_strength_panel','32x kubejs:uhv_high_strength_panel','48x gtceu:uhv_field_generator','16x gtceu:uhv_sensor','16x gtceu:uhv_emitter')
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 120000','gtceu:utopian_akreyrium 75000','gtceu:neutronium 18000')
            .itemOutputs('kubejs:empty_coordinate_core')
            .duration(24000)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('kubejs:blank_injection_catalyst'))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(160)
                )
            .EUt(GTValues.VA[GTValues.UHV]);

        event.recipes.gtceu.injection_mixer(id('hell_core'))
            .itemInputs('kubejs:empty_coordinate_core','kubejs:inferno_fragment','kubejs:inferno_fragment','32x gtceu:netherrack_dust','16x minecraft:blaze_powder','8x gtceu:debris_dust')
            .inputFluids('minecraft:lava 250000','gtceu:blaze 50000','gtceu:utopian_akreyrium 32000')
            .itemOutputs('kubejs:hell_core')
            .duration(9000)
            .EUt(GTValues.VH[GTValues.UEV]);

        event.recipes.gtceu.injection_mixer(id('void_core'))
            .itemInputs('kubejs:empty_coordinate_core','kubejs:abyss_fragment','kubejs:abyss_fragment','32x gtceu:endstone_dust','16x minecraft:ender_pearl','8x minecraft:echo_shard')
            .inputFluids('gtceu:echo_r 250000','thermal:ender 50000','gtceu:utopian_akreyrium 32000')
            .itemOutputs('kubejs:void_core')
            .duration(9000)
            .EUt(GTValues.VH[GTValues.UEV]);

        event.recipes.gtceu.assembly_line(id('inferno_fragment'))
            .itemInputs('12x gtceu:gravi_star', '16x minecraft:blaze_rod','12x gtceu:gravi_star', '16x minecraft:blaze_rod','12x gtceu:gravi_star', '16x minecraft:blaze_rod','12x gtceu:gravi_star', '16x minecraft:blaze_rod',
                '12x gtceu:gravi_star', '16x minecraft:blaze_rod','12x gtceu:gravi_star', '16x minecraft:blaze_rod','12x gtceu:gravi_star', '16x minecraft:blaze_rod','12x gtceu:gravi_star', '16x minecraft:blaze_rod')
            .inputFluids('gtceu:neutronium 20000','gtceu:utopian_akreyrium 16000','minecraft:lava 8000')
            .itemOutputs('kubejs:inferno_fragment')
            .duration(4800)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('kubejs:nether_coordinate_crystal'))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(160)
                )
            .EUt(GTValues.VHA[GTValues.UEV]);

        event.recipes.gtceu.assembly_line(id('abyss_fragment'))
            .itemInputs('12x gtceu:gravi_star', '16x minecraft:echo_shard','12x gtceu:gravi_star', '16x minecraft:echo_shard','12x gtceu:gravi_star', '16x minecraft:echo_shard','12x gtceu:gravi_star', '16x minecraft:echo_shard',
                '12x gtceu:gravi_star', '16x minecraft:echo_shard','12x gtceu:gravi_star', '16x minecraft:echo_shard','12x gtceu:gravi_star', '16x minecraft:echo_shard','12x gtceu:gravi_star', '16x minecraft:echo_shard')
            .inputFluids('gtceu:neutronium 20000','gtceu:utopian_akreyrium 16000','gtceu:echo_r 8000')
            .itemOutputs('kubejs:abyss_fragment')
            .duration(4800)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('kubejs:end_coordinate_crystal'))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(160)
                )
            .EUt(GTValues.VHA[GTValues.UEV]);

        //Ancient Gate Blocks
        event.recipes.gtceu.stargate_component_assembly(id('ancient_stargate_ring_block'))
            .itemInputs('gtceu:ancient_runicalium_frame', '36x gtceu:double_zircalloy_4_plate', '24x kubejs:runic_stabilization_plating', '48x kubejs:stargate_rod', 'kubejs:abyssal_stargate_rod', 'kubejs:infernal_stargate_rod', '64x gtceu:fine_trinaquadalloy_wire', '64x gtceu:fine_trinaquadalloy_wire', '64x gtceu:fine_trinaquadalloy_wire')
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 16000', 'gtceu:utopian_akreyrium 48000', 'gtceu:naquadria 128000')
            .itemOutputs('kubejs:ancient_stargate_ring_block')
            .duration(20000)
            .EUt(GTValues.VHA[GTValues.UEV]);

        event.recipes.gtceu.stargate_component_assembly(id('ancient_stargate_chevron_block'))
            .itemInputs('kubejs:ancient_stargate_ring_block', '12x kubejs:runic_energized_pathway_plating', '8x kubejs:runic_energized_transportation_plating', '32x kubejs:stargate_rod', 'kubejs:ancient_chevron_disk', '64x gtceu:fine_ancient_runicalium_wire')
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 16000', 'gtceu:utopian_akreyrium 24000', 'gtceu:naquadria 72000', 'gtceu:radon 132000')
            .itemOutputs('kubejs:ancient_stargate_chevron_block')
            .duration(32000)
            .EUt(GTValues.VHA[GTValues.UEV]);

        event.recipes.gtceu.stargate_component_assembly(id('ancient_stargate_base_block'))
            .itemInputs('kubejs:ancient_stargate_ring_block', '24x kubejs:runic_energized_pathway_plating', '16x kubejs:runic_energized_transportation_plating', '40x kubejs:stargate_rod', 'kubejs:ancient_stargate_computer_core', '64x kubejs:uepic_chip')
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 16000', 'gtceu:utopian_akreyrium 24000', 'gtceu:naquadria 72000', 'gtceu:sterilized_growth_medium 18000')
            .itemOutputs('kubejs:ancient_stargate_base_block')
            .duration(48000)
            .EUt(GTValues.VHA[GTValues.UEV]);

        //Gate Crafting
        const GateCraft = (gate,fluid1,fluid2,fluid3,eut,sgGate) => {
            let B = `kubejs:${gate}_stargate_base_block`;
            let R = `kubejs:${gate}_stargate_ring_block`;
            let C = `kubejs:${gate}_stargate_chevron_block`;
        event.recipes.gtceu.gate_assembly(id(`${gate}_gate`))
            .itemInputs(B,C,R,R,C,R,R,C,R,R,C,R,C,R,C,R,R,C,R,R,C,R,R,C)
            .perTick(true)
            .inputFluids(fluid1)
            .inputFluids(fluid2)
            .inputFluids(fluid3)
            .perTick(false)
            .itemOutputs(`sgjourney:${sgGate}_stargate {BlockEntityTag:{LocalPointOfOrigin:1b}}`)
            .duration(64000)
            .EUt(eut);

            //[--][14][13][12][11][10][--]
            //[16][15][--][--][--][09][08]
            //[17][--][--][--][--][--][07]
            //[18][--][--][OP][--][--][06]
            //[19][--][--][--][--][--][05]
            //[20][21][--][--][--][03][04]
            //[--][22][23][00][01][02][--]
        }
        GateCraft('ancient', 'gtceu:naquadria 16', 'gtceu:liquid_nether_air 50', 'gtceu:liquid_ender_air 50', GTValues.VA[GTValues.UEV],'milky_way');

        // Maxwell Line
        event.remove({ mod: 'placeablemaxwell' });
        const Gato = (type, rod1, rod2, dye1, dye2) => {
            let B = '8x kubejs:runic_energized_transportation_plating';
            let C = '8x kubejs:runic_energized_pathway_plating';
            let R = `1x kubejs:${rod1}_stargate_rod`;
            let D = `1x kubejs:${rod2}_stargate_rod`;
            let F = '2x gtceu:uiv_field_generator';
            let A = '2x gtceu:uiv_robot_arm';
            let H = '64x #forge:cooked_fishes'
        event.recipes.gtceu.gate_assembly(id(`${type}`))
            .itemInputs(B,R,A,H,F,D,C,D,F,H,A,R,B,R,A,H,F,D,C,D,F,H,A,R)
            .inputFluids('gtceu:nyanium 72000', `gtceu:${dye1}_dye 1000000`, `gtceu:${dye2}_dye 200000`)
            .itemOutputs(`placeablemaxwell:${type}`)
            .duration(32000)
            .EUt(GTValues.VA[GTValues.UIV]);
        };
        Gato('valenok', 'abyssal', 'abyssal', 'light_gray', 'gray');
        Gato('mars', 'abyssal', 'infernal', 'white', 'orange');
        Gato('vasilisa', 'infernal', 'infernal', 'gray', 'white');
        {
            let M = 'placeablemaxwell:valenok'
            let V = 'placeablemaxwell:mars'
            let S = 'placeablemaxwell:vasilisa'
        event.recipes.gtceu.gate_assembly(id(`maxwell`))
            .itemInputs(S,M,V,S,V,M,S,M,V,S,V,M,S,M,V,S,V,M,S,M,V,S,V,M)
            .inputFluids('gtceu:nyanium 144000', `gtceu:black_dye 2500000`, `gtceu:maxwellium 72000`)
            .itemOutputs(`placeablemaxwell:maxwell`)
            .duration(64000)
            .EUt(GTValues.VA[GTValues.UXV]);
        };

});

//Gate Energy Resetting
const Gates = ['classic', 'milky_way']
Gates.forEach(gate=>{
    BlockEvents.rightClicked(`sgjourney:${gate}_stargate`, event => {
        const { player, block, item, hand, level } = event;
    
        if (!item.hasTag('forge:tools/mallets')) return;
    
        block.mergeEntityData({ Energy: 0 });
        
        level.playSound(null, block.pos, "gtceu:computation", "blocks");
        player.swing();
    });
});
