declare namespace internal.com.gregtechceu.gtceu.common.data {
    import Element = api.data.chemical.Element;

    class GTElements {
        static H: Element;
        static D: Element;
        static T: Element;
        static He: Element;
        static He3: Element;
        static Li: Element;
        static Be: Element;
        static B: Element;
        static C: Element;
        static N: Element;
        static O: Element;
        static F: Element;
        static Ne: Element;
        static Na: Element;
        static Mg: Element;
        static Al: Element;
        static Si: Element;
        static P: Element;
        static S: Element;
        static Cl: Element;
        static Ar: Element;
        static K: Element;
        static Ca: Element;
        static Sc: Element;
        static Ti: Element;
        static V: Element;
        static Cr: Element;
        static Mn: Element;
        static Fe: Element;
        static Co: Element;
        static Ni: Element;
        static Cu: Element;
        static Zn: Element;
        static Ga: Element;
        static Ge: Element;
        static As: Element;
        static Se: Element;
        static Br: Element;
        static Kr: Element;
        static Rb: Element;
        static Sr: Element;
        static Y: Element;
        static Zr: Element;
        static Nb: Element;
        static Mo: Element;
        static Tc: Element;
        static Ru: Element;
        static Rh: Element;
        static Pd: Element;
        static Ag: Element;
        static Cd: Element;
        static In: Element;
        static Sn: Element;
        static Sb: Element;
        static Te: Element;
        static I: Element;
        static Xe: Element;
        static Cs: Element;
        static Ba: Element;
        static La: Element;
        static Ce: Element;
        static Pr: Element;
        static Nd: Element;
        static Pm: Element;
        static Sm: Element;
        static Eu: Element;
        static Gd: Element;
        static Tb: Element;
        static Dy: Element;
        static Ho: Element;
        static Er: Element;
        static Tm: Element;
        static Yb: Element;
        static Lu: Element;
        static Hf: Element;
        static Ta: Element;
        static W: Element;
        static Re: Element;
        static Os: Element;
        static Ir: Element;
        static Pt: Element;
        static Au: Element;
        static Hg: Element;
        static Tl: Element;
        static Pb: Element;
        static Bi: Element;
        static Po: Element;
        static At: Element;
        static Rn: Element;
        static Fr: Element;
        static Ra: Element;
        static Ac: Element;
        static Th: Element;
        static Pa: Element;
        static U: Element;
        static U238: Element;
        static U235: Element;
        static Np: Element;
        static Pu: Element;
        static Pu239: Element;
        static Pu241: Element;
        static Am: Element;
        static Cm: Element;
        static Bk: Element;
        static Cf: Element;
        static Es: Element;
        static Fm: Element;
        static Md: Element;
        static No: Element;
        static Lr: Element;
        static Rf: Element;
        static Db: Element;
        static Sg: Element;
        static Bh: Element;
        static Hs: Element;
        static Mt: Element;
        static Ds: Element;
        static Rg: Element;
        static Cn: Element;
        static Nh: Element;
        static Fl: Element;
        static Mc: Element;
        static Lv: Element;
        static Ts: Element;
        static Og: Element;
        static Tr: Element;
        static Dr: Element;
        static Ke: Element;
        static Nq: Element;
        static Nq1: Element;
        static Nq2: Element;
        static Nt: Element;
        static Sp: Element;
        static Ma: Element;

        static get(name: string): Element;
    }

    import GTRecipeType = api.recipe.GTRecipeType;

    class GTRecipeTypes {
        static STEAM: string;
        static ELECTRIC: string;
        static GENERATOR: string;
        static MULTIBLOCK: string;
        static DUMMY: string;

        static STEAM_BOILER_RECIPES: GTRecipeType;
        static FURNACE_RECIPES: GTRecipeType;
        static BLAST_FURNACE_RECIPES: GTRecipeType;
        static SMOKING_FURNACE_RECIPES: GTRecipeType;
        static ALLOY_SMELTER_RECIPES: GTRecipeType;
        static ARC_FURNACE_RECIPES: GTRecipeType;
        static ASSEMBLER_RECIPES: GTRecipeType;
        static AUTOCLAVE_RECIPES: GTRecipeType;
        static BENDER_RECIPES: GTRecipeType;
        static BREWING_RECIPES: GTRecipeType;
        static MACERATOR_RECIPES: GTRecipeType;
        static CANNER_RECIPES: GTRecipeType;
        static CENTRIFUGE_RECIPES: GTRecipeType;
        static CHEMICAL_BATH_RECIPES: GTRecipeType;
        static CHEMICAL_RECIPES: GTRecipeType;
        static COMPRESSOR_RECIPES: GTRecipeType;
        static CUTTER_RECIPES: GTRecipeType;
        static DISTILLERY_RECIPES: GTRecipeType;
        static ELECTROLYZER_RECIPES: GTRecipeType;
        static ELECTROMAGNETIC_SEPARATOR_RECIPES: GTRecipeType;
        static EXTRACTOR_RECIPES: GTRecipeType;
        static EXTRUDER_RECIPES: GTRecipeType;
        static FERMENTING_RECIPES: GTRecipeType;
        static FLUID_HEATER_RECIPES: GTRecipeType;
        static FLUID_SOLIDFICATION_RECIPES: GTRecipeType;
        static FORGE_HAMMER_RECIPES: GTRecipeType;
        static FORMING_PRESS_RECIPES: GTRecipeType;
        static LATHE_RECIPES: GTRecipeType;
        static MIXER_RECIPES: GTRecipeType;
        static ORE_WASHER_RECIPES: GTRecipeType;
        static PACKER_RECIPES: GTRecipeType;
        static POLARIZER_RECIPES: GTRecipeType;
        static LASER_ENGRAVER_RECIPES: GTRecipeType;
        static SIFTER_RECIPES: GTRecipeType;
        static THERMAL_CENTRIFUGE_RECIPES: GTRecipeType;
        static WIREMILL_RECIPES: GTRecipeType;
        static CIRCUIT_ASSEMBLER_RECIPES: GTRecipeType;
        static GAS_COLLECTOR_RECIPES: GTRecipeType;
        static AIR_SCRUBBER_RECIPES: GTRecipeType;
        static ROCK_BREAKER_RECIPES: GTRecipeType;
        static COMBUSTION_GENERATOR_FUELS: GTRecipeType;
        static GAS_TURBINE_FUELS: GTRecipeType;
        static STEAM_TURBINE_FUELS: GTRecipeType;
        static PLASMA_GENERATOR_FUELS: GTRecipeType;
        static LARGE_BOILER_RECIPES: GTRecipeType;
        static COKE_OVEN_RECIPES: GTRecipeType;
        static PRIMITIVE_BLAST_FURNACE_RECIPES: GTRecipeType;
        static BLAST_RECIPES: GTRecipeType;
        static DISTILLATION_RECIPES: GTRecipeType;
        static PYROLYSE_RECIPES: GTRecipeType;
        static CRACKING_RECIPES: GTRecipeType;
        static IMPLOSION_RECIPES: GTRecipeType;
        static VACUUM_RECIPES: GTRecipeType;
        static ASSEMBLY_LINE_RECIPES: GTRecipeType;

        static get(name: string): GTRecipeType;
    }

    import RecipeModifier = internal.com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier;

    class GTRecipeModifiers {
        static OC_PERFECT: RecipeModifier;
        static OC_NON_PERFECT: RecipeModifier;
        static OC_PERFECT_SUBTICK: RecipeModifier;
        static OC_NON_PERFECT_SUBTICK: RecipeModifier;
        static OC_PERFDEFAULT_ENVIRONMENT_REQUIREMENTECT: RecipeModifier;
        static PARALLEL_HATCH: RecipeModifier;
        static BATCH_MODE: RecipeModifier;
        static CRACKER_OVERCLOCK: RecipeModifier;
        static EBF_OVERCLOCK: RecipeModifier;
        static PYROLYSE_OVEN_OVERCLOCK: RecipeModifier;
        static MULTI_SMELTER_PARALLEL: RecipeModifier;
        static CHEMICAL_REACTOR_OVERCLOCK: RecipeModifier;
        static CONSUME_EU_TO_START: RecipeModifier;
        static FUSION_OVERCLOCK: RecipeModifier;
    }

    import SoundEntry = internal.com.gregtechceu.gtceu.api.sound.SoundEntry;

    class GTSoundEntries {
        static FORGE_HAMMER: SoundEntry;
        static MACERATOR: SoundEntry;
        static CHEMICAL: SoundEntry;
        static ASSEMBLER: SoundEntry;
        static CENTRIFUGE: SoundEntry;
        static COMPRESSOR: SoundEntry;
        static ELECTROLYZER: SoundEntry;
        static MIXER: SoundEntry;
        static REPLICATOR: SoundEntry;
        static ARC: SoundEntry;
        static BOILER: SoundEntry;
        static FURNACE: SoundEntry;
        static COOLING: SoundEntry;
        static FIRE: SoundEntry;
        static BATH: SoundEntry;
        static MOTOR: SoundEntry;
        static CUT: SoundEntry;
        static TURBINE: SoundEntry;
        static COMBUSTION: SoundEntry;
        static COMPUTATION: SoundEntry;
        static MINER: SoundEntry;
        static SCIENCE: SoundEntry;
        static JET_ENGINE: SoundEntry;
        static WRENCH_TOOL: SoundEntry;
        static SOFT_MALLET_TOOL: SoundEntry;
        static DRILL_TOOL: SoundEntry;
        static PLUNGER_TOOL: SoundEntry;
        static FILE_TOOL: SoundEntry;
        static SAW_TOOL: SoundEntry;
        static SCREWDRIVER_TOOL: SoundEntry;
        static CHAINSAW_TOOL: SoundEntry;
        static WIRECUTTER_TOOL: SoundEntry;
        static SPRAY_CAN_TOOL: SoundEntry;
        static PORTABLE_SCANNER: SoundEntry;
        static MORTAR_TOOL: SoundEntry;
        static SUS_RECORD: SoundEntry;
        static PORTAL_OPENING: SoundEntry;
        static PORTAL_CLOSING: SoundEntry;
        static METAL_PIPE: SoundEntry;
    }

    import Block = internal.net.minecraft.world.level.block.Block;
    import BlockEntry = internal.com.tterrag.registrate.util.entry.BlockEntry;

    class GCYMBlocks {
        static CASING_NONCONDUCTING: BlockEntry<Block>;
        static CASING_VIBRATION_SAFE: BlockEntry<Block>;
        static CASING_WATERTIGHT: BlockEntry<Block>;
        static CASING_SECURE_MACERATION: BlockEntry<Block>;
        static CASING_HIGH_TEMPERATURE_SMELTING: BlockEntry<Block>;
        static CASING_LASER_SAFE_ENGRAVING: BlockEntry<Block>;
        static CASING_LARGE_SCALE_ASSEMBLING: BlockEntry<Block>;
        static CASING_SHOCK_PROOF: BlockEntry<Block>;
        static CASING_STRESS_PROOF: BlockEntry<Block>;
        static CASING_CORROSION_PROOF: BlockEntry<Block>;
        static CASING_REACTION_SAFE: BlockEntry<Block>;
        static CASING_ATOMIC: BlockEntry<Block>;
        static CASING_INDUSTRIAL_STEAM: BlockEntry<Block>;
        static SLICING_BLADES: BlockEntry<ActiveBlock>;
        static MOLYBDENUM_DISILICIDE_COIL_BLOCK: BlockEntry<ActiveBlock>;
        static ELECTROLYTIC_CELL: BlockEntry<ActiveBlock>;
        static CRUSHING_WHEELS: BlockEntry<ActiveBlock>;
        static HEAT_VENT: BlockEntry<ActiveBlock>;
    }

    class GTBlocks {
        static CASING_WOOD_WALL: BlockEntry<Block>;
        static CASING_COKE_BRICKS: BlockEntry<Block>;
        static CASING_PRIMITIVE_BRICKS: BlockEntry<Block>;
        static CASING_BRONZE_BRICKS: BlockEntry<Block>;
        static CASING_INVAR_HEATPROOF: BlockEntry<Block>;
        static CASING_ALUMINIUM_FROSTPROOF: BlockEntry<Block>;
        static CASING_STEEL_SOLID: BlockEntry<Block>;
        static CASING_STAINLESS_CLEAN: BlockEntry<Block>;
        static CASING_TITANIUM_STABLE: BlockEntry<Block>;
        static CASING_TUNGSTENSTEEL_ROBUST: BlockEntry<Block>;
        static CASING_PTFE_INERT: BlockEntry<Block>;
        static CASING_HSSE_STURDY: BlockEntry<Block>;
        static CASING_PALLADIUM_SUBSTATION: BlockEntry<Block>;
        static CASING_GRATE: BlockEntry<Block>;
        static CASING_ASSEMBLY_CONTROL: BlockEntry<Block>;
        static CASING_BRONZE_GEARBOX: BlockEntry<Block>;
        static CASING_STEEL_GEARBOX: BlockEntry<Block>;
        static CASING_STAINLESS_STEEL_GEARBOX: BlockEntry<Block>;
        static CASING_TITANIUM_GEARBOX: BlockEntry<Block>;
        static CASING_TUNGSTENSTEEL_GEARBOX: BlockEntry<Block>;
        static CASING_STEEL_TURBINE: BlockEntry<Block>;
        static CASING_TITANIUM_TURBINE: BlockEntry<Block>;
        static CASING_STAINLESS_TURBINE: BlockEntry<Block>;
        static CASING_TUNGSTENSTEEL_TURBINE: BlockEntry<Block>;
        static CASING_BRONZE_PIPE: BlockEntry<Block>;
        static CASING_STEEL_PIPE: BlockEntry<Block>;
        static CASING_TITANIUM_PIPE: BlockEntry<Block>;
        static CASING_TUNGSTENSTEEL_PIPE: BlockEntry<Block>;
        static CASING_POLYTETRAFLUOROETHYLENE_PIPE: BlockEntry<Block>;
        static CASING_PUMP_DECK: BlockEntry<Block>;
        static MACHINE_CASING_ULV: BlockEntry<Block>;
        static MACHINE_CASING_LV: BlockEntry<Block>;
        static MACHINE_CASING_MV: BlockEntry<Block>;
        static MACHINE_CASING_HV: BlockEntry<Block>;
        static MACHINE_CASING_EV: BlockEntry<Block>;
        static MACHINE_CASING_IV: BlockEntry<Block>;
        static MACHINE_CASING_LuV: BlockEntry<Block>;
        static MACHINE_CASING_ZPM: BlockEntry<Block>;
        static MACHINE_CASING_UV: BlockEntry<Block>;
        static MACHINE_CASING_UHV: BlockEntry<Block>;
        static MACHINE_CASING_UEV: BlockEntry<Block>;
        static MACHINE_CASING_UIV: BlockEntry<Block>;
        static MACHINE_CASING_UXV: BlockEntry<Block>;
        static MACHINE_CASING_OpV: BlockEntry<Block>;
        static MACHINE_CASING_MAX: BlockEntry<Block>;
        static HERMETIC_CASING_LV: BlockEntry<Block>;
        static HERMETIC_CASING_MV: BlockEntry<Block>;
        static HERMETIC_CASING_HV: BlockEntry<Block>;
        static HERMETIC_CASING_EV: BlockEntry<Block>;
        static HERMETIC_CASING_IV: BlockEntry<Block>;
        static HERMETIC_CASING_LuV: BlockEntry<Block>;
        static HERMETIC_CASING_ZPM: BlockEntry<Block>;
        static HERMETIC_CASING_UV: BlockEntry<Block>;
        static HERMETIC_CASING_UHV: BlockEntry<Block>;
        static BRONZE_HULL: BlockEntry<Block>;
        static BRONZE_BRICKS_HULL: BlockEntry<Block>;
        static STEEL_HULL: BlockEntry<Block>;
        static STEEL_BRICKS_HULL: BlockEntry<Block>;
        static PLASTCRETE: BlockEntry<Block>;
        static FILTER_CASING: BlockEntry<Block>;
        static FILTER_CASING_STERILE: BlockEntry<Block>;
        static FIREBOX_BRONZE: BlockEntry<ActiveBlock>;
        static FIREBOX_STEEL: BlockEntry<ActiveBlock>;
        static FIREBOX_TITANIUM: BlockEntry<ActiveBlock>;
        static FIREBOX_TUNGSTENSTEEL: BlockEntry<ActiveBlock>;
        static COMPUTER_CASING: BlockEntry<Block>;
        static ADVANCED_COMPUTER_CASING: BlockEntry<Block>;
        static COMPUTER_HEAT_VENT: BlockEntry<Block>;
        static HIGH_POWER_CASING: BlockEntry<Block>;
        static RUBBER_PLANK: BlockEntry<Block>;
        static TREATED_WOOD_PLANK: BlockEntry<Block>;
        static ACID_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static ANTIMATTER_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static BIO_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static BOSS_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static CAUSALITY_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static EXPLOSION_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static FIRE_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static FROST_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static GENERIC_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static GREGIFICATION_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static HIGH_PRESSURE_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static HIGH_VOLTAGE_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static HIGH_TEMPERATURE_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static LASER_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static MAGIC_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static MAGNETIC_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static MOB_INFESTATION_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static MOB_SPAWNER_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static NOISE_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static RADIOACTIVE_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static SPATIAL_STORAGE_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static TURRET_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static VOID_HAZARD_SIGN_BLOCK: BlockEntry<Block>;
        static YELLOW_STRIPES_BLOCK_A: BlockEntry<Block>;
        static YELLOW_STRIPES_BLOCK_B: BlockEntry<Block>;
        static PETRIFIED_FOAM: BlockEntry<Block>;
        static REINFORCED_STONE: BlockEntry<Block>;
    }
}

declare namespace internal.com.gregtechceu.gtceu.common.data.machines {
    import MachineDefinition = api.machine.MachineDefinition;
    import MultiblockMachineDefinition = api.machine.MultiblockMachineDefinition;

    class GCYMMachines {
        static PARALLEL_HATCH: MachineDefinition[];
        static LARGE_MACERATION_TOWER: MultiblockMachineDefinition;
        static LARGE_CHEMICAL_BATH: MultiblockMachineDefinition;
        static LARGE_CENTRIFUGE: MultiblockMachineDefinition;
        static LARGE_MIXER: MultiblockMachineDefinition;
        static LARGE_ELECTROLYZER: MultiblockMachineDefinition;
        static LARGE_ELECTROMAGNET: MultiblockMachineDefinition;
        static LARGE_PACKER: MultiblockMachineDefinition;
        static LARGE_ASSEMBLER: MultiblockMachineDefinition;
        static LARGE_CIRCUIT_ASSEMBLER: MultiblockMachineDefinition;
        static LARGE_ARC_SMELTER: MultiblockMachineDefinition;
        static LARGE_ENGRAVING_LASER: MultiblockMachineDefinition;
        static LARGE_SIFTING_FUNNEL: MultiblockMachineDefinition;
        static BLAST_ALLOY_SMELTER: MultiblockMachineDefinition;
        static LARGE_AUTOCLAVE: MultiblockMachineDefinition;
        static LARGE_MATERIAL_PRESS: MultiblockMachineDefinition;
        static LARGE_BREWER: MultiblockMachineDefinition;
        static LARGE_CUTTER: MultiblockMachineDefinition;
        static LARGE_DISTILLERY: MultiblockMachineDefinition;
        static LARGE_EXTRACTOR: MultiblockMachineDefinition;
        static LARGE_EXTRUDER: MultiblockMachineDefinition;
        static LARGE_SOLIDIFIER: MultiblockMachineDefinition;
        static LARGE_WIREMILL: MultiblockMachineDefinition;
        static MEGA_BLAST_FURNACE: MultiblockMachineDefinition;
        static MEGA_VACUUM_FREEZER: MultiblockMachineDefinition;
    }
}

declare namespace internal.com.gregtechceu.gtceu.common.machine.multiblock.part {
    import IMachineBlockEntity = api.machine.IMachineBlockEntity;
    import TieredIOPartMachine = api.machine.multiblock.part.TieredIOPartMachine;
    import IO__Wrapper = internal.com.gregtechceu.gtceu.api.capability.recipe.IO__Wrapper;

    class FluidHatchPartMachine extends TieredIOPartMachine {
        constructor(
            holder: IMachineBlockEntity,
            tier: number,
            io: IO__Wrapper,
            initialCapacity: number,
            slots: number,
            ...args: unknown[]
        );
        constructor(
            holder: IMachineBlockEntity,
            tier: number,
            io: IO__Wrapper,
            initialCapacity: number,
            slots: number,
            args: unknown[]
        );
    }

    import TieredPartMachine = api.machine.multiblock.part.TieredPartMachine;
    class AutoMaintenanceHatchPartMachine extends TieredPartMachine {}

    class CleaningMaintenanceHatchPartMachine extends AutoMaintenanceHatchPartMachine {
        constructor(holder: IMachineBlockEntity, cleanroomType: CleanroomType);
    }
}

declare namespace internal.com.gregtechceu.gtceu.common.machine.multiblock.generator {
    import WorkableElectricMultiblockMachine = api.machine.multiblock.WorkableElectricMultiblockMachine;
    import IMachineBlockEntity = api.machine.IMachineBlockEntity;

    class LargeTurbineMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, tier: number);
    }
}

declare namespace internal.com.gregtechceu.gtceu.common.machine.multiblock.steam {
    import IMachineBlockEntity = api.machine.IMachineBlockEntity;
    import WorkableElectricMultiblockMachine = api.machine.multiblock.WorkableElectricMultiblockMachine;
    import MetaMachine = api.machine.MetaMachine;
    import GTRecipe = api.recipe.GTRecipe;
    import ModifierFunction = api.recipe.modifier.ModifierFunction;

    class SteamParallelMultiblockMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, args: any[]);
        constructor(holder: IMachineBlockEntity, ...args: any[]);

        static recipeModifier(machine: MetaMachine, recipe: GTRecipe): ModifierFunction;
    }
}

declare namespace internal.com.gregtechceu.gtceu.common.machine.multiblock.electric {
    import WorkableElectricMultiblockMachine = api.machine.multiblock.WorkableElectricMultiblockMachine;
    import IMachineBlockEntity = api.machine.IMachineBlockEntity;
    import IMachineBlockEntity = java.util.Comparator;
    import MultiblockControllerMachine = api.machine.multiblock.MultiblockControllerMachine;

    class AssemblyLineMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, allowCircuitSlots: boolean);
        constructor(holder: IMachineBlockEntity);

        static partSorter(mc: MultiblockControllerMachine): Comparator<IMultiPart>;
    }
}

declare namespace internal.com.gregtechceu.gtceu.common.machine.multiblock.electric.research {
    import WorkableElectricMultiblockMachine = api.machine.multiblock.WorkableElectricMultiblockMachine;
    import IMachineBlockEntity = api.machine.IMachineBlockEntity;

    class OpticalComputationMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine': typeof internal.com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine;
        'com.gregtechceu.gtceu.common.machine.multiblock.electric.research.OpticalComputationMachine': typeof internal.com.gregtechceu.gtceu.common.machine.multiblock.electric.research.OpticalComputationMachine;
        'com.gregtechceu.gtceu.common.machine.multiblock.electric.AssemblyLineMachine': typeof internal.com.gregtechceu.gtceu.common.machine.multiblock.electric.AssemblyLineMachine;
        'com.gregtechceu.gtceu.common.machine.multiblock.part.FluidHatchPartMachine': typeof internal.com.gregtechceu.gtceu.common.machine.multiblock.part.FluidHatchPartMachine;
        'com.gregtechceu.gtceu.common.machine.multiblock.part.CleaningMaintenanceHatchPartMachine': typeof internal.com.gregtechceu.gtceu.common.machine.multiblock.part.CleaningMaintenanceHatchPartMachine;
    }
}
