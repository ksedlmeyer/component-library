import { UseModifiers } from './modifier.types';
import {
  ArbitraryValue,
  BaseOrZero,
  BaseSizing,
  Opacity
} from './shared.types';

export const Blur = ['none', 'base', ...BaseSizing, '3xl'] as const;
export type Blur = typeof Blur[number];

export const Brightness = [
  0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200
] as const;
export type Brightness = typeof Brightness[number];

export const Contrast = [0, 50, 75, 100, 125, 150, 200] as const;
export type Contrast = typeof Contrast[number];

export const DropShadow = ['none', 'base', ...BaseSizing] as const;
export type DropShadow = typeof DropShadow[number];

export const HueRotate = [0, 15, 30, 60, 90, 180] as const;
export type HueRotate = typeof HueRotate[number];

export const Saturate = [0, 50, 100, 150, 200] as const;
export type Saturate = typeof Saturate[number];

export const BackdropBlur = ['none', 'base', ...BaseSizing, '3xl'] as const;
export type BackdropBlur = typeof BackdropBlur[number];

export interface FilterProps {
  blur?: UseModifiers<Blur | ArbitraryValue>;
  brightness?: UseModifiers<Brightness | ArbitraryValue>;
  contrast?: UseModifiers<Contrast | ArbitraryValue>;
  dropShadow?: UseModifiers<DropShadow | ArbitraryValue>;
  grayscale?: UseModifiers<BaseOrZero | ArbitraryValue>;
  hueRotate?: UseModifiers<HueRotate | ArbitraryValue>;
  invert?: UseModifiers<BaseOrZero | ArbitraryValue>;
  saturate?: UseModifiers<Saturate | ArbitraryValue>;
  sepia?: UseModifiers<BaseOrZero | ArbitraryValue>;
  backdropBlur?: UseModifiers<BackdropBlur | ArbitraryValue>;
  backdropBrightness?: UseModifiers<Brightness | ArbitraryValue>;
  backdropContrast?: UseModifiers<Contrast | ArbitraryValue>;
  backdropGrayscale?: UseModifiers<BaseOrZero | ArbitraryValue>;
  backdropHueRotate?: UseModifiers<HueRotate | ArbitraryValue>;
  backdropInvert?: UseModifiers<BaseOrZero | ArbitraryValue>;
  backdropOpacity?: UseModifiers<Opacity | ArbitraryValue>;
  backdropSaturate?: UseModifiers<Saturate | ArbitraryValue>;
  backdropSepia?: UseModifiers<BaseOrZero | ArbitraryValue>;
}
