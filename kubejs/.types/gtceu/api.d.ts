declare namespace internal.com.gregtechceu.gtceu.api {
    const GTValues: {
        M: number;

        L: number;

        RNG: RandomSource;

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

    type IO__EnumKeys = 'IN' | 'OUT' | 'BOTH' | 'NONE';

    class IO extends Enum {
        static IN: IO;
        static OUT: IO;
        static BOTH: IO;
        static NONE: IO;

        get tooltip(): string;
        get icon(): IGuiTexture;

        static values(): IO[];
    }

    type IO__Wrapper = IO | IO__EnumKeys | Lowercase<IO__EnumKeys>;
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe {
    class GTRecipe {}

    class GTRecipeType {
        setMaxIOSize(maxInputs: number, maxOutputs: number, maxFluidInputs: number, maxFluidOutputs: number): this;
    }

    type GTRecipeType__Wrapper = string | GTRecipeType;
}
declare namespace internal.com.gregtechceu.gtceu.api.recipe.category {
    class GTRecipeCategory {}
}

declare namespace internal.com.gregtechceu.gtceu.api.recipe.modifier {
    import MetaMachine = machine.MetaMachine;
    import GTRecipe = recipe.GTRecipe;

    const __RecipeModifier: unique symbol;
    interface RecipeModifier {
        [__RecipeModifier]: 0;
        getModifier(machine: MetaMachine, recipe: GTRecipe): ModifierFunction;
    }

    type RecipeModifier__Wrapper =
        | RecipeModifier
        | ((machine: MetaMachine, recipe: internal.com.gregtechceu.gtceu.GTRecipe) => ModifierFunction);

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
    declare class RotationState {
        static ALL: RotationState;
        static NONE: RotationState;
        static Y_AXIS: RotationState;
        static NON_Y_AXIS: RotationState;
    }
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
}

declare namespace internal.com.gregtechceu.gtceu.api.block {
    interface IMachineBlock extends EntityBlock {}
}

declare namespace internal.com.gregtechceu.gtceu.api.machine {
    import GTRecipeType = recipe.GTRecipeType;
    import GTRecipeType__Wrapper = recipe.GTRecipeType__Wrapper;
    import IMachineBlock = block.IMachineBlock;
    import Supplier = java.util.function_.Supplier;
    import BlockEntity = net.min;

    class MachineDefinition implements Supplier<IMachineBlock> {
        get(): IMachineBlock;
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
        static RECIPE_LOGIC_STATUS: EnumProperty<RecipeLogic.Status>;
        static IS_WORKING_ENABLED: BooleanProperty;
        static IS_ACTIVE: BooleanProperty;
        static IS_STEEL_MACHINE: BooleanProperty;
        static VENT_DIRECTION: EnumProperty<RelativeDirection>;
        static CHARGER_STATE: EnumProperty<ChargerMachine.State>;
        static IS_FE_TO_EU: BooleanProperty;
        static IS_TRANSFORM_UP: BooleanProperty;
        static DIODE_AMP_MODE: EnumProperty<DiodePartMachine.AmpMode>;
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

    class MultiblockControllerMachine extends MetaMachine {
        constructor(holder: IMachineBlockEntity);
    }

    class WorkableMultiblockMachine extends MultiblockControllerMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }

    class WorkableElectricMultiblockMachine extends WorkableMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }

    class CoilWorkableElectricMultiblockMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity);
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

declare namespace internal.com.gregtechceu.gtceu.api.machine.feature.multiblock {
    const __IMultiPart: unique symbol;
    interface IMultiPart {
        [__IMultiPart]: 0;
        canShared(): boolean;
        isFormed(): boolean;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.pattern {
    import RelativeDirection = util.RelativeDirection;
    import Block = internal.net.minecraft.world.level.block.Block;

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

    class TraceabilityPredicate {
        /** @deprecated */
        setMinGlobalLimited(min: number): TraceabilityPredicate;
        /** @deprecated */
        setMaxGlobalLimited(max: number): TraceabilityPredicate;
        /** @deprecated */
        setExactLimit(limit: number): TraceabilityPredicate;
        /** @deprecated */
        setPreviewCount(count: number): TraceabilityPredicate;
        addTooltips(tips: Component[]): TraceabilityPredicate;
        addTooltips(...tips: Component[]): TraceabilityPredicate;
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

    class Predicates {
        static controller(predicate: TraceabilityPredicate): TraceabilityPredicate;

        static states(allowedStates: BlockState): TraceabilityPredicate;

        static blocks(...blocks: Block[]): TraceabilityPredicate;
        static blocks(blocks: Block[]): TraceabilityPredicate;

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

    import BiConsumer__Wrapper = java.util.function_.BiConsumer__Wrapper;

    class MultiblockMachineBuilder extends MachineBuilder<MultiblockMachineDefinition> {
        generator(generator: boolean): this;
        pattern(pattern: Function__Wrapper<MultiblockMachineDefinition, BlockPattern>): this;
        'partSorter(java.util.function.Function)': (
            fn: Function__Wrapper<MultiblockControllerMachine, Comparator<IMultiPart>>
        ) => this;
        additionalDisplay(additionalDisplay: BiConsumer__Wrapper<IMultiController, Component[]>): this;
    }
}

declare namespace internal.com.gregtechceu.gtceu.api.sound {
    abstract class SoundEntry {}
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

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.gregtechceu.gtceu.api.pattern.util.RelativeDirection': typeof internal.com.gregtechceu.gtceu.api.pattern.util.RelativeDirection;
        'com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine': typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine;
        'com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition': typeof internal.com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition;
        'com.gregtechceu.gtceu.api.machine.multiblock.LayeredWorkableElectricMultiblockMachine': typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.LayeredWorkableElectricMultiblockMachine;
        'com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties': typeof internal.com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties;
        'com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType': typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType;
    }
}
