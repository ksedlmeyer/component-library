import { Story } from '@storybook/react';
import { Layers } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Layers',
  component: Layers,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

export const Default: Story = (args) => <Layers {...args} />;
Default.args = {
  layers: [
    {
      gradientDirection: 'tr',
      gradientPaletteStop: 500,
      gradientFrom: 'primary',
      gradientVia: 'rose',
      gradientTo: 'secondary',
      opacity: 80,
      blur: 'sm',
      boxShadow: ' 2xl',
      bgBlend: 'darken'
    },
    {
      bgImage: '/ascnd-library/background/texture-cubes.png',
      bgSize: 'auto',
      bgRepeat: 'repeat',
      mixBlend: 'color'
    },
    {
      bgImage: '/ascnd-library/foreground/icons-health/icon-health-01.svg'
    }
  ]
};
Default.parameters = {
  controls: {
    include: ['layers']
  }
};
