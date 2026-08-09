declare namespace internal.dev.latvian.mods.kubejs.recipe {
    import EventJS = event.EventJS;
    import RecipeFunctions = kjs.RecipeFunctions;
    import RecipeFunctions_minecraft = kjs.RecipeFunctions_minecraft;
    import RecipeFilter = dev.latvian.mods.kubejs.recipe.filter.RecipeFilter;
    import Consumer = java.util.function_.Consumer;
    interface RecipesEventJS extends $object<'dev.latvian.mods.kubejs.recipe.RecipesEventJS', EventJS> {
        getRecipes(): RecipeFunctions;
        get recipes(): RecipeFunctions;

        vanillaShaped: RecipeFunctions_minecraft['crafting_shaped'];
        vanillaShapeless: RecipeFunctions_minecraft['crafting_shapeless'];
        shaped: RecipeFunctions_minecraft['crafting_shaped'];
        shapeless: RecipeFunctions_minecraft['crafting_shapeless'];
        smelting: RecipeFunctions_minecraft['smelting'];
        blasting: RecipeFunctions_minecraft['blasting'];
        smoking: RecipeFunctions_minecraft['smoking'];
        campfireCooking: RecipeFunctions_minecraft['campfire_cooking'];
        // stonecutting: RecipeFunctions_minecraft['stonecutting'];
        // smithing: RecipeFunctions_minecraft['smithing_transform'];
        // smithingTrim: RecipeFunctions_minecraft['smithing_trim'];
        custom(json: object): void;

        remove(filter: $wrapped<RecipeFilter>): void;
        replaceInput(
            filter: $wrapped<RecipeFilter>,
            match: $wrapped<ReplacementMatch>,
            with_: $wrapped<InputReplacement>
        ): void;
        replaceOutput(
            filter: $wrapped<RecipeFilter>,
            match: $wrapped<ReplacementMatch>,
            with_: $wrapped<OutputReplacement>
        ): void;
        forEachRecipe(filter: $wrapped<RecipeFilter>, consumer: $wrapped<Consumer<RecipeJS>>): void;
    }

    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import IngredientActionFilter = ingredientaction.IngredientActionFilter;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import JsonObject = com.google.gson.JsonObject;

    interface RecipeJS extends $object<'dev.latvian.mods.kubejs.recipe.RecipeJS'> {
        json: JsonObject;
        id(id: $wrapped<ResourceLocation>): this;
        damageIngredient(filter: $wrapped<IngredientActionFilter>, damage: number): this;
        damageIngredient(filter: $wrapped<IngredientActionFilter>): this;
        replaceIngredient(filter: $wrapped<IngredientActionFilter>, item: $wrapped<ItemStack>): this;
        keepIngredient(filter: $wrapped<IngredientActionFilter>): this;
        consumeIngredient(filter: $wrapped<IngredientActionFilter>): this;
    }

    interface ReplacementMatch extends $object<'dev.latvian.mods.kubejs.recipe.ReplacementMatch'> {}

    interface InputReplacement extends $object<'dev.latvian.mods.kubejs.recipe.InputReplacement'> {}

    interface OutputReplacement extends $object<'dev.latvian.mods.kubejs.recipe.OutputReplacement'> {}
}

declare namespace internal.dev.latvian.mods.kubejs.recipe.component {
    import InputItem = dev.latvian.mods.kubejs.item.InputItem;
    import OutputItem = dev.latvian.mods.kubejs.item.OutputItem;
    import FluidStackJS = dev.latvian.mods.kubejs.fluid.FluidStackJS;

    type $InputItemOrFluid = $wrapped<InputItem> | $wrapped<FluidStackJS>;
    type $InputItemOrFluidArray = $InputItemOrFluid | $InputItemOrFluid[];
    type $OutputItemOrFluid = $wrapped<OutputItem> | $wrapped<FluidStackJS>;
    type $OutputItemOrFluidArray = $OutputItemOrFluid | $OutputItemOrFluid[];
}

declare namespace internal.dev.latvian.mods.kubejs.recipe.ingredientaction {
    interface IngredientActionFilter extends $object<'dev.latvian.mods.kubejs.recipe.ingredientaction.IngredientActionFilter'> {}
}

declare namespace internal.dev.latvian.mods.kubejs.recipe.schema.minecraft {
    import ItemStack = net.minecraft.world.item.ItemStack;

    interface ShapedRecipeSchema$ShapedRecipeJS extends $object<
        'dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapedRecipeSchema$ShapedRecipeJS',
        RecipeJS
    > {
        modifyResult(modFunction: (grid: any, result: any) => ItemStack): this;
    }

    import InputItem = item.InputItem;
    import OutputItem = item.OutputItem;

    interface CookingRecipeSchema__Impl extends RecipeJS {
        result(result: $wrapped<OutputItem>): this;
        ingredient(ingredient: $wrapped<InputItem>): this;
        xp(xp: number): this;
        cookingTime(cookingTime: number): this;
    }
}

declare namespace internal.dev.latvian.mods.kubejs.recipe.filter {
    interface RecipeFilter extends $object<'dev.latvian.mods.kubejs.recipe.filter.RecipeFilter'> {}
}
