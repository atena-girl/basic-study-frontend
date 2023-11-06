module.exports = {
  root: true,
  env: {
    node: true,
    'cypress/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:cypress/recommended'

  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
}
