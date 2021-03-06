module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],
    'implicit-arrow-linebreak': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never'],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'operator-linebreak': 0,
    'no-plusplus': 0,
    camelcase: 0,
    'consistent-return': 0,
    'object-curly-newline': 0,
    'react/jsx-curly-newline': 0,
    'no-confusing-arrow': 0,
    indent: 0,
    'no-nested-ternary': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
