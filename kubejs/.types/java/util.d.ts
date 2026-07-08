declare namespace internal.java.util {
    interface Comparator<T> extends $object<'Comparator'> {
        compare(o1: T, o2: T): number;
        equals(o: any): boolean;
    }

    interface Iterator<V> extends $object<'java.lang.Iterable'> {}

    import Iterable = java.lang.Iterable;

    interface Collection<E> extends $object<'Collection', Iterable<E>> {
        size(): number;
        isEmpty(): boolean;
        contains(v: unknown): boolean;
        add(v: E): void;
        addAll(c: Collection<E>): boolean;
        remove(v: unknown): void;
        removeAll(c: Collection<E>): boolean;
    }

    interface List<E> extends $object<'List', Omit<Collection<E>, 'add' | 'addAll'>> {
        add(v: E): void;
        add(index: number, v: E): void;
        remove(v: unknown): void;
        addAll(c: Collection<E>): boolean;
        addAll(index: number, c: Collection<E>): boolean;
    }

    interface Optional<T> extends $object<'java.lang.Optional'> {
        get(): T;
        isPresent(): boolean;
        get present(): boolean;
    }

    const Optional: {
        empty<T>(): Optional<T>;
        of<T>(value: T): Optional<T>;
        ofNullable<T>(value: T | null): Optional<T>;
    };

    interface UUID extends $object<'java.lang.UUID'> {}
}

declare namespace internal.java.util.function_ {
    interface Supplier<T> extends $object<{ name: 'java.util.function.Supplier'; functionalInterface: 'get' }> {
        get(): T;
    }

    interface Function<T, R> extends $object<{ name: 'java.util.function.Function'; functionalInterface: 'apply' }> {
        apply(t: T): R;
    }

    interface BiConsumer<T, U> extends $object<{
        name: 'java.util.function.BiConsumer';
        functionalInterface: 'accept';
    }> {
        accept(t: T, u: U): void;
    }

    interface Consumer<T> extends $object<{ name: 'java.util.function.Consumer'; functionalInterface: 'accept' }> {
        accept(t: T): void;
        andThen(after: $wrapped<Consumer<T>>): Consumer<T>;
    }

    interface Predicate<T> extends $object<{ name: 'java.util.function.Predicate'; functionalInterface: 'test' }> {
        test(t: T): boolean;
        and(other: $wrapped<Predicate<T>>): Predicate<T>;
        negate(): Predicate<T>;
        or(other: $wrapped<Predicate<T>>): Predicate<T>;
    }

    const Predicate: $class<Predicate<unknown>> & {
        isEqual<T>(target: T): Predicate<T>;
        not<T>(target: $wrapped<Predicate<T>>): Predicate<T>;
    };

    interface UnaryOperator<T> extends $object<
        { name: 'java.util.function.UnaryOperator'; functionalInterface: 'apply' },
        Function<T, T>
    > {}
}
