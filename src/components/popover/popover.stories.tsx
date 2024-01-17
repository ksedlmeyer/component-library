import { Story } from '@storybook/react';
import { Args } from '../../utils/helpers';
import { Popover, PopoverProps } from '.';
import { useState } from 'react';
import { Button } from '../button';

export default {
  title: 'Completed/Popover',
  component: Popover,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

const popoverDefaults = [
  'isOpen',
  'backgroundClickClose',
  'setIsOpen',
  'opacity',
  'children',
  'title',
  'description',
  'bgPalette',
  'bgPaletteStop',
  'headerPalette',
  'headerPaletteStop',
  'titlePalette',
  'titlePaletteStop',
  'descriptionPalette',
  'descriptionPaletteStop',
  'closeButton',
  'closeButtonLocation',
  'onCancel',
  'onSave',
  'showButtonFooter',
  'top',
  'right',
  'left'
];

const PopoverStory = (args: PopoverProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Button
        onClick={() => setToggle(!toggle)}
        position={'absolute'}
        label={'Open Popover'}
      />
      <Popover isOpen={toggle} setIsOpen={setToggle} {...args} />;
    </>
  );
};

export const Default: Story = (args) => <PopoverStory {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...popoverDefaults]
  }
};
Default.args = {
  description: 'This is a popover.'
};
