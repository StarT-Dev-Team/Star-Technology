declare namespace internal.dev.latvian.mods.kubejs.server {
    import EventJS = event.EventJS;

    interface ServerEventJS extends $object<'dev.latvian.mods.kubejs.server.ServerEventJS', EventJS> {
        getServer(): unknown;
    }

    import ReloadableServerResources = net.minecraft.server.ReloadableServerResources;

    const KubeJSReloadListener: {
        resources: ReloadableServerResources;
    };
}

declare namespace internal.dev.latvian.mods.kubejs.server.tag {
    import EventJS = event.EventJS;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    interface TagEventJS extends $object<'dev.latvian.mods.kubejs.server.tag.TagEventJS', EventJS> {
        add(tag: $wrapped<ResourceLocation>, filters: TagEventFilter__Wrapper[]): TagWrapper;
        add(tag: $wrapped<ResourceLocation>, ...filters: TagEventFilter__Wrapper[]): TagWrapper;
        remove(tag: $wrapped<ResourceLocation>, filters: TagEventFilter__Wrapper[]): TagWrapper;
        remove(tag: $wrapped<ResourceLocation>, ...filters: TagEventFilter__Wrapper[]): TagWrapper;
        removeAllTagsFrom(...ids: TagEventFilter__Wrapper[]): void;
        removeAllTagsFrom(ids: TagEventFilter__Wrapper[]): void;
    }

    const TagEventJS: $class<TagEventJS> & {};

    interface TagEventFilter extends $object<'dev.latvian.mods.kubejs.server.tag.TagEventFilter'> {}

    interface TagWrapper extends $object<'dev.latvian.mods.kubejs.server.tag.TagWrapper'> {}

    type TagEventFilter__Wrapper = TagEventFilter | RegExp | string;
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'dev.latvian.mods.kubejs.server.KubeJSReloadListener': typeof internal.dev.latvian.mods.kubejs.server.KubeJSReloadListener;
    }
}
