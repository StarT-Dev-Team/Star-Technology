ServerEvents.recipes((event) => {
    const id = global.id;

    const cpa = 'component_part_assembly';
    const assline = 'assembly_line';
    const vcr = event.recipes.gtceu.vacuum_chemical_reaction_chamber;
    const cut = event.recipes.gtceu.cutter;
    const injectMix = event.recipes.gtceu.injection_mixer;
    const rotor = event.recipes.gtceu.large_rotor_machine;
    const pressureHeat = event.recipes.gtceu.pressure_heat_chamber;
    const stargateComponent = event.recipes.gtceu.stargate_component_assembly;

    // Classic Gate Components
    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)

    researchBuilder(
        assline,
        'asg_field_stabiliser',
        [
            'gtceu:stellarized_weapon_grade_naquadah_frame',
            '8x gtceu:uhv_field_generator',
            'kubejs:asg_energy_modulator',
            '2x gtceu:neutronium_ultradense_plate',
            '32x gtceu:fine_stellarium_wire',
            '32x gtceu:fine_melodium_wire',
            '32x gtceu:fine_enderium_wire',
            '12x gtceu:zalloy_screw',
        ],
        ['gtceu:naquadated_soldering_alloy 1296', 'gtceu:utopian_akreyrium 2500'],
        ['kubejs:asg_field_stabiliser'],
        6000,
        144,
        144 * 1200,
        GTValues.VHA[GTValues.UHV],
        'kubejs:csg_field_stabiliser'
    );

    researchBuilder(
        cpa,
        'asg_stellar_dialer',
        [
            'gtceu:neutronium_ultradense_plate',
            'gtceu:monitor',
            'kubejs:asg_computational_matrix',
            '2x #gtceu:circuits/uev',
            '4x gtceu:stellarium_bolt',
        ],
        ['gtceu:naquadated_soldering_alloy 1296'],
        ['kubejs:asg_stellar_dialer'],
        6000,
        144,
        144 * 1200,
        GTValues.VHA[GTValues.UHV],
        'kubejs:csg_stellar_dialer'
    );

    researchBuilder(
        cpa,
        'asg_computational_matrix',
        [
            '2x kubejs:runic_printed_circuit_board',
            '32x gtceu:fine_stellarium_wire',
            '24x kubejs:asg_dpu',
            '8x gtceu:highly_advanced_soc',
            '18x gtceu:ancient_runicalium_bolt',
            '64x kubejs:uepic_chip',
        ],
        ['gtceu:naquadated_soldering_alloy 2592', 'gtceu:sterilized_growth_medium 5000'],
        ['kubejs:asg_computational_matrix'],
        6000,
        144,
        144 * 1200,
        GTValues.VHA[GTValues.UHV],
        'kubejs:csg_computational_matrix'
    );

    researchBuilder(
        assline,
        'asg_dimensional_supercomputer',
        [
            '3x gtceu:void_frame',
            '10x kubejs:asg_computational_matrix',
            '2x kubejs:draconic_core',
            '4x kubejs:asg_energy_modulator',
            '6x gtceu:stellarium_foil_ream',
            '4x gtceu:ancient_runicalium_foil_ream',
            '64x #gtceu:circuits/uev',
            '32x #gtceu:circuits/uev',
            '8x gtceu:uhv_fluid_regulator',
            '4x gtceu:zapolgium_large_fluid_pipe',
            '56x gtceu:perfluoroelastomer_rubber_ring',
            '64x gtceu:polyether_ether_ketone_tiny_fluid_pipe',
        ],
        ['gtceu:polyether_ether_ketone 1728', 'gtceu:naquadated_soldering_alloy 1296', 'gtceu:utopian_akreyrium 1250'],
        ['kubejs:asg_dimensional_supercomputer'],
        6000,
        144,
        144 * 1200,
        GTValues.VHA[GTValues.UHV],
        'kubejs:runic_processor_mainframe'
    );

    researchBuilder(
        cpa,
        'asg_dhd',
        [
            'sgjourney:classic_dhd',
            'kubejs:asg_stellar_dialer',
            '2x kubejs:runic_reinforced_plating',
            '3x kubejs:runic_stabilization_casing',
            '4x kubejs:runic_pathway_casing',
            '3x kubejs:runic_transportation_casing',
        ],
        ['gtceu:naquadated_soldering_alloy 3888', 'gtceu:runic_convergence_infusion 2500'],
        ['sgjourney:milky_way_dhd'],
        6000,
        144,
        144 * 1200,
        GTValues.VHA[GTValues.UHV],
        'sgjourney:classic_dhd'
    );

    researchBuilder(
        assline,
        'asg_energy_modulator',
        [
            'gtceu:void_frame',
            '2x gtceu:uhv_emitter',
            '6x gtceu:ancient_runicalium_foil',
            '6x gtceu:stellarium_foil',
            '2x gtceu:energy_cluster',
            '8x kubejs:reinforced_neutron_reflector',
            '4x gtceu:uv_voltage_coil',
            '12x gtceu:zalloy_foil',
        ],
        ['gtceu:naquadated_soldering_alloy 1728', 'gtceu:akreyrium_pcb_graphite_nanoparticle_coolant 7500'],
        ['kubejs:asg_energy_modulator'],
        6000,
        144,
        144 * 1200,
        GTValues.VHA[GTValues.UHV],
        'kubejs:csg_energy_modulator'
    );

    researchBuilder(
        assline,
        'asg_chevron',
        [
            'gtceu:ancient_runicalium_frame',
            'gtceu:exquisite_akreyriadic_runixium_gem',
            '2x kubejs:asg_field_stabiliser',
            '2x kubejs:asg_computational_matrix',
            '8x gtceu:uhv_sensor',
            '48x kubejs:naquadic_netherite_fibers',
            '2x gtceu:uhv_electric_motor',
            '2x gtceu:long_ancient_runicalium_rod',
        ],
        ['gtceu:naquadated_soldering_alloy 3888', 'gtceu:utopian_akreyrium 3750'],
        ['kubejs:asg_chevron'],
        6000,
        144,
        144 * 1200,
        GTValues.VHA[GTValues.UHV],
        'kubejs:csg_chevron'
    );

    researchBuilder(
        assline,
        'asg_reinforced_plating',
        [
            'gtceu:neutronium_ultradense_plate',
            'gtceu:tritan_steel_ultradense_plate',
            'gtceu:zalloy_ultradense_plate',
            'gtceu:naquadria_ultradense_plate',
            '2x kubejs:csg_reinforced_plating',
            '2x gtceu:uhv_electric_piston',
            '1x #gtceu:circuits/uev',
            '18x gtceu:cerium_tritelluride_single_cable',
        ],
        [
            'gtceu:naquadated_soldering_alloy 1728',
            'gtceu:runic_convergence_infusion 2250',
            'gtceu:utopian_akreyrium 1750',
        ],
        ['kubejs:asg_reinforced_plating'],
        6000,
        144,
        144 * 1200,
        GTValues.VHA[GTValues.UHV],
        'kubejs:csg_reinforced_plating'
    );

    researchBuilder(
        assline,
        'asg_stellar_access_point',
        [
            'gtceu:stellarium_frame',
            '2x kubejs:asg_computational_matrix',
            '2x gtceu:uhv_sensor',
            'gtceu:ancient_runicalium_double_wire',
            'gtceu:polyimide_foil_ream',
            'gtceu:aerogel_foil_ream',
            'gtceu:neutronium_silicon_carbide_foil_ream',
            '2x gtceu:dense_neutronium_plate',
        ],
        ['gtceu:naquadated_soldering_alloy 1296', 'gtceu:polyether_ether_ketone 1152'],
        ['kubejs:asg_stellar_access_point'],
        6000,
        144,
        144 * 1200,
        GTValues.VHA[GTValues.UHV],
        'kubejs:csg_stellar_access_point'
    );

    researchBuilder(
        cpa,
        'abyss_fragment',
        [
            'gtceu:neutronium_frame',
            '16x gtceu:gravi_star',
            '12x gtceu:polyether_ether_ketone_foil',
            '6x gtceu:neutronium_tiny_fluid_pipe',
            '16x minecraft:echo_shard',
        ],
        ['gtceu:naquadated_soldering_alloy 1584', 'gtceu:utopian_akreyrium 1875'],
        ['kubejs:abyss_fragment'],
        6000,
        192,
        192 * 1200,
        GTValues.VHA[GTValues.UHV],
        'minecraft:echo_shard'
    );

    researchBuilder(
        cpa,
        'inferno_fragment',
        [
            'gtceu:neutronium_frame',
            '16x gtceu:gravi_star',
            '12x gtceu:polyether_ether_ketone_foil',
            '6x gtceu:neutronium_tiny_fluid_pipe',
            '16x minecraft:blaze_rod',
        ],
        ['gtceu:naquadated_soldering_alloy 1584', 'gtceu:utopian_akreyrium 1875'],
        ['kubejs:inferno_fragment'],
        6000,
        192,
        192 * 1200,
        GTValues.VHA[GTValues.UHV],
        'minecraft:blaze_rod'
    );

    researchBuilder(
        assline,
        'voidic_core',
        [
            'kubejs:quantum_core',
            '8x kubejs:abyss_fragment',
            '4x gtceu:uhv_field_generator',
            '12x kubejs:uhv_high_strength_panel',
        ],
        ['thermal:ender 50000', 'gtceu:neutronium 2304'],
        ['kubejs:voidic_core'],
        3000,
        192,
        192 * 1200,
        GTValues.VHA[GTValues.UHV],
        'kubejs:abyss_fragment'
    );

    researchBuilder(
        assline,
        'helish_core',
        [
            'kubejs:quantum_core',
            '8x kubejs:inferno_fragment',
            '4x gtceu:uhv_field_generator',
            '12x kubejs:uhv_high_strength_panel',
        ],
        ['gtceu:blaze 57600', 'gtceu:neutronium 2304'],
        ['kubejs:helish_core'],
        3000,
        192,
        192 * 1200,
        GTValues.VHA[GTValues.UHV],
        'kubejs:inferno_fragment'
    );

    pressureHeat(id('draconic_core'))
        .itemInputs('kubejs:voidic_core', 'kubejs:helish_core')
        .inputFluids('minecraft:lava 50000', 'gtceu:echo_r 7200')
        .itemOutputs('kubejs:draconic_core')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UEV]);

    vcr(id('asg_enscription_plate'))
        .itemInputs('2x kubejs:csg_enscription_plate', '16x gtceu:void_foil', '#gtceu:circuits/uev')
        .inputFluids('gtceu:ancient_runicalium 720', 'gtceu:utopian_akreyrium 2250')
        .itemOutputs('kubejs:asg_enscription_plate')
        .duration(4000)
        .EUt(GTValues.VHA[GTValues.UHV])
        .vacuumLevel(90);

    cut(id('asg_enscription_chip'))
        .itemInputs('kubejs:asg_enscription_plate')
        .inputFluids('gtceu:runic_convergence_infusion 5000')
        .itemOutputs('2x kubejs:asg_enscription_chip')
        .duration(3000)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UHV]);

    rotor(id('asg_stargate_rod_base'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('kubejs:activated_stargate_rod', '2x gtceu:ancient_runicalium_ring')
                .next()
                .itemInputs('gtceu:long_void_rod', 'gtceu:naquadria_wire_spool')
                .inputFluids('gtceu:runic_convergence_infusion 12500')
                .next()
                .itemInputs('kubejs:activated_stargate_rod', 'gtceu:americium_wire_spool')
                .inputFluids('gtceu:utopian_akreyrium 2500')
                .next()
                .itemInputs('gtceu:long_void_rod', 'gtceu:prismalium_wire_spool')
                .inputFluids('gtceu:runic_convergence_infusion 12500')
        )
        .itemOutputs('kubejs:asg_stargate_rod_base')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UEV]);

    rotor(id('infernally_reforged_stargate_rod'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('kubejs:asg_stargate_rod_base', 'kubejs:inferno_fragment')
                .next()
                .itemInputs(
                    'gtceu:neutronium_silicon_carbide_foil_ream',
                    'gtceu:stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:void_foil_ream'
                )
                .inputFluids('gtceu:tungsten_disulfide 10800')
                .next()
                .itemInputs(
                    'gtceu:neutronium_silicon_carbide_foil_ream',
                    'gtceu:stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:neutronium_foil_ream'
                )
                .inputFluids('gtceu:tungsten_disulfide 10800')
                .next()
                .itemInputs(
                    'gtceu:neutronium_silicon_carbide_foil_ream',
                    'gtceu:stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:void_foil_ream'
                )
                .inputFluids('gtceu:tungsten_disulfide 10800')
        )
        .itemOutputs('kubejs:infernally_reforged_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UEV]);

    rotor(id('abyssally_reforged_stargate_rod'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('kubejs:asg_stargate_rod_base', 'kubejs:abyss_fragment')
                .next()
                .itemInputs(
                    'gtceu:neutronium_silicon_carbide_foil_ream',
                    'gtceu:stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:void_foil_ream'
                )
                .inputFluids('gtceu:tungsten_disulfide 10800')
                .next()
                .itemInputs(
                    'gtceu:neutronium_silicon_carbide_foil_ream',
                    'gtceu:stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:neutronium_foil_ream'
                )
                .inputFluids('gtceu:tungsten_disulfide 10800')
                .next()
                .itemInputs(
                    'gtceu:neutronium_silicon_carbide_foil_ream',
                    'gtceu:stellarized_weapon_grade_naquadah_foil_ream',
                    'gtceu:void_foil_ream'
                )
                .inputFluids('gtceu:tungsten_disulfide 10800')
        )
        .itemOutputs('kubejs:abyssally_reforged_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UEV]);

    pressureHeat(id('awakened_inferno_stargate_rod'))
        .itemInputs('kubejs:infernally_reforged_stargate_rod')
        .inputFluids('gtceu:utopian_akreyrium 4250')
        .itemOutputs('kubejs:awakened_inferno_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UEV]);

    pressureHeat(id('awakened_abyss_stargate_rod'))
        .itemInputs('kubejs:abyssally_reforged_stargate_rod')
        .inputFluids('gtceu:utopian_akreyrium 4250')
        .itemOutputs('kubejs:awakened_abyss_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UEV]);

    stargateComponent('asg_ring')
        .layeredRecipe((layers) =>
            layers
                .itemInputs(
                    'gtceu:ancient_runicalium_frame',
                    '12x kubejs:awakened_inferno_stargate_rod',
                    '12x kubejs:awakened_abyss_stargate_rod'
                )
                .next()
                .itemInputs(
                    '4x kubejs:runic_reinforced_plating',
                    'kubejs:runic_stabilization_plating',
                    'kubejs:asg_reinforced_plating'
                )
                .next()
                .itemInputs(
                    '4x kubejs:runic_reinforced_plating',
                    'kubejs:runic_stabilization_plating',
                    'kubejs:asg_reinforced_plating'
                )
                .next()
                .itemInputs(
                    '4x kubejs:runic_reinforced_plating',
                    'kubejs:runic_stabilization_plating',
                    'kubejs:asg_reinforced_plating'
                )
                .next()
                .itemInputs(
                    '4x kubejs:runic_reinforced_plating',
                    'kubejs:runic_stabilization_plating',
                    'kubejs:asg_reinforced_plating'
                )
        )
        .inputFluids('gtceu:utopian_akreyrium 5000')
        .itemOutputs('kubejs:ancient_stargate_ring_block')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UEV]);

    stargateComponent('asg_chevron')
        .layeredRecipe((layers) =>
            layers
                .itemInputs(
                    'kubejs:ancient_stargate_ring_block',
                    'kubejs:asg_chevron',
                    'kubejs:asg_computational_matrix'
                )
                .next()
                .itemInputs(
                    'kubejs:asg_field_stabiliser',
                    'kubejs:asg_reinforced_plating',
                    '2x kubejs:awakened_inferno_stargate_rod'
                )
                .next()
                .itemInputs(
                    '4x kubejs:runic_transportation_plating',
                    '3x kubejs:runic_pathway_plating',
                    '2x kubejs:awakened_abyss_stargate_rod'
                )
                .next()
                .itemInputs(
                    'kubejs:asg_field_stabiliser',
                    'kubejs:asg_reinforced_plating',
                    '2x kubejs:awakened_inferno_stargate_rod'
                )
                .next()
                .itemInputs(
                    '4x kubejs:runic_transportation_plating',
                    '3x kubejs:runic_pathway_plating',
                    '2x kubejs:awakened_abyss_stargate_rod'
                )
        )
        .inputFluids('gtceu:utopian_akreyrium 3750')
        .itemOutputs('kubejs:ancient_stargate_chevron_block')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UEV]);

    stargateComponent('asg_base')
        .layeredRecipe((layers) =>
            layers
                .itemInputs(
                    'kubejs:ancient_stargate_ring_block',
                    'kubejs:asg_dimensional_supercomputer',
                    'kubejs:asg_computational_matrix'
                )
                .next()
                .itemInputs(
                    'kubejs:asg_stellar_access_point',
                    '2x kubejs:runic_stabilization_plating',
                    '3x kubejs:awakened_abyss_stargate_rod'
                )
                .next()
                .itemInputs(
                    '6x kubejs:runic_pathway_plating',
                    '2x kubejs:runic_transportation_plating',
                    '3x kubejs:awakened_inferno_stargate_rod'
                )
                .next()
                .itemInputs(
                    'kubejs:asg_stellar_access_point',
                    '2x kubejs:runic_reinforced_plating',
                    '3x kubejs:awakened_abyss_stargate_rod'
                )
                .next()
                .itemInputs(
                    '6x kubejs:runic_pathway_plating',
                    '2x kubejs:runic_transportation_plating',
                    '3x kubejs:awakened_inferno_stargate_rod'
                )
        )
        .inputFluids('gtceu:utopian_akreyrium 3750')
        .itemOutputs('kubejs:ancient_stargate_base_block')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.create
        .mechanical_crafting(
            `sgjourney:milky_way_stargate {BlockEntityTag:{LocalPointOfOrigin:1b}}`,
            [' CRCRC ', 'RR   RR', 'C     C', 'R     R', 'R     R', 'CR   RC', ' RCBCR '],
            {
                R: 'kubejs:ancient_stargate_ring_block',
                C: 'kubejs:ancient_stargate_chevron_block',
                B: 'kubejs:ancient_stargate_base_block',
            }
        )
        .id('start:shaped/asg');
});
