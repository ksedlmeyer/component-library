import { Story } from '@storybook/react';
import { Container } from '.';
import { Args } from '../../utils/helpers';
import { DefaultExclude } from '../../utils/helpers/storyArgs/defaultExclude';

export default {
  title: 'Dev-Component/Container',
  component: Container,
  parameters: {
    controls: { expanded: true }
  },
  args: {},
  argTypes: {
    ...Args
  }
};

const containerExclusions = [
  ...DefaultExclude,
  'type',
  'disabled',
  'href',
  'innerRef',
  'fillPalette',
  'fillPaletteStop',
  'strokePalette',
  'strokePaletteStop',
  'strokeWidth'
];

export const Default: Story = (args) => <Container {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    exclude: containerExclusions
  }
};
Default.args = {};

export const Background = Default.bind({});
Background.args = {
  bgPalette: 'indigo',
  bgPaletteStop: 600,
  width: '[100px]',
  height: '[100px]'
};
Background.parameters = {
  controls: {
    sort: 'alpha',
    exclude: containerExclusions
  }
};
