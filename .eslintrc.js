module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-alert": 0,
    "import/prefer-default-export": 0,
    "react/state-in-constructor": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-console": 0,
    "react/jsx-indent": 0,
    "react/no-unescaped-entities": 0
  },
};
