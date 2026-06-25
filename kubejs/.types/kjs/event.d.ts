namespace internal.dev.latvian.mods.kubejs.event {
    class EventJS {
        cancel(): unknown;
        success(): unknown;
        exit(): unknown;
        cancel(value: unknown): unknown;
        success(value: unknown): unknown;
        exit(value: unknown): unknown;
    }

    class StartupEventJS extends EventJS {}
}
