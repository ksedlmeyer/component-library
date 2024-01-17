import cn from 'classnames';
import { Modifiers } from '../helpers';
import { SizingProps } from '../types';

export const SizingClasses = (props: SizingProps) => {
  return cn({
    [`${Modifiers(props.width, 'w')}`]: props.width,
    [`${Modifiers(props.minWidth, 'min-w')}`]: props.minWidth,
    [`${Modifiers(props.maxWidth, 'max-w')}`]: props.maxWidth,
    [`${Modifiers(props.height, 'h')}`]: props.height,
    [`${Modifiers(props.minHeight, 'min-h')}`]: props.minHeight,
    [`${Modifiers(props.maxHeight, 'max-h')}`]: props.maxHeight
  });
};
