namespace internal.kjs {
    interface LoadableClasses {}
}

const Java: {
    loadClass: { <K extends keyof internal.kjs.LoadableClasses>(name: K): internal.kjs.LoadableClasses[K] };
};

const Item: typeof internal.dev.latvian.mods.kubejs.bindings.ItemWrapper;
