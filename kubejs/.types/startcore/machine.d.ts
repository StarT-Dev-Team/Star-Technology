namespace internal.com.startechnology.start_core.machine {
    import PartAbility = com.gregtechceu.gtceu.api.machine.multiblock.PartAbility;

    class StarTPartAbility {
        static ABSOLUTE_PARALLEL_HATCH: PartAbility;
        static REDSTONE_INTERFACE: PartAbility;
        static THREADING_CONTROLLER: PartAbility;
        static VACUUM_PUMP: PartAbility;
        static MODULAR_TERMINAL: PartAbility;
        static MODULAR_NODE: PartAbility;
        static MODULAR_TERMINAL_INTERFACE: PartAbility;
        static MODULAR_NODE_INTERFACE: PartAbility;
        static MODULAR_AUTO_SCALING_TERMINAL_CONDUIT: PartAbility;
        static MODULAR_AUTO_SCALING_NODE_CONDUIT: PartAbility;
        static MODULAR_TERMINAL_CONDUIT_2A: PartAbility;
        static MODULAR_TERMINAL_CONDUIT_4A: PartAbility;
        static MODULAR_TERMINAL_CONDUIT_16A: PartAbility;
        static MODULAR_TERMINAL_CONDUIT_64A: PartAbility;
        static MODULAR_TERMINAL_CONDUIT_256A: PartAbility;
        static MODULAR_TERMINAL_CONDUIT_1024A: PartAbility;
        static MODULAR_TERMINAL_CONDUIT_4096A: PartAbility;
        static MODULAR_NODE_CONDUIT_2A: PartAbility;
        static MODULAR_NODE_CONDUIT_4A: PartAbility;
        static MODULAR_NODE_CONDUIT_16A: PartAbility;
        static MODULAR_NODE_CONDUIT_64A: PartAbility;
        static MODULAR_NODE_CONDUIT_256A: PartAbility;
        static MODULAR_NODE_CONDUIT_1024A: PartAbility;
        static MODULAR_NODE_CONDUIT_4096A: PartAbility;
    }
}

namespace internal.com.startechnology.start_core.machine.threading {
    import TraceabilityPredicate = gregtechceu.gtceu.api.pattern.TraceabilityPredicate;
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;

    class StarTThreadingStatsPredicate {
        static threadingStatBlocks(): TraceabilityPredicate;
    }

    class StarTThreadingCapableMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }
}

namespace internal.com.startechnology.start_core.machine.vacuum_pump {
    import TraceabilityPredicate = internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate;

    class StarTVacuumPumpPredicates {
        static vacuumPumps(): TraceabilityPredicate;
    }
}

namespace internal.com.startechnology.start_core.machine.steam {
    import SteamParallelMultiblockMachine = com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine;

    class StarTSteamParallelMultiblockMachine extends SteamParallelMultiblockMachine {}
}

namespace internal.com.startechnology.start_core.machine.boosting {
    import LargeTurbineMachine = com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine;

    class BoostedPlasmaTurbine extends LargeTurbineMachine {}
}

namespace internal.com.startechnology.start_core.machine.komaru {
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;

    class StarTKomaruFrameMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);

        static addModule(resourceLocation: string, moduleType: 'basic' | 'advanced'): void;
    }
}

namespace internal.com.startechnology.start_core.machine.draconic_infusion {
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;

    class StarTDraconicInfusionMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }
}

namespace internal.com.startechnology.start_core.machine.vcrc {
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;

    class VacuumChemicalReactionChamberMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }
}

namespace internal.kjs {
    interface LoadableClasses {
        'com.startechnology.start_core.machine.StarTPartAbility': typeof internal.com.startechnology.start_core.machine.StarTPartAbility;
        'com.startechnology.start_core.machine.threading.StarTThreadingStatsPredicate': typeof internal.com.startechnology.start_core.machine.threading.StarTThreadingStatsPredicate;
        'com.startechnology.start_core.machine.vacuum_pump.StarTVacuumPumpPredicates': typeof internal.com.startechnology.start_core.machine.vacuum_pump.StarTVacuumPumpPredicates;
        'com.startechnology.start_core.machine.steam.StarTSteamParallelMultiblockMachine': typeof internal.com.startechnology.start_core.machine.steam.StarTSteamParallelMultiblockMachine;
        'com.startechnology.start_core.machine.boosting.BoostedPlasmaTurbine': typeof internal.com.startechnology.start_core.machine.boosting.BoostedPlasmaTurbine;
        'com.startechnology.start_core.machine.threading.StarTThreadingCapableMachine': typeof internal.com.startechnology.start_core.machine.threading.StarTThreadingCapableMachine;
        'com.startechnology.start_core.machine.komaru.StarTKomaruFrameMachine': typeof internal.com.startechnology.start_core.machine.komaru.StarTKomaruFrameMachine;
        'com.startechnology.start_core.machine.draconic_infusion.StarTDraconicInfusionMachine': typeof internal.com.startechnology.start_core.machine.draconic_infusion.StarTDraconicInfusionMachine;
        'com.startechnology.start_core.machine.vcrc.VacuumChemicalReactionChamberMachine': typeof internal.com.startechnology.start_core.machine.vcrc.VacuumChemicalReactionChamberMachine;
    }
}
