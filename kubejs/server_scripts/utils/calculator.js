const $GTUtil = Java.loadClass('com.gregtechceu.gtceu.utils.GTUtil');
const $GTRecipe = Java.loadClass('com.gregtechceu.gtceu.api.recipe.GTRecipe');
const $RecipeHelper = Java.loadClass('com.gregtechceu.gtceu.api.recipe.RecipeHelper');
const $KubeJSReloadListener = Java.loadClass('dev.latvian.mods.kubejs.server.KubeJSReloadListener');
const GTV = GTValues.VEX;

PlayerEvents.chat((event) => {
    /** @type {string} */
    let message = ('' + event.message).trim();

    if (message.startsWith('=')) {
        message = ('' + message).replace(/^=\s*/, '');

        if (message === 'help' || message.startsWith('help ')) {
            let helpSubject = ('' + message).replace(/^help\s*/, '');
            event.player.tell(calculatorShowDocumentation(helpSubject));
            event.cancel();
            return;
        }

        try {
            /** @type {Token[]} */
            let tokens = calculatorLex(message);
            /** @type {NodeExpr} */
            let ast = calculatorParse(tokens);
            /** @type {Calculator.Value} */
            let resultValue = calculatorExec(ast);
            /** @type {string} */
            let result = '';

            if (resultValue.t === 'number') {
                result = numberToString(resultValue.v);
            } else if (resultValue.t === 'vec2') {
                result = 'vec2(' + resultValue.v.map((v) => numberToString(v)).join(', ') + ')';
            } else if (resultValue.t === 'vec3') {
                result = 'vec3(' + resultValue.v.map((v) => numberToString(v)).join(', ') + ')';
            } else {
                result = resultValue.v;
            }

            event.player.tell(
                Text.join([Text.aqua(message), Text.of(' = '), Text.green(result), Text.gray(' [Click to Copy]')])
                    .clickCopy(result)
                    .hover(Text.of('Click to copy'))
            );
        } catch (e) {
            /** @type {string} */
            let error = /** @type {any} */ (e).message || /** @type {any} */ (e).toString();
            event.player.tell(
                Text.join([Text.red('Error evaluating '), Text.aqua(message), Text.red(': '), Text.gray(error)])
            );
        }
        event.cancel();
    }
});

/** @param {number} num */
let numberToString = (num) => {
    let ret = num
        .toFixed(5)
        .replace(
            // eslint-disable-next-line no-useless-escape
            /e([\-+])?(\d+)$/,
            /**
             * @param {string} sign
             * @param {string} digits
             */
            (_, sign, digits) => {
                sign = sign === '-' ? '⁻' : '';
                digits = digits
                    .split('')
                    .map((c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c])
                    .join('');
                return ` × 10${sign}${digits}`;
            }
        )
        .replace(/\.?0+$/, '');
    if (ret === '-0') return '0';
    return ret;
};

let calculatorShowDocumentation = (() => {
    /**
     * @template T
     * @template U
     * @param {T[]} arr
     * @param {(value: T, index: number, array: T[]) => U | ReadonlyArray<U>} fn
     * @returns {U[]}
     */
    let flatMap = function (arr, fn) {
        return Array.prototype.concat.apply([], arr.map(fn));
    };

    let showMainHelp = () => {
        let result = [];

        /**
         * @param {internal.net.minecraft.network.chat.Component} text
         * @param {string} searchName
         */
        let asCommand = (text, searchName) => {
            return text.clickSuggestCommand('=help ' + searchName).hover(Text.of('=help ' + searchName));
        };

        let uniqueOperators = calculatorDefinitions.operators
            .map((f) => f.name.replace(/^(binOp|unOp|vec2|vec3|number|string)/, ''))
            .filter((name, index, arr) => arr.indexOf(name) === index);

        let allSuffixes = flatMap(calculatorDefinitions.suffixes, (s) => s.names);

        result.push(Text.of('Operators:\n'));
        result = result.concat(
            flatMap(uniqueOperators, (searchName, i) => {
                let label = asCommand(Text.green(searchName), searchName);
                return i === 0 ? [label] : [Text.of(', '), label];
            })
        );

        result.push(Text.of('\nFunctions:\n'));
        result = result.concat(
            flatMap(calculatorDefinitions.functions, (f, i) => {
                let label = asCommand(Text.green(f.name), f.name);
                return i === 0 ? [label] : [Text.of(', '), label];
            })
        );

        result.push(Text.of('\nNumber suffixes:\n'));
        result = result.concat(
            flatMap(allSuffixes, (s, i) => {
                let label = asCommand(Text.green(s), '_' + s);
                return i === 0 ? [label] : [Text.of(', '), label];
            })
        );

        return Text.join(result);
    };

    /**
     * @param {string} subject
     */
    let gatherMatchingDefinitions = (subject) => {
        /** @param {Calculator.DocumentedOperator} x */
        let filterEnds = (x) => x.name.endsWith(subject);

        /** @param {Calculator.DocumentedFunction | Calculator.DocumentedConstant} x */
        let filterEq = (x) => x.name === subject;

        let filterSuffix = subject.startsWith('_')
            ? (() => {
                  let subject1 = subject.substring(1);
                  /** @param {Calculator.DocumentedSuffix} x */
                  return (x) => x.names.includes(subject1);
              })()
            : /** @param {Calculator.DocumentedSuffix} x */
              (x) => x.names.includes(subject);

        /** @typedef {(Calculator.DocumentedFunction | Calculator.DocumentedOperator | Calculator.DocumentedConstant | Calculator.DocumentedSuffix) & { name: string }} FunctionWithName */

        /**
         * @param {string} kind
         */
        let mapName =
            (kind) =>
            /**
             * @param {Calculator.DocumentedFunction | Calculator.DocumentedOperator | Calculator.DocumentedConstant | Calculator.DocumentedSuffix} t
             * @returns {FunctionWithName}
             */ (t) =>
                Object.assign({}, t, {
                    name: `${t.fullName || ('name' in t ? t.name : t.names)} (${kind})`,
                });

        return /** @type {FunctionWithName[]} */ ([]).concat(
            calculatorDefinitions.operators.filter(filterEnds).map(mapName('operator')),
            calculatorDefinitions.functions.filter(filterEq).map(mapName('function')),
            calculatorDefinitions.constants.filter(filterEq).map(mapName('constant')),
            calculatorDefinitions.suffixes.filter(filterSuffix).map(mapName('number suffix'))
        );
    };

    /**
     * @param {string} subject
     */
    return (subject) => {
        if (!subject) {
            return showMainHelp();
        }

        let helpTargets = gatherMatchingDefinitions(subject);

        if (helpTargets.length === 0) {
            return Text.red('Help not found for ' + subject);
        }

        return flatMap(helpTargets, (helpTarget, i) => {
            let ret = [
                Text.green(helpTarget.name),
                Text.aqua('\nUsage:\n'),
                Text.of(helpTarget.usage),
                Text.aqua('\nDescription:\n'),
                Text.of(helpTarget.description),
            ];
            return i === 0 ? ret : [Text.of('\n'), ret];
        });
    };
})();

/** @type {{ functions: Calculator.DocumentedFunction[], operators: Calculator.DocumentedOperator[], constants: Calculator.DocumentedConstant[], suffixes: Calculator.DocumentedSuffix[] }} */
let calculatorDefinitions = (() => {
    /** @type { <T, U, Ts extends T[]>(arr: Ts, fn: (t: T, index: number) => U) => { [K in keyof Ts]: U } } */
    let tupleMap = (arr, fn) => /** @type {any} */ (arr.map(fn));

    /**  @type { <const TArgs extends readonly Calculator.Value['t'][]>(fn: Calculator.TypedFunction<TArgs>) => Calculator.Function } */
    let typedFn = /** @param {any} fn */ (fn) => fn;

    /**  @type { <const TArgs extends readonly Calculator.Value['t'][]>(fn: Calculator.TypedFunctionImpl<TArgs>) => Calculator.Function } */
    let typedGenericFn = /** @param {any} fn */ (fn) => fn;

    /**
     * @template {Calculator.Value} T
     * @template {Calculator.Value["t"]} U
     * @param {T[]} args
     * @param {U} type
     * @returns {args is Extract<Calculator.Value, { t: U }>[]}
     */
    let argsOfType = (args, type) => {
        return args.every((arg) => arg.t === type);
    };

    /**
     * @template {Calculator.Value} T
     * @template {Calculator.Value["t"]} U
     * @param {T} arg
     * @param {U} type
     * @returns {arg is Extract<Calculator.Value, { t: U }>}
     */
    let argOfType = (arg, type) => {
        return arg.t === type;
    };

    /** @type {(fn: (value: number) => number) => Calculator.Function[]} */
    let componentsOverloads = (fn) => {
        return [
            typedFn({ arguments: ['number'], fn: (v) => ({ t: 'number', v: fn(v.v) }) }),
            typedFn({ arguments: ['vec2'], fn: (v) => ({ t: 'vec2', v: tupleMap(v.v, fn) }) }),
            typedFn({ arguments: ['vec3'], fn: (v) => ({ t: 'vec3', v: tupleMap(v.v, fn) }) }),
        ];
    };
    /** @type {(fn: (a: number, b: number) => number) => Calculator.Function[]} */
    let componentsOverloads2 = (fn) => {
        return [
            typedFn({
                arguments: ['number', 'number'],
                fn: (a, b) => ({ t: 'number', v: fn(a.v, b.v) }),
            }),
            typedFn({
                arguments: ['vec2', 'vec2'],
                fn: (a, b) => ({ t: 'vec2', v: tupleMap(a.v, (ax, i) => fn(ax, b.v[i])) }),
            }),
            typedFn({
                arguments: ['vec3', 'vec3'],
                fn: (a, b) => ({ t: 'vec3', v: tupleMap(a.v, (ax, i) => fn(ax, b.v[i])) }),
            }),
        ];
    };
    /**
     * Validate first!
     * @param {Calculator.ValueVec2 | Calculator.ValueVec3} value
     * @param {string} identifier
     * @returns {Calculator.ValueNumber | Calculator.ValueVec2 | Calculator.ValueVec3}
     */
    function vecAccessors(value, identifier) {
        let v = Array.from(identifier).map((accessor) => {
            switch (accessor) {
                case 'x':
                    return value.v[0];
                case 'y':
                    return value.v[1];
                case 'z':
                    return value.v[2];
            }
        });
        return /** @type {any} */ ({
            t: ['', 'number', 'vec2', 'vec3'][identifier.length],
            v: v.length === 1 ? v[0] : v,
        });
    }

    /**
     * @param {string} fnName
     * @param {`${string}:${string}`[][]} overloads
     */
    function formatOverloads(fnName, overloads) {
        /**
         * @template T
         * @template U
         * @param {T[]} arr
         * @param {(value: T, index: number, array: T[]) => U | ReadonlyArray<U>} fn
         * @returns {U[]}
         */
        let flatMap = function (arr, fn) {
            return Array.prototype.concat.apply([], arr.map(fn));
        };

        return Text.join(
            flatMap(overloads, (overload, i) => {
                let label = [Text.gray(fnName), Text.of('(')].concat(
                    flatMap(overload, (argRaw, j) => {
                        let arg = ('' + argRaw).split(':');
                        let label = [Text.lightPurple(arg[0]), Text.gray(': '), Text.gray(arg[1])];
                        if (arg[0].startsWith('...')) {
                            label[0] = Text.lightPurple(arg[0].substring(3));
                            label = [Text.gray('...')].concat(label);
                        }
                        return j === 0 ? label : [Text.of(', ')].concat(label);
                    }),
                    [Text.of(')')]
                );
                return i === 0 ? label : [Text.of(', ')].concat(label);
            })
        );
    }

    /**
     * @param {number} su
     * @param {number} magnetForce
     * @param {number} rpm
     */
    function createCoilsOptimizer(su, magnetForce, rpm) {
        let coilCost = rpm * (24 + 12 * magnetForce);

        let fullCoils = Math.floor(su / coilCost);
        let partialMagnets = 0;

        let remainingSu = su - fullCoils * coilCost;
        if (remainingSu > rpm * 24) {
            // can fit another coil
            partialMagnets = (remainingSu - rpm * 24) / (rpm * magnetForce);
        }

        let totalCoils = fullCoils + (partialMagnets > 0 ? 1 : 0);
        let totalMagnets = fullCoils * 12 + partialMagnets;
        let totalBrushes = Math.ceil(totalCoils / 8);

        console.log(`partialMagnets: ${partialMagnets}`);

        let totalFE = (rpm * (fullCoils * 12 * magnetForce + partialMagnets * magnetForce)) / 20;

        let tierIndex = $GTUtil.getFloorTierByVoltage(totalFE / 4);
        let perc = totalFE / 4 / GTV[tierIndex];
        let gtAmps = numberToString(perc) + 'A of ' + GTValues.VNF[tierIndex] + '§r';

        return `Generates §6${totalFE} FE/t§r (${gtAmps}), using §6${totalBrushes}§r brushes, §6${totalCoils}§r coils, and §6${totalMagnets}§r magnet blocks`;
    }

    /**
     * @param {number} coils
     * @param {number} magnets
     * @param {number} magnetForce
     * @param {number} rpm
     * @returns {[number, number]}
     */
    function createCoils(coils, magnets, magnetForce, rpm) {
        let tmf = magnets * magnetForce;
        let su = rpm * (tmf + coils * 24);
        let fe = (rpm * tmf) / 20;
        return [fe, su];
    }

    return {
        functions: [
            {
                name: 'vec2',
                usage: formatOverloads('vec2', [[], ['x:number', 'y:number'], ['xy:number']]),
                description:
                    'constructs a bidimensional vector; you can access the components with .x and .y, or you can §oswizzle§r them to create new vectors (like .xyx)',
                implementation: [
                    typedFn({
                        arguments: [],
                        fn: () => ({ t: 'vec2', v: [0, 0] }),
                    }),
                    typedFn({
                        arguments: ['number'],
                        fn: (x) => ({ t: 'vec2', v: [x.v, x.v] }),
                    }),
                    typedFn({
                        arguments: ['number', 'number'],
                        fn: (x, y) => ({ t: 'vec2', v: [x.v, y.v] }),
                    }),
                ],
            },
            {
                name: 'vec3',
                usage: formatOverloads('vec3', [
                    [],
                    ['x:number', 'y:number', 'z:number'],
                    ['xyz:number'],
                    ['xy:vec2', 'z:number'],
                ]),
                description:
                    'constructs a tridimensional vector; you can access the components with .x, .y and .z, or you can §oswizzle§r them to create new vectors (like .zy)',
                implementation: [
                    typedFn({
                        arguments: [],
                        fn: () => ({ t: 'vec3', v: [0, 0, 0] }),
                    }),
                    typedFn({
                        arguments: ['number'],
                        fn: (x) => ({ t: 'vec3', v: [x.v, x.v, x.v] }),
                    }),
                    typedFn({
                        arguments: ['vec2', 'number'],
                        fn: (xy, z) => ({ t: 'vec3', v: [xy.v[0], xy.v[1], z.v] }),
                    }),
                    typedFn({
                        arguments: ['number', 'number', 'number'],
                        fn: (x, y, z) => ({ t: 'vec3', v: [x.v, y.v, z.v] }),
                    }),
                ],
            },
            {
                name: 'dot',
                usage: formatOverloads('dot', [
                    ['a:vec2', 'b:vec2'],
                    ['a:vec3', 'b:vec3'],
                ]),
                description: 'returns the dot product',
                implementation: [
                    typedFn({
                        arguments: ['vec2', 'vec2'],
                        fn: (a, b) => ({
                            t: 'number',
                            v: a.v[0] * b.v[0] + a.v[1] * b.v[1],
                        }),
                    }),
                    typedFn({
                        arguments: ['vec3', 'vec3'],
                        fn: (a, b) => ({
                            t: 'number',
                            v: a.v[0] * b.v[0] + a.v[1] * b.v[1] + a.v[2] * b.v[2],
                        }),
                    }),
                ],
            },
            {
                name: 'sqrt',
                usage: formatOverloads('sqrt', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the square root of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.sqrt),
            },
            {
                name: 'abs',
                usage: formatOverloads('abs', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the absolute value of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.abs),
            },
            {
                name: 'floor',
                usage: formatOverloads('floor', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the largest integer less than or equal to the argument; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.floor),
            },
            {
                name: 'ceil',
                usage: formatOverloads('ceil', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the smallest integer less than or equal to the argument; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.ceil),
            },
            {
                name: 'sin',
                usage: formatOverloads('sin', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the sine of the input in radians; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.sin),
            },
            {
                name: 'cos',
                usage: formatOverloads('cos', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the cosine of the input in radians; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.cos),
            },
            {
                name: 'tan',
                usage: formatOverloads('tan', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the tangent of the input in radians; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.tan),
            },
            {
                name: 'acos',
                usage: formatOverloads('acos', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the inverse cosine (in radians) of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.acos),
            },
            {
                name: 'asin',
                usage: formatOverloads('asin', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the inverse sine (in radians) of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.asin),
            },
            {
                name: 'atan',
                usage: formatOverloads('atan', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the inverse tangent (in radians) of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.atan),
            },
            {
                name: 'atan2',
                usage: 'atan2(xy§7: vec2§r), atan2(y§7: number§r, x§7: number§r)',
                description:
                    'returns the angle in the plane (in radians) between the positive x-axis and the ray from (0, 0) and the point (x, y)',
                implementation: [
                    typedFn({
                        arguments: ['vec2'],
                        fn: (v) => ({ t: 'number', v: Math.atan2(v.v[1], v.v[0]) }),
                    }),
                    typedFn({
                        arguments: ['number', 'number'],
                        fn: (y, x) => ({ t: 'number', v: Math.atan2(y.v, x.v) }),
                    }),
                ],
            },
            {
                name: 'sinh',
                usage: formatOverloads('sinh', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the hyperbolic sine of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.sinh),
            },
            {
                name: 'cosh',
                usage: formatOverloads('cosh', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the hyperbolic cosine of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.cosh),
            },
            {
                name: 'tanh',
                usage: formatOverloads('tanh', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the hyperbolic tangent of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.tanh),
            },
            {
                name: 'acosh',
                usage: formatOverloads('acosh', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the inverse hyperbolic cosine of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.acosh),
            },
            {
                name: 'asinh',
                usage: formatOverloads('asinh', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the inverse hyperbolic sine of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.asinh),
            },
            {
                name: 'atanh',
                usage: formatOverloads('atanh', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the inverse hyperbolic tangent of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(Math.atanh),
            },
            {
                name: 'ln',
                usage: formatOverloads('ln', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the natural logarithm (base e) of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(JavaMath.log),
            },
            {
                name: 'log',
                usage: formatOverloads('log', [
                    ['base:number', 'value:number'],
                    ['base:number', 'value:vec2'],
                    ['base:number', 'value:vec3'],
                ]),
                description:
                    "returns the logarithm in the specified base of the input; if the input is a vector, it's applied to all the components",
                implementation: [
                    typedFn({
                        arguments: ['number', 'number'],
                        fn: (base, v) => ({
                            t: 'number',
                            v: JavaMath.log(v.v) / JavaMath.log(base.v),
                        }),
                    }),
                    typedFn({
                        arguments: ['number', 'vec2'],
                        fn: (base, v) => ({
                            t: 'vec2',
                            v: tupleMap(v.v, (v) => JavaMath.log(v) / JavaMath.log(base.v)),
                        }),
                    }),
                    typedFn({
                        arguments: ['number', 'vec3'],
                        fn: (base, v) => ({
                            t: 'vec3',
                            v: tupleMap(v.v, (v) => JavaMath.log(v) / JavaMath.log(base.v)),
                        }),
                    }),
                ],
            },
            {
                name: 'log2',
                usage: formatOverloads('log2', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the logarithm in base 2 of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads((v) => JavaMath.log(v) / JavaMath.log(2)),
            },
            {
                name: 'log10',
                usage: formatOverloads('log10', [['value:number'], ['value:vec2'], ['value:vec3']]),
                description:
                    "returns the logarithm in base 10 of the input; if the input is a vector, it's applied to all the components",
                implementation: componentsOverloads(JavaMath.log10),
            },
            {
                name: 'min',
                usage: formatOverloads('min', [['...values:number[]']]),
                description: 'returns the smallest of the numbers given as input',
                implementation: {
                    fn: function () {
                        /** @type {Calculator.Value[]} */
                        let args = Array.from(arguments);
                        if (args.length === 0) {
                            throw new Error('wrong argument count for min: expected 1 or more, got 0');
                        }
                        if (!argsOfType(args, 'number')) {
                            throw new Error('wrong argument types for min: expected all numbers');
                        }
                        return {
                            t: 'number',
                            v: Math.min.apply(
                                null,
                                args.map((arg) => arg.v)
                            ),
                        };
                    },
                },
            },
            {
                name: 'max',
                usage: formatOverloads('max', [['...values:number[]']]),
                description: 'returns the largest of the numbers given as input',
                implementation: {
                    fn: function () {
                        /** @type {Calculator.Value[]} */
                        let args = Array.from(arguments);
                        if (args.length === 0) {
                            throw new Error('wrong argument count for max: expected 1 or more, got 0');
                        }
                        if (!argsOfType(args, 'number')) {
                            throw new Error('wrong argument types for max: expected all numbers');
                        }
                        return {
                            t: 'number',
                            v: Math.max.apply(
                                null,
                                args.map((arg) => arg.v)
                            ),
                        };
                    },
                },
            },
            {
                name: 'dist',
                usage: formatOverloads('dist', [
                    ['point1:vec2', 'point2:vec2'],
                    ['point1:vec3', 'point2:vec3'],
                ]),
                description: 'returns the distance between 2 points',
                implementation: [
                    typedFn({
                        arguments: ['vec2', 'vec2'],
                        fn: (point1, point2) => ({
                            t: 'number',
                            v: Math.sqrt(
                                Math.pow(point1.v[0] - point2.v[0], 2) + Math.pow(point1.v[1] - point2.v[1], 2)
                            ),
                        }),
                    }),
                    typedFn({
                        arguments: ['vec3', 'vec3'],
                        fn: (point1, point2) => ({
                            t: 'number',
                            v: Math.sqrt(
                                Math.pow(point1.v[0] - point2.v[0], 2) +
                                    Math.pow(point1.v[1] - point2.v[1], 2) +
                                    Math.pow(point1.v[2] - point2.v[2], 2)
                            ),
                        }),
                    }),
                ],
            },
            {
                name: 'oc',
                usage: formatOverloads('oc', [['duration:number', 'overclocks:number']]),
                description: 'returns the duration after the specified steps of normal overclock',
                implementation: typedFn({
                    arguments: ['number', 'number'],
                    fn: (duration, steps) => {
                        if (steps.v <= 0)
                            throw new Error("wrong argument 'steps' for function oc: must be greater than 0");
                        return {
                            t: 'number',
                            v: Math.max(Math.floor(duration.v / (2 << (steps.v - 1))), 1),
                        };
                    },
                }),
            },
            {
                name: 'poc',
                usage: formatOverloads('poc', [['duration:number', 'overclocks:number']]),
                description: 'returns the duration after the specified steps of perfect overclock',
                implementation: typedFn({
                    arguments: ['number', 'number'],
                    fn: (duration, steps) => {
                        if (steps.v <= 0)
                            throw new Error("wrong argument 'steps' for function poc: must be greater than 0");
                        return {
                            t: 'number',
                            v: Math.max(Math.floor(duration.v / (4 << (steps.v - 1))), 1),
                        };
                    },
                }),
            },
            {
                name: 'toSeconds',
                usage: formatOverloads('toSeconds', [['ticks:number']]),
                description: 'converts the input ticks to seconds (1 second = 20 ticks)',
                implementation: typedFn({
                    arguments: ['number'],
                    fn: (duration) => ({ t: 'number', v: duration.v / 20 }),
                }),
            },
            {
                name: 'formatTier',
                usage: formatOverloads('formatTier', [['tier:number']]),
                description: 'returns the formatted version of the specified tier index',
                implementation: typedFn({
                    arguments: ['number'],
                    fn: (tier) => {
                        if (!(0 <= tier.v && tier.v < GTValues.VNF.length)) throw new Error('invalid tier');
                        return { t: 'string', v: GTValues.VNF[tier.v] + '§r' };
                    },
                }),
            },
            {
                name: 'formatEUt',
                usage: formatOverloads('formatEUt', [['EUt:number']]),
                description:
                    'returns the formatted version of the specified EU/t value, as a percentage of amps for the voltage tier above (useful for recipes)',
                implementation: typedFn({
                    arguments: ['number'],
                    fn: (eut) => {
                        let tierIndex = $GTUtil.getFloorTierByVoltage(eut.v) + 1;
                        let perc = eut.v / GTV[tierIndex];
                        return {
                            t: 'string',
                            v: numberToString(perc) + 'A of ' + GTValues.VNF[tierIndex] + '§r',
                        };
                    },
                }),
            },
            {
                name: 'formatAmps',
                usage: formatOverloads('formatAmps', [['EUt:number']]),
                description:
                    'returns the formatted version of the specified EU/t value, as a multiple of amps for the voltage tier below (useful for generators)',
                implementation: typedFn({
                    arguments: ['number'],
                    fn: (eut) => {
                        let tierIndex = $GTUtil.getFloorTierByVoltage(eut.v);
                        let perc = eut.v / GTV[tierIndex];
                        return {
                            t: 'string',
                            v: numberToString(perc) + 'A of ' + GTValues.VNF[tierIndex] + '§r',
                        };
                    },
                }),
            },
            {
                name: 'voltage',
                usage: formatOverloads('voltage', [['tier:number']]),
                description: 'returns the EU/t of 1 amp of the specified tier index',
                implementation: typedFn({
                    arguments: ['number'],
                    fn: (tier) => {
                        if (!(0 <= tier.v && tier.v < GTV.length)) throw new Error('invalid tier');
                        return { t: 'number', v: GTV[tier.v] };
                    },
                }),
            },
            {
                name: 'V',
                usage: formatOverloads('V', [['EUt:number']]),
                description:
                    'returns the index of the voltage tier required to run a recipe with that EU/t requirement',
                implementation: typedFn({
                    arguments: ['number'],
                    fn: (eut) => {
                        return { t: 'number', v: $GTUtil.getFloorTierByVoltage(eut.v) + 1 };
                    },
                }),
            },
            {
                name: 'parallels',
                usage: formatOverloads('parallels', [
                    ['EUt:number', 'ocTier:number'],
                    ['recipe:vec2', 'ocTier:number'],
                ]),
                description:
                    "returns the maximum number of parallels for a recipe with the specified EU/t cost and overclocked to the specified voltage tier; if the first input parameter is a vec2 then it's considerered a (EU/t, duration) pair and the paralleled duration is also calculated",
                implementation: [
                    typedFn({
                        arguments: ['number', 'number'],
                        fn: (eut, ocTier) => {
                            let recipeTier = $GTUtil.getFloorTierByVoltage(eut.v) + 1;
                            let numOfOc = ocTier.v - recipeTier;
                            if (numOfOc <= 0)
                                throw new Error("wrong arguments for function 'parallels': ocTier 2 smol");

                            let cap = Math.floor((GTV[recipeTier] / eut.v) * Math.pow(4, numOfOc));
                            return { t: 'number', v: cap };
                        },
                    }),
                    typedFn({
                        arguments: ['vec2', 'number'],
                        fn: (recipeInfo, ocTier) => {
                            let recipeTier = $GTUtil.getFloorTierByVoltage(recipeInfo.v[0]) + 1;
                            let numOfOc = ocTier.v - recipeTier;
                            if (numOfOc <= 0)
                                throw new Error("wrong arguments for function 'parallels': ocTier 2 smol");

                            let cap = Math.floor((GTV[recipeTier] / recipeInfo.v[0]) * Math.pow(4, numOfOc));
                            let ocDuration = Math.max(Math.floor(recipeInfo.v[1] / (2 << (numOfOc - 1))), 1);
                            let duration = ocDuration * Math.pow(2, numOfOc);
                            return { t: 'vec2', v: [cap, duration] };
                        },
                    }),
                ],
            },
            {
                name: 'recipe',
                usage: formatOverloads('recipe', [['id:string']]),
                description:
                    'returns the EU/t and duration of the recipe with the specified id as a vec2(EU/t, duration)',
                implementation: typedFn({
                    arguments: ['string'],
                    fn: (recipeId) => {
                        let recipeManager = $KubeJSReloadListener.resources.getRecipeManager();
                        let recipeOptional = recipeManager.byKey(recipeId.v);
                        if (!recipeOptional.isPresent())
                            throw new Error("wrong arguments for function 'recipe': no recipe found");
                        let recipe = recipeOptional.get();
                        if (!(recipe instanceof $GTRecipe))
                            throw new Error("wrong arguments for function 'recipe': not a GTRecipe");
                        return {
                            t: 'vec2',
                            v: [$RecipeHelper.getRealEUt(recipe), recipe.duration],
                        };
                    },
                }),
            },
            {
                name: 'createCoils',
                usage: formatOverloads('createCoils', [
                    ['coils:number', 'blocks:number'],
                    ['coils:number', 'blocks:number', 'magnetForce:number'],
                    ['coils:number', 'blocks:number', 'magnetForce:number', 'rpm:number'],
                ]),
                description:
                    'returns the FE generation and stress units consumed of the specified configuration of Create: New Age coils, as a vec2(FE/tick, SU). By default it considers the magnet to be Fluxuated Magnetite (magnetForce = 8) and RPM to be 256',
                implementation: [
                    typedFn({
                        arguments: ['number', 'number'],
                        fn: (coils, magnets) => ({ t: 'vec2', v: createCoils(coils.v, magnets.v, 8, 256) }),
                    }),
                    typedFn({
                        arguments: ['number', 'number', 'number'],
                        fn: (coils, magnets, magnetForce) => ({
                            t: 'vec2',
                            v: createCoils(coils.v, magnets.v, magnetForce.v, 256),
                        }),
                    }),
                    typedFn({
                        arguments: ['number', 'number', 'number', 'number'],
                        fn: (coils, magnets, magnetForce, rpm) => ({
                            t: 'vec2',
                            v: createCoils(coils.v, magnets.v, magnetForce.v, rpm.v),
                        }),
                    }),
                ],
            },
            {
                name: 'createCoilsOptimizer',
                usage: formatOverloads('createCoilsOptimizer', [['SU:number'], ['SU:number', 'magnetForce:number']]),
                description:
                    'returns the optimal setup for Create: New Age coils given the available stress units. By default it considers the magnet to be Fluxuated Magnetite (magnetForce = 8)',
                implementation: [
                    typedFn({
                        arguments: ['number'],
                        fn: (su) => ({
                            t: 'string',
                            v: createCoilsOptimizer(su.v, 8, 256),
                        }),
                    }),
                    typedFn({
                        arguments: ['number', 'number'],
                        fn: (su, magnetForce) => ({
                            t: 'string',
                            v: createCoilsOptimizer(su.v, magnetForce.v, 256),
                        }),
                    }),
                ],
            },
        ],
        operators: [
            {
                name: 'unOp+',
                fullName: 'Unary plus',
                usage: '+§7number§r, +§7vec2§r, +§7vec3§r',
                description: 'does nothing to number or vectors',
                implementation: componentsOverloads((v) => +v),
            },
            {
                name: 'unOp-',
                fullName: 'Negation',
                usage: '-§7number§r, -§7vec2§r, -§7vec3§r',
                description: 'negates the value; if used with vectors then each component is negated individually',
                implementation: componentsOverloads((v) => -v),
            },
            {
                name: 'binOp+',
                fullName: 'Addition',
                usage: '§7number§r + §7number§r, §7vec2§r + §7vec2§r, §7vec3§r + §7vec3§r',
                description: 'adds two values together; if used with vectors then each component is added individually',
                implementation: componentsOverloads2((a, b) => a + b),
            },
            {
                name: 'binOp-',
                fullName: 'Subtraction',
                usage: '§7number§r - §7number§r, §7vec2§r - §7vec2§r, §7vec3§r - §7vec3§r',
                description:
                    'subtracts the first value from the second value; if used with vectors then each component is subtracted individually',
                implementation: componentsOverloads2((a, b) => a - b),
            },
            {
                name: 'binOp*',
                fullName: 'Multiplication',
                usage: '§7number§r * §7number§r, §7vec2§r * §7vec2§r, §7vec3§r * §7vec3§r, §7number§r * §7vec2§r, §7vec2§r * §7number§r, §7number§r * §7vec3§r, §7vec3§r * §7number§r',
                description:
                    'multiplies the two values together; if both the values are vectors, then each component is multiplied individually; if one value is a number and other is a vector, the number is multiplied to each component of the vector',
                implementation: componentsOverloads2((a, b) => a * b).concat(
                    typedFn({
                        arguments: ['number', 'vec2'],
                        fn: (a, b) => ({ t: 'vec2', v: [a.v * b.v[0], a.v * b.v[1]] }),
                    }),
                    typedFn({
                        arguments: ['vec2', 'number'],
                        fn: (a, b) => ({ t: 'vec2', v: [a.v[0] * b.v, a.v[1] * b.v] }),
                    }),
                    typedFn({
                        arguments: ['number', 'vec3'],
                        fn: (a, b) => ({
                            t: 'vec3',
                            v: [a.v * b.v[0], a.v * b.v[1], a.v * b.v[2]],
                        }),
                    }),
                    typedFn({
                        arguments: ['vec3', 'number'],
                        fn: (a, b) => ({
                            t: 'vec3',
                            v: [a.v[0] * b.v, a.v[1] * b.v, a.v[2] * b.v],
                        }),
                    })
                ),
            },
            {
                name: 'binOp/',
                fullName: 'Division',
                usage: '§7number§r / §7number§r, §7vec2§r / §7vec2§r, §7vec3§r / §7vec3§r',
                description:
                    'divides the first value by the second value; if used with vectors then each component is divided individually',
                implementation: componentsOverloads2((a, b) => a / b),
            },
            {
                name: 'binOp//',
                fullName: 'Floor division',
                usage: '§7number§r // §7number§r, §7vec2§r // §7vec2§r, §7vec3§r // §7vec3§r',
                description:
                    'performs the floor division of the first value by the second value, equivalent to floor(v1 / v2); if used with vectors then each component is divided individually',
                implementation: componentsOverloads2((a, b) => Math.floor(a / b)),
            },
            {
                name: 'binOp%',
                fullName: 'Modulo',
                usage: '§7number§r % §7number§r, §7vec2§r % §7vec2§r, §7vec3§r % §7vec3§r',
                description:
                    'performs the modulo division of the first value by the second value, which is the remainder of the division; if used with vectors then each component is divided individually',
                implementation: componentsOverloads2((a, b) => a % b),
            },
            {
                name: 'binOp^',
                fullName: 'Exponentiation',
                usage: '§7number§r ^ §7number§r, §7vec2§r ^ §7vec2§r, §7vec3§r ^ §7vec3§r, §7number§r ** §7number§r, §7vec2§r ** §7vec2§r, §7vec3§r ** §7vec3§r',
                description:
                    'raises the first value to the power of the second value; if used with vectors then each component is exponentiated individually',
                implementation: componentsOverloads2((a, b) => Math.pow(a, b)),
            },
            {
                name: 'vec2.',
                fullName: 'Vec2 members',
                usage: '§7vec2§r.x, §7vec2§r.y, §7vec2§r.xyx',
                description:
                    'access the components of the vec2; you can use .x or .y to get the corresponding component, or you can §oswizzle§r them to create new vectors (like .xyx)',
                implementation: typedGenericFn(
                    /** @type {Calculator.TypedFunctionImpl<["vec2", "string"]>} */ ({
                        fn: (value, identifierValue) => {
                            if (!argOfType(identifierValue, 'string')) throw new Error('unexpected');
                            let identifier = identifierValue.v;
                            if (1 <= identifier.length && identifier.length <= 3 && identifier.match(/^[xy]+$/)) {
                                return vecAccessors(value, identifier);
                            }
                            throw new Error('non-existing member ' + identifier + ' for type ' + value.t);
                        },
                    })
                ),
            },
            {
                name: 'vec3.',
                fullName: 'Vec3 members',
                usage: '§7vec3§r.x, §7vec3§r.y, §7vec3§r.z, §7vec3§r.xz',
                description:
                    'access the components of the vec3; you can use .x, .y or .z to get the corresponding component, or you can §oswizzle§r them to create new vectors (like .xz)',
                implementation: typedGenericFn(
                    /** @type {Calculator.TypedFunctionImpl<["vec3", "string"]>} */ ({
                        fn: (value, identifierValue) => {
                            /** @type {string} */
                            let identifier = identifierValue.v;
                            if (1 <= identifier.length && identifier.length <= 3 && identifier.match(/^[xyz]+$/)) {
                                return vecAccessors(value, identifier);
                            }
                            throw new Error('non-existing member ' + identifier + ' for type ' + value.t);
                        },
                    })
                ),
            },
            {
                name: 'string.',
                fullName: 'String members',
                usage: '§7string§r.length',
                description: 'access the length of the string',
                implementation: typedGenericFn(
                    /** @type {Calculator.TypedFunctionImpl<["string", "string"]>} */ ({
                        fn: (value, identifierValue) => {
                            /** @type {string} */
                            let identifier = identifierValue.v;
                            if (identifier === 'length') {
                                return { t: 'number', v: value.v.length };
                            }
                            throw new Error('non-existing member ' + identifier + ' for type ' + value.t);
                        },
                    })
                ),
            },
        ],
        constants: [
            {
                name: 'e',
                usage: 'e§7: number§r',
                description:
                    "represents Euler's number, the base of natural logarithms, e, which is approximately 2.718",
                value: { t: 'number', v: JavaMath.E },
            },
            {
                name: 'pi',
                usage: 'pi§7: number§r',
                description:
                    'represents the ratio of the circumference of a circle to its diameter, approximately 3.14159',
                value: { t: 'number', v: JavaMath.PI },
            },
            {
                name: 'ULV',
                usage: 'ULV§7: number§r',
                description: 'the tier index of the ULV tier, which is 0',
                value: { t: 'number', v: GTValues.ULV },
            },
            {
                name: 'LV',
                usage: 'LV§7: number§r',
                description: 'the tier index of the LV tier, which is 1',
                value: { t: 'number', v: GTValues.LV },
            },
            {
                name: 'MV',
                usage: 'MV§7: number§r',
                description: 'the tier index of the MV tier, which is 2',
                value: { t: 'number', v: GTValues.MV },
            },
            {
                name: 'HV',
                usage: 'HV§7: number§r',
                description: 'the tier index of the HV tier, which is 3',
                value: { t: 'number', v: GTValues.HV },
            },
            {
                name: 'EV',
                usage: 'EV§7: number§r',
                description: 'the tier index of the EV tier, which is 4',
                value: { t: 'number', v: GTValues.EV },
            },
            {
                name: 'IV',
                usage: 'IV§7: number§r',
                description: 'the tier index of the IV tier, which is 5',
                value: { t: 'number', v: GTValues.IV },
            },
            {
                name: 'LuV',
                usage: 'LuV§7: number§r',
                description: 'the tier index of the LuV tier, which is 6',
                value: { t: 'number', v: GTValues.LuV },
            },
            {
                name: 'ZPM',
                usage: 'ZPM§7: number§r',
                description: 'the tier index of the ZPM tier, which is 7',
                value: { t: 'number', v: GTValues.ZPM },
            },
            {
                name: 'UV',
                usage: 'UV§7: number§r',
                description: 'the tier index of the UV tier, which is 8',
                value: { t: 'number', v: GTValues.UV },
            },
            {
                name: 'UHV',
                usage: 'UHV§7: number§r',
                description: 'the tier index of the UHV tier, which is 9',
                value: { t: 'number', v: GTValues.UHV },
            },
            {
                name: 'UEV',
                usage: 'UEV§7: number§r',
                description: 'the tier index of the UEV tier, which is 10',
                value: { t: 'number', v: GTValues.UEV },
            },
            {
                name: 'UIV',
                usage: 'UIV§7: number§r',
                description: 'the tier index of the UIV tier, which is 11',
                value: { t: 'number', v: GTValues.UIV },
            },
            {
                name: 'UXV',
                usage: 'UXV§7: number§r',
                description: 'the tier index of the UXV tier, which is 12',
                value: { t: 'number', v: GTValues.UXV },
            },
            {
                name: 'OpV',
                usage: 'OpV: number',
                description: 'the tier index of the OpV tier, which is 13',
                value: { t: 'number', v: GTValues.OpV },
            },
            {
                name: 'MAX',
                usage: 'MAX: number',
                description: 'the tier index of the MAX tier, which is 14',
                value: { t: 'number', v: GTValues.MAX },
            },
        ],
        suffixes: [
            {
                names: ['t', 'tick', 'ticks'],
                usage: '§71§rt, §71§r_t, §71§rtick, §71§r_tick, §71§rticks, §71§r_ticks',
                fullName: 'ticks',
                description: "does nothing, it's here just for symmetry with the seconds suffix",
            },
            {
                names: ['s', 'sec', 'secs'],
                usage: '§71§rs, §71§r_s, §71§rsec, §71§r_sec, §71§rsecs, §71§r_secs',
                fullName: 'seconds',
                description: "converts the number to the corresponding number of ticks; it's the same as number * 20",
            },
            {
                names: ['ULV'],
                usage: '§71§rULV, §71§r_ULV',
                fullName: 'ULV amps',
                description:
                    "converts the number to the EU/t equivalent of ULV amps; it's the same as number * " +
                    GTV[ULV].toString(),
            },
            {
                names: ['LV'],
                usage: '§71§rLV, §71§r_LV',
                fullName: 'LV amps',
                description:
                    "converts the number to the EU/t equivalent of LV amps; it's the same as number * " +
                    GTV[LV].toString(),
            },
            {
                names: ['MV'],
                usage: '§71§rMV, §71§r_MV',
                fullName: 'MV amps',
                description:
                    "converts the number to the EU/t equivalent of MV amps; it's the same as number * " +
                    GTV[MV].toString(),
            },
            {
                names: ['HV'],
                usage: '§71§rHV, §71§r_HV',
                fullName: 'HV amps',
                description:
                    "converts the number to the EU/t equivalent of HV amps; it's the same as number * " +
                    GTV[HV].toString(),
            },
            {
                names: ['EV'],
                usage: '§71§rEV, §71§r_EV',
                fullName: 'EV amps',
                description:
                    "converts the number to the EU/t equivalent of EV amps; it's the same as number * " +
                    GTV[EV].toString(),
            },
            {
                names: ['IV'],
                usage: '§71§rIV, §71§r_IV',
                fullName: 'IV amps',
                description:
                    "converts the number to the EU/t equivalent of IV amps; it's the same as number * " +
                    GTV[IV].toString(),
            },
            {
                names: ['LuV'],
                usage: '§71§rLuV, §71§r_LuV',
                fullName: 'LuV amps',
                description:
                    "converts the number to the EU/t equivalent of LuV amps; it's the same as number * " +
                    GTV[LuV].toString(),
            },
            {
                names: ['ZPM'],
                usage: '§71§rZPM, §71§r_ZPM',
                fullName: 'ZPM amps',
                description:
                    "converts the number to the EU/t equivalent of ZPM amps; it's the same as number * " +
                    GTV[ZPM].toString(),
            },
            {
                names: ['UV'],
                usage: '§71§rUV, §71§r_UV',
                fullName: 'UV amps',
                description:
                    "converts the number to the EU/t equivalent of UV amps; it's the same as number * " +
                    GTV[UV].toString(),
            },
            {
                names: ['UHV'],
                usage: '§71§rUHV, §71§r_UHV',
                fullName: 'UHV amps',
                description:
                    "converts the number to the EU/t equivalent of UHV amps; it's the same as number * " +
                    GTV[UHV].toString(),
            },
            {
                names: ['UEV'],
                usage: '§71§rUEV, §71§r_UEV',
                fullName: 'UEV amps',
                description:
                    "converts the number to the EU/t equivalent of UEV amps; it's the same as number * " +
                    GTV[UEV].toString(),
            },
            {
                names: ['UIV'],
                usage: '§71§rUIV, §71§r_UIV',
                fullName: 'UIV amps',
                description:
                    "converts the number to the EU/t equivalent of UIV amps; it's the same as number * " +
                    GTV[UIV].toString(),
            },
            {
                names: ['UXV'],
                usage: '§71§rUXV, §71§r_UXV',
                fullName: 'UXV amps',
                description:
                    "converts the number to the EU/t equivalent of UXV amps; it's the same as number * " +
                    GTV[UXV].toString(),
            },
            {
                names: ['OpV'],
                usage: '§71§rOpV, §71§r_OpV',
                fullName: 'OpV amps',
                description:
                    "converts the number to the EU/t equivalent of OpV amps; it's the same as number * " +
                    GTV[OpV].toString(),
            },
            {
                names: ['MAX'],
                usage: '§71§rMAX, §71§r_MAX',
                fullName: 'MAX amps',
                description:
                    "converts the number to the EU/t equivalent of MAX amps; it's the same as number * " +
                    GTV[MAX].toString(),
            },
        ],
    };
})();

let calculatorExec = (() => {
    /**
     * @template {string} K
     * @template V
     * @param {[K, V][]} entries
     * @returns {Record<K, V>}
     */
    let objectFromEntries = (entries) => {
        let obj = /** @type {Record<K, V>} */ ({});
        for (let entry of entries) {
            obj[entry[0]] = entry[1];
        }
        return obj;
    };

    const functions = objectFromEntries(
        calculatorDefinitions.functions.map((f) => [
            f.name,
            Array.isArray(f.implementation) ? f.implementation : [f.implementation],
        ])
    );
    const operators = objectFromEntries(
        calculatorDefinitions.operators.map((f) => [
            f.name,
            Array.isArray(f.implementation) ? f.implementation : [f.implementation],
        ])
    );
    const constants = objectFromEntries(calculatorDefinitions.constants.map((f) => [f.name, f.value]));

    /**
     *
     * @param {Calculator.Function[]} options
     * @param {Calculator.Value[]} args
     * @param {string} error
     */
    function execOverloaded(options, args, error) {
        for (let option of options) {
            if (option.arguments) {
                let optionArguments = option.arguments;
                if (args.length === option.arguments.length && args.every((arg, i) => optionArguments[i] === arg.t)) {
                    return option.fn.apply(null, args);
                }
            } else {
                return option.fn.apply(null, args);
            }
        }
        throw new Error(
            'No matching overload for ' +
                error +
                ' and arguments (' +
                args.map((a) => a.t).join(', ') +
                '). Options are:\n' +
                options
                    .map((o) => {
                        if (!o.arguments) return '- variable arguments';
                        if (o.arguments.length === 0) return '- no arguments';
                        return '- ' + o.arguments.join(', ');
                    })
                    .join('\n')
        );
    }

    /**
     * @param {NodeExpr} node
     * @returns {Calculator.Value}
     */
    function calculate(node) {
        switch (node.type) {
            case 'unOp': {
                let value = calculate(node.value);
                let matched = operators['unOp' + node.operator];
                switch (node.operator) {
                    case '+':
                        return execOverloaded(matched, [value], 'Unary Plus');
                    case '-':
                        return execOverloaded(matched, [value], 'Negation');
                }
                break;
            }
            case 'binOp': {
                let left = calculate(node.left);
                let right = calculate(node.right);
                let matched = operators['binOp' + node.operator];
                switch (node.operator) {
                    case '+':
                        return execOverloaded(matched, [left, right], 'Addition');
                    case '-':
                        return execOverloaded(matched, [left, right], 'Subtraction');
                    case '*':
                        return execOverloaded(matched, [left, right], 'Multiplication');
                    case '/':
                        return execOverloaded(matched, [left, right], 'Division');
                    case '//':
                        return execOverloaded(matched, [left, right], 'Floor Division');
                    case '%':
                        return execOverloaded(matched, [left, right], 'Modulo');
                    case '^':
                        return execOverloaded(matched, [left, right], 'Exponentiation');
                }
                break;
            }
            case 'call': {
                if (node.value.type !== 'identifier') {
                    throw new Error('expression is not callable');
                }
                let fnName = node.value.identifier;
                let fn = functions[fnName];
                if (!fn) {
                    throw new Error("unknown identifier '" + fnName + "'");
                }
                let args = node.arguments.map((arg) => calculate(arg));
                return execOverloaded(fn, args, "function '" + fnName + "'");
            }
            case 'member': {
                let value = calculate(node.value);
                let accessor = operators[value.t + '.'];
                if (accessor) {
                    return accessor[0].fn(value, { t: 'string', v: node.identifier });
                }
                throw new Error('non-existing member ' + node.identifier + ' for type ' + value.t);
            }
            case 'number': {
                return { t: 'number', v: node.value };
            }
            case 'string': {
                return { t: 'string', v: node.value };
            }
            case 'identifier': {
                let constant = constants[node.identifier];
                if (!constant) {
                    throw new Error('unknown identifier ' + node.identifier);
                }
                return constant;
            }
        }
    }

    return calculate;
})();

/**
 * @typedef {{ t: "(" }} TokenLParen
 * @typedef {{ t: ")" }} TokenRParen
 * @typedef {{ t: "*" }} TokenTimes
 * @typedef {{ t: "/" }} TokenSlash
 * @typedef {{ t: "//" }} TokenDSlash
 * @typedef {{ t: "%" }} TokenMod
 * @typedef {{ t: "+" }} TokenPlus
 * @typedef {{ t: "-" }} TokenDash
 * @typedef {{ t: "," }} TokenComma
 * @typedef {{ t: "." }} TokenDot
 * @typedef {{ t: "eof" }} TokenEof
 * @typedef {{ t: "^", v: "^" | "**" }} TokenExp
 * @typedef {{ t: "ident", v: string }} TokenIdent
 * @typedef {{ t: "number", v: number, s?: string }} TokenNumber
 * @typedef {{ t: "string", v: string }} TokenString
 * @typedef {TokenLParen | TokenRParen | TokenTimes | TokenSlash | TokenDSlash | TokenMod | TokenPlus | TokenDash | TokenComma | TokenDot | TokenEof | TokenExp | TokenIdent | TokenNumber | TokenString} Token
 */

/**
 * @param {string} input the source text
 * @returns {Token[]} an array of tokens
 */
function calculatorLex(input) {
    /** @type {Token[]} */
    let tokens = [];
    let index = 0;

    while (true) {
        let token = lexToken();
        if (!token) break;
        tokens.push(token);
    }
    tokens.push({ t: 'eof' });
    return tokens;

    /** @returns {string | null} */
    function next() {
        if (index > input.length) {
            return null;
        }
        let ch = input.substring(index, index + 1) || null;
        index += 1;
        return ch;
    }

    function prev() {
        index -= 1;
    }

    /** @returns {Token | null} */
    function lexToken() {
        let ch = next();
        while (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
            ch = next();
        }
        if (!ch) {
            return null;
        }

        if (ch.match(/^[a-zA-Z_]$/)) {
            return lexIdent();
        }
        if (ch.match(/^[0-9]$/)) {
            return lexNumber();
        }
        switch (ch) {
            case '(':
                return { t: '(' };
            case ')':
                return { t: ')' };
            case '+':
                return { t: '+' };
            case '-':
                return { t: '-' };
            case '*':
                ch = next();
                if (ch === '*') {
                    return { t: '^', v: '**' };
                }
                prev();
                return { t: '*' };
            case '/':
                ch = next();
                if (ch === '/') {
                    return { t: '//' };
                }
                prev();
                return { t: '/' };
            case '%':
                return { t: '%' };
            case '^':
                return { t: '^', v: '^' };
            case ',':
                return { t: ',' };
            case '.':
                return { t: '.' };
            case '"':
            case "'":
                return lexString(ch === "'");
            default:
                throw new Error("unexpected token: '" + ch + "'");
        }
    }

    /** @returns {Token | null} */
    function lexIdent() {
        let pos = index - 1;
        let ch;
        while ((ch = next()) && ch.match(/^[a-zA-Z0-9_]$/));
        prev();
        let text = input.substring(pos, index);
        return { t: 'ident', v: text };
    }

    /** @returns {Token | null} */
    function lexNumber() {
        let pos = index - 1;
        let ch;
        while ((ch = next()) && ch.match(/^[0-9]$/));
        if (ch === '.') {
            while ((ch = next()) && ch.match(/^[0-9]$/));
        }
        prev();

        let text = input.substring(pos, index);
        pos = index;

        while ((ch = next()) && ch.match(/^[a-zA-Z0-9_]$/));
        prev();

        if (index > pos) {
            return {
                t: 'number',
                v: parseFloat(text),
                s: input.substring(pos, index),
            };
        }
        return { t: 'number', v: parseFloat(text) };
    }

    /**
     * @param {boolean} single
     * @returns {Token | null}
     */
    function lexString(single) {
        let endCh = single ? "'" : '"';
        let pos = index;
        let ch;
        while ((ch = next()) && ch !== endCh);
        let string = input.substring(pos, index - 1);
        return { t: 'string', v: string };
    }
}

/**
 * @typedef {"*" | "/" | "+" | "-" | "^" | "%" | "//"} BinaryOperator
 * @typedef {"+" | "-"} UnaryOperator
 * @typedef {{ type: "binOp", operator: BinaryOperator, left: NodeExpr, right: NodeExpr }} NodeExprBinary
 * @typedef {{ type: "unOp", operator: UnaryOperator, value: NodeExpr }} NodeExprUnary
 * @typedef {{ type: "call", value: NodeExpr, arguments: NodeExpr[] }} NodeExprCall
 * @typedef {{ type: "member", value: NodeExpr, identifier: string }} NodeMember
 * @typedef {{ type: "identifier", identifier: string }} NodeIdentifier
 * @typedef {{ type: "string", value: string }} NodeLiteralString
 * @typedef {{ type: "number", value: number }} NodeLiteralNumber
 * @typedef {NodeExprBinary | NodeExprUnary | NodeExprCall | NodeMember | NodeIdentifier | NodeLiteralString | NodeLiteralNumber} NodeExpr
 */

/**
 * @param {Token[]} tokens lexed tokens
 * @returns {NodeExpr}
 */
function calculatorParse(tokens) {
    /** @type {Record<BinaryOperator, { prec: number, assoc: "left" | "right" }>} */
    let operators = {
        '*': { prec: 3, assoc: 'left' },
        '/': { prec: 3, assoc: 'left' },
        '//': { prec: 3, assoc: 'left' },
        '%': { prec: 3, assoc: 'left' },
        '+': { prec: 2, assoc: 'left' },
        '-': { prec: 2, assoc: 'left' },
        '^': { prec: 4, assoc: 'right' },
    };

    let index = 0;

    /** @type {NodeExpr} */
    let result = parseExpression();
    expect('eof');
    return result;

    /**
     * @param {Token} token
     * @returns {string}
     */
    function prettyToken(token) {
        switch (token.t) {
            case '(':
                return "'('";
            case ')':
                return "')'";
            case '+':
                return "'+'";
            case '-':
                return "'-'";
            case '*':
                return "'*'";
            case '/':
                return "'/'";
            case '//':
                return "'//'";
            case '%':
                return "'%'";
            case '^':
                return "'" + token.v + "'";
            case ',':
                return "','";
            case '.':
                return '.';
            case 'string':
                return "string ('" + token.v + "')";
            case 'number':
                if (token.s) return "number ('" + token.v + "', '" + token.s + "')";
                return "number ('" + token.v + "')";
            case 'ident':
                return "indentifier ('" + token.v + "')";
            case 'eof':
                return 'eof';
        }
    }

    /** @returns {Token} */
    function current() {
        return tokens[index - 1];
    }

    /** @returns {Token} */
    function next() {
        if (index >= tokens.length) {
            throw new Error('eof');
        }
        return tokens[index];
    }

    /**
     * @param {Token["t"]} token
     * @returns {boolean}
     */
    function peek(token) {
        return next().t === token;
    }

    /**
     * @param {Token["t"]} token
     * @returns {boolean}
     */
    function accept(token) {
        if (peek(token)) {
            index += 1;
            return true;
        }
        return false;
    }

    /**
     * @param {Token["t"]} token
     * @returns {void}
     */
    function expect(token) {
        if (!accept(token)) {
            throw new Error('expected ' + token + ' got ' + prettyToken(next()) + ' instead');
        }
    }

    /** @returns {NodeExpr} */
    function parseExpression() {
        return parseBinOp(0);
    }

    /**
     * @param {Token["t"]} token
     * @returns {token is BinaryOperator}
     */
    function isBinaryOperator(token) {
        return !!(/** @type {any} */ (operators)[token]);
    }

    /**
     * @param {number} prec
     * @returns {NodeExpr}
     */
    function parseBinOp(prec) {
        let left = parseUnOp();
        /** @type {Token["t"]} */
        let op;
        while ((op = next().t) && isBinaryOperator(op) && operators[op].prec > prec) {
            accept(op);
            let tprec = operators[op].prec;
            if (operators[op].assoc === 'right') tprec -= 1;
            let right = parseBinOp(tprec);
            left = { type: 'binOp', operator: op, left: left, right: right };
        }

        return left;
    }

    /** @returns {NodeExpr} */
    function parseUnOp() {
        /** @type {Token["t"]} */
        let op;
        switch ((op = next().t)) {
            case '+':
            case '-':
                accept(op);
                return { type: 'unOp', operator: op, value: parseUnOp() };
        }
        return parsePrimaryExpr();
    }

    /** @returns {NodeExpr[]} */
    function parseArgList() {
        let args = [];
        expect('(');
        while (true) {
            if (accept(')')) {
                return args;
            }
            args.push(parseExpression());
            if (accept(',')) {
                continue;
            }
            expect(')');
            break;
        }
        return args;
    }

    /** @returns {NodeExpr} */
    function parsePrimaryExpr() {
        let term = parseTerm();
        while (true) {
            if (accept('.')) {
                expect('ident');
                let ident = /** @type {TokenIdent} */ (current()).v;
                term = { type: 'member', value: term, identifier: ident };
                continue;
            }
            if (peek('(')) {
                let args = parseArgList();
                term = { type: 'call', value: term, arguments: args };
                continue;
            }
            break;
        }
        return term;
    }

    /** @returns {NodeExpr} */
    function parseTerm() {
        if (accept('(')) {
            let expr = parseExpression();
            expect(')');
            return expr;
        }

        if (accept('ident')) {
            // prettier-ignore
            let ident = (/** @type {TokenIdent} */ (current())).v;
            return { type: 'identifier', identifier: ident };
        }

        if (accept('string')) {
            // prettier-ignore
            let value = (/** @type {TokenString} */ (current())).v;
            return { type: 'string', value: value };
        }

        if (accept('number')) {
            // prettier-ignore
            let number = (/** @type {TokenNumber} */ (current())).v;
            let suffix = /** @type {TokenNumber} */ (current()).s;
            if (suffix) {
                if (suffix.startsWith('_')) suffix = suffix.substring(1);
                switch (suffix) {
                    case 't':
                    case 'tick':
                    case 'ticks':
                        return { type: 'number', value: number };
                    case 's':
                    case 'sec':
                    case 'secs':
                        return { type: 'number', value: number * 20 };
                    case 'ULV':
                        return { type: 'number', value: number * GTV[ULV] };
                    case 'LV':
                        return { type: 'number', value: number * GTV[LV] };
                    case 'MV':
                        return { type: 'number', value: number * GTV[MV] };
                    case 'HV':
                        return { type: 'number', value: number * GTV[HV] };
                    case 'EV':
                        return { type: 'number', value: number * GTV[EV] };
                    case 'IV':
                        return { type: 'number', value: number * GTV[IV] };
                    case 'LuV':
                        return { type: 'number', value: number * GTV[LuV] };
                    case 'ZPM':
                        return { type: 'number', value: number * GTV[ZPM] };
                    case 'UV':
                        return { type: 'number', value: number * GTV[UV] };
                    case 'UHV':
                        return { type: 'number', value: number * GTV[UHV] };
                    case 'UEV':
                        return { type: 'number', value: number * GTV[UEV] };
                    case 'UIV':
                        return { type: 'number', value: number * GTV[UIV] };
                    case 'UXV':
                        return { type: 'number', value: number * GTV[UXV] };
                    case 'OpV':
                        return { type: 'number', value: number * GTV[OpV] };
                    case 'MAX':
                        return { type: 'number', value: number * GTV[MAX] };
                    default:
                        throw new Error("invalid number suffix '" + suffix + "'");
                }
            }
            return { type: 'number', value: number };
        }

        throw new Error('expected (, identifier or number');
    }
}
