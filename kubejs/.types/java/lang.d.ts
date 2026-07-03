declare namespace internal.java.lang {
    interface Enum extends $object<'java.lang.Enum'> {
        name: string;
        ordinal: number;
    }

    interface Object__overloads$wait {
        (): void;
        (timeoutMillis: number): void;
        (timeoutMillis: number, nanos: number): void;
    }

    interface Object extends impl.$javaObject {
        getClass(): Class<unknown>;
        hashCode(): number;
        equals(obj: Object): boolean;
        clone(): Object;
        toString(): string;
        notify(): void;
        notifyAll(): void;
        wait: Object__overloads$wait;
        finalize(): void;
    }

    const Object: $class<Object>;

    interface Class<T> extends $object<'java.lang.Class'> {}

    const Class: $class<Class<unknown>>;

    const Math: {
        E: number;
        PI: number;
        log(a: number): number;
        log10(a: number): number;
    };

    interface Comparable<T> extends $object<'java.lang.Comparable'> {
        compareTo(t: T): number;
    }
}
