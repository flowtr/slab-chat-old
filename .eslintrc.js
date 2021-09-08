module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["prettier", "@typescript-eslint"],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-empty-function": 0,
        curly: ["warn", "multi"],
    },
    overrides: [
        {
            files: ["**/*.js"],
            excludedFiles: ["node_modules", "dist", "build"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
};
