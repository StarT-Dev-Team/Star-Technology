ServerEvents.recipes((event) => {
    const id = global.id;

    // === Controllers ===

    /**
     * @param {string} type
     * @param {string[]} inputs
     * @param {string[]} fluids
     * @param {string} research
     * @param {number} cwu
     * @param {number} eu
     */
    const wirelessControllers = (type, inputs, fluids, research, cwu, eu) => {
        event.recipes.gtceu
            .assembly_line(id(type))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(research)
                    .EUt(eu / 2)
                    .CWUt(cwu)
            )
            .itemOutputs(`start_core:${type}`)
            .duration(600)
            .EUt(eu);
    };

    wirelessControllers(
        'dream_link_node',
        [
            'gtceu:uv_machine_hull',
            '8x #gtceu:circuits/uhv',
            '12x gtceu:uv_field_generator',
            '4x gtceu:dense_darmstadtium_plate',
            '8x gtceu:uv_emitter',
            '8x gtceu:enriched_naquadah_trinium_europium_duranide_quadruple_wire',
            '64x gtceu:fine_melodium_wire',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '32x gtceu:uhpic_chip',
        ],
        [
            'gtceu:polyether_ether_ketone 12800',
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 14400',
            'gtceu:naquadria 6400',
        ],
        'gtceu:active_transformer',
        128,
        GTValues.VHA[GTValues.UHV]
    );

    wirelessControllers(
        'oneiric_relay',
        [
            'gtceu:uhv_machine_hull',
            '8x #gtceu:circuits/uev',
            '12x gtceu:uhv_field_generator',
            '4x gtceu:dense_neutronium_plate',
            '8x gtceu:uhv_emitter',
            '8x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire',
            '64x gtceu:fine_stellarium_wire',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '32x kubejs:uepic_chip',
        ],
        [
            'gtceu:polyether_ether_ketone 25600',
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 14400',
            'gtceu:naquadria 12800',
        ],
        'start_core:dream_link_node',
        160,
        GTValues.VHA[GTValues.UEV]
    );

    wirelessControllers(
        'daydream_spire',
        [
            'gtceu:uev_machine_hull',
            '8x #gtceu:circuits/uiv',
            '12x gtceu:uev_field_generator',
            '4x gtceu:dense_mythrolic_alloy_plate',
            '8x gtceu:uev_emitter',
            '8x gtceu:enriched_pallarovium_alloy_quadruple_wire',
            '64x gtceu:fine_ancient_runicalium_wire',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
        ],
        [
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 25600',
            'gtceu:naquadated_soldering_alloy 14400',
            'gtceu:isovol 12800',
        ],
        'start_core:oneiric_relay',
        192,
        GTValues.VHA[GTValues.UIV]
    );

    // === Hatches & Covers ===

    const components = global.componentMaterials;

    /**
     * @param {keyof typeof global.componentMaterials} tierKey
     * @param {string} specialFluid
     */
    function wirelessPower(tierKey, specialFluid) {
        const tierData = components[tierKey];

        if (!tierData) return;

        const {
            tiers: { tier },
            materials: { tierMaterial, cable, solder, chip, tierFluid },
            scaling: tierScalingData,
            researchData: tierResearchData,
        } = tierData;
        const { EU, scaler } = tierScalingData || { EU: 1, scaler: 1 };
        const {
            default: { cwuD },
        } = tierResearchData || {
            default: { cwuD: 0 },
        };

        let coilID = tier === 'uv' ? 'gtceu' : 'kubejs';

        event.recipes.gtceu
            .assembler(id(`${tier}_2a_dream_link_cover_item`))
            .itemInputs(
                'gtceu:computer_monitor_cover',
                `1x ${coilID}:${tier}_voltage_coil`,
                `2x gtceu:${tierMaterial}_foil`,
                `1x gtceu:${tier}_sensor`,
                `2x gtceu:${cable}_single_cable`
            )
            .inputFluids(`gtceu:${solder} ${72 * scaler}`)
            .itemOutputs(`start_core:${tier}_2a_dream_link_cover_item`)
            .circuit(3)
            .duration(400)
            .EUt(EU);

        [
            { amperage: 2, scaling: 1 },
            { amperage: 4, scaling: 2 },
            { amperage: 16, scaling: 4 },
            { amperage: 64, scaling: 8 },
            { amperage: 256, scaling: 16 },
        ].forEach((hatch) => {
            let { amperage, scaling } = hatch;

            let uvTierFluid = tier === 'uv' ? 1 : 2;

            let prior =
                amperage === 2
                    ? '2a_dream_link_cover_item'
                    : amperage === 4
                      ? '2a_dream_link_energy_hatch'
                      : `${amperage / 4}a_dream_link_energy_hatch`;

            let inputHatch =
                amperage === 2
                    ? `gtceu:${tier}_energy_input_hatch`
                    : amperage === 64
                      ? `gtceu:${tier}_substation_input_hatch_64a`
                      : amperage === 256
                        ? `gtceu:${tier}_256a_laser_target_hatch`
                        : `gtceu:${tier}_energy_input_hatch_${amperage}a`;

            let recipe = event.recipes.gtceu.assembly_line(id(`${tier}_${amperage}a_dream_link_energy_hatch`));

            recipe
                .itemInputs(
                    inputHatch,
                    `${amperage / 2}x start_core:${tier}_2a_dream_link_cover_item`,
                    `${scaling}x #gtceu:circuits/${tier}`,
                    `${scaling}x ${chip}_chip`,
                    `${2 * scaling}x gtceu:${cable}_single_cable`
                )
                .inputFluids(
                    `gtceu:sodium_potassium ${amperage * scaler * 250}`,
                    `gtceu:${solder} ${amperage * scaler * 144}`
                )
                .itemOutputs(`start_core:${tier}_${amperage}a_dream_link_energy_hatch`)
                .stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder.researchStack(`start_core:${tier}_${prior}`).EUt(EU).CWUt(cwuD)
                )
                .duration(600)
                .EUt(EU * 4);

            if (amperage >= 64) {
                recipe.inputFluids(`gtceu:${tierFluid} ${uvTierFluid * amperage * 36}`);
            }

            if (amperage >= 256) {
                recipe.inputFluids(`gtceu:${specialFluid} ${amperage * 18}`);
            }
        });
    }

    wirelessPower('uv', 'neutronium');
    wirelessPower('uhv', 'aurourium');
    wirelessPower('uev', 'draco_abyssal');
    wirelessPower('uiv', 'raging_rimulatia');

    // === Data Item ===
    event.recipes.gtceu
        .circuit_assembler(id('lucinducer'))
        .itemInputs(
            'gtceu:neuro_processing_unit',
            '2x gtceu:crystal_cpu',
            '4x gtceu:nano_cpu_chip',
            '48x kubejs:qram_chip',
            '32x gtceu:fine_europium_wire',
            '8x gtceu:polybenzimidazole_plate'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576')
        .itemOutputs('start_core:lucinducer')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);
});
