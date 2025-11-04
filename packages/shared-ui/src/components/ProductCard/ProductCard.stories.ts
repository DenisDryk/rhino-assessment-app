import type { Meta, StoryObj } from '@storybook/react-vite';

import ProductCard from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
