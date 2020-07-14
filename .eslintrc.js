module.exports = {
  plugins: ['prettier', 'react'],
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-unused-vars': 2,
    'no-undef': 2,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-absolute-path': 0,
    'import/extensions': 0,
  },
  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/'],
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: ['src', 'assets'],
      },
    },
  },
};
