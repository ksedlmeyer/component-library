import { Story } from '@storybook/react';
import { Input } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

const inputIncludes = [
  'accentPalette',
  'accentPaletteStop',
  'borderPalette',
  'borderPaletteStop',
  'borderRadius',
  'borderSpacing',
  'borderStyle',
  'borderWidth',
  'boxShadow',
  'boxShadowPalette',
  'boxShadowPaletteStop',
  'cursor',
  'fontSize',
  'height',
  'iconPalette',
  'iconPaletteStop',
  'isDisabled',
  'leadingIcon',
  'margin',
  'padding',
  'ringPalette',
  'ringPaletteStop',
  'strokeWidth',
  'textPalette',
  'textPaletteStop',
  'trailingIcon',
  'type',
  'placeholder',
  'width'
];

export const Default: Story = (args) => <Input {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...inputIncludes]
  }
};
Default.args = {};

export const WithIcon = Default.bind({});
WithIcon.args = {
  leadingIcon: 'MagnifyingGlassIcon'
};
WithIcon.parameters = {
  controls: {
    sort: 'alpha',
    include: [...inputIncludes]
  }
};

export const Checkbox = Default.bind({});
Checkbox.args = {
  type: 'checkbox',
  width: 5,
  height: 5,
  padding: 0
};
Checkbox.parameters = {
  controls: {
    sort: 'alpha',
    include: [...inputIncludes]
  }
};

export const Disabled = Default.bind({});
Disabled.args = {
  disabled: true
};
Disabled.parameters = {
  controls: {
    sort: 'alpha',
    include: [...inputIncludes]
  }
};
