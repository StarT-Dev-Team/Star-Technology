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

    class IO extends Enum {
        static IN: IO;
        static OUT: IO;
        static BOTH: IO;
        static NONE: IO;

        get tooltip(): string;
        get icon(): IGuiTexture;

        static values(): IO[];
    }

    type IO__Wrapper = IO | EnumKeys<typeof IO>;
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe {
    interface GTRecipe {
        readonly __com_gregtechceu_gtceu_api_recipe: unique symbol;
    }

    class GTRecipe {}

    class GTRecipeType {
        setMaxIOSize(maxInputs: number, maxOutputs: number, maxFluidInputs: number, maxFluidOutputs: number): this;
    }

    type GTRecipeType__Wrapper = string | GTRecipeType;

    import ItemStack__Wrapper = net.minecraft.world.item.ItemStack__Wrapper;
    import FluidStack__Wrapper = net.minecraftforge.fluids.FluidStack__Wrapper;

    interface ResearchRecipeBuilder {
        readonly __com_gregtechceu_gtceu_api_recipe__ResearchRecipeBuilder: unique symbol;
    }

    class ResearchRecipeBuilder {
        researchStack(researchStack: ItemStack__Wrapper): this;
        researchFluidStack(researchStack: FluidStack__Wrapper): this;
        dataStack(dataStack: ItemStack__Wrapper): this;
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
    interface GTRecipeCategory {
        readonly __com_gregtechceu_gtceu_api_recipe_category_GTRecipeCategory: unique symbol;
    }

    class GTRecipeCategory {}

    type GTRecipeCategory__Wrapper = GTRecipeCategory | string;
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe.ingredient {
    interface EnergyStack$WithIO {
        readonly __com_gregtechceu_gtceu_api_recipe_ingredient_EnergyStack$WithIO: unique symbol;
    }

    class EnergyStack$WithIO {}

    type EnergyStack$WithIO__Wrapper =
        | EnergyStack$WithIO
        | number
        | string
        | { v: number; a: number }
        | { V: number; A: number };
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe.modifier {
    import MetaMachine = machine.MetaMachine;
    import GTRecipe = recipe.GTRecipe;

    const __RecipeModifier: unique symbol;
    interface RecipeModifier {
        [__RecipeModifier]: 0;
        getModifier(machine: MetaMachine, recipe: GTRecipe): ModifierFunction;
    }

    type RecipeModifier__Wrapper = RecipeModifier | ((machine: MetaMachine, recipe: GTRecipe) => ModifierFunction);

    const __ModifierFunction: unique symbol;
    interface ModifierFunction {
        [__ModifierFunction]: 0;
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

    interface RotationState {
        readonly __com_gregtechceu_gtceu_api_data_RotationState: unique symbol;
    }

    class RotationState extends Enum {
        static ALL: RotationState;
        static NONE: RotationState;
        static Y_AXIS: RotationState;
        static NON_Y_AXIS: RotationState;
    }

    type RotationState__Wrapper = RotationState | EnumKeys<typeof RotationState>;
}

declare namespace internal.com.gregtechceu.gtceu.api.data.chemical {
    class Element {
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

    type Element__Wrapper = Element | string;

    import ItemStack__Wrapper = net.minecraft.world.item.ItemStack__Wrapper;
    import MaterialStack = material.stack.MaterialStack;

    const ChemicalHelper: {
        'getMaterialStack(net.minecraft.world.item.ItemStack)'(itemStack: ItemStack__Wrapper): MaterialStack;
    };
}

declare namespace internal.com.gregtechceu.gtceu.api.data.chemical.material {
    import MaterialIconSet = info.MaterialIconSet;
    import MaterialFlag = info.MaterialFlag;
    import PropertyKey = properties.PropertyKey;
    import IMaterialProperty = properties.IMaterialProperty;
    import MaterialStack__Wrapper = material.stack.MaterialStack__Wrapper;

    interface Material {
        readonly __com_gregtechceu_gtceu_api_data_chemical_material_Material: unique symbol;
    }

    class Material {
        // getMaterialInfo(): MaterialInfo;
        // get materialInfo(): MaterialInfo;
        setMaterialARGB(materialRGB: number): void;
        set materialARGB(materialRGB: number);
        setMaterialIconSet(materialIconSet: MaterialIconSet): void;
        set materialIconSet(materialIconSet: MaterialIconSet);
        getMaterialIconSet(): MaterialIconSet;
        get materialIconSet(): MaterialIconSet;
        addFlags(...flags: MaterialFlag[]): void;
        addFlags(flags: MaterialFlag[]): void;
        setFormula(formula: string): this;
        setFormula(formula: string, withFormatting: boolean): this;
        setProperty(key: PropertyKey<IMaterialProperty>, property: IMaterialProperty): void;
        setComponents(...components: MaterialStack__Wrapper[]): this;
        setComponents(components: MaterialStack__Wrapper[]): this;
    }

    type Material__Wrapper = Material | string;

    import BuilderBase = registry.registrate.BuilderBase;
    import MaterialIconSet__Wrapper = info.MaterialIconSet__Wrapper;
    import BlastProperty$GasTier__Wrapper = properties.BlastProperty$GasTier__Wrapper;
    import ToolProperty = properties.ToolProperty;
    import FluidStorageKey = fluids.store.FluidStorageKey;
    import FluidState__Wrapper = fluids.FluidState__Wrapper;
    import FluidBuilder = fluids.FluidBuilder;

    class Material$Builder extends BuilderBase<Material> {
        langValue(name: string): this;
        fluid(): this;
        fluid(key: FluidStorageKey, state: FluidState__Wrapper): this;
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
        iconSet(iconSet: MaterialIconSet__Wrapper | null): this;
        components(components: Material__Wrapper[]): this;
        components(...components: Material__Wrapper[]): this;
        // componentStacks(MaterialStack... components)
        // componentStacks(ImmutableList<MaterialStack> components)
        // kjs$components(MaterialStackWrapper... components)
        // kjs$components(ImmutableList<MaterialStackWrapper> components)
        flags(flags: MaterialFlag[]): this;
        flags(...flags: MaterialFlag[]): this;
        // appendFlags(Collection<MaterialFlag> f1, MaterialFlag... f2)
        // ignoredTagPrefixes(TagPrefix... prefixes)
        // customTags(TagKey<Item> key)
        element(element: Element__Wrapper): this;
        formula(formula: string): this;
        formula(formula: string, withFormatting: boolean): this;
        toolStats(toolProperty: ToolProperty): this;
        // armorStats(ArmorProperty armorProperty)
        rotorStats(power: number, efficiency: number, damage: number, durability: number): this;
        blastTemp(temp: number): this;
        blastTemp(temp: number, gasTier: BlastProperty$GasTier__Wrapper): this;
        blastTemp(temp: number, gasTier: BlastProperty$GasTier__Wrapper, eutOverride: number): this;
        blastTemp(
            temp: number,
            gasTier: BlastProperty$GasTier__Wrapper,
            eutOverride: number,
            durationOverride: number
        ): this;
        blast(temp: number): this;
        blast(temp: number, gasTier: BlastProperty$GasTier__Wrapper): this;
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
        washedIn(m: Material__Wrapper): this;
        washedIn(m: Material__Wrapper, washedAmount: number): this;
        separatedInto(m: Material__Wrapper[]): this;
        separatedInto(...m: Material__Wrapper[]): this;
        oreSmeltInto(m: Material__Wrapper): this;
        polarizesInto(m: Material__Wrapper): this;
        arcSmeltInto(m: Material__Wrapper): this;
        macerateInto(m: Material__Wrapper): this;
        ingotSmeltInto(m: Material__Wrapper): this;
        addOreByproducts(byproducts: Material__Wrapper[]): this;
        addOreByproducts(...byproducts: Material__Wrapper[]): this;
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
        constructor(blastTemperature: number, gasTier: BlastProperty$GasTier__Wrapper);
        constructor(
            blastTemperature: number,
            gasTier: BlastProperty$GasTier__Wrapper,
            eutOverride: number,
            durationOverride: number,
            vacuumEUtOverride: number,
            vacuumDurationOverride: number
        );
        constructor();
    }

    class BlastProperty$GasTier {
        static LOW: BlastProperty$GasTier;
        static MID: BlastProperty$GasTier;
        static HIGH: BlastProperty$GasTier;
        static HIGHER: BlastProperty$GasTier;
        static HIGHEST: BlastProperty$GasTier;

        // getFluid(): FluidIngredient;
        // get fluid(): FluidIngredient;
    }

    type BlastProperty$GasTier__Wrapper = BlastProperty$GasTier | EnumKeys<typeof BlastProperty$GasTier>;

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
    class MaterialStack {
        material(): Material;
        amount(): number;
        add(amount: number): MaterialStack;
        multiply(amount: number): MaterialStack;
        multiply(amount: number): MaterialStack;
        divide(amount: number): MaterialStack;
        isEmpty(): boolean;
    }

    type MaterialStack__Wrapper = MaterialStack | Material | string;
}

declare namespace internal.com.gregtechceu.gtceu.api.data.chemical.material.info {
    const __MaterialIconSet: unique symbol;
    class MaterialIconSet {
        static DULL: MaterialIconSet;
        static METALLIC: MaterialIconSet;
        static MAGNETIC: MaterialIconSet;
        static SHINY: MaterialIconSet;
        static BRIGHT: MaterialIconSet;
        static DIAMOND: MaterialIconSet;
        static EMERALD: MaterialIconSet;
        static GEM_HORIZONTAL: MaterialIconSet;
        static GEM_VERTICAL: MaterialIconSet;
        static RUBY: MaterialIconSet;
        static OPAL: MaterialIconSet;
        static GLASS: MaterialIconSet;
        static NETHERSTAR: MaterialIconSet;
        static FINE: MaterialIconSet;
        static SAND: MaterialIconSet;
        static WOOD: MaterialIconSet;
        static ROUGH: MaterialIconSet;
        static FLINT: MaterialIconSet;
        static LIGNITE: MaterialIconSet;
        static QUARTZ: MaterialIconSet;
        static CERTUS: MaterialIconSet;
        static LAPIS: MaterialIconSet;
        static FLUID: MaterialIconSet;
        static RADIOACTIVE: MaterialIconSet;

        [__MaterialIconSet]: 0;
    }

    type MaterialIconSet__Wrapper = MaterialIconSet | string;

    const __MaterialFlag: unique symbol;
    class MaterialFlag {
        [__MaterialFlag]: 0;
    }

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
    interface IWorldGenLayer {
        readonly __com_gregtechceu_gtceu_api_data_worldgen_IWorldGenLayer: unique symbol;
    }

    import RuleTest = net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest;
    import RuleTest__Wrapper = net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest__Wrapper;

    interface IWorldGenLayer$RuleTestSupplier {
        readonly __com_gregtechceu_gtceu_api_data_worldgen_IWorldGenLayer$RuleTestSupplier: unique symbol;
        get(): RuleTest;
    }

    type IWorldGenLayer$RuleTestSupplier__Wrapper =
        | IWorldGenLayer$RuleTestSupplier
        | IWorldGenLayer$RuleTestSupplier['get']
        | RuleTest__Wrapper;

    interface SimpleWorldGenLayer extends IWorldGenLayer {}
    class SimpleWorldGenLayer implements IWorldGenLayer {}
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

    interface ActiveBlock extends Block {
        readonly __com_gregtechceu_gtceu_api_block_ActiveBlock: unique symbol;
    }
    class ActiveBlock extends Block {}
}

declare namespace internal.com.gregtechceu.gtceu.api.machine {
    import GTRecipeType = recipe.GTRecipeType;
    import GTRecipeType__Wrapper = recipe.GTRecipeType__Wrapper;
    import IMachineBlock = block.IMachineBlock;
    import Supplier = java.util.function_.Supplier;
    import BlockEntity = net.minecraft.world.level.block.entity.BlockEntity;

    interface MachineDefinition extends Supplier<IMachineBlock> {}
    class MachineDefinition implements Supplier<IMachineBlock> {
        getRecipeTypes(): GTRecipeType[];
        setRecipeTypes(recipeTypes: GTRecipeType__Wrapper[]): void;
    }

    class MultiblockMachineDefinition extends MachineDefinition {}

    class MetaMachine {}

    const __IMachineBlockEntity: unique symbol;
    interface IMachineBlockEntity {
        [__IMachineBlockEntity]: 0;
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

    import Component__Wrapper = net.minecraft.network.chat.Component__Wrapper;

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
        addTooltips(tips: Component__Wrapper[]): TraceabilityPredicate;
        addTooltips(...tips: Component__Wrapper[]): TraceabilityPredicate;
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
    import Block__Wrapper = internal.net.minecraft.world.level.block.Block__Wrapper;
    import BlockState = net.minecraft.world.level.block.state.BlockState;
    import GTRecipeType__Wrapper = api.recipe.GTRecipeType__Wrapper;

    class Predicates {
        static controller(predicate: TraceabilityPredicate): TraceabilityPredicate;

        static states(allowedStates: BlockState): TraceabilityPredicate;

        static blocks(...blocks: Block__Wrapper[]): TraceabilityPredicate;
        static blocks(blocks: Block__Wrapper[]): TraceabilityPredicate;
        static blocks(...blocks: IMachineBlock[]): TraceabilityPredicate;
        static blocks(blocks: IMachineBlock[]): TraceabilityPredicate;

        static machines(...definitions: MachineDefinition[]): TraceabilityPredicate;
        static machines(definitions: MachineDefinition[]): TraceabilityPredicate;

        static autoAbilities(recipeTypes: GTRecipeType__Wrapper[]): TraceabilityPredicate;
        static autoAbilities(...recipeTypes: GTRecipeType__Wrapper[]): TraceabilityPredicate;

        static blockTag(tag: TagKey<Block>): TraceabilityPredicate;
        static fluids(fluids: Fluid[]): TraceabilityPredicate;
        static fluids(...fluids: Fluid[]): TraceabilityPredicate;
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

        static frames(...frameMaterials: Material[]): TraceabilityPredicate;
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
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import Supplier = java.util.function_.Supplier;

    interface BuilderBase<T> extends Supplier<T> {}
    abstract class BuilderBase<T> implements Supplier<T> {
        id: ResourceLocation__Wrapper;
        constructor(id: ResourceLocation__Wrapper);
    }

    import Function__Wrapper = java.util.function_.Function__Wrapper;
    import Supplier__Wrapper = java.util.function_.Supplier__Wrapper;
    import BlockPattern = pattern.BlockPattern;
    import MetaMachine = machine.MetaMachine;
    import MultiblockMachineDefinition = machine.MultiblockMachineDefinition;
    import Component = net.minecraft.network.chat.Component;
    import MultiblockControllerMachine = machine.multiblock.MultiblockControllerMachine;
    import Comparator = java.util.Comparator;
    import Property = net.minecraft.world.level.block.state.properties.Property;
    import PartAbility = machine.multiblock.PartAbility;
    import RecipeModifier__Wrapper = recipe.modifier.RecipeModifier__Wrapper;

    class MachineBuilder<T extends MachineDefinition> extends BuilderBase<T> {
        machine(machine: Function__Wrapper<IMachineBlockEntity, MetaMachine>): this;
        rotationState(state: RotationState): this;
        tooltips(components: Component[]): this;
        paginatedTooltips(pages: Component[][]): this;
        bottomTooltips(components: Component[]): this;
        langValue(langValue: string): this;
        recipeType(types: GTRecipeType__Wrapper): this;
        abilities(...abilities: PartAbility[]): this;
        abilities(abilities: PartAbility[]): this;
        recipeTypes(types: GTRecipeType__Wrapper[]): this;
        recipeTypes(...types: GTRecipeType__Wrapper[]): this;
        recipeModifier(modifiers: RecipeModifier__Wrapper): this;
        recipeModifier(modifiers: RecipeModifier__Wrapper, alwaysRecheck: boolean): this;
        recipeModifiers(modifiers: RecipeModifier__Wrapper[]): this;
        recipeModifiers(...modifiers: RecipeModifier__Wrapper[]): this;
        appearanceBlock(block: Supplier__Wrapper<Block>): this;
        regressWhenWaiting(regressWhenWaiting: boolean): this;
        workableCasingModel(baseCasing: ResourceLocation__Wrapper, workableModel: ResourceLocation__Wrapper): this;
        workableTieredHullModel(workableModel: ResourceLocation__Wrapper): this;
        editableUI(ui: EditableMachineUI): this;
        modelPropertyBool(property: Property<boolean>, defaultValue: boolean): this;
        modelPropertyInt(property: Property<boolean>, defaultValue: number): this;
    }

    import List = java.util.List;
    import BiConsumer__Wrapper = java.util.function_.BiConsumer__Wrapper;

    class MultiblockMachineBuilder extends MachineBuilder<MultiblockMachineDefinition> {
        generator(generator: boolean): this;
        pattern(pattern: Function__Wrapper<MultiblockMachineDefinition, BlockPattern>): this;
        'partSorter(java.util.function.Function)': (
            fn: Function__Wrapper<MultiblockControllerMachine, Comparator<IMultiPart>>
        ) => this;
        additionalDisplay(additionalDisplay: BiConsumer__Wrapper<IMultiController, List<Component>>): this;
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

    class FluidBuilder {
        name(name: string): this;
        translation(translation: string): this;
        state(state: FluidState__Wrapper): this;
        density(density: number): this;
        burnTime(burnTime: number): this;
        still(still: ResourceLocation__Wrapper): this;
        flowing(flowing: ResourceLocation__Wrapper): this;
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

    interface FluidState {
        readonly __com_gregtechceu_gtceu_api_fluids_FluidState: unique symbol;
    }

    class FluidState extends Enum {
        static LIQUID: FluidState;
        static GAS: FluidState;
        static PLASMA: FluidState;

        getTranslationKey(): string;
        get translationKey(): string;
        getTagKey(): TagKey<Fluid>;
        get tagKey(): TagKey<Fluid>;
    }

    type FluidState__Wrapper = FluidState | EnumKeys<typeof FluidState>;
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
