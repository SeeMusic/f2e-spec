/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Basic
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    // Vue
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': ['error', {
      'ignores': [
        'Home',
        'Overview',
        'index'
      ]
    }]
    // add your custom rules here
  }
};
