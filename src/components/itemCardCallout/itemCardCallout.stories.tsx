import { Story } from '@storybook/react';
import { ItemCardCallout } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/ItemCardCallout',
  component: ItemCardCallout,
  parameters: {
    controls: { expanded: true }
  },
  args: {},
  argTypes: {
    ...Args
  }
};

const itemCardDefaults = [
  'bgPalette',
  'bgPaletteStop',
  'thumbnailProps',
  'overlineText',
  'overlineLeadingIcon',
  'overlineTrailingIcon',
  'titleText',
  'titleLeadingIcon',
  'titleTrailingIcon',
  'thumbnailDivPosition',
  'thumbnailDivHeight',
  'thumbnailDivWidth',
  'overlineFontSize',
  'overlineFontWeight',
  'overlineTextPalette',
  'overlineTextPaletteStop',
  'overlineTextAlign',
  'overlineLineClamp',
  'overlineLetterSpacing',
  'overlineTextShadowDirection',
  'overlineTextShadowPalette',
  'overlineTextShadowPaletteStop',
  'overlineTextShadowBlur',
  'overlineTextShadowThickness',
  'overlineTextShadowOpacity',
  'overlineWordBreak',
  'titleFontSize',
  'titleFontWeight',
  'titleTextPalette',
  'titleTextPaletteStop',
  'titleTextAlign',
  'titleLetterSpacing',
  'titleLineHeight',
  'titleLineClamp',
  'titleTextShadowDirection',
  'titleTextShadowPalette',
  'titleTextShadowPaletteStop',
  'titleTextShadowBlur',
  'titleTextShadowThickness',
  'titleTextShadowOpacity',
  'titleWordBreak',
  'descriptionText',
  'descriptionTextAlign',
  'descriptionLeadingIcon',
  'descriptionTrailingIcon',
  'descriptionFontSize',
  'descriptionFontWeight',
  'descriptionTextPalette',
  'descriptionTextPaletteStop',
  'descriptionLetterSpacing',
  'descriptionLineHeight',
  'descriptionTextShadowDirection',
  'descriptionTextShadowPalette',
  'descriptionTextShadowPaletteStop',
  'descriptionTextShadowBlur',
  'descriptionTextShadowThickness',
  'descriptionTextShadowOpacity',
  'descriptionLineClamp',
  'descriptionWordBreak',
  'bgCardPalette',
  'bgCardPaletteStop',
  'isDisabled',
  'corner',
  'hideOverlineText',
  'hideDescriptionText',
  'cardBorderWidth',
  'cardBorderPalette',
  'cardBorderPaletteStop',
  'titleContainerClasses',
  'iconSize',
  'height',
  'width',
  'bgImage',
  'bgPosition',
  'bgRepeat',
  'bgSize'
];

export const Default: Story = (args) => <ItemCardCallout {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};
Default.args = {};

export const Image = Default.bind({});
Image.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};
Image.args = {
  thumbnailProps: {
    textureImageURL: '/ascnd-library/foreground/photo-inspiration-04.png',
    textureSize: 'cover',
    textureRepeat: 'no-repeat',
    textureBgPosition: 'center',
    textureMixBlend: 'overlay',
    bgPalette: 'transparent',
    bgPaletteStop: 800
  }
};

export const WithOverline = Default.bind({});
WithOverline.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};
WithOverline.args = {
  overlineText: 'Shiny'
};

export const WithLeadingIcon = Default.bind({});
WithLeadingIcon.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};
WithLeadingIcon.args = {
  titleLeadingIcon: 'VideoCameraIcon'
};
