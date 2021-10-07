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
    plugins: ['react', 'prettier'],
    extends: ['eslint:recommended', 'next', 'prettier'],
    rules: {
      'max-params': ['error', { max: 7 }],
      'max-statements': ['error', { max: 80 }],
      'max-lines': ['error', { max: 1000 }],
      'max-len': 0,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    },
  };
  