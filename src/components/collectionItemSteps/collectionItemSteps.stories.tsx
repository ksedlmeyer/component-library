import { Story } from '@storybook/react';
import { CollectionItemSteps } from '.';

export default {
  title: 'Backlogged/CollectionItemSteps',
  component: CollectionItemSteps,
  argTypes: {}
};

const itemSteps = [
  {
    titleText: 'Onboarding',
    isDisabled: false,
    isLink: false,
    disabledIcon: `<svg viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
      </svg>`,
    progress: 100,
    completionIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>`
  },
  {
    titleText: 'Home Study',
    isDisabled: false,
    isLink: false,
    disabledIcon: `<svg viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
      </svg>`,
    progress: 50,
    completionIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>`
  },
  {
    titleText: 'Field Experience',
    isDisabled: true,
    isLink: false,
    disabledIcon: `<svg viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
      </svg>`,
    progress: 0,
    completionIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>`
  },
  {
    titleText: 'Resource Mastery',
    isDisabled: true,
    isLink: false,
    disabledIcon: ``,
    progress: 0,
    completionIcon: ``
  },
  {
    titleText: 'Continuous Learning Journey',
    isDisabled: true,
    isLink: false,
    disabledIcon: ``,
    progress: 0,
    completionIcon: ``
  }
];

export const AllProps: Story = (args) => <CollectionItemSteps {...args} />;
AllProps.parameters = {};
AllProps.args = {
  CollectionItemSteps: itemSteps,
  borderWidth: 'base'
};
