import { Story } from '@storybook/react';
import { Divider } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Divider',
  component: Divider,
  parameters: {
    controls: { expanded: true }
  },
  args: {
    text: 'Hello World!'
  },
  argTypes: { ...Args }
};

const dividerDefaults = [
  'label',
  'textOpacity',
  'dividerOpacity',
  'dividerPalette',
  'dividerPaletteStop',
  'dividerPosition',
  'leadingIcon',
  'trailingIcon',
  'containerHeight',
  'containerWidth',
  'containerOpacity',
  'size',
  'dividerHeight',
  'textAlign',
  'gradientDirection',
  'gradientFrom',
  'gradientVia',
  'gradientTo',
  'textPalette',
  'textPaletteStop'
];

export const Default: Story = (args) => <Divider {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...dividerDefaults]
  }
};
Default.args = {};

export const Text = Default.bind({});
Text.args = {
  dividerPalette: 'indigo',
  dividerPaletteStop: 500,
  label: 'Label',
  textAlign: 'left',
  fontSize: 'lg'
};
Text.parameters = {
  controls: {
    sort: 'alpha',
    include: [...dividerDefaults]
  }
};

export const Gradient = Default.bind({});
Gradient.parameters = {
  controls: {
    sort: 'alpha',
    include: [...dividerDefaults]
  }
};
Gradient.args = {
  textPalette: 'emerald',
  dividerPalette: 'gradient',
  dividerPaletteStop: 500,
  gradientDirection: 'r',
  gradientFrom: 'rose',
  gradientVia: 'purple',
  gradientTo: 'emerald'
};
