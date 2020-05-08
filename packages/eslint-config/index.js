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
    React: 'writable',
  },
  plugins: [
    'jest',
    'react',
    'react-hooks',
    'jsx-a11y',
    'prettier',
    'extra-rules',
    'compat',
  ],
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  rules: {
    'no-console': 'error',
    'max-params': ['error', { max: 7 }],
    'max-statements': ['error', { max: 100 }],
    'max-lines': ['error', { max: 1000 }],
    'max-len': 0,
    complexity: ['error', { max: 10 }],
    'object-shorthand': ['warn', 'properties'],
    'array-callback-return': 'error',
    'no-undef': 'error',
    'class-methods-use-this': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'prettier/prettier': 1,
    'linebreak-style': 'off',
    'compat/compat': 'error',
  },
};
