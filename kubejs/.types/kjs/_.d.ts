namespace internal.kjs {
    interface LoadableClasses {}

    import BasicBlockJS$Builder = dev.latvian.mods.kubejs.block.custom.BasicBlockJS$Builder;

    interface BlockTypeRegistry {
        _default: BasicBlockJS$Builder;
        basic: BasicBlockJS$Builder;
    }

    import BasicMobEffect$Builder = dev.latvian.mods.kubejs.misc.BasicMobEffect$Builder;

    interface MobEffectRegistry {
        _default: BasicMobEffect$Builder;
        basic: BasicMobEffect$Builder;
    }

    import BasicItemJS$Builder = dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder;

    interface ItemRegistry {
        _default: BasicItemJS$Builder;
        basic: BasicItemJS$Builder;
    }
}

namespace internal.kjs.kubejs {
    import InformationJEIEventJS = dev.latvian.mods.kubejs.integration.forge.jei.InformationJEIEventJS;
    import HideJEIEventJS = dev.latvian.mods.kubejs.integration.forge.jei.HideJEIEventJS;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import ItemStack__Wrapper = net.minecraft.world.item.ItemStack__Wrapper;

    interface JEIEvents {
        information(callback: (event: InformationJEIEventJS) => void): void;
        hideItems(callback: (event: HideJEIEventJS<ItemStack, ItemStack__Wrapper>) => void): void;
    }

    import ItemTooltipEventJS = dev.latvian.mods.kubejs.item.ItemTooltipEventJS;

    interface ItemEvents {
        tooltip(callback: (event: ItemTooltipEventJS) => void): void;
    }

    import RegistryEventJS = dev.latvian.mods.kubejs.registry.RegistryEventJS;
    import Block = net.minecraft.world.level.block.Block;
    import Item = net.minecraft.world.item.Item;

    interface StartupEvents {
        registry(key: 'block', callback: (event: RegistryEventJS<Block, BlockTypeRegistry>) => void): void;
        registry(key: 'mob_effect', callback: (event: RegistryEventJS<MobEffect, MobEffectRegistry>) => void): void;
        registry(key: 'item', callback: (event: RegistryEventJS<Item, ItemRegistry>) => void): void;
    }

    import BlockModificationEventJS = dev.latvian.mods.kubejs.block.BlockModificationEventJS;

    interface BlockEvents {
        modification(callback: (event: BlockModificationEventJS) => void): void;
    }
}

const Java: {
    loadClass: { <K extends keyof internal.kjs.LoadableClasses>(name: K): internal.kjs.LoadableClasses[K] };
};

const Item: typeof internal.dev.latvian.mods.kubejs.bindings.ItemWrapper;

const StartupEvents: internal.kjs.kubejs.StartupEvents;
const ItemEvents: internal.kjs.kubejs.ItemEvents;
const JEIEvents: internal.kjs.kubejs.JEIEvents;
const BlockEvents: internal.kjs.kubejs.BlockEvents;
