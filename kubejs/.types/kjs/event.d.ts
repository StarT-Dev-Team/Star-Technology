declare namespace internal.dev.latvian.mods.kubejs.event {
    interface EventJS extends $object<'dev.latvian.mods.kubejs.event.EventJS'> {
        cancel(): unknown;
        success(): unknown;
        exit(): unknown;
        cancel(value: unknown): unknown;
        success(value: unknown): unknown;
        exit(value: unknown): unknown;
    }

    interface StartupEventJS extends $object<'dev.latvian.mods.kubejs.event.StartupEventJS', EventJS> {}
}
