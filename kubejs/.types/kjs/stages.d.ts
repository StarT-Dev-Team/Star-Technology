declare namespace internal.dev.latvian.mods.kubejs.stages {
    interface Stages extends $object<'dev.latvian.mods.kubejs.stages.Stages'> {
        has(stage: string): boolean;
        add(stage: string): boolean;
        remove(stage: string): boolean;
    }
}
