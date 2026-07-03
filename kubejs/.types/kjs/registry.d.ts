declare namespace internal.dev.latvian.mods.kubejs.registry {
    import StartupEventJS = event.StartupEventJS;

    interface RegistryEventJS<T, TBuilder extends { [K in keyof TBuilder]: BuilderBase<T> }> extends $object<
        'dev.latvian.mods.kubejs.registry',
        StartupEventJS
    > {
        create<B extends Exclude<keyof TBuilder, '_default'>>(id: string, type: B): TBuilder[B];
        create(id: string): TBuilder extends { _default: infer DefaultBuilder } ? DefaultBuilder : never;
    }

    import Supplier = java.util.function_.Supplier;
    import Component = net.minecraft.network.chat.Component;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    interface BuilderBase__Blueprint<T, TSelf> extends $object<
        'dev.latvian.mods.kubejs.registry.BuilderBase',
        Supplier<T>
    > {
        displayName(name: $wrapped<Component>): TSelf;
        formattedDisplayName(): TSelf;
        formattedDisplayName(name: $wrapped<Component>): TSelf;
        tag(tag: $wrapped<ResourceLocation>): TSelf;
    }

    interface BuilderBase<T> extends BuilderBase__Blueprint<T, BuilderBase<T>> {}
}
