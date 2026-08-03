ServerEvents.recipes((event) => {
    const id = global.id;

    // Pre - Array

    event.recipes.gtceu
        .extractor(id('dragon_breath'))
        .itemInputs('minecraft:dragon_egg')
        .outputFluids('gtceu:dragon_breath 750')
        .duration(1000)
        .EUtVHA(UIV);

    event.recipes.gtceu
        .canner(id('dragon_breath'))
        .itemInputs('minecraft:glass_bottle')
        .inputFluids('gtceu:dragon_breath 250')
        .itemOutputs('minecraft:dragon_breath')
        .duration(100)
        .EUtVHA(UIV);

    event.remove({ id: 'minecraft:popped_chorus_fruit' });
    event.replaceInput(
        { input: 'minecraft:popped_chorus_fruit' },
        'minecraft:popped_chorus_fruit',
        'minecraft:chorus_fruit'
    );
    event.recipes.gtceu
        .assembly_line(id('true_absolute_chorus'))
        .itemInputs('kubejs:voidic_core', '1024x minecraft:popped_chorus_fruit')
        .inputFluids('gtceu:ender_air 5000000')
        .itemOutputs('kubejs:true_absolute_chorus')
        .duration(12000)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('minecraft:popped_chorus_fruit'))
                .EUt(GTValues.VHA[UHV])
                .CWUt(192)
        )
        .EUtVHA(UHV);

    event.recipes.gtceu
        .heat_chamber(id('popped_chorus_fruit'))
        .itemInputs('minecraft:chorus_fruit')
        .inputFluids('gtceu:oganesson 10')
        .itemOutputs('minecraft:popped_chorus_fruit')
        .duration(2400)
        .EUtVHA(UV);

    event.recipes.gtceu
        .assembler(id('core_casing'))
        .itemInputs(
            '6x gtceu:double_aurourium_plate',
            'gtceu:void_frame',
            '2x kubejs:true_absolute_chorus',
            '2x kubejs:runic_wave_generator',
            'gtceu:uev_field_generator',
            'gtceu:uev_emitter'
        )
        .itemOutputs('kubejs:core_casing')
        .circuit(7)
        .duration(2400)
        .EUtVHA(UEV);

    // Draconic Infusion Array

    // Machine recipes

    event.recipes.gtceu
        .assembly_line(id('draco_infusion'))
        .itemInputs(
            'gtceu:void_frame',
            '6x gtceu:uev_robot_arm',
            '2x gtceu:uev_field_generator',
            '6x gtceu:dense_nyanium_plate',
            '1x gtceu:uev_electric_pump',
            '64x kubejs:uepic_chip',
            '48x gtceu:fine_enriched_pallarovium_alloy_wire',
            '3x gtceu:echo_shard_lens'
        )
        .inputFluids(
            'gtceu:naquadated_soldering_alloy 57600',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 21600',
            'gtceu:dragon_breath 500'
        )
        .itemOutputs('gtceu:draco_infusion')
        .duration(2400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('minecraft:dragon_head')).EUt(GTValues.VA[UEV]).CWUt(216)
        )
        .EUtVA(UIV);

    event.recipes.gtceu
        .assembly_line(id('primordial_infusion'))
        .itemInputs(
            'gtceu:draco_abyssal_frame',
            '3x #gtceu:circuits/uxv',
            '6x gtceu:uiv_robot_arm',
            '2x gtceu:uiv_field_generator',
            '6x gtceu:draconyallium_ultradense_plate',
            '1x gtceu:uiv_electric_pump',
            '64x kubejs:uipic_chip',
            '48x gtceu:fine_rhenium_super_composite_alloy_wire'
        )
        .inputFluids(
            'gtceu:neutrindium_soldering_alloy 57600',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 43200',
            'gtceu:pure_dragon_breath 15000'
        )
        .itemOutputs('gtceu:primordial_infusion')
        .duration(2400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:draco_infusion')).EUt(GTValues.VA[UIV]).CWUt(312)
        )
        .EUtVA(UXV);

    // Infusion

    //--[1]-[2]--
    //[3]-[0]-[4]
    //--[5]-[6]--

    /**
     * @param {string} RecipeID
     * @param {string} Output
     * @param {string} Fluid
     * @param {string} Center
     * @param {string} st1
     * @param {string} nd2
     * @param {string} rd3
     * @param {string} th4
     * @param {string} th5
     * @param {string} th6
     * @param {number} duration
     * @param {number} eut
     */
    const infusion = (RecipeID, Output, Fluid, Center, st1, nd2, rd3, th4, th5, th6, duration, eut) => {
        event.recipes.gtceu
            .draco_infusion(id(RecipeID))
            .itemInputs(Center, st1, nd2, rd3, th4, th5, th6)
            .inputFluids(Fluid)
            .itemOutputs(Output)
            .duration(duration)
            .EUt(eut);
    };

    infusion(
        'draconic_eye',
        'kubejs:draconic_eye',
        'gtceu:dragon_breath 12500',
        'gtceu:quantum_eye',
        'gtceu:zpm_sensor',
        'gtceu:double_abyssal_alloy_plate',
        '2x kubejs:draconic_scale_cells',
        '2x kubejs:draconic_stem_cells',
        '4x gtceu:draconyallium_foil',
        '2x kubejs:decaying_star',
        400,
        GTValues.VHA[UIV]
    );

    infusion(
        'draco_stem_cells',
        '8x kubejs:draconic_stem_cells',
        'gtceu:dragon_breath 125',
        '32x gtceu:stem_cells',
        'gtceu:echo_shard_plate',
        'gtceu:nether_star_plate',
        '4x gtceu:quantum_star',
        '4x minecraft:popped_chorus_fruit',
        'gtceu:echo_shard_lens',
        'gtceu:nether_star_lens',
        640,
        GTValues.VHA[UHV]
    );

    infusion(
        'draco_brain_matter_cells',
        '4x kubejs:draconic_brain_matter_cells',
        'thermal:ender 10000',
        '4x kubejs:draconic_stem_cells',
        '8x gtceu:fine_prismalium_wire',
        '16x gtceu:carbon_fibers',
        'kubejs:runic_circuit_board',
        '8x gtceu:fine_borosilicate_glass_wire',
        'gtceu:luv_emitter',
        'gtceu:wetware_circuit_board',
        640,
        GTValues.VHA[UHV]
    );

    infusion(
        'draco_scale_cells',
        '32x kubejs:draconic_scale_cells',
        'gtceu:neutronium 6804',
        '32x kubejs:draconic_stem_cells',
        'gtceu:dense_naquadah_alloy_plate',
        'gtceu:dense_tungsten_steel_plate',
        'gtceu:dense_ancient_netherite_plate',
        'gtceu:dense_darmstadtium_plate',
        'gtceu:dense_obsidian_plate',
        'gtceu:dense_magnetic_steel_plate',
        2560,
        GTValues.VHA[UHV]
    );

    infusion(
        'draco_boule',
        'kubejs:draco_boule',
        'gtceu:pure_dragon_breath 4000',
        'gtceu:neutronium_boule',
        '32x gtceu:silicon_foil',
        '32x gtceu:neutronium_silicon_carbide_block',
        '2x kubejs:draconic_stem_cells',
        '2x kubejs:draconic_brain_matter_cells',
        '32x gtceu:silicon_block',
        '32x gtceu:neutronium_foil',
        6000,
        GTValues.VHA[UHV]
    );

    // infusion('draco_ware_casing','3x kubejs:draco_ware_casing','gtceu:dragon_breath 5000','3x gtceu:high_power_casing', '1x #gtceu:circuits/uev',
    // '4x kubejs:draconic_brain_matter_cells','16x gtceu:fine_aurourium_wire','1x #gtceu:circuits/uev','1x gtceu:uev_sensor', '16x gtceu:fine_aurourium_wire',
    // 800,GTValues.VHA[UEV]);

    // infusion('draco_resilient_fusion_glass','2x kubejs:draco_resilient_fusion_glass','gtceu:dragon_breath 2000','2x gtceu:fusion_glass',
    // '2x kubejs:draconic_scale_cells', '4x gtceu:neutron_reflector', 'gtceu:uhv_field_generator', 'gtceu:uhv_field_generator',
    // '4x gtceu:neutron_reflector', '2x kubejs:draconic_scale_cells',400,GTValues.VHA[UEV]);

    // infusion('draco_assembly_grating','3x kubejs:draco_assembly_grating','gtceu:dragon_breath 4000','3x gtceu:assembly_line_grating',
    // '1x gtceu:uev_electric_motor', '4x gtceu:dragonsteel_rotor', '8x gtceu:void_foil', '1x gtceu:uev_electric_motor',
    // '1x gtceu:uev_electric_piston', '8x gtceu:void_foil', 600, GTValues.VHA[UEV]);

    infusion(
        'dragon_egg',
        'minecraft:dragon_egg',
        'gtceu:draconyallium 1008',
        '32x kubejs:draconic_stem_cells',
        'gtceu:pure_netherite_foil',
        'gtceu:ancient_netherite_foil',
        'gtceu:void_plate',
        'gtceu:abyssal_alloy_plate',
        'gtceu:dense_naquadria_plate',
        'gtceu:dense_enriched_naquadah_plate',
        900,
        GTValues.VHA[UIV]
    );

    // infusion('abyssal_inductor','3x kubejs:abyssal_inductor','gtceu:dragon_breath 250','3x gtceu:blacklight','4x gtceu:draco_abyssal_screw',
    // '8x gtceu:polonium_bismide_single_cable','2x gtceu:lepton_resonant_thallium_antimonide_spring','4x gtceu:draco_abyssal_screw',
    // 'gtceu:uiv_emitter','2x gtceu:lepton_resonant_thallium_antimonide_spring',900,GTValues.VHA[UIV]);

    // infusion('abyssal_inductor_hull','2x kubejs:abyssal_inductor_hull','gtceu:abyssal_alloy 1000','2x gtceu:sterilizing_filter_casing','kubejs:abyssal_inductor',
    // '#gtceu:circuits/uiv','kubejs:voidic_reinforced_mesh','kubejs:abyssal_inductor','kubejs:uiv_microfluidic_flow_valve','kubejs:voidic_reinforced_mesh', 150,
    // GTValues.VA[UXV]);

    infusion(
        'saturation_core_low',
        '32x kubejs:saturation_core_1',
        'gtceu:dragon_breath 100',
        'gtceu:energy_cluster',
        'gtceu:tungsten_carbide_plate',
        'gtceu:void_screw',
        'gtceu:hsss_gear',
        'gtceu:double_hsss_plate',
        'gtceu:void_ring',
        'gtceu:small_tungsten_carbide_gear',
        400,
        GTValues.VA[UHV]
    );

    infusion(
        'saturation_core_moderate',
        '32x kubejs:saturation_core_2',
        'gtceu:dragon_breath 100',
        'gtceu:energy_cluster',
        'gtceu:tungsten_carbide_plate',
        'gtceu:void_screw',
        'gtceu:hssg_gear',
        'gtceu:double_hssg_plate',
        'gtceu:void_ring',
        'gtceu:small_tungsten_carbide_gear',
        400,
        GTValues.VA[UHV]
    );

    infusion(
        'saturation_core_high',
        '32x kubejs:saturation_core_3',
        'gtceu:dragon_breath 100',
        'gtceu:energy_cluster',
        'gtceu:tungsten_carbide_plate',
        'gtceu:void_rod',
        'gtceu:hsse_gear',
        'gtceu:double_hsse_plate',
        'gtceu:void_ring',
        'gtceu:small_tungsten_carbide_gear',
        400,
        GTValues.VA[UHV]
    );

    infusion(
        'soul_of_the_flame',
        'kubejs:soul_of_the_flame',
        'gtceu:riftic_concentrate 22500',
        'kubejs:heart_of_the_flame',
        '2x gtceu:trinaquadalloy_ultradense_plate',
        '2x gtceu:draco_abyssal_ultradense_plate',
        '8x kubejs:voidic_core',
        '8x gtceu:uiv_field_generator',
        '2x gtceu:hvga_steel_ultradense_plate',
        '2x gtceu:draconyallium_ultradense_plate',
        1500,
        GTValues.VA[UXV]
    );

    event.recipes.gtceu
        .assembler(id('voidic_sponge'))
        .itemInputs('16x minecraft:sponge', '24x gtceu:fine_enderium_wire', '6x kubejs:voidic_reinforced_mesh')
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 288')
        .itemOutputs('16x kubejs:void_saturation_sponge')
        .duration(900)
        .circuit(3)
        .EUtVA(UV);
});
