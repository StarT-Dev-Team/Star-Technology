namespace internal.com.gregtechceu.gtceu.data.recipe.builder {
    import InputItem__Wrapper = dev.latvian.mods.kubejs.item.InputItem__Wrapper;
    import GTRecipeComponents$FluidIngredientJS__Wrapper = integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS__Wrapper;

    class LayeredRecipeInfo$JSBuilder {
        readonly __com_gregtechceu_gtceu_data_recipe_builder_LayeredRecipeInfo$JSBuilder: unique symbol;

        perTick(perTick: boolean): this;
        chance(chance: number): this;
        maxChance(maxChance: number): this;
        tierChanceBoost(tierChanceBoost: number): this;
        duration(duration: number): this;
        timeout(timeout: number): this;
        itemInputs(...inputs: InputItem__Wrapper[]): this;
        itemInputs(inputs: InputItem__Wrapper[]): this;
        inputFluids(...inputs: GTRecipeComponents$FluidIngredientJS__Wrapper[]): this;
        inputFluids(inputs: GTRecipeComponents$FluidIngredientJS__Wrapper[]): this;
        fluidInputs(...inputs: GTRecipeComponents$FluidIngredientJS__Wrapper[]): this;
        fluidInputs(inputs: GTRecipeComponents$FluidIngredientJS__Wrapper[]): this;
        next(): this;
    }
}
