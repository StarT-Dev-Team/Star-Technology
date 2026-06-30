namespace internal.dev.latvian.mods.kubejs.registry {
    import StartupEventJS = event.StartupEventJS;

    class RegistryEventJS<T, TBuilder extends Record<string, BuilderBase<T>>> extends StartupEventJS {
        create<B extends Exclude<keyof TBuilder, '_default'>>(id: string, type: B): TBuilder[B];
        create(id: string): TBuilder['_default'];
    }

    import Supplier = java.util.function_.Supplier;
    import Component__Wrapper = net.minecraft.network.chat.Component__Wrapper;
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;

    class BuilderBase<T> extends Supplier<T> {
        displayName(name: Component__Wrapper): this;
        formattedDisplayName(): this;
        formattedDisplayName(name: Component__Wrapper): this;
        tag(tag: ResourceLocation__Wrapper): this;
    }
}
