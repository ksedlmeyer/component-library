import cn from 'classnames';
import { Modifiers, MarginObject, PaddingObject } from '../helpers';
import { SpacingProps } from '../types';

export const SpacingClasses = (props: SpacingProps) => {
  return cn({
    [`${Modifiers(props.margin, 'm', MarginObject)}`]: props.margin,
    [`${Modifiers(props.padding, 'p', PaddingObject)}`]: props.padding,
    [`${Modifiers(props.spaceBetween, 'space')}`]: props.spaceBetween
  });
};
