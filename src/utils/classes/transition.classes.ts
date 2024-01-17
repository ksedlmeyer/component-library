import cn from 'classnames';
import { Modifiers } from '../helpers';
import { TransitionProps } from '../types';

export const TransitionClasses = (props: TransitionProps) => {
  return cn({
    [`${Modifiers(props.transitionProperty, 'transition')}`]:
      props.transitionProperty,
    [`${Modifiers(props.transitionDuration, 'duration')}`]:
      props.transitionDuration,
    [`${Modifiers(props.transitionEase, 'ease')}`]: props.transitionEase,
    [`${Modifiers(props.transitionDelay, 'delay')}`]: props.transitionDelay,
    [`${Modifiers(props.animation, 'animate')}`]: props.animation
  });
};
