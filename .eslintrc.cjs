module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:storybook/recommended",
    "plugin:jest/recommended",
  ],
  plugins: ["react-refresh", "prettier", "@typescript-eslint", "jest"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [["builtin", "external"], "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "next",
            group: "builtin",
          },
          {
            pattern: "react",
            group: "builtin",
          },
          {
            pattern: "@MyDesignSystem/**",
            group: "internal",
          },
          {
            pattern: "src/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["src/**", "@MyDesignSystem/**"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-unresolved": "off",
  },
};
