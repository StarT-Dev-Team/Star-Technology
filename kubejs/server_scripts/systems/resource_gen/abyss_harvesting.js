ServerEvents.recipes((event) => {
    const id = global.id;

    // Abyss Harvester Controller + Misc

    event.recipes.gtceu
        .assembly_line(id('abyssal_harvester'))
        .itemInputs(
            'kubejs:draneko_casing',
            '12x gtceu:uev_field_generator',
            '2x gtceu:uev_emitter',
            '2x gtceu:uev_sensor',
            '8x gtceu:uev_electric_pump',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '48x kubejs:uepic_chip',
            '64x gtceu:void_foil',
            '64x gtceu:void_foil'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 57600',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfonate 21600',
            'gtceu:dragon_breath 500'
        )
        .itemOutputs('start_core:abyssal_harvester')
        .duration(2400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:uev_gas_collector')).EUt(GTValues.VA[UEV]).CWUt(216)
        )
        .EUtVA(UIV);

    // event.recipes.gtceu.draco_infusion(id('draneko_casing'))
    //     .itemInputs('gtceu:nyanium_frame', '2x gtceu:double_isovol_plate', 'gtceu:double_nyanium_plate', '2x kubejs:draconic_scale_cells',
    //         '2x kubejs:draconic_scale_cells', 'gtceu:double_nyanium_plate', '2x gtceu:double_isovol_plate')
    //     .inputFluids('gtceu:dragon_breath 4000')
    //     .itemOutputs('2x kubejs:draneko_casing')
    //     .duration(400)
    //     .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .assembler(id('mythrolic_drill_casing'))
        .itemInputs(
            'gtceu:nyanium_frame',
            'gtceu:uhv_emitter',
            '6x gtceu:double_mythrolic_alloy_plate',
            '2x gtceu:mythrolic_alloy_gear',
            '4x gtceu:small_mythrolic_alloy_gear'
        )
        .itemOutputs('2x kubejs:abyssal_drill_1')
        .duration(250)
        .EUtVHA(UEV)
        .circuit(6);

    event.recipes.gtceu
        .assembler(id('starium_drill_casing'))
        .itemInputs(
            'gtceu:nyanium_frame',
            'gtceu:uhv_sensor',
            '6x gtceu:double_starium_alloy_plate',
            '2x gtceu:starium_alloy_gear',
            '4x gtceu:small_starium_alloy_gear'
        )
        .itemOutputs('2x kubejs:abyssal_drill_2')
        .duration(250)
        .EUtVHA(UEV)
        .circuit(6);

    // === //

    event.recipes.gtceu
        .assembler(id('voidic_reinforced_mesh'))
        .itemInputs('1x kubejs:ancient_netherite_reinforced_mesh', '4x gtceu:void_rod', '1x gtceu:void_ingot')
        .inputFluids('gtceu:pure_netherite 576')
        .itemOutputs('1x kubejs:voidic_reinforced_mesh')
        .duration(100)
        .EUtVHA(UEV);

    // Abyss Harvesting

    event.recipes.gtceu
        .abyssal_harvester(id('undersaturated'))
        .chancedInput('kubejs:saturation_core_1', 200, -10)
        .inputFluids('gtceu:dragon_breath 10')
        .outputFluids(
            'gtceu:low_saturation_voidic_excression 70',
            'gtceu:moderate_saturation_voidic_excression 20',
            'gtceu:high_saturation_voidic_excression 10'
        )
        .addData('min_saturation', 10)
        .addData('max_saturation', 750)
        .duration(920)
        .dimension('minecraft:the_end')
        .EUtVA(UIV);

    event.recipes.gtceu
        .abyssal_harvester(id('low_saturation_voidic_excression'))
        .chancedInput('kubejs:saturation_core_1', 15, -1)
        .inputFluids('gtceu:low_saturation_voidic_excression 10')
        .outputFluids(
            'gtceu:low_saturation_voidic_excression 7000',
            'gtceu:moderate_saturation_voidic_excression 2000',
            'gtceu:high_saturation_voidic_excression 1000'
        )
        .addData('min_saturation', 500)
        .addData('max_saturation', 4000)
        .duration(920)
        .dimension('minecraft:the_end')
        .EUtVA(UIV);

    event.recipes.gtceu
        .abyssal_harvester(id('moderate_saturation_voidic_excression'))
        .chancedInput('kubejs:saturation_core_2', 15, -1)
        .inputFluids('gtceu:moderate_saturation_voidic_excression 10')
        .outputFluids(
            'gtceu:low_saturation_voidic_excression 2000',
            'gtceu:moderate_saturation_voidic_excression 6000',
            'gtceu:high_saturation_voidic_excression 2000'
        )
        .addData('min_saturation', 3500)
        .addData('max_saturation', 7000)
        .duration(920)
        .dimension('minecraft:the_end')
        .EUtVA(UIV);

    event.recipes.gtceu
        .abyssal_harvester(id('high_saturation_voidic_excression'))
        .chancedInput('kubejs:saturation_core_3', 15, -1)
        .inputFluids('gtceu:high_saturation_voidic_excression 10')
        .outputFluids(
            'gtceu:low_saturation_voidic_excression 1000',
            'gtceu:moderate_saturation_voidic_excression 2000',
            'gtceu:high_saturation_voidic_excression 7000'
        )
        .addData('min_saturation', 6500)
        .addData('max_saturation', 10000)
        .duration(920)
        .dimension('minecraft:the_end')
        .EUtVA(UIV);

    event.recipes.gtceu
        .abyssal_harvester(id('desaturation'))
        .itemInputs('kubejs:void_saturation_sponge')
        .outputFluids('gtceu:echo_r 18000', 'gtceu:voidic_waste_residue 100')
        .addData('min_saturation', 1000)
        .addData('max_saturation', 12000)
        .duration(200)
        .dimension('minecraft:the_end')
        .EUtVA(UIV);

    // Processing Line

    /**
     * @param {string} type
     * @param {number} quantityBuckets
     * @param {string[]} outputs
     */
    const entropyVoid = (type, quantityBuckets, outputs) => {
        event.recipes.gtceu
            .cyclonic_sifter(id(`${type}_saturation_voidic_excression`))
            .inputFluids(`gtceu:${type}_saturation_voidic_excression ${quantityBuckets * 1000}`)
            .chancedInput('1x kubejs:voidic_reinforced_mesh', 250, -50)
            .itemOutputs('gtceu:tiny_echo_shard_dust')
            .outputFluids(outputs)
            .duration(quantityBuckets * 6)
            .EUtVHA(UIV);
    };
    entropyVoid('high', 50, ['gtceu:vibrant_voidic_slurry 18500']);
    entropyVoid('moderate', 50, ['gtceu:tempered_voidic_slurry 18500']);
    entropyVoid('low', 50, ['gtceu:lethargic_voidic_slurry 18500']);

    /**
     * @param {string} slurryType
     * @param {string} state1
     * @param {string} state2
     */
    const quantumDecomp = (slurryType, state1, state2) => {
        event.recipes.gtceu
            .manifold_centrifuge(id(`${slurryType}_voidic_slurry`))
            .inputFluids(`gtceu:${slurryType}_voidic_slurry 1000`)
            .outputFluids(`gtceu:${state1}_state_void_sludge 500`, `gtceu:${state2}_state_void_sludge 500`)
            .duration(125)
            .EUtV(UEV);
    };
    quantumDecomp('vibrant', 'gamma', 'zeta');
    quantumDecomp('tempered', 'beta', 'epsilon');
    quantumDecomp('lethargic', 'alpha', 'delta');

    /**
     * @param {string} state
     * @param {number} time
     */
    const voidState = (state, time) => {
        event.recipes.gtceu
            .centrifuge(id(`${state}_sludge_to_residue`))
            .inputFluids(`gtceu:${state}_state_void_sludge 1000`)
            .outputFluids(`gtceu:${state}_state_void_residue 750`, 'gtceu:voidic_waste_residue 250')
            .duration(time)
            .EUtVA(UHV);
    };
    voidState('alpha', 380); // Alpha Last 38 Days
    voidState('beta', 304); // Beta Last 304 Days
    voidState('gamma', 570); // Gamma Last 57 Days
    voidState('delta', 660); // Delta Last 66 Days
    voidState('epsilon', 890); // Epsilon Last 89 Days
    voidState('zeta', 850); // Zeta Last 85 Days

    event.recipes.gtceu
        .injection_mixer(id('order_centric_void'))
        .inputFluids(
            'gtceu:alpha_state_void_residue 1000',
            'gtceu:beta_state_void_residue 1000',
            'gtceu:gamma_state_void_residue 1000'
        )
        .outputFluids('gtceu:order_centric_void 2400')
        .duration(160)
        .EUtVHA(UIV);

    event.recipes.gtceu
        .injection_mixer(id('chaos_centric_void'))
        .inputFluids(
            'gtceu:delta_state_void_residue 1000',
            'gtceu:epsilon_state_void_residue 1000',
            'gtceu:zeta_state_void_residue 1000'
        )
        .outputFluids('gtceu:chaos_centric_void 2400')
        .duration(160)
        .EUtVHA(UIV);

    event.recipes.gtceu
        .manifold_centrifuge(id('voidic_waste_residue'))
        .inputFluids('gtceu:voidic_waste_residue 1000')
        .itemOutputs('5x gtceu:small_rhenium_dust', '2x gtceu:tiny_echo_shard_dust')
        .outputFluids('gtceu:naquadria_waste 6250', 'gtceu:molten_ore_mixture 5000')
        .duration(480)
        .EUtVHA(UIV);

    // Voidic Metals

    /**
     * @param {string} Material
     * @param {string[]} inputs
     * @param {string} VoidType
     * @param {number} PerSeconds
     */
    const voidicMetal = (Material, inputs, VoidType, PerSeconds) => {
        event.recipes.gtceu
            .draco_infusion(id(`${Material}_dust`))
            .itemInputs(inputs)
            .inputFluids(`gtceu:${VoidType}_centric_void 1000`)
            .itemOutputs(`7x gtceu:${Material}_dust`)
            .duration(PerSeconds * 7 * 20)
            .EUtVHA(UEV);

        event.replaceInput(
            { id: `gtceu:electric_blast_furnace/blast_${Material}_gas` },
            Fluid.of('gtceu:krypton 10'),
            Fluid.of('gtceu:xenon 10')
        );
    };

    voidicMetal(
        'rhexis',
        [
            'gtceu:red_alloy_ingot',
            'gtceu:pure_netherite_ingot',
            'gtceu:titanium_tungsten_carbide_ingot',
            'gtceu:nickel_zinc_ferrite_ingot',
            'gtceu:ancient_netherite_ingot',
            'gtceu:tritan_steel_ingot',
            'minecraft:netherite_ingot',
        ],
        'chaos',
        9.45
    );
    voidicMetal(
        'xeproda',
        [
            'gtceu:void_ingot',
            'gtceu:black_steel_ingot',
            'gtceu:enriched_naquadah_ingot',
            'gtceu:indium_tin_barium_titanium_cuprate_ingot',
            'gtceu:black_bronze_ingot',
            'gtceu:naquadah_alloy_ingot',
            'gtceu:yttrium_barium_cuprate_ingot',
        ],
        'chaos',
        11.35
    );
    voidicMetal(
        'chalyblux',
        [
            'gtceu:hafnium_ingot',
            'gtceu:rose_gold_ingot',
            'gtceu:lumium_ingot',
            'gtceu:electrum_ingot',
            'gtceu:rhodium_plated_palladium_ingot',
            'gtceu:stainless_steel_ingot',
            'gtceu:platinum_ingot',
        ],
        'order',
        8.65
    );
});
