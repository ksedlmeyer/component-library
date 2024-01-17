import cn from 'classnames';
import { Modifiers } from '../helpers';
import { LayoutProps } from '../types';

export const LayoutClasses = (props: LayoutProps) => {
  return cn({
    [`${Modifiers(props.aspectRatio, 'aspect')}`]: props.aspectRatio,
    [`${Modifiers(props.bottom, 'bottom')}`]: props.bottom,
    [`${Modifiers(props.boxDecoration, 'box-decoration')}`]:
      props.boxDecoration,
    [`${Modifiers(props.boxSizing, 'box')}`]: props.boxSizing,
    [`${Modifiers(props.breakAfter, 'break-after')}`]: props.breakAfter,
    [`${Modifiers(props.breakBefore, 'break-before')}`]: props.breakBefore,
    [`${Modifiers(props.breakInside, 'break-inside')}`]: props.breakInside,
    [`${Modifiers(props.clear, 'clear')}`]: props.clear,
    [`${Modifiers(props.columns, 'columns')}`]: props.columns,
    [`${Modifiers(props.display, '')}`]: props.display,
    [`${Modifiers(props.float, 'float')}`]: props.float,
    [`${Modifiers(props.inset, 'inset')}`]: props.inset,
    [`${Modifiers(props.isolation, '')}`]: props.isolation,
    [`${Modifiers(props.left, 'left')}`]: props.left,
    [`${Modifiers(props.objectFit, 'object')}`]: props.objectFit,
    [`${Modifiers(props.objectPosition, 'object')}`]: props.objectPosition,
    [`${Modifiers(props.overflow, 'overflow')}`]: props.overflow,
    [`${Modifiers(props.overscroll, 'overscroll')}`]: props.overscroll,
    [`${Modifiers(props.position, '')}`]: props.position,
    [`${Modifiers(props.right, 'right')}`]: props.right,
    [`${Modifiers(props.top, 'top')}`]: props.top,
    [`${Modifiers(props.visibility, '')}`]: props.visibility,
    [`${Modifiers(props.zIndex, 'z')}`]: props.zIndex,
    [`container`]: props.container,
    [`mx-auto`]: props.centerSelf,
    [`w-full h-full`]: props.fullscreen
  });
};
