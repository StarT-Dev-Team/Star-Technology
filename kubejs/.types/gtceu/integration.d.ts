declare namespace internal.com.gregtechceu.gtceu.integration.kjs.builders {
    import BuilderBase__Blueprint = api.registry.registrate.BuilderBase__Blueprint;
    import ResourceTexture = lowdragmc.lowdraglib.gui.texture.ResourceTexture;
    import IGuiTexture = lowdragmc.lowdraglib.gui.texture.IGuiTexture;
    import IO = api.capability.recipe.IO;
    import Supplier = java.util.function_.Supplier;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import GTRecipeType = api.recipe.GTRecipeType;
    import SoundEntry = api.sound.SoundEntry;
    import ProgressTexture$FillDirection = lowdragmc.lowdraglib.gui.texture.ProgressTexture$FillDirection;

    interface GTRecipeTypeBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.GTRecipeTypeBuilder',
        BuilderBase__Blueprint<GTRecipeType, GTRecipeTypeBuilder>
    > {
        category(category: string): this;
        setEUIO(io: $wrapped<IO>): this;
        setMaxTooltips(maxTooltips: number): this;
        setMaxIOSize(maxInputs: number, maxOutputs: number, maxFluidInputs: number, maxFluidOutputs: number): this;
        setProgressBar(progressBar: ResourceTexture, moveType: $wrapped<ProgressTexture$FillDirection>): this;
        setSound(sound: SoundEntry): this;
        setLayered(): this;
        setSlotOverlay(isOutput: boolean, isFluid: boolean, slotOverlay: IGuiTexture): this;
        setHasResearchSlot(hasResearchSlot: boolean): this;
        setIconSupplier(iconSupplier: $wrapped<Supplier<ItemStack>>): this;
    }

    import Element = api.data.chemical.Element;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import Component = net.minecraft.network.chat.Component;

    interface ElementBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.ElementBuilder',
        BuilderBase__Blueprint<Element, ElementBuilder>
    > {
        get name(): string;
        translatableName(translatableName: Component): this;
        protons(protons: number): this;
        neutrons(neutrons: number): this;
        halfLifeSeconds(halfLifeSeconds: number): this;
        decayTo(decayTo: string): this;
        symbol(symbol: string): this;
        isIsotope(isIsotope: boolean): this;
    }

    const ElementBuilder: $class<ElementBuilder> & {
        new (id: $wrapped<ResourceLocation>): ElementBuilder;
    };

    import GTRecipeCategory = api.recipe.category.GTRecipeCategory;

    interface GTRecipeCategoryBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.GTRecipeCategoryBuilder',
        BuilderBase__Blueprint<GTRecipeCategory, GTRecipeCategoryBuilder>
    > {
        recipeType(recipeType: $wrapped<GTRecipeType>): this;
        icon(icon: IGuiTexture): this;
        setCustomIcon(location: $wrapped<ResourceLocation>): this;
        setItemIcon(itemStacks: $wrapped<ItemStack>[]): this;
        setItemIcon(...itemStacks: $wrapped<ItemStack>[]): this;
    }

    const GTRecipeCategoryBuilder: $class<GTRecipeCategoryBuilder> & {
        new (id: $wrapped<ResourceLocation>): GTRecipeCategoryBuilder;
    };

    import SimpleWorldGenLayer = api.data.worldgen.SimpleWorldGenLayer;
    import IWorldGenLayer$RuleTestSupplier = api.data.worldgen.IWorldGenLayer$RuleTestSupplier;

    interface WorldGenLayerBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.WorldGenLayerBuilder',
        BuilderBase__Blueprint<SimpleWorldGenLayer, WorldGenLayerBuilder>
    > {
        targets(...targets: $wrapped<IWorldGenLayer$RuleTestSupplier>[]): this;
        targets(targets: $wrapped<IWorldGenLayer$RuleTestSupplier>[]): this;
        dimensions(...dimensions: $wrapped<ResourceLocation>[]): this;
        dimensions(dimensions: $wrapped<ResourceLocation>[]): this;
    }

    import MaterialIconSet = api.data.chemical.material.info.MaterialIconSet;

    interface MaterialIconSetBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.MaterialIconSetBuilder',
        BuilderBase__Blueprint<MaterialIconSet, MaterialIconSetBuilder>
    > {
        parent(parent: $wrapped<MaterialIconSet>): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.integration.kjs.builders.machine {
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import BuilderBase__Blueprint = api.registry.registrate.BuilderBase__Blueprint;
    import MachineDefinition = api.machine.MachineDefinition;

    interface KJSWrappingTieredMachineBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSWrappingTieredMachineBuilder',
        BuilderBase__Blueprint<MachineDefinition, KJSWrappingTieredMachineBuilder>
    > {
        tiers(tiers: number[]): this;
        tiers(...tiers: number[]): this;
        tiersBetween(minTier: number, maxTier: number): this;
        machine(machine: $wrapped<KJSTieredMachineBuilder$TieredCreationFunction>): this;
        definition(definition: $wrapped<KJSTieredMachineBuilder$DefinitionFunction>): this;
    }

    const KJSWrappingTieredMachineBuilder: $class<KJSWrappingTieredMachineBuilder> & {
        new (id: ResourceLocation, tieredBuilder: KJSTieredMachineBuilder): KJSWrappingTieredMachineBuilder;
    };

    import MachineBuilder = api.registry.registrate.MachineBuilder;

    interface KJSTieredMachineBuilder$DefinitionFunction extends $object<{
        name: 'internal.com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSTieredMachineBuilder$DefinitionFunction';
        functionalInterface: 'apply';
    }> {
        readonly __com_gregtechceu_gtceu_integration_kjs_builders_machine_KJSTieredMachineBuilder$DefinitionFunction: unique symbol;
        apply(tier: number, builder: MachineBuilder<MachineDefinition>): void;
    }

    import MetaMachine = api.machine.MetaMachine;
    import IMachineBlockEntity = api.machine.IMachineBlockEntity;
    import Int2IntFunction = it.unimi.dsi.fastutil.ints.Int2IntFunction;

    interface KJSTieredMachineBuilder$TieredCreationFunction extends $object<{
        name: 'internal.com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSTieredMachineBuilder$TieredCreationFunction';
        functionalInterface: 'create';
    }> {
        create(holder: IMachineBlockEntity, tier: number, tankScaling: $wrapped<Int2IntFunction>): MetaMachine;
    }

    interface KJSTieredMachineBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSTieredMachineBuilder',
        BuilderBase__Blueprint<MachineDefinition[], KJSTieredMachineBuilder>
    > {}

    import MultiblockMachineDefinition = api.machine.MultiblockMachineDefinition;

    interface KJSWrappingMultiblockBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSWrappingMultiblockBuilder',
        BuilderBase__Blueprint<MultiblockMachineDefinition, KJSWrappingMultiblockBuilder>
    > {
        tiers(tiers: number[]): this;
        tiers(...tiers: number[]): this;
    }

    interface KJSWrappingMachineBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSWrappingMachineBuilder',
        BuilderBase__Blueprint<MachineDefinition, KJSWrappingMachineBuilder>
    > {
        recipeTypes(...recipeTypes: string[]): this;
        recipeType(recipeType: string): this;
        editableUI(settings: api.gui.editor.EditableMachineUI): this;
        workableCasingModel(baseCasing: $wrapped<ResourceLocation>, overlayCasing: $wrapped<ResourceLocation>): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.integration.kjs.builders.block {
    import BlockBuilder__Blueprint = dev.latvian.mods.kubejs.block.BlockBuilder__Blueprint;

    interface ActiveBlockBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.block.ActiveBlockBuilder',
        BlockBuilder__Blueprint<ActiveBlockBuilder>
    > {
        simple(base: string): this;
        firebox(bottom: string, side: string, top: string): this;
        bloom(base: string): this;
    }

    import Material = api.data.chemical.material.Material;
    import Supplier = java.util.function_.Supplier;

    interface CoilBlockBuilder extends $object<
        'com.gregtechceu.gtceu.integration.kjs.builders.block.CoilBlockBuilder',
        Omit<BlockBuilder__Blueprint<CoilBlockBuilder>, 'texture'>
    > {
        temperature(temperature: number): this;
        level(level: number): this;
        energyDiscount(energyDiscount: number): this;
        tier(tier: number): this;
        material(material: $wrapped<Supplier<Material>>): this;
        texture(texture: string): this;
        coilMaterial(material: $wrapped<Supplier<Material>>): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.integration.kjs.events {
    import StartupEventJS = dev.latvian.mods.kubejs.event.StartupEventJS;
    import BuilderBase = api.registry.registrate.BuilderBase;

    interface GTRegistryEventJS<T, TBuilder extends { [K in keyof TBuilder]: BuilderBase<T> }> extends $object<
        'com.gregtechceu.gtceu.integration.kjs.events.GTRegistryEventJS',
        StartupEventJS
    > {
        create<B extends Exclude<keyof TBuilder, '_default'>>(id: string, type: B): TBuilder[B];
        create(id: string): TBuilder extends { _default: infer DefaultBuilder } ? DefaultBuilder : never;
    }

    interface MaterialModificationEventJS extends $object<
        'com.gregtechceu.gtceu.integration.kjs.events.MaterialModificationEventJS',
        StartupEventJS
    > {}

    import EventJS = dev.latvian.mods.kubejs.event.EventJS;

    interface GTBedrockOreVeinEventJS extends $object<
        'com.gregtechceu.gtceu.integration.kjs.events.GTBedrockOreVeinEventJS',
        EventJS
    > {}

    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import Consumer = java.util.function_.Consumer;
    import BedrockFluidDefinition = com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition;
    import BedrockFluidDefinition$Builder = com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition$Builder;

    interface GTFluidVeinEventJS extends $object<
        'com.gregtechceu.gtceu.integration.kjs.events.GTFluidVeinEventJS',
        EventJS
    > {
        add(id: $wrapped<ResourceLocation>, consumer: $wrapped<Consumer<BedrockFluidDefinition$Builder>>): void;
        remove(id: $wrapped<ResourceLocation>): void;
        modify(id: $wrapped<ResourceLocation>, consumer: $wrapped<Consumer<BedrockFluidDefinition>>): void;
    }

    import GTOreDefinition = com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition;

    interface GTOreVeinEventJS extends $object<
        'com.gregtechceu.gtceu.integration.kjs.events.GTOreVeinEventJS',
        EventJS
    > {
        add(id: $wrapped<ResourceLocation>, consumer: $wrapped<Consumer<GTOreDefinition>>): void;
        removeAll(): void;
    }

    interface RegisterCapesEventJS extends $object<
        'com.gregtechceu.gtceu.integration.kjs.events.RegisterCapesEventJS',
        EventJS
    > {}
}

declare namespace internal.com.gregtechceu.gtceu.integration.kjs.recipe {
    import RecipeJS = dev.latvian.mods.kubejs.recipe.RecipeJS;
    import InputItem = dev.latvian.mods.kubejs.item.InputItem;
    import GTRecipeComponents$FluidIngredientJS = components.GTRecipeComponents$FluidIngredientJS;
    import EnergyStack$WithIO = api.recipe.ingredient.EnergyStack$WithIO;
    import UnaryOperator = java.util.function_.UnaryOperator;
    import Consumer = java.util.function_.Consumer;
    import ResearchRecipeBuilder$StationRecipeBuilder = api.recipe.ResearchRecipeBuilder$StationRecipeBuilder;
    import ResearchRecipeBuilder$ScannerRecipeBuilder = api.recipe.ResearchRecipeBuilder$ScannerRecipeBuilder;
    import FluidStackJS = dev.latvian.mods.kubejs.fluid.FluidStackJS;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import CleanroomType = api.machine.multiblock.CleanroomType;
    import LayeredRecipeInfo$JSBuilder = data.recipe.builder.LayeredRecipeInfo$JSBuilder;
    import ExtendedOutputItem = components.ExtendedOutputItem;
    import GTRecipeCategory = api.recipe.category.GTRecipeCategory;
    import Fluid = net.minecraft.world.level.material.Fluid;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import Tag = net.minecraft.nbt.Tag;

    interface GTRecipeSchema$GTRecipeJS extends $object<
        'com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS',
        RecipeJS
    > {
        category(category: $wrapped<GTRecipeCategory>): this;
        itemInputs(...inputs: $wrapped<InputItem>[]): this;
        itemInputs(inputs: readonly $wrapped<InputItem>[]): this;
        inputFluids(...inputs: $wrapped<GTRecipeComponents$FluidIngredientJS>[]): this;
        inputFluids(inputs: readonly $wrapped<GTRecipeComponents$FluidIngredientJS>[]): this;
        fluidInputs(...inputs: $wrapped<GTRecipeComponents$FluidIngredientJS>[]): this;
        fluidInputs(inputs: readonly $wrapped<GTRecipeComponents$FluidIngredientJS>[]): this;
        itemOutputs(...outputs: $wrapped<ExtendedOutputItem>[]): this;
        itemOutputs(outputs: readonly $wrapped<ExtendedOutputItem>[]): this;
        notConsumable(itemStack: $wrapped<ItemStack>): this;
        notConsumableFluid(itemStack: $wrapped<ItemStack>): this;
        outputFluids(...inputs: $wrapped<FluidStackJS>[]): this;
        outputFluids(inputs: readonly $wrapped<GTRecipeComponents$FluidIngredientJS>[]): this;
        fluidOutputs(...inputs: $wrapped<FluidStackJS>[]): this;
        fluidOutputs(inputs: readonly $wrapped<GTRecipeComponents$FluidIngredientJS>[]): this;
        chancedInput(stack: $wrapped<InputItem>, chance: number, tierChanceBoost: number): this;
        chancedOutput(stack: $wrapped<ExtendedOutputItem>, chance: number, tierChanceBoost: number): this;
        chancedFluidOutput(stack: $wrapped<FluidStackJS>, chance: number, tierChanceBoost: number): this;
        itemOutputsRanged(stack: $wrapped<ExtendedOutputItem>, min: number, max: number): this;
        outputFluidsRanged(output: $wrapped<FluidStackJS>, min: number, max: number): this;
        duration(duration: number): this;
        EUt(eut: $wrapped<EnergyStack$WithIO>): this;
        circuit(configuration: number): this;
        stationResearch(research: $wrapped<UnaryOperator<ResearchRecipeBuilder$StationRecipeBuilder>>): this;
        'scannerResearch(java.util.function.UnaryOperator)'(
            research: $wrapped<UnaryOperator<ResearchRecipeBuilder$ScannerRecipeBuilder>>
        ): this;
        cleanroom(cleanroomType: CleanroomType | null): this;
        layeredRecipe(config: $wrapped<Consumer<LayeredRecipeInfo$JSBuilder>>): this;
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
        adjacentFluids(...fluids: $wrapped<Fluid>[]): this;
        dimension(dimension: $wrapped<ResourceLocation>): this;
        dimension(dimension: $wrapped<ResourceLocation>, reverse: boolean): this;
        daytime(): this;
        addData(key: string, data: $wrapped<Tag>): this;
        addDataString(key: string, data: string): this;
        addDataNumber(key: string, data: number): this;
        addDataBool(key: string, data: boolean): this;
    }

    interface GTShapedRecipeSchema$ShapedRecipeJS extends $object<
        'com.gregtechceu.gtceu.integration.kjs.recipe.GTShapedRecipeSchema$ShapedRecipeJS',
        RecipeJS
    > {
        addMaterialInfo(): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.integration.kjs.recipe.components {
    import FluidStack = net.minecraftforge.fluids.FluidStack;
    import Fluid = net.minecraft.world.level.material.Fluid;
    import InputFluid = dev.latvian.mods.kubejs.fluid.InputFluid;
    import OutputFluid = dev.latvian.mods.kubejs.fluid.OutputFluid;

    interface GTRecipeComponents$FluidIngredientJS extends $object<
        'com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS',
        InputFluid,
        OutputFluid
    > {}

    const GTRecipeComponents$FluidIngredientJS: $class<GTRecipeComponents$FluidIngredientJS> & {
        of(stack: $wrapped<FluidStack>): GTRecipeComponents$FluidIngredientJS;
        of(fluid: $wrapped<Fluid>, amount: number): GTRecipeComponents$FluidIngredientJS;
    };

    interface ExtendedOutputItem extends $object<'com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem'> {}
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS': typeof internal.com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS;
    }
}
