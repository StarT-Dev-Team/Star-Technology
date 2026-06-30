declare namespace internal.kjs.gtceu {
    import KJSWrappingMultiblockBuilder = com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSWrappingMultiblockBuilder;
    import KJSWrappingTieredMachineBuilder = com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSWrappingTieredMachineBuilder;
    import MultiblockMachineBuilder = com.gregtechceu.gtceu.api.registry.registrate.MultiblockMachineBuilder;

    interface MachineRegistry {
        _default: KJSWrappingTieredMachineBuilder;
        simple: KJSWrappingTieredMachineBuilder;
        steam: GTCEuSteamMachineBuilder;
        generator: KJSWrappingTieredMachineBuilder;
        multiblock: MultiblockMachineBuilder;
        tiered_multiblock: KJSWrappingMultiblockBuilder;
        primitive_singleblock: GTCEuMachineBuilder;
        primitive: MultiblockMachineBuilder;
    }

    import GTRecipeTypeBuilder = com.gregtechceu.gtceu.integration.kjs.builders.GTRecipeTypeBuilder;

    interface RecipeTypeRegistry {
        _default: GTRecipeTypeBuilder;
        basic: GTRecipeTypeBuilder;
    }

    import ElementBuilder = com.gregtechceu.gtceu.integration.kjs.builders.ElementBuilder;

    interface ElementRegistry {
        _default: ElementBuilder;
        basic: ElementBuilder;
    }

    import GTRecipeCategoryBuilder = com.gregtechceu.gtceu.integration.kjs.builders.GTRecipeCategoryBuilder;

    interface RecipeCategoryRegistry {
        _default: GTRecipeCategoryBuilder;
        basic: GTRecipeCategoryBuilder;
    }

    import WorldGenLayerBuilder = com.gregtechceu.gtceu.integration.kjs.builders.WorldGenLayerBuilder;

    interface WorldGenLayerRegistry {
        _default: WorldGenLayerBuilder;
        basic: WorldGenLayerBuilder;
    }

    import MaterialIconSet = com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet;
    import MaterialIconSetBuilder = com.gregtechceu.gtceu.integration.kjs.builders.MaterialIconSetBuilder;

    interface MaterialIconSetRegistry {
        _default: MaterialIconSetBuilder;
        basic: MaterialIconSetBuilder;
    }

    import Material = com.gregtechceu.gtceu.api.data.chemical.material.Material;
    import Material$Builder = com.gregtechceu.gtceu.api.data.chemical.material.Material$Builder;

    interface MaterialRegistry {
        _default: Material$Builder;
        basic: Material$Builder;
    }

    import GTRegistryEventJS = com.gregtechceu.gtceu.integration.kjs.events.GTRegistryEventJS;
    import IWorldGenLayer = com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer;

    interface StartupEvents {
        registry(
            key: 'gtceu:machine',
            callback: (event: GTRegistryEventJS<MachineDefinition, MachineRegistry>) => void
        ): void;
        registry(
            key: 'gtceu:recipe_type',
            callback: (event: GTRegistryEventJS<GTRecipeType, RecipeTypeRegistry>) => void
        ): void;
        registry(key: 'gtceu:element', callback: (event: GTRegistryEventJS<Element, ElementRegistry>) => void): void;
        registry(
            key: 'gtceu:recipe_category',
            callback: (event: GTRegistryEventJS<GTRecipeCategory, RecipeCategoryRegistry>) => void
        ): void;
        registry(
            key: 'gtceu:world_gen_layer',
            callback: (event: GTRegistryEventJS<IWorldGenLayer, WorldGenLayerRegistry>) => void
        ): void;
        registry(
            key: 'gtceu:material_icon_set',
            callback: (event: GTRegistryEventJS<MaterialIconSet, MaterialIconSetRegistry>) => void
        ): void;
        registry(key: 'gtceu:material', callback: (event: GTRegistryEventJS<Material, MaterialRegistry>) => void): void;
        materialModification(callback: (event: MaterialModificationEventJS) => void): void;
    }
}

namespace internal.kjs {
    import ActiveBlockBuilder = com.gregtechceu.gtceu.integration.kjs.builders.block.ActiveBlockBuilder;
    import CoilBlockBuilder = com.gregtechceu.gtceu.integration.kjs.builders.block.CoilBlockBuilder;

    interface BlockTypeRegistry {
        'gtceu:active': ActiveBlockBuilder;
        'gtceu:coil': CoilBlockBuilder;
    }

    import GTRecipeJS = com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS;
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import GTShapedRecipeSchema$ShapedRecipeJS = com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$ShapedRecipeJS;

    interface RecipeFunctions_gtceu {
        shaped: (
            result: OutputItem__Wrapper,
            pattern: string[],
            key: Record<string, InputItem__Wrapper>
        ) => GTShapedRecipeSchema$ShapedRecipeJS;
        assembler: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        assembly_line: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        fluid_heater: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        chemical_reactor: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        large_chemical_reactor: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        distillation_tower: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        centrifuge: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        canner: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        packer: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        research_station: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        distillery: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        fluid_solidifier: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        vacuum_freezer: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        circuit_assembler: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        mixer: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        extractor: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        forge_hammer: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        electrolyzer: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        electric_blast_furnace: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        cutter: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        laser_engraver: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        coke_oven: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        fermenter: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        composting: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        composting_factory: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        compressor: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        implosion_compressor: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        brewery: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        electromagnetic_separator: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        polarizer: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        chemical_bath: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        macerator: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        autoclave: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        arc_furnace: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        alloy_smelter: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        extruder: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        rock_breaker: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        alloy_blast_smelter: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        wiremill: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        bender: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        combustion_generator: (id: ResourceLocation__Wrapper) => GTRecipeJS;
        steam_turbine: (id: ResourceLocation__Wrapper) => GTRecipeJS;
    }

    interface RecipeFunctions {
        gtceu: RecipeFunctions_gtceu;
    }
}

const RotationState: typeof internal.com.gregtechceu.gtceu.api.data.RotationState;

const GTMaterials: typeof internal.com.gregtechceu.gtceu.common.data.GTMaterials;
const GTElements: typeof internal.com.gregtechceu.gtceu.common.data.GTElements;
const GTRecipeTypes: typeof internal.com.gregtechceu.gtceu.common.data.GTRecipeTypes;
const GTRecipeCategories: typeof internal.com.gregtechceu.gtceu.common.data.GTRecipeCategories;
const GTRecipeModifiers: typeof internal.com.gregtechceu.gtceu.common.data.GTRecipeModifiers;
const GTSoundEntries: typeof internal.com.gregtechceu.gtceu.common.data.GTSoundEntries;
const GCYMBlocks: typeof internal.com.gregtechceu.gtceu.common.data.GCYMBlocks;
const GTBlocks: typeof internal.com.gregtechceu.gtceu.common.data.GTBlocks;
const GCYMMachines: typeof internal.com.gregtechceu.gtceu.common.data.machines.GCYMMachines;
const GTCEuStartupEvents: internal.kjs.gtceu.StartupEvents;
const GTValues: typeof internal.com.gregtechceu.gtceu.api.GTValues;
const GTMaterialIconSet: typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet;
const GTMaterialFlags: typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags;
const FactoryBlockPattern: typeof internal.com.gregtechceu.gtceu.api.pattern.FactoryBlockPattern;
const PartAbility: typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.PartAbility;
const CleanroomType: typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType;
const Predicates: typeof internal.com.gregtechceu.gtceu.api.pattern.Predicates;
const GuiTextures: typeof internal.com.gregtechceu.gtceu.api.gui.GuiTextures;
const ChemicalHelper: typeof internal.com.gregtechceu.gtceu.api.data.chemical.ChemicalHelper;
const PropertyKey: typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey;
const ToolProperty: typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty;
const GTToolType: typeof internal.com.gregtechceu.gtceu.api.item.tool.GTToolType;
const GTFluidBuilder: typeof internal.com.gregtechceu.gtceu.api.fluids.FluidBuilder;
const GTFluidState: typeof internal.com.gregtechceu.gtceu.api.fluids.FluidState;
const GTFluidStorageKeys: typeof internal.com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys;
