namespace internal.kjs {
    import InputItem__Wrapper = dev.latvian.mods.kubejs.item.InputItem__Wrapper;
    import OutputItem__Wrapper = dev.latvian.mods.kubejs.item.OutputItem__Wrapper;
    // import InputFluid__Wrapper = dev.latvian.mods.kubejs.fluid.InputFluid__Wrapper;
    // import OutputFluid__Wrapper = dev.latvian.mods.kubejs.fluid.OutputFluid__Wrapper;
    import ItemApplicationRecipeJS = dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ItemApplicationRecipeJS;

    interface RecipeFunctions {
        create: {
            item_application(result: OutputItem__Wrapper, ingredients: InputItem__Wrapper[]): ItemApplicationRecipeJS;
        };
    }
}
