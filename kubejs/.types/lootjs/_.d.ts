declare namespace internal.kjs {
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import OutputItem = dev.latvian.mods.kubejs.item.OutputItem;

    interface TypeWrappers {
        'com.almostreliable.lootjs.core.LootEntry':
            OutputItem | TypeWrappers['dev.latvian.mods.kubejs.item.OutputItem'];
        'com.almostreliable.lootjs.kube.builder.ResourceLocationFilter':
            ResourceLocation | RegExp | string | (ResourceLocation | RegExp | string)[];
    }
}

declare namespace internal.kjs.lootjs {
    import LootModificationEventJS = com.almostreliable.lootjs.kube.LootModificationEventJS;

    interface LootJS {
        modifiers(callback: (event: LootModificationEventJS) => void): void;
    }
}

declare const LootJS: internal.kjs.lootjs.LootJS;
