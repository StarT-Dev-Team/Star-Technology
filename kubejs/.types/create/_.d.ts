namespace internal.kjs {
    import InputItem__Wrapper = dev.latvian.mods.kubejs.item.InputItem__Wrapper;
    import OutputItem__Wrapper = dev.latvian.mods.kubejs.item.OutputItem__Wrapper;
    import FluidStackJS__Wrapper = dev.latvian.mods.kubejs.fluid.FluidStackJS__Wrapper;
    import ItemApplicationRecipeJS = dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ItemApplicationRecipeJS;
    import ProcessingRecipeJS = dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ProcessingRecipeJS;

    class RecipeFunction_ProcessingUnwrapped extends ProcessingRecipeJS {
        processingTime(processingTime: number): this;
        heatRequirement(heatRequirement: 'lowheated'): this;
        heated(): this;
        superheated(): this;
    }

    class RecipeFunction_ProcessingDefault extends ProcessingRecipeJS {
        processingTime(processingTime: number): this;
        heatRequirement(heatRequirement: 'lowheated'): this;
        heated(): this;
        superheated(): this;
    }

    type InputItemOrFluid = InputItem__Wrapper | FluidStackJS__Wrapper;
    type InputItemOrFluidArray = InputItemOrFluid | InputItemOrFluid[];
    type OutputItemOrFluid = OutputItem__Wrapper | FluidStackJS__Wrapper;
    type OutputItemOrFluidArray = OutputItemOrFluid | OutputItemOrFluid[];

    interface RecipeFunctions_create {
        item_application(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): ItemApplicationRecipeJS;
        mixing(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): RecipeFunction_ProcessingUnwrapped;
        filling(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): RecipeFunction_ProcessingUnwrapped;
        pressing(
            result: OutputItemOrFluidArray,
            ingredients: InputItemOrFluidArray
        ): RecipeFunction_ProcessingUnwrapped;
        deploying(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): ItemApplicationRecipeJS;
        mechanical_crafting: RecipeFunctions_minecraft['crafting_shaped'];
        splashing(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): RecipeFunction_ProcessingDefault;
        crushing(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): RecipeFunction_ProcessingDefault;
        haunting(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): RecipeFunction_ProcessingDefault;
    }

    class RecipeFunction_CreateVintageHammering extends RecipeFunction_ProcessingDefault {
        hammerBlows(blows: number): this;
    }

    class RecipeFunction_CreateVintageCentrifugation extends RecipeFunction_ProcessingDefault {
        minimalRPM(rpm: number): this;
    }

    interface RecipeFunctions_vintage {
        polishing(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): RecipeFunction_ProcessingDefault;
        turning(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): RecipeFunction_ProcessingDefault;
        coiling(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): RecipeFunction_ProcessingDefault;
        hammering(
            result: OutputItemOrFluidArray,
            ingredients: InputItemOrFluidArray
        ): RecipeFunction_CreateVintageHammering;
        centrifugation(
            result: OutputItemOrFluidArray,
            ingredients: InputItemOrFluidArray
        ): RecipeFunction_CreateVintageCentrifugation;
        pressurizing(
            result: OutputItemOrFluidArray,
            ingredients: InputItemOrFluidArray
        ): RecipeFunction_ProcessingDefault;
        vibrating(result: OutputItemOrFluidArray, ingredients: InputItemOrFluidArray): RecipeFunction_ProcessingDefault;
    }

    interface RecipeFunctions {
        create: RecipeFunctions_create;
        vintage: RecipeFunctions_vintage;
    }
}
