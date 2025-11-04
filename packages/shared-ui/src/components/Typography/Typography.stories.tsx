import type { Meta, StoryObj } from '@storybook/react-vite';

import Typography from './Typography';
import { VARIANT_LIST } from './Typography.constants';

const meta: Meta<typeof Typography> = {
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Hello world!',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: VARIANT_LIST,
    },
  },
};

export default meta;

type TStory = StoryObj<typeof Typography>;

export const Paragraph: TStory = {
  args: {
    as: 'p',
    variant: 'p',
  },
};

export const Headline1: TStory = {
  args: {
    as: 'h1',
    variant: 'h1',
  },
};

export const Headline2: TStory = {
  args: {
    as: 'h2',
    variant: 'h2',
  },
};

export const Headline3: TStory = {
  args: {
    as: 'h3',
    variant: 'h3',
  },
};

export const Headline4: TStory = {
  args: {
    as: 'h4',
    variant: 'h4',
  },
};
