import { Story } from '@storybook/react';
import { Background } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Background',
  component: Background,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

const bgDefaults = [
  'bgScroll',
  'borderPalette',
  'borderPaletteStop',
  'borderRadius',
  'borderStyle',
  'borderWidth',
  'height',
  'opacity',
  'width'
];

const bgColorDefaults = ['bgPalette', 'bgPaletteStop'];

const bgImageDefaults = ['bgImage', 'bgPosition', 'bgRepeat', 'bgSize'];

const bgGradientDefaults = [
  'gradientDirection',
  'gradientFrom',
  'gradientPaletteStop',
  'gradientTo',
  'gradientVia'
];

export const Default: Story = (args) => <Background {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [
      ...bgDefaults,
      ...bgColorDefaults,
      ...bgImageDefaults,
      ...bgGradientDefaults
    ]
  }
};

export const Color = Default.bind({});
Color.args = {
  bgPalette: 'indigo',
  bgPaletteStop: 600
};
Color.parameters = {
  docs: {
    storyDescription: `By Default the background color is set to the primary color with a palette stop of 500.`
  },
  controls: {
    sort: 'alpha',
    include: [...bgDefaults, ...bgColorDefaults]
  }
};

export const Gradient = Default.bind({});
Gradient.args = {
  gradientDirection: 'br',
  gradientPaletteStop: 500,
  gradientFrom: 'rose',
  gradientVia: 'purple',
  gradientTo: 'emerald'
};
Gradient.parameters = {
  docs: {
    storyDescription: `Gradient can be set by passing in gradientDirection, from, via, and to colors. The default background color is used as the background until gradient colors are set.`
  },
  controls: {
    sort: 'alpha',
    include: [...bgDefaults, ...bgGradientDefaults]
  }
};

export const Image = Default.bind({});
Image.args = {
  bgImage: '/ascnd-library/foreground/photo-inspiration-01.png',
  bgSize: 'cover'
};
Image.parameters = {
  docs: {
    storyDescription: `Background palette is used unless a url is passed in.`
  },
  controls: {
    sort: 'alpha',
    include: [...bgDefaults, ...bgImageDefaults]
  }
};
