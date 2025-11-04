import nextEslintConfig from '@packages/eslint-config/next';
import storybook from 'eslint-plugin-storybook';

const eslintConfig = [
  {
    files: ['**/*.{ts,tsx}'],
  },
  ...nextEslintConfig,
  ...storybook.configs['flat/recommended'],
];

export default eslintConfig;
