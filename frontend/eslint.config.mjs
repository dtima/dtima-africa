import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint-define-config";
import nextPlugin from "@next/eslint-plugin-next";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default defineConfig({
  root: true,
  parser: tsParser,
  plugins: {
    "@typescript-eslint": typescriptEslint,
    "@next/next": nextPlugin,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
  ],
  rules: {
    // Enforce consistent naming conventions
    "@typescript-eslint/naming-convention": [
      "error",
      // Interface names should be prefixed with 'I'
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
      // Type aliases should use PascalCase
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      // React components must use PascalCase
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      // Variables and functions should use camelCase
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
    ],
    
    // Enforce explicit types for function return values
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    
    // Require explicit accessibility modifiers
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    
    // Disallow unused variables
    "@typescript-eslint/no-unused-vars": [
      "error",
      { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    
    // Prefer interface over type aliases for object definitions
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    
    // Enforce props destructuring
    "react/destructuring-assignment": ["error", "always"],
    
    // Enforce consistent import ordering
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});
