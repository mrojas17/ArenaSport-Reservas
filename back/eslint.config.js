const { ESLint } = require("eslint");
const parser = require("@typescript-eslint/parser");
const eslintPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser,
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
    },
    rules: {
      // Añadir reglas personalizadas aquí
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
];