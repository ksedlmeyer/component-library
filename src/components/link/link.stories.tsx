import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Link',
  component: Link,
  args: {
    text: 'Route'
  },
  argTypes: {
    ...Args
  }
};

const linkDefaults = [
  'selectable',
  'selected',
  'isDisabled',
  'leadingIcon',
  'trailingIcon',
  'target',
  'corner',
  'linkSize',
  'text',
  'textShadowDirection',
  'textShadowBlur',
  'textShadowThickness',
  'textShadowPalette',
  'textShadowPaletteStop',
  'textShadowOpacity',
  'borderPalette',
  'borderPaletteStop',
  'borderSpacing',
  'borderStyle',
  'borderWidth',
  'fontSmoothing',
  'fontStyle',
  'fontVariantNumeric',
  'fontWeight',
  'gradientDirection',
  'gradientFrom',
  'gradientPaletteStop',
  'gradientTo',
  'gradientVia',
  'iconSize',
  'leadingIconPalette',
  'leadingIconPaletteStop',
  'leadingIconType',
  'trailingIconPalette',
  'trailingIconPaletteStop',
  'trailingIconType',
  'letterSpacing',
  'lineClamp',
  'lineHeight',
  'opacity',
  'textAlign',
  'textDecoration',
  'textDecorationPalette',
  'textDecorationPaletteStop',
  'textDecorationStyle',
  'textDecorationThickness',
  'textPalette',
  'textPaletteStop',
  'textTransform',
  'textUnderlineOffset',
  'wordBreak'
];

export const Default: Story = (args) => (
  <BrowserRouter>
    <Link {...args} />
  </BrowserRouter>
);
Default.args = {};
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...linkDefaults]
  }
};
