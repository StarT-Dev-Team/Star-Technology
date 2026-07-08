declare namespace internal.kjs {
    import FusionReflectorBlockBuilder = com.startechnology.start_core.integration.kjs.FusionReflectorBlockBuilder;

    interface BlockTypeRegistry {
        'gtceu:fusion_reflector': FusionReflectorBlockBuilder;
    }

    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import GTRecipeJS = com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS;

    interface RecipeFunctions_gtceu {
        reflector_fusion_reactor(id: $wrapped<ResourceLocation>): GTRecipeJS;
        reflector_fusion_reactor(id: $wrapped<ResourceLocation>): GTRecipeJS;
        bacterial_breeding_vat(id: $wrapped<ResourceLocation>): GTRecipeJS;
        abyssal_containment(id: $wrapped<ResourceLocation>): GTRecipeJS;
        bacterial_runic_mutator(id: $wrapped<ResourceLocation>): GTRecipeJS;
        bacterial_hydrocarbon_harvester(id: $wrapped<ResourceLocation>): GTRecipeJS;
        vacuum_chemical_reaction_chamber(id: $wrapped<ResourceLocation>): GTRecipeJS;
        abyssal_harvester(id: $wrapped<ResourceLocation>): GTRecipeJS;
        solar_energy(id: $wrapped<ResourceLocation>): GTRecipeJS;
        titan_forge(id: $wrapped<ResourceLocation>): GTRecipeJS;
        modular_rocket_module(id: $wrapped<ResourceLocation>): GTRecipeJS;
        modular_combustion_frame(id: $wrapped<ResourceLocation>): GTRecipeJS;
        hellforge(id: $wrapped<ResourceLocation>): GTRecipeJS;
    }
}

declare namespace internal.kjs.startcore {
    import PonderRegistryEventJS = com.startechnology.start_core.integration.ponder.PonderRegistryEventJS;
    import PonderItemTagEventJS = com.startechnology.start_core.integration.ponder.PonderItemTagEventJS;

    interface Ponder {
        registry(callback: (event: PonderRegistryEventJS) => void): void;
        tags(callback: (event: PonderItemTagEventJS) => void): void;
    }
}

declare const Ponder: internal.kjs.startcore.Ponder;
