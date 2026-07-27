ServerEvents.recipes((event) => {
    const CASINGS = [
        'fusion_casing',
        'fusion_casing_mk2',
        'fusion_casing_mk3',
        'auxiliary_boosted_fusion_casing_mk1',
        'fusion_casing_mk4',
        'auxiliary_boosted_fusion_casing_mk2',
    ];
    const CASINGDETAILS = global.fusionCasingDetails;

    //old recipe removals
    event.remove({ input: /gtceu:.*fusion_casing.*/, type: 'gtceu:macerator' });
    event.remove({ input: /gtceu:.*fusion_casing.*/, type: 'gtceu:arc_furnace' });

    function getFusionCasingRecycleOutputs(fieldGeneratorTier, casingTier) {
        const componentRecycles = global.componentRecycleMaterials;
        const checkRecyclingCount = global.checkRecyclingCount;
        const casingMaterials = global.casingMaterials;
        let materials = {};
        let tempTotals = {};
        let recycleOutputs = [];
        let materialTypes;
        let componentCounts;
        let blockType;

        if (fieldGeneratorTier === 'iv') {
            //iv
            recycleOutputs = [
                '4x gtceu:rhodium_plated_palladium',
                '4x gtceu:samarium_iron_arsenic_oxide',
                '2x gtceu:tungsten_steel',
                /*fake blockBools*/ false,
                false,
                false,
                false,
            ];
            return recycleOutputs;
        } else if (fieldGeneratorTier === 'luv' || fieldGeneratorTier === 'zpm' || fieldGeneratorTier === 'uv') {
            //LUVToUV
            componentCounts = global.LUV_TO_UV_COMPONENT_RECYCLING_COUNTS.field_generator;
            blockType = 'fusion_casing_LUVToUV';
            materialTypes = ['casing', 'prim', 'cable', 'hullCable', 'wire'];
        } else {
            //UHVPlus
            componentCounts = global.UHV_PLUS_COMPONENT_RECYCLE_COUNTS.field_generator;
            blockType = 'fusion_casing_UHVPLUS';
            materialTypes = ['casing', 'prim', 'cable', 'hullCable', 'sec'];
        }

        materialTypes.forEach((type) => {
            if (type === 'casing') {
                tempTotals[type + 'Count'] = 8;
                materials[type + 'Material'] = casingMaterials[casingTier];
            } else if (type === 'hullCable') {
                tempTotals[type + 'Count'] = 1;
                materials[type + 'Material'] = componentRecycles[casingTier][type + 'Material'];
            } else {
                tempTotals[type + 'Count'] = componentCounts[type + 'Count'];
                materials[type + 'Material'] = componentRecycles[fieldGeneratorTier][type + 'Material'];
            }
        });

        // gets the final outputs
        let tempObj = checkRecyclingCount(tempTotals, blockType, false, true, true);

        // sorts the final outputs
        let checkCount = 0;
        let position = 0;
        let flag = false;

        while (!flag) {
            if (checkCount === 4) {
                flag = true;
            }
            if (tempObj.totals[tempObj.outputOrder[position] + 'Count'] !== 0) {
                recycleOutputs[position] =
                    `${tempObj.totals[tempObj.outputOrder[position] + 'Count']}x ${materials[tempObj.outputOrder[position] + 'Material']}`;
                position++;
            }

            checkCount++;
        }

        // sets the blockBools
        for (let n = 0; n < 4; n++) {
            recycleOutputs.push(tempObj.blockBools[tempObj.outputOrder[n] + 'Block']);
        }

        return recycleOutputs;
    }

    const arcRecipe = (name, prefix, fieldGeneratorTier, casingTier) => {
        const id = global.id;
        const calculateDuration = global.calculateRecyclingDuration;
        const getFinalOutputs = global.getFinalRecycleOutputs;
        const outputs = getFinalOutputs(
            getFusionCasingRecycleOutputs(fieldGeneratorTier, casingTier),
            'fusion_casing',
            false,
            false
        );

        event.recipes.gtceu
            .arc_furnace(id(`arc_${name}`))
            .itemInputs(`${prefix}${name}`)
            .itemOutputs(outputs)
            .duration(calculateDuration(outputs))
            .EUtVA(LV)
            .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
    };

    const macRecipe = (name, prefix, fieldGeneratorTier, casingTier) => {
        const id = global.id;
        const calculateDuration = global.calculateRecyclingDuration;
        const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
        const getFinalOutputs = global.getFinalRecycleOutputs;
        const outputs = getFinalOutputs(
            getFusionCasingRecycleOutputs(fieldGeneratorTier, casingTier),
            'fusion_casing',
            true,
            false
        );

        event.recipes.gtceu
            .macerator(id(`macerate_${name}`))
            .itemInputs(`${prefix}${name}`)
            .itemOutputs(outputs)
            .duration(calculateDuration(outputs))
            .EUt(2 * calculateVoltageMultiplier(outputs))
            .category(GTRecipeCategories.MACERATOR_RECYCLING);
    };

    const casingDetails = (casingKey) => {
        const data = CASINGDETAILS[casingKey];
        if (!data) return;

        const { name, prefix, fieldGeneratorTier, casingTier } = data;

        arcRecipe(name, prefix, fieldGeneratorTier, casingTier);
        macRecipe(name, prefix, fieldGeneratorTier, casingTier);
    };

    CASINGS.forEach((casing) => {
        casingDetails(casing);
    });
});
