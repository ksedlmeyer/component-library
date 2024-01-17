import { Story } from '@storybook/react';
import { Args } from '../../utils/helpers';
import { Alert } from '.';

export default {
  title: 'Completed/Alert',
  component: Alert,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

const alertDefaults = [
  'variant',
  'title',
  'message',
  'isVisible',
  'showButtons',
  'hideX',
  'onDimiss',
  'onCancel',
  'onContinue',
  'corner',
  'width',
  'padding'
];

export const Default: Story = (args) => <Alert {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...alertDefaults]
  }
};
Default.args = {};
