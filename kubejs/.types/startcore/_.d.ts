declare namespace internal.kjs {
    import FusionReflectorBlockBuilder = com.startechnology.start_core.integration.kjs.FusionReflectorBlockBuilder;

    interface BlockTypeRegistry {
        'gtceu:fusion_reflector': FusionReflectorBlockBuilder;
    }

    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import GTRecipeJS = com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS;

    interface RecipeFunctions_gtceu {
        reflector_fusion_reactor(id: ResourceLocation__Wrapper): GTRecipeJS;
        reflector_fusion_reactor(id: ResourceLocation__Wrapper): GTRecipeJS;
        bacterial_breeding_vat(id: ResourceLocation__Wrapper): GTRecipeJS;
        abyssal_containment(id: ResourceLocation__Wrapper): GTRecipeJS;
        bacterial_runic_mutator(id: ResourceLocation__Wrapper): GTRecipeJS;
        bacterial_hydrocarbon_harvester(id: ResourceLocation__Wrapper): GTRecipeJS;
        vacuum_chemical_reaction_chamber(id: ResourceLocation__Wrapper): GTRecipeJS;
        abyssal_harvester(id: ResourceLocation__Wrapper): GTRecipeJS;
        solar_energy(id: ResourceLocation__Wrapper): GTRecipeJS;
        titan_forge(id: ResourceLocation__Wrapper): GTRecipeJS;
        modular_rocket_module(id: ResourceLocation__Wrapper): GTRecipeJS;
        modular_combustion_frame(id: ResourceLocation__Wrapper): GTRecipeJS;
        hellforge(id: ResourceLocation__Wrapper): GTRecipeJS;
    }
}
