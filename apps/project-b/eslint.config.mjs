import nextEslintConfig from '@packages/eslint-config/next';

const eslintConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...nextEslintConfig,
];

export default eslintConfig;
