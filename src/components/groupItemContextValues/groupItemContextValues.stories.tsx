import { Story } from '@storybook/react';
import { GroupItemContextValues } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/GroupItemContextValues',
  component: GroupItemContextValues,
  argTypes: {
    ...Args
  }
};

const contextValueGroupDefaults = [
  'contextValues',
  'frontRadialPalette',
  'frontRadialPaletteStop',
  'backRadialPalette',
  'backRadialPaletteStop',
  'backRadialPaletteStopInverse',
  'separatorIcon',
  'size',
  'lineClamp'
];

export const Default: Story = (args) => <GroupItemContextValues {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...contextValueGroupDefaults]
  }
};
Default.args = {
  contextValues: [
    {
      label: 'Primary Label',
      leadingIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>',
      progress: 0,
      visualProgressRadial: false
    },
    {
      label: 'No Leadng Icon',
      leadingIcon: '',
      progress: 0,
      visualProgressRadial: false
    },
    {
      label: 'Primary Label',
      leadingIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
    </svg>`,
      progress: 0,
      visualProgressRadial: false
    },
    {
      label: 'Progress Label',
      leadingIcon: '',
      progress: 100,
      visualProgressRadial: true
    },
    {
      label: 'Progress Not Started',
      leadingIcon: '',
      progress: 0,
      visualProgressRadial: false
    },
    {
      label: '',
      leadingIcon: '',
      progress: 44,
      visualProgressRadial: true,
      contextValueProps: {
        showProgress: true
      }
    }
  ]
};
