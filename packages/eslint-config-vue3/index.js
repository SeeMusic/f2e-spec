import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  globalIgnores([
    '**/dist/**',
    '**/dist-ssr/**',
    '**/coverage/**',
    '**/.*/**'
  ]),

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,

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
);
