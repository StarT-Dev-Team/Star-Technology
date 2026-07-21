ServerEvents.recipes((event) => {
    const id = global.id;
    const scalerMCSF = 64; //Should be 16n variant (cap64)

    const COMPONENTS = global.componentMaterials;

    /**
     * @param {'luv' | 'zpm' | 'uv'} tierKey
     */
    const componentMaterials = (tierKey) => {
        const data = COMPONENTS[tierKey];
        if (!data) {
            console.error(`Could not find tier data for ${tierKey}`);
            return;
        }

        const {
            tiers: { tier, tier1, tier2 },
            materials: {
                primMaterial,
                supMaterial,
                wireMechanical,
                tierFluid,
                solder,
                lubricant,
                primRubber,
                supRubber,
                cable,
                pipeMaterial,
                superconductor,
                catalyst,
                primMagnet,
                miscMaterial,
            },
            scaling: tierScalingData,
            researchData: tierResearchData,
        } = data;
        const { EU, scaler } = tierScalingData || { EU: 1, scaler: 1 };
        const {
            default: { ifDRS, cwuD, duraD, EUTD },
            special: { ifSRS, cwuS, duraS, EUTS },
        } = tierResearchData || {
            default: { ifDRS: false, cwuD: 0, duraD: 0, EUTD: 0 },
            special: { ifSRS: false, cwuS: 0, duraS: 0, EUTS: 0 },
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
        const componentTypesAssemblyLine = (type, items, fluids) => {
            event.remove({ id: `gtceu:assembly_line/${type}_${tier}` });

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

            let nexusRecipe = event.recipes.gtceu
                .component_nexus(id(`${tier}_${type}`))
                .itemInputs(assemblyLineItems)
                .inputFluids(assemblyLineFluids)
                .itemOutputs(`gtceu:${tier}_${type}`)
                .cleanroom(CleanroomType.getByName('stabilized'))
                .duration(300)
                .EUt(EU);

            if (tier === 'uv') {
                assemblyLineRecipe.inputFluids(`gtceu:${tierFluid} 576`);
                nexusRecipe.inputFluids(`gtceu:${tierFluid} 576`);
            }

            if ((ifSRS && typeSpecial) || ifDRS) {
                assemblyLineRecipe.stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder
                        .researchStack(Item.of(`gtceu:${tier1}_${type}`))
                        .EUt(typeSpecial ? EUTS : EUTD)
                        .CWUt(typeSpecial ? cwuS : cwuD)
                );

                event.remove({ id: `gtceu:research_station/1_x_gtceu_${tier}_${type}` });
            } else {
                $(assemblyLineRecipe).scannerResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder
                        .researchStack(Item.of(`gtceu:${tier1}_${type}`))
                        .duration(typeSpecial ? duraS : duraD * 20)
                        .EUt(typeSpecial ? EUTS : EUTD)
                );

                event.remove({ id: `gtceu:scanner/1_x_gtceu_${tier}_${type}` });
            }

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

            let mtscfRecipe = event.recipes.gtceu
                .component_synthesis_forge(id(`${tier}_${type}`))
                .itemInputs(mtscfItems)
                .inputFluids(mtscfFluids)
                .itemOutputs(`${scalerMCSF}x gtceu:${tier}_${type}`)
                .duration(scalerMCSF * 600)
                .stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder
                        .researchStack(Item.of(`gtceu:${tier}_${type}`))
                        .EUt(EU * 4)
                        .CWUt(320)
                )
                .EUt(EU)
                .cleanroom(CleanroomType.getByName('stabilized'));

            if (tier === 'uv') {
                mtscfRecipe.inputFluids(`gtceu:${tierFluid} ${576 * scalerMCSF * 0.75}`);
            }

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
                .EUt(EU * 4);
        };

        componentTypesAssemblyLine(
            'electric_motor',
            [
                { count: 1, itemId: `gtceu:long_magnetic_${primMagnet}_rod` },
                { count: 4, itemId: `gtceu:long_${primMaterial}_rod` },
                { count: 4, itemId: `gtceu:${primMaterial}_ring` },
                { count: 8, itemId: `gtceu:${primMaterial}_round` },
                { count: 64, itemId: `gtceu:fine_${wireMechanical}_wire` },
                { count: 2, itemId: `gtceu:${cable}_single_cable` },
            ],
            [
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
            ]
        );

        componentTypesAssemblyLine(
            'electric_pump',
            [
                { count: 1, itemId: `gtceu:${tier}_electric_motor` },
                { count: 1, itemId: `gtceu:${pipeMaterial}_normal_fluid_pipe` },
                { count: 2, itemId: `gtceu:${primMaterial}_plate` },
                { count: 8, itemId: `gtceu:${primMaterial}_screw` },
                { count: scaled(2) + 2, itemId: `gtceu:${supRubber}_ring` },
                { count: 1, itemId: `gtceu:${supMaterial}_rotor` },
                { count: 2, itemId: `gtceu:${cable}_single_cable` },
            ],
            [
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
            ]
        );

        componentTypesAssemblyLine(
            'conveyor_module',
            [
                { count: 2, itemId: `gtceu:${tier}_electric_motor` },
                { count: 2, itemId: `gtceu:${primMaterial}_plate` },
                { count: 4, itemId: `gtceu:${primMaterial}_ring` },
                { count: 16, itemId: `gtceu:${primMaterial}_round` },
                { count: 4, itemId: `gtceu:${primMaterial}_screw` },
                { count: 2, itemId: `gtceu:${cable}_single_cable` },
            ],
            [
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
                { amount: scaled(1152), fluidId: `gtceu:${primRubber}` },
            ]
        );

        componentTypesAssemblyLine(
            'electric_piston',
            [
                { count: 1, itemId: `gtceu:${tier}_electric_motor` },
                { count: 4, itemId: `gtceu:${primMaterial}_plate` },
                { count: 4, itemId: `gtceu:${primMaterial}_ring` },
                { count: 16, itemId: `gtceu:${primMaterial}_round` },
                { count: 4, itemId: `gtceu:${primMaterial}_rod` },
                { count: 1, itemId: `gtceu:${supMaterial}_gear` },
                { count: 2, itemId: `gtceu:small_${supMaterial}_gear` },
                { count: 2, itemId: `gtceu:${cable}_single_cable` },
            ],
            [
                { amount: b2exponentialMultiplier(72), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
            ]
        );

        componentTypesAssemblyLine(
            'robot_arm',
            [
                { count: 4, itemId: `gtceu:long_${primMaterial}_rod` },
                { count: 1, itemId: `gtceu:${primMaterial}_gear` },
                { count: 3, itemId: `gtceu:small_${primMaterial}_gear` },
                { count: 2, itemId: `gtceu:${tier}_electric_motor` },
                { count: 1, itemId: `gtceu:${tier}_electric_piston` },
                { count: 1, itemId: `#gtceu:circuits/${tier}` },
                { count: 2, itemId: `#gtceu:circuits/${tier1}` },
                { count: 4, itemId: `#gtceu:circuits/${tier2}` },
                { count: 4, itemId: `gtceu:${cable}_single_cable` },
            ],
            [
                { amount: b2exponentialMultiplier(144), fluidId: `gtceu:${solder}` },
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
            ]
        );

        componentTypesAssemblyLine(
            'field_generator',
            [
                { count: 1, itemId: `gtceu:${primMaterial}_frame` },
                { count: 6, itemId: `gtceu:${primMaterial}_plate` },
                { count: tier === 'zpm' ? 2 : 1, itemId: /** @type {string} */ (catalyst).split(' ')[1] },
                { count: 2, itemId: `gtceu:${tier}_emitter` },
                { count: 2, itemId: `#gtceu:circuits/${tier}` },
                { count: 64, itemId: `gtceu:fine_${superconductor}_wire` },
                { count: 64, itemId: `gtceu:fine_${superconductor}_wire` },
                { count: 4, itemId: `gtceu:${cable}_single_cable` },
            ],
            [{ amount: b2exponentialMultiplier(288), fluidId: `gtceu:${solder}` }]
        );

        componentTypesAssemblyLine(
            'emitter',
            [
                { count: 1, itemId: `gtceu:${primMaterial}_frame` },
                { count: 1, itemId: `gtceu:${tier}_electric_motor` },
                { count: 4, itemId: `gtceu:long_${primMaterial}_rod` },
                { count: tier === 'zpm' ? 2 : 1, itemId: /** @type {string} */ (catalyst).split(' ')[1] },
                { count: 2, itemId: `#gtceu:circuits/${tier}` },
                { count: 64, itemId: `gtceu:${miscMaterial}_foil` },
                { count: 32, itemId: `gtceu:${miscMaterial}_foil` },
                { count: 4, itemId: `gtceu:${cable}_single_cable` },
            ],
            [{ amount: b2exponentialMultiplier(144), fluidId: `gtceu:${solder}` }]
        );

        componentTypesAssemblyLine(
            'sensor',
            [
                { count: 1, itemId: `gtceu:${primMaterial}_frame` },
                { count: 1, itemId: `gtceu:${tier}_electric_motor` },
                { count: 4, itemId: `gtceu:${primMaterial}_plate` },
                { count: tier === 'zpm' ? 2 : 1, itemId: /** @type {string} */ (catalyst).split(' ')[1] },
                { count: 2, itemId: `#gtceu:circuits/${tier}` },
                { count: 64, itemId: `gtceu:${miscMaterial}_foil` },
                { count: 32, itemId: `gtceu:${miscMaterial}_foil` },
                { count: 4, itemId: `gtceu:${cable}_single_cable` },
            ],
            [{ amount: b2exponentialMultiplier(144), fluidId: `gtceu:${solder}` }]
        );
    };

    componentMaterials('luv');
    componentMaterials('zpm');
    componentMaterials('uv');
});
