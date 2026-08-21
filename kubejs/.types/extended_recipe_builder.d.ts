declare namespace internal.kjs.start {
    import UnaryOperator = java.util.function_.UnaryOperator;
    import GTRecipeJS = internal.com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS;
    import ScannerRecipeBuilder = internal.com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder$ScannerRecipeBuilder;

    interface ChancedIngredient {
        ingredientId: string;
        baseChance: number;
        chanceBoost: number;
    }

    interface RangedIngredient {
        id: string;
        range: [number, number];
    }

    class ExtendedRecipeBuilderDefinition {
        recipe: GTRecipeJS;
        constructor(recipe: GTRecipeJS);

        cleanroom(): this;
        sterileCleanroom(): this;
        stabilized(): this;
        abyssalRoom(): this;
        scannerResearch(builder: $wrapped<UnaryOperator<ScannerRecipeBuilder>>): this;
        chancedInputItems(inputs: ChancedIngredient[]): this;
        chancedOutputItems(outputs: ChancedIngredient[]): this;
        chancedOutputFluids(outputs: ChancedIngredient[]): this;
        rangedItemOutputs(outputs: RangedIngredient[]): this;
        if(
            condition: boolean,
            builderTrue: (recipe: GTRecipeJS) => void,
            builderFalse?: (recipe: GTRecipeJS) => void
        ): this;
        get(): GTRecipeJS;
    }
}
