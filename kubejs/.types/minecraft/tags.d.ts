declare namespace internal.net.minecraft.tags {
    import ResourceLocation = resources.ResourceLocation;
    import ResourceKey = resources.ResourceKey;
    import Registry = net.minecraft.core.Registry;

    interface TagKey<T> extends $object<{ name: 'net.minecraft.tags.TagKey'; registryEntry: true }> {
        registry(): ResourceKey<Registry<T>>;
        location(): ResourceLocation;
    }

    const TagKey: $class<TagKey<any>> & {
        constructor<T>(registry: ResourceKey<Registry<T>>, location: ResourceLocation): TagKey<T>;
    };
}
