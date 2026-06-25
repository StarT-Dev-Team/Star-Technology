declare namespace internal.com.gregtechceu.gtceu.integration.kjs.builders {
    import BuilderBase = api.registry.registrate.BuilderBase;
    import ResourceTexture = lowdragmc.lowdraglib.gui.texture.ResourceTexture;
    import IGuiTexture = com.lowdragmc.lowdraglib.gui.texture.IGuiTexture;
    import IO__Wrapper = internal.com.gregtechceu.gtceu.api.capability.recipe.IO__Wrapper;

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
        setIconSupplier(iconSupplier: SupplierWrapper<ItemStack>): this;
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

    class GTRecipeCategoryBuilder extends BuilderBase<GTRecipeCategory> {
        constructor(id: ResourceLocation__Wrapper);
        recipeType(recipeType: GTRecipeType__Wrapper): this;
        icon(icon: IGuiTexture): this;
        setCustomIcon(location: ResourceLocation__Wrapper): this;
        setItemIcon(itemStacks: ItemStackWrapper[]): this;
        setItemIcon(...itemStacks: ItemStackWrapper[]): this;
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
        machine(machine: TieredCreationFunctionWrapper): this;
        definition(defintiion: DefinitionFunctionWrapper): this;
    }

    import MachineBuilder = api.registry.registrate.MachineBuilder;

    type DefinitionFunctionWrapper =
        | ((tier: number, builder: MachineBuilder<unknown>) => void)
        | KJSTieredMachineBuilder$DefinitionFunction;

    const __KJSTieredMachineBuilder$DefinitionFunction: unique symbol;

    interface KJSTieredMachineBuilder$DefinitionFunction {
        [__KJSTieredMachineBuilder$DefinitionFunction]: 0;
        apply(tier: number, builder: MachineBuilder<unknown>): void;
    }

    import MetaMachine = api.machine.MetaMachine;
    import IMachineBlockEntity = api.machine.IMachineBlockEntity;
    import Int2IntFunction__Wrapper = it.unimi.dsi.fastutil.ints.Int2IntFunction__Wrapper;

    type TieredCreationFunctionWrapper = (
        holder: IMachineBlockEntity,
        tier: number,
        tankScaling: Int2IntFunction__Wrapper
    ) => MetaMachine;

    interface KJSTieredMachineBuilder$TieredCreationFunction {
        create(holder: IMachineBlockEntity, tier: number, tankScaling: Int2IntFunctionWrapper): MetaMachine;
    }

    class KJSTieredMachineBuilder extends BuilderBase<MachineDefinition[]> {}

    class KJSWrappingMultiblockBuilder extends BuilderBase<MultiblockMachineDefinition> {
        tiers(tiers: number[]): this;
        tiers(...tiers: number[]): this;
    }
}
