// priority: 1000

/**
 * Get the recipe/mod namespace prefix for a given tier.
 * @param tier{string} - voltage tier
 * @param forCoreMod{boolean} - appends <code>_core</code> to the result (used for referencing core mod items)
 * @returns {string} - <code>gtceu</code> for voltages at or below uv, <code>start[[_core]]</code> otherwise
 */
global.getPrefixByTier = (tier, forCoreMod) => {
    switch (tier.toLowerCase()) {
        case 'ulv': case 'lv': case 'mv': case 'hv': case 'ev': case 'iv': case 'luv': case 'zpm': case 'uv':
            return 'gtceu';
        default:
            return `start${forCoreMod ? '_core' : ''}`;
    }
};

/**
 * https://github.com/GregTechCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.java#L424
 * @param {string[]} itemOutputs
 * @returns {number}
 */
function calculateRecyclingDuration(itemOutputs) {
  return (
    itemOutputs.reduce((duration, item) => {
      const is = Item.of(item);
      const ms = global.getGtMaterial(is);
      if (!ms) return duration;
      const matDuration = ms.amount() * ms.material().getMass() * is.getCount();
      return duration + matDuration;
    }, 0) / GTValues.M
  );
}

/**
 * https://github.com/GregTechCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.java#L389
 * @param {string[]} itemOutputs
 * @returns {number}
 */
function calculateRecyclingVoltageMultiplier(itemOutputs) {
  const highestTemp = itemOutputs.reduce((temp, item) => {
    const ms = global.getGtMaterial(item);
    if (!ms) return temp;

    let material = ms.material();

    if (
      material.hasFlag(GTMaterialFlags.IS_MAGNETIC) &&
      material.hasProperty(PropertyKey.INGOT)
    ) {
      material = material.getProperty(PropertyKey.INGOT).getSmeltingInto();
    }

    if (!material.hasProperty(PropertyKey.BLAST)) return temp;

    return Math.max(
      temp,
      material.getProperty(PropertyKey.BLAST).getBlastTemperature()
    );
  }, 0);

  if (highestTemp == 0) return 1;
  if (highestTemp < 2000) return 4;
  return 16;
}

global.registerScrapRecyclingRecipe = (event, itemInput, itemOutputs) => {
    event.recipes.gtceu.macerator(global.id(`macerate_${itemInput.split(":")[1]}`))
        .itemInputs(`${itemInput}`)
        .itemOutputs(itemOutputs)
        .duration(calculateRecyclingDuration(itemOutputs))
        .EUt(2 * calculateRecyclingVoltageMultiplier(itemOutputs))
        .category(GTRecipeCategories.MACERATOR_RECYCLING);
};

global.registerPlasmaRecyclingRecipe = (event, itemInput, itemOutputs) => {
    event.recipes.gtceu.arc_furnace(global.id(`arc_${itemInput.split(":")[1]}`))
        .itemInputs(`${itemInput}`)
        .itemOutputs(itemOutputs)
        .duration(calculateRecyclingDuration(itemOutputs))
        .EUt(GTValues.VA[GTValues.LV])
        .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
};
