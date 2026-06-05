import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
    js.configs.recommended,
    prettierConfig,
    {
        plugins: {
            prettier,
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "script",
            globals: {
                // KubeJS globals
                event: "readonly",
                global: "writable",
                Item: "readonly",
                Ingredient: "readonly",
                Fluid: "readonly",
                AABB: "readonly",
                BlockPos: "readonly",
                Vec3: "readonly",
                UUID: "readonly",
                Java: "readonly",
                Platform: "readonly",
                console: "readonly",
                Text: "readonly",
                Component: "readonly",
                Color: "readonly",
            },
        },
        rules: {
            "prettier/prettier": "error",
            camelcase: [
                "error",
                {
                    properties: "always",
                    ignoreDestructuring: false,
                    ignoreImports: false,
                    // SCREAMING_SNAKE_CASE constants are allowed at the top level
                    allow: ["^[A-Z][A-Z0-9]*(_[A-Z0-9]+)*$"],
                },
            ],
            "id-match": [
                "error",
                // Allow: lowerCamelCase, SCREAMING_SNAKE_CASE, and single-letter loop vars
                "^([a-z][a-zA-Z0-9]*|[A-Z][A-Z0-9]*(_[A-Z0-9]+)*|[a-z])$",
                {
                    properties: true,
                    onlyDeclarations: true,
                    ignoreDestructuring: true,
                },
            ],
            "no-var": "error",
            eqeqeq: ["error", "always"],
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "no-console": "off",
        },
    },
    {
        files: ["kubejs/**/*.js"],
    },
];
