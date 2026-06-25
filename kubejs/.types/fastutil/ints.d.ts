namespace internal.it.unimi.dsi.fastutil.ints {
    const __Int2IntFunction: unique symbol;
    interface Int2IntFunction {
        [__Int2IntFunction]: 0;
        get(key: number): number;
        defaultReturnValue(): number; // this is a default implementation
    }

    type Int2IntFunction__Wrapper = Int2IntFunction | ((key: number) => number);
}
