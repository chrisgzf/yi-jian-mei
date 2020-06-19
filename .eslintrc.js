module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  // Ensure `prettier` is the last in `extends`
  extends: ['airbnb-base', 'prettier/react', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {},
};
