import { Story } from '@storybook/react';
import { Modal, ModalProps } from '.';
import { Args } from '../../utils/helpers';
import { Button } from '../button';
import { useState } from 'react';
import { Alert } from '../alert';

export default {
  title: 'Completed/Modal',
  component: Modal,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

const modalDefaults = [
  'modalHeight',
  'modalWidth',
  'closeButton',
  'closeButtonLocation',
  'modalCorners',
  'isOpen',
  'setIsOpen',
  'backgroundClickClose',
  'opacity'
];

const ModalStory = (args: ModalProps) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Button
        onClick={() => setToggle(!toggle)}
        position={'absolute'}
        label={'Open Modal'}
      />
      <Modal isOpen={toggle} setIsOpen={setToggle} {...args} />;
    </>
  );
};

export const Default: Story = (args) => <ModalStory {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...modalDefaults]
  }
};
Default.args = {
  modalHeight: 16
};

export const Error = Default.bind({});
Error.parameters = {
  controls: {
    sort: 'alpha',
    include: [...modalDefaults]
  }
};
Error.args = {
  children: (
    <Alert
      variant='error'
      showButtons
      message='There was an error completing your task.'
    />
  )
};

export const Success = Default.bind({});
Success.parameters = {
  controls: {
    sort: 'alpha',
    include: [...modalDefaults]
  }
};
Success.args = {
  children: (
    <Alert showButtons message='Your task was completed successfully.' />
  )
};

export const Warning = Default.bind({});
Warning.parameters = {
  controls: {
    sort: 'alpha',
    include: [...modalDefaults]
  }
};
Warning.args = {
  children: (
    <Alert
      variant='warning'
      showButtons
      message='There is something to be aware of with your task.'
    />
  )
};
