import { Story } from '@storybook/react';
import { Dev } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Dev-Component/Dev',
  component: Dev,
  parameters: {
    controls: { expanded: true }
  },
  args: {
    children: 1
  },
  argTypes: {
    children: {
      description: 'For visualizing children only - Not an actual prop',
      control: {
        min: 0
      }
    },
    ...Args
  }
};

export const AllProps: Story = (args) => (
  <Dev {...args}>
    {([...Array(args.children).keys()] as []).map((n) => (
      <div
        key={n}
        className='w-10 h-10 bg-primary-500 border border-primary-800 border-2 flex items-center justify-center'>
        {n + 1}
      </div>
    ))}
  </Dev>
);
AllProps.parameters = {
  controls: {
    sort: 'alpha'
  }
};
AllProps.args = {
  display: 'flex',
  width: 'full',
  borderWidth: '8',
  borderPalette: 'rose',
  borderPaletteStop: 500,
  bgPalette: {
    base: 'secondary',
    hover: 'primary'
  },
  bgPaletteStop: {
    base: 900,
    hover: 500
  }
};
