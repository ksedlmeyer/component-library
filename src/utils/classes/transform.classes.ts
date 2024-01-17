import cn from 'classnames';
import { Modifiers } from '../helpers';
import { TransformProps } from '../types';

export const TransformClasses = (props: TransformProps) => {
  return cn({
    [`${Modifiers(props.scale, 'scale')}`]: props.scale,
    [`${Modifiers(props.rotate, 'rotate')}`]: props.rotate,
    [`${Modifiers(props.translateElement, 'translate')}`]:
      props.translateElement,
    [`${Modifiers(props.skew, 'skew')}`]: props.skew,
    [`${Modifiers(props.transform, 'transform')}`]: props.transform,
    [`${Modifiers(props.transformOrigin, 'origin')}`]: props.transformOrigin
  });
};
