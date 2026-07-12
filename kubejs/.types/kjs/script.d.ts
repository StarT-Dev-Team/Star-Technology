declare namespace internal.dev.latvian.mods.kubejs.script {
    interface ConsoleLine extends $object<'dev.latvian.mods.kubejs.script.ConsoleLine'> {}

    interface PlatformWrapper extends $object<'dev.latvian.mods.kubejs.script.PlatformWrapper'> {}

    const PlatformWrapper: $class<PlatformWrapper> & {
        getName(): string;
        get name(): string;
        isForge(): boolean;
        isFabric(): boolean;
        getMcVersion(): string;
        get mcVersion(): string;
        getList(): Set<string>;
        get list(): Set<string>;
        getModVersion(): string;
        get modVersion(): string;
        isLoaded(modId: string): boolean;
        getInfo(modId: string): PlatformWrapper$ModInfo;
        getMods(): Record<string, PlatformWrapper$ModInfo>;
        get mods(): Record<string, PlatformWrapper$ModInfo>;
        isDevelopmentEnvironment(): boolean;
        isClientEnvironment(): boolean;
        setModName(modId: string, name: string): void;
        getMinecraftVersion(): number;
        get minecraftVersion(): number;
        getMinecraftVersionString(): string;
        get minecraftVersionString(): string;
        isGeneratingData(): boolean;
        breakpoint(...args: any[]): void;
    };

    interface PlatformWrapper$ModInfo extends $object<'dev.latvian.mods.kubejs.script.PlatformWrapper$ModInfo'> {
        getId(): string;
        get id(): string;
        getName(): string;
        get name(): string;
        getVersion(): string;
        get version(): string;
        getCustomName(): string;
        get customname(): string;

        setName(name: string): void;
        set name(name: string);
    }
}
