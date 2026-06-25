declare namespace internal.java.util {
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

declare namespace internal.java.util.function_ {
    const __Supplier: unique symbol;
    interface Supplier<T> {
        [__Supplier]: 0;
        get(): T;
    }

    type Supplier__Wrapper<T> = Supplier<T> | Supplier<T>['get'];

    const __Function: unique symbol;
    interface Function<T, R> {
        [__Function]: 0;
        apply(t: T): R;
    }

    type Function__Wrapper<T, R> = Function<T, R> | Function<T, R>['apply'];

    const __BiConsumer: unique symbol;
    interface BiConsumer<T, U> {
        [__BiConsumer]: 0;
        accept(t: T, u: U): void;
    }

    type BiConsumer__Wrapper<T, U> = BiConsumer<T, U> | BiConsumer<T, U>['accept'];

    const __Consumer: unique symbol;
    interface Consumer<T> {
        [__Consumer]: 0;
        accept(t: T): void;
        andThen(after: Consumer__Wrapper<T>): Consumer<T>;
    }

    type Consumer__Wrapper<T> = Consumer<T> | Consumer<T>['accept'];
}
