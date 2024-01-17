import { Story } from '@storybook/react';
import { VisualizationProgressStatusRadial } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/VisualizationProgressStatusRadial',
  component: VisualizationProgressStatusRadial,
  argTypes: {
    ...Args
  }
};

const indicatorStatusDefaults = [
  'size',
  'completionIcon',
  'frontRadialPalette',
  'frontRadialPaletteStop',
  'backRadialPaletteStop',
  'backRadialPalette',
  'loadAnimation',
  'isDisabled',
  'disabledIcon',
  'progress'
];

export const Default: Story = (args) => (
  <VisualizationProgressStatusRadial {...args} />
);
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...indicatorStatusDefaults]
  }
};
Default.args = {};
