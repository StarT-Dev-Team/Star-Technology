declare namespace internal.com.startechnology.start_core.machine {
    import PartAbility = com.gregtechceu.gtceu.api.machine.multiblock.PartAbility;

    interface StarTPartAbility extends $object<'com.startechnology.start_core.machine.StarTPartAbility'> {}

    const StarTPartAbility: $class<StarTPartAbility> & {
        ABSOLUTE_PARALLEL_HATCH: PartAbility;
        REDSTONE_INTERFACE: PartAbility;
        THREADING_CONTROLLER: PartAbility;
        VACUUM_PUMP: PartAbility;
        MODULAR_TERMINAL: PartAbility;
        MODULAR_NODE: PartAbility;
        MODULAR_TERMINAL_INTERFACE: PartAbility;
        MODULAR_NODE_INTERFACE: PartAbility;
        MODULAR_AUTO_SCALING_TERMINAL_CONDUIT: PartAbility;
        MODULAR_AUTO_SCALING_NODE_CONDUIT: PartAbility;
        MODULAR_TERMINAL_CONDUIT_2A: PartAbility;
        MODULAR_TERMINAL_CONDUIT_4A: PartAbility;
        MODULAR_TERMINAL_CONDUIT_16A: PartAbility;
        MODULAR_TERMINAL_CONDUIT_64A: PartAbility;
        MODULAR_TERMINAL_CONDUIT_256A: PartAbility;
        MODULAR_TERMINAL_CONDUIT_1024A: PartAbility;
        MODULAR_TERMINAL_CONDUIT_4096A: PartAbility;
        MODULAR_NODE_CONDUIT_2A: PartAbility;
        MODULAR_NODE_CONDUIT_4A: PartAbility;
        MODULAR_NODE_CONDUIT_16A: PartAbility;
        MODULAR_NODE_CONDUIT_64A: PartAbility;
        MODULAR_NODE_CONDUIT_256A: PartAbility;
        MODULAR_NODE_CONDUIT_1024A: PartAbility;
        MODULAR_NODE_CONDUIT_4096A: PartAbility;
    };
}

declare namespace internal.com.startechnology.start_core.machine.threading {
    import TraceabilityPredicate = gregtechceu.gtceu.api.pattern.TraceabilityPredicate;
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;

    const StarTThreadingStatsPredicate: {
        threadingStatBlocks(): TraceabilityPredicate;
    };

    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    interface StarTThreadingCapableMachine extends $object<
        'com.startechnology.start_core.machine.threading.StarTThreadingCapableMachine',
        WorkableElectricMultiblockMachine
    > {}

    const StarTThreadingCapableMachine: $class<StarTThreadingCapableMachine> & {
        new (holder: IMachineBlockEntity, ...args: any[]): StarTThreadingCapableMachine;
    };
}

declare namespace internal.com.startechnology.start_core.machine.vacuum_pump {
    import TraceabilityPredicate = internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate;

    const StarTVacuumPumpPredicates: {
        vacuumPumps(): TraceabilityPredicate;
    };
}

declare namespace internal.com.startechnology.start_core.machine.steam {
    import SteamParallelMultiblockMachine = com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    interface StarTSteamParallelMultiblockMachine extends $object<
        'com.startechnology.start_core.machine.steam.StarTSteamParallelMultiblockMachine',
        SteamParallelMultiblockMachine
    > {}

    const StarTSteamParallelMultiblockMachine: $class<StarTSteamParallelMultiblockMachine> & {
        new (holder: IMachineBlockEntity, ...args: any[]): StarTSteamParallelMultiblockMachine;
    };
}

declare namespace internal.com.startechnology.start_core.machine.boosting {
    import LargeTurbineMachine = com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    interface BoostedPlasmaTurbine extends $object<
        'com.startechnology.start_core.machine.boosting.BoostedPlasmaTurbine',
        LargeTurbineMachine
    > {}

    const BoostedPlasmaTurbine: $class<BoostedPlasmaTurbine> & {
        new (holder: IMachineBlockEntity, tier: number): BoostedPlasmaTurbine;
    };
}

declare namespace internal.com.startechnology.start_core.machine.komaru {
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    interface StarTKomaruFrameMachine extends $object<
        'com.startechnology.start_core.machine.komaru.StarTKomaruFrameMachine',
        WorkableElectricMultiblockMachine
    > {}

    const StarTKomaruFrameMachine: $class<StarTKomaruFrameMachine> & {
        new (holder: IMachineBlockEntity, ...args: any[]): StarTKomaruFrameMachine;
        addModule(resourceLocation: string, moduleType: 'basic' | 'advanced'): void;
    };
}

declare namespace internal.com.startechnology.start_core.machine.draconic_infusion {
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    interface StarTDraconicInfusionMachine extends $object<
        'com.startechnology.start_core.machine.draconic_infusion.StarTDraconicInfusionMachine',
        WorkableElectricMultiblockMachine
    > {}

    const StarTDraconicInfusionMachine: $class<StarTDraconicInfusionMachine> & {
        new (holder: IMachineBlockEntity, ...args: any[]): StarTDraconicInfusionMachine;
    };
}

declare namespace internal.com.startechnology.start_core.machine.vcrc {
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    interface VacuumChemicalReactionChamberMachine extends $object<
        'com.startechnology.start_core.machine.vcrc.VacuumChemicalReactionChamberMachine',
        WorkableElectricMultiblockMachine
    > {}

    const VacuumChemicalReactionChamberMachine: $class<VacuumChemicalReactionChamberMachine> & {
        new (holder: IMachineBlockEntity, ...args: any[]): VacuumChemicalReactionChamberMachine;
    };
}

declare namespace internal.com.startechnology.start_core.machine.abyssal_containment {
    import CleanroomMachine = gregtechceu.gtceu.common.machine.multiblock.electric.CleanroomMachine;
    import CleanroomType = gregtechceu.gtceu.api.machine.multiblock.CleanroomType;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;

    interface StarTAbyssalContainmentMachine extends $object<
        'com.startechnology.start_core.machine.abyssal_containment.StarTAbyssalContainmentMachine',
        CleanroomMachine
    > {}

    const StarTAbyssalContainmentMachine: $class<StarTAbyssalContainmentMachine> & {
        new (holder: IMachineBlockEntity, ...args: any[]): StarTAbyssalContainmentMachine;
        ABYSSAL_CONTAINMENT_ROOM: CleanroomType;
    };
}

declare namespace internal.com.startechnology.start_core.machine.arboreal_extractor {
    import WorkableElectricMultiblockMachine = gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine;
    import IMachineBlockEntity = com.gregtechceu.gtceu.api.machine.IMachineBlockEntity;
    import TraceabilityPredicate = gregtechceu.gtceu.api.pattern.TraceabilityPredicate;

    interface ArborealExtractorMachine extends $object<
        'com.startechnology.start_core.machine.arboreal_extarctor.ArborealExtractorMachine',
        WorkableElectricMultiblockMachine
    > {}

    const ArborealExtractorMachine: $class<ArborealExtractorMachine> & {
        new (holder: IMachineBlockEntity, ...args: any[]): ArborealExtractorMachine;
    }

    interface StarTArborealPredicates extends $object<
        'com.startechnology.start_core.machine.arboreal_extractor.StarTArborealPredicates',
        {}
    > {}

    const StarTArborealPredicates: $class<StarTArborealPredicates> & {
        new (): StarTArborealPredicates;
        leaves(): TraceabilityPredicate;
        logs(): TraceabilityPredicate;
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
        'com.startechnology.start_core.machine.arboreal_extarctor.ArborealExtractorMachine': typeof internal.com.startechnology.start_core.machine.arboreal_extractor.ArborealExtractorMachine;
        'com.startechnology.start_core.machine.arboreal_extractor.StarTArborealPredicates': typeof internal.com.startechnology.start_core.machine.arboreal_extractor.StarTArborealPredicates;
    }
}
