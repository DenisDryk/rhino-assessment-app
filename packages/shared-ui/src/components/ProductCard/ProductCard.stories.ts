import type { Meta, StoryObj } from '@storybook/react-vite';

import ProductCard from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    category: 'Category',
    title: 'Title',
    tags: ['Tag 1', 'Tag 2'],
    media: { src: 'https://placehold.co/200x200' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    layout: 'vertical',
  },
};

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
  },
};
