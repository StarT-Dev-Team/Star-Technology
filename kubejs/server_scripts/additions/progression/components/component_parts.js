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
                default: { cwuD, duraD, EUTD },
                special: { cwuS, duraS, EUTS },
            },
        } = data;

        const b2exponentialMultiplier = (base) => base * Math.pow(2, scaler);
        const scaled = (base) => base * scaler;
        const getDataItem = global.getDataItem;

        const componentPart = (type, items, fluids, duration, researched) => {
            const typeSpecial = ['computational_matrix', 'catalyst_core'].includes(type);

            const cpaItems = items.map((itemObj) => {
                return `${itemObj.count}x ${itemObj.itemId}`;
            });

            const cpaFluids = fluids.map((fluidObj) => {
                return `${fluidObj.fluidId} ${fluidObj.amount}`;
            });

            let cpaRecipe = event.recipes.gtceu
                .component_part_assembly(id(`${tier}_${type}`))
                .itemInputs(cpaItems)
                .inputFluids(cpaFluids)
                .itemOutputs(`kubejs:${tier}_${type}`)
                .duration(duration)
                .EUt(EU * 4);

            let dataItem = getDataItem(typeSpecial ? cwuS : cwuD);

            cpaRecipe = cpaRecipe.stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(researched))
                    .EUt(typeSpecial ? EUTS : EUTD)
                    .CWUt(typeSpecial ? cwuS : cwuD)
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
                .CWUt(typeSpecial ? cwuS : cwuD)
                .totalCWU(typeSpecial ? cwuS : cwuD * typeSpecial ? duraS : duraD * 20)
                .EUt(typeSpecial ? EUTS : EUTD);

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
                .component_part_synthesis_forge(id(`${tier}_${type}`))
                .itemInputs(mtscfItems)
                .inputFluids(mtscfFluids)
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
                        'start_core:component_data_core',
                        `{assembly_line_research:{research_id:"1x_kubejs_${tier}_${type}",research_type:"gtceu:component_part_synthesis_forge"}}`
                    )
                )
                .CWUt(320)
                .totalCWU(320 * 60 * 20)
                .EUt(EU);
        };

        componentPart(
            'voltage_coil',
            [
                { count: 1, itemId: `gtceu:${pipeCoil}_tiny_fluid_pipe` },
                { count: 1, itemId: `gtceu:long_magnetic_${primMagnet}_rod` },
                { count: 32, itemId: `gtceu:fine_${wireCoil}_wire` },
            ],
            [{ amount: scaled(250), fluidId: `gtceu:${coolant}` }],
            200,
            `${tier === 'uhv' ? 'gtceu' : 'kubejs'}:${tier1}_voltage_coil`
        );

        let priorTier = tier === 'uhv' ? 'ruined' : tier1;

        componentPart(
            'computational_matrix',
            [
                { count: 1, itemId: `gtceu:${primMaterial}_frame` },
                { count: 1, itemId: `#gtceu:circuits/${tier}` },
                { count: 2, itemId: `#gtceu:circuits/${tier1}` },
                { count: 3, itemId: `#gtceu:circuits/${tier2}` },
                { count: 4, itemId: `gtceu:${cable}_single_cable` },
                { count: 4, itemId: `gtceu:${primMaterial}_bolt` },
            ],
            [{ amount: b2exponentialMultiplier(144), fluidId: `gtceu:${solder}` }],
            400,
            `kubejs:${priorTier}_computational_matrix`
        );

        componentPart(
            'transmission_assembly',
            [
                { count: 1, itemId: `gtceu:${tierMaterial}_frame` },
                { count: 1, itemId: `gtceu:${tier1}_electric_motor` },
                { count: 2, itemId: `gtceu:${primMaterial}_rod` },
                { count: 2, itemId: `gtceu:${primMaterial}_ring` },
                { count: 4, itemId: `gtceu:${primMaterial}_round` },
                { count: 16, itemId: `gtceu:fine_${wireMechanical}_wire` },
            ],
            [{ amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` }],
            320,
            `kubejs:${priorTier}_transmission_assembly`
        );

        componentPart(
            'precision_drive_mechanism',
            [
                { count: 1, itemId: `gtceu:${primMaterial}_frame` },
                { count: 1, itemId: `gtceu:${tier1}_electric_motor` },
                { count: 1, itemId: `#gtceu:circuits/${tier1}` },
                { count: 1, itemId: `gtceu:${supMaterial}_gear` },
                { count: 1, itemId: `gtceu:small_${primMaterial}_gear` },
                { count: 8, itemId: `gtceu:${primMaterial}_round` },
            ],
            [
                { amount: b2exponentialMultiplier(125), fluidId: `gtceu:${lubricant}` },
                { amount: scaled(576), fluidId: `gtceu:${primRubber}` },
            ],
            480,
            `kubejs:${priorTier}_precision_drive_mechanism`
        );

        componentPart(
            'microfluidic_flow_valve',
            [
                { count: 1, itemId: `gtceu:${tier1}_fluid_regulator` },
                { count: 1, itemId: `gtceu:${pipeMaterial}_small_fluid_pipe` },
                { count: 2, itemId: `gtceu:${primMaterial}_plate` },
                { count: 4, itemId: `gtceu:${primMaterial}_round` },
                { count: 4, itemId: `gtceu:${supRubber}_ring` },
                { count: 2, itemId: `gtceu:${primMaterial}_ring` },
            ],
            [{ amount: scaled(144), fluidId: `gtceu:${plastic}` }],
            320,
            `kubejs:${priorTier}_microfluidic_flow_valve`
        );

        componentPart(
            'super_magnetic_core',
            [
                { count: 1, itemId: `gtceu:long_magnetic_${primMagnet}_rod` },
                { count: 2, itemId: `gtceu:magnetic_${supMagnet}_rod` },
                { count: 3, itemId: `gtceu:${primMaterial}_rod` },
                { count: 16, itemId: `gtceu:fine_${wireMechanical}_wire` },
                { count: 2, itemId: `gtceu:${pipeMaterial}_tiny_fluid_pipe` },
            ],
            [{ amount: scaled(500), fluidId: `gtceu:${coolant}` }],
            300,
            `kubejs:${priorTier}_super_magnetic_core`
        );

        componentPart(
            'catalyst_core',
            [
                { count: 4, itemId: `gtceu:${primMaterial}_rod` },
                { count: 1, itemId: glass },
                { count: tier === 'uhv' || tier === 'uev' ? 2 : 1, itemId: catalyst.split(' ')[1] },
                { count: 32, itemId: `gtceu:fine_${superconductor}_wire` },
                { count: 1, itemId: `gtceu:${tier1}_emitter` },
                { count: 4, itemId: `gtceu:${supMaterial}_ring` },
            ],
            [{ amount: b2exponentialMultiplier(36), fluidId: `gtceu:${tierFluid}` }],
            480,
            `kubejs:${priorTier}_catalyst_core`
        );

        componentPart(
            'high_strength_panel',
            [
                { count: 1, itemId: `gtceu:dense_${primMaterial}_plate` },
                { count: 1, itemId: `#gtceu:circuits/${tier2}` },
                { count: 4, itemId: `gtceu:${supMaterial}_screw` },
            ],
            [
                { amount: 288, fluidId: `gtceu:${tierMaterial} 288` },
                { amount: scaled(144), fluidId: `gtceu:${plastic}` },
            ],
            200,
            `kubejs:${priorTier}_high_strength_panel`
        );

        componentPart(
            'micropower_router',
            [
                { count: 4, itemId: `gtceu:${cable}_double_cable` },
                { count: 2, itemId: `gtceu:${primMaterial}_plate` },
                { count: 1, itemId: `#gtceu:circuits/${tier1}` },
                { count: 4, itemId: `gtceu:${primMaterial}_bolt` },
            ],
            [{ amount: scaled(144), fluidId: `gtceu:${primRubber}` }],
            240,
            `kubejs:${priorTier}_micropower_router`
        );
    };

    componentMaterials('uhv');
    componentMaterials('uev');
    componentMaterials('uiv');
});
