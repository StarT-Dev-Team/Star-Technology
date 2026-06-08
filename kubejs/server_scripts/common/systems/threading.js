ServerEvents.recipes((event) => {
    const id = global.id;

    // Parts

    event.recipes.gtceu
        .assembly_line(id(`prismalic_helix_core`))
        .itemInputs(
            `gtceu:void_frame`,
            `4x kubejs:draco_advanced_soc`,
            `kubejs:runic_wave_generator`,
            `2x kubejs:prismalic_neutron_reflector`,
            `32x gtceu:fine_ancient_runicalium_wire`,
            `32x gtceu:fine_stellarium_wire`,
            `32x gtceu:fine_melodium_wire`,
            `32x gtceu:fine_prismalium_wire`,
            `32x gtceu:fine_dragonsteel_wire`,
            `32x gtceu:fine_twinite_wire`,
            `32x gtceu:fine_shellite_wire`,
            `32x gtceu:fine_enderium_wire`,
            `32x gtceu:fine_lumium_wire`,
            `32x gtceu:fine_signalum_wire`,
            `32x gtceu:fine_soul_infused_wire`
        )
        .inputFluids(
            `gtceu:utopian_akreyrium 5000`,
            `gtceu:borealic_concentrate 3456`,
            `gtceu:naquadated_soldering_alloy 2880`
        )
        .itemOutputs(`kubejs:prismalic_helix_core`)
        .duration(900)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of(`kubejs:core_casing`)).EUt(GTValues.VHA[GTValues.UHV]).CWUt(160)
        )
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .assembly_line(id(`prisma_helical_nucleus`))
        .itemInputs(
            `gtceu:nyanium_frame`,
            `3x kubejs:prismalic_helix_core`,
            `2x gtceu:dense_hvga_steel_plate`,
            `2x gtceu:soul_ascendant_cuperite_rod`,
            `2x gtceu:uiv_sensor`,
            `32x kubejs:uipic_chip`
        )
        .inputFluids(
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 5472`,
            `gtceu:naquadated_soldering_alloy 4384`,
            `gtceu:dragon_breath 2500`
        )
        .itemOutputs(`kubejs:prisma_helical_nucleus`)
        .duration(1200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of(`kubejs:prismalic_helix_core`))
                .EUt(GTValues.VHA[GTValues.UEV])
                .CWUt(192)
        )
        .EUt(GTValues.VHA[GTValues.UIV]);

    // Controller

    event.recipes.gtceu
        .assembly_line(id(`threading_controller`))
        .itemInputs(
            `start_core:uiv_absolute_parallel_hatch`,
            `2x #gtceu:circuits/uxv`,
            `2x kubejs:prisma_helical_nucleus`,
            `8x gtceu:lepton_resonant_thallium_antimonide_double_cable`
        )
        .inputFluids(
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 27360`,
            `gtceu:naquadated_soldering_alloy 21920`,
            `gtceu:pure_dragon_breath 5000`
        )
        .itemOutputs(`start_core:threading_controller`)
        .duration(1500)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of(`kubejs:prisma_helical_nucleus`))
                .EUt(GTValues.VHA[GTValues.UEV])
                .CWUt(216)
        )
        .EUt(GTValues.VA[GTValues.UIV]);

    // Machines

    const assemblyThreadMachine = (
        type,
        core,
        circTier,
        nexusAmount,
        subMachines,
        miscInputs,
        toResearch,
        fluids,
        dur,
        cwu,
        eut
    ) => {
        event.recipes.gtceu
            .assembly_line(id(type))
            .itemInputs(core, `${4 * nexusAmount}x #gtceu:circuits/${circTier}`)
            .itemInputs(subMachines)
            .itemInputs(`${nexusAmount}x kubejs:prisma_helical_nucleus`)
            .itemInputs(miscInputs)
            .inputFluids(fluids)
            .itemOutputs(`gtceu:${type}`)
            .duration(dur)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(toResearch))
                    .EUt(eut / 4)
                    .CWUt(cwu)
            )
            .EUt(eut);
    };

    assemblyThreadMachine(
        `multithreaded_component_synthesis_forge`,
        `kubejs:core_casing`,
        `uxv`,
        36,
        [
            `72x gtceu:component_nexus`,
            `72x gtceu:component_part_hub`,
            `40x gtceu:uiv_assembler`,
            `40x gtceu:uiv_scanner`,
        ],
        [
            `36x gtceu:uiv_field_generator`,
            `24x gtceu:uiv_fluid_regulator`,
            `16x gtceu:uiv_sensor`,
            `56x kubejs:uiv_micropower_router`,
            `640x kubejs:uipic_chip`,
            `48x gtceu:draco_abyssal_screw`,
            `48x gtceu:rhenium_super_composite_alloy_screw`,
            `48x gtceu:hvga_steel_screw`,
            `48x gtceu:nyanium_screw`,
        ],
        `gtceu:component_nexus`,
        [
            `gtceu:nyanium 2400000`,
            `gtceu:pure_dragon_breath 540000`,
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 540000`,
            `gtceu:naquadated_soldering_alloy 432432`,
        ],
        36000,
        256,
        GTValues.VA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `aqueous_transformation_processing_center`,
        `gtceu:mythrotight_carbide_steel_frame`,
        `uxv`,
        8,
        [`8x gtceu:uiv_extractor`, `8x gtceu:uiv_canner`, `8x gtceu:uiv_fluid_solidifier`],
        [
            `24x gtceu:uiv_fluid_regulator`,
            `16x gtceu:uiv_field_generator`,
            `24x kubejs:uiv_microfluidic_flow_valve`,
            `4x gtceu:uiv_sensor`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:mythrotight_carbide_steel_screw`,
        ],
        `gtceu:uiv_extractor`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:perfluoroelastomer_rubber 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `ascendant_engraving_matrix`,
        `gtceu:trikoductive_neutro_steel_frame`,
        `uxv`,
        9,
        [
            `8x gtceu:uiv_laser_engraver`,
            `16x gtceu:runic_circuitry_assembling_station`,
            `16x gtceu:runic_inscribe_manipulate`,
        ],
        [
            `24x gtceu:uiv_emitter`,
            `16x gtceu:uiv_field_generator`,
            `24x kubejs:uiv_catalyst_core`,
            `4x gtceu:uiv_sensor`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:trikoductive_neutro_steel_screw`,
        ],
        `gtceu:uiv_laser_engraver`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:perfluoroelastomer_rubber 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `byteforce_unified_incomparable_logistics_depot`,
        `gtceu:expetidalloy_d_17_frame`,
        `uxv`,
        12,
        [`8x gtceu:uiv_assembler`, `8x gtceu:uiv_circuit_assembler`, `8x gtceu:uiv_me_assembler`],
        [
            `24x gtceu:uiv_robot_arm`,
            `16x gtceu:uiv_sensor`,
            `24x kubejs:uiv_computational_matrix`,
            `4x gtceu:uiv_conveyor_module`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:expetidalloy_d_17_screw`,
        ],
        `gtceu:uiv_assembler`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:perfluoroelastomer_rubber 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `electro_magnetic_material_ripper`,
        `gtceu:borealic_steel_frame`,
        `uxv`,
        10,
        [`8x gtceu:uiv_electrolyzer`, `8x gtceu:uiv_polarizer`, `8x gtceu:uiv_electromagnetic_separator`],
        [
            `24x gtceu:uiv_conveyor_module`,
            `16x gtceu:uiv_fluid_regulator`,
            `24x kubejs:uiv_super_magnetic_core`,
            `4x gtceu:uiv_emitter`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:borealic_steel_screw`,
        ],
        `gtceu:uiv_electrolyzer`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:perfluoroelastomer_rubber 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `fermenting_arboreal_rejuvenation_monstrosity`,
        `gtceu:soul_ascendant_cuperite_frame`,
        `uxv`,
        8,
        [
            `64x gtceu:hydroponic_garden`,
            `64x gtceu:tree_synthesizer`,
            `64x gtceu:industrial_fishery`,
            `64x gtceu:composting_factory`,
        ],
        [
            `24x gtceu:uiv_conveyor_module`,
            `16x gtceu:uiv_robot_arm`,
            `24x kubejs:uiv_microfluidic_flow_valve`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:soul_ascendant_cuperite_screw`,
        ],
        `gtceu:hydroponic_garden`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:perfluoroelastomer_rubber 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `gravitational_compression_chamber`,
        `gtceu:hvga_steel_frame`,
        `uxv`,
        12,
        [
            `4x gtceu:uiv_bender`,
            `4x gtceu:uiv_compressor`,
            `4x gtceu:uiv_forge_hammer`,
            `4x gtceu:uiv_forming_press`,
            `4x gtceu:uiv_packer`,
        ],
        [
            `24x gtceu:uiv_electric_piston`,
            `16x gtceu:uiv_conveyor_module`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:hvga_steel_screw`,
        ],
        `gtceu:uiv_bender`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:tungsten_disulfide 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `material_annihilation_array`,
        `gtceu:zeroidic_trinate_steel_frame`,
        `uxv`,
        8,
        [`8x gtceu:uiv_macerator`, `8x gtceu:uiv_arc_furnace`, `16x gtceu:bulk_ore_processing_array`],
        [
            `24x gtceu:uiv_electric_piston`,
            `16x gtceu:uiv_conveyor_module`,
            `24x kubejs:uiv_super_magnetic_core`,
            `4x gtceu:uiv_robot_arm`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:zeroidic_trinate_steel_screw`,
        ],
        `gtceu:uiv_macerator`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:tungsten_disulfide 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `molecular_inducing_xanadu`,
        `gtceu:melastrium_mox_frame`,
        `uxv`,
        8,
        [`6x gtceu:uiv_mixer`, `6x gtceu:uiv_autoclave`, `6x gtceu:uiv_ore_washer`, `6x gtceu:uiv_chemical_bath`],
        [
            `24x gtceu:uiv_electric_motor`,
            `24x kubejs:uiv_transmission_assembly`,
            `4x gtceu:uiv_fluid_regulator`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:melastrium_mox_screw`,
        ],
        `gtceu:uiv_mixer`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:perfluoroelastomer_rubber 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `subatomic_particle_lattice_isolation_terminal`,
        `gtceu:ultispestalloy_cmsh_frame`,
        `uxv`,
        12,
        [`6x gtceu:uiv_extruder`, `6x gtceu:uiv_lathe`, `6x gtceu:uiv_cutter`, `6x gtceu:uiv_wiremill`],
        [
            `24x gtceu:uiv_electric_piston`,
            `16x gtceu:uiv_robot_arm`,
            `24x kubejs:uiv_high_strength_panel`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:ultispestalloy_cmsh_screw`,
        ],
        `gtceu:uiv_cutter`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:tungsten_disulfide 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `superior_particulate_isolation_nexus`,
        `gtceu:vastaqalloy_cr_4200x_frame`,
        `uxv`,
        8,
        [`8x gtceu:uiv_centrifuge`, `8x gtceu:uiv_thermal_centrifuge`, `8x gtceu:uiv_sifter`],
        [
            `24x gtceu:uiv_electric_motor`,
            `16x gtceu:uiv_sensor`,
            `24x kubejs:uiv_transmission_assembly`,
            `4x gtceu:uiv_emitter`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:vastaqalloy_cr_4200x_screw`,
        ],
        `gtceu:uiv_centrifuge`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:perfluoroelastomer_rubber 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    assemblyThreadMachine(
        `yielding_excression_advanced_seperation_transformator`,
        `gtceu:aerorelient_steel_frame`,
        `uxv`,
        8,
        [`6x gtceu:uiv_fermenter`, `6x gtceu:uiv_brewery`, `6x gtceu:uiv_fluid_heater`, `6x gtceu:uiv_distillery`],
        [
            `24x gtceu:uiv_fluid_regulator`,
            `16x gtceu:uiv_sensor`,
            `24x kubejs:uiv_microfluidic_flow_valve`,
            `24x kubejs:uiv_micropower_router`,
            `32x gtceu:aerorelient_steel_screw`,
        ],
        `gtceu:uiv_fermenter`,
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 345168`,
            `gtceu:perfluoroelastomer_rubber 285964`,
            `gtceu:naquadated_soldering_alloy 221184`,
        ],
        18000,
        240,
        GTValues.VHA[GTValues.UIV]
    );

    // Helixes

    const specialAssemblyHelix = (type, specializer) => {
        event.recipes.gtceu
            .assembly_line(id(`uhv_${type}_thread_helix`))
            .itemInputs(
                `gtceu:enriched_pallarovium_alloy_frame`,
                `3x #gtceu:circuits/uev`,
                `kubejs:prismalic_helix_core`,
                `4x gtceu:uhv_field_generator`,
                `kubejs:uhv_${specializer}`,
                `2x kubejs:uhv_high_strength_panel`
            )
            .inputFluids(`gtceu:naquadria 13824`, `gtceu:polyether_ether_ketone 4608`)
            .itemOutputs(`start_core:uhv_${type}_thread_helix`)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:lepton_resonant_thallium_antimonide_single_cable`))
                    .EUt(GTValues.VA[GTValues.UHV])
                    .CWUt(128)
            )
            .duration(600)
            .EUt(GTValues.VA[GTValues.UEV]);
    };

    specialAssemblyHelix(`overdrive`, `transmission_assembly`);
    specialAssemblyHelix(`coprocessor`, `catalyst_core`);
    specialAssemblyHelix(`weaving`, `computational_matrix`);

    event.recipes.gtceu
        .assembly_line(id(`uev_supreme_thread_helix`))
        .itemInputs(
            `gtceu:draconyallium_frame`,
            `3x #gtceu:circuits/uiv`,
            `kubejs:prismalic_helix_core`,
            `1x gtceu:uev_field_generator`,
            `start_core:uhv_overdrive_thread_helix`,
            `start_core:uhv_coprocessor_thread_helix`,
            `start_core:uhv_weaving_thread_helix`,
            `2x kubejs:uev_high_strength_panel`
        )
        .inputFluids(`gtceu:isovol 13824`, `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 4608`)
        .itemOutputs(`start_core:uev_supreme_thread_helix`)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of(`gtceu:draconyallium_frame`))
                .EUt(GTValues.VA[GTValues.UEV])
                .CWUt(160)
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.UIV]);

    // === Needs K.O.M.A.R.U ===
    // Special 2+, Gen 3+
    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)
    const riftAss = `riftic_infusion_assembly`;

    let uivSpecialRifticHelix = (type, specializer) => {
        researchBuilder(
            riftAss,
            `uiv_${type}_thread_helix`,
            [
                `gtceu:raging_rimulatia_frame`,
                `3x #gtceu:circuits/uxv`,
                `start_core:uev_supreme_thread_helix`,
                `4x gtceu:uiv_field_generator`,
                `kubejs:uiv_${specializer}`,
                `2x kubejs:uiv_high_strength_panel`,
            ],
            [`gtceu:calamatium 13824`, `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 9216`],
            [`start_core:uiv_${type}_thread_helix`],
            1800,
            500,
            500 * 1200,
            GTValues.VA[GTValues.UIV],
            `start_core:uhv_${type}_thread_helix`
        );
    };

    uivSpecialRifticHelix(`overdrive`, `transmission_assembly`);
    uivSpecialRifticHelix(`coprocessor`, `catalyst_core`);
    uivSpecialRifticHelix(`weaving`, `computational_matrix`);
});
