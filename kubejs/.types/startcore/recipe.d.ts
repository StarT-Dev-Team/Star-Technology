namespace internal.com.startechnology.start_core.recipe {
    import RecipeModifier = internal.com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier;

    class StarTRecipeModifiers {
        static ABSOLUTE_PARALLEL: RecipeModifier;
        static HELL_FORGE_OC: RecipeModifier;
        static BULK_PROCESSING: RecipeModifier;
        static THROUGHPUT_BOOSTING: RecipeModifier;
        static LARGE_TURBINE: RecipeModifier;
        static BOOSTED_PLASMA_TURBINE: RecipeModifier;
        static THREADING_MACHINE: RecipeModifier;
        static START_STEAM_PARALLEL: RecipeModifier;
        static VACUUM_CHEMICAL_REACTION_CHAMBER: RecipeModifier;
        static FAKE_FUSION_OVERCLOCK: RecipeModifier;
        static REFLECTOR_FUSION_REACTOR: RecipeModifier;
    }
}

namespace internal.kjs {
    interface LoadableClasses {
        'com.startechnology.start_core.recipe.StarTRecipeModifiers': typeof internal.com.startechnology.start_core.recipe.StarTRecipeModifiers;
    }
}
