declare namespace internal.kjs {
    interface TypeWrappers {
        'dev.latvian.mods.rhino.mod.util.color.Color': string | number;
    }
}

interface String {
    readonly path: string;
    readonly namespace: string;
}
