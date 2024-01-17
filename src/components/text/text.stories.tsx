import { Story } from '@storybook/react';
import { Text } from '.';
import { Args } from '../../utils/helpers';
import { DefaultExclude } from '../../utils/helpers/storyArgs/defaultExclude';

export default {
  title: 'Completed/Text',
  component: Text,
  parameters: {
    controls: { expanded: true },
    layout: 'centered'
  },
  args: {
    text: 'Hello World!'
  },
  argTypes: {
    ...Args
  }
};

export const Default: Story = (args) => <Text {...args}>{args.text}</Text>;
Default.args = {};
Default.parameters = {
  controls: {
    sort: 'alpha',
    exclude: [
      ...DefaultExclude,
      'accentPalette',
      'accentPaletteStop',
      'disabled',
      'type',
      'href',
      'boxShadow',
      'boxShadowPalette',
      'boxShadowPaletteStop',
      'bgPalette',
      'bgPaletteStop',
      'dropShadow',
      'rounded',
      'shadow',
      'blend',
      'centerSelf',
      'margin',
      'bgPosition',
      'bgRepeat',
      'bgSize',
      'bgImage',
      'gridCols',
      'inset',
      'minWidth',
      'maxWidth',
      'minHeight',
      'maxHeight',
      'mixBlend',
      'padding',
      'borderSpacing',
      'verticalAlign',
      'fillPalette',
      'fillPaletteStop',
      'strokePalette',
      'strokePaletteStop',
      'strokeWidth',
      'width',
      'height',
      'spaceBetween',
      'borderPalette',
      'borderPaletteStop',
      'borderRadius',
      'borderStyle',
      'borderWidth',
      'cursor',
      'innerRef',
      'defaultPalette',
      'defaultPaletteStop',
      'frontRadialPalette',
      'frontRadialPaletteStop',
      'gradientDirection',
      'gradientFrom',
      'gradientPaletteStop',
      'gradientTo',
      'gradientVia',
      'iconPalette',
      'iconPaletteStop',
      'leadingIconPalette',
      'leadingIconPaletteStop',
      'opacity',
      'trailingIconPalette',
      'trailingIconPaletteStop'
    ]
  }
};
