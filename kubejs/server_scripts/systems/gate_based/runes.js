ServerEvents.recipes((event) => {
    const id = global.id;

    /**
     * @param {string} output
     * @param {string} lens
     * @param {string} plate
     * @param {string} catalyst
     * @param {string} fluid
     * @param {number} EU
     * @param {number} duration
     */
    let rcasRecipe = (output, lens, plate, catalyst, fluid, EU, duration) => {
        let rcas = event.recipes.gtceu
            .runic_circuitry_assembling_station(id(output))
            .notConsumable(lens)
            .itemInputs('kubejs:' + plate, catalyst)
            .itemOutputs('kubejs:' + output)
            .duration(duration)
            .EUt(EU);

        if (fluid) {
            rcas.inputFluids(fluid);
        }
    };

    rcasRecipe(
        'proto_solarus_rune',
        'gtceu:yellow_glass_lens',
        'csg_enscription_plate',
        '64x gtceu:indium_gallium_phosphide_dust',
        'gtceu:nether_star_concentrate 576',
        GTValues.VHA[ZPM],
        600
    );
    rcasRecipe(
        'proto_energized_rune',
        'gtceu:ruby_lens',
        'csg_enscription_plate',
        '64x gtceu:indium_gallium_phosphide_dust',
        'gtceu:nether_star_concentrate 576',
        GTValues.VHA[ZPM],
        600
    );
    rcasRecipe(
        'proto_lunarus_rune',
        'gtceu:sapphire_lens',
        'csg_enscription_plate',
        '64x gtceu:indium_gallium_phosphide_dust',
        'gtceu:nether_star_concentrate 576',
        GTValues.VHA[ZPM],
        600
    );
    rcasRecipe(
        'csg_dpu',
        'gtceu:nether_star_lens',
        'csg_enscription_chip',
        '8x gtceu:indium_gallium_phosphide_dust',
        'gtceu:nether_star_concentrate 72',
        GTValues.VHA[ZPM],
        600
    );

    rcasRecipe(
        'runic_reinforced_plating',
        'gtceu:brown_glass_lens',
        'asg_enscription_plate',
        '64x gtceu:silicon_carbide_over_bismuth_tritelluride_dust',
        'gtceu:runic_convergence_infusion 5000',
        GTValues.VHA[UEV],
        600
    );
    rcasRecipe(
        'runic_pathway_plating',
        'gtceu:amethyst_lens',
        'asg_enscription_plate',
        '64x gtceu:silicon_carbide_over_bismuth_tritelluride_dust',
        'gtceu:runic_convergence_infusion 5000',
        GTValues.VHA[UEV],
        600
    );
    rcasRecipe(
        'runic_stabilization_plating',
        'gtceu:emerald_lens',
        'asg_enscription_plate',
        '64x gtceu:silicon_carbide_over_bismuth_tritelluride_dust',
        'gtceu:runic_convergence_infusion 5000',
        GTValues.VHA[UEV],
        600
    );
    rcasRecipe(
        'runic_transportation_plating',
        'gtceu:certus_quartz_lens',
        'asg_enscription_plate',
        '64x gtceu:silicon_carbide_over_bismuth_tritelluride_dust',
        'gtceu:runic_convergence_infusion 5000',
        GTValues.VHA[UEV],
        600
    );
    rcasRecipe(
        'asg_dpu',
        'gtceu:orange_glass_lens',
        'asg_enscription_chip',
        '8x gtceu:silicon_carbide_over_bismuth_tritelluride_dust',
        'gtceu:runic_convergence_infusion 750',
        GTValues.VHA[UEV],
        600
    );

    rcasRecipe(
        'transcension_engraved_undina_sigil',
        'gtceu:echo_shard_lens',
        'dsg_enscription_plate',
        'kubejs:undina_singularity',
        'gtceu:draconic_stabilization_mixture 6250',
        GTValues.VHA[UXV],
        600
    );
    rcasRecipe(
        'transcension_engraved_sylvestris_sigil',
        'gtceu:echo_shard_lens',
        'dsg_enscription_plate',
        'kubejs:sylvestris_singularity',
        'gtceu:draconic_stabilization_mixture 6250',
        GTValues.VHA[UXV],
        600
    );
    rcasRecipe(
        'transcension_engraved_gnomus_sigil',
        'gtceu:echo_shard_lens',
        'dsg_enscription_plate',
        'kubejs:gnomus_singularity',
        'gtceu:draconic_stabilization_mixture 6250',
        GTValues.VHA[UXV],
        600
    );
    rcasRecipe(
        'transcension_engraved_vulcanus_sigil',
        'gtceu:echo_shard_lens',
        'dsg_enscription_plate',
        'kubejs:vulcanus_singularity',
        'gtceu:draconic_stabilization_mixture 6250',
        GTValues.VHA[UXV],
        600
    );
    rcasRecipe(
        'transcension_engraved_illustris_sigil',
        'gtceu:echo_shard_lens',
        'dsg_enscription_plate',
        'kubejs:illustris_singularity',
        'gtceu:draconic_stabilization_mixture 6250',
        GTValues.VHA[UXV],
        600
    );
    rcasRecipe(
        'transcension_engraved_tenebrosus_sigil',
        'gtceu:echo_shard_lens',
        'dsg_enscription_plate',
        'kubejs:tenebrosus_singularity',
        'gtceu:draconic_stabilization_mixture 6250',
        GTValues.VHA[UXV],
        600
    );

    event.recipes.gtceu
        .riftion_injector(id('dsg_dpu'))
        .itemInputs('kubejs:dsg_enscription_chip', '16x kubejs:wild_riftion')
        .itemOutputs('kubejs:dsg_dpu')
        .genericStartEU(12500000000) //consumes 12.5GEU to start the recipe
        .duration(100)
        .EUtVHA(UXV);

    //     /*
    //     ** Runic Plating Engraving
    //     ** ========================
    //     ** Runic Convergence Infusion Mechanic
    //     ** You can set amount of infusion to consume via circuit
    //     ** Higher consumption, lower chance of consuming the singularity, higher energy usage
    //     */

    //     [
    //         { singularity: 'nebular', plate: 'enriched_naquadah', plating: 'runic_engraved_plating', tier: 2, duration_multiplier: 1.6 },
    //         { singularity: 'zenith', plate: 'naquadah', plating: 'runic_pathway_engraved_plating', tier: 1, duration_multiplier: 1.3 },
    //         { singularity: 'hyperion', plate: 'naquadah_alloy', plating: 'runic_stabilization_plating', tier: 2.5, duration_multiplier: 2.1 },
    //         { singularity: 'spectral', plate: 'naquadria', plating: 'runic_energized_plating', tier: 3, duration_multiplier: 1.4 },
    //         { singularity: 'astral', plate: 'trinaquadalloy', plating: 'runic_transportation_engraved_plating', tier: 3, duration_multiplier: 1.8 },
    //     ].forEach(foo => {
    //         const { singularity, plate, plating, tier, duration_multiplier } = foo;

    //         for (let i = 1; i <= 4; i++) {
    //             // Each option adds 25 seconds
    //             let duration = 2000 * duration_multiplier + (i - 1) * 200;
    //             // Each option adds 20% more energy consumption
    //             let eut = GTValues.V[GTValues.LuV + Math.floor(tier)] * .45
    //             // Each option decreases the chance of consuming the singularity by 25%
    //             let chance = 10000 - (i - 1) * 2500;
    //             // Each option increases the infusion consumption by 1 mB
    //             let consumption = i * i - 2*i + 2; // [1,2,3,4] => [1,2,5,10]

    //             event.recipes.gtceu.runic_circuitry_assembling_station(id(`${singularity}_${plating}_option_${i}`))
    //                 .itemInputs(`gtceu:dense_${plate}_plate`)
    //                 .chancedInput(`kubejs:singularity_${singularity}`, chance, 0)
    //                 .perTick(true)
    //                 .inputFluids(`gtceu:runic_convergence_infusion ${consumption}`)
    //                 .perTick(false)
    //                 .itemOutputs(`kubejs:${plating}`)
    //                 // .blastFurnaceTemp(10500 + (tier >= 2.5) ? 1000 : 0)  // Has no Use
    //                 .duration(duration)
    //                 .EUt(eut)
    //                 .circuit(i);
    //         }

    //     });

    //     event.recipes.gtceu.mixer(id('runic_laser_source_base_dust'))
    //         .itemInputs('2x gtceu:naquadic_netherite_dust', '10x gtceu:tritanium_dust', '5x gtceu:trinium_dust')
    //         .itemOutputs('17x gtceu:runic_laser_source_base_dust')
    //         .duration(12000)
    //         .EUt(GTValues.VHA[GTValues.UV]);

    // === Runic Tablet ===

    event.recipes.gtceu
        .assembler(id('runic_tablet'))
        .itemInputs(
            'kubejs:runic_tablet_1',
            'kubejs:runic_tablet_2',
            'kubejs:runic_tablet_3',
            'kubejs:runic_tablet_4',
            'kubejs:runic_tablet_5',
            'kubejs:runic_tablet_6'
        )
        .inputFluids('gtceu:naquadria 21600')
        .itemOutputs('kubejs:runic_tablet_complete')
        .duration(400)
        .EUtVHA(UHV)
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    for (let i = 1; i <= 6; i++) {
        let o = i === 6 ? 1 : i + 1;
        event.recipes.gtceu
            .scanner(id(`runic_tablet_${i}_to_${o}`))
            .itemInputs('16x gtceu:ancient_runicalium_foil', `1x kubejs:runic_tablet_${i}`) //Gives more control over tablet type (reduced exploration rng)
            .inputFluids('gtceu:naquadria 1080')
            .itemOutputs(`kubejs:runic_tablet_${o}`)
            .duration(600)
            .EUtVHA(UV);
    }

    //     // === Rune Infusion ===

    //     const runeCombining = (type) => {
    //     event.recipes.gtceu.runic_inscribe_manipulate(id(`runic_energized_${type}_plating`))
    //         .itemInputs('3x kubejs:runic_engraved_plating', 'kubejs:runic_energized_plating', `kubejs:runic_${type}_engraved_plating`)
    //         .perTick(true)
    //         .inputFluids('gtceu:intangibility_infusion 1', 'gtceu:paradoxicity_infusion 1', 'gtceu:causality_infusion 1')
    //         .perTick(false)
    //         .itemOutputs(`kubejs:runic_energized_${type}_plating`)
    //         .duration(6000)
    //         .EUt(GTValues.VA[GTValues.UHV]);
    //     }
    //     runeCombining('transportation');
    //     runeCombining('pathway');

    //     event.recipes.gtceu.runic_inscribe_manipulate(id('runic_pathway_casing'))
    //         .itemInputs('gtceu:void_frame', '12x gtceu:dense_naquadah_plate', '6x kubejs:runic_pathway_engraved_plating')
    //         .inputFluids('gtceu:naquadria 2592', 'gtceu:utopian_akreyrium 864')
    //         .itemOutputs('kubejs:runic_pathway_casing')
    //         .duration(4000)
    //         .EUt(GTValues.VA[GTValues.UHV]);

    //     event.recipes.gtceu.runic_inscribe_manipulate(id('runic_stabilization_casing'))
    //         .itemInputs('gtceu:void_frame', '12x gtceu:dense_naquadah_alloy_plate', '6x kubejs:runic_stabilization_plating')
    //         .inputFluids('gtceu:naquadria 2592', 'gtceu:utopian_akreyrium 864')
    //         .itemOutputs('kubejs:runic_stabilization_casing')
    //         .duration(4000)
    //         .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu
        .assembler(id('blank_runic_casing'))
        .itemInputs('gtceu:atomic_casing', '6x gtceu:ancient_runicalium_foil')
        .inputFluids('gtceu:void 576')
        .itemOutputs('kubejs:blank_runic_casing')
        .duration(2000)
        .EUtVA(UHV);

    ['pathway', 'transportation', 'stabilization'].forEach((rune) => {
        event.recipes.gtceu
            .runic_inscribe_manipulate(id(`runic_${rune}_casing`))
            .itemInputs('kubejs:blank_runic_casing', `6x kubejs:runic_${rune}_plating`)
            .inputFluids('gtceu:runic_convergence_infusion')
            .itemOutputs(`kubejs:runic_${rune}_casing`)
            .duration(4000)
            .EUtVA(UHV);
    });

    // === Controller ===

    event.recipes.gtceu
        .assembly_line(id('runic_inscribe_manipulate'))
        .itemInputs(
            'gtceu:void_frame',
            '8x gtceu:uhv_electric_piston',
            '16x gtceu:uhv_emitter',
            '2x gtceu:uhv_fluid_regulator',
            '4x #gtceu:circuits/uev',
            '8x gtceu:uhv_field_generator',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip'
        )
        .inputFluids('gtceu:hsse 25920', 'gtceu:hssg 25920', 'gtceu:hsss 25920')
        .itemOutputs('gtceu:runic_inscribe_manipulate')
        .duration(5400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('kubejs:runic_tablet_complete')).EUt(GTValues.VHA[UV]).CWUt(176)
        )
        .EUtVHA(UHV);
});
