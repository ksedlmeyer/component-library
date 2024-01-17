import { Story } from '@storybook/react';
import { ItemStep } from '.';

export default {
  title: 'Backlogged/ItemStep',
  component: ItemStep,
  parameters: {
    controls: { expanded: true }
  },
  args: {
    children: 1
  }
};

export const AllProps: Story = (args) => <ItemStep {...args} />;
AllProps.parameters = {};
AllProps.args = {
  themeInverse: false
};

export const InProgress = AllProps.bind({});
InProgress.parameters = {};
InProgress.args = {
  visualProgressRadial: true,
  progress: 20,
  completionIcon:
    '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>',
  overlineText: 'Phase 1'
};

export const Completed = AllProps.bind({});
Completed.parameters = {};
Completed.args = {
  themeInverse: true,
  visualProgressRadial: true,
  progress: 100,
  completionIcon:
    '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>',
  overlineText: 'Phase 1'
};
