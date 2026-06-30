namespace internal.kjs {
    import InputItem__Wrapper = dev.latvian.mods.kubejs.item.InputItem__Wrapper;
    import OutputItem__Wrapper = dev.latvian.mods.kubejs.item.OutputItem__Wrapper;
    import FluidStackJS__Wrapper = dev.latvian.mods.kubejs.fluid.FluidStackJS__Wrapper;
    import ItemApplicationRecipeJS = dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ItemApplicationRecipeJS;
    import ProcessingRecipeJS = dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ProcessingRecipeJS;

    class RecipeFunctionMixing extends ProcessingRecipeJS {
        heatRequirement(heatRequirement: 'lowheated'): this;
    }

    type InputItemOrFluid = InputItem__Wrapper | FluidStackJS__Wrapper;
    type InputItemOrFluidArray = InputItemOrFluid | InputItemOrFluid[];
    type OutputItemOrFluid = OutputItem__Wrapper | FluidStackJS__Wrapper;

    interface RecipeFunctions_create {
        item_application(result: OutputItemOrFluid, ingredients: InputItemOrFluidArray): ItemApplicationRecipeJS;
        mixing(result: OutputItemOrFluid, ingredients: InputItemOrFluidArray): RecipeFunctionMixing;
        filling(result: OutputItemOrFluid, ingredients: InputItemOrFluidArray): RecipeFunctionMixing;
        pressing(result: OutputItemOrFluid, ingredients: InputItemOrFluidArray): RecipeFunctionMixing;
        mechanical_crafting: RecipeFunctions_minecraft['crafting_shaped'];
    }

    interface RecipeFunctions {
        create: RecipeFunctions_create;
    }
}
