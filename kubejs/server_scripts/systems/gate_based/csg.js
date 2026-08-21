ServerEvents.recipes((event) => {
    const id = global.id;

    const cpa = 'component_part_assembly';
    const assline = 'assembly_line';

    // Classic Gate Components
    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)

    researchBuilder(
        cpa,
        'csg_chevron',
        [
            '2x gtceu:long_prismalium_rod',
            'gtceu:exquisite_naquadic_netherite_gem',
            'kubejs:csg_field_stabiliser',
            'kubejs:csg_computational_matrix',
            '4x gtceu:zpm_sensor',
            '64x gtceu:fine_borosilicate_glass_wire',
        ],
        ['gtceu:indium_tin_lead_cadmium_soldering_alloy 864'],
        ['kubejs:csg_chevron'],
        6000,
        24,
        24 * 600,
        GTValues.VHA[ZPM],
        'gtceu:exquisite_naquadic_netherite_gem'
    );

    researchBuilder(
        cpa,
        'csg_reinforced_plating',
        [
            'gtceu:dense_trinaquadalloy_plate',
            'gtceu:zpm_electric_piston',
            'gtceu:dense_naquadah_alloy_plate',
            '1x #gtceu:circuits/uv',
            'gtceu:dense_enriched_naquadah_plate',
            '8x gtceu:yttrium_barium_cuprate_single_cable',
        ],
        ['gtceu:naquadria 288', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 864'],
        ['kubejs:csg_reinforced_plating'],
        6000,
        24,
        24 * 600,
        GTValues.VHA[ZPM],
        'gtceu:dense_trinaquadalloy_plate'
    );

    researchBuilder(
        cpa,
        'csg_stellar_access_point',
        [
            'gtceu:double_naquadah_plate',
            'kubejs:csg_computational_matrix',
            '4x gtceu:prismalium_double_wire',
            'gtceu:polycarbonate_foil_ream',
            'gtceu:polyphenylene_sulfide_foil_ream',
            'gtceu:polyvinyl_chloride_foil_ream',
        ],
        ['gtceu:indium_tin_lead_cadmium_soldering_alloy 864', 'gtceu:polybenzimidazole 1296'],
        ['kubejs:csg_stellar_access_point'],
        6000,
        24,
        24 * 600,
        GTValues.VHA[ZPM],
        'gtceu:yttrium_barium_cuprate_double_cable'
    );

    researchBuilder(
        cpa,
        'csg_energy_modulator',
        [
            'gtceu:trinaquadalloy_frame',
            '1x gtceu:zpm_emitter',
            '4x gtceu:prismalium_foil',
            'gtceu:energy_module',
            '4x kubejs:advanced_neutron_reflector',
            '4x gtceu:naquadah_alloy_foil',
        ],
        ['gtceu:pcb_coolant 250000', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 864'],
        ['kubejs:csg_energy_modulator'],
        6000,
        24,
        24 * 600,
        GTValues.VHA[ZPM],
        'gtceu:prismalium_foil'
    );

    researchBuilder(
        cpa,
        'csg_field_stabiliser',
        [
            '2x gtceu:dense_enriched_naquadah_plate',
            '4x gtceu:zpm_field_generator',
            'kubejs:csg_energy_modulator',
            '16x gtceu:fine_lumium_wire',
            '16x gtceu:fine_twinite_wire',
            '16x gtceu:fine_signalum_wire',
        ],
        ['gtceu:indium_tin_lead_cadmium_soldering_alloy 1296'],
        ['kubejs:csg_field_stabiliser'],
        6000,
        24,
        24 * 600,
        GTValues.VHA[ZPM],
        'gtceu:fine_trinaquadalloy_wire'
    );

    researchBuilder(
        cpa,
        'csg_stellar_dialer',
        [
            'gtceu:dense_enriched_naquadah_plate',
            'gtceu:computer_monitor_cover',
            'kubejs:csg_computational_matrix',
            'gtceu:dragonsteel_bolt',
        ],
        ['gtceu:indium_tin_lead_cadmium_soldering_alloy 864'],
        ['kubejs:csg_stellar_dialer'],
        6000,
        24,
        24 * 600,
        GTValues.VHA[ZPM],
        'gtceu:computer_monitor_cover'
    );

    researchBuilder(
        assline,
        'quantum_core',
        [
            'gtceu:weapon_grade_naquadah_frame',
            '4x kubejs:csg_energy_modulator',
            '16x gtceu:quantum_star',
            '2x gtceu:zpm_field_generator',
            '6x gtceu:trinium_spring',
            '4x gtceu:zpm_electric_pump',
            '16x gtceu:fine_prismalium_wire',
            '16x gtceu:osthendah_foil',
            '8x gtceu:naquadah_alloy_plate',
            '4x gtceu:osmiridium_bolt',
        ],
        ['gtceu:nether_star_concentrate 864', 'gtceu:polybenzimidazole 1296'],
        ['kubejs:quantum_core'],
        6000,
        24,
        24 * 600,
        GTValues.VHA[ZPM],
        'gtceu:quantum_star'
    );

    researchBuilder(
        assline,
        'csg_dimensional_supercomputer',
        [
            '3x gtceu:trinaquadalloy_frame',
            '8x kubejs:csg_computational_matrix',
            'kubejs:quantum_core',
            '64x #gtceu:circuits/uv',
            '8x gtceu:prismalium_foil_ream',
            '24x gtceu:enriched_naquadah_small_fluid_pipe',
            '36x gtceu:silicone_rubber_ring',
            '48x gtceu:polycarbonate_tiny_fluid_pipe',
        ],
        ['gtceu:polybenzimidazole 3888', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 2592', 'gtceu:naquadria 576'],
        ['kubejs:csg_dimensional_supercomputer'],
        6000,
        24,
        24 * 600,
        GTValues.VHA[ZPM],
        'gtceu:crystal_processor_mainframe'
    );

    event.recipes.gtceu
        .large_chemical_reactor(id('csg_enscription_plate'))
        .itemInputs('gtceu:naquadah_wafer', '48x gtceu:aerogel_foil', '1x #gtceu:circuits/uv')
        .inputFluids('gtceu:europium 1152', 'gtceu:naquadria 432')
        .itemOutputs('kubejs:csg_enscription_plate')
        .duration(4000)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUtVHA(ZPM);

    event.recipes.gtceu
        .cutter(id('csg_enscription_chip'))
        .itemInputs('kubejs:csg_enscription_plate')
        .inputFluids('gtceu:nether_star_concentrate 432')
        .itemOutputs('2x kubejs:csg_enscription_chip')
        .duration(3000)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUtVHA(ZPM);

    event.recipes.gtceu
        .circuit_assembler(id('csg_computational_matrix'))
        .itemInputs(
            'gtceu:multilayer_fiber_reinforced_printed_circuit_board',
            '16x gtceu:fine_trinaquadalloy_wire',
            '12x kubejs:csg_dpu',
            '6x gtceu:advanced_soc',
            '8x gtceu:prismalium_bolt',
            '48x gtceu:uhpic_chip'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 15552')
        .itemOutputs('kubejs:csg_computational_matrix')
        .duration(6000)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUtVHA(ZPM);

    event.recipes.gtceu
        .large_rotor_machine(id('csg_stargate_rod_base'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('2x gtceu:prismalium_ring')
                .next()
                .itemInputs('gtceu:europium_wire_spool')
                .inputFluids('gtceu:naquadria 1296')
                .next()
                .itemInputs('gtceu:trinaquadalloy_wire_spool')
                .inputFluids('gtceu:naquadria 1296')
        )
        .itemInputs('gtceu:long_pure_netherite_rod')
        .itemOutputs('kubejs:csg_stargate_rod_base')
        .duration(800)
        .EUtVHA(UV);

    event.recipes.gtceu
        .large_rotor_machine(id('raw_stargate_rod'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('kubejs:csg_stargate_rod_base', '2x gtceu:quantum_star')
                .next()
                .itemInputs(
                    'gtceu:naquadah_alloy_foil_ream',
                    'gtceu:weapon_grade_naquadah_foil_ream',
                    'gtceu:pure_netherite_foil_ream'
                )
                .inputFluids('gtceu:lubricant 25000')
                .next()
                .itemInputs(
                    'gtceu:netherite_foil_ream',
                    'gtceu:nether_star_foil_ream',
                    'gtceu:trinaquadalloy_foil_ream'
                )
                .inputFluids('gtceu:lubricant 25000')
                .next()
                .itemInputs(
                    'gtceu:naquadah_alloy_foil_ream',
                    'gtceu:weapon_grade_naquadah_foil_ream',
                    'gtceu:pure_netherite_foil_ream'
                )
                .inputFluids('gtceu:lubricant 25000')
        )
        .itemOutputs('kubejs:raw_stargate_rod')
        .duration(800)
        .EUtVHA(UV);

    event.recipes.gtceu
        .heat_chamber(id('activated_stargate_rod'))
        .itemInputs('kubejs:raw_stargate_rod')
        .inputFluids('gtceu:nether_star_concentrate 720')
        .itemOutputs('kubejs:activated_stargate_rod')
        .duration(800)
        .EUtVHA(UV);

    global.withModsLoaded('sgjourney', () => {
        researchBuilder(
            assline,
            'crystal_interface',
            [
                'gtceu:trinaquadalloy_frame',
                '16x gtceu:prismalium_hex_wire',
                '6x kubejs:csg_reinforced_plating',
                'kubejs:csg_stellar_access_point',
                'kubejs:csg_energy_modulator',
                '64x gtceu:fine_dragonsteel_wire',
                '64x gtceu:fine_dragonsteel_wire',
            ],
            ['gtceu:indium_tin_lead_cadmium_soldering_alloy 3888', 'gtceu:polycarbonate 2592'],
            ['sgjourney:crystal_interface'],
            6000,
            24,
            24 * 600,
            GTValues.VHA[ZPM],
            'start_core:zpm_64a_energy_converter'
        );

        event.recipes.gtceu
            .assembler(id('classic_dhd'))
            .itemInputs(
                'gtceu:atomic_casing',
                'kubejs:csg_stellar_dialer',
                '12x gtceu:dragonsteel_foil',
                '12x kubejs:proto_solarus_rune',
                '14x kubejs:proto_energized_rune',
                '12x kubejs:proto_lunarus_rune'
            )
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1296')
            .itemOutputs('sgjourney:classic_dhd')
            .duration(6000)
            .EUtVHA(ZPM);

        event.recipes.gtceu
            .stargate_component_assembly('csg_ring')
            .layeredRecipe((layers) =>
                layers
                    .itemInputs('gtceu:prismalium_frame', '16x kubejs:activated_stargate_rod')
                    .next()
                    .itemInputs('2x kubejs:proto_solarus_rune', 'kubejs:csg_reinforced_plating')
                    .next()
                    .itemInputs('2x kubejs:proto_lunarus_rune', 'kubejs:csg_reinforced_plating')
                    .next()
                    .itemInputs('2x kubejs:proto_energized_rune', 'kubejs:csg_reinforced_plating')
            )
            .inputFluids('gtceu:naquadria 1728')
            .itemOutputs('sgjourney:classic_stargate_ring_block')
            .duration(1200)
            .EUtVHA(UV);

        event.recipes.gtceu
            .stargate_component_assembly('csg_chevron')
            .layeredRecipe((layers) =>
                layers
                    .itemInputs(
                        'sgjourney:classic_stargate_ring_block',
                        'kubejs:csg_chevron',
                        '6x kubejs:activated_stargate_rod'
                    )
                    .next()
                    .itemInputs(
                        'kubejs:csg_field_stabiliser',
                        'kubejs:csg_reinforced_plating',
                        '2x kubejs:activated_stargate_rod'
                    )
                    .next()
                    .itemInputs(
                        'kubejs:proto_solarus_rune',
                        '3x kubejs:proto_energized_rune',
                        'kubejs:proto_lunarus_rune'
                    )
                    .next()
                    .itemInputs(
                        'kubejs:csg_field_stabiliser',
                        'kubejs:csg_reinforced_plating',
                        '2x kubejs:activated_stargate_rod'
                    )
            )
            .inputFluids('gtceu:naquadria 1152')
            .itemOutputs('sgjourney:classic_stargate_chevron_block')
            .duration(1200)
            .EUtVHA(UV);

        event.recipes.gtceu
            .stargate_component_assembly('csg_base')
            .layeredRecipe((layers) =>
                layers
                    .itemInputs(
                        'sgjourney:classic_stargate_ring_block',
                        'kubejs:csg_dimensional_supercomputer',
                        '6x kubejs:activated_stargate_rod'
                    )
                    .next()
                    .itemInputs(
                        'kubejs:csg_stellar_access_point',
                        'kubejs:csg_reinforced_plating',
                        '2x kubejs:activated_stargate_rod'
                    )
                    .next()
                    .itemInputs(
                        '6x kubejs:proto_solarus_rune',
                        '4x kubejs:proto_energized_rune',
                        '6x kubejs:proto_lunarus_rune'
                    )
                    .next()
                    .itemInputs(
                        'kubejs:csg_stellar_access_point',
                        'kubejs:csg_reinforced_plating',
                        '2x kubejs:activated_stargate_rod'
                    )
            )
            .inputFluids('gtceu:naquadria 1152')
            .itemOutputs('sgjourney:classic_stargate_base_block')
            .duration(1200)
            .EUtVHA(UV);

        global.withModsLoaded(['sgjourney', 'create'], () => {
            event.recipes.create
                .mechanical_crafting(
                    'sgjourney:classic_stargate {BlockEntityTag:{LocalPointOfOrigin:1b}}',
                    [' CRCRC ', 'RR   RR', 'C     C', 'R     R', 'R     R', 'CR   RC', ' RCBCR '],
                    {
                        R: 'sgjourney:classic_stargate_ring_block',
                        C: 'sgjourney:classic_stargate_chevron_block',
                        B: 'sgjourney:classic_stargate_base_block',
                    }
                )
                .id('start:shaped/csg');
        });
    });
});
