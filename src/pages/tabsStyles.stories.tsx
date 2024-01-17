import { Story } from '@storybook/react';
import { Tabs } from '../components/tabs';

export default {
  title: 'Pages/TabsStyles',
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  }
};

const tabs = [
  {
    label: 'Dashboard',
    selected: true,
    leadingIcon: ''
  },
  {
    label: 'Assigned Learning',
    selected: false,
    leadingIcon: ''
  },
  {
    label: 'In Progress',
    selected: false,
    leadingIcon: ''
  },
  {
    label: 'Saved',
    selected: false,
    leadingIcon: ''
  },
  {
    label: 'Overdue',
    selected: false,
    leadingIcon: ''
  }
];

export const TemplateA: Story = () => <Tabs tabs={tabs} />;

export const TemplateB: Story = () => (
  <Tabs
    tabs={tabs}
    bgPalette='primary'
    bgPaletteStop={100}
    borderRadius='base'
    selectedPalette='primary'
    selectedPaletteStop={400}
    selectedTextPaletteStop={100}
  />
);
