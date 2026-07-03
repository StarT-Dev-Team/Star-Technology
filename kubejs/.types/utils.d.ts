type OverloadedParameters<T extends (...args: any[]) => any> = T extends {
    (...args: infer P1): any;
    (...args: infer P2): any;
    (...args: infer P3): any;
    (...args: infer P4): any;
    (...args: infer P5): any;
}
    ? P1 | P2 | P3 | P4 | P5
    : T extends {
            (...args: infer P1): any;
            (...args: infer P2): any;
            (...args: infer P3): any;
            (...args: infer P4): any;
        }
      ? P1 | P2 | P3 | P4
      : T extends { (...args: infer P1): any; (...args: infer P2): any; (...args: infer P3): any }
        ? P1 | P2 | P3
        : T extends { (...args: infer P1): any; (...args: infer P2): any }
          ? P1 | P2
          : T extends { (...args: infer P1): any }
            ? P1
            : never;

declare namespace internal {
    namespace impl {
        const __class: unique symbol;

        type $javaObject = { readonly [__class]: (meta: { name: 'java.lang.Object' }) => void };

        type TupleToIntersection<T extends any[]> = {
            [K in keyof T]: (x: T[K]) => void;
        } extends {
            [K: number]: (x: infer I) => void;
        }
            ? I
            : never;

        type BrandedClass = { readonly [__class]: (arg: any) => void };

        type IntersectionParams<T extends (t: any) => void> = T extends {
            (p: infer P1): void;
            (p: infer P2): void;
            (p: infer P3): void;
            (p: infer P4): void;
            (p: infer P5): void;
            (p: infer P6): void;
            (p: infer P7): void;
            (p: infer P8): void;
        }
            ? P1 | P2 | P3 | P4 | P5 | P6 | P7 | P8
            : never;

        type MetaOf<T> = T extends { readonly [impl.__class]: infer TNames }
            ? TNames extends (t: infer TMeta) => void
                ? TMeta
                : never
            : never;

        type ObjectMeta<
            TName extends string = string,
            TFunctionalInterface extends string = '',
            TRegistryEntry extends boolean = false,
            TEnumClass = null,
        > = {
            name: TName;
            functionalInterface?: TFunctionalInterface;
            registryEntry?: TRegistryEntry;
            enumClass?: TEnumClass;
        };

        type EnumKeysImpl<T extends $class<unknown>, U> = keyof {
            [K in keyof T as K extends string ? (T[K] extends U ? K : never) : never]: K;
        };

        type EnumKeys<T extends $class<unknown>> =
            T extends $class<infer U> ? EnumKeysImpl<T, U> | Lowercase<EnumKeysImpl<T, U>> : never;

        type Wrapped<T, TMeta> =
            | (TMeta extends { name: infer TName }
                  ? TName extends keyof internal.kjs.TypeWrappers
                      ? internal.kjs.TypeWrappers[TName]
                      : never
                  : never)
            | (TMeta extends { registryEntry: true }
                  ? string | net.minecraft.resources.ResourceLocation | net.minecraft.resources.ResourceKey<unknown>
                  : never)
            | (TMeta extends { functionalInterface: infer TMethod extends keyof T } ? T[TMethod] : never)
            | (TMeta extends { enumClass: infer TEnumClass extends $class<unknown> } ? EnumKeys<TEnumClass> : never);

        type ReverseWrapped<T, TMeta> = TMeta extends { name: infer TName }
            ? TName extends keyof internal.kjs.ReverseTypeWrappers
                ? internal.kjs.ReverseTypeWrappers[TName]
                : T
            : T;
    }

    type ClassOf<T> = impl.MetaOf<T> extends { name: infer TName } ? TName : never;

    type IsRegistryEntry<T> = impl.MetaOf<T> extends { registryEntry: true } ? true : false;

    type GetEnumClass<T> = impl.MetaOf<T> extends { enumClass: infer TClass } ? TClass : never;

    type EnumKeys<T extends $class<unknown>> = impl.EnumKeys<T>;

    type $object<
        TName extends string | impl.ObjectMeta<any, any, any, any>,
        T1 = java.lang.Object,
        T2 = {},
        T3 = {},
        T4 = {},
        T5 = {},
        T6 = {},
        T7 = {},
        T8 = {},
        T9 = {},
        T10 = {},
        T11 = {},
        T12 = {},
    > = T1 &
        T2 &
        T3 &
        T4 &
        T5 &
        T6 &
        T7 &
        T8 &
        T9 &
        T10 &
        T11 &
        T12 & {
            /** @internal */
            readonly [impl.__class]: (meta: TName extends string ? { name: TName } : TName) => void;
        };

    type $class<TObject> = {
        __javaObject__: globalThis.internal.java.lang.Class<TObject>;
        [Symbol.hasInstance](obj: any): obj is TObject;
    };

    type $wrapped<T extends impl.BrandedClass> = (T | impl.Wrapped<T, impl.MetaOf<T>>) & {};

    type $reverseWrapped<T extends impl.BrandedClass> = impl.ReverseWrapped<T, impl.MetaOf<T>>;

    type JsonArrayLike = JsonLike[];
    type JsonObjectLike = { [P in string]: JsonLike };
    type JsonLike = JsonArrayLike | JsonObjectLike | string | boolean | number;
}
