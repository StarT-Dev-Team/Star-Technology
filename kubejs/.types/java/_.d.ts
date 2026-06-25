type SupplierWrapper<T> = internal.java.util.function_.Supplier<T> | (() => T);

type FunctionWrapper<T, R> = internal.java.util.function_.Function<T, R> | ((t: T) => R);

type BiConsumerWrapper<T, U> = internal.java.util.function_.BiConsumer<T, U> | ((t: T, u: U) => void);
