module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:@next/next/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    cy: "writable",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // enable linting for jsx files
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks", "better-styled-components"],
  rules: {
    // NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    // NextJs specific fix: allow jsx syntax in js files
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "better-styled-components/sort-declarations-alphabetically": 2,
  },
};
