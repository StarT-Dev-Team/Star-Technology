namespace internal.dev.latvian.mods.kubejs.recipe {
    import EventJS = event.EventJS;
    import RecipeFunctions = kjs.RecipeFunctions;
    import RecipeFilter__Wrapper = dev.latvian.mods.kubejs.recipe.filter.RecipeFilter__Wrapper;

    class RecipesEventJS extends EventJS {
        #dev_latvian_mods_kubejs_recipe_RecipesEventJS: unique symbol;

        getRecipes(): RecipeFunctions;
        get recipes(): RecipeFunctions;

        vanillaShaped: RecipeFunctions['shaped'];
        vanillaShapeless: RecipeFunctions['shapeless'];
        shaped: RecipeFunctions['shaped'];
        shapeless: RecipeFunctions['shapeless'];
        smelting: unknown;
        blasting: unknown;
        smoking: unknown;
        campfireCooking: unknown;
        stonecutting: unknown;
        smithing: unknown;
        smithingTrim: unknown;

        remove(filter: RecipeFilter__Wrapper): void;
    }

    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;

    class RecipeJS {
        #dev_latvian_mods_kubejs_recipe_RecipeJS: unique symbol;
        id(id: ResouceLocation__Wrapper): this;
    }

    interface ReplacementMatch {
        #dev_latvian_mods_kubejs_recipe_ReplacementMatch: unique symbol;
    }

    import Ingredient__Wrapper = net.minecraft.world.item.crafting.Ingredient__Wrapper;

    type ReplacementMatch__Wrapper = ReplacementMatch | null | Ingredient__Wrapper;
}

namespace internal.dev.latvian.mods.kubejs.recipe.schema.minecraft {
    class ShapedRecipeSchema$ShapedRecipeJS extends RecipeJS {
        #dev_latvian_mods_kubejs_recipe_schema_minecraft_ShapedRecipeSchema$ShapedRecipeJS: unique symbol;
    }
}

namespace internal.dev.latvian.mods.kubejs.recipe.filter {
    class RecipeFilter {
        #dev_latvian_mods_kubejs_recipe_filter_RecipeFilter: unique symbol;
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
