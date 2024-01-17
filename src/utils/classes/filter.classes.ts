import cn from 'classnames';
import { Modifiers } from '../helpers';
import { FilterProps } from '../types';

export const FilterClasses = (props: FilterProps) => {
  return cn({
    [`${Modifiers(props.blur, 'blur')}`]: props.blur,
    [`${Modifiers(props.brightness, 'brightness')}`]: props.brightness,
    [`${Modifiers(props.contrast, 'contrast')}`]: props.contrast,
    [`${Modifiers(props.dropShadow, 'drop-shadow')}`]: props.dropShadow,
    [`${Modifiers(props.grayscale, 'grayscale')}`]: props.grayscale,
    [`${Modifiers(props.hueRotate, 'hue-rotate')}`]: props.hueRotate,
    [`${Modifiers(props.invert, 'invert')}`]: props.invert,
    [`${Modifiers(props.saturate, 'saturate')}`]: props.saturate,
    [`${Modifiers(props.sepia, 'sepia')}`]: props.sepia,
    [`${Modifiers(props.backdropBlur, 'backdrop-blur')}`]: props.backdropBlur,
    [`${Modifiers(props.backdropBrightness, 'backdrop-brightness')}`]:
      props.backdropBrightness,
    [`${Modifiers(props.backdropContrast, 'backdrop-contrast')}`]:
      props.backdropContrast,
    [`${Modifiers(props.backdropGrayscale, 'backdrop-grayscale')}`]:
      props.backdropGrayscale,
    [`${Modifiers(props.backdropHueRotate, 'backdrop-hue-rotate')}`]:
      props.backdropHueRotate,
    [`${Modifiers(props.backdropInvert, 'backdrop-invert')}`]:
      props.backdropInvert,
    [`${Modifiers(props.backdropOpacity, 'backdrop-opacity')}`]:
      props.backdropOpacity,
    [`${Modifiers(props.backdropSaturate, 'backdrop-saturate')}`]:
      props.backdropSaturate,
    [`${Modifiers(props.backdropSepia, 'backdrop-sepia')}`]: props.backdropSepia
  });
};
