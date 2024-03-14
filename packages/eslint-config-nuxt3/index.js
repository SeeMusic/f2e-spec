/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    // Basic
    semi: ['error', 'always'],
    // Vue
    'vue/no-v-html': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 1
      }
    ],
    // add your custom rules here
  },
  // Vue recommends using PascalCase for component names, while Nuxt's automatic routing mechanism requires lowercase file names for files under the "pages" and "layouts" directories.
  overrides: [
    {
      files: ['layouts/*.vue', 'pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
};
