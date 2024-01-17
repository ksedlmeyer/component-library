import { Story } from '@storybook/react';
import { Breadcrumb } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Breadcrumb',
  component: Breadcrumb,
  args: {},
  argTypes: {
    ...Args
  }
};

const breadcrumbDefaults = [
  'breadcrumbs',
  'breadcrumbIcon',
  'seperatorIcon',
  'seperatorIconPaletteStop',
  'textPalette',
  'textPaletteStop',
  'linkSize'
];

export const Default: Story = (args) => <Breadcrumb {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...breadcrumbDefaults]
  }
};
Default.args = {
  backButtonClick: () => {
    console.log('onButtonClick');
  },
  breadcrumbs: [
    {
      label: 'Learning',
      leadingIcon: 'AcademicCapIcon',
      linkURL: '#'
    },
    {
      label: 'University',
      leadingIcon: '',
      linkURL: '#'
    },
    {
      label: 'Non-Brand Modules',
      linkURL: '#'
    },
    {
      label: 'Understanding Clinical Study Design and Results',
      leadingIcon: '',
      linkURL: '#'
    },
    {
      label: 'Overdue',
      leadingIcon: '',
      linkURL: '#',
      isDisabled: true
    }
  ]
};
