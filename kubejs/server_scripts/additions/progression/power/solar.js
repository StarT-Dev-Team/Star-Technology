ServerEvents.recipes((event) => {
    const id = global.id;
    //const getRecipeTier = global.getRecipeTier;

    ['smd', 'advanced_smd', 'living_smd'].forEach((smdType) => {
        let count = smdType === 'living_smd' ? 16 : smdType === 'advanced_smd' ? 4 : 1;
        let prefix = smdType === 'living_smd' ? 'kubejs:' : 'gtceu:';

        //EV Solar Cores
        event.recipes.gtceu
            .assembler(id(`ev_energy_core_from_${smdType}`))
            .itemInputs('3x gtceu:iron_foil', `2x ${prefix + smdType}_diode`, `2x ${prefix + smdType}_capacitor`)
            .inputFluids('gtceu:glass 288')
            .itemOutputs(`${count}x kubejs:ev_energy_core`)
            .circuit(3)
            .duration(400)
            .EUt(GTValues.VHA[HV] * count);
    });

    const COMPONENTS = global.componentMaterials;
    /** @type {Record<'ev' | 'iv' | 'luv' | 'zpm' | 'uv' | 'uhv', string>} */
    const PANEL_PLASTICS = {
        ev: 'polytetraethylene',
        iv: 'epoxy',
        luv: 'polyvinyl_butyral',
        zpm: 'polybenzimidazole',
        uv: 'polyether_ether_ketone',
        uhv: 'poly_34_ethylenedioxythiophene_polystyrene_sulfonate',
    };

    /** @typedef {'capacitor' | 'resistor'} ComponentType */
    /** @typedef {{id: string, recycleMaterials: string[]}} ComponentMap */
    /** @typedef {Record<ComponentType, ComponentMap>} CapacitorResistorMap*/
    /** @type {Record<'ev' | 'iv' | 'luv' | 'zpm' | 'uv' | 'uhv', CapacitorResistorMap>} */
    const COMPONENT_MAP = {
        ev: {
            capacitor: {
                id: 'gtceu:capacitor',
                recycleMaterials: [''],
            },
            resistor: {
                id: 'gtceu:resistor',
                recycleMaterials: [''],
            },
        },
        iv: {
            capacitor: {
                id: 'gtceu:capacitor',
                recycleMaterials: [''],
            },
            resistor: {
                id: 'gtceu:resistor',
                recycleMaterials: [''],
            },
        },
        luv: {
            capacitor: {
                id: 'gtceu:capacitor',
                recycleMaterials: [''],
            },
            resistor: {
                id: 'gtceu:resistor',
                recycleMaterials: [''],
            },
        },
        zpm: {
            capacitor: {
                id: 'gtceu:capacitor',
                recycleMaterials: [''],
            },
            resistor: {
                id: 'gtceu:resistor',
                recycleMaterials: [''],
            },
        },
        uv: {
            capacitor: {
                id: 'gtceu:capacitor',
                recycleMaterials: [''],
            },
            resistor: {
                id: 'gtceu:resistor',
                recycleMaterials: [''],
            },
        },
        uhv: {
            capacitor: {
                id: 'gtceu:capacitor',
                recycleMaterials: [''],
            },
            resistor: {
                id: 'gtceu:resistor',
                recycleMaterials: [''],
            },
        },
    };

    /**
     * @param {'ev' | 'iv' | 'luv' | 'zpm' | 'uv' | 'uhv'} tierKey
     * @param {string} panelType
     */
    const solar = (tierKey, panelType) => {
        const data = COMPONENTS[tierKey];
        if (!data) return;

        const {
            tiers: { tier, tier1 },
            materials: { wireMechanical, tierMaterial, solder, lubricant, cable, battery },
            scaling: dataScaling,
            electronicComponents: components,
        } = data;
        const { scaler, EU } = dataScaling || { EU: 0, scaler: 0 };
        const { capacitor, resistor } = components || { capacitor: '', resistor: '' };
        const plastic = PANEL_PLASTICS[tierKey];

        if (tier !== 'ev') {
            //Other Cores
            event.recipes.gtceu
                .polarizer(id(`${tier}_energy_core`))
                .itemInputs(`kubejs:${tier1}_energy_core`)
                .itemOutputs(`kubejs:${tier}_energy_core`)
                .duration(300)
                .EUt(EU);
        }

        //Solar Cells
        event.recipes.gtceu
            .assembler(id(`${tier}_solar_cell`))
            .itemInputs(
                `2x kubejs:${tier}_energy_core`,
                `2x kubejs:${tier}_photovoltaic_cell`,
                `2x #gtceu:circuits/${tier}`,
                `gtceu:${tierMaterial}_frame`,
                `2x gtceu:${cable}_double_cable`
            )
            .inputFluids(`gtceu:${solder} 144`)
            .itemOutputs(`2x start_core:${tier}_solar_cell`)
            .duration(600)
            .EUt(EU * 2);

        event.recipes.gtceu
            .assembler(id(`${tier}_solar_cell_repair`))
            .inputItemNbtPredicate(`start_core:${tier}_solar_cell`, NBTPredicates.eqBool('BlockEntityTag.broken', true))
            .itemInputs(`kubejs:${tier}_photovoltaic_cell`)
            .inputFluids(`gtceu:${solder} 288`)
            .itemOutputs(`start_core:${tier}_solar_cell`, `kubejs:damaged_${tier}_photovoltaic_cell`)
            .duration(300)
            .EUt(EU * 2);

        //Photovoltaic Cells
        event.recipes.gtceu
            .assembler(id(`${tier}_photovoltaic_cell`))
            .itemInputs(`gtceu:double_${tierMaterial}_plate`, `4x ${capacitor}`, `2x ${resistor}`)
            .inputFluids(`gtceu:${plastic} 144`)
            .itemOutputs(`kubejs:${tier}_photovoltaic_cell`)
            .duration(400)
            .EUt(EU * 4);

        let photovoltaicCellRecycledOutputs = [`3x gtceu:${tierMaterial}_dust`, `3x gtceu:small_${plastic}_dust`];
        /*.concat(
            global.zipItemArrays(
                COMPONENT_MAP[tierKey].capacitor.recycleMaterials,
                COMPONENT_MAP[tierKey].resistor.recycleMaterials
            )
        );*/

        event.recipes.gtceu
            .macerator(id(`recycle_${tier}_photovoltaic_cell`))
            .itemInputs(`kubejs:damaged_${tier}_photovoltaic_cell`)
            .itemOutputs(photovoltaicCellRecycledOutputs)
            .duration(100)
            .EUt(EU * 2);

        if (panelType === 'panel') {
            event.recipes.gtceu
                .assembler(id(`${tier}_solar_panel`))
                .itemInputs(
                    `1x gtceu:${tierMaterial}_frame`,
                    Item.of(`gtceu:${battery || ''}`),
                    `16x gtceu:${cable}_double_cable`,
                    `4x gtceu:${tier}_emitter`,
                    `2x gtceu:${tier}_sensor`,
                    `2x #gtceu:circuits/${tier}`
                )
                .inputFluids(`gtceu:${lubricant} 4000`)
                .itemOutputs(`start_core:${tier}_solar_panel`)
                .duration(600)
                .EUt(EU * 2);
        }

        if (panelType === 'array') {
            let researchItem = tier === 'uhv' ? 'start_core:uv_solar_array' : 'start_core:luv_solar_panel';
            let cwu = tier === 'uhv' ? 160 : 128;

            event.recipes.gtceu
                .assembly_line(id(`${tier}_solar_array`))
                .itemInputs(
                    `2x gtceu:${tierMaterial}_frame`,
                    Item.of(`gtceu:${battery}`),
                    `2x #gtceu:circuits/${tier}`,
                    `8x gtceu:${tier}_emitter`,
                    `8x gtceu:${tier}_sensor`,
                    `64x gtceu:fine_${wireMechanical}_wire`,
                    `64x gtceu:fine_${wireMechanical}_wire`,
                    `24x gtceu:${cable}_double_cable`
                )
                .inputFluids(
                    `gtceu:${solder} 2880`,
                    `gtceu:${lubricant} 7200`,
                    `gtceu:deionized_water ${7500 * 2 * (scaler - 2)}`
                )
                .itemOutputs(`start_core:${tier}_solar_array`)
                .duration(600)
                .stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder.researchStack(Item.of(researchItem)).EUt(EU).CWUt(cwu)
                )
                .EUt(EU * 2);
        }
    };
    solar('ev', 'panel');
    solar('iv', 'panel');
    solar('luv', 'panel');
    solar('zpm', '');
    solar('uv', 'array');
    solar('uhv', 'array');
});
