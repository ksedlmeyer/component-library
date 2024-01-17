import { Story } from '@storybook/react';
import { Toggle, ToggleProps } from '.';
import { Args } from '../../utils/helpers';
import { useState } from 'react';

export default {
  title: 'Completed/Toggle',
  component: Toggle,
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    ...Args
  }
};

const toggleDefaults = [
  'labelPalette',
  'labelPaletteStop',
  'label',
  'labelPosition',
  'tip',
  'required',
  'isToggled',
  'setIsToggled',
  'togglePalette',
  'togglePaletteStop',
  'tipLocation'
];

const ToggleStory = (args: ToggleProps) => {
  const [toggle, setToggle] = useState(false);
  return <Toggle isToggled={toggle} setIsToggled={setToggle} {...args} />;
};

export const Default: Story = (args) => <ToggleStory {...args} />;
Default.args = {};
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...toggleDefaults]
  }
};

export const Label: Story = (args) => <ToggleStory {...args} />;
Label.args = {
  label: 'User Like',
  required: true,
  tip: 'This will allow a user to like this item for later reference.'
};
Label.parameters = {
  controls: {
    sort: 'alpha',
    include: [...toggleDefaults]
  }
};
