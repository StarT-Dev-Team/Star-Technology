declare namespace internal.java.util {
    interface Comparator<T> {
        compare(o1: T, o2: T): number;
        equals(o: any): boolean;
    }
}

declare namespace internal.java.util.function_ {
    interface Supplier<T> {
        get(): T;
    }

    interface Function<T, R> {
        apply(t: T): R;
    }

    interface BiConsumer<T, U> {
        accept(t: T, u: U): void;
    }
}
