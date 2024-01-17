import { Story } from '@storybook/react';
import { Button } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Button',
  component: Button,
  args: {
    label: 'Label'
  },
  argTypes: {
    ...Args
  }
};

const buttonDefaults = [
  'focusRing',
  'isDisabled',
  'btnPalette',
  'btnPaletteStop',
  'leadingIcon',
  'leadingIconType',
  'trailingIcon',
  'trailingIconType',
  'label',
  'selected',
  'btnSize',
  'iconSize',
  'iconOnly',
  'indicatorStatus',
  'indicatorStatusPalette',
  'indicatorStatusPosition',
  'indicatorStatusPing',
  'indicatorStatusSize',
  'corner',
  'strokePalette',
  'strokePaletteStop',
  'boxShadow',
  'fontSize',
  'fontWeight',
  'themeInverse',
  'inversePaletteStop'
];

export const Default: Story = (args) => <Button {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...buttonDefaults]
  }
};
Default.args = {};

export const Secondary = Default.bind({});
Secondary.parameters = {
  controls: {
    sort: 'alpha',
    include: [...buttonDefaults]
  }
};
Secondary.args = {
  bgPalette: 'secondary'
};

export const Warning = Default.bind({});
Warning.parameters = {
  controls: {
    sort: 'alpha',
    include: [...buttonDefaults]
  }
};
Warning.args = {
  bgPalette: 'warning'
};

export const Gradient = Default.bind({});
Gradient.parameters = {
  controls: {
    sort: 'alpha',
    include: [...buttonDefaults]
  }
};
Gradient.args = {
  gradientDirection: 'br',
  gradientPaletteStop: 500,
  gradientFrom: {
    base: 'rose',
    hover: 'emerald'
  },
  gradientVia: {
    base: 'purple',
    hover: 'indigo'
  },
  gradientTo: {
    base: 'emerald',
    hover: 'rose'
  }
};

export const Custom = Default.bind({});
Custom.parameters = {
  controls: {
    sort: 'alpha',
    include: [...buttonDefaults, 'classes']
  }
};
Custom.args = {
  classes: 'px-10 py-10 bg-primary-300 hover:bg-primary-500 text-black'
};

export const IconOnly = Default.bind({});
IconOnly.parameters = {
  controls: {
    sort: 'alpha',
    include: [...buttonDefaults]
  }
};
IconOnly.args = {
  label: '',
  bgPalette: 'transparent',
  textPalette: 'warning',
  textPaletteStop: 500,
  boxShadow: 'none',
  iconOnly: true,
  btnSize: 'icon-only',
  leadingIcon: 'BookmarkIcon',
  indicatorStatusPalette: 'yellow'
};
