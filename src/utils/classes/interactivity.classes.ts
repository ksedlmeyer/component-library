import cn from 'classnames';
import { ColorGen, Modifiers, MarginObject, PaddingObject } from '../helpers';
import { InteractivityProps } from '../types';

export const InteractivityClasses = (props: InteractivityProps) => {
  const accentColor = ColorGen(
    props.accentPalette,
    props.accentPaletteStop,
    'accent'
  );
  const caretColor = ColorGen(
    props.caretPalette,
    props.caretPaletteStop,
    'caret'
  );

  return cn({
    [`${accentColor}`]: accentColor,
    [`${Modifiers(props.appearance, 'appearance')}`]: props.appearance,
    [`${Modifiers(props.cursor, 'cursor')}`]: props.cursor,
    [`${caretColor}`]: caretColor,
    [`${Modifiers(props.pointerEvents, 'pointer-events')}`]:
      props.pointerEvents,
    [`${Modifiers(props.resize, 'resize')}`]: props.resize,
    [`${Modifiers(props.scrollBehavior, 'scroll-behavior')}`]:
      props.scrollBehavior,
    [`${Modifiers(props.scrollMargin, 'm', MarginObject)}`]: props.scrollMargin,
    [`${Modifiers(props.scrollPadding, 'p', PaddingObject)}`]:
      props.scrollPadding,
    [`${Modifiers(props.scrollSnapAlign, 'snap')}`]: props.scrollSnapAlign,
    [`${Modifiers(props.scrollSnapStop, 'snap')}`]: props.scrollSnapStop,
    [`${Modifiers(props.scrollSnapType, 'snap')}`]: props.scrollSnapType,
    [`${Modifiers(props.touchAction, 'touch')}`]: props.touchAction,
    [`${Modifiers(props.userSelect, 'select')}`]: props.userSelect,
    [`${Modifiers(props.willChange, 'will-change')}`]: props.willChange
  });
};
