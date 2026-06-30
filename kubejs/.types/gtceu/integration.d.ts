namespace internal.com.gregtechceu.gtceu.integration.kjs.builders {
    import BuilderBase = api.registry.registrate.BuilderBase;
    import ResourceTexture = lowdragmc.lowdraglib.gui.texture.ResourceTexture;
    import IGuiTexture = lowdragmc.lowdraglib.gui.texture.IGuiTexture;
    import IO__Wrapper = api.capability.recipe.IO__Wrapper;
    import Supplier__Wrapper = java.util.function_.Supplier__Wrapper;
    import ItemStack__Wrapper = net.minecraft.world.item.ItemStack__Wrapper;

    class GTRecipeTypeBuilder extends BuilderBase<GTRecipeType> {
        category(category: string): this;
        setEUIO(io: IO__Wrapper): this;
        setMaxTooltips(maxTooltips: number): this;
        setMaxIOSize(maxInputs: number, maxOutputs: number, maxFluidInputs: number, maxFluidOutputs: number): this;
        setProgressBar(progressBar: ResourceTexture, moveType: ProgressTexture.FillDirection): this;
        setSound(sound: SoundEntry): this;
        setLayered(): this;
        setSlotOverlay(isOutput: boolean, isFluid: boolean, slotOverlay: IGuiTexture): this;
        setHasResearchSlot(hasResearchSlot: boolean): this;
        setIconSupplier(iconSupplier: Supplier__Wrapper<ItemStack>): this;
    }

    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import Component = net.minecraft.network.chat.Component;

    class ElementBuilder extends BuilderBase<Element> {
        constructor(id: ResourceLocation__Wrapper);
        get name(): string;
        translatableName(translatableName: Component): this;
        protons(protons: number): this;
        neutrons(neutrons: number): this;
        halfLifeSeconds(halfLifeSeconds: number): this;
        decayTo(decayTo: string): this;
        symbol(symbol: string): this;
        isIsotope(isIsotope: boolean): this;
    }

    import GTRecipeCategory = api.recipe.category.GTRecipeCategory;
    import GTRecipeType__Wrapper = api.recipe.GTRecipeType__Wrapper;
    import ItemStack__Wrapper = net.minecraft.world.item.ItemStack__Wrapper;

    class GTRecipeCategoryBuilder extends BuilderBase<GTRecipeCategory> {
        constructor(id: ResourceLocation__Wrapper);
        recipeType(recipeType: GTRecipeType__Wrapper): this;
        icon(icon: IGuiTexture): this;
        setCustomIcon(location: ResourceLocation__Wrapper): this;
        setItemIcon(itemStacks: ItemStack__Wrapper[]): this;
        setItemIcon(...itemStacks: ItemStack__Wrapper[]): this;
    }

    import SimpleWorldGenLayer = api.data.worldgen.SimpleWorldGenLayer;
    import IWorldGenLayer$RuleTestSupplier__Wrapper = api.data.worldgen.IWorldGenLayer$RuleTestSupplier__Wrapper;

    class WorldGenLayerBuilder extends BuilderBase<SimpleWorldGenLayer> {
        targets(...targets: IWorldGenLayer$RuleTestSupplier__Wrapper[]): this;
        targets(targets: IWorldGenLayer$RuleTestSupplier__Wrapper[]): this;
        dimensions(...dimensions: ResourceLocation__Wrapper[]): this;
        dimensions(dimensions: ResourceLocation__Wrapper[]): this;
    }

    import MaterialIconSet = api.data.chemical.material.info.MaterialIconSet;
    import MaterialIconSet__Wrapper = api.data.chemical.material.info.MaterialIconSet__Wrapper;

    class MaterialIconSetBuilder extends BuilderBase<MaterialIconSet> {
        parent(parent: MaterialIconSet__Wrapper): this;
    }
}

namespace internal.com.gregtechceu.gtceu.integration.kjs.builders.machine {
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import BuilderBase = api.registry.registrate.BuilderBase;
    import BuilMultiblockMachineDefinitionderBase = api.machine.MultiblockMachineDefinition;

    class KJSWrappingTieredMachineBuilder extends BuilderBase<MachineDefinition> {
        constructor(id: ResourceLocation, tieredBuilder: KJSTieredMachineBuilder);
        tiers(tiers: number[]): this;
        tiers(...tiers: number[]): this;
        machine(machine: TieredCreationFunction__Wrapper): this;
        definition(defintiion: DefinitionFunction__Wrapper): this;
    }

    import MachineBuilder = api.registry.registrate.MachineBuilder;

    type DefinitionFunction__Wrapper =
        | KJSTieredMachineBuilder$DefinitionFunction
        | ((tier: number, builder: MachineBuilder<unknown>) => void);

    const __KJSTieredMachineBuilder$DefinitionFunction: unique symbol;

    interface KJSTieredMachineBuilder$DefinitionFunction {
        [__KJSTieredMachineBuilder$DefinitionFunction]: 0;
        apply(tier: number, builder: MachineBuilder<unknown>): void;
    }

    import MetaMachine = api.machine.MetaMachine;
    import IMachineBlockEntity = api.machine.IMachineBlockEntity;
    import Int2IntFunction__Wrapper = it.unimi.dsi.fastutil.ints.Int2IntFunction__Wrapper;

    type TieredCreationFunction__Wrapper =
        | KJSTieredMachineBuilder$TieredCreationFunction
        | ((holder: IMachineBlockEntity, tier: number, tankScaling: Int2IntFunction__Wrapper) => MetaMachine);

    interface KJSTieredMachineBuilder$TieredCreationFunction {
        create(holder: IMachineBlockEntity, tier: number, tankScaling: Int2IntFunction__Wrapper): MetaMachine;
    }

    class KJSTieredMachineBuilder extends BuilderBase<MachineDefinition[]> {}

    class KJSWrappingMultiblockBuilder extends BuilderBase<MultiblockMachineDefinition> {
        tiers(tiers: number[]): this;
        tiers(...tiers: number[]): this;
    }
}

namespace internal.com.gregtechceu.gtceu.integration.kjs.builders.block {
    import BlockBuilder = dev.latvian.mods.kubejs.block.BlockBuilder;

    class ActiveBlockBuilder extends BlockBuilder {
        simple(base: string): this;
        firebox(bottom: string, side: string, top: string): this;
        bloom(base: string): this;
    }

    import Material = api.data.chemical.material.Material;
    import Supplier__Wrapper = java.util.function_.Supplier__Wrapper;

    class CoilBlockBuilder extends BlockBuilder {
        temperature(temperature: number): this;
        level(level: number): this;
        energyDiscount(energyDiscount: number): this;
        tier(tier: number): this;
        material(material: Supplier__Wrapper<Material>): this;
        texture(texture: string): this;
        coilMaterial(material: Supplier__Wrapper<Material>): this;
    }
}

namespace internal.com.gregtechceu.gtceu.integration.kjs.events {
    import BuilderBase = api.registry.registrate.BuilderBase;

    class GTRegistryEventJS<T, TBuilder extends Record<string, BuilderBase<T>>> extends StartupEventJS {
        create<B extends Exclude<keyof TBuilder, '_default'>>(id: string, type: B): TBuilder[B];
        create(id: string): TBuilder['_default'];
    }
}

namespace internal.com.gregtechceu.gtceu.integration.kjs.recipe {
    import RecipeJS = dev.latvian.mods.kubejs.recipe.RecipeJS;
    import InputItem__Wrapper = dev.latvian.mods.kubejs.item.InputItem__Wrapper;
    import OutputItem__Wrapper = dev.latvian.mods.kubejs.item.OutputItem__Wrapper;
    import GTRecipeComponents$FluidIngredientJS__Wrapper = components.GTRecipeComponents$FluidIngredientJS__Wrapper;
    import EnergyStack$WithIO__Wrapper = api.recipe.ingredient.EnergyStack$WithIO__Wrapper;
    import UnaryOperator__Wrapper = java.util.function_.UnaryOperator__Wrapper;
    import Consumer__Wrapper = java.util.function_.Consumer__Wrapper;
    import ResearchRecipeBuilder$StationRecipeBuilder = api.recipe.ResearchRecipeBuilder$StationRecipeBuilder;
    import ResearchRecipeBuilder$ScannerRecipeBuilder = api.recipe.ResearchRecipeBuilder$ScannerRecipeBuilder;
    import FluidStackJS__Wrapper = dev.latvian.mods.kubejs.fluid.FluidStackJS__Wrapper;
    import ItemStack__Wrapper = net.minecraft.world.item.ItemStack__Wrapper;
    import CleanroomType = api.machine.multiblock.CleanroomType;
    import LayeredRecipeInfo$JSBuilder = data.recipe.builder.LayeredRecipeInfo$JSBuilder;
    import ExtendedOutputItem__Wrapper = components.ExtendedOutputItem__Wrapper;
    import GTRecipeCategory__Wrapper = api.recipe.category.GTRecipeCategory__Wrapper;

    class GTRecipeSchema$GTRecipeJS extends RecipeJS {
        #com_gregtechceu_gtceu_integration_kjs_recipe_GTRecipeSchema$GTRecipeJS: unique symbol;

        category(category: GTRecipeCategory__Wrapper): this;
        itemInputs(...inputs: InputItem__Wrapper[]): this;
        itemInputs(inputs: InputItem__Wrapper[]): this;
        inputFluids(...inputs: GTRecipeComponents$FluidIngredientJS__Wrapper[]): this;
        inputFluids(inputs: GTRecipeComponents$FluidIngredientJS__Wrapper[]): this;
        fluidInputs(...inputs: GTRecipeComponents$FluidIngredientJS__Wrapper[]): this;
        fluidInputs(inputs: GTRecipeComponents$FluidIngredientJS__Wrapper[]): this;
        itemOutputs(...outputs: ItemOutput__Wrapper[]): this;
        itemOutputs(outputs: ItemOutput__Wrapper[]): this;
        notConsumable(itemStack: ItemStack__Wrapper): this;
        notConsumableFluid(itemStack: ItemStack__Wrapper): this;
        outputFluids(...inputs: FluidStackJS__Wrapper[]): this;
        outputFluids(inputs: GTRecipeComponents$FluidIngredientJS__Wrapper[]): this;
        fluidOutputs(...inputs: FluidStackJS__Wrapper[]): this;
        fluidOutputs(inputs: GTRecipeComponents$FluidIngredientJS__Wrapper[]): this;
        chancedInput(stack: InputItem__Wrapper, chance: number, tierChanceBoost: number): this;
        chancedOutput(stack: ExtendedOutputItem__Wrapper, chance: number, tierChanceBoost: number): this;
        chancedFluidOutput(stack: FluidStackJS__Wrapper, chance: number, tierChanceBoost: number): this;
        itemOutputsRanged(stack: ExtendedOutputItem__Wrapper, min: number, max: number): this;
        outputFluidsRanged(output: FluidStackJS__Wrapper, min: number, max: number): this;
        duration(duration: number): this;
        EUt(eut: EnergyStack$WithIO__Wrapper): this;
        circuit(configuration: number): this;
        stationResearch(research: UnaryOperator__Wrapper<ResearchRecipeBuilder$StationRecipeBuilder>): this;
        'scannerResearch(java.util.function.UnaryOperator)'(
            research: UnaryOperator__Wrapper<ResearchRecipeBuilder$ScannerRecipeBuilder>
        ): this;
        cleanroom(cleanroomType: CleanroomType | null): this;
        layeredRecipe(config: Consumer__Wrapper<LayeredRecipeInfo$JSBuilder>): this;
        CWUt(cwu: number): this;
        blastFurnaceTemp(blastTemp: number): this;
        totalCWU(cwu: number): this;
        fusionStartEU(startEU: number): this;
        genericStartEU(startEU: number): this;
        reflectorTier(reflectorTier: number): this;
        vacuumLevel(vacuumLevel: number): this;
        disableDistilleryRecipes(disable: boolean): this;
        addMaterialInfo(item: boolean): this;
        addMaterialInfo(item: boolean, flui: boolean): this;
        removePreviousMaterialInfo(): this;
    }

    class GTShapedRecipeSchema$ShapedRecipeJS extends RecipeJS {
        readonly __com_gregtechceu_gtceu_integration_kjs_recipe_GTShapedRecipeSchema$ShapedRecipeJS: unique symbol;
        addMaterialInfo(): this;
    }
}

namespace internal.com.gregtechceu.gtceu.integration.kjs.recipe.components {
    import FluidStackJS__Wrapper = dev.latvian.mods.kubejs.fluid.FluidStackJS__Wrapper;

    class GTRecipeComponents$FluidIngredientJS {
        readonly __com_gregtechceu_gtceu_integration_kjs_recipe_components_GTRecipeComponents$FluidIngredientJS: unique symbol;
    }

    type GTRecipeComponents$FluidIngredientJS__Wrapper =
        | GTRecipeComponents$FluidIngredientJS
        | FluidStackJS__Wrapper
        | FluidStackJS__Wrapper[];

    class ExtendedOutputItem {
        readonly __com_gregtechceu_gtceu_integration_kjs_recipe_components_ExtendedOutputItem: unique symbol;
    }

    import InputItem = dev.latvian.mods.kubejs.item.InputItem;
    import OutputItem__Wrapper = dev.latvian.mods.kubejs.item.OutputItem__Wrapper;

    type ExtendedOutputItem__Wrapper = ExtendedOutputItem | InputItem | OutputItem__Wrapper;
}

namespace internal.kjs {
    interface LoadableClasses {
        'com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS': typeof internal.com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS;
    }
}
