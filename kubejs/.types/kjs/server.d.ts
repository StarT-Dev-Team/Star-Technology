namespace internal.dev.latvian.mods.kubejs.server.tag {
    import EventJS = event.EventJS;

    class TagEventJS extends EventJS {
        readonly __dev_latvian_mods_kubejs_server_tag_TagEventJS: unique symbol;
        add(tag: ResourceLocation__Wrapper, filters: TagEventFilter__Wrapper[]): TagWrapper;
        add(tag: ResourceLocation__Wrapper, ...filters: TagEventFilter__Wrapper[]): TagWrapper;
        remove(tag: ResourceLocation__Wrapper, filters: TagEventFilter__Wrapper[]): TagWrapper;
        remove(tag: ResourceLocation__Wrapper, ...filters: TagEventFilter__Wrapper[]): TagWrapper;
    }

    interface TagEventFilter {
        readonly __dev_latvian_mods_kubejs_server_tag_TagEventFilter: unique symbol;
    }

    type TagEventFilter__Wrapper = TagEventFilter | RegExp | string;

    class TagWrapper {
        readonly __dev_latvian_mods_kubejs_server_tag_TagWrapper: unique symbol;
    }
}
