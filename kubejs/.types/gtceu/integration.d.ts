declare namespace internal.com.gregtechceu.gtceu.integration.kjs.builders {
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
}

declare namespace internal.com.gregtechceu.gtceu.integration.kjs.builders.machine {
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
