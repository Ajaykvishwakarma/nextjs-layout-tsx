/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  // rules: {
  //   'react/react-in-jsx-scope': 'off',
  //   'no-console': 'warn',
  // },
  rules: {
    'react-refresh/only-export-components': [
      // 'warn',
      { allowConstantExport: true },
    ],
  },
};
