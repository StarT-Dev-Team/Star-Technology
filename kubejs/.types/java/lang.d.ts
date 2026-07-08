declare namespace internal.java.lang {
    interface Enum<E> extends $object<'java.lang.Enum', Comparable<E>> {
        name: string;
        ordinal(): number;
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

    const Object: $class<Object> & {};

    import Method = reflect.Method;

    interface Class<T> extends $object<'java.lang.Class'> {
        isInstance(obj: Object): boolean;
        cast(obj: Object): T;
        getDeclaredMethods(): Method[];
        get declaredMethods(): Method[];
        getName(): string;
        get name(): string;
    }

    const Class: $class<Class<unknown>> & {};

    const Math: {
        E: number;
        PI: number;
        log(a: number): number;
        log10(a: number): number;
    };

    interface Comparable<T> extends $object<'java.lang.Comparable'> {
        compareTo(t: T): number;
    }

    import Iterator = util.Iterator;
    import Consumer = util.function_.Consumer;

    interface Iterable<E> extends $object<'java.lang.Iterable'> {
        iterator(): Iterator<E>;
        forEach(action: $wrapped<Consumer<E>>): void;

        [Symbol.iterator](): { next(): globalThis.IteratorResult<E, BuiltinIteratorReturn> };
    }

    interface Boolean extends $object<'java.lang.Boolean', Comparable<Boolean>> {}

    const Boolean: $class<Boolean> & {
        valueOf(s: boolean): Boolean;
    };

    interface Float extends $object<'java.lang.Float', Comparable<Float>> {}

    const Float: $class<Float> & {
        valueOf(s: string): Float;
        valueOf(f: number): Float;
    };

    interface Integer extends $object<'java.lang.Integer', Comparable<Integer>> {}

    const Integer: $class<Integer> & {
        valueOf(s: string): Integer;
        valueOf(f: number): Integer;
    };
}

declare namespace internal.java.lang.reflect {
    interface AnnotatedElement extends $object<'java.lang.reflect.AnnotatedElement'> {}

    interface AccessibleObject extends $object<'java.lang.reflect.AccessibleObject', AnnotatedElement> {
        setAccessible(flag: boolean): void;
    }

    interface Member extends $object<'java.lang.reflect.Member'> {}

    interface GenericDeclaration extends $object<'java.lang.reflect.GenericDeclaration', AnnotatedElement> {}

    interface Parameter extends $object<'java.lang.reflect.Parameter', AnnotatedElement> {
        getType(): Class<unknown>;
        get type(): Class<unknown>;
    }

    interface Executable extends $object<'java.lang.reflect.Executable', AccessibleObject, Member, GenericDeclaration> {
        getName(): string;
        get name(): string;
        getParameterCount(): number;
        get parameterCount(): number;
        getParameters(): Parameter[];
        get parameters(): Parameter[];
    }

    interface Method extends $object<'java.lang.reflect.Method', Executable> {
        getReturnType(): Class<unknown>;
        get returnType(): Class<unknown>;
        invoke(obj: any, ...args: any[]): any;
        invoke(obj: any, args: any[]): any;
    }
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'java.lang.Boolean': typeof internal.java.lang.Boolean;
        'java.lang.Float': typeof internal.java.lang.Float;
        'java.lang.Integer': typeof internal.java.lang.Integer;
    }
}
