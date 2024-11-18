import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },

  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),

  {
    name: 'app/custom-rules',
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'never']
    }
  },
  {
    name: 'app/custom-vue-rules',
    rules: {
      'vue/no-v-html': 'off',
      'vue/max-attributes-per-line': [
        'warn',
        {
          singleline: 1
        }
      ],
      'vue/multi-word-component-names': ['error', {
        'ignores': [
          'index',
          'Home',
          'List',
          'Overview'
        ]
      }]
    }
  }
];
