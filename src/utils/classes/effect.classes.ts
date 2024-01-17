import cn from 'classnames';
import { ColorGen, Modifiers } from '../helpers';
import { EffectProps } from '../types';

export const EffectClasses = (props: EffectProps) => {
  const boxShadowColor = ColorGen(
    props.boxShadowPalette,
    props.boxShadowPaletteStop,
    'shadow'
  );

  return cn({
    [`${Modifiers(props.boxShadow, 'shadow')}`]: props.boxShadow,
    [`${boxShadowColor}`]: boxShadowColor,
    [`${Modifiers(props.opacity, 'opacity')}`]: props.opacity,
    [`${Modifiers(props.mixBlend, 'mix-blend')}`]: props.mixBlend,
    [`${Modifiers(props.bgBlend, 'bg-blend')}`]: props.bgBlend
  });
};
