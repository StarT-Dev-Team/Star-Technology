ServerEvents.recipes((event) => {
    const id = global.id;

    // === Ruined Part Duplication ===
    [
        'computational_matrix',
        'transmission_assembly',
        'precision_drive_mechanism',
        'microfluidic_flow_valve',
        'super_magnetic_core',
        'catalyst_core',
        'high_strength_panel',
        'micropower_router',
    ].forEach((type) => {
        event.recipes.gtceu
            .assembler(id(`ruined_${type}_duplication`))
            .itemInputs(
                `kubejs:ruined_${type}`,
                '4x gtceu:dense_enriched_naquadah_plate',
                '1x gtceu:fine_ancient_runicalium_wire'
            )
            .inputFluids('gtceu:naquadria 1440')
            .itemOutputs(`2x kubejs:ruined_${type}`)
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UHV]);
    });

    // === Component Parts ===

    const scalerMCSF = 64; //Should be 16n variant (cap64)

    const COMPONENTS = global.componentMaterials;

    const componentMaterials = (tierKey) => {
        const data = COMPONENTS[tierKey];
        if (!data) return;

        const {
            tiers: { tier, tier1, tier2 },
            materials: {
                tierMaterial,
                primMaterial,
                supMaterial,
                wireMechanical,
                wireCoil,
                pipeCoil,
                tierFluid,
                coolant,
                solder,
                lubricant,
                primRubber,
                supRubber,
                plastic,
                cable,
                catalyst,
                primMagnet,
                supMagnet,
                pipeMaterial,
                glass,
                superconductor,
            },
            scaling: { scaler, EU },
            researchData: {
                default: { cwuD, duraD, EUtD },
                special: { cwuS, duraS, EUtS },
            },
        } = data;

        const b2exponentialMultiplier = (base) => base * Math.pow(2, scaler);
        const scaled = (base) => base * scaler;
        const getDataItem = global.getDataItem;

        const componentPart = (type, inputs, fluids, duration, researched) => {
            let typeSpecial = ['computational_matrix', 'catalyst_core'].includes(type);

            let cpaRecipe = event.recipes.gtceu
                .component_part_assembly(id(`${tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`kubejs:${tier}_${type}`)
                .duration(duration)
                .EUt(EU * 4);

            if (typeSpecial) {
                let dataItem = getDataItem(cwuS);

                cpaRecipe = cpaRecipe.stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder.researchStack(Item.of(researched)).EUt(EUtS).CWUt(cwuS)
                );

                event.recipes.gtceu
                    .research_station(`1_x_${researched.replace(':', '_')}_cpa`)
                    .itemInputs(dataItem)
                    .itemInputs(researched)
                    .itemOutputs(
                        Item.of(
                            `${dataItem}`,
                            `{assembly_line_research:{research_id:"1x_${researched.replace(':', '_')}",research_type:"gtceu:component_part_assembly"}}`
                        )
                    )
                    .CWUt(cwuS)
                    .totalCWU(cwuS * duraS * 20)
                    .EUt(EUtD);
            } else {
                let dataItem = getDataItem(cwuD);

                cpaRecipe = cpaRecipe.stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder.researchStack(Item.of(researched)).EUt(EUtD).CWUt(cwuD)
                );

                event.recipes.gtceu
                    .research_station(`1_x_${researched.replace(':', '_')}_cpa`)
                    .itemInputs(dataItem)
                    .itemInputs(researched)
                    .itemOutputs(
                        Item.of(
                            `${dataItem}`,
                            `{assembly_line_research:{research_id:"1x_${researched.replace(':', '_')}",research_type:"gtceu:component_part_assembly"}}`
                        )
                    )
                    .CWUt(cwuD)
                    .totalCWU(cwuD * duraD * 20)
                    .EUt(EUtD);
            }
        };

        let coilMod = tier == 'uhv' ? 'gtceu' : 'kubejs';

        componentPart(
            'voltage_coil',
            [
                `gtceu:${pipeCoil}_tiny_fluid_pipe`,
                `gtceu:long_magnetic_${primMagnet}_rod`,
                `32x gtceu:fine_${wireCoil}_wire`,
            ],
            [`gtceu:${coolant} ${scaled(250)}`],
            200,
            `${coilMod}:${tier1}_voltage_coil`
        );

        let priorTier = tier == 'uhv' ? 'ruined' : tier1;

        componentPart(
            'computational_matrix',
            [
                `gtceu:${primMaterial}_frame`,
                `1x #gtceu:circuits/${tier}`,
                `2x #gtceu:circuits/${tier1}`,
                `3x #gtceu:circuits/${tier2}`,
                `4x gtceu:${cable}_single_cable`,
                `4x gtceu:${primMaterial}_bolt`,
            ],
            [`gtceu:${solder} ${b2exponentialMultiplier(144)}`],
            400,
            `kubejs:${priorTier}_computational_matrix`
        );

        componentPart(
            'transmission_assembly',
            [
                `gtceu:${tierMaterial}_frame`,
                `gtceu:${tier1}_electric_motor`,
                `2x gtceu:${primMaterial}_rod`,
                `2x gtceu:${primMaterial}_ring`,
                `4x gtceu:${primMaterial}_round`,
                `16x gtceu:fine_${wireMechanical}_wire`,
            ],
            [`gtceu:${lubricant} ${b2exponentialMultiplier(125)}`],
            320,
            `kubejs:${priorTier}_transmission_assembly`
        );

        componentPart(
            'precision_drive_mechanism',
            [
                `gtceu:${primMaterial}_frame`,
                `gtceu:${tier1}_electric_motor`,
                `#gtceu:circuits/${tier1}`,
                `gtceu:${supMaterial}_gear`,
                `gtceu:small_${primMaterial}_gear`,
                `8x gtceu:${primMaterial}_round`,
            ],
            [`gtceu:${lubricant} ${b2exponentialMultiplier(125)}`, `gtceu:${primRubber} ${scaled(576)}`],
            480,
            `kubejs:${priorTier}_precision_drive_mechanism`
        );

        componentPart(
            'microfluidic_flow_valve',
            [
                `gtceu:${tier1}_fluid_regulator`,
                `gtceu:${pipeMaterial}_small_fluid_pipe`,
                `2x gtceu:${primMaterial}_plate`,
                `4x gtceu:${primMaterial}_round`,
                `4x gtceu:${supRubber}_ring`,
                `2x gtceu:${primMaterial}_ring`,
            ],
            [`gtceu:${plastic} ${scaled(144)}`],
            320,
            `kubejs:${priorTier}_microfluidic_flow_valve`
        );

        componentPart(
            'super_magnetic_core',
            [
                `gtceu:long_magnetic_${primMagnet}_rod`,
                `2x gtceu:magnetic_${supMagnet}_rod`,
                `3x gtceu:${primMaterial}_rod`,
                `16x gtceu:fine_${wireMechanical}_wire`,
                `2x gtceu:${pipeMaterial}_tiny_fluid_pipe`,
            ],
            [`gtceu:${coolant} ${scaled(500)}`],
            300,
            `kubejs:${priorTier}_super_magnetic_core`
        );

        componentPart(
            'catalyst_core',
            [
                `4x gtceu:${primMaterial}_rod`,
                glass,
                catalyst,
                `32x gtceu:fine_${superconductor}_wire`,
                `gtceu:${tier1}_emitter`,
                `4x gtceu:${supMaterial}_ring`,
            ],
            [`gtceu:${tierFluid} ${b2exponentialMultiplier(36)}`],
            480,
            `kubejs:${priorTier}_catalyst_core`
        );

        componentPart(
            'high_strength_panel',
            [`gtceu:dense_${primMaterial}_plate`, `#gtceu:circuits/${tier2}`, `4x gtceu:${supMaterial}_screw`],
            [`gtceu:${tierMaterial} 288`, `gtceu:${plastic} ${scaled(144)}`],
            200,
            `kubejs:${priorTier}_high_strength_panel`
        );

        componentPart(
            'micropower_router',
            [
                `4x gtceu:${cable}_double_cable`,
                `2x gtceu:${primMaterial}_plate`,
                `1x #gtceu:circuits/${tier1}`,
                `4x gtceu:${primMaterial}_bolt`,
            ],
            [`gtceu:${primRubber} ${scaled(144)}`],
            240,
            `kubejs:${priorTier}_micropower_router`
        );

        const mtscfComponentPart = (type, inputs, fluids, duration) => {
            event.recipes.gtceu
                .component_part_synthesis_forge(id(`${tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`${scalerMCSF}x kubejs:${tier}_${type}`)
                .duration(duration * scalerMCSF)
                .stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder
                        .researchStack(Item.of(`kubejs:${tier}_${type}`))
                        .EUt(EU)
                        .CWUt(320)
                )
                .EUt(EU)
                .cleanroom(CleanroomType.getByName('stabilized'));

            event.recipes.gtceu
                .research_station(`1_x_kubejs_${tier}_${type}_mcsf`)
                .itemInputs('start_core:component_data_core')
                .itemInputs(`kubejs:${tier}_${type}`)
                .itemOutputs(
                    Item.of(
                        `start_core:component_data_core`,
                        `{assembly_line_research:{research_id:"1x_kubejs_${tier}_${type}",research_type:"gtceu:component_part_synthesis_forge"}}`
                    )
                )
                .CWUt(320)
                .totalCWU(320 * 60 * 20)
                .EUt(EU);
        };

        mtscfComponentPart(
            'voltage_coil',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${pipeCoil}_tiny_fluid_pipe`,
                `${1 * scalerMCSF * 0.75}x gtceu:long_magnetic_${primMagnet}_rod`,
                `${0.5 * scalerMCSF * 0.75}x gtceu:${wireCoil}_wire_spool`,
            ],
            [`gtceu:${coolant} ${scalerMCSF * 0.75 * scaled(250)}`],
            200
        );

        mtscfComponentPart(
            'computational_matrix',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${primMaterial}_frame`,
                `${1 * scalerMCSF * 0.75}x #gtceu:circuits/${tier}`,
                `${2 * scalerMCSF * 0.75}x #gtceu:circuits/${tier1}`,
                `${3 * scalerMCSF * 0.75}x #gtceu:circuits/${tier2}`,
                `${4 * scalerMCSF * 0.75}x gtceu:${cable}_single_cable`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_bolt`,
            ],
            [`gtceu:${solder} ${scalerMCSF * 0.75 * b2exponentialMultiplier(144)}`],
            400
        );

        mtscfComponentPart(
            'transmission_assembly',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${tierMaterial}_frame`,
                `${1 * scalerMCSF * 0.75}x gtceu:${tier1}_electric_motor`,
                `${2 * scalerMCSF * 0.75}x gtceu:${primMaterial}_rod`,
                `${2 * scalerMCSF * 0.75}x gtceu:${primMaterial}_ring`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_round`,
                `${0.25 * scalerMCSF * 0.75}x gtceu:${wireMechanical}_wire_spool`,
            ],
            [`gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`],
            320
        );

        mtscfComponentPart(
            'precision_drive_mechanism',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${primMaterial}_frame`,
                `${1 * scalerMCSF * 0.75}x gtceu:${tier1}_electric_motor`,
                `${1 * scalerMCSF * 0.75}x #gtceu:circuits/${tier1}`,
                `${1 * scalerMCSF * 0.75}x gtceu:${supMaterial}_gear`,
                `${1 * scalerMCSF * 0.75}x gtceu:small_${primMaterial}_gear`,
                `${8 * scalerMCSF * 0.75}x gtceu:${primMaterial}_round`,
            ],
            [
                `gtceu:${lubricant} ${scalerMCSF * 0.75 * b2exponentialMultiplier(125)}`,
                `gtceu:${primRubber} ${scalerMCSF * 0.75 * scaled(576)}`,
            ],
            480
        );

        mtscfComponentPart(
            'microfluidic_flow_valve',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:${tier1}_fluid_regulator`,
                `${1 * scalerMCSF * 0.75}x gtceu:${pipeMaterial}_small_fluid_pipe`,
                `${2 * scalerMCSF * 0.75}x gtceu:${primMaterial}_plate`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_round`,
                `${4 * scalerMCSF * 0.75}x gtceu:${supRubber}_ring`,
                `${2 * scalerMCSF * 0.75}x gtceu:${primMaterial}_ring`,
            ],
            [`gtceu:${plastic} ${scalerMCSF * 0.75 * scaled(144)}`],
            320
        );

        mtscfComponentPart(
            'super_magnetic_core',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:long_magnetic_${primMagnet}_rod`,
                `${2 * scalerMCSF * 0.75}x gtceu:magnetic_${supMagnet}_rod`,
                `${3 * scalerMCSF * 0.75}x gtceu:${primMaterial}_rod`,
                `${0.25 * scalerMCSF * 0.75}x gtceu:${wireMechanical}_wire_spool`,
                `${2 * scalerMCSF * 0.75}x gtceu:${pipeMaterial}_tiny_fluid_pipe`,
            ],
            [`gtceu:${coolant} ${scalerMCSF * 0.75 * scaled(500)}`],
            300
        );

        mtscfComponentPart(
            'catalyst_core',
            [
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_rod`,
                `${scalerMCSF * 0.75}x ${glass}`,
                `${scalerMCSF * 0.75}x ${catalyst.split(' ')[1]}`,
                `${0.5 * scalerMCSF * 0.75}x gtceu:${superconductor}_wire_spool`,
                `${1 * scalerMCSF * 0.75}x gtceu:${tier1}_emitter`,
                `${4 * scalerMCSF * 0.75}x gtceu:${supMaterial}_ring`,
            ],
            [`gtceu:${tierFluid} ${scalerMCSF * 0.75 * b2exponentialMultiplier(36)}`],
            480
        );

        mtscfComponentPart(
            'high_strength_panel',
            [
                `${1 * scalerMCSF * 0.75}x gtceu:dense_${primMaterial}_plate`,
                `${1 * scalerMCSF * 0.75}x #gtceu:circuits/${tier2}`,
                `${4 * scalerMCSF * 0.75}x gtceu:${supMaterial}_screw`,
            ],
            [`gtceu:${tierMaterial} ${scalerMCSF * 0.75 * 288}`, `gtceu:${plastic} ${scalerMCSF * 0.75 * scaled(144)}`],
            200
        );

        mtscfComponentPart(
            'micropower_router',
            [
                `${4 * scalerMCSF * 0.75}x gtceu:${cable}_double_cable`,
                `${2 * scalerMCSF * 0.75}x gtceu:${primMaterial}_plate`,
                `${1 * scalerMCSF * 0.75}x #gtceu:circuits/${tier1}`,
                `${4 * scalerMCSF * 0.75}x gtceu:${primMaterial}_bolt`,
            ],
            [`gtceu:${primRubber} ${scalerMCSF * 0.75 * scaled(144)}`],
            240
        );
    };

    componentMaterials('uhv');
    componentMaterials('uev');
    componentMaterials('uiv');
});
