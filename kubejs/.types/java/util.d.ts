namespace internal.java.util {
    const __Comparator: unique symbol;
    interface Comparator<T> {
        [__Comparator]: 0;
        compare(o1: T, o2: T): number;
        equals(o: any): boolean;
    }

    import Consumer__Wrapper = function_.Consumer__Wrapper;

    const __Iterable: unique symbol;
    interface Iterable<E> {
        [__Iterable]: 0;
        iterator(): Iterator<E>;
        forEach(action: Consumer__Wrapper<E>): void;
    }

    const __Collection: unique symbol;
    interface Collection<E> extends Iterable<E> {
        [__Collection]: 0;
        size(): number;
        isEmpty(): boolean;
        contains(v: unknown): boolean;
        add(v: E): void;
        addAll(c: Collection<E>): boolean;
        remove(v: unknown): void;
        removeAll(c: Collection<E>): boolean;
    }

    const __List: unique symbol;
    interface List<E> extends Omit<Collection<E>, 'add' | 'addAll'> {
        [__List]: 0;
        add(v: E): void;
        add(index: number, v: E): void;
        remove(v: unknown): void;
        addAll(index: number, c: Collection<E>): boolean;
    }
}

namespace internal.java.util.function_ {
    interface Supplier<T> {
        readonly __java_util_function_Supplier: unique symbol;
        get(): T;
    }

    type Supplier__Wrapper<T> = Supplier<T> | Supplier<T>['get'];

    interface Function<T, R> {
        readonly __java_util_function_Function: unique symbol;
        apply(t: T): R;
    }

    type Function__Wrapper<T, R> = Function<T, R> | Function<T, R>['apply'];

    interface BiConsumer<T, U> {
        readonly __java_util_function_BiConsumer: unique symbol;
        accept(t: T, u: U): void;
    }

    type BiConsumer__Wrapper<T, U> = BiConsumer<T, U> | BiConsumer<T, U>['accept'];

    interface Consumer<T> {
        readonly __java_util_function_Consumer: unique symbol;
        accept(t: T): void;
        andThen(after: Consumer__Wrapper<T>): Consumer<T>;
    }

    type Consumer__Wrapper<T> = Consumer<T> | Consumer<T>['accept'];

    interface Predicate<T> {
        readonly __java_util_function_Predicate: unique symbol;
        test(t: T): boolean;
        and(other: Predicate__Wrapper<T>): Predicate<T>;
        negate(): Predicate<T>;
        or(other: Predicate__Wrapper<T>): Predicate<T>;
    }

    const Predicate: {
        isEqual<T>(target: T): Predicate<T>;
        not<T>(target: Predicate__Wrapper<T>): Predicate<T>;
    };

    type Predicate__Wrapper<T> = Predicate<T> | Predicate<T>['test'];

    interface UnaryOperator<T> extends Function<T, T> {
        readonly __java_util_function_UnaryOperator: unique symbol;
    }

    type UnaryOperator__Wrapper<T> = UnaryOperator<T> | UnaryOperator<T>['apply'];
}
