ServerEvents.recipes((event) => {
    const id = global.id;

    // === Abyssal Room ===
    event.recipes.gtceu
        .assembly_line(id('abyssal_containment_room'))
        .itemInputs(
            'gtceu:draco_abyssal_frame',
            '8x kubejs:draco_ware_casing',
            '4x kubejs:abyssal_inductor',
            '12x kubejs:uiv_computational_matrix',
            '2x kubejs:uiv_micropower_router',
            '8x kubejs:uiv_microfluidic_flow_valve',
            '64x gtceu:fine_rhenium_super_composite_alloy_wire',
            '4x gtceu:uiv_field_generator',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '32x kubejs:uepic_chip'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 46080',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 8640',
            'gtceu:perfluoroelastomer_rubber 5760'
        )
        .itemOutputs('start_core:abyssal_containment_room')
        .duration(800)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('kubejs:abyssal_inductor_hull'))
                .EUt(GTValues.VHA[GTValues.UIV])
                .CWUt(224)
        )
        .EUt(GTValues.VA[GTValues.UXV]);

    // === CHEF ===
    event.recipes.gtceu
        .assembly_line(id('ultimate_ebf'))
        .itemInputs(
            'gtceu:abyssal_alloy_frame',
            '8x #gtceu:circuits/uiv',
            '4x gtceu:dense_draco_abyssal_plate',
            '6x gtceu:uiv_field_generator',
            '4x gtceu:uiv_conveyor_module',
            '8x gtceu:borealic_steel_gear',
            '4x gtceu:uiv_electric_motor',
            '18x gtceu:small_ultispestalloy_cmsh_gear',
            '4x gtceu:lepton_resonant_thallium_antimonide_spring',
            '4x kubejs:uiv_microfluidic_flow_valve',
            '32x gtceu:fine_rhenium_super_composite_alloy_wire',
            '16x gtceu:zeroidic_trinate_steel_screw'
        )
        .inputFluids(
            'gtceu:naquadated_soldering_alloy 24768',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 19008',
            'start_core:corefire_nectar 100000',
            'gtceu:dragon_breath 12500'
        )
        .itemOutputs('gtceu:ultimate_ebf')
        .duration(1800)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:mega_blast_furnace'))
                .EUt(GTValues.VHA[GTValues.UIV])
                .CWUt(192)
        )
        .EUt(GTValues.VHA[GTValues.UXV]);

    // === Part Hub ===
    event.recipes.gtceu
        .assembly_line(id('component_part_hub'))
        .itemInputs(
            '8x gtceu:component_part_assembly',
            '6x kubejs:uev_computational_matrix',
            '4x kubejs:draco_ware_casing',
            '8x kubejs:uev_high_strength_panel',
            '4x gtceu:uev_robot_arm',
            '4x gtceu:uev_field_generator',
            '24x gtceu:void_screw',
            '64x kubejs:uepic_chip'
        )
        .inputFluids(
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 14400',
            'gtceu:utopian_akreyrium 10000',
            'gtceu:tungsten_disulfide 7200',
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 5600'
        )
        .itemOutputs('gtceu:component_part_hub')
        .duration(2400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:component_part_assembly'))
                .EUt(GTValues.VHA[GTValues.UEV])
                .CWUt(192)
        )
        .EUt(GTValues.VHA[GTValues.UIV]);

    // === Chem Plant ===
    event.recipes.gtceu
        .assembly_line(id('atomic_materialization_plant_controller'))
        .itemInputs(
            'gtceu:uiv_machine_hull',
            '6x kubejs:rhenotax_coil',
            '8x gtceu:uiv_field_generator',
            '12x #gtceu:circuits/uiv',
            '6x gtceu:uiv_electric_motor',
            '4x gtceu:nyanium_gear',
            '12x gtceu:draco_abyssal_rotor',
            '6x gtceu:small_draconyallium_gear',
            '2x gtceu:uiv_robot_arm',
            '6x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_huge_fluid_pipe',
            '4x gtceu:uiv_fluid_regulator',
            '4x gtceu:lepton_resonant_thallium_antimonide_spring',
            '64x gtceu:fine_rhenium_super_composite_alloy_wire',
            '32x gtceu:fine_rhenium_super_composite_alloy_wire'
        )
        .inputFluids(
            'gtceu:naquadated_soldering_alloy 18720',
            'gtceu:perfluoroelastomer_rubber 15696',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 10080',
            'gtceu:calamatium 5040'
        )
        .itemOutputs('gtceu:atomic_materialization_plant')
        .duration(1200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:chemical_plant'))
                .EUt(GTValues.VA[GTValues.UIV])
                .CWUt(216)
        )
        .EUt(GTValues.VHA[GTValues.UXV]);

    // === Incomprehensible Chemical Reactor ===
    event.recipes.gtceu
        .assembly_line(id('incomprehensible_chemical_reactor'))
        .itemInputs(
            'gtceu:uiv_machine_hull',
            '4x gtceu:uiv_electric_motor',
            'gtceu:abyssal_alloy_rotor',
            '2x gtceu:nyanium_large_fluid_pipe',
            '4x #gtceu:circuits/uiv'
        )
        .inputFluids('gtceu:naquadated_soldering_alloy 1872', 'gtceu:dragon_breath 750')
        .itemOutputs('gtceu:incomprehensible_chemical_reactor')
        .duration(1200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:extreme_chemical_reactor'))
                .EUt(GTValues.VHA[GTValues.UIV])
                .CWUt(192)
        )
        .EUt(GTValues.VHA[GTValues.UIV]);

    // === True Synthesis Plant ===
    event.recipes.gtceu
        .assembly_line(id('true_synthesis_array'))
        .itemInputs(
            'gtceu:uiv_machine_hull',
            '4x gtceu:uiv_sensor',
            '4x gtceu:uiv_robot_arm',
            '4x gtceu:uiv_fluid_regulator',
            '2x gtceu:abyssal_alloy_rotor',
            '6x gtceu:nyanium_large_fluid_pipe',
            '6x #gtceu:circuits/uiv',
            '2x gtceu:lepton_resonant_thallium_antimonide_spring'
        )
        .inputFluids('gtceu:naquadated_soldering_alloy 1872', 'gtceu:dragon_breath 1750')
        .itemOutputs('gtceu:true_synthesis_array')
        .duration(1200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:advanced_synthesis_plant'))
                .EUt(GTValues.VHA[GTValues.UIV])
                .CWUt(256)
        )
        .EUt(GTValues.VHA[GTValues.UXV]);

    // === Ak stabiliser 2 ===
    event.recipes.gtceu
        .assembly_line(id('abyssal_akreyriadix_stabiliser'))
        .itemInputs(
            'gtceu:uiv_machine_hull',
            '12x #gtceu:circuits/uiv',
            '192x kubejs:uepic_chip',
            '8x gtceu:small_draco_abyssal_gear',
            '32x gtceu:nyanium_normal_fluid_pipe',
            '16x gtceu:nether_star_lens',
            '16x gtceu:echo_shard_lens',
            '4x gtceu:uiv_field_generator',
            '4x gtceu:uiv_fluid_regulator',
            '4x gtceu:uiv_sensor',
            '2x gtceu:draco_abyssal_rotor'
        )
        .inputFluids('gtceu:abyssal_alloy 9216', 'gtceu:dragon_breath 75000')
        .itemOutputs('gtceu:abyssal_akreyriadix_stabiliser')
        .duration(1600)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:folding_akreyrium_stabiliser'))
                .EUt(GTValues.VHA[GTValues.UIV])
                .CWUt(216)
        )
        .EUt(GTValues.VA[GTValues.UIV]);
});
