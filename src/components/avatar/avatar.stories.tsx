import { Story } from '@storybook/react';
import { Avatar } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Avatar',
  component: Avatar,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

const avatarDefaults = [
  'bgPalette',
  'bgPaletteStop',
  'corner',
  'iconPaletteStop',
  'indicatorStatus',
  'indicatorStatusPalette',
  'indicatorStatusPing',
  'indicatorStatusPosition',
  'overrideMode',
  'placeholderIcon',
  'size',
  'textPalette',
  'textPaletteStop'
];

const avatarInitials = ['initialsText'];
const avatarImage = ['bgImage'];

export const Default: Story = (args) => <Avatar {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...avatarDefaults, ...avatarInitials, ...avatarImage]
  }
};
Default.args = {};

export const Initials = Default.bind({});
Initials.parameters = {
  controls: {
    sort: 'alpha',
    include: [...avatarDefaults, ...avatarInitials]
  }
};
Initials.args = {
  overrideMode: 'initials',
  initialsText: 'SH'
};

export const Image = Default.bind({});
Image.parameters = {
  controls: {
    sort: 'alpha',
    include: [...avatarDefaults, ...avatarImage]
  }
};
Image.args = {
  bgImage: '/ascnd-library/foreground/icons-coffee/Icon-coffee-06.png'
};
