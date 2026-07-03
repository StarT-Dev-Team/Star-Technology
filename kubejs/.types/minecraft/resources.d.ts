declare namespace internal.net.minecraft.resources {
    interface ResourceLocation extends $object<'net.minecraft.resources.ResourceLocation'> {
        getPath(): string;
        getNamespace(): string;
    }

    const ResourceLocation: $class<ResourceLocation> & {
        new (namespace: string, path: string): ResourceLocation;
        new (location: string): ResourceLocation;
        tryParse(location: string): ResourceLocation | null;
        tryBuild(namespace: string, path: string): ResourceLocation | null;
    };

    import Comparable = java.lang.Comparable;

    interface ResourceKey<T> extends $object<'net.minecraft.resources.ResourceKey', Comparable<ResourceKey<T>>> {}
}
