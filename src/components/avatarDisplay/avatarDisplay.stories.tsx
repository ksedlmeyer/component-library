import { Story } from '@storybook/react';
import { AvatarDisplay } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/AvatarDisplay',
  component: AvatarDisplay,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

const avatarDisplayDefaults = [
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
  'avatarOnly',
  'avatarCorner',
  'avatarTextPalette',
  'avatarTextPaletteStop'
];

const avatarTextDefaults = [
  'titleText',
  'subtitleText',
  'titleTextShadowDirection',
  'titleTextShadowBlur',
  'titleTextShadowThickness',
  'titleTextShadowPalette',
  'titleTextShadowPaletteStop',
  'titleTextShadowOpacity',
  'subtitleTextShadowDirection',
  'subtitleTextShadowBlur',
  'subtitleTextShadowThickness',
  'subtitleTextShadowPalette',
  'subtitleTextShadowPaletteStop',
  'subtitleTextShadowOpacity',
  'titleTextPalette',
  'titleTextPaletteStop',
  'subtitleTextPalette',
  'subtitleTextPaletteStop'
];

export const Default: Story = (args) => <AvatarDisplay {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...avatarDisplayDefaults, ...avatarTextDefaults]
  }
};
Default.args = {};

export const Initials = Default.bind({});
Initials.parameters = {
  controls: {
    sort: 'alpha',
    include: [...avatarDisplayDefaults, ...avatarTextDefaults, 'initialsText']
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
    include: [...avatarDisplayDefaults, ...avatarTextDefaults, 'bgImage']
  }
};
Image.args = {
  bgImage: '/ascnd-library/foreground/icons-coffee/Icon-coffee-06.png'
};

export const AvatarOnly = Default.bind({});
AvatarOnly.parameters = {
  controls: {
    sort: 'alpha',
    include: [...avatarDisplayDefaults, 'avatarOnly']
  }
};
AvatarOnly.args = {
  avatarOnly: true
};
