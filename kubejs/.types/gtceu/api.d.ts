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
    import Enum = internal.java.lang.Enum;
    import IGuiTexture = lowdragmc.lowdraglib.gui.texture.IGuiTexture;

    interface IO extends $object<
        { name: 'com.gregtechceu.gtceu.api.capability.recipe.IO'; enumClass: typeof IO },
        Enum
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
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe {
    import Recipe = net.minecraft.world.item.crafting.Recipe;
    import Container = net.minecraft.world.Container;

    interface GTRecipe extends $object<'com.gregtechceu.gtceu.api.recipe.GTRecipe', Recipe<Container>> {
        duration: number;
    }

    const GTRecipe: $class<GTRecipe> & {};

    const RecipeHelper: {
        getRealEUt(recipe: GTRecipe): number;
    };

    interface GTRecipeType extends $object<'com.gregtechceu.gtceu.api.recipe.GTRecipeType'> {
        setMaxIOSize(maxInputs: number, maxOutputs: number, maxFluidInputs: number, maxFluidOutputs: number): this;
    }

    import ItemStack = net.minecraft.world.item.ItemStack;
    import FluidStack = net.minecraftforge.fluids.FluidStack;

    interface ResearchRecipeBuilder {
        readonly __com_gregtechceu_gtceu_api_recipe__ResearchRecipeBuilder: unique symbol;
    }

    class ResearchRecipeBuilder {
        researchStack(researchStack: $wrapped<ItemStack>): this;
        researchFluidStack(researchStack: $wrapped<FluidStack>): this;
        dataStack(dataStack: $wrapped<ItemStack>): this;
        researchId(researchId: string): this;
        EUt(eut: number): this;
        EUt(eut: number, amperage: number): this;
    }

    interface ResearchRecipeBuilder$StationRecipeBuilder extends ResearchRecipeBuilder {
        readonly __com_gregtechceu_gtceu_api_recipe__ResearchRecipeBuilder$StationRecipeBuilder: unique symbol;
    }

    class ResearchRecipeBuilder$StationRecipeBuilder extends ResearchRecipeBuilder {
        CWUt(cwut: number): this;
        CWUt(cwut: number, totalCWU: number): this;
    }

    interface ResearchRecipeBuilder$ScannerRecipeBuilder extends ResearchRecipeBuilder {
        readonly __com_gregtechceu_gtceu_api_recipe__ResearchRecipeBuilder$ScannerRecipeBuilder: unique symbol;
    }

    class ResearchRecipeBuilder$ScannerRecipeBuilder extends ResearchRecipeBuilder {
        duration(duration: number): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe.category {
    interface GTRecipeCategory extends $object<'com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory'> {}
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe.ingredient {
    interface EnergyStack$WithIO extends $object<'com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack$WithIO'> {}
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

    interface RotationState extends $object<'com.gregtechceu.gtceu.api.data.RotationState', Enum> {}

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
        setMaterialIconSet(materialIconSet: MaterialIconSet): void;
        set materialIconSet(materialIconSet: MaterialIconSet);
        getMaterialIconSet(): MaterialIconSet;
        get materialIconSet(): MaterialIconSet;
        getMass(): number;
        get mass(): number;
        addFlags(...flags: MaterialFlag[]): void;
        addFlags(flags: MaterialFlag[]): void;
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

    class Material$Builder extends BuilderBase<Material> {
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
        flags(flags: MaterialFlag[]): this;
        flags(...flags: MaterialFlag[]): this;
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
    interface AlloyBlastProperty extends IMaterialProperty {}
    class AlloyBlastProperty implements IMaterialProperty {}

    interface ArmorProperty extends IMaterialProperty {}
    class ArmorProperty implements IMaterialProperty {}

    interface BlastProperty extends IMaterialProperty {}
    class BlastProperty implements IMaterialProperty {
        constructor(blastTemperature: number);
        constructor(blastTemperature: number, gasTier: $wrapped<BlastProperty$GasTier>);
        constructor(
            blastTemperature: number,
            gasTier: $wrapped<BlastProperty$GasTier>,
            eutOverride: number,
            durationOverride: number,
            vacuumEUtOverride: number,
            vacuumDurationOverride: number
        );
        constructor();
    }

    import Enum = java.lang.Enum;

    interface BlastProperty$GasTier extends $object<
        {
            name: 'com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty$GasTier';
            enumClass: typeof BlastProperty$GasTier;
        },
        Enum
    > {}

    const BlastProperty$GasTier: $class<BlastProperty$GasTier> & {
        LOW: BlastProperty$GasTier;
        MID: BlastProperty$GasTier;
        HIGH: BlastProperty$GasTier;
        HIGHER: BlastProperty$GasTier;
        HIGHEST: BlastProperty$GasTier;
    };

    interface DustProperty extends IMaterialProperty {}
    class DustProperty implements IMaterialProperty {}

    interface FluidPipeProperties extends IMaterialProperty {}
    class FluidPipeProperties implements IMaterialProperty {
        constructor(
            maxFluidTemperature: number,
            throughput: number,
            gasProof: boolean,
            acidProof: boolean,
            cryoProof: boolean,
            plasmaProof: boolean,
            channels: number
        );
        constructor(
            maxFluidTemperature: number,
            throughput: number,
            gasProof: boolean,
            acidProof: boolean,
            cryoProof: boolean,
            plasmaProof: boolean
        );
    }

    import FluidStorage = fluids.store.FluidStorage;

    interface FluidProperty extends IMaterialProperty, FluidStorage {}
    class FluidProperty implements IMaterialProperty, FluidStorage {
        getStorage(): FluidStorage;
        get storage(): FluidStorage;
    }

    interface GemProperty extends IMaterialProperty {}
    class GemProperty implements IMaterialProperty {}

    interface HazardProperty extends IMaterialProperty {}
    class HazardProperty implements IMaterialProperty {}

    interface IngotProperty extends IMaterialProperty {}
    class IngotProperty implements IMaterialProperty {}

    interface ItemPipeProperties extends IMaterialProperty {}
    class ItemPipeProperties implements IMaterialProperty {}

    interface MaterialProperties extends IMaterialProperty {}
    class MaterialProperties implements IMaterialProperty {}

    interface OreProperty extends IMaterialProperty {}
    class OreProperty implements IMaterialProperty {}

    interface PolymerProperty extends IMaterialProperty {}
    class PolymerProperty implements IMaterialProperty {}

    interface RotorProperty extends IMaterialProperty {}
    class RotorProperty implements IMaterialProperty {}

    interface ToolProperty extends IMaterialProperty {}
    class ToolProperty implements IMaterialProperty {
        static Builder: typeof ToolProperty$Builder;
    }

    import GTToolType = item.tool.GTToolType;

    class ToolProperty$Builder {
        static of(
            harvestSpeed: number,
            attackDamage: number,
            durability: number,
            harvestLevel: number
        ): ToolProperty$Builder;
        static of(
            harvestSpeed: number,
            attackDamage: number,
            durability: number,
            harvestLevel: number,
            ...types: GTToolType[]
        ): ToolProperty$Builder;
        static of(
            harvestSpeed: number,
            attackDamage: number,
            durability: number,
            harvestLevel: number,
            types: GTToolType[]
        ): ToolProperty$Builder;

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

    interface WireProperties extends IMaterialProperty {}
    class WireProperties implements IMaterialProperty {}

    interface WoodProperty extends IMaterialProperty {}
    class WoodProperty implements IMaterialProperty {}

    // import Class = java.lang.Class;

    class PropertyKey<T extends IMaterialProperty> {
        static BLAST: PropertyKey<BlastProperty>;
        static ALLOY_BLAST: PropertyKey<AlloyBlastProperty>;
        static DUST: PropertyKey<DustProperty>;
        static FLUID_PIPE: PropertyKey<FluidPipeProperties>;
        static FLUID: PropertyKey<FluidProperty>;
        static GEM: PropertyKey<GemProperty>;
        static INGOT: PropertyKey<IngotProperty>;
        static POLYMER: PropertyKey<PolymerProperty>;
        static ITEM_PIPE: PropertyKey<ItemPipeProperties>;
        static ORE: PropertyKey<OreProperty>;
        static TOOL: PropertyKey<ToolProperty>;
        static ARMOR: PropertyKey<ArmorProperty>;
        static ROTOR: PropertyKey<RotorProperty>;
        static WIRE: PropertyKey<WireProperties>;
        static WOOD: PropertyKey<WoodProperty>;
        static HAZARD: PropertyKey<HazardProperty>;
        static EMPTY: PropertyKey<IMaterialProperty>;

        getKey(): string;
        get key(): string;
        // getType(): Class<T>;
        // get type(): Class<T>;
    }

    const __IMaterialProperty: unique symbol;
    interface IMaterialProperty {
        [__IMaterialProperty]: 0;
    }
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

    const MaterialFlags: {
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
}

declare namespace internal.com.gregtechceu.gtceu.api.block {
    import EntityBlock = net.minecraft.world.level.block.EntityBlock;

    interface IMachineBlock extends EntityBlock {
        readonly __com_gregtechceu_gtceu_api_block_EntityBlock: unique symbol;
    }

    import Material = data.chemical.material.Material;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    const __ICoilType: unique symbol;
    interface ICoilType {
        [__ICoilType]: 0;

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

    import Block = net.minecraft.world.level.block.Block;

    interface ActiveBlock extends $object<'com.gregtechceu.gtceu.api.block.ActiveBlock', Block> {}
}

declare namespace internal.com.gregtechceu.gtceu.api.machine {
    import GTRecipeType = recipe.GTRecipeType;
    import IMachineBlock = block.IMachineBlock;
    import Supplier = java.util.function_.Supplier;
    import BlockEntity = net.minecraft.world.level.block.entity.BlockEntity;

    interface MachineDefinition extends Supplier<IMachineBlock> {}
    class MachineDefinition implements Supplier<IMachineBlock> {
        getRecipeTypes(): GTRecipeType[];
        setRecipeTypes(recipeTypes: $wrapped<GTRecipeType>[]): void;
    }

    class MultiblockMachineDefinition extends MachineDefinition {}

    class MetaMachine {}

    interface IMachineBlockEntity extends $object<'com.gregtechceu.gtceu.api.machine.IMachineBlockEntity'> {
        self(): BlockEntity;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.property {
    import BooleanProperty = net.minecraft.world.level.block.state.properties.BooleanProperty;
    import EnumProperty = net.minecraft.world.level.block.state.properties.EnumProperty;

    class GTMachineModelProperties {
        static IS_PAINTED: BooleanProperty;
        static IS_FORMED: BooleanProperty;
        static IS_TAPED: BooleanProperty;
        // static RECIPE_LOGIC_STATUS: EnumProperty<RecipeLogic$Status>;
        static IS_WORKING_ENABLED: BooleanProperty;
        static IS_ACTIVE: BooleanProperty;
        static IS_STEEL_MACHINE: BooleanProperty;
        // static VENT_DIRECTION: EnumProperty<RelativeDirection>;
        // static CHARGER_STATE: EnumProperty<ChargerMachine$State>;
        static IS_FE_TO_EU: BooleanProperty;
        static IS_TRANSFORM_UP: BooleanProperty;
        // static DIODE_AMP_MODE: EnumProperty<DiodePartMachine$AmpMode>;
        static IS_HPCA_PART_DAMAGED: BooleanProperty;
        static IS_RANDOM_TICK_MODE: BooleanProperty;
        static HAS_ROTOR: BooleanProperty;
        static IS_ROTOR_SPINNING: BooleanProperty;
        static IS_EMISSIVE_ROTOR: BooleanProperty;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.multiblock {
    import MetaMachine = internal.com.gregtechceu.gtceu.api.machine.MetaMachine;

    class PartAbility {
        static EXPORT_ITEMS: PartAbility;
        static IMPORT_ITEMS: PartAbility;
        static EXPORT_FLUIDS: PartAbility;
        static IMPORT_FLUIDS: PartAbility;
        static EXPORT_FLUIDS_1X: PartAbility;
        static IMPORT_FLUIDS_1X: PartAbility;
        static EXPORT_FLUIDS_4X: PartAbility;
        static IMPORT_FLUIDS_4X: PartAbility;
        static EXPORT_FLUIDS_9X: PartAbility;
        static IMPORT_FLUIDS_9X: PartAbility;
        static INPUT_ENERGY: PartAbility;
        static INPUT_ENERGY_2A: PartAbility;
        static INPUT_ENERGY_4A: PartAbility;
        static INPUT_ENERGY_16A: PartAbility;
        static OUTPUT_ENERGY: PartAbility;
        static OUTPUT_ENERGY_2A: PartAbility;
        static OUTPUT_ENERGY_4A: PartAbility;
        static OUTPUT_ENERGY_16A: PartAbility;
        static SUBSTATION_INPUT_ENERGY: PartAbility;
        static SUBSTATION_OUTPUT_ENERGY: PartAbility;
        static ROTOR_HOLDER: PartAbility;
        static PUMP_FLUID_HATCH: PartAbility;
        static STEAM: PartAbility;
        static STEAM_IMPORT_ITEMS: PartAbility;
        static STEAM_EXPORT_ITEMS: PartAbility;
        static MAINTENANCE: PartAbility;
        static MUFFLER: PartAbility;
        static TANK_VALVE: PartAbility;
        static PASSTHROUGH_HATCH: PartAbility;
        static PARALLEL_HATCH: PartAbility;
        static INPUT_LASER: PartAbility;
        static OUTPUT_LASER: PartAbility;
        static COMPUTATION_DATA_RECEPTION: PartAbility;
        static COMPUTATION_DATA_TRANSMISSION: PartAbility;
        static OPTICAL_DATA_RECEPTION: PartAbility;
        static OPTICAL_DATA_TRANSMISSION: PartAbility;
        static DATA_ACCESS: PartAbility;
        static HPCA_COMPONENT: PartAbility;
        static OBJECT_HOLDER: PartAbility;

        constructor(name: string);
    }

    import IMultiController = feature.multiblock.IMultiController;

    interface MultiblockControllerMachine extends IMultiController {}
    class MultiblockControllerMachine extends MetaMachine implements IMultiController {
        constructor(holder: IMachineBlockEntity);
    }

    class WorkableMultiblockMachine extends MultiblockControllerMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }

    import ITieredMachine = feature.ITieredMachine;

    interface WorkableElectricMultiblockMachine extends ITieredMachine {}
    class WorkableElectricMultiblockMachine extends WorkableMultiblockMachine implements ITieredMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }

    import ICoilType = block.ICoilType;

    class CoilWorkableElectricMultiblockMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity);

        getCoilType(): ICoilType;
        get coilType(): ICoilType;
        getCoilTier(): number;
        get coilTier(): number;
    }

    class LayeredWorkableElectricMultiblockMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }

    class CleanroomType {
        static CLEANROOM: CleanroomType;
        static STERILE_CLEANROOM: CleanroomType;
        static getByName(name: string | null): CleanroomType;

        constructor(name: string, translationKey: string);
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.multiblock.part {
    import IMultiPart = feature.multiblock.IMultiPart;

    interface MultiblockPartMachine extends IMultiPart {}
    class MultiblockPartMachine extends MetaMachine implements IMultiPart {}

    class TieredPartMachine extends MultiblockPartMachine {}

    class TieredIOPartMachine extends TieredPartMachine {}
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.feature {
    const __ITieredMachine: unique symbol;
    interface ITieredMachine {
        [__ITieredMachine]: 0;
        getTier(): number;
        get tier(): number;
        getMaxVoltage(): number;
        get maxVoltage(): number;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.machine.feature.multiblock {
    const __IMultiPart: unique symbol;
    interface IMultiPart {
        [__IMultiPart]: 0;
        canShared(): boolean;
        isFormed(): boolean;
    }

    import BlockPattern = pattern.BlockPattern;

    const __IMultiController: unique symbol;
    interface IMultiController {
        [__IMultiController]: 0;
        checkPattern(): boolean;
        checkPatternWithLock(): boolean;
        checkPatternWithTryLock(): boolean;
        getPattern(): BlockPattern;
        isFormed(): boolean;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.pattern {
    import RelativeDirection = util.RelativeDirection;

    class BlockPattern {}

    class FactoryBlockPattern {
        static start(
            charDir: RelativeDirection,
            stringDir: RelativeDirection,
            aisleDir: RelativeDirection
        ): FactoryBlockPattern;

        static start(): FactoryBlockPattern;

        aisle(...aisle: string[]): this;

        whereDict(dict: Record<string, TraceabilityPredicate | string>): this;

        setRepeatable(minRepeat: number, maxRepeat: number): this;
        setRepeatable(repeatCount: number): this;

        build(): BlockPattern;
    }

    import Component = net.minecraft.network.chat.Component;

    interface TraceabilityPredicate {
        readonly __com_gregtechceu_gtceu_api_pattern_TraceabilityPredicate: unique symbol;
    }

    class TraceabilityPredicate {
        /** @deprecated */
        setMinGlobalLimited(min: number): TraceabilityPredicate;
        /** @deprecated */
        setMaxGlobalLimited(max: number): TraceabilityPredicate;
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

    class Predicates {
        static controller(predicate: TraceabilityPredicate): TraceabilityPredicate;

        static states(allowedStates: BlockState): TraceabilityPredicate;

        static blocks(...blocks: $wrapped<Block>[]): TraceabilityPredicate;
        static blocks(blocks: $wrapped<Block>[]): TraceabilityPredicate;
        static blocks(...blocks: IMachineBlock[]): TraceabilityPredicate;
        static blocks(blocks: IMachineBlock[]): TraceabilityPredicate;

        static machines(...definitions: MachineDefinition[]): TraceabilityPredicate;
        static machines(definitions: MachineDefinition[]): TraceabilityPredicate;

        static autoAbilities(recipeTypes: $wrapped<GTRecipeType>[]): TraceabilityPredicate;
        static autoAbilities(...recipeTypes: $wrapped<GTRecipeType>[]): TraceabilityPredicate;

        static blockTag(tag: TagKey<Block>): TraceabilityPredicate;
        static fluids(fluids: $wrapped<Fluid>[]): TraceabilityPredicate;
        static fluids(...fluids: $wrapped<Fluid>[]): TraceabilityPredicate;
        static fluidTag(tag: TagKey<Fluid>): TraceabilityPredicate;
        // static custom(Predicate<MultiblockState> predicate, Supplier<BlockInfo[]> candidates): TraceabilityPredicate;

        static any(): TraceabilityPredicate;

        static air(): TraceabilityPredicate;

        static abilities(...abilities: PartAbility[]): TraceabilityPredicate;
        static abilities(abilities: PartAbility[]): TraceabilityPredicate;

        static ability(ability: PartAbility, ...tiers: number[]): TraceabilityPredicate;
        static ability(ability: PartAbility, tiers: number[]): TraceabilityPredicate;

        static heatingCoils(): TraceabilityPredicate;

        static cleanroomFilters(): TraceabilityPredicate;

        static powerSubstationBatteries(): TraceabilityPredicate;

        static dataHatchPredicate(def: TraceabilityPredicate): TraceabilityPredicate;

        static frames(...frameMaterials: $wrapped<Material>[]): TraceabilityPredicate;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.pattern.util {
    class RelativeDirection {
        static UP: RelativeDirection;
        static DOWN: RelativeDirection;
        static LEFT: RelativeDirection;
        static RIGHT: RelativeDirection;
        static FRONT: RelativeDirection;
        static BACK: RelativeDirection;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.registry.registrate {
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import Supplier = java.util.function_.Supplier;

    interface BuilderBase__Blueprint<T, TSelf> extends $object<
        'com.gregtechceu.gtceu.api.registry.registrate.BuilderBase',
        Supplier<T>
    > {
        id: $wrapped<ResourceLocation>;
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

    interface MachineBuilder__Blueprint<T extends MachineDefinition, TSelf> extends $object<
        'com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder',
        BuilderBase__Blueprint<T, TSelf>
    > {
        machine(machine: $wrapped<Function<IMachineBlockEntity, MetaMachine>>): TSelf;
        rotationState(state: $wrapped<RotationState>): TSelf;
        tooltips(components: Component[]): TSelf;
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
        modelPropertyBool(property: Property<boolean>, defaultValue: boolean): TSelf;
        modelPropertyInt(property: Property<boolean>, defaultValue: number): TSelf;
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
    interface SoundEntry {
        readonly __com_gregtechceu_gtceu_api_sound_SoundEntry: unique symbol;
    }

    class SoundEntry {}
}

declare namespace internal.com.gregtechceu.gtceu.api.gui {
    import ResourceTexture = com.lowdragmc.lowdraglib.gui.texture.ResourceTexture;
    import ResourceBorderTexture = com.lowdragmc.lowdraglib.gui.texture.ResourceBorderTexture;

    class GuiTextures {
        static GREGTECH_LOGO: ResourceTexture;
        static GREGTECH_LOGO_XMAS: ResourceTexture;
        static TOOL_FRONT_FACING_ROTATION: ResourceTexture;
        static TOOL_IO_FACING_ROTATION: ResourceTexture;
        static TOOL_PAUSE: ResourceTexture;
        static TOOL_START: ResourceTexture;
        static TOOL_COVER_SETTINGS: ResourceTexture;
        static TOOL_MUTE: ResourceTexture;
        static TOOL_SOUND: ResourceTexture;
        static TOOL_ALLOW_INPUT: ResourceTexture;
        static TOOL_ATTACH_COVER: ResourceTexture;
        static TOOL_REMOVE_COVER: ResourceTexture;
        static TOOL_PIPE_BLOCK: ResourceTexture;
        static TOOL_PIPE_CONNECT: ResourceTexture;
        static TOOL_WIRE_BLOCK: ResourceTexture;
        static TOOL_WIRE_CONNECT: ResourceTexture;
        static TOOL_AUTO_OUTPUT: ResourceTexture;
        static TOOL_DISABLE_AUTO_OUTPUT: ResourceTexture;
        static TOOL_SWITCH_CONVERTER_NATIVE: ResourceTexture;
        static TOOL_SWITCH_CONVERTER_EU: ResourceTexture;
        static CLIPBOARD_BACKGROUND: ResourceTexture;
        static CLIPBOARD_PAPER_BACKGROUND: ResourceTexture;
        static DISPLAY: ResourceTexture;
        static BLANK: ResourceTexture;
        static BLANK_TRANSPARENT: ResourceTexture;
        static FLUID_TANK_BACKGROUND: ResourceTexture;
        static FLUID_TANK_OVERLAY: ResourceTexture;
        static SLOT_DARKENED: ResourceTexture;
        static TOGGLE_BUTTON_BACK: ResourceTexture;
        static CLOSE_ICON: ResourceTexture;
        static BLOCKS_INPUT: ResourceTexture;
        static BUTTON_ALLOW_IMPORT_EXPORT: ResourceTexture;
        static BUTTON_BLACKLIST: ResourceTexture;
        static BUTTON_CHUNK_MODE: ResourceTexture;
        static BUTTON_CLEAR_GRID: ResourceTexture;
        static BUTTON_FILTER_DAMAGE: ResourceTexture;
        static BUTTON_DISTINCT_BUSES: ResourceTexture;
        static BUTTON_POWER: ResourceTexture;
        static BUTTON_BATCH: ResourceTexture;
        static BUTTON_FILTER_NBT: ResourceTexture;
        static BUTTON_FLUID_OUTPUT: ResourceTexture;
        static BUTTON_ITEM_OUTPUT: ResourceTexture;
        static BUTTON_LOCK: ResourceTexture;
        static BUTTON_REDSTONE_STRENGTH: ResourceTexture;
        static BUTTON_VOID: ResourceTexture;
        static BUTTON_VOID_PARTIAL: ResourceTexture;
        static BUTTON_VOID_MULTIBLOCK: ResourceTexture;
        static BUTTON_LEFT: ResourceTexture;
        static BUTTON_PUBLIC_PRIVATE: ResourceTexture;
        static BUTTON_CHECK: ResourceTexture;
        static BUTTON_LIST: ResourceTexture;
        static BUTTON_RIGHT: ResourceTexture;
        static BUTTON_SILK_TOUCH_MODE: ResourceTexture;
        static BUTTON_SWITCH_VIEW: ResourceTexture;
        static BUTTON_WORKING_ENABLE: ResourceTexture;
        static BUTTON_INT_CIRCUIT_PLUS: ResourceTexture;
        static BUTTON_INT_CIRCUIT_MINUS: ResourceTexture;
        static CLIPBOARD_BUTTON: ResourceTexture;
        static DISTRIBUTION_MODE: ResourceTexture;
        static BUTTON_AUTO_PULL: ResourceTexture;
        static LOCK: ResourceTexture;
        static LOCK_WHITE: ResourceTexture;
        static SWITCH: ResourceTexture;
        static SWITCH_HORIZONTAL: ResourceTexture;
        static VANILLA_BUTTON: ResourceTexture;
        static ENERGY_DETECTOR_COVER_MODE_BUTTON: ResourceTexture;
        static INVERT_REDSTONE_BUTTON: ResourceTexture;
        static IO_CONFIG_FLUID_MODES_BUTTON: ResourceTexture;
        static IO_CONFIG_ITEM_MODES_BUTTON: ResourceTexture;
        static IO_CONFIG_COVER_SLOT_OVERLAY: ResourceTexture;
        static IO_CONFIG_COVER_SETTINGS: ResourceTexture;
        static PATTERN_OVERLAY: ResourceTexture;
        static REFUND_OVERLAY: ResourceTexture;
        static INDICATOR_NO_ENERGY: ResourceTexture;
        static TANK_ICON: ResourceTexture;
        static SLIDER_BACKGROUND: ResourceTexture;
        static SLIDER_BACKGROUND_VERTICAL: ResourceTexture;
        static SLIDER_ICON: ResourceTexture;
        static MAINTENANCE_BUTTON: ResourceTexture;
        static MAINTENANCE_ICON: ResourceTexture;
        static STORAGE_ICON: ResourceTexture;
        static BUTTON_MINER_MODES: ResourceTexture;
        static OREBY_BASE: ResourceTexture;
        static OREBY_CHEM: ResourceTexture;
        static OREBY_SEP: ResourceTexture;
        static OREBY_SIFT: ResourceTexture;
        static OREBY_SMELT: ResourceTexture;
        static PRIMITIVE_FURNACE_OVERLAY: ResourceTexture;
        static PRIMITIVE_DUST_OVERLAY: ResourceTexture;
        static PRIMITIVE_INGOT_OVERLAY: ResourceTexture;
        static PRIMITIVE_LARGE_FLUID_TANK: ResourceTexture;
        static PRIMITIVE_LARGE_FLUID_TANK_OVERLAY: ResourceTexture;
        static PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR: ResourceTexture;
        static ATOMIC_OVERLAY_1: ResourceTexture;
        static ATOMIC_OVERLAY_2: ResourceTexture;
        static ARROW_INPUT_OVERLAY: ResourceTexture;
        static ARROW_OUTPUT_OVERLAY: ResourceTexture;
        static BATTERY_OVERLAY: ResourceTexture;
        static BEAKER_OVERLAY_1: ResourceTexture;
        static BEAKER_OVERLAY_2: ResourceTexture;
        static BEAKER_OVERLAY_3: ResourceTexture;
        static BEAKER_OVERLAY_4: ResourceTexture;
        static BENDER_OVERLAY: ResourceTexture;
        static BOX_OVERLAY: ResourceTexture;
        static BOXED_OVERLAY: ResourceTexture;
        static BREWER_OVERLAY: ResourceTexture;
        static CANNER_OVERLAY: ResourceTexture;
        static CHARGER_OVERLAY: ResourceTexture;
        static CANISTER_OVERLAY: ResourceTexture;
        static CENTRIFUGE_OVERLAY: ResourceTexture;
        static CIRCUIT_OVERLAY: ResourceTexture;
        static COMPRESSOR_OVERLAY: ResourceTexture;
        static CRACKING_OVERLAY_1: ResourceTexture;
        static CRACKING_OVERLAY_2: ResourceTexture;
        static CRUSHED_ORE_OVERLAY: ResourceTexture;
        static CRYSTAL_OVERLAY: ResourceTexture;
        static CUTTER_OVERLAY: ResourceTexture;
        static DARK_CANISTER_OVERLAY: ResourceTexture;
        static DUST_OVERLAY: ResourceTexture;
        static EXTRACTOR_OVERLAY: ResourceTexture;
        static FILTER_SLOT_OVERLAY: ResourceTexture;
        static FURNACE_OVERLAY_1: ResourceTexture;
        static FURNACE_OVERLAY_2: ResourceTexture;
        static HAMMER_OVERLAY: ResourceTexture;
        static HEATING_OVERLAY_1: ResourceTexture;
        static HEATING_OVERLAY_2: ResourceTexture;
        static IMPLOSION_OVERLAY_1: ResourceTexture;
        static IMPLOSION_OVERLAY_2: ResourceTexture;
        static IN_SLOT_OVERLAY: ResourceTexture;
        static INGOT_OVERLAY: ResourceTexture;
        static INT_CIRCUIT_OVERLAY: ResourceTexture;
        static LENS_OVERLAY: ResourceTexture;
        static LIGHTNING_OVERLAY_1: ResourceTexture;
        static LIGHTNING_OVERLAY_2: ResourceTexture;
        static MOLD_OVERLAY: ResourceTexture;
        static MOLECULAR_OVERLAY_1: ResourceTexture;
        static MOLECULAR_OVERLAY_2: ResourceTexture;
        static MOLECULAR_OVERLAY_3: ResourceTexture;
        static MOLECULAR_OVERLAY_4: ResourceTexture;
        static OUT_SLOT_OVERLAY: ResourceTexture;
        static PAPER_OVERLAY: ResourceTexture;
        static PRINTED_PAPER_OVERLAY: ResourceTexture;
        static PIPE_OVERLAY_2: ResourceTexture;
        static PIPE_OVERLAY_1: ResourceTexture;
        static PRESS_OVERLAY_1: ResourceTexture;
        static PRESS_OVERLAY_2: ResourceTexture;
        static PRESS_OVERLAY_3: ResourceTexture;
        static PRESS_OVERLAY_4: ResourceTexture;
        static SAWBLADE_OVERLAY: ResourceTexture;
        static SOLIDIFIER_OVERLAY: ResourceTexture;
        static STRING_SLOT_OVERLAY: ResourceTexture;
        static TOOL_SLOT_OVERLAY: ResourceTexture;
        static TURBINE_OVERLAY: ResourceTexture;
        static VIAL_OVERLAY_1: ResourceTexture;
        static VIAL_OVERLAY_2: ResourceTexture;
        static WIREMILL_OVERLAY: ResourceTexture;
        static POSITIVE_MATTER_OVERLAY: ResourceTexture;
        static NEUTRAL_MATTER_OVERLAY: ResourceTexture;
        static DATA_ORB_OVERLAY: ResourceTexture;
        static SCANNER_OVERLAY: ResourceTexture;
        static DUCT_TAPE_OVERLAY: ResourceTexture;
        static RESEARCH_STATION_OVERLAY: ResourceTexture;
        static PROGRESS_BAR_ARC_FURNACE: ResourceTexture;
        static PROGRESS_BAR_ARROW: ResourceTexture;
        static PROGRESS_BAR_ARROW_MULTIPLE: ResourceTexture;
        static PROGRESS_BAR_ASSEMBLER: ResourceTexture;
        static PROGRESS_BAR_ASSEMBLY_LINE: ResourceTexture;
        static PROGRESS_BAR_ASSEMBLY_LINE_ARROW: ResourceTexture;
        static PROGRESS_BAR_BATH: ResourceTexture;
        static PROGRESS_BAR_BENDING: ResourceTexture;
        static PROGRESS_BAR_BOILER_HEAT: ResourceTexture;
        static PROGRESS_BAR_CANNER: ResourceTexture;
        static PROGRESS_BAR_CIRCUIT: ResourceTexture;
        static PROGRESS_BAR_CIRCUIT_ASSEMBLER: ResourceTexture;
        static PROGRESS_BAR_COKE_OVEN: ResourceTexture;
        static PROGRESS_BAR_COMPRESS: ResourceTexture;
        static PROGRESS_BAR_CRACKING: ResourceTexture;
        static PROGRESS_BAR_CRACKING_INPUT: ResourceTexture;
        static PROGRESS_BAR_CRYSTALLIZATION: ResourceTexture;
        static PROGRESS_BAR_DISTILLATION_TOWER: ResourceTexture;
        static PROGRESS_BAR_EXTRACT: ResourceTexture;
        static PROGRESS_BAR_EXTRUDER: ResourceTexture;
        static PROGRESS_BAR_FUSION: ResourceTexture;
        static PROGRESS_BAR_GAS_COLLECTOR: ResourceTexture;
        static PROGRESS_BAR_HAMMER: ResourceTexture;
        static PROGRESS_BAR_HAMMER_BASE: ResourceTexture;
        static PROGRESS_BAR_LATHE: ResourceTexture;
        static PROGRESS_BAR_LATHE_BASE: ResourceTexture;
        static PROGRESS_BAR_MACERATE: ResourceTexture;
        static PROGRESS_BAR_MAGNET: ResourceTexture;
        static PROGRESS_BAR_MASS_FAB: ResourceTexture;
        static PROGRESS_BAR_MIXER: ResourceTexture;
        static PROGRESS_BAR_PACKER: ResourceTexture;
        static PROGRESS_BAR_RECYCLER: ResourceTexture;
        static PROGRESS_BAR_REPLICATOR: ResourceTexture;
        static PROGRESS_BAR_SIFT: ResourceTexture;
        static PROGRESS_BAR_SLICE: ResourceTexture;
        static PROGRESS_BAR_UNLOCK: ResourceTexture;
        static PROGRESS_BAR_UNPACKER: ResourceTexture;
        static PROGRESS_BAR_WIREMILL: ResourceTexture;
        static PROGRESS_BAR_RESEARCH_STATION_1: ResourceTexture;
        static PROGRESS_BAR_RESEARCH_STATION_2: ResourceTexture;
        static PROGRESS_BAR_RESEARCH_STATION_BASE: ResourceTexture;
        static INFO_ICON: ResourceTexture;
        static MULTIBLOCK_CATEGORY: ResourceTexture;
        static ARC_FURNACE_RECYCLING_CATEGORY: ResourceTexture;
        static MACERATOR_RECYCLING_CATEGORY: ResourceTexture;
        static EXTRACTOR_RECYCLING_CATEGORY: ResourceTexture;
        static COVER_MACHINE_CONTROLLER: ResourceTexture;
        static ICON_REMOVE: ResourceTexture;
        static ICON_UP: ResourceTexture;
        static ICON_DOWN: ResourceTexture;
        static ICON_RIGHT: ResourceTexture;
        static ICON_LEFT: ResourceTexture;
        static ICON_ADD: ResourceTexture;
        static ICON_NEW_PAGE: ResourceTexture;
        static ICON_LOAD: ResourceTexture;
        static ICON_SAVE: ResourceTexture;
        static ICON_LOCATION: ResourceTexture;
        static ICON_VISIBLE: ResourceTexture;
        static ICON_CALCULATOR: ResourceTexture;
        static UI_FRAME_SIDE_UP: ResourceTexture;
        static UI_FRAME_SIDE_DOWN: ResourceTexture;
        static BUTTON_FLUID: ResourceTexture;
        static BUTTON_ITEM: ResourceTexture;
        static BUTTON_ENERGY: ResourceTexture;
        static BUTTON_MACHINE: ResourceTexture;
        static BUTTON_INTERFACE: ResourceTexture;
        static COVER_INTERFACE_MACHINE_ON_PROXY: ResourceTexture;
        static COVER_INTERFACE_MACHINE_OFF_PROXY: ResourceTexture;
        static SCENE: ResourceTexture;
        static INSUFFICIENT_INPUT: ResourceTexture;
        static LIGHT_ON: ResourceTexture;
        static LIGHT_OFF: ResourceTexture;
        static UP: ResourceTexture;
        static TIER: ResourceTexture[];
        static LAMP_NO_BLOOM: ResourceTexture;
        static LAMP_NO_LIGHT: ResourceTexture;
        static NUMBER_BACKGROUND: ResourceTexture;
        static CONFIG_ARROW: ResourceTexture;
        static CONFIG_ARROW_DARK: ResourceTexture;
        static SELECT_BOX: ResourceTexture;
        static HPCA_COMPONENT_OUTLINE: ResourceTexture;
        static HPCA_ICON_EMPTY_COMPONENT: ResourceTexture;
        static HPCA_ICON_ADVANCED_COMPUTATION_COMPONENT: ResourceTexture;
        static HPCA_ICON_BRIDGE_COMPONENT: ResourceTexture;
        static HPCA_ICON_COMPUTATION_COMPONENT: ResourceTexture;
        static HPCA_ICON_ACTIVE_COOLER_COMPONENT: ResourceTexture;
        static HPCA_ICON_HEAT_SINK_COMPONENT: ResourceTexture;
        static HPCA_ICON_DAMAGED_ADVANCED_COMPUTATION_COMPONENT: ResourceTexture;
        static HPCA_ICON_DAMAGED_COMPUTATION_COMPONENT: ResourceTexture;

        static BACKGROUND: ResourceBorderTexture;
        static BACKGROUND_INVERSE: ResourceBorderTexture;
        static TITLE_BAR_BACKGROUND: ResourceBorderTexture;
        static FLUID_SLOT: ResourceBorderTexture;
        static SLOT: ResourceBorderTexture;
        static SLOT_DARK: ResourceBorderTexture;
        static BUTTON: ResourceBorderTexture;
        static CLIPBOARD_TEXT_BOX: ResourceBorderTexture;
        static PRIMITIVE_BACKGROUND: ResourceBorderTexture;
        static PRIMITIVE_SLOT: ResourceBorderTexture;
        static DISPLAY_FRAME: ResourceBorderTexture;
        static ENERGY_BAR_BACKGROUND: ResourceBorderTexture;
        static ENERGY_BAR_BASE: ResourceBorderTexture;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.item.tool {
    class GTToolType {
        static SWORD: GTToolType;
        static PICKAXE: GTToolType;
        static SHOVEL: GTToolType;
        static AXE: GTToolType;
        static HOE: GTToolType;
        static MINING_HAMMER: GTToolType;
        static SPADE: GTToolType;
        static SCYTHE: GTToolType;
        static SAW: GTToolType;
        static HARD_HAMMER: GTToolType;
        static SOFT_MALLET: GTToolType;
        static WRENCH: GTToolType;
        static FILE: GTToolType;
        static CROWBAR: GTToolType;
        static SCREWDRIVER: GTToolType;
        static MORTAR: GTToolType;
        static WIRE_CUTTER: GTToolType;
        static KNIFE: GTToolType;
        static BUTCHERY_KNIFE: GTToolType;
        static PLUNGER: GTToolType;
        static SHEARS: GTToolType;
        static DRILL_LV: GTToolType;
        static DRILL_MV: GTToolType;
        static DRILL_HV: GTToolType;
        static DRILL_EV: GTToolType;
        static DRILL_IV: GTToolType;
        static CHAINSAW_LV: GTToolType;
        static CHAINSAW_HV: GTToolType;
        static CHAINSAW_IV: GTToolType;
        static WRENCH_LV: GTToolType;
        static WRENCH_HV: GTToolType;
        static WRENCH_IV: GTToolType;
        static WIRE_CUTTER_LV: GTToolType;
        static WIRE_CUTTER_HV: GTToolType;
        static WIRE_CUTTER_IV: GTToolType;
        static BUZZSAW: GTToolType;
        static SCREWDRIVER_LV: GTToolType;
        static SCREWDRIVER_HV: GTToolType;
        static SCREWDRIVER_IV: GTToolType;

        get name(): string;
        get idFormat(): string;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.fluids {
    import FluidAttribute = attribute.FluidAttribute;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    class FluidBuilder {
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

    import Enum = java.lang.Enum;
    import TagKey = net.minecraft.tags.TagKey;
    import Fluid = net.minecraft.world.level.material.Fluid;

    interface FluidState extends $object<
        { name: 'com.gregtechceu.gtceu.api.fluids.FluidState'; enumClass: typeof FluidState },
        Enum
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
    class FluidAttribute {}
}

declare namespace internal.com.gregtechceu.gtceu.api.fluids.store {
    import FluidBuilder = fluids.FluidBuilder;
    class FluidStorageKey {}

    const __FluidStorage: unique symbol;
    interface FluidStorage {
        [__FluidStorage]: 0;

        enqueueRegistration(key: FluidStorageKey, builder: FluidBuilder): void;
    }

    const FluidStorageKeys: {
        LIQUID: FluidStorageKey;
        GAS: FluidStorageKey;
        PLASMA: FluidStorageKey;
        MOLTEN: FluidStorageKey;
    };
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.gregtechceu.gtceu.api.recipe.GTRecipe': typeof internal.com.gregtechceu.gtceu.api.recipe.GTRecipe;
        'com.gregtechceu.gtceu.api.recipe.RecipeHelper': typeof internal.com.gregtechceu.gtceu.api.recipe.RecipeHelper;
        'com.gregtechceu.gtceu.api.pattern.util.RelativeDirection': typeof internal.com.gregtechceu.gtceu.api.pattern.util.RelativeDirection;
        'com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine': typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine;
        'com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition': typeof internal.com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition;
        'com.gregtechceu.gtceu.api.machine.multiblock.LayeredWorkableElectricMultiblockMachine': typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.LayeredWorkableElectricMultiblockMachine;
        'com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties': typeof internal.com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties;
        'com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType': typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType;
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
    }
}
