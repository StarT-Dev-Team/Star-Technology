declare namespace internal.kjs.gtceu {
    import KJSWrappingMultiblockBuilder = com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSWrappingMultiblockBuilder;
    import KJSWrappingTieredMachineBuilder = com.gregtechceu.gtceu.integration.kjs.builders.machine.KJSWrappingTieredMachineBuilder;
    import MultiblockMachineBuilder = com.gregtechceu.gtceu.api.registry.registrate.MultiblockMachineBuilder;

    interface MachineEventContext {
        create(key: string, kind?: 'simple'): KJSWrappingTieredMachineBuilder;
        create(key: string, kind: 'custom'): KJSWrappingTieredMachineBuilder;
        create(key: string, kind: 'steam'): GTCEuSteamMachineBuilder;
        create(key: string, kind: 'generator'): KJSWrappingTieredMachineBuilder;
        create(key: string, kind: 'multiblock'): MultiblockMachineBuilder;
        create(key: string, kind: 'tiered_multiblock'): KJSWrappingMultiblockBuilder;
        create(key: string, kind: 'primitive_singleblock'): GTCEuMachineBuilder;
        create(key: string, kind: 'primitive'): MultiblockMachineBuilder;
    }

    import GTRecipeTypeBuilder = com.gregtechceu.gtceu.integration.kjs.builders.GTRecipeTypeBuilder;

    interface RecipeTypeEventContext {
        create(key: string): GTRecipeTypeBuilder;
    }

    import ElementBuilder = com.gregtechceu.gtceu.integration.kjs.builders.ElementBuilder;

    interface ElementEventContext {
        create(key: string, kind?: 'basic'): ElementBuilder;
    }

    import GTRecipeCategoryBuilder = com.gregtechceu.gtceu.integration.kjs.builders.GTRecipeCategoryBuilder;

    interface RecipeCategoryEventContext {
        create(key: string, kind?: 'basic'): GTRecipeCategoryBuilder;
    }

    interface StartupEvents {
        registry(key: 'gtceu:machine', event: (context: MachineEventContext) => void): void;
        registry(key: 'gtceu:recipe_type', event: (context: RecipeTypeEventContext) => void): void;
        registry(key: 'gtceu:element', event: (context: ElementEventContext) => void): void;
        registry(key: 'gtceu:recipe_category', event: (context: RecipeCategoryEventContext) => void): void;
    }
}

namespace internal.kjs {
    import ActiveBlockBuilder = com.gregtechceu.gtceu.integration.kjs.builders.block.ActiveBlockBuilder;
    import CoilBlockBuilder = com.gregtechceu.gtceu.integration.kjs.builders.block.CoilBlockBuilder;

    interface BlockTypeRegistry {
        'gtceu:active': ActiveBlockBuilder;
        'gtceu:coil': CoilBlockBuilder;
    }
}

declare const RotationState: typeof internal.com.gregtechceu.gtceu.api.data.RotationState;

declare const GTMaterials: typeof internal.com.gregtechceu.gtceu.common.data.GTMaterials;
declare const GTElements: typeof internal.com.gregtechceu.gtceu.common.data.GTElements;
declare const GTRecipeTypes: typeof internal.com.gregtechceu.gtceu.common.data.GTRecipeTypes;
declare const GTRecipeModifiers: typeof internal.com.gregtechceu.gtceu.common.data.GTRecipeModifiers;
declare const GTSoundEntries: typeof internal.com.gregtechceu.gtceu.common.data.GTSoundEntries;
declare const GCYMBlocks: typeof internal.com.gregtechceu.gtceu.common.data.GCYMBlocks;
declare const GTBlocks: typeof internal.com.gregtechceu.gtceu.common.data.GTBlocks;

declare const GCYMMachines: typeof internal.com.gregtechceu.gtceu.common.data.machines.GCYMMachines;

declare const GTCEuStartupEvents: internal.kjs.gtceu.StartupEvents;

declare const GTValues: typeof internal.com.gregtechceu.gtceu.api.GTValues;

declare const FactoryBlockPattern: typeof internal.com.gregtechceu.gtceu.api.pattern.FactoryBlockPattern;

declare const PartAbility: typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.PartAbility;

declare const CleanroomType: typeof internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType;

declare const Predicates: typeof internal.com.gregtechceu.gtceu.api.pattern.Predicates;

declare const GuiTextures: typeof internal.com.gregtechceu.gtceu.api.gui.GuiTextures;
