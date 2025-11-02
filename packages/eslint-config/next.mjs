import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import nextTs from 'eslint-config-next/typescript';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig(
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: { import: importPlugin },
    rules: {
      // Here comes custom rules:
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern:
                '{@components,@utils,@constants,@hooks,@styles,@actions,@public,@api,@store,@context}{,/**}',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          warnOnUnassignedImports: true,
        },
      ],
      curly: ['error', 'multi-line', 'consistent'],
    },
  },
);
