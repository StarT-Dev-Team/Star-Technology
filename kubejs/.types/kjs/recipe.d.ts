namespace internal.dev.latvian.mods.kubejs.recipe {
    import EventJS = event.EventJS;
    import RecipeFunctions = kjs.RecipeFunctions;
    import RecipeFunctions_minecraft = kjs.RecipeFunctions_minecraft;
    import RecipeFilter__Wrapper = dev.latvian.mods.kubejs.recipe.filter.RecipeFilter__Wrapper;
    import ReplacementMatch__Wrapper = recipe.ReplacementMatch__Wrapper;

    class RecipesEventJS extends EventJS {
        readonly __dev_latvian_mods_kubejs_recipe_RecipesEventJS: unique symbol;

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
        stonecutting: RecipeFunctions_minecraft['stonecutting'];
        smithing: RecipeFunctions_minecraft['smithing_transform'];
        smithingTrim: RecipeFunctions_minecraft['smithing_trim'];

        remove(filter: RecipeFilter__Wrapper): void;
        replaceInput(
            filter: RecipeFilter__Wrapper,
            match: ReplacementMatch__Wrapper,
            with_: InputReplacement__Wrapper
        ): void;

        custom(json: object): void;
    }

    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import IngredientActionFilter__Wrapper = ingredientaction.IngredientActionFilter__Wrapper;

    class RecipeJS {
        readonly __dev_latvian_mods_kubejs_recipe_RecipeJS: unique symbol;
        id(id: ResouceLocation__Wrapper): this;
        damageIngredient(filter: IngredientActionFilter__Wrapper, damage: number): this;
        damageIngredient(filter: IngredientActionFilter__Wrapper): this;
        replaceIngredient(filter: IngredientActionFilter__Wrapper, item: ItemStack__Wrapper): this;
        keepIngredient(filter: IngredientActionFilter__Wrapper): this;
        consumeIngredient(filter: IngredientActionFilter__Wrapper): this;
    }

    interface ReplacementMatch {
        readonly __dev_latvian_mods_kubejs_recipe_ReplacementMatch: unique symbol;
    }

    import Ingredient__Wrapper = net.minecraft.world.item.crafting.Ingredient__Wrapper;

    type ReplacementMatch__Wrapper = ReplacementMatch | null | Ingredient__Wrapper;

    interface InputReplacement {
        readonly __dev_latvian_mods_kubejs_recipe_InputReplacement: unique symbol;
    }

    import InputItem__Wrapper = item.InputItem__Wrapper;

    type InputReplacement__Wrapper = InputReplacement | InputItem__Wrapper;
}

namespace internal.dev.latvian.mods.kubejs.recipe.ingredientaction {
    class IngredientActionFilter {
        readonly __dev_latvian_mods_kubejs_recipe_ingredientaction_IngredientActionFilter: unique symbol;
    }

    import Ingredient = net.minecraft.world.item.crafting.Ingredient;
    import Ingredient__Wrapper = net.minecraft.world.item.crafting.Ingredient__Wrapper;

    type IngredientActionFilter__Wrapper =
        | IngredientActionFilter
        | number
        | string
        | Ingredient
        | { item?: Ingredient__Wrapper; index?: number };
}

namespace internal.dev.latvian.mods.kubejs.recipe.schema.minecraft {
    class ShapedRecipeSchema$ShapedRecipeJS extends RecipeJS {
        readonly __dev_latvian_mods_kubejs_recipe_schema_minecraft_ShapedRecipeSchema$ShapedRecipeJS: unique symbol;
    }

    import InputItem__Wrapper = item.InputItem__Wrapper;
    import OutputItem__Wrapper = item.OutputItem__Wrapper;

    class CookingRecipeSchema__Impl extends RecipeJS {
        result(result: OutputItem__Wrapper);
        ingredient(ingredient: InputItem__Wrapper);
        xp(xp: number);
        cookingTime(cookingTime: number);
    }
}

namespace internal.dev.latvian.mods.kubejs.recipe.filter {
    class RecipeFilter {
        readonly __dev_latvian_mods_kubejs_recipe_filter_RecipeFilter: unique symbol;
    }

    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import ReplacementMatch__Wrapper = recipe.ReplacementMatch__Wrapper;

    type RecipeFilter__Wrapper =
        | RecipeFilter
        | string
        | RegExp
        | RecipeFilter__Wrapper[]
        | {
              or?: RecipeFilter__Wrapper;
              not?: RecipeFilter__Wrapper;
              id?: ResourceLocation__Wrapper | RegExp;
              type?: ResourceLocation__Wrapper;
              group?: string;
              input?: ReplacementMatch__Wrapper;
              output?: ReplacementMatch__Wrapper;
          };
}
