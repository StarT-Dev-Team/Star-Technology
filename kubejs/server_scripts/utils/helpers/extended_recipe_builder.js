// priority: 10000

let extendedRecipeBuilder = /** @type {typeof internal.kjs.start.ExtendedRecipeBuilderDefinition} */ (
    /** @type {any} */ (
        /** @param {internal.com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS} recipe */
        function extendedRecipeBuilder(recipe) {
            this.recipe = recipe;
        }
    )
);

extendedRecipeBuilder.prototype.cleanroom = /** @type {typeof extendedRecipeBuilder.prototype.cleanroom} */ (
    function () {
        this.recipe.cleanroom(CleanroomType.CLEANROOM);
        return this;
    }
);

extendedRecipeBuilder.prototype.sterileCleanroom =
    /** @type {typeof extendedRecipeBuilder.prototype.sterileCleanroom} */ (
        function () {
            this.recipe.cleanroom(CleanroomType.STERILE_CLEANROOM);
            return this;
        }
    );

extendedRecipeBuilder.prototype.stabilized = /** @type {typeof extendedRecipeBuilder.prototype.stabilized} */ (
    function () {
        this.recipe.cleanroom(CleanroomType.getByName('stabilized'));
        return this;
    }
);

extendedRecipeBuilder.prototype.abyssalRoom = /** @type {typeof extendedRecipeBuilder.prototype.abyssalRoom} */ (
    function () {
        this.recipe.cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);
        return this;
    }
);

extendedRecipeBuilder.prototype.scannerResearch =
    /** @type {typeof extendedRecipeBuilder.prototype.scannerResearch} */ (
        function (scannerResearchBuilder) {
            this.recipe['scannerResearch(java.util.function.UnaryOperator)'](scannerResearchBuilder);
            return this;
        }
    );

extendedRecipeBuilder.prototype.chancedInputItems =
    /** @type {typeof extendedRecipeBuilder.prototype.chancedInputItems} */ (
        function (inputs) {
            inputs.forEach((item) => {
                this.recipe.chancedInput(item.ingredientId, item.baseChance, item.baseChance);
            });
            return this;
        }
    );

extendedRecipeBuilder.prototype.chancedOutputItems =
    /** @type {typeof extendedRecipeBuilder.prototype.chancedOutputItems} */ (
        function (outputs) {
            outputs.forEach((item) => {
                this.recipe.chancedOutput(item.ingredientId, item.baseChance, item.baseChance);
            });
            return this;
        }
    );

extendedRecipeBuilder.prototype.chancedOutputFluids =
    /** @type {typeof extendedRecipeBuilder.prototype.chancedOutputFluids} */ (
        function (outputs) {
            outputs.forEach((fluid) => {
                this.recipe.chancedFluidOutput(fluid.ingredientId, fluid.baseChance, fluid.baseChance);
            });
            return this;
        }
    );

extendedRecipeBuilder.prototype.rangedItemOutputs =
    /** @type {typeof extendedRecipeBuilder.prototype.rangedItemOutputs} */ (
        function (outputs) {
            outputs.forEach((item) => {
                // validate range and normalize as a fail-safe
                if (item.range[0] < 0 || item.range[1] < 0) {
                    console.error('Range must be non-negative in recipe: ' + this.recipe);
                    item.range[0] = item.range[0] < 0 ? 0 : item.range[0];
                    item.range[1] = item.range[0] < 0 ? 16 : item.range[1];
                }
                if (item.range[0] === item.range[1]) {
                    console.error('Min range must be less than max range in recipe: ' + this.recipe);
                    item.range[1] += 16;
                }
                if (item.range[0] > item.range[1]) {
                    console.error('Min range must be less than max range in recipe: ' + this.recipe);
                    let temp = item.range[0];
                    item.range[0] = item.range[1];
                    item.range[1] = temp;
                }
                this.recipe.itemOutputsRanged(item.id, item.range[0], item.range[1]);
            });
            return this;
        }
    );

extendedRecipeBuilder.prototype.if = /** @type {typeof extendedRecipeBuilder.prototype.if} */ (
    function (condition, builderTrue, builderFalse) {
        if (condition) {
            builderTrue(this.recipe);
        } else if (builderFalse !== undefined) {
            builderFalse(this.recipe);
        }
        return this;
    }
);

extendedRecipeBuilder.prototype.get = /** @type {typeof extendedRecipeBuilder.prototype.get} */ (
    function () {
        return this.recipe;
    }
);

/**
 * @param {internal.com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS} recipe
 */
const $ = (recipe) => new extendedRecipeBuilder(recipe);

global.$ = $;
