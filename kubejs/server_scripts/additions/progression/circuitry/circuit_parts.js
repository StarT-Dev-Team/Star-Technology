ServerEvents.recipes((event) => {
    const id = global.id;

    const scalerMCSF = 32; //Should be 16n variant (cap64) //having from 64 given large quantities
    // const getDataItem = global.getDataItem;

    // === Living SMDs ===

    /**
     * @param {string} type
     * @param {number} quantity
     * @param {string[]} inputs
     * @param {number} polymerAmount
     */
    const livingSMD = (type, quantity, inputs, polymerAmount /*, cwu */) => {
        event.recipes.gtceu
            .assembler(id(`living_smd_${type}`))
            .itemInputs(inputs)
            .inputFluids(`gtceu:polyimide ${polymerAmount}`)
            .itemOutputs(`${quantity}x kubejs:living_smd_${type}`)
            .duration(15 * quantity)
            .EUt(GTValues.VHA[GTValues.ZPM]);
    };

    livingSMD(
        'inductor',
        16,
        ['gtceu:naquadah_alloy_ring', '4x gtceu:fine_naquadria_wire', 'gtceu:ferrosilite_dust'],
        144
        // 180
    );

    livingSMD(
        'transistor',
        16,
        ['2x gtceu:naquadah_foil', '8x gtceu:fine_trinium_wire', 'gtceu:pure_netherite_foil'],
        144
        // 180
    );

    livingSMD(
        'capacitor',
        16,
        ['2x gtceu:polyimide_foil', '2x gtceu:trinaquadalloy_foil', 'gtceu:nether_star_foil'],
        108
        // 180
    );

    livingSMD(
        'resistor',
        16,
        ['gtceu:silicon_carbide_dust', '6x gtceu:fine_yttrium_barium_cuprate_wire', '2x gtceu:duranium_foil'],
        144
        // 180
    );

    livingSMD(
        'diode',
        32,
        [
            '2x gtceu:nickel_zinc_ferrite_dust',
            'gtceu:naquadah_wafer',
            '6x gtceu:fine_indium_tin_barium_titanium_cuprate_wire',
        ],
        288
        // 180
    );

    // === Draco-QMDs ===

    /**
     * @param {string} type
     * @param {number} quantity
     * @param {string[]} inputs
     * @param {number} polymerAmount
     */
    const dracoQMD = (type, quantity, inputs, polymerAmount) => {
        event.recipes.gtceu
            .component_part_assembly(id(`draconic_qmd_${type}`))
            .itemInputs(inputs)
            .inputFluids(
                `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${polymerAmount}`,
                `gtceu:naquadated_soldering_alloy ${(polymerAmount * 3) / 2}`
            )
            .itemOutputs(`${quantity}x kubejs:draconic_qmd_${type}`)
            .duration(15 * quantity)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(`kubejs:living_smd_${type}`))
                    .EUt(GTValues.VHA[GTValues.UHV] * 0.8)
                    .CWUt(180)
            )
            .EUt(GTValues.VHA[GTValues.UHV]);

        event.recipes.gtceu
            .research_station(`1_x_gtceu_advanced_smd_${type}`)
            .itemInputs('start_core:data_dna_disk')
            .itemInputs(`kubejs:living_smd_${type}`)
            .itemOutputs(
                Item.of(
                    'start_core:data_dna_disk',
                    `{assembly_line_research:{research_id:"1x_kubejs_living_smd_${type}",research_type:"gtceu:component_part_assembly"}}`
                )
            )
            .CWUt(180)
            .totalCWU(180 * 120 * 20)
            .EUt(GTValues.VHA[GTValues.UHV] / 4);
    };

    dracoQMD(
        'inductor',
        16,
        ['gtceu:neutronium_ring', '4x gtceu:fine_prismalium_wire', 'gtceu:iron_titanium_oxide_dust'],
        216
    );

    dracoQMD(
        'transistor',
        16,
        ['2x gtceu:ancient_netherite_foil', '8x gtceu:fine_trinaquadalloy_wire', 'gtceu:aurourium_foil'],
        216
    );

    dracoQMD(
        'capacitor',
        16,
        [
            '2x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil',
            '3x gtceu:zalloy_foil',
            'gtceu:mythrolic_alloy_foil',
        ],
        144
    );

    dracoQMD(
        'resistor',
        16,
        ['gtceu:diamane_dust', '6x gtceu:fine_adamantine_wire', '4x gtceu:bismuth_iridate_foil'],
        216
    );

    dracoQMD(
        'diode',
        32,
        [
            '2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust',
            'gtceu:neutronium_wafer',
            '8x gtceu:fine_stellarium_wire',
        ],
        432
    );

    /**
     * @param {string} type
     * @param {number} outQuant
     * @param {string[]} inputs
     * @param {string[]} fluids
     * @param {number} duration
     */
    const dracoQMDInMCSF = (type, outQuant, inputs, fluids, duration) => {
        event.recipes.gtceu
            .component_part_synthesis_forge(id(`${type}`))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`${scalerMCSF * outQuant}x kubejs:${type}`)
            .duration(scalerMCSF * duration)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(`kubejs:${type}`))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(320)
            )
            .EUt(GTValues.VHA[GTValues.UHV])
            .cleanroom(CleanroomType.getByName('stabilized'));

        event.recipes.gtceu
            .research_station(`1_x_kubejs_${type}`)
            .itemInputs('start_core:component_data_core')
            .itemInputs(`kubejs:${type}`)
            .itemOutputs(
                Item.of(
                    'start_core:component_data_core',
                    `{assembly_line_research:{research_id:"1x_kubejs_${type}",research_type:"gtceu:component_part_synthesis_forge"}}`
                )
            )
            .CWUt(320)
            .totalCWU(384000) // 320 CWU * 60 seconds * 20 ticks
            .EUt(GTValues.VHA[GTValues.UHV]);
    };

    dracoQMDInMCSF(
        'draconic_qmd_inductor',
        16,
        [
            `${scalerMCSF * 0.75}x gtceu:neutronium_ring`,
            `${scalerMCSF * 0.75 * 4}x gtceu:fine_prismalium_wire`,
            `${scalerMCSF * 0.75}x gtceu:iron_titanium_oxide_dust`,
        ],
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${scalerMCSF * 0.75 * 216}`,
            `gtceu:naquadated_soldering_alloy ${scalerMCSF * 0.75 * 324}`,
        ],
        240
    );

    dracoQMDInMCSF(
        'draconic_qmd_transistor',
        16,
        [
            `${2 * scalerMCSF * 0.75}x gtceu:ancient_netherite_foil`,
            `${scalerMCSF * 0.75 * 8}x gtceu:fine_trinaquadalloy_wire`,
            `${scalerMCSF * 0.75}x gtceu:aurourium_foil`,
        ],
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${scalerMCSF * 0.75 * 216}`,
            `gtceu:naquadated_soldering_alloy ${scalerMCSF * 0.75 * 324}`,
        ],
        240
    );

    dracoQMDInMCSF(
        'draconic_qmd_capacitor',
        16,
        [
            `${scalerMCSF * 0.75 * 2}x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil`,
            `${scalerMCSF * 0.75 * 3}x gtceu:zalloy_foil`,
            `${scalerMCSF * 0.75}x gtceu:mythrolic_alloy_foil`,
        ],
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${scalerMCSF * 0.75 * 144}`,
            `gtceu:naquadated_soldering_alloy ${scalerMCSF * 0.75 * 216}`,
        ],
        240
    );

    dracoQMDInMCSF(
        'draconic_qmd_resistor',
        16,
        [
            `${scalerMCSF * 0.75}x gtceu:diamane_dust`,
            `${scalerMCSF * 0.75 * 6}x gtceu:fine_adamantine_wire`,
            `${scalerMCSF * 0.75 * 4}x gtceu:bismuth_iridate_foil`,
        ],
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${scalerMCSF * 0.75 * 216}`,
            `gtceu:naquadated_soldering_alloy ${scalerMCSF * 0.75 * 324}`,
        ],
        240
    );

    dracoQMDInMCSF(
        'draconic_qmd_diode',
        32,
        [
            `${scalerMCSF * 0.75 * 2}x gtceu:silicon_carbide_over_bismuth_tritelluride_dust`,
            `${scalerMCSF * 0.75}x gtceu:neutronium_wafer`,
            `${scalerMCSF * 0.75 * 8}x gtceu:fine_stellarium_wire`,
        ],
        [
            `gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${scalerMCSF * 0.75 * 432}`,
            `gtceu:naquadated_soldering_alloy ${scalerMCSF * 0.75 * 648}`,
        ],
        480
    );
});
