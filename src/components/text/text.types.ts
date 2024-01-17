import { DevProps } from '../dev/dev.types';

export interface TextProps
  extends Omit<
    DevProps,
    | 'aspectRatio'
    | 'container'
    | 'fullscreen'
    | 'grid'
    | 'maxHeight'
    | 'maxWidth'
    | 'minHeight'
    | 'minWidth'
    | 'overflow'
    | 'theme'
  > {
  text?: string;
  ignoreMarkup?: boolean;
}

export const TextShadowObj = {
  none: 0,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 6,
  xl: 8,
  '2xl': 10
};

export const GradientDirectionValues = {
  t: 0,
  tr: 45,
  r: 90,
  br: 135,
  b: 180,
  bl: 225,
  l: 270,
  tl: 315
};

export const ShadowOpacity = {
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  25: 0.25,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  75: 0.75,
  80: 0.8,
  90: 0.9,
  95: 0.95,
  100: 1
};
