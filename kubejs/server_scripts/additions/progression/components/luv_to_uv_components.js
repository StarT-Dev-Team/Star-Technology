ServerEvents.recipes((event) => {
    const id = global.id;
    const scalerMCSF = 64; //Should be 16n variant (cap64)

    const COMPONENTS = global.componentMaterials;

    /**
     * @param {'luv' | 'zpm' | 'uv'} tierKey
     */
    const componentMaterials = (tierKey) => {
        const data = COMPONENTS[tierKey];
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
         * @param {string} type
         * @param {string[]} inputs
         * @param {string[]} fluids
         */
        const componentTypesAssemblyLine = (type, inputs, fluids) => {
            event.remove({ id: `gtceu:assembly_line/${type}_${tier}` });

            let typeSpecial = ['field_generator', 'emitter', 'sensor'].includes(type);

            let assemblyLineRecipe = event.recipes.gtceu
                .assembly_line(id(`${tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`gtceu:${tier}_${type}`)
                .duration(600)
                .EUt(EU);

            if (tier === 'uv') {
                assemblyLineRecipe = assemblyLineRecipe.inputFluids(`gtceu:${tierFluid} 576`);
            }

            if (typeSpecial) {
                if (ifSRS) {
                    assemblyLineRecipe = assemblyLineRecipe.stationResearch((researchRecipeBuilder) =>
                        researchRecipeBuilder
                            .researchStack(Item.of(`gtceu:${tier1}_${type}`))
                            .EUt(EUTS)
                            .CWUt(cwuS)
                    );

                    event.remove({ id: `gtceu:research_station/1_x_gtceu_${tier}_${type}` });
                } else {
                    assemblyLineRecipe = assemblyLineRecipe['scannerResearch(java.util.function.UnaryOperator)'](
                        (researchRecipeBuilder) =>
                            researchRecipeBuilder
                                .researchStack(Item.of(`gtceu:${tier1}_${type}`))
                                .duration(duraS * 20)
                                .EUt(EUTS)
                    );

                    event.remove({ id: `gtceu:scanner/1_x_gtceu_${tier}_${type}` });
                }
            } else {
                if (ifDRS) {
                    assemblyLineRecipe = assemblyLineRecipe.stationResearch((researchRecipeBuilder) =>
                        researchRecipeBuilder
                            .researchStack(Item.of(`gtceu:${tier1}_${type}`))
                            .EUt(EUTD)
                            .CWUt(cwuD)
                    );

                    event.remove({ id: `gtceu:research_station/1_x_gtceu_${tier}_${type}` });
                } else {
                    assemblyLineRecipe['scannerResearch(java.util.function.UnaryOperator)']((researchRecipeBuilder) =>
                        researchRecipeBuilder
                            .researchStack(Item.of(`gtceu:${tier1}_${type}`))
                            .duration(duraD * 20)
                            .EUt(EUTD)
                    );

                    event.remove({ id: `gtceu:scanner/1_x_gtceu_${tier}_${type}` });
                }
            }
        };

        componentTypesAssemblyLine(
            'electric_motor',
            [
                `1x gtceu:long_magnetic_${primMagnet}_rod`,
                `4x gtceu:long_${primMaterial}_rod`,
                `4x gtceu:${primMaterial}_ring`,
                `8x gtceu:${primMaterial}_round`,
                `64x gtceu:fine_${wireMechanical}_wire`,
                `2x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${b2exponentialMultiplier(72)}`, `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`]
        );

        componentTypesAssemblyLine(
            'electric_pump',
            [
                `1x gtceu:${tier}_electric_motor`,
                `1x gtceu:${pipeMaterial}_normal_fluid_pipe`,
                `2x gtceu:${primMaterial}_plate`,
                `8x gtceu:${primMaterial}_screw`,
                `${scaled(2) + 2}x gtceu:${supRubber}_ring`,
                `1x gtceu:${supMaterial}_rotor`,
                `2x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${b2exponentialMultiplier(72)}`, `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`]
        );

        componentTypesAssemblyLine(
            'conveyor_module',
            [
                `2x gtceu:${tier}_electric_motor`,
                `2x gtceu:${primMaterial}_plate`,
                `4x gtceu:${primMaterial}_ring`,
                `16x gtceu:${primMaterial}_round`,
                `4x gtceu:${primMaterial}_screw`,
                `2x gtceu:${cable}_single_cable`,
            ],
            [
                `gtceu:${solder} ${b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`,
                `gtceu:${primRubber} ${scaled(1152)}`,
            ]
        );

        componentTypesAssemblyLine(
            'electric_piston',
            [
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${primMaterial}_plate`,
                `4x gtceu:${primMaterial}_ring`,
                `16x gtceu:${primMaterial}_round`,
                `4x gtceu:${primMaterial}_rod`,
                `1x gtceu:${supMaterial}_gear`,
                `2x gtceu:small_${supMaterial}_gear`,
                `2x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${b2exponentialMultiplier(72)}`, `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`]
        );

        componentTypesAssemblyLine(
            'robot_arm',
            [
                `4x gtceu:long_${primMaterial}_rod`,
                `1x gtceu:${primMaterial}_gear`,
                `3x gtceu:small_${primMaterial}_gear`,
                `2x gtceu:${tier}_electric_motor`,
                `1x gtceu:${tier}_electric_piston`,
                `1x #gtceu:circuits/${tier}`,
                `2x #gtceu:circuits/${tier1}`,
                `4x #gtceu:circuits/${tier2}`,
                `4x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${b2exponentialMultiplier(144)}`, `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`]
        );

        componentTypesAssemblyLine(
            'field_generator',
            [
                `1x gtceu:${primMaterial}_frame`,
                `6x gtceu:${primMaterial}_plate`,
                catalyst || '',
                `2x gtceu:${tier}_emitter`,
                `2x #gtceu:circuits/${tier}`,
                `64x gtceu:fine_${superconductor}_wire`,
                `64x gtceu:fine_${superconductor}_wire`,
                `4x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${b2exponentialMultiplier(288)}`]
        );

        componentTypesAssemblyLine(
            'emitter',
            [
                `1x gtceu:${primMaterial}_frame`,
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:long_${primMaterial}_rod`,
                catalyst || '',
                `2x #gtceu:circuits/${tier}`,
                `64x gtceu:${miscMaterial}_foil`,
                `32x gtceu:${miscMaterial}_foil`,
                `4x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${b2exponentialMultiplier(144)}`]
        );

        componentTypesAssemblyLine(
            'sensor',
            [
                `1x gtceu:${primMaterial}_frame`,
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${primMaterial}_plate`,
                catalyst || '',
                `2x #gtceu:circuits/${tier}`,
                `64x gtceu:${miscMaterial}_foil`,
                `32x gtceu:${miscMaterial}_foil`,
                `4x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${b2exponentialMultiplier(144)}`]
        );

        /**
         * @param {string} type
         * @param {string[]} inputs
         * @param {string[]} fluids
         */
        const assemblyComponentMtCSF = (type, inputs, fluids) => {
            let mtscfRecipe = event.recipes.gtceu
                .component_synthesis_forge(id(`${tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
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
                .totalCWU(384000) // 320 CWUt x 60 seconds x 20 ticks
                .EUt(EU * 4);
        };

        assemblyComponentMtCSF(
            'electric_motor',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:long_magnetic_${primMagnet}_rod`,
                `${4 * scalerMCSF * 0.75}x gtceu:long_${primMaterial}_rod`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_ring`,
                `${8 * scalerMCSF * 0.75}x gtceu:${primMaterial}_round`,
                `${1 * scalerMCSF * 0.75}x gtceu:${wireMechanical}_wire_spool`,
                `${2 * scalerMCSF * 0.75}x gtceu:${cable}_single_cable`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
            ]
        );

        assemblyComponentMtCSF(
            'electric_pump',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${1 * scalerMCSF * 0.75}x gtceu:${pipeMaterial}_normal_fluid_pipe`,
                `${2 * scalerMCSF * 0.75}x gtceu:${primMaterial}_plate`,
                `${8 * scalerMCSF * 0.75}x gtceu:${primMaterial}_screw`,
                `${scalerMCSF * 0.75 * (scaled(2) + 2)}x gtceu:${supRubber}_ring`,
                `${1 * scalerMCSF * 0.75}x gtceu:${supMaterial}_rotor`,
                `${2 * scalerMCSF * 0.75}x gtceu:${cable}_single_cable`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
            ]
        );

        assemblyComponentMtCSF(
            'conveyor_module',
            [
                `${2 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${2 * scalerMCSF * 0.75}x gtceu:${primMaterial}_plate`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_ring`,
                `${16 * scalerMCSF * 0.75}x gtceu:${primMaterial}_round`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_screw`,
                `${2 * scalerMCSF * 0.75}x gtceu:${cable}_single_cable`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
                `gtceu:${primRubber} ${scalerMCSF * 0.75 * scaled(1152)}`,
            ]
        );

        assemblyComponentMtCSF(
            'electric_piston',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_plate`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_ring`,
                `${16 * scalerMCSF * 0.75}x gtceu:${primMaterial}_round`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_rod`,
                `${1 * scalerMCSF * 0.75}x gtceu:${supMaterial}_gear`,
                `${2 * scalerMCSF * 0.75}x gtceu:small_${supMaterial}_gear`,
                `${2 * scalerMCSF * 0.75}x gtceu:${cable}_single_cable`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
            ]
        );

        assemblyComponentMtCSF(
            'robot_arm',
            [
                `${4 * scalerMCSF * 0.75}x gtceu:long_${primMaterial}_rod`,
                `${1 * scalerMCSF * 0.75}x gtceu:${primMaterial}_gear`,
                `${3 * scalerMCSF * 0.75}x gtceu:small_${primMaterial}_gear`,
                `${2 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_piston`,
                `${1 * scalerMCSF * 0.75}x #gtceu:circuits/${tier}`,
                `${2 * scalerMCSF * 0.75}x #gtceu:circuits/${tier1}`,
                `${4 * scalerMCSF * 0.75}x #gtceu:circuits/${tier2}`,
                `${4 * scalerMCSF * 0.75}x gtceu:${cable}_single_cable`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(144)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
            ]
        );

        assemblyComponentMtCSF(
            'field_generator',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${primMaterial}_frame`,
                `${6 * scalerMCSF * 0.75}x gtceu:${primMaterial}_plate`,
                `${scalerMCSF * 0.75 * +(catalyst || '')[0]}x ${(catalyst || '').split(' ')[1]}`,
                `${2 * scalerMCSF * 0.75}x gtceu:${tier}_emitter`,
                `${2 * scalerMCSF * 0.75}x #gtceu:circuits/${tier}`,
                `${2 * scalerMCSF * 0.75}x gtceu:${superconductor}_wire_spool`,
                `${4 * scalerMCSF * 0.75}x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(288)}`]
        );

        assemblyComponentMtCSF(
            'emitter',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${primMaterial}_frame`,
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${4 * scalerMCSF * 0.75}x gtceu:long_${primMaterial}_rod`,
                `${scalerMCSF * 0.75 * +(catalyst || '')[0]}x ${(catalyst || '').split(' ')[1]}`,
                `${2 * scalerMCSF * 0.75}x #gtceu:circuits/${tier}`,
                `${1.5 * scalerMCSF * 0.75}x gtceu:${miscMaterial}_foil_ream`,
                `${4 * scalerMCSF * 0.75}x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(144)}`]
        );

        assemblyComponentMtCSF(
            'sensor',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${primMaterial}_frame`,
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_plate`,
                `${scalerMCSF * 0.75 * +(catalyst || '')[0]}x ${(catalyst || '').split(' ')[1]}`,
                `${2 * scalerMCSF * 0.75}x #gtceu:circuits/${tier}`,
                `${1.5 * scalerMCSF * 0.75}x gtceu:${miscMaterial}_foil_ream`,
                `${4 * scalerMCSF * 0.75}x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(144)}`]
        );
    };

    componentMaterials('luv');
    componentMaterials('zpm');
    componentMaterials('uv');
});
