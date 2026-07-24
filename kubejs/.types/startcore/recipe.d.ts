declare namespace internal.com.startechnology.start_core.recipe {
    import RecipeModifier = internal.com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier;

    interface StarTRecipeModifiers extends $object<'com.startechnology.start_core.recipe.StarTRecipeModifiers'> {}

    const StarTRecipeModifiers: $class<StarTRecipeModifiers> & {
        ABSOLUTE_PARALLEL: RecipeModifier;
        HELL_FORGE_OC: RecipeModifier;
        BULK_PROCESSING: RecipeModifier;
        THROUGHPUT_BOOSTING: RecipeModifier;
        LARGE_TURBINE: RecipeModifier;
        BOOSTED_PLASMA_TURBINE: RecipeModifier;
        THREADING_MACHINE: RecipeModifier;
        START_STEAM_PARALLEL: RecipeModifier;
        VACUUM_CHEMICAL_REACTION_CHAMBER: RecipeModifier;
        FAKE_FUSION_OVERCLOCK: RecipeModifier;
        REFLECTOR_FUSION_REACTOR: RecipeModifier;
        BULKING: RecipeModifier;
    };
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.startechnology.start_core.recipe.StarTRecipeModifiers': typeof internal.com.startechnology.start_core.recipe.StarTRecipeModifiers;
    }
}
