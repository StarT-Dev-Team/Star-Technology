declare namespace internal.kjs.gtceu {
    import KJSWrappingMachineBuilder = com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSWrappingMachineBuilder;
    import KJSWrappingMultiblockBuilder = com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSWrappingMultiblockBuilder;
    import KJSWrappingTieredMachineBuilder = com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSWrappingTieredMachineBuilder;
    import MultiblockMachineBuilder = com.gregtechceu.gtceu.api.registry.registrate.MultiblockMachineBuilder;
    interface MachineRegistry {
        _default: KJSWrappingTieredMachineBuilder;
        simple: KJSWrappingTieredMachineBuilder;
        custom: KJSWrappingTieredMachineBuilder;
        // steam: GTCEuSteamMachineBuilder;
        generator: KJSWrappingTieredMachineBuilder;
        multiblock: MultiblockMachineBuilder;
        tiered_multiblock: KJSWrappingMultiblockBuilder;
        primitive_singleblock: KJSWrappingMachineBuilder;
        primitive: MultiblockMachineBuilder;
    }
    import MachineDefinition = com.gregtechceu.gtceu.api.machine.MachineDefinition;
    type MachineRegistryEvent = GTRegistryEventJS<MachineDefinition, MachineRegistry>;

    import GTRecipeTypeBuilder = com.gregtechceu.gtceu.integration.kjs.builders.GTRecipeTypeBuilder;
    interface RecipeTypeRegistry {
        _default: GTRecipeTypeBuilder;
        basic: GTRecipeTypeBuilder;
    }

    import GTRecipeType = com.gregtechceu.gtceu.api.recipe.GTRecipeType;
    type RecipeTypeRegistryEvent = GTRegistryEventJS<GTRecipeType, RecipeTypeRegistry>;

    import ElementBuilder = com.gregtechceu.gtceu.integration.kjs.builders.ElementBuilder;
    interface ElementRegistry {
        _default: ElementBuilder;
        basic: ElementBuilder;
    }

    import Element = com.gregtechceu.gtceu.api.data.chemical.Element;
    type ElementRegistryEvent = GTRegistryEventJS<Element, ElementRegistry>;

    import GTRecipeCategoryBuilder = com.gregtechceu.gtceu.integration.kjs.builders.GTRecipeCategoryBuilder;
    interface RecipeCategoryRegistry {
        _default: GTRecipeCategoryBuilder;
        basic: GTRecipeCategoryBuilder;
    }

    import GTRecipeCategory = com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory;
    type RecipeCategoryRegistryEvent = GTRegistryEventJS<GTRecipeCategory, RecipeCategoryRegistry>;

    import WorldGenLayerBuilder = com.gregtechceu.gtceu.integration.kjs.builders.WorldGenLayerBuilder;
    interface WorldGenLayerRegistry {
        _default: WorldGenLayerBuilder;
        basic: WorldGenLayerBuilder;
    }

    import IWorldGenLayer = com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer;
    type WorldGenLayerRegistryEvent = GTRegistryEventJS<IWorldGenLayer, WorldGenLayerRegistry>;

    import MaterialIconSetBuilder = com.gregtechceu.gtceu.integration.kjs.builders.MaterialIconSetBuilder;
    interface MaterialIconSetRegistry {
        _default: MaterialIconSetBuilder;
        basic: MaterialIconSetBuilder;
    }

    import MaterialIconSet = com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet;
    type MaterialIconSetRegistryEvent = GTRegistryEventJS<MaterialIconSet, MaterialIconSetRegistry>;

    import Material$Builder = com.gregtechceu.gtceu.api.data.chemical.material.Material$Builder;
    interface MaterialRegistry {
        _default: Material$Builder;
        basic: Material$Builder;
    }

    import Material = com.gregtechceu.gtceu.api.data.chemical.material.Material;
    type MaterialRegistryEvent = GTRegistryEventJS<Material, MaterialRegistry>;

    import GTRegistryEventJS = com.gregtechceu.gtceu.integration.kjs.events.GTRegistryEventJS;
    import MaterialModificationEventJS = com.gregtechceu.gtceu.integration.kjs.events.MaterialModificationEventJS;

    interface StartupEvents {
        registry(key: 'gtceu:machine', callback: (event: MachineRegistryEvent) => void): void;
        registry(key: 'gtceu:recipe_type', callback: (event: RecipeTypeRegistryEvent) => void): void;
        registry(key: 'gtceu:element', callback: (event: ElementRegistryEvent) => void): void;
        registry(key: 'gtceu:recipe_category', callback: (event: RecipeCategoryRegistryEvent) => void): void;
        registry(key: 'gtceu:world_gen_layer', callback: (event: WorldGenLayerRegistryEvent) => void): void;
        registry(key: 'gtceu:material_icon_set', callback: (event: MaterialIconSetRegistryEvent) => void): void;
        registry(key: 'gtceu:material', callback: (event: MaterialRegistryEvent) => void): void;
        materialModification(callback: (event: MaterialModificationEventJS) => void): void;
    }

    import GTBedrockOreVeinEventJS = com.gregtechceu.gtceu.integration.kjs.events.GTBedrockOreVeinEventJS;
    import GTFluidVeinEventJS = com.gregtechceu.gtceu.integration.kjs.events.GTFluidVeinEventJS;
    import GTOreVeinEventJS = com.gregtechceu.gtceu.integration.kjs.events.GTOreVeinEventJS;
    import RegisterCapesEventJS = com.gregtechceu.gtceu.integration.kjs.events.RegisterCapesEventJS;

    interface ServerEvents {
        oreVeins(callback: (event: GTOreVeinEventJS) => void): void;
        bedrockOreVeins(callback: (event: GTBedrockOreVeinEventJS) => void): void;
        fluidVeins(callback: (event: GTFluidVeinEventJS) => void): void;
        registerCapes(callback: (event: RegisterCapesEventJS) => void): void;
    }
}

declare namespace internal.kjs {
    interface TypeWrappers {
        'com.gregtechceu.gtceu.api.recipe.GTRecipeType': string;
        'com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory': string;
        'com.gregtechceu.gtceu.api.data.chemical.Element': string;
        'com.gregtechceu.gtceu.api.data.chemical.material.Material': string;
        // typeWrappers.registerSimple(MachineDefinition.class, o -> {
        // typeWrappers.registerSimple(TagPrefix.class, o -> {
        // typeWrappers.registerSimple(MaterialEntry.class, MaterialEntry::of);
        'com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability': string;
        // typeWrappers.registerSimple(ChanceLogic.class, o -> {
        // typeWrappers.registerSimple(ExtendedOutputItem.class, ExtendedOutputItem::of);
        'com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem':
            | OutputItem
            | TypeWrappers['dev.latvian.mods.kubejs.item.OutputItem'];
        'com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet': string;
        'com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack':
            | com.gregtechceu.gtceu.api.data.chemical.material.Material
            | string;
        // typeWrappers.registerSimple(MaterialStackWrapper.class, o -> {
        'com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer': string;
        // typeWrappers.registerSimple(HeightRangePlacement.class, o -> {
        // typeWrappers.registerSimple(BiomeWeightModifier.class, o -> {
        // typeWrappers.registerSimple(VeinGenerator.class, o -> {
        // typeWrappers.registerSimple(IndicatorGenerator.class, o -> {
        // typeWrappers.registerSimple(IndicatorPlacement.class, o -> {
        // typeWrappers.registerSimple(MedicalCondition.class, o -> {
        'com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer$RuleTestSupplier':
            | TypeWrappers['com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer']
            | com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer$RuleTestSupplier['get']
            | net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest
            | TypeWrappers['net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest'];
        // typeWrappers.registerSimple(CraftingComponent.class, o -> {
        'com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS':
            | dev.latvian.mods.kubejs.fluid.FluidStackJS
            | TypeWrappers['dev.latvian.mods.kubejs.fluid.FluidStackJS']
            | (
                  | dev.latvian.mods.kubejs.fluid.FluidStackJS
                  | TypeWrappers['dev.latvian.mods.kubejs.fluid.FluidStackJS']
              )[];
        // typeWrappers.registerSimple(EnergyStack.class, KJSHelpers::parseEnergyStack);
        'com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack$WithIO':
            | number
            | string
            | { v: number; a: number }
            | { V: number; A: number };
    }

    import ActiveBlockBuilder = com.gregtechceu.gtceu.integration.kjs.builders.block.ActiveBlockBuilder;
    import CoilBlockBuilder = com.gregtechceu.gtceu.integration.kjs.builders.block.CoilBlockBuilder;

    interface BlockTypeRegistry {
        'gtceu:active': ActiveBlockBuilder;
        'gtceu:coil': CoilBlockBuilder;
    }

    import GTRecipeJS = com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import GTShapedRecipeSchema$ShapedRecipeJS = com.gregtechceu.gtceu.integration.kjs.recipe.GTShapedRecipeSchema$ShapedRecipeJS;
    import OutputItem = dev.latvian.mods.kubejs.item.OutputItem;
    import InputItem = dev.latvian.mods.kubejs.item.InputItem;

    interface RecipeFunctions_gtceu {
        shaped: (
            result: $wrapped<OutputItem>,
            pattern: string[],
            key: Record<string, $wrapped<InputItem>>
        ) => GTShapedRecipeSchema$ShapedRecipeJS;
        steam_boiler(id: $wrapped<ResourceLocation>): GTRecipeJS;
        electric_furnace(id: $wrapped<ResourceLocation>): GTRecipeJS;
        electric_vanilla_blast_furnace(id: $wrapped<ResourceLocation>): GTRecipeJS;
        electric_smoking_furnace(id: $wrapped<ResourceLocation>): GTRecipeJS;
        alloy_smelter(id: $wrapped<ResourceLocation>): GTRecipeJS;
        arc_furnace(id: $wrapped<ResourceLocation>): GTRecipeJS;
        assembler(id: $wrapped<ResourceLocation>): GTRecipeJS;
        autoclave(id: $wrapped<ResourceLocation>): GTRecipeJS;
        bender(id: $wrapped<ResourceLocation>): GTRecipeJS;
        brewery(id: $wrapped<ResourceLocation>): GTRecipeJS;
        macerator(id: $wrapped<ResourceLocation>): GTRecipeJS;
        canner(id: $wrapped<ResourceLocation>): GTRecipeJS;
        centrifuge(id: $wrapped<ResourceLocation>): GTRecipeJS;
        chemical_bath(id: $wrapped<ResourceLocation>): GTRecipeJS;
        chemical_reactor(id: $wrapped<ResourceLocation>): GTRecipeJS;
        compressor(id: $wrapped<ResourceLocation>): GTRecipeJS;
        cutter(id: $wrapped<ResourceLocation>): GTRecipeJS;
        distillery(id: $wrapped<ResourceLocation>): GTRecipeJS;
        electrolyzer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        electromagnetic_separator(id: $wrapped<ResourceLocation>): GTRecipeJS;
        extractor(id: $wrapped<ResourceLocation>): GTRecipeJS;
        extruder(id: $wrapped<ResourceLocation>): GTRecipeJS;
        fermenter(id: $wrapped<ResourceLocation>): GTRecipeJS;
        fluid_heater(id: $wrapped<ResourceLocation>): GTRecipeJS;
        fluid_solidifier(id: $wrapped<ResourceLocation>): GTRecipeJS;
        forge_hammer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        forming_press(id: $wrapped<ResourceLocation>): GTRecipeJS;
        lathe(id: $wrapped<ResourceLocation>): GTRecipeJS;
        mixer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        ore_washer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        packer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        polarizer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        laser_engraver(id: $wrapped<ResourceLocation>): GTRecipeJS;
        sifter(id: $wrapped<ResourceLocation>): GTRecipeJS;
        thermal_centrifuge(id: $wrapped<ResourceLocation>): GTRecipeJS;
        wiremill(id: $wrapped<ResourceLocation>): GTRecipeJS;
        circuit_assembler(id: $wrapped<ResourceLocation>): GTRecipeJS;
        gas_collector(id: $wrapped<ResourceLocation>): GTRecipeJS;
        air_scrubber(id: $wrapped<ResourceLocation>): GTRecipeJS;
        research_station(id: $wrapped<ResourceLocation>): GTRecipeJS;
        rock_breaker(id: $wrapped<ResourceLocation>): GTRecipeJS;
        scanner(id: $wrapped<ResourceLocation>): GTRecipeJS;
        combustion_generator(id: $wrapped<ResourceLocation>): GTRecipeJS;
        gas_turbine(id: $wrapped<ResourceLocation>): GTRecipeJS;
        steam_turbine(id: $wrapped<ResourceLocation>): GTRecipeJS;
        plasma_generator(id: $wrapped<ResourceLocation>): GTRecipeJS;
        large_boiler(id: $wrapped<ResourceLocation>): GTRecipeJS;
        coke_oven(id: $wrapped<ResourceLocation>): GTRecipeJS;
        primitive_blast_furnace(id: $wrapped<ResourceLocation>): GTRecipeJS;
        electric_blast_furnace(id: $wrapped<ResourceLocation>): GTRecipeJS;
        distillation_tower(id: $wrapped<ResourceLocation>): GTRecipeJS;
        pyrolyse_oven(id: $wrapped<ResourceLocation>): GTRecipeJS;
        cracker(id: $wrapped<ResourceLocation>): GTRecipeJS;
        implosion_compressor(id: $wrapped<ResourceLocation>): GTRecipeJS;
        vacuum_freezer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        assembly_line(id: $wrapped<ResourceLocation>): GTRecipeJS;
        large_chemical_reactor(id: $wrapped<ResourceLocation>): GTRecipeJS;
        fusion_reactor(id: $wrapped<ResourceLocation>): GTRecipeJS;
        alloy_blast_smelter(id: $wrapped<ResourceLocation>): GTRecipeJS;
    }

    interface RecipeFunctions {
        gtceu: RecipeFunctions_gtceu;
    }
}

declare const GTRegistries: typeof internal.com.gregtechceu.gtceu.api.registry.GTRegistries;
declare const RotationState: typeof internal.com.gregtechceu.gtceu.api.data.RotationState;
declare const GTMaterials: typeof internal.com.gregtechceu.gtceu.common.data.GTMaterials;
declare const GTElements: typeof internal.com.gregtechceu.gtceu.common.data.GTElements;
declare const GTRecipeTypes: typeof internal.com.gregtechceu.gtceu.common.data.GTRecipeTypes;
declare const GTRecipeCategories: typeof internal.com.gregtechceu.gtceu.common.data.GTRecipeCategories;
declare const GTRecipeModifiers: typeof internal.com.gregtechceu.gtceu.common.data.GTRecipeModifiers;
declare const GTSoundEntries: typeof internal.com.gregtechceu.gtceu.common.data.GTSoundEntries;
declare const GCYMBlocks: typeof internal.com.gregtechceu.gtceu.common.data.GCYMBlocks;
declare const GTBlocks: typeof internal.com.gregtechceu.gtceu.common.data.GTBlocks;
declare const GTMachines: typeof internal.com.gregtechceu.gtceu.common.data.GTMachines;
declare const GCYMMachines: typeof internal.com.gregtechceu.gtceu.common.data.machines.GCYMMachines;
declare const GTCEuStartupEvents: internal.kjs.gtceu.StartupEvents;
declare const GTCEuServerEvents: internal.kjs.gtceu.ServerEvents;
declare const GTValues: typeof internal.com.gregtechceu.gtceu.api.GTValues;
declare const GTMaterialIconSet: typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet;
declare const GTMaterialFlags: typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags;
declare const FactoryBlockPattern: typeof internal.com.gregtechceu.gtceu.api.pattern.FactoryBlockPattern;
declare const PartAbility: typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.PartAbility;
declare const CleanroomType: typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType;
declare const Predicates: typeof internal.com.gregtechceu.gtceu.api.pattern.Predicates;
declare const GuiTextures: typeof internal.com.gregtechceu.gtceu.api.gui.GuiTextures;
declare const ChemicalHelper: typeof internal.com.gregtechceu.gtceu.api.data.chemical.ChemicalHelper;
declare const PropertyKey: typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey;
declare const ToolProperty: typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty;
declare const GTToolType: typeof internal.com.gregtechceu.gtceu.api.item.tool.GTToolType;
declare const GTFluidBuilder: typeof internal.com.gregtechceu.gtceu.api.fluids.FluidBuilder;
declare const GTFluidState: typeof internal.com.gregtechceu.gtceu.api.fluids.FluidState;
declare const GTFluidStorageKeys: typeof internal.com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys;
