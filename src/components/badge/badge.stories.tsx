import { Story } from '@storybook/react';
import { Badge } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Badge',
  component: Badge,
  argTypes: {
    ...Args
  },
  args: {
    label: 'Badge'
  }
};

const badgeDefaults = [
  'size',
  'indicatorStatus',
  'indicatorStatusPing',
  'corner',
  'label',
  'bgPalette',
  'bgPaletteStop',
  'textPaletteStop',
  'lineClamp',
  'fontWeight',
  'leadingIcon',
  'leadingIconType',
  'trailingIcon',
  'trailingIconType'
];

export const Default: Story = (args) => <Badge {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...badgeDefaults]
  }
};
Default.args = {};

export const IndicatorStatus = Default.bind({});
IndicatorStatus.parameters = {
  controls: {
    sort: 'alpha',
    include: [...badgeDefaults]
  }
};
IndicatorStatus.args = {
  indicatorStatus: true
};
