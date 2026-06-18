ServerEvents.recipes((event) => {
    const id = global.id;

    const assline = 'assembly_line';
    const cut = event.recipes.gtceu.cutter;
    const rotor = event.recipes.gtceu.large_rotor_machine;
    const stargateComponent = event.recipes.gtceu.stargate_component_assembly;
    const riftEnh = event.recipes.gtceu.riftic_enhancement;
    const riftAss = 'riftic_infusion_assembly';
    const dracoCirc = 'draco_circuit_assembler';

    let uRune = 'kubejs:transcension_engraved_undina_sigil';
    let sRune = 'kubejs:transcension_engraved_sylvestris_sigil';
    let gRune = 'kubejs:transcension_engraved_gnomus_sigil';
    let vRune = 'kubejs:transcension_engraved_vulcanus_sigil';
    let iRune = 'kubejs:transcension_engraved_illustris_sigil';
    let tRune = 'kubejs:transcension_engraved_tenebrosus_sigil';

    // Classic Gate Components
    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)

    researchBuilder(
        riftAss,
        'dsg_field_stabiliser',
        [
            '2x gtceu:primordially_stellarized_weapon_grade_naquadah_frame',
            '24x gtceu:uiv_field_generator',
            '3x kubejs:dsg_energy_modulator',
            '8x gtceu:uiv_electric_piston',
            '96x gtceu:fine_draco_abyssal_wire',
            '96x gtceu:fine_magmada_alloy_wire',
            '96x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
            '96x gtceu:fine_raging_rimulatia_wire',
            '4x gtceu:hvga_steel_ultradense_plate',
            '24x gtceu:calamatium_screw',
            '4x gtceu:nyanium_ultradense_plate',
            '18x gtceu:isovol_screw',
        ],
        ['gtceu:neutrindium_soldering_alloy 9216', 'gtceu:faematter 5000', 'gtceu:draconic_stabilization_mixture 3750'],
        ['kubejs:dsg_field_stabiliser'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:asg_field_stabiliser'
    );

    researchBuilder(
        assline,
        'dsg_stellar_dialer',
        [
            '2x gtceu:nyanium_ultradense_plate',
            'gtceu:advanced_monitor',
            '2x kubejs:dsg_computational_matrix',
            '4x #gtceu:circuits/uxv',
            '48x gtceu:abyssal_alloy_ring',
            '4x gtceu:hvga_steel_rod',
            '12x gtceu:draco_abyssal_bolt',
        ],
        ['gtceu:neutrindium_soldering_alloy 3456'],
        ['kubejs:dsg_stellar_dialer'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:asg_stellar_dialer'
    );

    researchBuilder(
        dracoCirc,
        'dsg_computational_matrix',
        [
            '3x kubejs:abyssal_processing_unit',
            '2x gtceu:double_raging_rimulatia_plate',
            '48x kubejs:dsg_dpu',
            '2x gtceu:lepton_resonant_thallium_antimonide_spring',
            '16x kubejs:rift_infused_soc',
            '64x gtceu:hvga_steel_bolt',
            '192x kubejs:uipic_chip',
            '96x gtceu:fine_draco_abyssal_wire',
            '48x gtceu:fine_primordially_stellarized_weapon_grade_naquadah_wire',
            '6x gtceu:nyanium_plate',
        ],
        [
            'gtceu:neutrindium_soldering_alloy 9216',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 2304',
            'gtceu:draconic_enrichment_serum 7500',
        ],
        ['kubejs:dsg_computational_matrix'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:asg_computational_matrix'
    );

    researchBuilder(
        riftAss,
        'dsg_dimensional_supercomputer',
        [
            '4x gtceu:hvga_steel_frame',
            '24x kubejs:dsg_computational_matrix',
            '3x kubejs:ascension_core',
            '12x kubejs:dsg_energy_modulator',
            '10x gtceu:draconyallium_foil_ream',
            '8x gtceu:abyssal_alloy_foil_ream',
            '6x gtceu:draco_abyssal_foil_ream',
            '4x gtceu:hvga_steel_foil_ream',
            '160x #gtceu:circuits/uxv',
            '16x gtceu:nyanium_nonuple_fluid_pipe',
            '24x gtceu:uiv_fluid_regulator',
            '48x gtceu:aerorelient_steel_ring',
            '24x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_quadruple_fluid_pipe',
            '576x gtceu:abyssal_alloy_round',
        ],
        [
            'gtceu:neutrindium_soldering_alloy 62208',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 9216',
            'gtceu:faematter 12500',
            'gtceu:draconic_stabilization_mixture 10000',
        ],
        ['kubejs:dsg_dimensional_supercomputer'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:abyssal_processor_mainframe'
    );

    researchBuilder(
        riftAss,
        'dsg_dhd',
        [
            'sgjourney:milky_way_dhd',
            'kubejs:dsg_stellar_dialer',
            '6x ' + uRune,
            '6x ' + sRune,
            '6x ' + gRune,
            '6x ' + vRune,
            '6x ' + iRune,
            '6x ' + tRune,
        ],
        ['gtceu:neutrindium_soldering_alloy 9216', 'gtceu:faematter 7500', 'gtceu:draconic_stabilization_mixture 6250'],
        ['sgjourney:pegasus_dhd'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'sgjourney:milky_way_dhd'
    );

    researchBuilder(
        riftAss,
        'dsg_energy_modulator',
        [
            'gtceu:raging_rimulatia_frame',
            '2x start_core:uiv_16a_dream_link_energy_hatch',
            '2x #gtceu:circuits/uxv',
            '3x gtceu:max_battery',
            '32x gtceu:rhenium_super_composite_alloy_foil',
            '24x gtceu:draco_abyssal_foil',
            '16x gtceu:nyanium_foil',
            '8x gtceu:raging_rimulatia_foil',
            '16x kubejs:prismalic_neutron_reflector',
            '8x gtceu:hvga_steel_screw',
        ],
        ['gtceu:neutrindium_soldering_alloy 6912', 'gtceu:pure_dragon_breath 37500', 'gtceu:bec_og 12500'],
        ['kubejs:dsg_energy_modulator'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:asg_energy_modulator'
    );

    researchBuilder(
        riftAss,
        'dsg_chevron',
        [
            '3x gtceu:raging_rimulatia_frame',
            'gtceu:exquisite_aquariadic_rimuli_dragonix_gem',
            '6x kubejs:dsg_field_stabiliser',
            '8x kubejs:dsg_computational_matrix',
            '24x gtceu:uiv_sensor',
            '256x kubejs:komaru_filament_t2',
            '8x gtceu:uiv_electric_motor',
            '6x gtceu:long_raging_rimulatia_rod',
            '320x gtceu:nether_star_foil',
            '96x gtceu:lepton_resonant_thallium_antimonide_double_cable',
        ],
        [
            'gtceu:neutrindium_soldering_alloy 36864',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 6912',
            'gtceu:faematter 17500',
        ],
        ['kubejs:dsg_chevron'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:asg_chevron'
    );

    researchBuilder(
        assline,
        'dsg_reinforced_plating',
        [
            '2x gtceu:melastrium_mox_ultradense_plate',
            '2x gtceu:vastaqalloy_cr_4200x_ultradense_plate',
            '2x gtceu:soul_ascendant_cuperite_ultradense_plate',
            '2x gtceu:aerorelient_steel_ultradense_plate',
            '2x gtceu:zeroidic_trinate_steel_ultradense_plate',
            '2x gtceu:expetidalloy_d_17_ultradense_plate',
            '4x kubejs:asg_reinforced_plating',
            '1x #gtceu:circuits/uxv',
            '3x gtceu:hvga_steel_gear',
            '4x gtceu:uiv_robot_arm',
            '3x gtceu:small_draconyallium_gear',
            '42x gtceu:lepton_resonant_thallium_antimonide_single_cable',
        ],
        ['gtceu:neutrindium_soldering_alloy 1152', 'gtceu:faematter 750', 'gtceu:draconic_stabilization_mixture 625'],
        ['kubejs:dsg_reinforced_plating'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:asg_reinforced_plating'
    );

    researchBuilder(
        riftAss,
        'dsg_stellar_access_point',
        [
            '2x gtceu:draco_abyssal_frame',
            '4x kubejs:dsg_computational_matrix',
            '6x gtceu:uiv_sensor',
            '3x gtceu:rhenium_super_composite_alloy_quadruple_wire',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil_ream',
            'gtceu:astatium_bioselex_carbonite_foil_ream',
            'gtceu:hafnide_ito_ceramic_foil_ream',
            'gtceu:rhenate_w_foil_ream',
            'gtceu:mythrotight_carbide_steel_ultradense_plate',
            'gtceu:trikoductive_neutro_steel_ultradense_plate',
        ],
        [
            'gtceu:neutrindium_soldering_alloy 6912',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 2304',
            'gtceu:faematter 2500',
        ],
        ['kubejs:dsg_stellar_access_point'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:asg_stellar_access_point'
    );

    researchBuilder(
        assline,
        'prismalic_fragment',
        [
            'gtceu:draconyallium_frame',
            'kubejs:illustris_singularity',
            'kubejs:vulcanus_singularity',
            '48x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil',
            '72x gtceu:nyanium_tiny_fluid_pipe',
            'kubejs:prismalic_helix_core',
            '2x gtceu:raging_rimulatia_rod',
        ],
        ['gtceu:neutrindium_soldering_alloy 2304', 'gtceu:faematter 1750', 'gtceu:draconic_stabilization_mixture 875'],
        ['kubejs:prismalic_fragment'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'gtceu:prismatic_hypergurmalium_bucket'
    );

    researchBuilder(
        assline,
        'riftic_fragment',
        [
            'gtceu:draconyallium_frame',
            'kubejs:undina_singularity',
            'kubejs:sylvestris_singularity',
            '48x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil',
            '72x gtceu:nyanium_tiny_fluid_pipe',
            'kubejs:prismalic_helix_core',
            '2x gtceu:raging_rimulatia_rod',
        ],
        ['gtceu:neutrindium_soldering_alloy 2304', 'gtceu:faematter 1750', 'gtceu:draconic_stabilization_mixture 875'],
        ['kubejs:riftic_fragment'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'gtceu:riftic_concentrate_bucket'
    );

    researchBuilder(
        assline,
        'primordial_fragment',
        [
            'gtceu:draconyallium_frame',
            'kubejs:tenebrosus_singularity',
            'kubejs:gnomus_singularity',
            '48x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil',
            '72x gtceu:nyanium_tiny_fluid_pipe',
            'kubejs:prismalic_helix_core',
            '2x gtceu:raging_rimulatia_rod',
        ],
        ['gtceu:neutrindium_soldering_alloy 2304', 'gtceu:faematter 1750', 'gtceu:draconic_stabilization_mixture 875'],
        ['kubejs:primordial_fragment'],
        6000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'gtceu:primordial_residue_bucket'
    );

    researchBuilder(
        riftAss,
        'prismafae_illuminatus_core',
        [
            'kubejs:draconic_core',
            '16x kubejs:prismalic_fragment',
            '4x gtceu:uiv_field_generator',
            '24x kubejs:uiv_high_strength_panel',
            '128x gtceu:raging_rimulatia_bolt',
        ],
        ['gtceu:prismatic_hypergurmalium 86250', 'gtceu:draconyallium 2304'],
        ['kubejs:prismafae_illuminatus_core'],
        3000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:prismalic_fragment'
    );

    researchBuilder(
        riftAss,
        'spatium_ruptura_core',
        [
            'kubejs:draconic_core',
            '16x kubejs:riftic_fragment',
            '4x gtceu:uiv_field_generator',
            '24x kubejs:uiv_high_strength_panel',
            '128x gtceu:raging_rimulatia_bolt',
        ],
        ['gtceu:riftic_concentrate 86250', 'gtceu:draconyallium 2304'],
        ['kubejs:spatium_ruptura_core'],
        3000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:riftic_fragment'
    );

    researchBuilder(
        riftAss,
        'primus_tempus_core',
        [
            'kubejs:draconic_core',
            '16x kubejs:primordial_fragment',
            '4x gtceu:uiv_field_generator',
            '24x kubejs:uiv_high_strength_panel',
            '128x gtceu:raging_rimulatia_bolt',
        ],
        ['gtceu:primordial_residue 86250', 'gtceu:draconyallium 2304'],
        ['kubejs:primus_tempus_core'],
        3000,
        500,
        500 * 1200,
        GTValues.VHA[GTValues.UIV],
        'kubejs:primordial_fragment'
    );

    event.recipes.gtceu
        .draco_infusion(id('ascension_core'))
        .itemInputs(
            'kubejs:draconic_core',
            'kubejs:prismafae_illuminatus_core',
            'kubejs:primordial_fragment',
            'kubejs:riftic_fragment',
            'kubejs:spatium_ruptura_core',
            'kubejs:primus_tempus_core',
            'kubejs:prismalic_fragment'
        )
        .inputFluids('gtceu:raging_rimulatia 41472')
        .itemOutputs('kubejs:ascension_core')
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.recipes.gtceu
        .supreme_chemistry(id('dsg_enscription_plate'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('2x kubejs:asg_enscription_plate', '32x gtceu:aurourium_foil')
                .inputFluids('gtceu:prismatic_hypergurmalium 125')
                .next()
                .itemInputs('#gtceu:circuits/uxv', '16x gtceu:raging_rimulatia_foil')
                .inputFluids('gtceu:primordial_residue 125')
                .next()
                .itemInputs('#gtceu:circuits/uiv', '8x gtceu:draconyallium_foil')
                .inputFluids('gtceu:riftic_concentrate 125')
        )
        .itemOutputs('kubejs:dsg_enscription_plate')
        .duration(4000)
        .EUt(GTValues.VHA[GTValues.UIV]);

    cut(id('dsg_enscription_chip'))
        .itemInputs('kubejs:dsg_enscription_plate')
        .inputFluids('gtceu:draconic_stabilization_mixture 3850')
        .itemOutputs('2x kubejs:dsg_enscription_chip')
        .duration(3000)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUt(GTValues.VHA[GTValues.UIV]);

    rotor(id('dsg_stargate_rod_base'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs(
                    'kubejs:awakened_abyss_stargate_rod',
                    'kubejs:awakened_inferno_stargate_rod',
                    '#gtceu:circuits/uxv',
                    '2x gtceu:draco_abyssal_ring'
                )
                .next()
                .itemInputs(
                    'gtceu:long_raging_rimulatia_rod',
                    'gtceu:long_borealic_steel_rod',
                    'gtceu:aurourium_wire_spool'
                )
                .inputFluids('gtceu:pure_dragon_breath 3750')
                .next()
                .itemInputs(
                    'kubejs:awakened_abyss_stargate_rod',
                    'kubejs:awakened_inferno_stargate_rod',
                    'gtceu:draco_abyssal_wire_spool'
                )
                .inputFluids('gtceu:borealic_concentrate 6912')
                .next()
                .itemInputs(
                    'gtceu:long_raging_rimulatia_rod',
                    'gtceu:long_borealic_steel_rod',
                    'gtceu:stellarium_wire_spool'
                )
                .inputFluids('gtceu:pure_dragon_breath 3750')
                .next()
                .itemInputs(
                    'kubejs:awakened_abyss_stargate_rod',
                    'kubejs:awakened_inferno_stargate_rod',
                    'gtceu:lepton_resonant_thallium_antimonide_wire_spool'
                )
                .inputFluids('gtceu:borealic_concentrate 6912')
        )
        .itemOutputs('kubejs:dsg_stargate_rod_base')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    rotor(id('primordicly_infused_stargate_rod'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs(
                    'kubejs:dsg_stargate_rod_base',
                    'kubejs:primordial_fragment',
                    '2x gtceu:raging_rimulatia_plate'
                )
                .next()
                .itemInputs(
                    'gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:abyssal_alloy_foil_ream',
                    'gtceu:nyanium_foil_ream'
                )
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
                .next()
                .itemInputs(
                    'gtceu:draconyallium_foil_ream',
                    'gtceu:hvga_steel_foil_ream',
                    'gtceu:rhenium_super_composite_alloy_foil_ream'
                )
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
                .next()
                .itemInputs(
                    'gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:rhenium_super_composite_alloy_foil_ream',
                    'gtceu:hvga_steel_foil_ream'
                )
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
                .next()
                .itemInputs('gtceu:draconyallium_foil_ream', 'gtceu:nyanium_foil_ream', 'gtceu:abyssal_alloy_foil_ream')
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
        )
        .itemOutputs('kubejs:primordicly_infused_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    rotor(id('kaleidoscopicly_infused_stargate_rod'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('kubejs:dsg_stargate_rod_base', 'kubejs:riftic_fragment', '2x gtceu:raging_rimulatia_plate')
                .next()
                .itemInputs('gtceu:nyanium_foil_ream', 'gtceu:draconyallium_foil_ream', 'gtceu:abyssal_alloy_foil_ream')
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
                .next()
                .itemInputs(
                    'gtceu:rhenium_super_composite_alloy_foil_ream',
                    'gtceu:hvga_steel_foil_ream',
                    'gtceu:nyanium_foil_ream'
                )
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
                .next()
                .itemInputs(
                    'gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:rhenium_super_composite_alloy_foil_ream',
                    'gtceu:hvga_steel_foil_ream'
                )
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
                .next()
                .itemInputs(
                    'gtceu:abyssal_alloy_foil_ream',
                    'gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:rhenium_super_composite_alloy_foil_ream'
                )
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
        )
        .itemOutputs('kubejs:kaleidoscopicly_infused_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    rotor(id('prismaticly_infused_stargate_rod'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs(
                    'kubejs:dsg_stargate_rod_base',
                    'kubejs:prismalic_fragment',
                    '2x gtceu:raging_rimulatia_plate'
                )
                .next()
                .itemInputs(
                    'gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:draconyallium_foil_ream',
                    'gtceu:nyanium_foil_ream'
                )
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
                .next()
                .itemInputs(
                    'gtceu:rhenium_super_composite_alloy_foil_ream',
                    'gtceu:hvga_steel_foil_ream',
                    'gtceu:abyssal_alloy_foil_ream'
                )
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
                .next()
                .itemInputs(
                    'gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:rhenium_super_composite_alloy_foil_ream',
                    'gtceu:draconyallium_foil_ream'
                )
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
                .next()
                .itemInputs('gtceu:abyssal_alloy_foil_ream', 'gtceu:hvga_steel_foil_ream', 'gtceu:nyanium_foil_ream')
                .inputFluids('gtceu:netherite_triselex_oxide 12240')
        )
        .itemOutputs('kubejs:prismaticly_infused_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    riftEnh(id('faetic_stargate_rod'))
        .itemInputs('kubejs:prismaticly_infused_stargate_rod')
        .inputFluids('gtceu:faematter 25000')
        .itemOutputs('kubejs:faetic_stargate_rod')
        .CWUt(888)
        .totalCWU(888 * 20 * 40)
        .EUt(GTValues.VHA[GTValues.UXV]);

    riftEnh(id('riftic_stargate_rod'))
        .itemInputs('kubejs:kaleidoscopicly_infused_stargate_rod')
        .inputFluids('gtceu:faematter 25000')
        .itemOutputs('kubejs:riftic_stargate_rod')
        .CWUt(888)
        .totalCWU(888 * 20 * 40)
        .EUt(GTValues.VHA[GTValues.UXV]);

    riftEnh(id('temporic_stargate_rod'))
        .itemInputs('kubejs:primordicly_infused_stargate_rod')
        .inputFluids('gtceu:faematter 25000')
        .itemOutputs('kubejs:temporic_stargate_rod')
        .CWUt(888)
        .totalCWU(888 * 20 * 40)
        .EUt(GTValues.VHA[GTValues.UXV]);

    stargateComponent('dsg_ring')
        .layeredRecipe((layers) =>
            layers
                .itemInputs(
                    'gtceu:raging_rimulatia_frame',
                    '24x kubejs:riftic_stargate_rod',
                    '24x kubejs:temporic_stargate_rod',
                    '24x kubejs:faetic_stargate_rod'
                )
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
                .next()
                .itemInputs('8x ' + uRune, '6x ' + tRune, '4x ' + gRune, '2x kubejs:dsg_reinforced_plating')
                .inputFluids('gtceu:faematter 100000')
                .next()
                .itemInputs('8x ' + vRune, '6x ' + uRune, '4x ' + tRune, '2x kubejs:dsg_reinforced_plating')
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
                .next()
                .itemInputs('8x ' + iRune, '6x ' + vRune, '4x ' + uRune, '2x kubejs:dsg_reinforced_plating')
                .inputFluids('gtceu:faematter 100000')
                .next()
                .itemInputs('8x ' + sRune, '6x ' + iRune, '4x ' + vRune, '2x kubejs:dsg_reinforced_plating')
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
                .next()
                .itemInputs('8x ' + gRune, '6x ' + sRune, '4x ' + iRune, '2x kubejs:dsg_reinforced_plating')
                .inputFluids('gtceu:faematter 100000')
                .next()
                .itemInputs('8x ' + tRune, '6x ' + gRune, '4x ' + sRune, '2x kubejs:dsg_reinforced_plating')
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
        )
        .itemOutputs('kubejs:draconic_stargate_ring_block')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UXV]);

    stargateComponent('dsg_chevron')
        .layeredRecipe((layers) =>
            layers
                .itemInputs(
                    'kubejs:draconic_stargate_ring_block',
                    'kubejs:dsg_chevron',
                    '8x kubejs:dsg_field_stabiliser',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
                .next()
                .itemInputs(
                    '6x ' + tRune,
                    '4x ' + iRune,
                    '4x kubejs:temporic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:faematter 100000')
                .next()
                .itemInputs(
                    '6x ' + sRune,
                    '4x ' + uRune,
                    '4x kubejs:faetic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
                .next()
                .itemInputs(
                    '6x ' + iRune,
                    '4x ' + vRune,
                    '4x kubejs:riftic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:faematter 100000')
                .next()
                .itemInputs(
                    '6x ' + uRune,
                    '4x ' + gRune,
                    '4x kubejs:temporic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
                .next()
                .itemInputs(
                    '6x ' + vRune,
                    '4x ' + tRune,
                    '4x kubejs:faetic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:faematter 100000')
                .next()
                .itemInputs(
                    '6x ' + gRune,
                    '4x ' + sRune,
                    '4x kubejs:riftic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
        )
        .itemOutputs('kubejs:draconic_stargate_chevron_block')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UXV]);

    stargateComponent('dsg_base')
        .layeredRecipe((layers) =>
            layers
                .itemInputs(
                    'kubejs:draconic_stargate_ring_block',
                    'kubejs:dsg_dimensional_supercomputer',
                    '8x kubejs:dsg_stellar_access_point',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:faematter 100000')
                .next()
                .itemInputs(
                    '10x ' + sRune,
                    '4x ' + iRune,
                    '8x kubejs:riftic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
                .next()
                .itemInputs(
                    '10x ' + gRune,
                    '4x ' + tRune,
                    '8x kubejs:temporic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:faematter 100000')
                .next()
                .itemInputs(
                    '10x ' + uRune,
                    '4x ' + sRune,
                    '8x kubejs:faetic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
                .next()
                .itemInputs(
                    '10x ' + vRune,
                    '4x ' + gRune,
                    '8x kubejs:riftic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:faematter 100000')
                .next()
                .itemInputs(
                    '10x ' + tRune,
                    '4x ' + uRune,
                    '8x kubejs:temporic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:draconic_stabilization_mixture 100000')
                .next()
                .itemInputs(
                    '10x ' + iRune,
                    '4x ' + vRune,
                    '8x kubejs:faetic_stargate_rod',
                    '2x kubejs:dsg_reinforced_plating'
                )
                .inputFluids('gtceu:faematter 100000')
        )
        .itemOutputs('kubejs:draconic_stargate_base_block')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.recipes.create
        .mechanical_crafting(
            'sgjourney:pegasus_stargate {BlockEntityTag:{LocalPointOfOrigin:1b}}',
            [
                /* prettier-ignore-start */
                ' CRCRC ',
                'RR   RR',
                'C     C',
                'R     R',
                'R     R',
                'CR   RC',
                ' RCBCR ',
                /* prettier-ignore-end*/
            ],
            {
                R: 'kubejs:draconic_stargate_ring_block',
                C: 'kubejs:draconic_stargate_chevron_block',
                B: 'kubejs:draconic_stargate_base_block',
            }
        )
        .id('start:shaped/dsg');
});
