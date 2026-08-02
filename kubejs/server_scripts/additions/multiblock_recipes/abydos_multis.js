ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .assembly_line(id('chemical_plant'))
        .itemInputs(
            'gtceu:zpm_machine_hull',
            '4x gtceu:zpm_electric_motor',
            'gtceu:naquadah_alloy_rotor',
            '2x gtceu:niobium_titanium_large_fluid_pipe',
            '4x #gtceu:circuits/uv'
        )
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 288')
        .itemOutputs('gtceu:chemical_plant')
        .duration(1200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:large_chemical_reactor')).EUt(GTValues.VHA[UV]).CWUt(64)
        )
        .EUtVHA(UHV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('advanced_synthesis_plant'))
        .itemInputs(
            'gtceu:zpm_machine_hull',
            '4x gtceu:zpm_sensor',
            '4x gtceu:zpm_robot_arm',
            '4x gtceu:zpm_fluid_regulator',
            '2x gtceu:naquadah_alloy_rotor',
            '6x gtceu:niobium_titanium_large_fluid_pipe',
            '6x #gtceu:circuits/uv'
        )
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 288')
        .itemOutputs('gtceu:advanced_synthesis_plant')
        .duration(1200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:zpm_chemical_reactor')).EUt(GTValues.VHA[UV]).CWUt(64)
        )
        .EUtVHA(UHV);

    event.recipes.gtceu
        .assembly_line(id('bacteria_synthesizer'))
        .itemInputs(
            'gtceu:uhv_machine_hull',
            '4x gtceu:uhv_electric_motor',
            'gtceu:naquadah_alloy_rotor',
            '2x gtceu:uhv_fluid_regulator',
            '4x #gtceu:circuits/uhv'
        )
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 288')
        .itemOutputs('gtceu:bacteria_synthesizer')
        .duration(1200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:uv_chemical_reactor')).EUt(GTValues.VHA[UHV]).CWUt(96)
        )
        .EUtVHA(UHV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('cyclonic_sifter'))
        .itemInputs(
            'gtceu:zpm_machine_hull',
            '12x #gtceu:circuits/uv',
            '56x gtceu:uhpic_chip',
            '16x gtceu:prismalium_gear',
            '8x gtceu:zpm_electric_pump',
            '4x gtceu:zpm_electric_motor',
            '2x gtceu:zpm_field_generator',
            '6x gtceu:pure_netherite_gear'
        )
        .inputFluids('gtceu:polybenzimidazole 4000', 'gtceu:gritty_akreyrium 280000')
        .itemOutputs('gtceu:cyclonic_sifter')
        .duration(1600)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:large_sifting_funnel')).EUt(GTValues.VHA[UV]).CWUt(24)
        )
        .EUtVA(UV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('manifold_centrifuge'))
        .itemInputs(
            'gtceu:uhv_machine_hull',
            '24x #gtceu:circuits/uhv',
            '64x kubejs:uepic_chip',
            '32x kubejs:uepic_chip',
            '18x gtceu:double_thacoloy_nq_42x_plate',
            '16x gtceu:neutronium_large_fluid_pipe',
            '16x gtceu:pure_netherite_foil',
            '6x kubejs:uhv_super_magnetic_core',
            '4x gtceu:uhv_electric_pump',
            '6x gtceu:uhv_emitter'
        )
        .inputFluids('gtceu:polyether_ether_ketone 4000', 'gtceu:utopian_akreyrium 1250')
        .itemOutputs('gtceu:manifold_centrifuge')
        .duration(2400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:large_centrifuge')).EUt(GTValues.VHA[UV]).CWUt(144)
        )
        .EUtVA(UV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('injection_mixer'))
        .itemInputs(
            'gtceu:uhv_machine_hull',
            '24x #gtceu:circuits/uhv',
            '12x gtceu:double_astrenalloy_nx_plate',
            '64x kubejs:uepic_chip',
            '8x gtceu:neutronium_huge_fluid_pipe',
            '4x gtceu:pure_netherite_rotor',
            '4x gtceu:small_zalloy_gear',
            '6x gtceu:uhv_electric_pump'
        )
        .inputFluids('gtceu:polyether_ether_ketone 4000', 'gtceu:utopian_akreyrium 1250')
        .itemOutputs('gtceu:injection_mixer')
        .duration(2400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:large_mixer')).EUt(GTValues.VHA[UV]).CWUt(144)
        )
        .EUtVA(UV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('molten_destabiliser'))
        .itemInputs(
            'gtceu:zpm_machine_hull',
            '6x #gtceu:circuits/uv',
            '4x gtceu:dense_naquadria_plate',
            '64x gtceu:uhpic_chip',
            '4x gtceu:duranium_huge_fluid_pipe',
            '4x gtceu:pure_netherite_rotor',
            '4x gtceu:small_pure_netherite_gear',
            '24x gtceu:zpm_electric_pump'
        )
        .inputFluids('gtceu:polybenzimidazole 8000', 'gtceu:gritty_akreyrium 72000')
        .itemOutputs('gtceu:molten_destabiliser')
        .duration(2250)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:large_distillery')).EUt(GTValues.VHA[UV]).CWUt(24)
        )
        .EUtVA(UV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('titan_forge'))
        .itemInputs(
            'gtceu:uv_machine_hull',
            '12x #gtceu:circuits/uv',
            '4x gtceu:dense_tritan_steel_plate',
            '64x gtceu:uhpic_chip',
            '8x gtceu:uv_electric_piston',
            '4x gtceu:small_pure_netherite_gear',
            '2x gtceu:enriched_naquadah_quadruple_fluid_pipe',
            '4x gtceu:uv_electric_pump'
        )
        .inputFluids('gtceu:soldering_alloy 7200', 'gtceu:lubricant 5000', 'gtceu:naquadria 864')
        .itemOutputs('gtceu:titan_forge')
        .duration(1600)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:large_extruder')).EUt(GTValues.VA[ZPM]).CWUt(64)
        )
        .EUtVHA(UV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('compact_assembly_line'))
        .itemInputs(
            '4x gtceu:assembly_line',
            '8x #gtceu:circuits/uhv',
            '8x gtceu:uv_robot_arm',
            '2x gtceu:uhv_electric_pump',
            '32x gtceu:fine_trinaquadalloy_wire',
            '16x gtceu:pure_netherite_screw',
            '64x gtceu:uhpic_chip',
            '32x gtceu:uhpic_chip'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 14688',
            'gtceu:tungsten_disulfide 9504',
            'gtceu:naquadria 1152'
        )
        .itemOutputs('gtceu:compact_assembly_line')
        .duration(1500)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:assembly_line')).EUt(GTValues.VHA[UV]).CWUt(128)
        )
        .EUtVHA(UHV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('component_nexus'))
        .itemInputs(
            '2x gtceu:compact_assembly_line',
            '6x #gtceu:circuits/uev',
            '6x gtceu:uhv_robot_arm',
            '8x kubejs:uhv_high_strength_panel',
            '4x gtceu:uhv_conveyor_module',
            '4x kubejs:uhv_voltage_coil',
            '64x gtceu:fine_stellarium_wire',
            '32x gtceu:neutronium_screw',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '32x gtceu:uhpic_chip'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 25056',
            'gtceu:tungsten_disulfide 16000',
            'gtceu:utopian_akreyrium 1000'
        )
        .itemOutputs('gtceu:component_nexus')
        .duration(1800)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:compact_assembly_line')).EUt(GTValues.VHA[UHV]).CWUt(144)
        )
        .EUtVHA(UEV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('super_heat_chamber'))
        .itemInputs(
            'gtceu:heat_chamber',
            '4x #gtceu:circuits/uhv',
            'gtceu:double_void_plate',
            'gtceu:double_titanium_carbide_plate',
            'gtceu:uv_field_generator',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '32x gtceu:uhpic_chip',
            '48x gtceu:prismalium_single_wire'
        )
        .inputFluids('gtceu:hsse 6912', 'gtceu:niobium_titanium 1728')
        .itemOutputs('gtceu:super_pressure_heat_chamber')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:heat_chamber')).EUt(GTValues.VHA[UV]).CWUt(128)
        )
        .duration(3200)
        .EUtVHA(UV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('exotic_rock_crusher'))
        .itemInputs(
            'gtceu:large_material_press',
            '8x gtceu:uv_electric_piston',
            '4x gtceu:heat_vent',
            '4x gtceu:silicon_bronze_frame',
            '4x #gtceu:circuits/uv',
            '2x gtceu:tritan_steel_ultradense_plate',
            '8x gtceu:titanium_carbide_plate',
            '4x gtceu:hsla_steel_plate'
        )
        .inputFluids('gtceu:tritan_steel 1296', 'gtceu:soldering_alloy 3744')
        .itemOutputs('gtceu:exotic_tectonic_formation_apparatus')
        .duration(2400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:uv_rock_crusher')).EUt(GTValues.VHA[ZPM]).CWUt(24)
        )
        .EUtVHA(UV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('network_hub'))
        .itemInputs(
            'gtceu:network_switch',
            '4x gtceu:uv_emitter',
            '4x gtceu:uv_sensor',
            '4x #gtceu:circuits/uhv',
            '32x gtceu:ruthenium_trinium_americium_neutronate_double_wire',
            '64x gtceu:tritan_steel_foil',
            '64x gtceu:tritan_steel_foil',
            '48x gtceu:normal_optical_pipe'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576', 'gtceu:polyimide 576')
        .itemOutputs('gtceu:network_hub')
        .duration(2400)
        .stationResearch((researchBuilder) =>
            researchBuilder.researchStack(Item.of('gtceu:network_switch')).EUt(GTValues.VHA[ZPM]).CWUt(32)
        )
        .EUtVHA(UV)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('ihpca'))
        .itemInputs(
            'gtceu:high_performance_computation_array',
            '#gtceu:circuits/uev',
            'gtceu:uhv_field_generator',
            'start_core:data_dna_disk',
            '4x gtceu:neutronium_ultradense_plate',
            '64x gtceu:ruthenium_trinium_americium_neutronate_double_wire',
            '64x gtceu:normal_optical_pipe'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 1152',
            'gtceu:utopian_akreyrium 576',
            'gtceu:pcb_coolant 4000'
        )
        .itemOutputs('start_core:improved_high_performance_computation_array')
        .duration(2400)
        .stationResearch((researchBuilder) =>
            researchBuilder
                .researchStack(Item.of('gtceu:high_performance_computation_array'))
                .EUt(GTValues.VHA[ZPM])
                .CWUt(128)
        )
        .EUtVHA(UV)
        .addMaterialInfo(true, true);
});
