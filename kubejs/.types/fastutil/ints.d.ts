declare namespace internal.it.unimi.dsi.fastutil {
    interface Pair<L, R> extends $object<'it.unimi.dsi.fastutil.Pair'> {
        left(): L;
        right(): R;
        left(l: L): Pair<L, R>;
        right(r: R): Pair<L, R>;
        first(): L;
        second(): R;
        first(l: L): Pair<L, R>;
        second(r: R): Pair<L, R>;
        key(): L;
        value(): R;
        key(l: L): Pair<L, R>;
        value(r: R): Pair<L, R>;
    }

    const Pair: $class<Pair<unknown, unknown>> & {
        of<L, R>(l: L, r: R): Pair<L, R>;
    };
}

declare namespace internal.it.unimi.dsi.fastutil.ints {
    interface Int2IntFunction extends $object<{
        name: 'it.unimi.dsi.fastutil.ints.Int2IntFunction';
        functionalInterface: 'get';
    }> {
        get(key: number): number;
        defaultReturnValue(): number;
    }
}
