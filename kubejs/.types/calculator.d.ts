declare namespace Calculator {
    type ValueNumber = { t: 'number'; v: number };

    type ValueString = { t: 'string'; v: string };

    type ValueVec2 = { t: 'vec2'; v: [number, number] };

    type ValueVec3 = { t: 'vec3'; v: [number, number, number] };

    type Value = ValueNumber | ValueString | ValueVec2 | ValueVec3;

    type TypedFunction<TArgs extends readonly Value['t'][]> = {
        readonly arguments: TArgs;
    } & NoInfer<TypedFunctionImpl<TArgs>>;

    type TypedFunctionImpl<TArgs extends readonly Value['t'][]> = {
        readonly fn: (...args: { [K in keyof TArgs]: Extract<Value, { t: TArgs[K] }> }) => Value;
    };

    type Function = {
        readonly arguments?: readonly Value['t'][];
        readonly fn: (...args: Value[]) => Value;
    };

    import MutableComponent = internal.net.minecraft.network.chat.MutableComponent;

    type DocumentedFunction = {
        name: string;
        fullName?: string;
        usage: string | MutableComponent;
        description: string;
        implementation: Function | Function[];
    };

    type DocumentedOperator = {
        name: string;
        fullName?: string;
        usage: string | MutableComponent;
        description: string;
        implementation: Function | Function[];
    };

    type DocumentedConstant = {
        name: string;
        fullName?: string;
        usage: string | MutableComponent;
        description: string;
        value: Value;
    };

    type DocumentedSuffix = {
        names: string[];
        fullName?: string;
        usage: string | MutableComponent;
        description: string;
    };
}
