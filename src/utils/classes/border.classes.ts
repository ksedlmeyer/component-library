import cn from 'classnames';
import { ColorGen, Modifiers } from '../helpers';
import { BorderProps } from '../types';

export const BorderClasses = (props: BorderProps) => {
  const borderColor = ColorGen(
    props.borderPalette,
    props.borderPaletteStop,
    'border'
  );
  const divideColor = ColorGen(
    props.dividePalette,
    props.dividePaletteStop,
    'divide'
  );
  const outlineColor = ColorGen(
    props.outlinePalette,
    props.outlinePaletteStop,
    'outline'
  );
  const ringOffsetColor = ColorGen(
    props.ringOffsetPalette,
    props.ringOffsetPaletteStop,
    'ring-offset'
  );
  const ringColor = ColorGen(props.ringPalette, props.ringPaletteStop, 'ring');

  return cn({
    [`${Modifiers(props.borderRadius, 'rounded')}`]: props.borderRadius,
    [`${Modifiers(props.borderStyle, 'border')}`]: props.borderStyle,
    [`${Modifiers(props.borderWidth, 'border')}`]: props.borderWidth,
    [`${Modifiers(props.divideStyle, 'divide')}`]: props.divideStyle,
    [`${Modifiers(props.divideWidth, 'divide')}`]: props.divideWidth,
    [`${Modifiers(props.outlineOffset, 'outline-offset')}`]:
      props.outlineOffset,
    [`${Modifiers(props.outlineStyle, 'outline')}`]: props.outlineStyle,
    [`${Modifiers(props.outlineWidth, 'outline')}`]: props.outlineWidth,
    [`${Modifiers(props.ringOffsetWidth, 'ring-offset')}`]:
      props.ringOffsetWidth,
    [`${Modifiers(props.ringWidth, 'ring')}`]: props.ringWidth,
    [`${borderColor}`]: borderColor,
    [`${divideColor}`]: divideColor,
    [`${outlineColor}`]: outlineColor,
    [`${ringColor}`]: true,
    [`${ringOffsetColor}`]: ringOffsetColor
  });
};
