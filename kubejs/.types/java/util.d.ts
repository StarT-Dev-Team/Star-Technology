declare namespace internal.java.util {
    interface Comparator<T> {
        compare(o1: T, o2: T): number;
        equals(o: any): boolean;
    }
}

declare namespace internal.java.util.function_ {
    const __Supplier: unique symbol;
    interface Supplier<T> {
        [__Supplier]: 0;
        get(): T;
    }

    type Supplier__Wrapper<T> = Supplier<T> | (() => T);

    const __Function: unique symbol;
    interface Function<T, R> {
        [__Function]: 0;
        apply(t: T): R;
    }

    type Function__Wrapper<T, R> = Function<T, R> | ((t: T) => R);

    const __BiConsumer: unique symbol;
    interface BiConsumer<T, U> {
        [__BiConsumer]: 0;
        accept(t: T, u: U): void;
    }

    type BiConsumer__Wrapper<T, U> = BiConsumer<T, U> | ((t: T, u: U) => void);
}
