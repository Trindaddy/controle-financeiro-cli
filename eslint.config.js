// eslint.config.js
module.exports = [
    {
        files: ["src/**/*.js", "tests/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                require: "readonly",
                module: "readonly",
                console: "readonly",
                describe: "readonly",
                test: "readonly",
                expect: "readonly",
                beforeEach: "readonly",
                process: "readonly"
            }
        },
        rules: {
            "indent": ["error", 4],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "no-unused-vars": "warn"
        }
    }
];