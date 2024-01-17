import { Story } from '@storybook/react';
import { RadialSpinner } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/RadialSpinner',
  component: RadialSpinner,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

const radialSpinnerDefaults = [
  'size',
  'frontRadialPalette',
  'frontRadialPaletteStop',
  'backRadialPaletteStop',
  'backRadialPalette'
];

export const Default: Story = (args) => <RadialSpinner {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...radialSpinnerDefaults]
  }
};
Default.args = {};
