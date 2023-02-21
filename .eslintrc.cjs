/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended"
  ],
  rules: {
    "semi": ["error", "never"],
    indent: ["error", 2],
    "vue/script-indent": ["error", 2, { baseIndent: 1, switchCase: 1 }],
    "vue/no-unused-vars": "error",
    "vue/script-setup-uses-vars": "error",
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style", "i18n"],
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "function-paren-newline": ["error", "multiline"],
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off",
      },
    },
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  }
}