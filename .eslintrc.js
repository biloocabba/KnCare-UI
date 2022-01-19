module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    es6: true,
    jest: true,
    node: true,
  },
  // files: ["*.js", "*.jsx"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",

    "import/prefer-default-export": "off",

    "react/jsx-filename-extension": "off",

    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
    ],

    "react/prop-types": "off",

    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],

    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",

    "jsx-a11y/anchor-is-valid": "off",

    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-redux",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-router",
            group: "external",
            position: "before",
          },
          {
            pattern: "reactstrap",
            group: "external",
            position: "before",
          },
          {
            pattern: "components/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "redux/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    // uses .prettierrc.js file config
    // https://github.com/prettier/eslint-plugin-prettier#options
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
  overrides: [
    {
      env: {
        browser: true,
        es2021: true,
        es6: true,
        jest: true,
      },
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
      },
      settings: {
        react: { version: "detect" },
        "import/resolver": {
          typescript: {},
        },
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jest-dom/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:testing-library/react",
      ],
      rules: {
        "react/function-component-definition": [
          "error",
          { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
        ],
        "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
        "react/prop-types": "off",
        "import/order": [
          "error",
          {
            groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
            "newlines-between": "always",
            pathGroups: [
              {
                pattern: "react",
                group: "external",
                position: "before",
              },
              {
                pattern: "react-redux",
                group: "external",
                position: "before",
              },
              {
                pattern: "react-router",
                group: "external",
                position: "before",
              },
              {
                pattern: "reactstrap",
                group: "external",
                position: "before",
              },
              {
                pattern: "components/**",
                group: "internal",
                position: "before",
              },
              {
                pattern: "redux/**",
                group: "internal",
                position: "after",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
            alphabetize: { order: "asc", caseInsensitive: true },
          },
        ],
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",

        "react/react-in-jsx-scope": "off",

        "jsx-a11y/anchor-is-valid": "off",

        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],

        // uses .prettierrc.js file config
        // https://github.com/prettier/eslint-plugin-prettier#options
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      },
    },
  ],
};
