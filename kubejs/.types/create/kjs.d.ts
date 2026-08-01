declare namespace internal.dev.latvian.mods.kubejs.create {
    import RecipeJS = recipe.RecipeJS;

    interface ProcessingRecipeSchema$ProcessingRecipeJS extends $object<
        'dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ProcessingRecipeJS',
        RecipeJS
    > {}

    interface ProcessingRecipeSchema$ItemApplicationRecipeJS extends $object<
        'dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ItemApplicationRecipeJS',
        ProcessingRecipeSchema$ProcessingRecipeJS
    > {}
}
