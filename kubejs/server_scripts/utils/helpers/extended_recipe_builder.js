// priority: 10000

/** @typedef {internal.com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS} GTRecipeJS */

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

extendedRecipeBuilder.prototype.abyssalRoom = function () {
    this.recipe.cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);
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
 * @property {string} id
 * @property {Range} range
 */

/**
 * @param {RangedIngredientObj[]} inputs
 * @returns
 */
extendedRecipeBuilder.prototype.rangedItemOutputs = function (inputs) {
    inputs.forEach((item) => {
        // validate range:
        if (item.range[0] < 0 || item.range[1] < 0) {
            throw new Error('Range must be non-negative in recipe: ' + this.recipe);
        }
        if (item.range[0] >= item.range[1]) {
            throw new Error('Min range must be less than max range in recipe: ' + this.recipe);
        }
        this.recipe.itemOutputsRanged(item.id, item.range[0], item.range[1]);
    });
    return this;
};

/**
 * @param {boolean} condition
 * @param {(builder: GTRecipeJS) => void} builderTrue
 * @param {(builder: GTRecipeJS) => void} [builderFalse]
 * @returns
 */
extendedRecipeBuilder.prototype.if = function (condition, builderTrue, builderFalse) {
    if (condition) {
        builderTrue(this.recipe);
    } else {
        if (builderFalse !== undefined) builderFalse(this.recipe);
    }
    return this;
};

/**
 * @returns GTRecipeJS
 */
extendedRecipeBuilder.prototype.get = function () {
    return this.recipe;
};

/**
 * @param {internal.com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS} recipe
 */
const $ = (recipe) => new extendedRecipeBuilder(recipe);

global.$ = $;
