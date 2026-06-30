namespace internal.kjs {
    import GTRecipeJS = com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS;
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;

    interface RecipeFunctionsGtceu {
        chemical_skip(id: ResourceLocation__Wrapper): GTRecipeJS;
        ordered_chemistry(id: ResourceLocation__Wrapper): GTRecipeJS;
        large_rock_crusher(id: ResourceLocation__Wrapper): GTRecipeJS;
        large_barrel(id: ResourceLocation__Wrapper): GTRecipeJS;
        large_stone_barrel(id: ResourceLocation__Wrapper): GTRecipeJS;
        industrial_barrel_magmatic(id: ResourceLocation__Wrapper): GTRecipeJS;
        industrial_barrel_aqueous(id: ResourceLocation__Wrapper): GTRecipeJS;
        riftic_infusion_assembly(id: ResourceLocation__Wrapper): GTRecipeJS;
    }
}
