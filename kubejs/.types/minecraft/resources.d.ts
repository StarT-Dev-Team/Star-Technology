namespace internal.net.minecraft.resources {
    class ResourceLocation {
        constructor(namespace: string, path: string);
        constructor(location: string);

        static tryParse(location: string): ResourceLocation | null;
        static tryBuild(namespace: string, path: string): ResourceLocation | null;

        getPath(): string;
        getNamespace(): string;
    }

    type ResourceLocation__Wrapper = ResourceLocation | string;
}
