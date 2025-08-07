import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  // Base JavaScript configuration
  js.configs.recommended,

  // TypeScript files configuration
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,

      // Security-focused rules
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "no-unsafe-inline-styles": "off", // Not applicable for this project

      // TypeScript-specific security and best practices
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",

      // Code quality rules
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-console": "warn",
      "no-debugger": "error",

      // DOM security (relevant for frontend)
      "no-innerHTML": "off", // Custom rule would need plugin

      // Import/export best practices
      "no-duplicate-imports": "error",

      // Formatting (basic - could be handled by Prettier)
      indent: ["warn", 2],
      quotes: "off", // Let Prettier handle quote consistency
      semi: ["error", "always"],
      "comma-dangle": ["warn", "always-multiline"],
    },
  },

  // JavaScript files configuration
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // Security rules for JS files
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",

      // Code quality
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-console": "warn",
      "no-debugger": "error",
      "no-duplicate-imports": "error",

      // Formatting
      indent: ["warn", 2],
      quotes: "off", // Let Prettier handle quote consistency
      semi: ["error", "always"],
      "comma-dangle": ["warn", "always-multiline"],
    },
  },

  // Global ignores
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".vite/**",
      "public/fonts/**",
      "scripts/download-fonts-simple.js", // Ignore font download script
      "**/*.min.js",
      "**/*.d.ts",
    ],
  },

  // Browser environment globals
  {
    files: ["src/**/*.{ts,tsx,js}"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        HTMLElement: "readonly",
        HTMLDivElement: "readonly",
        HTMLButtonElement: "readonly",
        HTMLAnchorElement: "readonly",
        HTMLLinkElement: "readonly",
        CustomEvent: "readonly",
        Event: "readonly",
      },
    },
  },

  // Node.js environment for scripts
  {
    files: ["scripts/**/*.{js,mjs,cjs}", "*.config.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-console": "off", // Allow console in scripts
    },
  },
];
