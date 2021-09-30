module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    document: true,
    window: true,
  },
  plugins: ["babel", "react", "import", "prettier", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  rules: {
    'max-params': ['error', { max: 7 }],
    'max-statements': ['error', { max: 80 }],
    'max-lines': ['error', { max: 1000 }],
    'max-len': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/first': 'error',
    'import/no-named-default': 'error',
    'import/no-self-import': 'error',
    complexity: ['error', { max: 10 }],
  },
};
