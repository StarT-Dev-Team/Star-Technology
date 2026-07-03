declare namespace internal.it.unimi.dsi.fastutil.ints {
    interface Int2IntFunction extends $object<{
        name: 'it.unimi.dsi.fastutil.ints.Int2IntFunction';
        functionalInterface: 'get';
    }> {
        get(key: number): number;
        defaultReturnValue(): number;
    }
}
