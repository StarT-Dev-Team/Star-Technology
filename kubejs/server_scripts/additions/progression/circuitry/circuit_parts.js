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
            .EUtVHA(ZPM);
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

    /**
     * @typedef ItemIngredientObj
     * @property {number} count
     * @property {string} itemId
     */

    /**
     * @typedef FluidIngredientObj
     * @property {number} amount
     * @property {string} fluidId
     */

    // === Draco-QMDs ===
    /**
     * @param {string} type
     * @param {ItemIngredientObj[]} items
     * @param {FluidIngredientObj[]} fluids
     */
    const dracoQMD = (type, items, fluids) => {
        /** @type {string[]} */
        const cpaItems = items.map((itemObj) => {
            return `${itemObj.count}x ${itemObj.itemId}`;
        });

        const cpaFluids = fluids.map((fluidObj) => {
            return `${fluidObj.fluidId} ${fluidObj.amount}`;
        });

        const quantity = type === 'diode' ? 32 : 16;

        event.recipes.gtceu
            .component_part_assembly(id(`draconic_qmd_${type}`))
            .itemInputs(cpaItems)
            .inputFluids(cpaFluids)
            .itemOutputs(`${quantity}x kubejs:draconic_qmd_${type}`)
            .duration(15 * quantity)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(`kubejs:living_smd_${type}`))
                    .EUt(GTValues.VHA[UHV] * 0.8)
                    .CWUt(180)
            )
            .EUtVHA(UHV);

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
            .EUt(GTValues.VHA[UHV] / 4);

        const mtscfItems = items.map((itemObj) => {
            return `${itemObj.count * scalerMCSF * 0.75}x ${itemObj.itemId}`;
        });

        const mtscfFluids = fluids.map((fluidObj) => {
            return `${fluidObj.fluidId} ${fluidObj.amount * scalerMCSF * 0.75}`;
        });

        event.recipes.gtceu
            .component_part_synthesis_forge(id(`draconic_qmd_${type}`))
            .itemInputs(mtscfItems)
            .inputFluids(mtscfFluids)
            .itemOutputs(`${scalerMCSF * quantity}x kubejs:draconic_qmd_${type}`)
            .duration(scalerMCSF * 15 * quantity)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(`kubejs:draconic_qmd_${type}`))
                    .EUt(GTValues.VHA[UHV])
                    .CWUt(320)
            )
            .EUtVHA(UHV)
            .cleanroom(CleanroomType.getByName('stabilized'));

        event.recipes.gtceu
            .research_station(`1_x_kubejs_draconic_qmd_${type}`)
            .itemInputs('start_core:component_data_core')
            .itemInputs(`kubejs:draconic_qmd_${type}`)
            .itemOutputs(
                Item.of(
                    'start_core:component_data_core',
                    `{assembly_line_research:{research_id:"1x_kubejs_draconic_qmd_${type}",research_type:"gtceu:component_part_synthesis_forge"}}`
                )
            )
            .CWUt(320)
            .totalCWU(384000)
            .EUtVHA(UHV);
    };

    dracoQMD(
        'inductor',
        [
            { count: 1, itemId: 'gtceu:neutronium_ring' },
            { count: 4, itemId: 'gtceu:fine_prismalium_wire' },
            { count: 1, itemId: 'gtceu:iron_titanium_oxide_dust' },
        ],
        [
            { amount: 216, fluidId: 'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate' },
            { amount: 324, fluidId: 'gtceu:naquadated_soldering_alloy' },
        ]
    );

    dracoQMD(
        'transistor',
        [
            { count: 2, itemId: 'gtceu:ancient_netherite_foil' },
            { count: 8, itemId: 'gtceu:fine_trinaquadalloy_wire' },
            { count: 1, itemId: 'gtceu:aurourium_foil' },
        ],
        [
            { amount: 216, fluidId: 'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate' },
            { amount: 324, fluidId: 'gtceu:naquadated_soldering_alloy' },
        ]
    );

    dracoQMD(
        'capacitor',
        [
            { count: 2, itemId: 'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil' },
            { count: 3, itemId: 'gtceu:zalloy_foil' },
            { count: 1, itemId: 'gtceu:mythrolic_alloy_foil' },
        ],
        [
            { amount: 144, fluidId: 'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate' },
            { amount: 216, fluidId: 'gtceu:naquadated_soldering_alloy' },
        ]
    );

    dracoQMD(
        'resistor',
        [
            { count: 1, itemId: 'gtceu:diamane_dust' },
            { count: 6, itemId: 'gtceu:fine_adamantine_wire' },
            { count: 4, itemId: 'gtceu:bismuth_iridate_foil' },
        ],
        [
            { amount: 216, fluidId: 'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate' },
            { amount: 324, fluidId: 'gtceu:naquadated_soldering_alloy' },
        ]
    );

    dracoQMD(
        'diode',
        [
            { count: 2, itemId: 'gtceu:silicon_carbide_over_bismuth_tritelluride_dust' },
            { count: 1, itemId: 'gtceu:neutronium_wafer' },
            { count: 8, itemId: 'gtceu:fine_stellarium_wire' },
        ],
        [
            { amount: 432, fluidId: 'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate' },
            { amount: 648, fluidId: 'gtceu:naquadated_soldering_alloy' },
        ]
    );
});
