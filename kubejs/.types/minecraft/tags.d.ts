declare namespace internal.net.minecraft.tags {
    import ResourceLocation = resources.ResourceLocation;

    declare class TagKey<T> {
        constructor(registry: ResourceKey<Registry<T>>, location: ResourceLocation);
    }
}
