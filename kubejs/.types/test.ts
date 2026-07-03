declare namespace $kjs {
    interface $classes {}
    interface $mixins {}
}

declare namespace internal {
    // const __kjsObject__: unique symbol;
    // const __kjsClass__: unique symbol;

    // type KJSOverload<T extends (...args: any[]) => any> = T;

    // type KJSObjectClass<TInstance, TMembers> = {
    //     [__kjsClass__]: {
    //         constructors: {};
    //         members: TMembers;
    //         instance: TInstance;
    //         parent: never;
    //     };
    // } & TMembers;

    // type KJSClass<
    //     TParent extends { [__kjsClass__]: any },
    //     TInstance,
    //     TConstructors extends never | (new (...args: any[]) => TInstance),
    //     TMembers,
    // > = {
    //     [__kjsClass__]: {
    //         constructors: [TConstructors] extends [never]
    //             ? TParent[typeof __kjsClass__]['constructors']
    //             : TConstructors;
    //         members: TParent[typeof __kjsClass__]['members'] & TMembers;
    //         instance: TInstance;
    //         parent: TParent;
    //     };
    // } & ([TConstructors] extends [never] ? TParent[typeof __kjsClass__]['constructors'] : TConstructors) &
    //     (TParent[typeof __kjsClass__]['members'] & TMembers);

    // type KJSObjectObject<TName extends string> = {
    //     [__kjsObject__]: {
    //         name: TName;
    //     };
    // };

    // type KJSObject<TParent, TName extends string> = Omit<TParent, typeof __kjsObject__> & {
    //     [__kjsObject__]: {
    //         name: TName;
    //     };
    // };

    // const __kjs__: unique symbol;

    // type MergeSignatures<TBase, TNew> = {
    //     [K in keyof (TBase & TNew)]: K extends keyof TNew
    //         ? K extends keyof TBase
    //             ? TNew[K] & TBase[K]
    //             : TNew[K]
    //         : K extends keyof TBase
    //           ? TBase[K]
    //           : never;
    // };

    // type MergeInterfaces<T extends any[]> = T extends [infer Head, ...infer Tail]
    //     ? MergeSignatures<Head, MergeInterfaces<Tail>>
    //     : {};

    // type ExcludeConstructors<T> = Pick<T, keyof T>;

    // type OnlyConstructors<T> = Omit<T, keyof T>;

    // type _class<TName extends keyof $kjs.$classes> = OnlyConstructors<
    //     $kjs.$classes[TName]['class']
    // > &
    //     MergeInterfaces<
    //         [ExcludeConstructors<$kjs.$classes[TParent]['class']>, ExcludeConstructors<$kjs.$classes[TName]['class']>]
    //     >;

    // type _object<TName extends keyof $kjs.$classes> = {
    //     [__kjs__]: TName;
    // } & Omit<$kjs.$classes[TName]['instance'], typeof __kjs__> &
    //     MergeInterfaces<[$kjs.$classes[TName], ...TInterfaces]>;

    // type GetClass<T> = T extends keyof $kjs.$classes ? $kjs.$classes[T] : never;

    // type ResolveAllTypes<T> = T extends keyof $kjs.$classes
    //     ?
    //           | T
    //           | (GetClass<T> extends { extends: infer E } ? ResolveAllTypes<E> : never)
    //           | (GetClass<T> extends { implements: infer I extends any[] } ? ResolveAllTypes<I[number]> : never)
    //           | FindMixinsFor<T>
    //     : never;

    // type FindMixinsFor<T> = {
    //     [M in keyof $kjs.$mixins]: $kjs.$mixins[M] extends { mixin: T; with: infer W } ? ResolveAllTypes<W> : never;
    // }[keyof $kjs.$mixins];

    // type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

    // type ExtractCombined<T, Key extends 'instance' | 'class'> = UnionToIntersection<
    //     ResolveAllTypes<T> extends infer UniqueTypes
    //         ? UniqueTypes extends any
    //             ? GetClass<UniqueTypes> extends Record<Key, infer Members>
    //                 ? Members
    //                 : {}
    //             : {}
    //         : {}
    // >;

    namespace impl {
        type GetClass<TClass> = TClass extends keyof $kjs.$classes ? $kjs.$classes[TClass] : never;

        type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

        type OverloadsToUnion<T extends (...args: any[]) => any> = T extends {
            (...args: infer P1): infer R1;
            (...args: infer P2): infer R2;
            (...args: infer P3): infer R3;
            (...args: infer P4): infer R4;
            (...args: infer P5): infer R5;
            (...args: infer P6): infer R6;
            (...args: infer P7): infer R7;
            (...args: infer P8): infer R8;
            (...args: infer P9): infer R9;
        }
            ? [P1, R1] | [P2, R2] | [P3, R3] | [P4, R4] | [P5, R5] | [P6, R6] | [P7, R7] | [P8, R8] | [P9, R9]
            : never;

        type ExtractConstructorOverloads<T> = T extends {
            new (...args: infer P1): infer R1;
            new (...args: infer P2): infer R2;
            new (...args: infer P3): infer R3;
            new (...args: infer P4): infer R4;
            new (...args: infer P5): infer R5;
            new (...args: infer P6): infer R6;
            new (...args: infer P7): infer R7;
            new (...args: infer P8): infer R8;
            new (...args: infer P9): infer R9;
        }
            ? [P1, R1] | [P2, R2] | [P3, R3] | [P4, R4] | [P5, R5] | [P6, R6] | [P7, R7] | [P8, R8] | [P9, R9]
            : never;

        type UnionToConstructorOverloads<U> = UnionToIntersection<
            U extends [infer P extends any[], infer R] ? { new (...args: P): R } : never
        >;

        type FindDistinctOverloads<TBase, TCheck> = TBase extends [infer TBaseArgs extends any[], any]
            ? [TBaseArgs] extends [TCheck extends [infer TCheckArgs extends any[], any] ? TCheckArgs : never]
                ? never
                : TBase
            : never;

        type OverrideSharedOverloads<TBase, TOverride> = TBase extends [infer TBaseArgs extends any[], any]
            ? [TBaseArgs] extends [TOverride extends [infer TOverrideArgs extends any[], any] ? TOverrideArgs : never]
                ? TOverride
                : never
            : never;

        type MergeOverloadsImpl<TBase, TOverride> =
            | FindDistinctOverloads<TBase, TOverride>
            | FindDistinctOverloads<TOverride, TBase>
            | OverrideSharedOverloads<TBase, TOverride>;

        type UnionToOverloads<U> = UnionToIntersection<
            U extends [infer P extends any[], infer R] ? { (...args: P): R } : never
        >;

        type MergeOverloads<
            TBase extends (...args: any[]) => any,
            TOverride extends (...args: any[]) => any,
        > = UnionToOverloads<MergeOverloadsImpl<OverloadsToUnion<TBase>, OverloadsToUnion<TOverride>>> & {};

        type MergeMember<TBase, TOverride> = TBase extends (...args: any[]) => any
            ? TOverride extends (...args: any[]) => any
                ? MergeOverloads<TBase, TOverride>
                : TOverride
            : TOverride;

        type Merge<TBase, TOverride> = {
            [K in keyof (TBase & TOverride)]: K extends keyof TBase
                ? K extends keyof TOverride
                    ? MergeMember<TBase[K], TOverride[K]>
                    : TBase[K]
                : K extends keyof TOverride
                  ? TOverride[K]
                  : never;
        } & {};

        type Type_instance<TDef> = TDef extends { instance: infer TInstance } ? TInstance : {};

        type Type_class<TDef> = TDef extends { class: infer TClass } ? TClass : {};

        type Type_extends<TDef> = TDef extends { extends: infer TExtends } ? GetClass<TExtends> : never;

        type Type_implements<TDef> = TDef extends { implements: infer TImplements extends string[] } ? TImplements : [];

        type Flatten<T extends readonly any[], A extends readonly any[] = []> = T extends [infer F, ...infer R]
            ? Flatten<R, F extends readonly any[] ? [...A, ...F] : [...A, F]>
            : A;

        type ResolveInheritanceChain<TTuple> = TTuple extends [...infer TRest extends any[], infer TLast]
            ? Merge<ResolveInheritanceChain<TRest>, TLast>
            : {};

        // objects

        type InstanceInterfaceChain<TDef> =
            Type_implements<TDef> extends infer T extends [...any[]]
                ? { [Index in keyof T]: InstanceInheritanceChainImpl<GetClass<T[Index]>> }
                : [];

        type InstanceInheritanceChainImpl<TDef> = [Type_extends<TDef>] extends [never]
            ? [InstanceInterfaceChain<TDef>, Type_instance<TDef>]
            : [InstanceInheritanceChainImpl<Type_extends<TDef>>, InstanceInterfaceChain<TDef>, Type_instance<TDef>];

        type InstanceInheritanceChain<TDef> = Flatten<InstanceInheritanceChainImpl<TDef>>;

        type DefineObject<TDef> = ResolveInheritanceChain<InstanceInheritanceChainImpl<TDef>>;

        // classes

        type ExcludeConstructors<T> = Pick<T, keyof T>;

        type ClassInterfaceChain<TDef> =
            Type_implements<TDef> extends infer T extends [...any[]]
                ? { [Index in keyof T]: ClassInheritanceChainImpl<GetClass<T[Index]>> }
                : [];

        type ClassInheritanceChainImpl<TDef> = [Type_extends<TDef>] extends [never]
            ? [ClassInterfaceChain<TDef>, ExcludeConstructors<Type_class<TDef>>]
            : [
                  ClassInheritanceChainImpl<Type_extends<TDef>>,
                  ClassInterfaceChain<TDef>,
                  ExcludeConstructors<Type_class<TDef>>,
              ];

        type ClassInheritanceChain<TDef> = Flatten<ClassInheritanceChainImpl<TDef>>;

        type ClassConstructors<TDef> = UnionToConstructorOverloads<ExtractConstructorOverloads<Type_class<TDef>>>;

        type DefineClass<TDef> = ResolveInheritanceChain<ClassInheritanceChain<TDef>> &
            ClassConstructors<TDef> & {
                __javaObject__: DefineClass<impl.GetClass<'java.lang.Class'>>;
            };
    }

    type _object<TClass extends keyof $kjs.$classes> = impl.DefineObject<impl.GetClass<TClass>>;

    type _class<TClass extends keyof $kjs.$classes> = impl.DefineClass<impl.GetClass<TClass>>;
}

declare namespace kjs.java.lang {
    type Object = internal._object<'java.lang.Object'>;
    const Object: internal._class<'java.lang.Object'>;
}

declare namespace $kjs {
    import Object = kjs.java.lang.Object;
    import Class = kjs.java.lang.Class;

    interface $classes {
        'java.lang.Object': {
            instance: {
                getClass(): Class<unknown>;
                hashCode(): number;
                equals(obj: Object): boolean;
                clone(): Object;
                toString(): string;
                notify(): void;
                notifyAll(): void;
                wait(): void;
                wait(timeoutMillis: number): void;
                wait(timeoutMillis: number, nanos: number): void;
                finalize(): void;
            };
            class: {};
        };
    }
}

declare namespace kjs.java.lang {
    type Class<T> = internal._object<'java.lang.Class'>;
    const Class: internal._class<'java.lang.Class'>;
}

declare namespace $kjs {
    import Class = kjs.java.lang.Class;
    import Object = kjs.java.lang.Object;

    interface $classes {
        'java.lang.Class': {
            instance: {
                isInstance(obj: Object): boolean;
            };
            class: {
                forName(className: string): Class<unknown>;
            };
            extends: 'java.lang.Object';
            implements: [];
        };
    }
}

declare namespace $kjs {
    import Block = kjs.net.minecraft.world.level.block.Block;
    import BlockState = kjs.net.minecraft.world.level.block.state.BlockState;
    import Item = kjs.net.minecraft.world.item.Item;

    interface $classes {
        'net.minecraft.world.level.block.state.BlockBehaviour': {
            instance: {
                getRenderPropertiesInternal(): number;
            };
        };

        'net.minecraft.world.level.block.Block': {
            instance: {
                getRenderPropertiesInternal(): string;
                // ...
            };
            class: {
                new (): Block;
                getId(state: BlockState | null): number;
                // ...
            };
            extends: 'net.minecraft.world.level.block.state.BlockBehaviour';
            implements: ['net.minecraft.world.level.ItemLike'];
        };

        'net.minecraft.world.level.ItemLike': {
            instance: {
                asItem(): Item;
            };
        };
    }
}

declare namespace $kjs {
    interface $mixins {
        'dev.latvian.mods.kubejs.core.mixin.common.BlockMixin': {
            mixin: 'net.minecraft.world.level.block.Block';
            with: 'dev.latvian.mods.kubejs.core.mixin.common.BlockMixin';
        };
    }

    interface $classes {
        'dev.latvian.mods.kubejs.core.mixin.common.BlockMixin': {
            extends: 'dev.latvian.mods.kubejs.core.mixin.common.BlockBehaviourMixin';
        };

        'dev.latvian.mods.kubejs.core.mixin.common.BlockBehaviourMixin': {
            instance: {};
            implements: ['dev.latvian.mods.kubejs.core.BlockKJS'];
        };

        'dev.latvian.mods.kubejs.core.BlockKJS': {
            instance: {
                getId(): string;
                get id(): string;
                getMod(): string;
                get mod(): string;
            };
        };
    }
}

declare namespace kjs.net.minecraft.world.level.block {
    type Block = internal._object<'net.minecraft.world.level.block.Block'>;
    const Block: internal._class<'net.minecraft.world.level.block.Block'>;
}

declare namespace kjs {
    type LoadClassImpl = { [K in keyof $kjs.$classes]: internal._class<K> };
}

type Test = internal.impl.GetClassName<internal.net.minecraft.network.chat.MutableComponent>;

const test1: internal.net.minecraft.network.chat.MutableComponent = null!;
const test2: internal.net.minecraft.network.chat.Component = test1;
const test3 = test1[internal.impl.__class];
const test4 = test2[internal.impl.__class];

type Lol1 = internal.ClassOf<internal.com.gregtechceu.gtceu.api.capability.recipe.IO>;
type Lol2 = internal.$wrapped<internal.com.gregtechceu.gtceu.api.capability.recipe.IO>;
