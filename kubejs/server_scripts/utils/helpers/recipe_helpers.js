// priority: 1000

/**
 * https://github.com/primchCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.javatotalCounts.valueCount += componentRecycleCounts.value.primCount;
 * totalCounts.valueCount cableCount componentRecycleCounts.value.cableCount;
 * totalCounts.valueCount += wireounts.value.wireCount;
 * totalCounts.valueCount += foilnentRecycleCounts.value.foilCountL424
 * @param {string[]} itemOutputs
 * @returns {number}
 */
global.calculateRecyclingDuration = (itemOutputs) => {
    return (
        itemOutputs.reduce((duration, item) => {
            const is = Item.of(item);
            const ms = global.getGtMaterial(is);
            if (!ms) return duration;
            const matDuration = ms.amount() * ms.material().getMass() * is.getCount();
            return duration + matDuration;
        }, 0) / GTValues.M
    );
};

/**
 * https://github.com/primchCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.javatotalCounts.valueCount += componentRecycleCounts.value.primCount;
 * totalCounts.valueCount cableCount componentRecycleCounts.value.cableCount;
 * totalCounts.valueCount += wireounts.value.wireCount;
 * totalCounts.valueCount += foilnentRecycleCounts.value.foilCountL389
 * @param {string[]} itemOutputs
 * @returns {number}
 */
global.calculateRecyclingVoltageMultiplier = (itemOutputs) => {
    const highestTemp = itemOutputs.reduce((temp, item) => {
        const ms = global.getGtMaterial(item);
        if (!ms) return temp;

        let material = ms.material();

        if (material.hasFlag(GTMaterialFlags.IS_MAGNETIC) && material.hasProperty(PropertyKey.INGOT)) {
            material = material.getProperty(PropertyKey.INGOT).getSmeltingInto();
        }

        if (!material.hasProperty(PropertyKey.BLAST)) return temp;

        return Math.max(temp, material.getProperty(PropertyKey.BLAST).getBlastTemperature());
    }, 0);

    if (highestTemp === 0) return 1;
    if (highestTemp < 2000) return 4;
    return 16;
};

// breaks components down into their base materials
global.getComponentTotal = (components, tierBracket) => {
    const componentRecycleCounts =
        tierBracket === 'UHVPLUS' ? global.UHVPlusComponentRecycleCounts : global.LUVToUVComponentRecycleCounts;
    const totalCountsTypes =
        tierBracket === 'UHVPLUS'
            ? ['primCount', 'cableCount', 'secCount', 'tertCount']
            : ['primCount', 'cableCount', 'wireCount', 'foilCount'];
    let totalCounts = {};

    totalCountsTypes.forEach((type) => {
        totalCounts[type] = 0;
    });

    components.forEach((component) => {
        totalCountsTypes.forEach((type) => {
            totalCounts[type] += componentRecycleCounts[component][type];
        });
    });

    totalCountsTypes.forEach((type) => {
        totalCounts[type] = Math.floor(totalCounts[type]);
    });

    return totalCounts;
};

function compareNumbers(a, b) {
    return b - a;
}
// checks if input value is too big for one output slot, then breaks down into block form
global.checkRecyclingCount = (tempTotals, blockType, auxCoilBool, casingBool, fusionCasingBool) => {
    let finalOutput = {
        blockBools: {},
        totals: {},
        outputOrder: [],
    };
    let finalOutputTypes = [];
    let toBeSorted = [];

    if (blockType === 'singleblock_UHVPLUS' || blockType === 'parallel_hatch_UHVPLUS') {
        finalOutputTypes = casingBool ? ['casing', 'prim', 'cable', 'sec', 'tert'] : ['prim', 'cable', 'sec', 'tert'];
    } else if (blockType === 'singleblock_LUVToUV' || blockType === 'parallel_hatch_LUVToUV') {
        finalOutputTypes = casingBool ? ['casing', 'prim', 'cable', 'wire', 'foil'] : ['prim', 'cable', 'wire', 'foil'];
    } else if (blockType === 'coil') {
        finalOutputTypes = ['frame', 'wire', 'foil'];
    } else if (blockType === 'fusion_casing_UHVPLUS') {
        finalOutputTypes = ['casing', 'prim', 'cable', 'hullCable', 'sec'];
    } else if (blockType === 'fusion_casing_LUVToUV') {
        finalOutputTypes = ['casing', 'prim', 'cable', 'hullCable', 'wire'];
    } else if (blockType === 'fusion_coil_UHVPLUS') {
        finalOutputTypes = ['plate', 'prim', 'cable', 'sec', 'tert'];
    } else if (blockType === 'fusion_coil_LUVToUV') {
        finalOutputTypes = ['plate', 'prim', 'cable', 'wire', 'foil'];
    }

    let position = 0;
    finalOutputTypes.forEach((type) => {
        toBeSorted[position] = tempTotals[type + 'Count'];
        finalOutput.blockBools[type + 'Block'] = false;
        finalOutput.totals[type + 'Count'] = 0;
        position++;
    });

    for (let x = 0; x < finalOutputTypes.length - 1; x++) {
        finalOutput.outputOrder[x] = '';
    }

    // orders outputs by size
    let knownPositions = [];
    let material;
    let found;
    let n;

    let sorted = Array.from(toBeSorted);
    sorted.sort(compareNumbers);

    let iMax = casingBool ? 5 : 4;
    for (let i = 0; i < iMax; i++) {
        // gets what material is in said position
        material = finalOutputTypes[i];

        // finds which location the material is in
        found = false;
        n = 0;
        while (!found) {
            if (toBeSorted[i] === sorted[n]) {
                if (knownPositions.includes(n)) {
                    // counters duplicate output nums
                    n++;
                } else {
                    knownPositions.push(n);
                    finalOutput.outputOrder[n] = material;
                    found = true;
                }
            } else {
                n++;
            }
        }
    }

    // sets final values
    finalOutputTypes.forEach((type) => {
        // reduces fusion coil/casing outputs to the actual value
        if (type === 'casing') {
            finalOutput.totals[type + 'Count'] = tempTotals[type + 'Count'];
        } else {
            if (auxCoilBool) {
                tempTotals[type + 'Count'] = Math.floor(tempTotals[type + 'Count'] / 3);
            }
            if (fusionCasingBool) {
                tempTotals[type + 'Count'] = Math.floor(tempTotals[type + 'Count'] / 2);
            }

            // checks if item should be changed to block form
            if (tempTotals[type + 'Count'] > 64) {
                finalOutput.blockBools[type + 'Block'] = true;
                finalOutput.totals[type + 'Count'] = Math.floor(tempTotals[type + 'Count'] / 9);
            } else {
                finalOutput.totals[type + 'Count'] = tempTotals[type + 'Count'];
            }
        }
    });
    return finalOutput;
};

//gives ending parameters to the outputs dependent on whether the output is a block or not
global.getFinalRecycleOutputs = (outputs, blockType, macBool, specialBool) => {
    let finalOutputs = [];
    let blockBools;
    let blockBoolStartPos;
    let len = outputs.length - 1;

    //gets the booleans out of the end of the outputs array
    if (
        blockType === 'singleblock' ||
        blockType === 'fusion_casing' ||
        blockType === 'fusion_coil' ||
        blockType === 'parallel_hatch'
    ) {
        blockBoolStartPos = len - 3;
        blockBools = [outputs[len - 3], outputs[len - 2], outputs[len - 1], outputs[len]];
    } else if (blockType === 'coil') {
        blockBoolStartPos = len - 2;
        blockBools = [outputs[len - 2], outputs[len - 1], outputs[len]];
    }

    //macerator
    if (macBool) {
        if (specialBool) {
            for (let x = 0; x < 5; x++) {
                if (outputs[x] === 'gtceu:graphite_dust') {
                    finalOutputs[x] = outputs[x];
                } else if (outputs[x] !== ' ') {
                    finalOutputs[x] = `${outputs[x]}_dust`;
                }
            }
        } else {
            //adds end sig to every output
            for (let x = 0; x < blockBoolStartPos; x++) {
                //if item is a block
                if (blockBools[x]) {
                    finalOutputs[x] = `${outputs[x]}_dust_block`;
                }
                //if not
                else {
                    finalOutputs[x] = `${outputs[x]}_dust`;
                }
            }
        }
    }
    //arc furnace
    else {
        if (specialBool) {
            //adds end sig to every output
            for (let x = 0; x < 5; x++) {
                //if single = arc furnace leave as is
                if (outputs[x] === 'gtceu:graphite_dust' || outputs[x] === '7x gtceu:tiny_ash_dust') {
                    finalOutputs[x] = outputs[x];
                }
                //if not empty
                else if (outputs[x] !== ' ') {
                    finalOutputs[x] = `${outputs[x]}_ingot`;
                }
            }
        } else {
            //adds end sig to every output
            for (let x = 0; x < blockBoolStartPos; x++) {
                //if item is a block
                if (blockBools[x]) {
                    finalOutputs[x] = `${outputs[x]}_block`;
                }
                //if not
                else {
                    finalOutputs[x] = `${outputs[x]}_ingot`;
                }
            }
        }
    }

    return finalOutputs;
};

global.getRecipeTier = (tier) => {
    const recipeTier = tier === 'luv' ? 'LuV' : tier === 'opv' ? 'OpV' : tier.toUpperCase();

    return recipeTier;
};

global.getDataItem = (cwu) =>
    cwu >= 320
        ? 'start_core:component_data_core'
        : cwu >= 160
          ? 'start_core:data_dna_disk'
          : cwu >= 32
            ? 'gtceu:data_module'
            : 'gtceu:data_orb';

ServerEvents.recipes((event) => {
    global.researchBuilder = (
        machineType,
        recId,
        inputsI,
        inputsF,
        outputsI,
        duration,
        cwuT,
        totalCWU,
        euT,
        researched
    ) => {
        const dataItem = global.getDataItem(cwuT);
        const id = global.id;

        let mainRecipe = event.recipes.gtceu[machineType](id(recId));

        if (inputsI) {
            mainRecipe.itemInputs(inputsI);
        }
        if (inputsF) {
            mainRecipe.inputFluids(inputsF);
        }
        if (outputsI) {
            mainRecipe.itemOutputs(outputsI);
        }

        mainRecipe
            .duration(duration)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder.researchStack(Item.of(researched)).CWUt(cwuT).EUt(euT)
            )
            .EUt(euT);

        event.recipes.gtceu
            .research_station(`1_x_${researched.replace(':', '_')}`)
            .itemInputs(dataItem)
            .itemInputs(researched)
            .itemOutputs(
                Item.of(
                    `${dataItem}`,
                    `{assembly_line_research:{research_id:"1x_${researched.replace(':', '_')}",research_type:"gtceu:${machineType}"}}`
                )
            )
            .CWUt(cwuT)
            .totalCWU(totalCWU)
            .EUt(euT);
    };
});

const modRequirements = {
    architectsPalette: 'architects_palette',
    xycraftWorld: 'xycraft_world',
    chipped: 'chipped',
    framedblocks: 'framedblocks',
    effortlessbuilding: 'effortlessbuilding',
};

// Auto-generate all the wrapper functions
// Similar to the packmode helpers
Object.entries(modRequirements).forEach(([name, mod]) => {
    const mods = Array.isArray(mod) ? mod : [mod];
    /**
     * @param {function} ifTrue - Function to execute if current mod is loaded'.
     * @param {function} ifFalse - Function to execute if current mod is NOT loaded'.
     */
    global[`with_${name}`] = (ifTrue, ifFalse) => {
        if (mods.every((m) => Platform.isLoaded(m))) {
            if (ifTrue && typeof ifTrue === 'function') {
                ifTrue();
            }
        } else if (ifFalse && typeof ifFalse === 'function') {
            ifFalse();
        }
    };
});
