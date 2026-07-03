declare namespace internal.com.startechnology.start_core.machine {
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

declare namespace internal.com.startechnology.start_core.machine.threading {
    import TraceabilityPredicate = gregtechceu.gtceu.api.pattern.TraceabilityPredicate;
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;

    class StarTThreadingStatsPredicate {
        static threadingStatBlocks(): TraceabilityPredicate;
    }

    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    class StarTThreadingCapableMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }
}

declare namespace internal.com.startechnology.start_core.machine.vacuum_pump {
    import TraceabilityPredicate = internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate;

    class StarTVacuumPumpPredicates {
        static vacuumPumps(): TraceabilityPredicate;
    }
}

declare namespace internal.com.startechnology.start_core.machine.steam {
    import SteamParallelMultiblockMachine = com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine;

    class StarTSteamParallelMultiblockMachine extends SteamParallelMultiblockMachine {}
}

declare namespace internal.com.startechnology.start_core.machine.boosting {
    import LargeTurbineMachine = com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine;

    class BoostedPlasmaTurbine extends LargeTurbineMachine {}
}

declare namespace internal.com.startechnology.start_core.machine.komaru {
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    class StarTKomaruFrameMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);

        static addModule(resourceLocation: string, moduleType: 'basic' | 'advanced'): void;
    }
}

declare namespace internal.com.startechnology.start_core.machine.draconic_infusion {
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    class StarTDraconicInfusionMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }
}

declare namespace internal.com.startechnology.start_core.machine.vcrc {
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    class VacuumChemicalReactionChamberMachine extends WorkableElectricMultiblockMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);
    }
}

declare namespace internal.com.startechnology.start_core.machine.abyssal_containment {
    import CleanroomMachine = gregtechceu.gtceu.common.machine.multiblock.electric.CleanroomMachine;
    import CleanroomType = gregtechceu.gtceu.api.machine.multiblock.CleanroomType;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    class StarTAbyssalContainmentMachine extends CleanroomMachine {
        constructor(holder: IMachineBlockEntity, ...args: any[]);

        static ABYSSAL_CONTAINMENT_ROOM: CleanroomType;
    }
}

declare namespace internal.kjs {
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
        'com.startechnology.start_core.machine.abyssal_containment.StarTAbyssalContainmentMachine': typeof internal.com.startechnology.start_core.machine.abyssal_containment.StarTAbyssalContainmentMachine;
    }
}
