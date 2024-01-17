import { Story } from '@storybook/react';
import { HeaderScreen } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/HeaderScreen',
  component: HeaderScreen,
  argTypes: {
    ...Args
  }
};

const headerScreenDefaults = [
  'height',
  'thumbnailProps',
  'buttonIcons',
  'imageLogoFit',
  'imageLogoHeight',
  'imageLogoURL',
  'badges',
  'breadcrumbs',
  'breadcrumbIcon',
  'contextValues',
  'divider',
  'frontRadialPalette',
  'frontRadialPaletteStop',
  'backRadialPalette',
  'backRadialPaletteStop',
  'overlineText',
  'titleText',
  'titleLeadingIcon',
  'titleTrailingIcon',
  'titleLineClamp',
  'accentEffect',
  'seperatorIcon',
  'breadcrumbSize',
  'badgeSize',
  'badgeCorner',
  'breadcrumbTextShadowDirection',
  'breadcrumbTextShadowBlur',
  'breadcrumbTextShadowOpacity',
  'breadcrumbTextShadowPalette',
  'breadcrumbTextShadowPaletteStop',
  'breadcrumbTextShadowThickness',
  'overlineTextShadowDirection',
  'overlineTextShadowBlur',
  'overlineTextShadowOpacity',
  'overlineTextShadowPalette',
  'overlineTextShadowPaletteStop',
  'overlineTextShadowThickness',
  'titleTextShadowDirection',
  'titleTextShadowBlur',
  'titleTextShadowOpacity',
  'titleTextShadowPalette',
  'titleTextShadowPaletteStop',
  'titleTextShadowThickness',
  'backRadialPaletteStopInverse',
  'overallPalette',
  'overallPaletteStop',
  'themeInverse',
  'inversePaletteStop',
  'padding'
];

export const Default: Story = (args) => <HeaderScreen {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...headerScreenDefaults]
  }
};
Default.args = {};
