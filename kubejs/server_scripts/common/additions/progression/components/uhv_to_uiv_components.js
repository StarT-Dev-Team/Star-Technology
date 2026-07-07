ServerEvents.recipes((event) => {
    const id = global.id;
    const scalerMCSF = 64; //Should be 16n variant (cap64)

    const COMPONENTS = global.componentMaterials;

    const componentMaterials = (tierKey) => {
        const data = COMPONENTS[tierKey];
        if (!data) return;

        const {
            tiers: { tier, tier1 },
            materials: {
                tierMaterial,
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
            scaling: { scaler, EU },
            researchData: {
                default: { cwuD, EUtD },
                special: { cwuS, EUtS },
            },
        } = data;

        const b2exponentialMultiplier = (base) => base * 2 ** scaler;
        const scaled = (base) => base * scaler;

        const components = (type, inputs, fluids) => {
            let typeSpecial = ['field_generator', 'emitter', 'sensor'].includes(type);

            let assemblyLineRecipe = event.recipes.gtceu
                .assembly_line(id(`${tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`gtceu:${tier}_${type}`)
                .duration(600)
                .EUt(EU);

            if (typeSpecial) {
                assemblyLineRecipe = assemblyLineRecipe.stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder
                        .researchStack(Item.of(`gtceu:${tier1}_${type}`))
                        .EUt(EUtS)
                        .CWUt(cwuS)
                );
            } else {
                assemblyLineRecipe = assemblyLineRecipe.stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder
                        .researchStack(Item.of(`gtceu:${tier1}_${type}`))
                        .EUt(EUtD)
                        .CWUt(cwuD)
                );
            }
        };

        components(
            'electric_motor',
            [
                `kubejs:${tier}_super_magnetic_core`,
                `2x gtceu:long_${primMaterial}_rod`,
                `kubejs:${tier}_transmission_assembly`,
                `64x gtceu:fine_${wireMechanical}_wire`,
                `kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${b2exponentialMultiplier(72)}`,
            ]
        );

        components(
            'electric_pump',
            [
                `gtceu:${tier}_electric_motor`,
                `gtceu:${pipeMaterial}_normal_fluid_pipe`,
                `kubejs:${tier}_microfluidic_flow_valve`,
                `8x gtceu:${supRubber}_ring`,
                `gtceu:${supMaterial}_rotor`,
                `kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${b2exponentialMultiplier(72)}`,
            ]
        );

        components(
            'conveyor_module',
            [
                `2x gtceu:${tier}_electric_motor`,
                `kubejs:${tier}_high_strength_panel`,
                `kubejs:${tier}_precision_drive_mechanism`,
                `4x gtceu:${primMaterial}_ring`,
                `kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`,
                `gtceu:${primRubber} ${scaled(1152)}`,
                `gtceu:${tierFluid} ${b2exponentialMultiplier(72)}`,
            ]
        );

        components(
            'electric_piston',
            [
                `gtceu:${tier}_electric_motor`,
                `2x kubejs:${tier}_high_strength_panel`,
                `1x kubejs:${tier}_transmission_assembly`,
                `gtceu:${supMaterial}_gear`,
                `gtceu:small_${supMaterial}_gear`,
                `kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${b2exponentialMultiplier(72)}`,
            ]
        );

        components(
            'robot_arm',
            [
                `4x gtceu:long_${primMaterial}_rod`,
                `kubejs:${tier}_precision_drive_mechanism`,
                `kubejs:${tier}_transmission_assembly`,
                `gtceu:${tier}_electric_motor`,
                `gtceu:${tier}_electric_piston`,
                `2x kubejs:${tier}_computational_matrix`,
                `2x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${b2exponentialMultiplier(144)}`,
                `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${b2exponentialMultiplier(72)}`,
            ]
        );

        components(
            'field_generator',
            [
                `gtceu:${primMaterial}_frame`,
                `2x kubejs:${tier}_high_strength_panel`,
                `kubejs:${tier}_catalyst_core`,
                `2x gtceu:${tier}_emitter`,
                `1x kubejs:${tier}_computational_matrix`,
                `64x gtceu:fine_${superconductor}_wire`,
                `2x kubejs:${tier}_micropower_router`,
            ],
            [`gtceu:${solder} ${b2exponentialMultiplier(288)}`, `gtceu:${tierFluid} ${b2exponentialMultiplier(72)}`]
        );

        components(
            'emitter',
            [
                `gtceu:${primMaterial}_frame`,
                `gtceu:${tier}_electric_motor`,
                `4x gtceu:long_${primMaterial}_rod`,
                `1x kubejs:${tier}_catalyst_core`,
                `1x kubejs:${tier}_computational_matrix`,
                `64x gtceu:${miscMaterial}_foil`,
                `1x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${b2exponentialMultiplier(144)}`,
                `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${b2exponentialMultiplier(72)}`,
            ]
        );

        components(
            'sensor',
            [
                `gtceu:${primMaterial}_frame`,
                `gtceu:${tier}_electric_motor`,
                `4x gtceu:${primMaterial}_plate`,
                `1x kubejs:${tier}_catalyst_core`,
                `1x kubejs:${tier}_computational_matrix`,
                `64x gtceu:${miscMaterial}_foil`,
                `1x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${b2exponentialMultiplier(144)}`,
                `gtceu:${lubricant} ${b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${b2exponentialMultiplier(72)}`,
            ]
        );

        event.recipes.gtceu
            .assembler(id(`${tier}_fluid_regulator`))
            .itemInputs(`gtceu:${tier}_electric_pump`, `2x #gtceu:circuits/${tier}`)
            .itemOutputs(`gtceu:${tier}_fluid_regulator`)
            .duration(50)
            .EUt(EU * 4)
            .circuit(1);

        const mtscfComponents = (type, inputs, fluids) => {
            event.recipes.gtceu
                .component_synthesis_forge(id(`${tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`${scalerMCSF}x gtceu:${tier}_${type}`)
                .duration(scalerMCSF * 600)
                .stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder
                        .researchStack(Item.of(`gtceu:${tier}_${type}`))
                        .EUt(EU)
                        .CWUt(320)
                )
                .EUt(EU)
                .cleanroom(CleanroomType.getByName('stabilized'));

            event.recipes.gtceu
                .research_station(`1_x_gtceu_${tier}_${type}_mcsf`)
                .itemInputs('start_core:component_data_core')
                .itemInputs(`gtceu:${tier}_${type}`)
                .itemOutputs(
                    Item.of(
                        `start_core:component_data_core`,
                        `{assembly_line_research:{research_id:"1x_gtceu_${tier}_${type}",research_type:"gtceu:component_synthesis_forge"}}`
                    )
                )
                .CWUt(320)
                .totalCWU(384000) // 320 CWU * 60 seconds * 20 ticks
                .EUt(EU);
        };

        mtscfComponents(
            'electric_motor',
            [
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_super_magnetic_core`,
                `${2 * scalerMCSF * 0.75}x gtceu:long_${primMaterial}_rod`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_transmission_assembly`,
                `${1 * scalerMCSF * 0.75}x gtceu:${wireMechanical}_wire_spool`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
            ]
        );

        mtscfComponents(
            'electric_pump',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${1 * scalerMCSF * 0.75}x gtceu:${pipeMaterial}_normal_fluid_pipe`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_microfluidic_flow_valve`,
                `${8 * scalerMCSF * 0.75}x gtceu:${supRubber}_ring`,
                `${1 * scalerMCSF * 0.75}x gtceu:${supMaterial}_rotor`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
            ]
        );

        mtscfComponents(
            'conveyor_module',
            [
                `${2 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_high_strength_panel`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_precision_drive_mechanism`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_ring`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
                `gtceu:${primRubber} ${scalerMCSF * 0.75 * scaled(1152)}`,
                `gtceu:${tierFluid} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
            ]
        );

        mtscfComponents(
            'electric_piston',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${2 * scalerMCSF * 0.75}x kubejs:${tier}_high_strength_panel`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_transmission_assembly`,
                `${1 * scalerMCSF * 0.75}x gtceu:${supMaterial}_gear`,
                `${1 * scalerMCSF * 0.75}x gtceu:small_${supMaterial}_gear`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
            ]
        );

        mtscfComponents(
            'robot_arm',
            [
                `${4 * scalerMCSF * 0.75}x gtceu:long_${primMaterial}_rod`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_precision_drive_mechanism`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_transmission_assembly`,
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_piston`,
                `${2 * scalerMCSF * 0.75}x kubejs:${tier}_computational_matrix`,
                `${2 * scalerMCSF * 0.75}x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(144)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
            ]
        );

        mtscfComponents(
            'field_generator',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${primMaterial}_frame`,
                `${2 * scalerMCSF * 0.75}x kubejs:${tier}_high_strength_panel`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_catalyst_core`,
                `${2 * scalerMCSF * 0.75}x gtceu:${tier}_emitter`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_computational_matrix`,
                `${1 * scalerMCSF * 0.75}x gtceu:${superconductor}_wire_spool`,
                `${2 * scalerMCSF * 0.75}x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(288)}`,
                `gtceu:${tierFluid} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
            ]
        );

        mtscfComponents(
            'emitter',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${primMaterial}_frame`,
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${4 * scalerMCSF * 0.75}x gtceu:long_${primMaterial}_rod`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_catalyst_core`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_computational_matrix`,
                `${1 * scalerMCSF * 0.75}x gtceu:${miscMaterial}_foil_ream`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(144)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
            ]
        );

        mtscfComponents(
            'sensor',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${primMaterial}_frame`,
                `${1 * scalerMCSF * 0.75}x gtceu:${tier}_electric_motor`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_plate`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_catalyst_core`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_computational_matrix`,
                `${1 * scalerMCSF * 0.75}x gtceu:${miscMaterial}_foil_ream`,
                `${1 * scalerMCSF * 0.75}x kubejs:${tier}_micropower_router`,
            ],
            [
                `gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(144)}`,
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
                `gtceu:${tierFluid} ${scalerMCSF * 0.75 * b2exponentialMultiplier(72)}`,
            ]
        );
    };

    componentMaterials('uhv');
    componentMaterials('uev');
    componentMaterials('uiv');
});
