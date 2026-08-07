declare namespace internal.com.gregtechceu.gtceu.api {
    const GTValues: {
        M: number;

        L: number;

        // RNG: RandomSource;

        SECONDS: number;
        MINUTES: number;
        HOURS: number;
        DAYS: number;
        WEEKS: number;
        MONTHS: number;
        YEARS: number;

        CLIENT_TIME: number;

        V: number[];
        VH: number[];
        VA: number[];
        VHA: number[];
        VEX: number[];

        ULV: 0;
        LV: 1;
        MV: 2;
        HV: 3;
        EV: 4;
        IV: 5;
        LuV: 6;
        ZPM: 7;
        UV: 8;
        UHV: 9;
        UEV: 10;
        UIV: 11;
        UXV: 12;
        OpV: 13;
        MAX: 14;
        MAX_TRUE: 30;

        ALL_TIERS: number[];
        TIER_COUNT: number;

        tiersBetween(minInclusive: number, maxInclusive: number): number[];

        VN: string[];
        VNF: string[];
        VCF: string[];
        VLVH: string[];
        VLVT: string[];
        LVT: string[];

        VC: number[];
        VCM: number[];

        VC_LP_STEAM: number;
        VC_HP_STEAM: number;

        VOLTAGE_NAMES: string[];
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.capability {
    const __IControllable: unique symbol;
    interface IControllable {
        [__IControllable]: 0;
        isWorkingEnabled(): boolean;
        setWorkingEnabled(isWorkingAllowed: boolean): void;
        setSuspendAfterFinish(suspendAfterFinish: boolean): void;
        isSuspendAfterFinish(): boolean;
    }

    import BooleanProperty = net.minecraft.world.level.block.state.properties.BooleanProperty;

    const IControllable: {
        WORKING_ENABLED_PROPERTY: BooleanProperty;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.capability.recipe {
    import Predicate = java.util.function_.Predicate;

    interface IFilteredHandler<K> extends $object<
        'com.gregtechceu.gtceu.api.capability.recipe.IFilteredHandler',
        Predicate<K>
    > {}

    interface IRecipeHandler<K> extends $object<
        'com.gregtechceu.gtceu.api.capability.recipe.IRecipeHandler',
        IFilteredHandler<K>
    > {
        getSize(): number;
        getContents(): any[];
    }

    import Enum = internal.java.lang.Enum;
    import IGuiTexture = lowdragmc.lowdraglib.gui.texture.IGuiTexture;

    interface IO extends $object<
        { name: 'com.gregtechceu.gtceu.api.capability.recipe.IO'; enumClass: typeof IO },
        Enum<IO>
    > {
        get tooltip(): string;
        get icon(): IGuiTexture;
    }

    const IO: $class<IO> & {
        IN: IO;
        OUT: IO;
        BOTH: IO;
        NONE: IO;
        values(): IO[];
    };

    import Map = java.util.Map;
    import List = java.util.List;
    import RecipeHandlerList = machine.trait.RecipeHandlerList;

    interface IRecipeCapabilityHolder extends $object<'com.gregtechceu.gtceu.api.capability.recipe.IRecipeCapabilityHolder'> {
        hasCapabilityProxies(): boolean;
        getCapabilitiesProxy(): Map<IO, List<RecipeHandlerList>>;
        getCapabilitiesFlat(): Map<IO, Map<$wrapped<RecipeCapability<unknown>>, List<IRecipeHandler<unknown>>>>;
        getCapabilitiesForIO(io: $wrapped<IO>): RecipeHandlerList;
        getCapabilitiesFlat(io: $wrapped<IO>, cap: $wrapped<RecipeCapability<unknown>>): List<IRecipeHandler<unknown>>;
    }

    interface RecipeCapability<T> extends $object<'com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability'> {}
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe {
    import Recipe = net.minecraft.world.item.crafting.Recipe;
    import Container = net.minecraft.world.Container;

    interface GTRecipe extends $object<'com.gregtechceu.gtceu.api.recipe.GTRecipe', Recipe<Container>> {
        duration: number;
    }

    const GTRecipe: $class<GTRecipe> & {};

    interface RecipeHelper extends $object<'com.gregtechceu.gtceu.api.recipe.RecipeHelper'> {}

    const RecipeHelper: $class<RecipeHelper> & {
        getRealEUt(recipe: GTRecipe): number;
    };

    import Function = java.util.function_.Function;
    import CompoundTag = net.minecraft.nbt.CompoundTag;
    import GTRecipeBuilder = gtceu.data.recipe.builder.GTRecipeBuilder;

    interface GTRecipeType extends $object<'com.gregtechceu.gtceu.api.recipe.GTRecipeType'> {
        recipeBuilder(id: string): GTRecipeBuilder;
        setMaxIOSize(maxInputs: number, maxOutputs: number, maxFluidInputs: number, maxFluidOutputs: number): this;
        addDataInfo(dataInfo: $wrapped<Function<CompoundTag, String>>): this;
        addCustomRecipeLogic(recipeLogic: GTRecipeType$ICustomRecipeLogic): this;
        addToMainCategory(recipe: GTRecipe): void;
    }

    import IRecipeCapabilityHolder = capability.recipe.IRecipeCapabilityHolder;

    interface GTRecipeType$ICustomRecipeLogic extends $object<'com.gregtechceu.gtceu.api.recipe.GTRecipeType$ICustomRecipeLogic'> {
        createCustomRecipe(holder: IRecipeCapabilityHolder): GTRecipe | null;
        buildRepresentativeRecipes(): void;
    }

    const GTRecipeType$ICustomRecipeLogic: $class<GTRecipeType$ICustomRecipeLogic> & {};

    import ItemStack = net.minecraft.world.item.ItemStack;
    import FluidStack = net.minecraftforge.fluids.FluidStack;

    interface ResearchRecipeBuilder extends $object<'com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder'> {
        researchStack(researchStack: $wrapped<ItemStack>): this;
        researchFluidStack(researchStack: $wrapped<FluidStack>): this;
        dataStack(dataStack: $wrapped<ItemStack>): this;
        researchId(researchId: string): this;
        EUt(eut: number): this;
        EUt(eut: number, amperage: number): this;
    }

    interface ResearchRecipeBuilder$StationRecipeBuilder extends $object<
        'com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder$StationRecipeBuilder',
        ResearchRecipeBuilder
    > {
        CWUt(cwut: number): this;
        CWUt(cwut: number, totalCWU: number): this;
    }

    interface ResearchRecipeBuilder$ScannerRecipeBuilder extends $object<
        'com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder$ScannerRecipeBuilder',
        ResearchRecipeBuilder
    > {
        duration(duration: number): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe.category {
    interface GTRecipeCategory extends $object<'com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory'> {}
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe.ingredient {
    interface EnergyStack$WithIO extends $object<'com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack$WithIO'> {}

    import Predicate = java.util.function_.Predicate;
    import FluidStack = net.minecraftforge.fluids.FluidStack;

    interface FluidIngredient extends $object<
        'com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient',
        Predicate<FluidStack>
    > {}
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe.ingredient.nbtpredicate {
    import Tag = net.minecraft.nbt.Tag;

    interface NBTPredicate extends $object<'com.gregtechceu.gtceu.api.recipe.ingredient.nbtpredicate.NBTPredicate'> {
        getType(): string;
        test(tag: $wrapped<Tag>): boolean;
    }

    const NBTPredicates: $class<'com.gregtecgceu.gtceu.api.recipe.ingredient.nbtpredicate.NBTPredicates'>  &{
        eqInt(key: string, value: number): NBTPredicate;
        eqFloat(key: string, value: number): NBTPredicate;
        eqDouble(key: string, value: number): NBTPredicate;
        eqBool(key: string, value: boolean): NBTPredicate;
        eqByte(key: string, value: boolean): NBTPredicate;
        eqString(key: string, value: string): NBTPredicate;
        eqTag(key: string, value: Tag): NBTPredicate;
        neqInt(key: string, value: number): NBTPredicate;
        neqFloat(key: string, value: number): NBTPredicate;
        neqDouble(key: string, value: number): NBTPredicate;
        neqBool(key: string, value: boolean): NBTPredicate;
        neqByte(key: string, value: boolean): NBTPredicate;
        neqString(key: string, value: string): NBTPredicate;
        neqTag(key: string, value: $wrapped<Tag>): NBTPredicate;
        lte(key: string, value: number): NBTPredicate;
        gte(key: string, value: number): NBTPredicate;
        gt(key: string, value: number): NBTPredicate;
        lte(key: string, value: Tag): NBTPredicate;
        gte(key: string, value: Tag): NBTPredicate;
        gt(key: string, value: Tag): NBTPredicate;
        any(...predicates: NBTPredicate[]): NBTPredicate;
        any(predicates: NBTPredicate[]): NBTPredicate;
        all(...predicates: NBTPredicate[]): NBTPredicate;
        all(predicates: NBTPredicate[]): NBTPredicate;
        not(predicate: NBTPredicate): NBTPredicate;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe.modifier {
    import MetaMachine = machine.MetaMachine;
    import GTRecipe = recipe.GTRecipe;

    interface RecipeModifier extends $object<{
        name: 'com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier';
        functionalInterface: 'getModifier';
    }> {
        getModifier(machine: MetaMachine, recipe: GTRecipe): ModifierFunction;
    }

    interface ModifierFunction extends $object<'com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction'> {
        apply(recipe: GTRecipe): GTRecipe | null;
    }

    const ModifierFunction: {
        NULL: ModifierFunction;
        IDENTITY: ModifierFunction;

        cancel(component: net.minecraft.network.chat.Component): ModifierFunction;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.data {
    import Enum = java.lang.Enum;
    import Predicate = java.util.function_.Predicate;
    import Direction = net.minecraft.core.Direction;
    import DirectionProperty = net.minecraft.world.level.block.state.properties.DirectionProperty;

    interface RotationState extends $object<
        'com.gregtechceu.gtceu.api.data.RotationState',
        Enum<RotationState>,
        Predicate<Direction>
    > {
        get defaultDirection(): Direction;
        get property(): DirectionProperty;
    }

    const RotationState: $class<RotationState> & {
        ALL: RotationState;
        NONE: RotationState;
        Y_AXIS: RotationState;
        NON_Y_AXIS: RotationState;
    };

    // type $wrapped<RotationState> = RotationState | EnumKeys<typeof RotationState>;
}

declare namespace internal.com.gregtechceu.gtceu.api.data.chemical {
    interface Element extends $object<'com.gregtechceu.gtceu.api.data.chemical.Element'> {
        protons(): number;
        protons(protons: number): this;
        neutrons(): number;
        neutrons(neutrons: number): this;
        halfLifeSeconds(): number;
        halfLifeSeconds(halfLifeSeconds: number): this;
        decayTo(): string;
        decayTo(decayTo: string): this;
        name(): string;
        name(name: string): this;
        symbol(): string;
        symbol(symbol: string): this;
        isIsotope(): boolean;
        isIsotope(isIsotope: boolean): this;
        mass(): number;
    }

    import ItemStack = net.minecraft.world.item.ItemStack;
    import MaterialStack = material.stack.MaterialStack;

    const ChemicalHelper: {
        'getMaterialStack(net.minecraft.world.item.ItemStack)'(itemStack: $wrapped<ItemStack>): MaterialStack;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.data.chemical.material {
    import MaterialIconSet = info.MaterialIconSet;
    import MaterialFlag = info.MaterialFlag;
    import PropertyKey = properties.PropertyKey;
    import IMaterialProperty = properties.IMaterialProperty;
    import MaterialStack = material.stack.MaterialStack;

    interface Material extends $object<'com.gregtechceu.gtceu.api.data.chemical.material.Material'> {
        // getMaterialInfo(): MaterialInfo;
        // get materialInfo(): MaterialInfo;
        setMaterialARGB(materialRGB: number): void;
        set materialARGB(materialRGB: number);
        setMaterialIconSet(materialIconSet: $wrapped<MaterialIconSet>): void;
        set materialIconSet(materialIconSet: MaterialIconSet);
        getMaterialIconSet(): MaterialIconSet;
        get materialIconSet(): MaterialIconSet;
        getMass(): number;
        get mass(): number;
        addFlags(...flags: $wrapped<MaterialFlag>[]): void;
        addFlags(flags: $wrapped<MaterialFlag>[]): void;
        hasFlag(flag: MaterialFlag): boolean;
        setFormula(formula: string): this;
        setFormula(formula: string, withFormatting: boolean): this;
        hasProperty<T extends IMaterialProperty>(key: PropertyKey<T>): boolean;
        getProperty<T extends IMaterialProperty>(key: PropertyKey<T>): T;
        setProperty(key: PropertyKey<IMaterialProperty>, property: IMaterialProperty): void;
        setComponents(...components: $wrapped<MaterialStack>[]): this;
        setComponents(components: $wrapped<MaterialStack>[]): this;
    }

    import BuilderBase = registry.registrate.BuilderBase;
    import BlastProperty$GasTier = properties.BlastProperty$GasTier;
    import ToolProperty = properties.ToolProperty;
    import FluidStorageKey = fluids.store.FluidStorageKey;
    import FluidState = fluids.FluidState;
    import FluidBuilder = fluids.FluidBuilder;

    interface Material$Builder extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.Material$Builder',
        BuilderBase<Material>
    > {
        langValue(name: string): this;
        fluid(): this;
        fluid(key: FluidStorageKey, state: $wrapped<FluidState>): this;
        fluid(key: FluidStorageKey, builder: FluidBuilder): this;
        liquid(): this;
        liquid(builder: FluidBuilder): this;
        liquid(temp: number): this;
        plasma(): this;
        // plasma(@NotNull FluidBuilder builder)
        // plasma(int temp)
        gas(): this;
        // gas(@NotNull FluidBuilder builder)
        // gas(int temp)
        dust(): this;
        // dust(int harvestLevel)
        // dust(int harvestLevel, int burnTime)
        wood(): this;
        // wood(int harvestLevel)
        // wood(int harvestLevel, int burnTime)
        ingot(): this;
        // ingot(int harvestLevel)
        // ingot(int harvestLevel, int burnTime)
        gem(): this;
        // gem(int harvestLevel)
        // gem(int harvestLevel, int burnTime)
        polymer(): this;
        // polymer(int harvestLevel)
        // polymer(int harvestLevel, int burnTime)
        // burnTime(int burnTime)
        color(color: number): this;
        color(color: number, hasFluidColor: boolean): this;
        secondaryColor(color: number): this;
        colors(color: number, secondaryColor: number): this;
        colorAverage(): this;
        iconSet(iconSet: $wrapped<MaterialIconSet> | null): this;
        components(components: $wrapped<Material>[]): this;
        components(...components: $wrapped<Material>[]): this;
        // componentStacks(MaterialStack... components)
        // componentStacks(ImmutableList<MaterialStack> components)
        // kjs$components(MaterialStackWrapper... components)
        // kjs$components(ImmutableList<MaterialStackWrapper> components)
        flags(flags: $wrapped<MaterialFlag>[]): this;
        flags(...flags: $wrapped<MaterialFlag>[]): this;
        // appendFlags(Collection<MaterialFlag> f1, MaterialFlag... f2)
        // ignoredTagPrefixes(TagPrefix... prefixes)
        // customTags(TagKey<Item> key)
        element(element: $wrapped<Element>): this;
        formula(formula: string): this;
        formula(formula: string, withFormatting: boolean): this;
        toolStats(toolProperty: ToolProperty): this;
        // armorStats(ArmorProperty armorProperty)
        rotorStats(power: number, efficiency: number, damage: number, durability: number): this;
        blastTemp(temp: number): this;
        blastTemp(temp: number, gasTier: $wrapped<BlastProperty$GasTier>): this;
        blastTemp(temp: number, gasTier: $wrapped<BlastProperty$GasTier>, eutOverride: number): this;
        blastTemp(
            temp: number,
            gasTier: $wrapped<BlastProperty$GasTier>,
            eutOverride: number,
            durationOverride: number
        ): this;
        blast(temp: number): this;
        blast(temp: number, gasTier: $wrapped<BlastProperty$GasTier>): this;
        // blast(UnaryOperator<BlastProperty.Builder> b)
        removeHazard(): this;
        radioactiveHazard(multiplier: number): this;
        // hazard(HazardProperty.HazardTrigger trigger, MedicalCondition condition)
        // hazard(HazardProperty.HazardTrigger trigger, MedicalCondition conditio
        // hazard(HazardProperty.HazardTrigger trigger, MedicalCondition conditio
        // hazard(HazardProperty.HazardTrigger trigger, MedicalCondition conditio
        ore(): this;
        ore(emissive: boolean): this;
        ore(oreMultiplier: number, byproductMultiplier: number): this;
        ore(oreMultiplier: number, byproductMultiplier: number, emissive: boolean): this;
        washedIn(m: $wrapped<Material>): this;
        washedIn(m: $wrapped<Material>, washedAmount: number): this;
        separatedInto(m: $wrapped<Material>[]): this;
        separatedInto(...m: $wrapped<Material>[]): this;
        oreSmeltInto(m: $wrapped<Material>): this;
        polarizesInto(m: $wrapped<Material>): this;
        arcSmeltInto(m: $wrapped<Material>): this;
        macerateInto(m: $wrapped<Material>): this;
        ingotSmeltInto(m: $wrapped<Material>): this;
        addOreByproducts(byproducts: $wrapped<Material>[]): this;
        addOreByproducts(...byproducts: $wrapped<Material>[]): this;
        cableProperties(voltage: number, amperage: number, loss: number): this;
        cableProperties(voltage: number, amperage: number, loss: number, isSuperCon: boolean): this;
        cableProperties(
            voltage: number,
            amperage: number,
            loss: number,
            isSuperCon: boolean,
            criticalTemperature: number
        ): this;
        fluidPipeProperties(maxTemp: number, throughput: number, gasProof: boolean): this;
        fluidPipeProperties(
            maxTemp: number,
            throughput: number,
            gasProof: boolean,
            acidProof: boolean,
            cryoProof: boolean,
            plasmaProof: boolean
        ): this;
        itemPipeProperties(priority: number, stacksPerSec: number): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.data.chemical.material.properties {
    interface AlloyBlastProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.AlloyBlastProperty',
        IMaterialProperty
    > {}

    const AlloyBlastProperty: $class<AlloyBlastProperty> & {};

    interface ArmorProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty',
        IMaterialProperty
    > {}

    const ArmorProperty: $class<ArmorProperty> & {};

    interface BlastProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty',
        IMaterialProperty
    > {
        getBlastTemperature(): number;
        get blastTemperature(): number;
    }

    const BlastProperty: $class<BlastProperty> & {
        new (blastTemperature: number): BlastProperty;
        new (blastTemperature: number, gasTier: $wrapped<BlastProperty$GasTier>): BlastProperty;
        new (
            blastTemperature: number,
            gasTier: $wrapped<BlastProperty$GasTier>,
            eutOverride: number,
            durationOverride: number,
            vacuumEUtOverride: number,
            vacuumDurationOverride: number
        ): BlastProperty;
        new (): BlastProperty;
    };

    import Enum = java.lang.Enum;

    interface BlastProperty$GasTier extends $object<
        {
            name: 'com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty$GasTier';
            enumClass: typeof BlastProperty$GasTier;
        },
        Enum<BlastProperty$GasTier>
    > {}

    const BlastProperty$GasTier: $class<BlastProperty$GasTier> & {
        LOW: BlastProperty$GasTier;
        MID: BlastProperty$GasTier;
        HIGH: BlastProperty$GasTier;
        HIGHER: BlastProperty$GasTier;
        HIGHEST: BlastProperty$GasTier;
    };

    interface DustProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty',
        IMaterialProperty
    > {}

    const DustProperty: $class<DustProperty> & {
        new (): IngotProperty;
    };

    interface FluidPipeProperties extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties',
        IMaterialProperty
    > {}

    const FluidPipeProperties: $class<FluidPipeProperties> & {
        new (
            maxFluidTemperature: number,
            throughput: number,
            gasProof: boolean,
            acidProof: boolean,
            cryoProof: boolean,
            plasmaProof: boolean,
            channels: number
        ): FluidPipeProperties;
        new (
            maxFluidTemperature: number,
            throughput: number,
            gasProof: boolean,
            acidProof: boolean,
            cryoProof: boolean,
            plasmaProof: boolean
        ): FluidPipeProperties;
    };

    import FluidStorage = fluids.store.FluidStorage;

    interface FluidProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty',
        IMaterialProperty,
        FluidStorage
    > {
        getStorage(): FluidStorage;
        get storage(): FluidStorage;
    }

    const FluidProperty: $class<FluidProperty> & {
        new (): FluidProperty;
    };

    interface GemProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty',
        IMaterialProperty
    > {}

    const GemProperty: $class<GemProperty> & {};

    interface HazardProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty',
        IMaterialProperty
    > {}

    const HazardProperty: $class<HazardProperty> & {};

    interface IngotProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty',
        IMaterialProperty
    > {
        getSmeltingInto(): Material;
        get smeltingInto(): Material;
    }

    const IngotProperty: $class<IngotProperty> & {
        new (): IngotProperty;
    };

    interface ItemPipeProperties extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties',
        IMaterialProperty
    > {}

    const ItemPipeProperties: $class<ItemPipeProperties> & {};

    interface MaterialProperties extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties',
        IMaterialProperty
    > {}

    const MaterialProperties: $class<MaterialProperties> & {};

    interface OreProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty',
        IMaterialProperty
    > {}

    const OreProperty: $class<OreProperty> & {};

    interface PolymerProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.PolymerProperty',
        IMaterialProperty
    > {}

    const PolymerProperty: $class<PolymerProperty> & {};

    interface RotorProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty',
        IMaterialProperty
    > {}

    const RotorProperty: $class<RotorProperty> & {};

    interface ToolProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolPerperty',
        IMaterialProperty
    > {}

    const ToolProperty: $class<ToolProperty> & {
        Builder: typeof ToolProperty$Builder;
    };

    namespace ToolProperty {
        type Builder = ToolProperty$Builder;
    }

    import GTToolType = item.tool.GTToolType;

    interface ToolProperty$Builder extends $object<'com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty$Builder'> {
        enchantability(enchantability: number): this;
        attackSpeed(attackSpeed: number): this;
        ignoreCraftingTools(): this;
        unbreakable(): this;
        types(...types: GTToolType[]): this;
        types(types: GTToolType[]): this;
        addTypes(...types: GTToolType[]): this;
        addTypes(types: GTToolType[]): this;
        // enchantment(enchantment: Enchantment, level: number): this;
        magnetic(): this;
        durabilityMultiplier(multiplier: number): this;
        build(): ToolProperty;
    }

    const ToolProperty$Builder: $class<ToolProperty$Builder> & {
        of(harvestSpeed: number, attackDamage: number, durability: number, harvestLevel: number): ToolProperty$Builder;
        of(
            harvestSpeed: number,
            attackDamage: number,
            durability: number,
            harvestLevel: number,
            ...types: GTToolType[]
        ): ToolProperty$Builder;
        of(
            harvestSpeed: number,
            attackDamage: number,
            durability: number,
            harvestLevel: number,
            types: GTToolType[]
        ): ToolProperty$Builder;
    };

    interface WireProperties extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties',
        IMaterialProperty
    > {}

    const WireProperties: $class<WireProperties> & {};

    interface WoodProperty extends $object<
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.WoodProperty',
        IMaterialProperty
    > {}

    const WoodProperty: $class<WoodProperty> & {};

    import Class = java.lang.Class;

    interface PropertyKey<
        T extends IMaterialProperty,
    > extends $object<'com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey'> {
        getKey(): string;
        get key(): string;
        getType(): Class<T>;
        get type(): Class<T>;
    }

    const PropertyKey: $class<PropertyKey<IMaterialProperty>> & {
        BLAST: PropertyKey<BlastProperty>;
        ALLOY_BLAST: PropertyKey<AlloyBlastProperty>;
        DUST: PropertyKey<DustProperty>;
        FLUID_PIPE: PropertyKey<FluidPipeProperties>;
        FLUID: PropertyKey<FluidProperty>;
        GEM: PropertyKey<GemProperty>;
        INGOT: PropertyKey<IngotProperty>;
        POLYMER: PropertyKey<PolymerProperty>;
        ITEM_PIPE: PropertyKey<ItemPipeProperties>;
        ORE: PropertyKey<OreProperty>;
        TOOL: PropertyKey<ToolProperty>;
        ARMOR: PropertyKey<ArmorProperty>;
        ROTOR: PropertyKey<RotorProperty>;
        WIRE: PropertyKey<WireProperties>;
        WOOD: PropertyKey<WoodProperty>;
        HAZARD: PropertyKey<HazardProperty>;
        EMPTY: PropertyKey<IMaterialProperty>;
    };

    interface IMaterialProperty extends $object<'com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty'> {}
}

declare namespace internal.com.gregtechceu.gtceu.api.data.chemical.material.stack {
    interface MaterialStack extends $object<'com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack'> {
        material(): Material;
        amount(): number;
        add(amount: number): MaterialStack;
        multiply(amount: number): MaterialStack;
        multiply(amount: number): MaterialStack;
        divide(amount: number): MaterialStack;
        isEmpty(): boolean;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.data.chemical.material.info {
    interface MaterialIconSet extends $object<{
        name: 'com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet';
        enumClass: typeof MaterialIconSet;
    }> {}

    const MaterialIconSet: $class<MaterialIconSet> & {
        DULL: MaterialIconSet;
        METALLIC: MaterialIconSet;
        MAGNETIC: MaterialIconSet;
        SHINY: MaterialIconSet;
        BRIGHT: MaterialIconSet;
        DIAMOND: MaterialIconSet;
        EMERALD: MaterialIconSet;
        GEM_HORIZONTAL: MaterialIconSet;
        GEM_VERTICAL: MaterialIconSet;
        RUBY: MaterialIconSet;
        OPAL: MaterialIconSet;
        GLASS: MaterialIconSet;
        NETHERSTAR: MaterialIconSet;
        FINE: MaterialIconSet;
        SAND: MaterialIconSet;
        WOOD: MaterialIconSet;
        ROUGH: MaterialIconSet;
        FLINT: MaterialIconSet;
        LIGNITE: MaterialIconSet;
        QUARTZ: MaterialIconSet;
        CERTUS: MaterialIconSet;
        LAPIS: MaterialIconSet;
        FLUID: MaterialIconSet;
        RADIOACTIVE: MaterialIconSet;
    };

    interface MaterialFlag extends $object<'com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlag'> {}

    interface MaterialFlags extends $object<'com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags'> {}

    const MaterialFlags: $class<MaterialFlag> & {
        NO_UNIFICATION: MaterialFlag;
        DISABLE_MATERIAL_RECIPES: MaterialFlag;
        DECOMPOSITION_BY_ELECTROLYZING: MaterialFlag;
        DECOMPOSITION_BY_CENTRIFUGING: MaterialFlag;
        DISABLE_DECOMPOSITION: MaterialFlag;
        EXPLOSIVE: MaterialFlag;
        FLAMMABLE: MaterialFlag;
        STICKY: MaterialFlag;
        PHOSPHORESCENT: MaterialFlag;
        FIRE_RESISTANT: MaterialFlag;
        GENERATE_PLATE: MaterialFlag;
        GENERATE_DENSE: MaterialFlag;
        GENERATE_ROD: MaterialFlag;
        GENERATE_BOLT_SCREW: MaterialFlag;
        GENERATE_FRAME: MaterialFlag;
        GENERATE_GEAR: MaterialFlag;
        GENERATE_LONG_ROD: MaterialFlag;
        FORCE_GENERATE_BLOCK: MaterialFlag;
        EXCLUDE_BLOCK_CRAFTING_RECIPES: MaterialFlag;
        EXCLUDE_PLATE_COMPRESSOR_RECIPE: MaterialFlag;
        EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES: MaterialFlag;
        MORTAR_GRINDABLE: MaterialFlag;
        NO_WORKING: MaterialFlag;
        NO_SMASHING: MaterialFlag;
        NO_SMELTING: MaterialFlag;
        NO_ORE_SMELTING: MaterialFlag;
        NO_ORE_PROCESSING_TAB: MaterialFlag;
        BLAST_FURNACE_CALCITE_DOUBLE: MaterialFlag;
        BLAST_FURNACE_CALCITE_TRIPLE: MaterialFlag;
        DISABLE_ALLOY_BLAST: MaterialFlag;
        DISABLE_ALLOY_PROPERTY: MaterialFlag;
        SOLDER_MATERIAL: MaterialFlag;
        SOLDER_MATERIAL_BAD: MaterialFlag;
        SOLDER_MATERIAL_GOOD: MaterialFlag;
        GENERATE_FOIL: MaterialFlag;
        GENERATE_RING: MaterialFlag;
        GENERATE_SPRING: MaterialFlag;
        GENERATE_SPRING_SMALL: MaterialFlag;
        GENERATE_SMALL_GEAR: MaterialFlag;
        GENERATE_FINE_WIRE: MaterialFlag;
        GENERATE_ROTOR: MaterialFlag;
        GENERATE_ROUND: MaterialFlag;
        IS_MAGNETIC: MaterialFlag;
        CRYSTALLIZABLE: MaterialFlag;
        GENERATE_LENS: MaterialFlag;
        HIGH_SIFTER_OUTPUT: MaterialFlag;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.data.worldgen {
    interface IWorldGenLayer extends $object<'com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer'> {}

    import RuleTest = net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest;

    interface IWorldGenLayer$RuleTestSupplier extends $object<'com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer$RuleTestSupplier'> {
        get(): RuleTest;
    }

    interface SimpleWorldGenLayer extends $object<
        'com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer',
        IWorldGenLayer
    > {}

    import IntProvider = net.minecraft.util.valueproviders.IntProvider;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import Consumer = java.util.function_.Consumer;
    import LayeredVeinGenerator = generator.veins.LayeredVeinGenerator;
    import SurfaceIndicatorGenerator = generator.indicators.SurfaceIndicatorGenerator;

    interface GTOreDefinition extends $object<'com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition'> {
        // dimensionFilter(dimensionFilter: Set<ResourceKey<Level>>): this;
        // range(range: HeightRangePlacement): this;
        discardChanceOnAirExposure(discardChanceOnAirExposure: number): this;
        // biomeWeightModifier(biomeWeightModifier: BiomeWeightModifier): this;
        // veinGenerator(veinGenerator: VeinGenerator): this;
        // indicatorGenerators(indicatorGenerators: List<IndicatorGenerator>): this;
        clusterSize(clusterSize: $wrapped<IntProvider>): this;
        clusterSize(clusterSize: number): this;
        density(density: number): this;
        weight(weight: number): this;
        layer(layer: $wrapped<IWorldGenLayer>): this;
        dimensions(...dimensions: $wrapped<ResourceLocation>[]): this;
        biomes(first: string, ...biomes: string[]): this;
        heightRangeUniform(min: number, max: number): this;
        heightRangeTriangle(min: number, max: number): this;
        // heightRange(range: HeightRangePlacement): this;
        // standardVeinGenerator(config: $wrapped<Consumer<StandardVeinGenerator>>): this;
        layeredVeinGenerator(config: $wrapped<Consumer<LayeredVeinGenerator>>): this;
        // geodeVeinGenerator(config: $wrapped<Consumer<GeodeVeinGenerator>>): this;
        // dikeVeinGenerator(config: $wrapped<Consumer<DikeVeinGenerator>>): this;
        // veinedVeinGenerator(config: $wrapped<Consumer<VeinedVeinGenerator>>): this;
        // classicVeinGenerator(config: $wrapped<Consumer<ClassicVeinGenerator>>): this;
        // cuboidVeinGenerator(config: $wrapped<Consumer<CuboidVeinGenerator>>): this;
        surfaceIndicatorGenerator(config: $wrapped<Consumer<SurfaceIndicatorGenerator>>): this;
    }

    interface GTLayerPattern$Builder extends $object<'com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern$Builder'> {
        layer(config: $wrapped<Consumer<GTLayerPattern$Layer$Builder>>): this;
    }

    import Block = net.minecraft.world.level.block.Block;
    import BlockState = net.minecraft.world.level.block.state.BlockState;
    import Supplier = java.util.function_.Supplier;
    import Material = chemical.material.Material;

    interface GTLayerPattern$Layer$Builder extends $object<'com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern$Layer$Builder'> {
        block(block: $wrapped<Supplier<Block>>): this;
        state(state: $wrapped<Supplier<BlockState>>): this;
        state(state: $wrapped<BlockState>): this;
        mat(material: $wrapped<Material>): this;
        weight(weight: number): this;
        size(min: number, max: number): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.data.worldgen.generator.veins {
    import Consumer = java.util.function_.Consumer;

    interface LayeredVeinGenerator extends $object<'com.gregtechceu.gtceu.api.data.worldgen.generator.veins.LayeredVeinGenerator'> {
        buildLayerPattern(config: $wrapped<Consumer<GTLayerPattern$Builder>>): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.data.worldgen.generator.indicators {
    import Material = chemical.material.Material;
    import IntProvider = net.minecraft.util.valueproviders.IntProvider;
    import FloatProvider = net.minecraft.util.valueproviders.FloatProvider;
    import Block = internal.net.minecraft.world.level.block.Block;
    import BlockState = net.minecraft.world.level.block.state.BlockState;

    interface SurfaceIndicatorGenerator extends $object<'com.gregtechceu.gtceu.api.data.worldgen.generator.indicators.SurfaceIndicatorGenerator'> {
        surfaceRock(material: $wrapped<Material>): this;
        block(block: $wrapped<Block>): this;
        state(state: $wrapped<BlockState>): this;
        radius(radius: number): this;
        radius(provider: $wrapped<IntProvider>): this;
        density(density: number): this;
        density(provider: $wrapped<FloatProvider>): this;
        placement(placement: $wrapped<SurfaceIndicatorGenerator$IndicatorPlacement>): this;
    }

    interface SurfaceIndicatorGenerator$IndicatorPlacement extends $object<{
        name: 'com.gregtechceu.gtceu.api.data.worldgen.generator.indicators.SurfaceIndicatorGenerator$IndicatorPlacement';
        enumClass: typeof SurfaceIndicatorGenerator$IndicatorPlacement;
    }> {}

    const SurfaceIndicatorGenerator$IndicatorPlacement: $class<SurfaceIndicatorGenerator$IndicatorPlacement> & {
        SURFACE: SurfaceIndicatorGenerator$IndicatorPlacement;
        ABOVE: SurfaceIndicatorGenerator$IndicatorPlacement;
        BELOW: SurfaceIndicatorGenerator$IndicatorPlacement;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid {
    interface BedrockFluidDefinition extends $object<'com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition'> {}

    import Fluid = net.minecraft.world.level.material.Fluid;
    import Supplier = java.util.function_.Supplier;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    interface BedrockFluidDefinition$Builder extends $object<'com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition$Builder'> {
        weight(weight: number): this;
        yield(min: number, max: number): this;
        minimumYield(minimumYield: number): this;
        maximumYield(maximumYiel: number): this;
        depletionAmount(depletionAmount: number): this;
        depletionChance(depletionChance: number): this;
        depletedYield(depletedYield: number): this;
        fluid(fluid: $wrapped<Supplier<Fluid>>): this;
        dimensions(dimensions: $wrapped<ResourceLocation>[]): this;
        dimensions(...dimensions: $wrapped<ResourceLocation>[]): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.block {
    import Block = net.minecraft.world.level.block.Block;
    import EntityBlock = net.minecraft.world.level.block.EntityBlock;
    import MachineDefinition = machine.MachineDefinition;
    import RotationState = data.RotationState;

    interface IMachineBlock extends $object<'com.gregtechceu.gtceu.api.block.IMachineBlock', EntityBlock> {
        self(): Block;
        getDefinition(): MachineDefinition;
        get definition(): MachineDefinition;
        getRotationState(): RotationState;
        get rotationState(): RotationState;
    }

    const IMachineBlock: $class<IMachineBlock> & {};

    import Material = data.chemical.material.Material;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    interface ICoilType extends $object<'com.gregtechceu.gtceu.api.block.ICoilType'> {
        getName(): string;
        get name(): string;
        getCoilTemperature(): number;
        get coilTemperature(): number;
        getLevel(): number;
        get level(): number;
        getEnergyDiscount(): number;
        get energyDiscount(): number;
        getTier(): number;
        get tier(): number;
        getMaterial(): Material;
        get material(): Material;
        getTexture(): ResourceLocation;
        get texture(): ResourceLocation;
    }

    interface ActiveBlock extends $object<'com.gregtechceu.gtceu.api.block.ActiveBlock', Block> {}
}

declare namespace internal.com.gregtechceu.gtceu.api.machine {
    import GTRecipeType = recipe.GTRecipeType;
    import IMachineBlock = block.IMachineBlock;
    import Supplier = java.util.function_.Supplier;
    import BlockEntity = net.minecraft.world.level.block.entity.BlockEntity;
    import Block = net.minecraft.world.level.block.Block;

    interface MachineDefinition extends $object<
        'com.gregtechceu.gtceu.api.machine.MachineDefinition',
        Supplier<IMachineBlock>
    > {
        getRecipeTypes(): GTRecipeType[];
        get recipeTypes(): GTRecipeType[];

        setRecipeTypes(recipeTypes: $wrapped<GTRecipeType>[]): void;
        set recipeTypes(recipeTypes: $wrapped<GTRecipeType>[]);

        getBlock(): Block;
        get block(): Block;
    }

    const MachineDefinition: $class<MachineDefinition> & {};

    interface MultiblockMachineDefinition extends $object<
        'com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition',
        MachineDefinition
    > {}

    const MultiblockMachineDefinition: $class<MultiblockMachineDefinition> & {};

    interface MetaMachine extends $object<'com.gregtechceu.gtceu.api.machine.MetaMachine'> {}

    const MetaMachine: $class<MetaMachine> & {};

    import Level = net.minecraft.world.level.Level;

    interface IMachineBlockEntity extends $object<'com.gregtechceu.gtceu.api.machine.IMachineBlockEntity'> {
        self(): BlockEntity;
        level(): Level;
        getMetaMachine(): MetaMachine;
        getOffset(): number;
    }

    import ITieredMachine = feature.ITieredMachine;

    interface TieredMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.TieredMachine',
        MetaMachine,
        ITieredMachine
    > {}

    interface TieredEnergyMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.TieredEnergyMachine',
        TieredMachine,
        ITieredMachine
        // IExplosionMachine
    > {}

    import IRecipeLogicMachine = feature.IRecipeLogicMachine;
    import NotifiableItemStackHandler = trait.NotifiableItemStackHandler;
    import NotifiableFluidTank = trait.NotifiableFluidTank;

    interface WorkableTieredMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.WorkableTieredMachine',
        TieredEnergyMachine,
        IRecipeLogicMachine
        // IMachineLife,
        // IMufflableMachine,
        // IOverclockMachine
    > {
        readonly importItems: NotifiableItemStackHandler;
        readonly exportItems: NotifiableItemStackHandler;
        readonly importFluids: NotifiableFluidTank;
        readonly exportFluids: NotifiableFluidTank;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.property {
    import BooleanProperty = net.minecraft.world.level.block.state.properties.BooleanProperty;
    import EnumProperty = net.minecraft.world.level.block.state.properties.EnumProperty;
    import RecipeLogic$Status = trait.RecipeLogic$Status;

    interface GTMachineModelProperties extends $object<'com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties'> {}

    const GTMachineModelProperties: $class<GTMachineModelProperties> & {
        IS_PAINTED: BooleanProperty;
        IS_FORMED: BooleanProperty;
        IS_TAPED: BooleanProperty;
        // RECIPE_LOGIC_STATUS: EnumProperty<RecipeLogic$Status>;
        IS_WORKING_ENABLED: BooleanProperty;
        IS_ACTIVE: BooleanProperty;
        IS_STEEL_MACHINE: BooleanProperty;
        // VENT_DIRECTION: EnumProperty<RelativeDirection>;
        // CHARGER_STATE: EnumProperty<ChargerMachine$State>;
        IS_FE_TO_EU: BooleanProperty;
        IS_TRANSFORM_UP: BooleanProperty;
        // DIODE_AMP_MODE: EnumProperty<DiodePartMachine$AmpMode>;
        IS_HPCA_PART_DAMAGED: BooleanProperty;
        IS_RANDOM_TICK_MODE: BooleanProperty;
        HAS_ROTOR: BooleanProperty;
        IS_ROTOR_SPINNING: BooleanProperty;
        IS_EMISSIVE_ROTOR: BooleanProperty;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.multiblock {
    import MetaMachine = internal.com.gregtechceu.gtceu.api.machine.MetaMachine;

    interface PartAbility extends $object<'com.gregtechceu.gtceu.api.machine.multiblock.PartAbility'> {}

    const PartAbility: $class<PartAbility> & {
        EXPORT_ITEMS: PartAbility;
        IMPORT_ITEMS: PartAbility;
        EXPORT_FLUIDS: PartAbility;
        IMPORT_FLUIDS: PartAbility;
        EXPORT_FLUIDS_1X: PartAbility;
        IMPORT_FLUIDS_1X: PartAbility;
        EXPORT_FLUIDS_4X: PartAbility;
        IMPORT_FLUIDS_4X: PartAbility;
        EXPORT_FLUIDS_9X: PartAbility;
        IMPORT_FLUIDS_9X: PartAbility;
        INPUT_ENERGY: PartAbility;
        INPUT_ENERGY_2A: PartAbility;
        INPUT_ENERGY_4A: PartAbility;
        INPUT_ENERGY_16A: PartAbility;
        OUTPUT_ENERGY: PartAbility;
        OUTPUT_ENERGY_2A: PartAbility;
        OUTPUT_ENERGY_4A: PartAbility;
        OUTPUT_ENERGY_16A: PartAbility;
        SUBSTATION_INPUT_ENERGY: PartAbility;
        SUBSTATION_OUTPUT_ENERGY: PartAbility;
        ROTOR_HOLDER: PartAbility;
        PUMP_FLUID_HATCH: PartAbility;
        STEAM: PartAbility;
        STEAM_IMPORT_ITEMS: PartAbility;
        STEAM_EXPORT_ITEMS: PartAbility;
        MAINTENANCE: PartAbility;
        MUFFLER: PartAbility;
        TANK_VALVE: PartAbility;
        PASSTHROUGH_HATCH: PartAbility;
        PARALLEL_HATCH: PartAbility;
        INPUT_LASER: PartAbility;
        OUTPUT_LASER: PartAbility;
        COMPUTATION_DATA_RECEPTION: PartAbility;
        COMPUTATION_DATA_TRANSMISSION: PartAbility;
        OPTICAL_DATA_RECEPTION: PartAbility;
        OPTICAL_DATA_TRANSMISSION: PartAbility;
        DATA_ACCESS: PartAbility;
        HPCA_COMPONENT: PartAbility;
        OBJECT_HOLDER: PartAbility;

        new (name: string): PartAbility;
    };

    import IMultiController = feature.multiblock.IMultiController;

    interface MultiblockControllerMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.multiblock.MultiblockControllerMachine',
        MetaMachine,
        IMultiController
    > {}

    const MultiblockControllerMachine: $class<MultiblockControllerMachine> & {
        new (holder: IMachineBlockEntity): MultiblockControllerMachine;
    };

    interface WorkableMultiblockMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.multiblock.WorkableMultiblockMachine',
        MultiblockControllerMachine
    > {}

    const WorkableMultiblockMachine: $class<WorkableMultiblockMachine> & {
        new (holder: IMachineBlockEntity, ...args: any[]): WorkableMultiblockMachine;
    };

    import ITieredMachine = feature.ITieredMachine;

    interface WorkableElectricMultiblockMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine',
        WorkableMultiblockMachine,
        ITieredMachine
    > {}

    const WorkableElectricMultiblockMachine: $class<WorkableElectricMultiblockMachine> & {
        new (holder: IMachineBlockEntity, ...args: any[]): WorkableElectricMultiblockMachine;
    };

    import ICoilType = block.ICoilType;

    interface CoilWorkableElectricMultiblockMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine',
        WorkableElectricMultiblockMachine
    > {
        getCoilType(): ICoilType;
        get coilType(): ICoilType;
        getCoilTier(): number;
        get coilTier(): number;
    }

    const CoilWorkableElectricMultiblockMachine: $class<CoilWorkableElectricMultiblockMachine> & {
        new (holder: IMachineBlockEntity): CoilWorkableElectricMultiblockMachine;
    };

    interface LayeredWorkableElectricMultiblockMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.multiblock.LayeredWorkableElectricMultiblockMachine',
        WorkableElectricMultiblockMachine
    > {}

    const LayeredWorkableElectricMultiblockMachine: $class<LayeredWorkableElectricMultiblockMachine> & {
        new (holder: IMachineBlockEntity, ...args: any[]): LayeredWorkableElectricMultiblockMachine;
    };

    interface CleanroomType extends $object<'com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType'> {}

    const CleanroomType: $class<CleanroomType> & {
        CLEANROOM: CleanroomType;
        STERILE_CLEANROOM: CleanroomType;
        getByName(name: string | null): CleanroomType;
        new (name: string, translationKey: string): CleanroomType;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.multiblock.part {
    import IMultiPart = feature.multiblock.IMultiPart;

    interface MultiblockPartMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.multiblock.part.MultiblockPartMachine',
        MetaMachine,
        IMultiPart
    > {}

    interface TieredPartMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.multiblock.part.TieredPartMachine',
        MultiblockPartMachine
    > {}

    interface TieredIOPartMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.multiblock.part.TieredIOPartMachine',
        TieredPartMachine
    > {}
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.feature {
    interface IMachineFeature extends $object<'com.gregtechceu.gtceu.api.machine.feature.IMachineFeature'> {
        self(): MetaMachine;
    }

    interface ITieredMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.feature.ITieredMachine',
        IMachineFeature
    > {
        getTier(): number;
        get tier(): number;
        getMaxVoltage(): number;
        get maxVoltage(): number;
    }

    import RecipeLogic = trait.RecipeLogic;
    import RecipeLogic$Status = trait.RecipeLogic$Status;

    interface IRecipeLogicMachine extends $object<
        'com.gregtechceu.gtceu.api.machine.feature.IRecipeLogicMachine',
        // IRecipeCapabilityHolder,
        IMachineFeature
        // IWorkable,
        // ICleanroomReceiver,
        // IVoidable
    > {
        notifyStatusChanged(oldStatus: RecipeLogic$Status, newStatus: RecipeLogic$Status): void;
        getRecipeLogic(): RecipeLogic;
        get recipeLogic(): RecipeLogic;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.feature.multiblock {
    interface IMultiPart extends $object<'com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiPart'> {
        canShared(): boolean;
        isFormed(): boolean;
    }

    import BlockPattern = pattern.BlockPattern;
    import MultiblockState = pattern.MultiblockState;

    interface IMultiController extends $object<'com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController'> {
        checkPattern(): boolean;
        checkPatternWithLock(): boolean;
        checkPatternWithTryLock(): boolean;
        getPattern(): BlockPattern;
        isFormed(): boolean;
        getMultiblockState(): MultiblockState;
        onStructureFormed(): void;
        onStructureInvalid(): void;
    }

    const IMultiController: $class<IMultiController> & {};

    interface IMufflerMachine extends $object<
        'IMufflerMachine',
        IMultiPart
        // IEnvironmentalHazardEmitter
    > {
        emitPollutionParticles(): void;
    }

    const IMufflerMachine: $class<IMufflerMachine> & {};
}

declare namespace internal.com.gregtechceu.gtceu.api.pattern {
    import RelativeDirection = util.RelativeDirection;

    interface MultiblockState extends $object<'com.gregtechceu.gtceu.api.pattern.MultiblockState'> {}

    interface BlockPattern extends $object<'com.gregtechceu.gtceu.api.pattern.BlockPattern'> {
        checkPatternAt(worldState: MultiblockState, savePredicate: boolean): boolean;
    }

    interface FactoryBlockPattern extends $object<'com.gregtechceu.gtceu.api.pattern.FactoryBlockPattern'> {
        aisle(...aisle: string[]): this;
        whereDict(dict: Record<string, TraceabilityPredicate | string>): this;
        setRepeatable(minRepeat: number, maxRepeat: number): this;
        setRepeatable(repeatCount: number): this;
        build(): BlockPattern;
    }

    const FactoryBlockPattern: $class<FactoryBlockPattern> & {
        start(
            charDir: RelativeDirection,
            stringDir: RelativeDirection,
            aisleDir: RelativeDirection
        ): FactoryBlockPattern;
        start(): FactoryBlockPattern;
    };

    import Component = net.minecraft.network.chat.Component;

    interface TraceabilityPredicate extends $object<'com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate'> {
        /** @deprecated */
        setMinGlobalLimited(min: number): TraceabilityPredicate;
        /** @deprecated */
        setMaxGlobalLimited(max: number): TraceabilityPredicate;
        /** @deprecated */
        setMinLayerLimited(min: number): TraceabilityPredicate;
        /** @deprecated */
        setMaxLayerLimited(max: number): TraceabilityPredicate;
        /** @deprecated */
        setExactLimit(limit: number): TraceabilityPredicate;
        /** @deprecated */
        setPreviewCount(count: number): TraceabilityPredicate;
        addTooltips(tips: $wrapped<Component>[]): TraceabilityPredicate;
        addTooltips(...tips: $wrapped<Component>[]): TraceabilityPredicate;
        or(other: TraceabilityPredicate): TraceabilityPredicate;
        isAny(): boolean;
        isAir(): boolean;
        isSingle(): boolean;
        hasAir(): boolean;
    }

    import MachineDefinition = api.machine.MachineDefinition;
    import PartAbility = api.machine.multiblock.PartAbility;
    import TagKey = net.minecraft.tags.TagKey;
    import Fluid = net.minecraft.world.level.material.Fluid;
    import IMachineBlock = block.IMachineBlock;
    import Block = internal.net.minecraft.world.level.block.Block;
    import BlockState = net.minecraft.world.level.block.state.BlockState;
    import GTRecipeType = api.recipe.GTRecipeType;
    import Material = api.data.chemical.material.Material;

    interface Predicates extends $object<'com.gregtechceu.gtceu.api.pattern.Predicates'> {}

    const Predicates: $class<Predicates> & {
        controller(predicate: TraceabilityPredicate): TraceabilityPredicate;
        states(allowedStates: BlockState): TraceabilityPredicate;
        blocks(...blocks: $wrapped<Block>[]): TraceabilityPredicate;
        blocks(blocks: $wrapped<Block>[]): TraceabilityPredicate;
        blocks(...blocks: IMachineBlock[]): TraceabilityPredicate;
        blocks(blocks: IMachineBlock[]): TraceabilityPredicate;
        machines(...definitions: MachineDefinition[]): TraceabilityPredicate;
        machines(definitions: MachineDefinition[]): TraceabilityPredicate;
        autoAbilities(recipeTypes: $wrapped<GTRecipeType>[]): TraceabilityPredicate;
        autoAbilities(...recipeTypes: $wrapped<GTRecipeType>[]): TraceabilityPredicate;
        blockTag(tag: $wrapped<TagKey<Block>>): TraceabilityPredicate;
        fluids(fluids: $wrapped<Fluid>[]): TraceabilityPredicate;
        fluids(...fluids: $wrapped<Fluid>[]): TraceabilityPredicate;
        fluidTag(tag: $wrapped<TagKey<Fluid>>): TraceabilityPredicate;
        // custom(Predicate<MultiblockState> predicate, Supplier<BlockInfo[]> candidates): TraceabilityPredicate;
        any(): TraceabilityPredicate;
        air(): TraceabilityPredicate;
        abilities(...abilities: PartAbility[]): TraceabilityPredicate;
        abilities(abilities: PartAbility[]): TraceabilityPredicate;
        ability(ability: PartAbility, ...tiers: number[]): TraceabilityPredicate;
        ability(ability: PartAbility, tiers: number[]): TraceabilityPredicate;
        heatingCoils(): TraceabilityPredicate;
        cleanroomFilters(): TraceabilityPredicate;
        powerSubstationBatteries(): TraceabilityPredicate;
        dataHatchPredicate(def: TraceabilityPredicate): TraceabilityPredicate;
        frames(...frameMaterials: $wrapped<Material>[]): TraceabilityPredicate;
        frames(frameMaterials: $wrapped<Material>[]): TraceabilityPredicate;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.pattern.util {
    import Direction = net.minecraft.core.Direction;

    interface RelativeDirection extends $object<{
        name: 'com.gregtechceu.gtceu.api.pattern.util.RelativeDirection';
        enumClass: typeof RelativeDirection;
    }> {
        getOpposite(): RelativeDirection;
        get opposite(): RelativeDirection;
        getActualDirection(direction: Direction): Direction;
    }

    import BlockPos = net.minecraft.core.BlockPos;

    const RelativeDirection: $class<RelativeDirection> & {
        UP: RelativeDirection;
        DOWN: RelativeDirection;
        LEFT: RelativeDirection;
        RIGHT: RelativeDirection;
        FRONT: RelativeDirection;
        BACK: RelativeDirection;

        offsetPos(
            pos: $wrapped<BlockPos>,
            frontDir: $wrapped<Direction>,
            upwardsDir: $wrapped<Direction>,
            isFlipped: boolean,
            upOffset: number,
            leftOffset: number,
            forwardOffset: number
        ): BlockPos;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.registry {
    import Iterable = java.lang.Iterable;

    interface GTRegistry<K, V> extends $object<'com.gregtechceu.gtceu.api.registry.GTRegistry', Iterable<V>> {
        containKey(key: $wrapped<K>): boolean;
        containValue(value: $wrapped<V>): boolean;
        freeze(): void;
        unfreeze(): void;
        register<T extends V>(key: $wrapped<K>, value: T): T;
        get(key: $wrapped<K>): V;
        getOrDefault(key: $wrapped<K>, defaultValue: V): V;
        getKey(value: $wrapped<V>): K;
    }

    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    interface GTRegistry$RL<V> extends $object<
        'com.gregtechceu.gtceu.api.registry.GTRegistry$RL',
        GTRegistry<ResourceLocation, V>
    > {}

    import MachineDefinition = machine.MachineDefinition;
    import GTRecipeType = recipe.GTRecipeType;

    const GTRegistries: {
        // ELEMENTS: GTRegistry.String<Element>;
        RECIPE_TYPES: GTRegistry$RL<GTRecipeType>;
        // RECIPE_CATEGORIES: GTRegistry$RL<GTRecipeCategory>;
        // COVERS: GTRegistry$RL<CoverDefinition>;
        MACHINES: GTRegistry$RL<MachineDefinition>;
        // RECIPE_CAPABILITIES: GTRegistry.String<RecipeCapability<unknown>>;
        // RECIPE_CONDITIONS: GTRegistry.String<RecipeConditionType<unknown>>;
        // CHANCE_LOGICS: GTRegistry.String<ChanceLogic>;
        // SOUNDS: GTRegistry$RL<SoundEntry>;
        // BEDROCK_FLUID_DEFINITIONS: GTRegistry$RL<BedrockFluidDefinition>;
        // BEDROCK_ORE_DEFINITIONS: GTRegistry$RL<BedrockOreDefinition>;
        // ORE_VEINS: GTRegistry$RL<GTOreDefinition>;
        // DIMENSION_MARKERS: GTRegistry$RL<DimensionMarker>;
        // TRUNK_PLACER_TYPE: DeferredRegister<TrunkPlacerType<unknown>>;
        // PLACEMENT_MODIFIER: DeferredRegister<PlacementModifierType<unknown>>;
        // GLOBAL_LOOT_MODIFIES: DeferredRegister<Codec<IGlobalLootModifier>>;
        // FLUID_SERIALIZERS: GTRegistry<String, Function<FriendlyByteBuf, FluidIngredient>>;
        // PARALLEL_TYPES: GTRegistry.String<ParallelType>;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.registry.registrate {
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import Supplier = java.util.function_.Supplier;

    interface BuilderBase__Blueprint<T, TSelf> extends $object<
        'com.gregtechceu.gtceu.api.registry.registrate.BuilderBase',
        Supplier<T>
    > {
        id: $wrapped<ResourceLocation>;
        register(): T;
    }

    interface BuilderBase<T> extends BuilderBase__Blueprint<T, BuilderBase<T>> {}

    const BuilderBase: $class<BuilderBase<unknown>> & {
        new <T>(id: $wrapped<ResourceLocation>): BuilderBase<T>;
    };

    import Function = java.util.function_.Function;
    import BlockPattern = pattern.BlockPattern;
    import IMachineBlockEntity = machine.IMachineBlockEntity;
    import MetaMachine = machine.MetaMachine;
    import MachineDefinition = machine.MachineDefinition;
    import MultiblockMachineDefinition = machine.MultiblockMachineDefinition;
    import Component = net.minecraft.network.chat.Component;
    import MultiblockControllerMachine = machine.multiblock.MultiblockControllerMachine;
    import Comparator = java.util.Comparator;
    import Property = net.minecraft.world.level.block.state.properties.Property;
    import PartAbility = machine.multiblock.PartAbility;
    import RecipeModifier = recipe.modifier.RecipeModifier;
    import RotationState = data.RotationState;
    import GTRecipeType = recipe.GTRecipeType;
    import Block = net.minecraft.world.level.block.Block;
    import EditableMachineUI = gui.editor.EditableMachineUI;
    import Boolean = java.lang.Boolean;
    import ItemStack = net.minecraft.world.item.ItemStack;

    interface MachineBuilder__Blueprint<T extends MachineDefinition, TSelf> extends $object<
        'com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder',
        BuilderBase__Blueprint<T, TSelf>
    > {
        machine(machine: $wrapped<Function<IMachineBlockEntity, MetaMachine>>): TSelf;
        rotationState(state: $wrapped<RotationState>): TSelf;
        tooltips(components: Component[]): TSelf;
        tooltipBuilder(builder: $wrapped<BiConsumer<ItemStack, List<Component>>>): TSelf;
        paginatedTooltips(pages: Component[][]): TSelf;
        bottomTooltips(components: Component[]): TSelf;
        langValue(langValue: string): TSelf;
        recipeType(types: $wrapped<GTRecipeType>): TSelf;
        abilities(...abilities: PartAbility[]): TSelf;
        abilities(abilities: PartAbility[]): TSelf;
        recipeTypes(types: $wrapped<GTRecipeType>[]): TSelf;
        recipeTypes(...types: $wrapped<GTRecipeType>[]): TSelf;
        recipeModifier(modifiers: $wrapped<RecipeModifier>): TSelf;
        recipeModifier(modifiers: $wrapped<RecipeModifier>, alwaysRecheck: boolean): TSelf;
        recipeModifiers(modifiers: $wrapped<RecipeModifier>[]): TSelf;
        recipeModifiers(...modifiers: $wrapped<RecipeModifier>[]): TSelf;
        appearanceBlock(block: $wrapped<Supplier<Block>>): TSelf;
        regressWhenWaiting(regressWhenWaiting: boolean): TSelf;
        workableCasingModel(baseCasing: $wrapped<ResourceLocation>, workableModel: $wrapped<ResourceLocation>): TSelf;
        workableTieredHullModel(workableModel: $wrapped<ResourceLocation>): TSelf;
        editableUI(ui: EditableMachineUI): TSelf;
        modelPropertyBool(property: Property<Boolean>, defaultValue: boolean): TSelf;
        modelPropertyInt(property: Property<Boolean>, defaultValue: number): TSelf;
    }

    interface MachineBuilder<T extends MachineDefinition> extends MachineBuilder__Blueprint<T, MachineBuilder<T>> {}

    import List = java.util.List;
    import BiConsumer = java.util.function_.BiConsumer;
    import IMultiController = machine.feature.multiblock.IMultiController;
    import IMultiPart = machine.feature.multiblock.IMultiPart;

    interface MultiblockMachineBuilder extends $object<
        'com.gregtechceu.gtceu.api.registry.registrate.MultiblockMachineBuilder',
        MachineBuilder__Blueprint<MultiblockMachineDefinition, MultiblockMachineBuilder>
    > {
        generator(generator: boolean): this;
        pattern(pattern: $wrapped<Function<MultiblockMachineDefinition, BlockPattern>>): this;
        'partSorter(java.util.function.Function)': (
            fn: $wrapped<Function<MultiblockControllerMachine, Comparator<IMultiPart>>>
        ) => this;
        additionalDisplay(additionalDisplay: $wrapped<BiConsumer<IMultiController, List<Component>>>): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.sound {
    interface SoundEntry extends $object<'com.gregtechceu.gtceu.api.sound.SoundEntry'> {}
}

declare namespace internal.com.gregtechceu.gtceu.api.gui {
    import ResourceTexture = com.lowdragmc.lowdraglib.gui.texture.ResourceTexture;
    import ResourceBorderTexture = com.lowdragmc.lowdraglib.gui.texture.ResourceBorderTexture;

    const GuiTextures: {
        GREGTECH_LOGO: ResourceTexture;
        GREGTECH_LOGO_XMAS: ResourceTexture;
        TOOL_FRONT_FACING_ROTATION: ResourceTexture;
        TOOL_IO_FACING_ROTATION: ResourceTexture;
        TOOL_PAUSE: ResourceTexture;
        TOOL_START: ResourceTexture;
        TOOL_COVER_SETTINGS: ResourceTexture;
        TOOL_MUTE: ResourceTexture;
        TOOL_SOUND: ResourceTexture;
        TOOL_ALLOW_INPUT: ResourceTexture;
        TOOL_ATTACH_COVER: ResourceTexture;
        TOOL_REMOVE_COVER: ResourceTexture;
        TOOL_PIPE_BLOCK: ResourceTexture;
        TOOL_PIPE_CONNECT: ResourceTexture;
        TOOL_WIRE_BLOCK: ResourceTexture;
        TOOL_WIRE_CONNECT: ResourceTexture;
        TOOL_AUTO_OUTPUT: ResourceTexture;
        TOOL_DISABLE_AUTO_OUTPUT: ResourceTexture;
        TOOL_SWITCH_CONVERTER_NATIVE: ResourceTexture;
        TOOL_SWITCH_CONVERTER_EU: ResourceTexture;
        CLIPBOARD_BACKGROUND: ResourceTexture;
        CLIPBOARD_PAPER_BACKGROUND: ResourceTexture;
        DISPLAY: ResourceTexture;
        BLANK: ResourceTexture;
        BLANK_TRANSPARENT: ResourceTexture;
        FLUID_TANK_BACKGROUND: ResourceTexture;
        FLUID_TANK_OVERLAY: ResourceTexture;
        SLOT_DARKENED: ResourceTexture;
        TOGGLE_BUTTON_BACK: ResourceTexture;
        CLOSE_ICON: ResourceTexture;
        BLOCKS_INPUT: ResourceTexture;
        BUTTON_ALLOW_IMPORT_EXPORT: ResourceTexture;
        BUTTON_BLACKLIST: ResourceTexture;
        BUTTON_CHUNK_MODE: ResourceTexture;
        BUTTON_CLEAR_GRID: ResourceTexture;
        BUTTON_FILTER_DAMAGE: ResourceTexture;
        BUTTON_DISTINCT_BUSES: ResourceTexture;
        BUTTON_POWER: ResourceTexture;
        BUTTON_BATCH: ResourceTexture;
        BUTTON_FILTER_NBT: ResourceTexture;
        BUTTON_FLUID_OUTPUT: ResourceTexture;
        BUTTON_ITEM_OUTPUT: ResourceTexture;
        BUTTON_LOCK: ResourceTexture;
        BUTTON_REDSTONE_STRENGTH: ResourceTexture;
        BUTTON_VOID: ResourceTexture;
        BUTTON_VOID_PARTIAL: ResourceTexture;
        BUTTON_VOID_MULTIBLOCK: ResourceTexture;
        BUTTON_LEFT: ResourceTexture;
        BUTTON_PUBLIC_PRIVATE: ResourceTexture;
        BUTTON_CHECK: ResourceTexture;
        BUTTON_LIST: ResourceTexture;
        BUTTON_RIGHT: ResourceTexture;
        BUTTON_SILK_TOUCH_MODE: ResourceTexture;
        BUTTON_SWITCH_VIEW: ResourceTexture;
        BUTTON_WORKING_ENABLE: ResourceTexture;
        BUTTON_INT_CIRCUIT_PLUS: ResourceTexture;
        BUTTON_INT_CIRCUIT_MINUS: ResourceTexture;
        CLIPBOARD_BUTTON: ResourceTexture;
        DISTRIBUTION_MODE: ResourceTexture;
        BUTTON_AUTO_PULL: ResourceTexture;
        LOCK: ResourceTexture;
        LOCK_WHITE: ResourceTexture;
        SWITCH: ResourceTexture;
        SWITCH_HORIZONTAL: ResourceTexture;
        VANILLA_BUTTON: ResourceTexture;
        ENERGY_DETECTOR_COVER_MODE_BUTTON: ResourceTexture;
        INVERT_REDSTONE_BUTTON: ResourceTexture;
        IO_CONFIG_FLUID_MODES_BUTTON: ResourceTexture;
        IO_CONFIG_ITEM_MODES_BUTTON: ResourceTexture;
        IO_CONFIG_COVER_SLOT_OVERLAY: ResourceTexture;
        IO_CONFIG_COVER_SETTINGS: ResourceTexture;
        PATTERN_OVERLAY: ResourceTexture;
        REFUND_OVERLAY: ResourceTexture;
        INDICATOR_NO_ENERGY: ResourceTexture;
        TANK_ICON: ResourceTexture;
        SLIDER_BACKGROUND: ResourceTexture;
        SLIDER_BACKGROUND_VERTICAL: ResourceTexture;
        SLIDER_ICON: ResourceTexture;
        MAINTENANCE_BUTTON: ResourceTexture;
        MAINTENANCE_ICON: ResourceTexture;
        STORAGE_ICON: ResourceTexture;
        BUTTON_MINER_MODES: ResourceTexture;
        OREBY_BASE: ResourceTexture;
        OREBY_CHEM: ResourceTexture;
        OREBY_SEP: ResourceTexture;
        OREBY_SIFT: ResourceTexture;
        OREBY_SMELT: ResourceTexture;
        PRIMITIVE_FURNACE_OVERLAY: ResourceTexture;
        PRIMITIVE_DUST_OVERLAY: ResourceTexture;
        PRIMITIVE_INGOT_OVERLAY: ResourceTexture;
        PRIMITIVE_LARGE_FLUID_TANK: ResourceTexture;
        PRIMITIVE_LARGE_FLUID_TANK_OVERLAY: ResourceTexture;
        PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR: ResourceTexture;
        ATOMIC_OVERLAY_1: ResourceTexture;
        ATOMIC_OVERLAY_2: ResourceTexture;
        ARROW_INPUT_OVERLAY: ResourceTexture;
        ARROW_OUTPUT_OVERLAY: ResourceTexture;
        BATTERY_OVERLAY: ResourceTexture;
        BEAKER_OVERLAY_1: ResourceTexture;
        BEAKER_OVERLAY_2: ResourceTexture;
        BEAKER_OVERLAY_3: ResourceTexture;
        BEAKER_OVERLAY_4: ResourceTexture;
        BENDER_OVERLAY: ResourceTexture;
        BOX_OVERLAY: ResourceTexture;
        BOXED_OVERLAY: ResourceTexture;
        BREWER_OVERLAY: ResourceTexture;
        CANNER_OVERLAY: ResourceTexture;
        CHARGER_OVERLAY: ResourceTexture;
        CANISTER_OVERLAY: ResourceTexture;
        CENTRIFUGE_OVERLAY: ResourceTexture;
        CIRCUIT_OVERLAY: ResourceTexture;
        COMPRESSOR_OVERLAY: ResourceTexture;
        CRACKING_OVERLAY_1: ResourceTexture;
        CRACKING_OVERLAY_2: ResourceTexture;
        CRUSHED_ORE_OVERLAY: ResourceTexture;
        CRYSTAL_OVERLAY: ResourceTexture;
        CUTTER_OVERLAY: ResourceTexture;
        DARK_CANISTER_OVERLAY: ResourceTexture;
        DUST_OVERLAY: ResourceTexture;
        EXTRACTOR_OVERLAY: ResourceTexture;
        FILTER_SLOT_OVERLAY: ResourceTexture;
        FURNACE_OVERLAY_1: ResourceTexture;
        FURNACE_OVERLAY_2: ResourceTexture;
        HAMMER_OVERLAY: ResourceTexture;
        HEATING_OVERLAY_1: ResourceTexture;
        HEATING_OVERLAY_2: ResourceTexture;
        IMPLOSION_OVERLAY_1: ResourceTexture;
        IMPLOSION_OVERLAY_2: ResourceTexture;
        IN_SLOT_OVERLAY: ResourceTexture;
        INGOT_OVERLAY: ResourceTexture;
        INT_CIRCUIT_OVERLAY: ResourceTexture;
        LENS_OVERLAY: ResourceTexture;
        LIGHTNING_OVERLAY_1: ResourceTexture;
        LIGHTNING_OVERLAY_2: ResourceTexture;
        MOLD_OVERLAY: ResourceTexture;
        MOLECULAR_OVERLAY_1: ResourceTexture;
        MOLECULAR_OVERLAY_2: ResourceTexture;
        MOLECULAR_OVERLAY_3: ResourceTexture;
        MOLECULAR_OVERLAY_4: ResourceTexture;
        OUT_SLOT_OVERLAY: ResourceTexture;
        PAPER_OVERLAY: ResourceTexture;
        PRINTED_PAPER_OVERLAY: ResourceTexture;
        PIPE_OVERLAY_2: ResourceTexture;
        PIPE_OVERLAY_1: ResourceTexture;
        PRESS_OVERLAY_1: ResourceTexture;
        PRESS_OVERLAY_2: ResourceTexture;
        PRESS_OVERLAY_3: ResourceTexture;
        PRESS_OVERLAY_4: ResourceTexture;
        SAWBLADE_OVERLAY: ResourceTexture;
        SOLIDIFIER_OVERLAY: ResourceTexture;
        STRING_SLOT_OVERLAY: ResourceTexture;
        TOOL_SLOT_OVERLAY: ResourceTexture;
        TURBINE_OVERLAY: ResourceTexture;
        VIAL_OVERLAY_1: ResourceTexture;
        VIAL_OVERLAY_2: ResourceTexture;
        WIREMILL_OVERLAY: ResourceTexture;
        POSITIVE_MATTER_OVERLAY: ResourceTexture;
        NEUTRAL_MATTER_OVERLAY: ResourceTexture;
        DATA_ORB_OVERLAY: ResourceTexture;
        SCANNER_OVERLAY: ResourceTexture;
        DUCT_TAPE_OVERLAY: ResourceTexture;
        RESEARCH_STATION_OVERLAY: ResourceTexture;
        PROGRESS_BAR_ARC_FURNACE: ResourceTexture;
        PROGRESS_BAR_ARROW: ResourceTexture;
        PROGRESS_BAR_ARROW_MULTIPLE: ResourceTexture;
        PROGRESS_BAR_ASSEMBLER: ResourceTexture;
        PROGRESS_BAR_ASSEMBLY_LINE: ResourceTexture;
        PROGRESS_BAR_ASSEMBLY_LINE_ARROW: ResourceTexture;
        PROGRESS_BAR_BATH: ResourceTexture;
        PROGRESS_BAR_BENDING: ResourceTexture;
        PROGRESS_BAR_BOILER_HEAT: ResourceTexture;
        PROGRESS_BAR_CANNER: ResourceTexture;
        PROGRESS_BAR_CIRCUIT: ResourceTexture;
        PROGRESS_BAR_CIRCUIT_ASSEMBLER: ResourceTexture;
        PROGRESS_BAR_COKE_OVEN: ResourceTexture;
        PROGRESS_BAR_COMPRESS: ResourceTexture;
        PROGRESS_BAR_CRACKING: ResourceTexture;
        PROGRESS_BAR_CRACKING_INPUT: ResourceTexture;
        PROGRESS_BAR_CRYSTALLIZATION: ResourceTexture;
        PROGRESS_BAR_DISTILLATION_TOWER: ResourceTexture;
        PROGRESS_BAR_EXTRACT: ResourceTexture;
        PROGRESS_BAR_EXTRUDER: ResourceTexture;
        PROGRESS_BAR_FUSION: ResourceTexture;
        PROGRESS_BAR_GAS_COLLECTOR: ResourceTexture;
        PROGRESS_BAR_HAMMER: ResourceTexture;
        PROGRESS_BAR_HAMMER_BASE: ResourceTexture;
        PROGRESS_BAR_LATHE: ResourceTexture;
        PROGRESS_BAR_LATHE_BASE: ResourceTexture;
        PROGRESS_BAR_MACERATE: ResourceTexture;
        PROGRESS_BAR_MAGNET: ResourceTexture;
        PROGRESS_BAR_MASS_FAB: ResourceTexture;
        PROGRESS_BAR_MIXER: ResourceTexture;
        PROGRESS_BAR_PACKER: ResourceTexture;
        PROGRESS_BAR_RECYCLER: ResourceTexture;
        PROGRESS_BAR_REPLICATOR: ResourceTexture;
        PROGRESS_BAR_SIFT: ResourceTexture;
        PROGRESS_BAR_SLICE: ResourceTexture;
        PROGRESS_BAR_UNLOCK: ResourceTexture;
        PROGRESS_BAR_UNPACKER: ResourceTexture;
        PROGRESS_BAR_WIREMILL: ResourceTexture;
        PROGRESS_BAR_RESEARCH_STATION_1: ResourceTexture;
        PROGRESS_BAR_RESEARCH_STATION_2: ResourceTexture;
        PROGRESS_BAR_RESEARCH_STATION_BASE: ResourceTexture;
        INFO_ICON: ResourceTexture;
        MULTIBLOCK_CATEGORY: ResourceTexture;
        ARC_FURNACE_RECYCLING_CATEGORY: ResourceTexture;
        MACERATOR_RECYCLING_CATEGORY: ResourceTexture;
        EXTRACTOR_RECYCLING_CATEGORY: ResourceTexture;
        COVER_MACHINE_CONTROLLER: ResourceTexture;
        ICON_REMOVE: ResourceTexture;
        ICON_UP: ResourceTexture;
        ICON_DOWN: ResourceTexture;
        ICON_RIGHT: ResourceTexture;
        ICON_LEFT: ResourceTexture;
        ICON_ADD: ResourceTexture;
        ICON_NEW_PAGE: ResourceTexture;
        ICON_LOAD: ResourceTexture;
        ICON_SAVE: ResourceTexture;
        ICON_LOCATION: ResourceTexture;
        ICON_VISIBLE: ResourceTexture;
        ICON_CALCULATOR: ResourceTexture;
        UI_FRAME_SIDE_UP: ResourceTexture;
        UI_FRAME_SIDE_DOWN: ResourceTexture;
        BUTTON_FLUID: ResourceTexture;
        BUTTON_ITEM: ResourceTexture;
        BUTTON_ENERGY: ResourceTexture;
        BUTTON_MACHINE: ResourceTexture;
        BUTTON_INTERFACE: ResourceTexture;
        COVER_INTERFACE_MACHINE_ON_PROXY: ResourceTexture;
        COVER_INTERFACE_MACHINE_OFF_PROXY: ResourceTexture;
        SCENE: ResourceTexture;
        INSUFFICIENT_INPUT: ResourceTexture;
        LIGHT_ON: ResourceTexture;
        LIGHT_OFF: ResourceTexture;
        UP: ResourceTexture;
        TIER: ResourceTexture[];
        LAMP_NO_BLOOM: ResourceTexture;
        LAMP_NO_LIGHT: ResourceTexture;
        NUMBER_BACKGROUND: ResourceTexture;
        CONFIG_ARROW: ResourceTexture;
        CONFIG_ARROW_DARK: ResourceTexture;
        SELECT_BOX: ResourceTexture;
        HPCA_COMPONENT_OUTLINE: ResourceTexture;
        HPCA_ICON_EMPTY_COMPONENT: ResourceTexture;
        HPCA_ICON_ADVANCED_COMPUTATION_COMPONENT: ResourceTexture;
        HPCA_ICON_BRIDGE_COMPONENT: ResourceTexture;
        HPCA_ICON_COMPUTATION_COMPONENT: ResourceTexture;
        HPCA_ICON_ACTIVE_COOLER_COMPONENT: ResourceTexture;
        HPCA_ICON_HEAT_SINK_COMPONENT: ResourceTexture;
        HPCA_ICON_DAMAGED_ADVANCED_COMPUTATION_COMPONENT: ResourceTexture;
        HPCA_ICON_DAMAGED_COMPUTATION_COMPONENT: ResourceTexture;

        BACKGROUND: ResourceBorderTexture;
        BACKGROUND_INVERSE: ResourceBorderTexture;
        TITLE_BAR_BACKGROUND: ResourceBorderTexture;
        FLUID_SLOT: ResourceBorderTexture;
        SLOT: ResourceBorderTexture;
        SLOT_DARK: ResourceBorderTexture;
        BUTTON: ResourceBorderTexture;
        CLIPBOARD_TEXT_BOX: ResourceBorderTexture;
        PRIMITIVE_BACKGROUND: ResourceBorderTexture;
        PRIMITIVE_SLOT: ResourceBorderTexture;
        DISPLAY_FRAME: ResourceBorderTexture;
        ENERGY_BAR_BACKGROUND: ResourceBorderTexture;
        ENERGY_BAR_BASE: ResourceBorderTexture;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.gui.widget {
    interface SlotWidget extends $object<
        'com.gregtechceu.gtceu.api.gui.widget.SlotWidget',
        com.lowdragmc.lowdraglib.gui.widget.SlotWidget
    > {}

    import Container = net.minecraft.world.Container;
    import IItemHandlerModifiable = net.minecraftforge.items.IItemHandlerModifiable;

    const SlotWidget: $class<SlotWidget> & {
        new (): SlotWidget;
        new (
            inventory: Container,
            slotIndex: number,
            xPosition: number,
            yPosition: number,
            canTakeItems: boolean,
            canPutItems: boolean
        ): SlotWidget;
        new (
            itemHandler: IItemHandlerModifiable,
            slotIndex: number,
            xPosition: number,
            yPosition: number,
            canTakeItems: boolean,
            canPutItems: boolean
        ): SlotWidget;
    };

    interface TankWidget extends $object<
        'com.gregtechceu.gtceu.api.gui.widget.TankWidget',
        com.lowdragmc.lowdraglib.gui.widget.SlotWidget
    > {}

    import IFluidHandler = net.minecraftforge.fluids.capability.IFluidHandler;

    const TankWidget: $class<TankWidget> & {
        new (): TankWidget;
        new (
            fluidTank: IFluidHandler,
            x: number,
            y: number,
            allowClickContainerFilling: boolean,
            allowClickContainerEmptying: boolean
        ): TankWidget;
        new (
            fluidTank: IFluidHandler,
            x: number,
            y: number,
            width: number,
            height: number,
            allowClickContainerFilling: boolean,
            allowClickContainerEmptying: boolean
        ): TankWidget;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.gui.editor {
    interface EditableMachineUI extends $object<'com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI' /* , IEditableUI<WidgetGroup, MetaMachine> */> {}

    import Supplier = java.util.function_.Supplier;
    import BiConsumer = java.util.function_.BiConsumer;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import WidgetGroup = com.lowdragmc.lowdraglib.gui.widget.WidgetGroup;
    import MetaMachine = machine.MetaMachine;

    const EditableMachineUI: $class<EditableMachineUI> & {
        new (
            groupName: string,
            uiPath: $wrapped<ResourceLocation>,
            widgetSupplier: $wrapped<Supplier<WidgetGroup>>,
            binder: $wrapped<BiConsumer<WidgetGroup, MetaMachine>>
        ): EditableMachineUI;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.item.tool {
    interface GTToolType extends $object<'com.gregtechceu.gtceu.api.item.tool.GTToolType'> {
        get name(): string;
        get idFormat(): string;
    }

    const GTToolType: $class<GTToolType> & {
        SWORD: GTToolType;
        PICKAXE: GTToolType;
        SHOVEL: GTToolType;
        AXE: GTToolType;
        HOE: GTToolType;
        MINING_HAMMER: GTToolType;
        SPADE: GTToolType;
        SCYTHE: GTToolType;
        SAW: GTToolType;
        HARD_HAMMER: GTToolType;
        SOFT_MALLET: GTToolType;
        WRENCH: GTToolType;
        FILE: GTToolType;
        CROWBAR: GTToolType;
        SCREWDRIVER: GTToolType;
        MORTAR: GTToolType;
        WIRE_CUTTER: GTToolType;
        KNIFE: GTToolType;
        BUTCHERY_KNIFE: GTToolType;
        PLUNGER: GTToolType;
        SHEARS: GTToolType;
        DRILL_LV: GTToolType;
        DRILL_MV: GTToolType;
        DRILL_HV: GTToolType;
        DRILL_EV: GTToolType;
        DRILL_IV: GTToolType;
        CHAINSAW_LV: GTToolType;
        CHAINSAW_HV: GTToolType;
        CHAINSAW_IV: GTToolType;
        WRENCH_LV: GTToolType;
        WRENCH_HV: GTToolType;
        WRENCH_IV: GTToolType;
        WIRE_CUTTER_LV: GTToolType;
        WIRE_CUTTER_HV: GTToolType;
        WIRE_CUTTER_IV: GTToolType;
        BUZZSAW: GTToolType;
        SCREWDRIVER_LV: GTToolType;
        SCREWDRIVER_HV: GTToolType;
        SCREWDRIVER_IV: GTToolType;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.fluids {
    import FluidAttribute = attribute.FluidAttribute;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    interface FluidBuilder extends $object<'com.gregtechceu.gtceu.api.fluids.FluidBuilder'> {
        name(name: string): this;
        translation(translation: string): this;
        state(state: $wrapped<FluidState>): this;
        density(density: number): this;
        burnTime(burnTime: number): this;
        still(still: $wrapped<ResourceLocation>): this;
        flowing(flowing: $wrapped<ResourceLocation>): this;
        temperature(temperature: number): this;
        color(color: number): this;
        disableColor(): this;
        density(density: number): this;
        luminosity(luminosity: number): this;
        viscosity(mcViscosity: number): this;
        viscosity(viscosity: number): this;
        attribute(attribute: FluidAttribute): this;
        attributes(attributes: FluidAttribute[]): this;
        attributes(...attributes: FluidAttribute[]): this;
        customStill(): this;
        textures(hasCustomStill: boolean): this;
        textures(hasCustomStill: boolean, hasCustomFlowing: boolean): this;
        block(): this;
        disableBucket(): this;
    }

    const FluidBuilder: $class<FluidBuilder> & {
        new (): FluidBuilder;
    };

    import Enum = java.lang.Enum;
    import TagKey = net.minecraft.tags.TagKey;
    import Fluid = net.minecraft.world.level.material.Fluid;

    interface FluidState extends $object<
        { name: 'com.gregtechceu.gtceu.api.fluids.FluidState'; enumClass: typeof FluidState },
        Enum<FluidState>
    > {
        getTranslationKey(): string;
        get translationKey(): string;
        getTagKey(): TagKey<Fluid>;
        get tagKey(): TagKey<Fluid>;
    }

    const FluidState: $class<FluidState> & {
        LIQUID: FluidState;
        GAS: FluidState;
        PLASMA: FluidState;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.fluids.attribute {
    interface FluidAttribute extends $object<'com.gregtechceu.gtceu.api.fluids.attribute.FluidAttribute'> {}
}

declare namespace internal.com.gregtechceu.gtceu.api.fluids.store {
    import FluidBuilder = fluids.FluidBuilder;

    interface FluidStorageKey extends $object<'com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey'> {}

    interface FluidStorage extends $object<'com.gregtechceu.gtceu.api.fluids.store.FluidStorage'> {
        enqueueRegistration(key: FluidStorageKey, builder: FluidBuilder): void;
    }

    const FluidStorageKeys: {
        LIQUID: FluidStorageKey;
        GAS: FluidStorageKey;
        PLASMA: FluidStorageKey;
        MOLTEN: FluidStorageKey;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.blockentity {
    import BlockEntity = net.minecraft.world.level.block.entity.BlockEntity;
    import IMachineBlockEntity = api.machine.IMachineBlockEntity;

    interface MetaMachineBlockEntity extends $object<
        'com.gregtechceu.gtceu.api.blockentity.MetaMachineBlockEntity',
        BlockEntity,
        IMachineBlockEntity
    > {}

    const MetaMachineBlockEntity: $class<MetaMachineBlockEntity> & {};

    import Enum = java.lang.Enum;
    import IPipeType = pipenet.IPipeType;
    import IPipeNode = pipenet.IPipeNode;

    interface PipeBlockEntity<PipeType extends Enum<PipeType> & IPipeType<NodeDataType>, NodeDataType> extends $object<
        'com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity',
        BlockEntity,
        IPipeNode<PipeType, NodeDataType>
        // IEnhancedManaged, IAsyncAutoSyncBlockEntity, IAutoPersistBlockEntity, IToolGridHighlight, IToolable
    > {}

    const PipeBlockEntity: $class<PipeBlockEntity<Enum<unknown> & IPipeType<unknown>, unknown>> & {};
}

declare namespace internal.com.gregtechceu.gtceu.api.transfer.item {
    import ItemStackHandler = net.minecraftforge.items.ItemStackHandler;

    interface CustomItemStackHandler extends $object<
        'com.gregtechceu.gtceu.api.transfer.item.CustomItemStackHandler',
        ItemStackHandler
        // IContentChangeAware,
        // ITagSerializable<CompoundTag>
    > {}
}
declare namespace internal.com.gregtechceu.gtceu.api.transfer.fluid {
    import FluidTank = net.minecraftforge.fluids.capability.templates.FluidTank;

    interface CustomFluidTank extends $object<
        'com.gregtechceu.gtceu.api.transfer.item.CustomFluidTank',
        FluidTank
        // IFluidHandlerModifiable,
        // ITagSerializable<CompoundTag>,
        // IContentChangeAware
    > {}
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.trait {
    interface MachineTrait extends $object<'com.gregtechceu.gtceu.api.machine.trait.MachineTrait' /* IEnhancedManaged */> {}

    import IRecipeHandler = capability.recipe.IRecipeHandler;

    interface IRecipeHandlerTrait<K> extends $object<
        'com.gregtechceu.gtceu.api.machine.trait.IRecipeHandlerTrait',
        IRecipeHandler<K>
    > {}

    interface NotifiableRecipeHandlerTrait<T> extends $object<
        'com.gregtechceu.gtceu.api.machine.trait.NotifiableRecipeHandlerTrait',
        MachineTrait,
        IRecipeHandlerTrait<T>
    > {}

    import Ingredient = net.minecraft.world.item.crafting.Ingredient;
    import CustomItemStackHandler = transfer.item.CustomItemStackHandler;
    import IItemHandlerModifiable = net.minecraftforge.items.IItemHandlerModifiable;

    interface NotifiableItemStackHandler extends $object<
        'com.gregtechceu.gtceu.api.machine.trait.NotifiableItemStackHandler',
        NotifiableRecipeHandlerTrait<Ingredient>,
        ICapabilityTrait,
        IItemHandlerModifiable
    > {
        readonly storage: CustomItemStackHandler;
    }

    const NotifiableItemStackHandler: $class<NotifiableItemStackHandler> & {};

    import FluidIngredient = recipe.ingredient.FluidIngredient;
    import CustomFluidTank = transfer.fluid.CustomFluidTank;

    interface NotifiableFluidTank extends $object<
        'com.gregtechceu.gtceu.api.machine.trait.NotifiableFluidTank',
        NotifiableRecipeHandlerTrait<FluidIngredient>
    > {
        readonly storages: CustomFluidTank[];
    }

    interface RecipeLogic extends $object<'com.gregtechceu.gtceu.api.machine.trait.RecipeLogic'> {
        getProgressPercent(): number;
        get progressPercent(): number;
    }

    import Enum = java.lang.Enum;

    interface RecipeLogic$Status extends $object<
        { name: 'com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status'; enumClass: typeof RecipeLogic$Status },
        Enum<RecipeLogic$Status>
    > {
        getSerializedName(): string;
        get serializedName(): string;
    }

    const RecipeLogic$Status: $class<RecipeLogic$Status> & {
        IDLE: RecipeLogic$Status;
        WORKING: RecipeLogic$Status;
        WAITING: RecipeLogic$Status;
        SUSPEND: RecipeLogic$Status;
    };

    interface RecipeHandlerList extends $object<'com.gregtechceu.gtceu.api.machine.trait.RecipeHandlerList'> {}

    import IO = capability.recipe.IO;

    interface ICapabilityTrait extends $object<'com.gregtechceu.gtceu.api.machine.trait.ICapabilityTrait'> {
        getCapabilityIO(): IO;
        canCapInput(): boolean;
        canCapOutput(): boolean;
    }
}
declare namespace internal.com.gregtechceu.gtceu.api.pipenet {
    interface IPipeType<NodeDataType> extends $object<'com.gregtechceu.gtceu.api.pipenet.IPipeType'> {}

    import Enum = java.lang.Enum;

    interface IPipeNode<
        PipeType extends Enum<PipeType> & IPipeType<NodeDataType>,
        NodeDataType,
    > extends $object<'com.gregtechceu.gtceu.api.pipenet.IPipeNode'> {
        setConnections(connections: number): void;
        set connections(connections: number);
        getConnections(): number;
        get connections(): number;
        getNumConnections(): number;
        get numConnections(): number;
    }

    const IPipeNode: $class<IPipeNode<any, any>> & {};
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.gregtechceu.gtceu.api.recipe.GTRecipe': typeof internal.com.gregtechceu.gtceu.api.recipe.GTRecipe;
        'com.gregtechceu.gtceu.api.recipe.RecipeHelper': typeof internal.com.gregtechceu.gtceu.api.recipe.RecipeHelper;
        'com.gregtechceu.gtceu.api.recipe.GTRecipeType$ICustomRecipeLogic': typeof internal.com.gregtechceu.gtceu.api.recipe.GTRecipeType$ICustomRecipeLogic;
        'com.gregtechceu.gtceu.api.pattern.util.RelativeDirection': typeof internal.com.gregtechceu.gtceu.api.pattern.util.RelativeDirection;
        'com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition': typeof internal.com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition;
        'com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine': typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine;
        'com.gregtechceu.gtceu.api.machine.multiblock.LayeredWorkableElectricMultiblockMachine': typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.LayeredWorkableElectricMultiblockMachine;
        'com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType': typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType;
        'com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties': typeof internal.com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties;
        'com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController': typeof internal.com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController;
        'com.gregtechceu.gtceu.api.machine.feature.multiblock.IMufflerMachine': typeof internal.com.gregtechceu.gtceu.api.machine.feature.multiblock.IMufflerMachine;
        'com.gregtechceu.gtceu.api.machine.trait.NotifiableItemStackHandler': typeof internal.com.gregtechceu.gtceu.api.machine.trait.NotifiableItemStackHandler;
        'com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status': typeof internal.com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.AlloyBlastProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.AlloyBlastProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.PolymerProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.PolymerProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties;
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.WoodProperty': typeof internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.WoodProperty;
        'com.gregtechceu.gtceu.api.block.IMachineBlock': typeof internal.com.gregtechceu.gtceu.api.block.IMachineBlock;
        'com.gregtechceu.gtceu.api.blockentity.MetaMachineBlockEntity': typeof internal.com.gregtechceu.gtceu.api.blockentity.MetaMachineBlockEntity;
        'com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity': typeof internal.com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity;
        'com.gregtechceu.gtceu.api.pipenet.IPipeNode': typeof internal.com.gregtechceu.gtceu.api.pipenet.IPipeNode;
        'com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI': typeof internal.com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI;
        'com.gregtechceu.gtceu.api.gui.widget.SlotWidget': typeof internal.com.gregtechceu.gtceu.api.gui.widget.SlotWidget;
        'com.gregtechceu.gtceu.api.gui.widget.TankWidget': typeof internal.com.gregtechceu.gtceu.api.gui.widget.TankWidget;
    }
}
