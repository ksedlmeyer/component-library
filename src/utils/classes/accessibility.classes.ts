import cn from 'classnames';
import { Modifiers } from '../helpers';
import { AccessibilityProps } from '../types';

export const AccessibilityClasses = (props: AccessibilityProps) => {
  return cn({
    [`${Modifiers(props.screenReaders, '')}`]: props.screenReaders
  });
};
