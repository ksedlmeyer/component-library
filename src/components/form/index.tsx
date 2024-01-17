import { FC, HTMLProps } from 'react';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';

export interface FormProps
  extends DevProps,
    Pick<
      HTMLProps<HTMLFormElement>,
      | 'action'
      | 'autoComplete'
      | 'encType'
      | 'method'
      | 'name'
      | 'noValidate'
      | 'rel'
      | 'target'
    > {}

export const Form: FC<FormProps> = ({
  children,
  classes,
  bgPalette = 'white',
  position = 'relative',
  boxShadow = '2xl',
  centerSelf = true,
  borderRadius = {
    sm: 'lg'
  },
  padding = {
    base: ['x-4', 'y-8'],
    sm: 8
  },
  maxWidth,
  spaceBetween = 'y-6',
  action,
  method,
  autoComplete,
  encType,
  name,
  noValidate,
  rel,
  target,
  onSubmit,
  ...props
}) => {
  const formProps: FormProps = {
    element: 'form',
    bgPalette,
    position,
    boxShadow,
    centerSelf,
    borderRadius,
    padding,
    maxWidth,
    spaceBetween,
    classes,
    action,
    method,
    autoComplete,
    encType,
    name,
    noValidate,
    rel,
    target,
    onSubmit,
    ...props
  };

  return <Dev {...formProps}>{children}</Dev>;
};
