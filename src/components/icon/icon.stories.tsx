import { Story } from '@storybook/react';
import { Icon } from '.';
import { Args } from '../../utils/helpers';
import { DefaultExclude } from '../../utils/helpers/storyArgs/defaultExclude';

export default {
  title: 'Completed/Icon',
  component: Icon,
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    ...Args
  }
};
const iconExcludes = [
  'bgPalette',
  'bgPaletteStop',
  'rounded',
  'shadow',
  'blend',
  'centerSelf',
  'margin',
  'cursor',
  'bgPosition',
  'bgRepeat',
  'bgSize',
  'bgImage',
  'borderPalette',
  'borderPaletteStop',
  'borderRadius',
  'borderStyle',
  'borderWidth',
  'boxShadow',
  'boxShadowPalette',
  'boxShadowPaletteStop',
  'mixBlend',
  'dropShadow',
  'gridCols',
  'accentPalette',
  'accentPaletteStop',
  'inset',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'padding',
  'spaceBetween',
  'borderSpacing',
  'font',
  'fontSize',
  'fontSmoothing',
  'fontStyle',
  'fontWeight',
  'fontVariantNumeric',
  'letterSpacing',
  'lineClamp',
  'lineHeight',
  'textAlign',
  'textPalette',
  'textPaletteStop',
  'textDecoration',
  'textDecorationPalette',
  'textDecorationPaletteStop',
  'textDecorationStyle',
  'textDecorationThickness',
  'textUnderlineOffset',
  'textTransform',
  'textOverflow',
  'textIndent',
  'textShadowDirection',
  'textShadowPalette',
  'textShadowPaletteStop',
  'textShadowBlur',
  'textShadowThickness',
  'prose',
  'textShadowOpacity',
  'verticalAlign'
];
export const Default: Story = (args) => <Icon {...args} />;
Default.args = {};
Default.parameters = {
  controls: {
    sort: 'alpha',
    exclude: [...DefaultExclude, ...iconExcludes]
  }
};

export const HeroIcon = Default.bind({});
HeroIcon.args = {
  svg: 'BookmarkIcon',
  iconType: 'solid',
  width: 60,
  gradientDirection: 'br',
  gradientFrom: 'primary-500',
  gradientVia: 'rose-500',
  gradientTo: 'secondary-500',
  defaultPalette: 'gradient'
};
HeroIcon.parameters = {
  controls: {
    sort: 'alpha',
    exclude: [...DefaultExclude, ...iconExcludes]
  }
};

export const Outline = Default.bind({});
Outline.args = {
  svg: 'ChatBubbleOvalLeftIcon',
  iconType: 'outline',
  strokePalette: 'primary',
  strokePaletteStop: 500
};
Outline.parameters = {
  controls: {
    sort: 'alpha',
    exclude: [...DefaultExclude, ...iconExcludes]
  }
};
