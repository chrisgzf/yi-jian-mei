module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    'jest/globals': true,
  },
  // Ensure `prettier` is the last in `extends`
  extends: ['airbnb-base', 'prettier/react', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
