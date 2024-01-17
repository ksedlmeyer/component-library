import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Tabs } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Tabs',
  component: Tabs,
  argTypes: {
    ...Args
  }
};

const tabsDefaults = [
  'tabs',
  'tabsCorner',
  'selectedPalette',
  'selectedPaletteStop',
  'textPalette',
  'textPaletteStop',
  'bgPalette',
  'bgPaletteStop',
  'borderRadius',
  'linkSize',
  'selectedTextPalette',
  'selectedTextPaletteStop'
];

export const Default: Story = (args) => (
  <BrowserRouter>
    <Tabs {...args} />
  </BrowserRouter>
);
Default.args = {
  tabs: [
    {
      label: 'Dashboard',
      selected: true
    },
    {
      label: 'Assigned Learning',
      selected: false
    },
    {
      label: 'In Progress',
      selected: false
    },
    {
      label: 'Saved',
      selected: false
    },
    {
      label: 'Overdue',
      selected: false
    }
  ]
};
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tabsDefaults]
  }
};

export const NoSpace = Default.bind({});
NoSpace.args = {
  borderRadius: 'base',
  bgPalette: 'primary',
  bgPaletteStop: 100,
  selectedPaletteStop: 400,
  textPaletteStop: 700,
  tabsCorner: 'square',
  tabs: [
    {
      label: 'Day',
      selected: false
    },
    {
      label: 'Week',
      selected: false
    },
    {
      label: 'Month',
      selected: true,
      classes: 'border border-primary-200'
    },
    {
      label: 'Quarter',
      selected: false
    },
    {
      label: 'Year',
      selected: false
    }
  ]
};
NoSpace.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tabsDefaults]
  }
};
