ServerEvents.recipes((event) => {
    const TIERS = ['luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv'];

    const COMPONENTS = [
        'sensor',
        'emitter',
        'field_generator',
        'robot_arm',
        'electric_piston',
        'conveyor_module',
        'fluid_regulator',
        'electric_pump',
        'electric_motor',
    ];

    function getComponentOutputs(tier, component) {
        const checkRecyclingCount = global.checkRecyclingCount;
        let recycleOutputs = [];
        let countTypes = [];
        let details;
        let tierBracket;

        if (tier === 'luv' || tier === 'zpm' || tier === 'uv') {
            countTypes = ['primCount', 'cableCount', 'wireCount', 'foilCount'];
            details = {
                totals: global.LUV_TO_UV_COMPONENT_RECYCLING_COUNTS[component],
                materials: global.componentRecycleMaterials[tier],
            };
            tierBracket = 'LUVToUV';
        } else {
            countTypes = ['primCount', 'cableCount', 'secCount', 'tertCount'];
            details = {
                totals: global.UHV_PLUS_COMPONENT_RECYCLE_COUNTS[component],
                materials: global.componentRecycleMaterials[tier],
            };
            tierBracket = 'UHVPLUS';
        }

        countTypes.forEach((type) => {
            details.totals[type] = Math.floor(details.totals[type]);
        });

        // checks the final outputs
        let tempObj = checkRecyclingCount(details.totals, `singleblock_${tierBracket}`, false, false, false);

        // sorts the final outputs
        let checkCount = 0;
        let flag = false;

        while (!flag) {
            if (checkCount === 3) {
                flag = true;
            }
            if (tempObj.totals[tempObj.outputOrder[checkCount] + 'Count'] !== 0) {
                recycleOutputs.push(
                    `${tempObj.totals[tempObj.outputOrder[checkCount] + 'Count']}x ${details.materials[tempObj.outputOrder[checkCount] + 'Material']}`
                );
            }

            checkCount++;
        }

        // sets the blockBools
        for (let n = 0; n < 4; n++) {
            recycleOutputs.push(tempObj.blockBools[tempObj.outputOrder[n] + 'Block']);
        }

        return recycleOutputs;
    }

    const arcRecipe = (tier, component) => {
        const id = global.id;
        const calculateDuration = global.calculateRecyclingDuration;
        const getFinalOutputs = global.getFinalRecycleOutputs;

        //old recipe removals
        event.remove({ input: `gtceu:${tier}_${component}`, type: 'gtceu:arc_furnace' });

        const outputs = getFinalOutputs(getComponentOutputs(tier, component), 'singleblock', false, false);

        event.recipes.gtceu
            .arc_furnace(id(`arc_${tier}_${component}`))
            .itemInputs(`gtceu:${tier}_${component}`)
            .itemOutputs(outputs)
            .duration(calculateDuration(outputs))
            .EUt(GTValues.VA[GTValues.LV])
            .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
    };

    const macRecipe = (tier, component) => {
        const id = global.id;
        const calculateDuration = global.calculateRecyclingDuration;
        const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
        const getFinalOutputs = global.getFinalRecycleOutputs;

        //old recipe removals
        event.remove({ input: `gtceu:${tier}_${component}`, type: 'gtceu:macerator' });

        const outputs = getFinalOutputs(getComponentOutputs(tier, component), 'singleblock', true, false);

        event.recipes.gtceu
            .macerator(id(`macerate_${tier}_${component}`))
            .itemInputs(`gtceu:${tier}_${component}`)
            .itemOutputs(outputs)
            .duration(calculateDuration(outputs))
            .EUt(2 * calculateVoltageMultiplier(outputs))
            .category(GTRecipeCategories.MACERATOR_RECYCLING);
    };

    TIERS.forEach((tier) => {
        COMPONENTS.forEach((component) => {
            arcRecipe(tier, component);
            macRecipe(tier, component);
        });
    });
});
