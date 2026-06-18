ServerEvents.recipes((event) => {
    const COILS = [
        'naquadah_coil_block',
        'trinium_coil_block',
        'tritanium_coil_block',
        'zalloy_coil_block',
        'magmada_alloy_coil_block',
        'abyssal_alloy_coil_block',
        'rhenotax_coil',
    ];

    const COILRECYCLEDETAILS = global.coilRecycleDetails;

    function getCoilRecycleOutputs(materials, counts) {
        const checkRecyclingCount = global.checkRecyclingCount;
        let recycleOutputs = [' ', ' ', ' ', ' ', ' ', ' '];

        // checks final outputs
        let tempObj = checkRecyclingCount(counts, 'coil', false, false, false);

        // sorts final outputs
        for (let n = 0; n < 6; n++) {
            if (n < 3) {
                recycleOutputs[n] =
                    `${tempObj.totals[tempObj.outputOrder[n] + 'Count']}x ${materials[tempObj.outputOrder[n] + 'Material']}`;
            } else {
                recycleOutputs[n] = tempObj.blockBools[tempObj.outputOrder[n - 3] + 'Block'];
            }
        }

        return recycleOutputs;
    }

    const arcRecipe = (coil) => {
        const id = global.id;
        const calculateDuration = global.calculateRecyclingDuration;
        const getFinalOutputs = global.getFinalRecycleOutputs;

        if (!COILRECYCLEDETAILS[coil]) return;
        const { materials, counts, prefix } = COILRECYCLEDETAILS[coil];

            // removes old recipes
            event.remove({ input: prefix + coil, type: 'gtceu:arc_furnace' });

        // makes new recipes
        const outputs = getFinalOutputs(getCoilRecycleOutputs(materials, counts), 'coil', false, false);
        event.recipes.gtceu
            .arc_furnace(id(`arc_${coil}`))
            .itemInputs(`${prefix + coil}`)
            .itemOutputs(outputs)
            .duration(calculateDuration(outputs))
            .EUt(GTValues.VA[GTValues.LV])
            .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
    };

    const macRecipe = (coil) => {
        const id = global.id;
        const calculateDuration = global.calculateRecyclingDuration;
        const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
        const getFinalOutputs = global.getFinalRecycleOutputs;

        if (!COILRECYCLEDETAILS[coil]) return;
        const { materials, counts, prefix } = COILRECYCLEDETAILS[coil];

            // removes old recipes
            event.remove({ input: prefix + coil, type: 'gtceu:macerator' });

        // makes new recipes
        const outputs = getFinalOutputs(getCoilRecycleOutputs(materials, counts), 'coil', true, false);
        event.recipes.gtceu
            .macerator(id(`mac_${coil}`))
            .itemInputs(`${prefix + coil}`)
            .itemOutputs(outputs)
            .duration(calculateDuration(outputs))
            .EUt(2 * calculateVoltageMultiplier(outputs))
            .category(GTRecipeCategories.MACERATOR_RECYCLING);
    };

    COILS.forEach((coil) => {
        arcRecipe(coil);
        macRecipe(coil);
    });
});
