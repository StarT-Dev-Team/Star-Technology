// priority: 1000

/**
 *
 * @param {GTTier} tier
 * @returns {'ULV' | 'LV' | 'MV' | 'HV' | 'EV' | 'IV' | 'LuV' | 'ZPM' | 'UV' | 'UHV' | 'UEV' | 'UIV' | 'UXV' | 'OpV' | 'MAX'}
 */
global.getRecipeTier = (tier) => {
    const recipeTier = tier === 'luv' ? 'LuV' : tier === 'opv' ? 'OpV' : tier.toUpperCase();
    return /** @type {any} */ (recipeTier);
};

/**
 * @param {number} cwu
 */
global.getDataItem = (cwu) =>
    cwu >= 320
        ? 'start_core:component_data_core'
        : cwu >= 160
          ? 'start_core:data_dna_disk'
          : cwu >= 32
            ? 'gtceu:data_module'
            : 'gtceu:data_orb';

/**
 *
 * @param {Exclude<keyof internal.kjs.RecipeFunctions_gtceu, "shaped">} machineType
 * @param {string} recId
 * @param {string[]} inputsI
 * @param {string[]} inputsF
 * @param {string[]} outputsI
 * @param {number} duration
 * @param {number} cwuT
 * @param {number} totalCWU
 * @param {number} euT
 * @param {string} researched
 */

global.researchBuilder = (
    /* eslint-disable no-unused-vars */
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
) => {};

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
            .EUt(euT)
            .addMaterialInfo(true, true);

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
    framedBlocks: 'framedblocks',
    effortlessBuilding: 'effortlessbuilding',
};

// Auto-generate all the wrapper functions
Object.entries(modRequirements).forEach(([name, mod]) => {
    const mods = Array.isArray(mod) ? mod : [mod];
    /**
     * @param {() => void} ifTrue Function to execute if current mod is loaded'.
     * @param {() => void} ifFalse Function to execute if current mod is NOT loaded'.
     */
    const fn = (ifTrue, ifFalse) => {
        if (mods.every((m) => Platform.isLoaded(m))) {
            if (ifTrue && typeof ifTrue === 'function') {
                ifTrue();
            }
        } else if (ifFalse && typeof ifFalse === 'function') {
            ifFalse();
        }
    };

    /** @type {any} */ (global)[`with${name.substring(0, 1).toLocaleUpperCase() + name.substring(1)}`] = fn;
});

/**
 * Implosion Compressor recipe helper
 * @param {string} id recipe id
 * @param {string} input item input
 * @param {string} output item output
 * @param {number} tier voltage tier
 * @param {number | undefined} durationMultiplier duration multiplier (default 1)
 * @param {internal.dev.latvian.mods.kubejs.recipe.RecipesEventJS} event
 */
const implosionHelper = (id, input, output, tier, durationMultiplier, event) => {
    [
        { name: 'tnt', explosive: '4x minecraft:tnt' },
        { name: 'dynamite', explosive: '2x gtceu:dynamite' },
        { name: 'itnt', explosive: 'gtceu:industrial_tnt' },
        { name: 'powderbarrel', explosive: '8x gtceu:powderbarrel' },
    ].forEach((explosive) => {
        event.recipes.gtceu
            .implosion_compressor(global.id(`${id}_${explosive.name}`))
            .itemInputs(input, explosive.explosive)
            .itemOutputs(output)
            .chancedOutput('gtceu:dark_ash_dust', 2500, 0)
            .duration(20 * (durationMultiplier !== undefined ? durationMultiplier : 1))
            .EUt(GTValues.VHA[tier]);
    });
};

global.implosion = implosionHelper;
