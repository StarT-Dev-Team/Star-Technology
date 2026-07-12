// priority: 10000

/**
 * @param {internal.com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS} recipe
 */
function extendedRecipeBuilder(recipe) {
    this.recipe = recipe;
}

extendedRecipeBuilder.prototype.cleanroom = function () {
    this.recipe.cleanroom(CleanroomType.CLEANROOM);
    return this;
};

extendedRecipeBuilder.prototype.sterileCleanroom = function () {
    this.recipe.cleanroom(CleanroomType.STERILE_CLEANROOM);
    return this;
};

extendedRecipeBuilder.prototype.stabilized = function () {
    this.recipe.cleanroom(CleanroomType.getByName('stabilized'));
    return this;
};

/** @typedef {internal.com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder$ScannerRecipeBuilder} ScannerResearchBuilder */

/**
 * @param {(builder: ScannerResearchBuilder) => ScannerResearchBuilder} scannerResearchBuilder
 * @returns
 */
extendedRecipeBuilder.prototype.scannerResearch = function (scannerResearchBuilder) {
    this.recipe['scannerResearch(java.util.function.UnaryOperator)'](scannerResearchBuilder);
    return this;
};

/**
 * @typedef ChancedIngredientObj
 * @property {string} ingredientId
 * @property {number} baseChance
 * @property {number} chanceBoost
 */

/**
 * @param {ChancedIngredientObj[]} inputs
 */
extendedRecipeBuilder.prototype.chancedInputItems = function (inputs) {
    inputs.forEach((item) => {
        this.recipe.chancedInput(item.ingredientId, item.baseChance, item.baseChance);
    });
    return this;
};

/**
 * @param {ChancedIngredientObj[]} inputs
 */
extendedRecipeBuilder.prototype.chancedOutputItems = function (inputs) {
    inputs.forEach((item) => {
        this.recipe.chancedOutput(item.ingredientId, item.baseChance, item.baseChance);
    });
    return this;
};

/**
 * @param {ChancedIngredientObj[]} inputs
 */
extendedRecipeBuilder.prototype.chancedOutputFluids = function (inputs) {
    inputs.forEach((fluid) => {
        this.recipe.chancedFluidOutput(fluid.ingredientId, fluid.baseChance, fluid.baseChance);
    });
    return this;
};

/**
 * @typedef {[number, number]} Range
 */

/**
 * @typedef RangedIngredientObj
 * @property {string} ingredientId
 * @property {Range} range
 */

/**
 * @param {RangedIngredientObj[]} inputs
 * @returns
 */
extendedRecipeBuilder.prototype.rangedItemOutputs = function (inputs) {
    inputs.forEach((item) => {
        this.recipe.itemOutputsRanged(item.ingredientId, item.range[0], item.range[1]);
    });
    return this;
};

/**
 * @param {internal.com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS} recipe
 */
const $ = (recipe) => new extendedRecipeBuilder(recipe);

global.$ = $;
