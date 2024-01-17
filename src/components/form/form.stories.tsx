import { Story } from '@storybook/react';
import { Form } from '.';
import { Button, Container, DevProps, Input, Label } from '..';
import { Args } from '../../utils/helpers';

export default {
  title: 'Dev-Component/Form',
  component: Form,
  argTypes: {
    ...Args
  }
};

const formDefaults = [
  'bgPalette',
  'bgPaletteStop',
  'borderRadius',
  'boxShadow',
  'width',
  'height',
  'padding',
  'margin',
  'classes',
  'position',
  'centerSelf',
  'spaceBetween'
];

export const Default: Story = (args) => <Form {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...formDefaults]
  }
};
Default.args = {};

const FormDemo = (args: DevProps) => {
  return (
    <Form onSubmit={() => console.log('submit')} {...args}>
      <Container display='block'>
        <Label
          textPalette='gray'
          textPaletteStop={700}
          fontWeight='medium'
          fontSize='sm'>
          Username
        </Label>
        <Input
          id='username'
          name='username'
          type='text'
          autoComplete='username'
          required
        />
      </Container>
      <Container display='block'>
        <Label
          textPalette='gray'
          textPaletteStop={700}
          fontWeight='medium'
          fontSize='sm'>
          Password
        </Label>
        <Input
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          required
        />
      </Container>
      <Button
        type='submit'
        label='Sign in'
        width='full'
        display='flex'
        justifyContent='center'
        padding={['x-4', 'y-2']}
        borderWidth='base'
        borderPalette='transparent'
        corner='rounded'
        boxShadow='sm'
        fontSize='sm'
        fontWeight='medium'
        textPalette='white'
        bgPalette='primary'
        bgPaletteStop={{
          base: 700,
          hover: 800
        }}
        focusRing={true}
        ringPaletteStop={{
          focus: 500
        }}
      />
    </Form>
  );
};

export const LoginFormDemo: Story = (args) => <FormDemo {...args} />;
LoginFormDemo.args = {
  maxWidth: '2xl'
};
