import { UseModifiers } from './modifier.types';
import { Palette, PaletteStop } from './color.types';
import { ArbitraryValue, Opacity, Shadow } from './shared.types';

export const BackgroundBlend = [
  'normal',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity'
] as const;
export type BackgroundBlend = typeof BackgroundBlend[number];

export const MixBlend = [...BackgroundBlend, 'plus-lighter'] as const;
export type MixBlend = typeof MixBlend[number];

export interface EffectProps {
  boxShadow?: UseModifiers<Shadow | ArbitraryValue>;
  boxShadowPalette?: UseModifiers<Palette | 'gradient'>;
  boxShadowPaletteStop?: UseModifiers<PaletteStop>;
  opacity?: UseModifiers<Opacity | ArbitraryValue>;
  mixBlend?: UseModifiers<MixBlend>;
  bgBlend?: UseModifiers<BackgroundBlend>;
}
