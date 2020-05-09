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
  plugins: ['jest', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  rules: {
    'max-params': ['error', { max: 7 }],
    'max-statements': ['error', { max: 80 }],
    'max-lines': ['error', { max: 1000 }],
    'max-len': 0,
    complexity: ['error', { max: 10 }],
  },
};
