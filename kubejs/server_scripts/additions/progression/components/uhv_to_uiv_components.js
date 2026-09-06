ServerEvents.recipes((event) => {
    const id = global.id;
    const scalerMCSF = 64; //Should be 16n variant (cap64)

    const COMPONENTS = global.componentMaterials;

    /**
     * @param {'uhv' | 'uev' | 'uiv'} tierKey
     */
    const componentMaterials = (tierKey) => {
        const data = COMPONENTS[tierKey];
        if (!data) {
            console.error(`Could not find tier data for ${tierKey}`);
            return;
        }

        const {
            tiers: { tier, tier1 },
            materials: {
                primMaterial,
                supMaterial,
                wireMechanical,
                tierFluid,
                solder,
                lubricant,
                primRubber,
                supRubber,
                pipeMaterial,
                miscMaterial,
                superconductor,
            },
            scaling: tierScalingData,
            researchData: tierResearchData,
        } = data;
        const { EU, scaler } = tierScalingData || { EU: 1, scaler: 1 };
        const {
            default: { cwuD, EUTD },
            special: { cwuS, EUTS },
        } = tierResearchData || {
            default: { cwuD: 0, EUTD: 0 },
            special: { cwuS: 0, EUTS: 0 },
        };

        /** @param {number} base */
        const b2exponentialMultiplier = (base) => base * Math.pow(2, scaler);
        /** @param {number} base */
        const scaled = (base) => base * scaler;

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

        /**
         * @param {string} type
         * @param {ItemIngredientObj[]} items
         * @param {FluidIngredientObj[]} fluids
         */
        const components = (type, items, fluids) => {
            const typeSpecial = ['field_generator', 'emitter', 'sensor'].includes(type);

            const assemblyLineItems = items.map((itemObj) => {
                return `${itemObj.count}x ${itemObj.itemId}`;
            });

            const assemblyLineFluids = fluids.map((fluidObj) => {
                return `${fluidObj.fluidId} ${fluidObj.amount}`;
            });

            let assemblyLineRecipe = event.recipes.gtceu
                .assembly_line(id(`${tier}_${type}`))
                .itemInputs(assemblyLineItems)
                .inputFluids(assemblyLineFluids)
                .itemOutputs(`gtceu:${tier}_${type}`)
                .duration(600)
                .EUt(EU);

            assemblyLineRecipe.stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${tier1}_${type}`))
                    .EUt(typeSpecial ? EUTS : EUTD)
                    .CWUt(typeSpecial ? cwuS : cwuD)
            );

            const mtscfItems = items.map((itemObj) => {
                const { count, itemId } = itemObj;
                const multiplier = count * scalerMCSF * 0.75;

                const spoolCheck = itemId.match(/gtceu:fine_(.*)_wire/);
                if (spoolCheck) return `${multiplier / 64}x gtceu:${spoolCheck[1]}_wire_spool`;

                const foilCheck = itemId.match(/gtceu:(.*)_foil/);
                if (foilCheck) return `${multiplier / 64}x gtceu:${foilCheck[1]}_foil_ream`;

                return `${multiplier}x ${itemId}`;
            });

            const mtscfFluids = fluids.map((fluidObj) => {
                return `${fluidObj.fluidId} ${fluidObj.amount * scalerMCSF * 0.75}`;
            });

            event.recipes.gtceu
                .component_synthesis_forge(id(`${tier}_${type}`))
                .itemInputs(mtscfItems)
                .inputFluids(mtscfFluids)
                .itemOutputs(`${scalerMCSF}x gtceu:${tier}_${type}`)
                .duration(scalerMCSF * 600)
                .stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder
                        .researchStack(Item.of(`gtceu:${tier}_${type}`))
                        .EUt(EU)
                        .CWUt(320)
                )
                .EUt(EU)
                .cleanroom(CleanroomType.getByName('stabilized'))
                .addMaterialInfo(true, true);

            event.recipes.gtceu
                .research_station(`1_x_gtceu_${tier}_${type}_mcsf`)
                .itemInputs('start_core:component_data_core')
                .itemInputs(`gtceu:${tier}_${type}`)
                .itemOutputs(
                    Item.of(
                        'start_core:component_data_core',
                        `{assembly_line_research:{research_id:"1x_gtceu_${tier}_${type}",research_type:"gtceu:component_synthesis_forge"}}`
                    )
                )
                .CWUt(320)
                .totalCWU(384000)
                .EUt(EU);
        };

        components(
            'electric_motor',
            [
                { count: 1, itemId: `kubejs:${tier}_super_magnetic_core` },
                { count: 2, itemId: `gtceu:long_${primMaterial}_rod` },
                { count: 1, itemId: `kubejs:${tier}_transmission_assembly` },
                { count: 64, itemId: `gtceu:fine_${wireMechanical}_wire` },
                { count: 1, itemId: `kubejs:${tier}_micropower_router` },
            ],
            [
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${tierFluid}` },
            ]
        );

        components(
            'electric_pump',
            [
                { count: 1, itemId: `gtceu:${tier}_electric_motor` },
                { count: 1, itemId: `gtceu:${pipeMaterial}_normal_fluid_pipe` },
                { count: 1, itemId: `kubejs:${tier}_microfluidic_flow_valve` },
                { count: 8, itemId: `gtceu:${supRubber}_ring` },
                { count: 1, itemId: `gtceu:${supMaterial}_rotor` },
                { count: 1, itemId: `kubejs:${tier}_micropower_router` },
            ],
            [
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${tierFluid}` },
            ]
        );

        components(
            'conveyor_module',
            [
                { count: 2, itemId: `gtceu:${tier}_electric_motor` },
                { count: 1, itemId: `kubejs:${tier}_high_strength_panel` },
                { count: 1, itemId: `kubejs:${tier}_precision_drive_mechanism` },
                { count: 4, itemId: `gtceu:${primMaterial}_ring` },
                { count: 1, itemId: `kubejs:${tier}_micropower_router` },
            ],
            [
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
                { amount: scaled(1152), fluidId: `gtceu:${primRubber}` },
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${tierFluid}` },
            ]
        );

        components(
            'electric_piston',
            [
                { count: 1, itemId: `gtceu:${tier}_electric_motor` },
                { count: 2, itemId: `kubejs:${tier}_high_strength_panel` },
                { count: 1, itemId: `kubejs:${tier}_transmission_assembly` },
                { count: 1, itemId: `gtceu:${supMaterial}_gear` },
                { count: 1, itemId: `gtceu:small_${supMaterial}_gear` },
                { count: 1, itemId: `kubejs:${tier}_micropower_router` },
            ],
            [
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${tierFluid}` },
            ]
        );

        components(
            'robot_arm',
            [
                { count: 4, itemId: `gtceu:long_${primMaterial}_rod` },
                { count: 1, itemId: `kubejs:${tier}_precision_drive_mechanism` },
                { count: 1, itemId: `kubejs:${tier}_transmission_assembly` },
                { count: 1, itemId: `gtceu:${tier}_electric_motor` },
                { count: 1, itemId: `gtceu:${tier}_electric_piston` },
                { count: 2, itemId: `kubejs:${tier}_computational_matrix` },
                { count: 2, itemId: `kubejs:${tier}_micropower_router` },
            ],
            [
                { amount: b2exponentialMultiplier(144), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${tierFluid}` },
            ]
        );

        components(
            'field_generator',
            [
                { count: 1, itemId: `gtceu:${primMaterial}_frame` },
                { count: 2, itemId: `kubejs:${tier}_high_strength_panel` },
                { count: 1, itemId: `kubejs:${tier}_catalyst_core` },
                { count: 2, itemId: `gtceu:${tier}_emitter` },
                { count: 1, itemId: `kubejs:${tier}_computational_matrix` },
                { count: 64, itemId: `gtceu:fine_${superconductor}_wire` },
                { count: 2, itemId: `kubejs:${tier}_micropower_router` },
            ],
            [
                { amount: b2exponentialMultiplier(288), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${tierFluid}` },
            ]
        );

        components(
            'emitter',
            [
                { count: 1, itemId: `gtceu:${primMaterial}_frame` },
                { count: 1, itemId: `gtceu:${tier}_electric_motor` },
                { count: 4, itemId: `gtceu:long_${primMaterial}_rod` },
                { count: 1, itemId: `kubejs:${tier}_catalyst_core` },
                { count: 1, itemId: `kubejs:${tier}_computational_matrix` },
                { count: 64, itemId: `gtceu:${miscMaterial}_foil` },
                { count: 1, itemId: `kubejs:${tier}_micropower_router` },
            ],
            [
                { amount: b2exponentialMultiplier(144), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${tierFluid}` },
            ]
        );

        components(
            'sensor',
            [
                { count: 1, itemId: `gtceu:${primMaterial}_frame` },
                { count: 1, itemId: `gtceu:${tier}_electric_motor` },
                { count: 4, itemId: `gtceu:${primMaterial}_plate` },
                { count: 1, itemId: `kubejs:${tier}_catalyst_core` },
                { count: 1, itemId: `kubejs:${tier}_computational_matrix` },
                { count: 64, itemId: `gtceu:${miscMaterial}_foil` },
                { count: 1, itemId: `kubejs:${tier}_micropower_router` },
            ],
            [
                { amount: b2exponentialMultiplier(144), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${tierFluid}` },
            ]
        );

        event.recipes.gtceu
            .assembler(id(`${tier}_fluid_regulator`))
            .itemInputs(`gtceu:${tier}_electric_pump`, `2x #gtceu:circuits/${tier}`)
            .itemOutputs(`gtceu:${tier}_fluid_regulator`)
            .duration(50)
            .EUt(EU * 4)
            .circuit(1);
    };

    componentMaterials('uhv');
    componentMaterials('uev');
    componentMaterials('uiv');
});
