declare namespace internal.com.gregtechceu.gtceu.data.recipe.builder {
    import ItemStack = net.minecraft.world.item.ItemStack;
    import Ingredient = net.minecraft.world.item.crafting.Ingredient;
    import Item = net.minecraft.world.item.Item;
    import FluidStack = net.minecraftforge.fluids.FluidStack;
    import GTRecipe = api.recipe.GTRecipe;
    import Tag = net.minecraft.nbt.Tag;

    interface GTRecipeBuilder extends $object<'com.gregtechceu.gtceu.data.recipe.builder.GTRecipeBuilder'> {
        perTick(perTick: boolean): this;
        chance(chance: number): this;
        maxChance(maxChance: number): this;
        tierChanceBoost(tierChanceBoost: number): this;
        duration(duration: number): this;
        'notConsumable(net.minecraft.world.item.ItemStack)'(itemStack: $wrapped<ItemStack>): this;
        'notConsumable(net.minecraft.world.item.crafting.Ingredient)'(ingredient: $wrapped<Ingredient>): this;
        'notConsumable(net.minecraft.world.item.Item)'(item: $wrapped<Item>): this;
        'outputFluids(net.minecraftforge.fluids.FluidStack)'(item: $wrapped<FluidStack>): this;
        'chancedInput(net.minecraft.world.item.ItemStack,java.lang.Integer,java.lang.Integer)'(
            stack: $wrapped<ItemStack>,
            chance: number,
            tierChanceBoost: number
        ): this;
        'addData(java.lang.String,net.minecraft.nbt.Tag)'(key: string, data: $wrapped<Tag>): this;
        'addData(java.lang.String,java.lang.Integer)'(key: string, data: number): this;
        'addData(java.lang.String,java.lang.Long)'(key: string, data: number): this;
        'addData(java.lang.String,java.lang.String)'(key: string, data: string): this;
        'addData(java.lang.String,java.lang.Float)'(key: string, data: number): this;
        'addData(java.lang.String,java.lang.Boolean)'(key: string, data: boolean): this;
        buildRawRecipe(): GTRecipe;
    }

    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import GTRecipeType = api.recipe.GTRecipeType;

    const GTRecipeBuilder: $class<GTRecipeBuilder> & {
        of(id: $wrapped<ResourceLocation>, recipeType: $wrapped<GTRecipeType>): GTRecipeBuilder;
        ofRaw(iecipeType: $wrapped<GTRecipeType>): GTRecipeBuilder;
    };

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
