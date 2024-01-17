import { Story } from '@storybook/react';
import { Thumbnail } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Thumbnail',
  component: Thumbnail,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

const include = [
  'bgOpacity',
  'textureImageURL',
  'textureSize',
  'textureRepeat',
  'textureMixBlend',
  'textureBgPosition',
  'textureOpacity',
  'imageURL',
  'imageSize',
  'imageRepeat',
  'imageBgPosition',
  'imageHeight',
  'imageWidth',
  'imageInset',
  'imageOpacity',
  'additionalLayer',
  'width',
  'height',
  'bgPalette',
  'bgPaletteStop',
  'gradientDirection',
  'gradientPaletteStop',
  'gradientFrom',
  'gradientTo',
  'gradientVia',
  'corner'
];

export const Default: Story = (args) => <Thumbnail {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...include]
  }
};
Default.args = {};

export const Decorative = Default.bind({});
Decorative.args = {
  height: 32,
  bgPalette: 'gradient',
  gradientDirection: 'br',
  gradientPaletteStop: 500,
  gradientFrom: 'primary',
  gradientTo: 'emerald',
  textureImageURL: '/ascnd-library/background/texture-cubes.png',
  textureSize: 'auto',
  textureRepeat: 'repeat',
  textureMixBlend: 'normal',
  imageURL: '/ascnd-library/foreground/icons-coffee/Icon-coffee-03.png',
  imageSize: 'contain',
  imageRepeat: 'no-repeat',
  imagePosition: 'center',
  imageHeight: 'auto',
  imageWidth: '1/3',
  imageInset: 4
};
Decorative.parameters = {
  controls: {
    sort: 'alpha',
    include: [...include]
  }
};

export const Photographic = Default.bind({});
Photographic.args = {
  width: '4/5',
  height: '64',
  imageURL: '/ascnd-library/foreground/photo-inspiration-05.png',
  imageWidth: 'full',
  imageHeight: 'full',
  imagePosition: 'center',
  imageSize: 'cover',
  imageRepeat: 'no-repeat',
  imageMargin: 0,
  imageInset: 0
};
Photographic.parameters = {
  controls: {
    sort: 'alpha',
    include: [...include]
  }
};

// "color"
// "screen"
// "normal"
// "multiply"
// "overlay"
// "darken"
// "lighten"
// "color-dodge"
// "color-burn"
// "hard-light"
// "soft-light"
// "difference"
// "exclusion"
// "hue"
// "saturation"
// "luminosity"
// "plus-lighter"
