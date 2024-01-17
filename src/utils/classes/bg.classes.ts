import cn from 'classnames';
import { ColorGenInverse, Modifiers } from '../helpers';
import { BgProps } from '../types';

export const BgClasses = (props: BgProps) => {
  const bgColor = ColorGenInverse(
    props.bgPalette,
    props.bgPaletteStop,
    'bg',
    props.themeInverse,
    props.inversePaletteStop
  );

  const gradientFrom = ColorGenInverse(
    props.gradientFrom,
    props.gradientPaletteStop,
    'from',
    props.themeInverse,
    props.inversePaletteStop
  );
  const gradientTo = ColorGenInverse(
    props.gradientTo,
    props.gradientPaletteStop,
    'to',
    props.themeInverse,
    props.inversePaletteStop
  );
  const gradientVia = ColorGenInverse(
    props.gradientVia,
    props.gradientPaletteStop,
    'via',
    props.themeInverse,
    props.inversePaletteStop
  );

  return cn({
    [`${Modifiers(props.bgScroll, 'bg')}`]: props.bgScroll,
    [`${Modifiers(props.bgClip, 'bg-clip')}`]: props.bgClip,
    [`${bgColor}`]: bgColor,
    [`${Modifiers(props.bgOrigin, 'bg-origin')}`]: props.bgOrigin,
    [`${Modifiers(props.bgPosition, 'bg')}`]: props.bgPosition,
    [`${Modifiers(props.bgRepeat, 'bg')}`]: props.bgRepeat,
    [`${Modifiers(props.bgSize, 'bg')}`]: props.bgSize,
    [`${Modifiers(props.bgImage, 'bg')}`]: props.bgImage,
    [`${props.bgImage === 'none' ? `bg-none` : `bg-[url(${props.bgImage})]`}`]:
      props.bgImage,
    [`${Modifiers(props.gradientDirection, 'bg-gradient-to')}`]:
      props.gradientDirection,
    [`${gradientFrom}`]: gradientFrom,
    [`${gradientTo}`]: gradientTo,
    [`${gradientVia}`]: gradientVia
  });
};
