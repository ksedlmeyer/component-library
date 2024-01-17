import { Story } from '@storybook/react';
import { IndicatorStatus } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/IndicatorStatus',
  component: IndicatorStatus,
  argTypes: {
    ...Args
  }
};

export const Default: Story = (args) => <IndicatorStatus {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: ['bgPalette', 'bgPaletteStop', 'ping', 'size']
  }
};
Default.args = {};

export const Ping = Default.bind({});
Ping.args = {
  ping: true
};
Ping.parameters = {
  controls: {
    sort: 'alpha',
    include: ['bgPalette', 'bgPaletteStop', 'ping', 'size']
  }
};
