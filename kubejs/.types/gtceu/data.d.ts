declare namespace internal.com.gregtechceu.gtceu.data.recipe.builder {
    import InputItem = dev.latvian.mods.kubejs.item.InputItem;
    import GTRecipeComponents$FluidIngredientJS = integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS;

    interface LayeredRecipeInfo$JSBuilder extends $object<'com.gregtechceu.gtceu.data.recipe.builder.LayeredRecipeInfo$JSBuilder'> {
        perTick(perTick: boolean): this;
        chance(chance: number): this;
        maxChance(maxChance: number): this;
        tierChanceBoost(tierChanceBoost: number): this;
        duration(duration: number): this;
        timeout(timeout: number): this;
        itemInputs(...inputs: $wrapped<InputItem>[]): this;
        itemInputs(inputs: $wrapped<InputItem>[]): this;
        inputFluids(...inputs: $wrapped<GTRecipeComponents$FluidIngredientJS>[]): this;
        inputFluids(inputs: $wrapped<GTRecipeComponents$FluidIngredientJS>[]): this;
        fluidInputs(...inputs: $wrapped<GTRecipeComponents$FluidIngredientJS>[]): this;
        fluidInputs(inputs: $wrapped<GTRecipeComponents$FluidIngredientJS>[]): this;
        next(): this;
    }
}
