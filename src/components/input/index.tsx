import { FC, HTMLProps } from 'react';
import { PaletteStop } from '../../utils/types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Icon, IconProps } from '../icon';

export interface InputProps
  extends Omit<DevProps, 'type' | 'onChange'>,
    Pick<
      HTMLProps<HTMLInputElement>,
      | 'name'
      | 'autoComplete'
      | 'required'
      | 'checked'
      | 'value'
      | 'type'
      | 'onChange'
    > {
  disabled?: boolean;
  leadingIcon?: string;
  trailingIcon?: string;
  iconPalette?: DevProps['textPalette'];
  iconPaletteStop?: DevProps['textPaletteStop'];
}

export const Input: FC<InputProps> = ({
  classes,
  disabled = false,
  borderRadius = 'md',
  margin = 't-1',
  display = 'block',
  width = 'full',
  padding = ['y-2', 'x-3'],
  borderPalette = {
    base: 'gray',
    focus: 'primary'
  },
  borderWidth = 'base',
  borderPaletteStop = {
    base: 300,
    focus: 600
  },
  boxShadow = 'sm',
  type,
  accentPalette = 'primary',
  accentPaletteStop = 500,
  textPalette = type === 'checkbox' ? accentPalette : 'neutral',
  textPaletteStop = {
    base: type === 'checkbox' ? (accentPaletteStop as PaletteStop) : 900,
    placeholder: 400
  },
  iconPalette = 'neutral',
  iconPaletteStop = 900,
  ringPalette = {
    focus: 'primary'
  },
  ringPaletteStop = {
    focus: 600
  },
  fontSize = {
    sm: 'sm'
  },
  ...props
}) => {
  const wrapperProps: DevProps = {
    boxShadow,
    position: 'relative',
    height: 'fit',
    width,
    borderRadius,
    classes,
    ...props
  };
  const containerProps: InputProps = {
    element: 'input',
    accentPalette,
    accentPaletteStop,
    margin,
    display,
    width,
    padding:
      props.leadingIcon && props.leadingIcon !== ''
        ? ['y-2', 'x-3', 'l-8']
        : padding,
    borderPalette,
    borderPaletteStop,
    borderWidth,
    textPalette,
    textPaletteStop,
    ringPalette,
    ringPaletteStop,
    fontSize,
    name: props.name,
    value: props.value,
    autoComplete: props.autoComplete,
    required: props.required,
    checked: props.checked,
    borderRadius,
    onChange: props.onChange,
    onClick: props.onClick,
    cursor: disabled ? 'not-allowed' : 'auto',
    bgPalette: disabled ? 'neutral' : 'white',
    bgPaletteStop: 100,
    classes
  };
  const trailingIconContainerProps: DevProps = {
    inset: 'y-0',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    padding: 'r-3',
    classes: 'right-0'
  };
  const trailingIconProps: IconProps = {
    svg: props.trailingIcon,
    width: 5,
    height: 5,
    defaultPalette: iconPalette,
    defaultPaletteStop: iconPaletteStop
  };
  const leadingIconContainerProps: DevProps = {
    inset: 'y-0',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    padding: 'l-3',
    classes: 'left-0'
  };
  const leadingIconProps: IconProps = {
    svg: props.leadingIcon,
    width: 5,
    height: 5,
    defaultPalette: iconPalette,
    defaultPaletteStop: iconPaletteStop
  };

  return (
    <Dev {...wrapperProps}>
      {props.leadingIcon && (
        <Dev {...leadingIconContainerProps}>
          <Icon {...leadingIconProps} />
        </Dev>
      )}
      <Dev
        id={props.id}
        type={type}
        disabled={disabled}
        placeholder={props.placeholder}
        {...containerProps}
      />
      {props.trailingIcon && (
        <Dev {...trailingIconContainerProps}>
          <Icon {...trailingIconProps} />
        </Dev>
      )}
    </Dev>
  );
};
