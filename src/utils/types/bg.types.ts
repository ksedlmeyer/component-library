import { UseModifiers } from './modifier.types';
import { Palette, PaletteStop } from './color.types';
import {
  ArbitraryValue,
  CornersLeftRight,
  CornersTB,
  Sides,
  SidesFull
} from './shared.types';

export const BackgroundScroll = ['fixed', 'local', 'scroll'] as const;
export type BackgroundScroll = typeof BackgroundScroll[number];

export const BackgroundClip = ['border', 'padding', 'content', 'text'] as const;
export type BackgroundClip = typeof BackgroundClip[number];

export const BackgroundOrigin = ['border', 'padding', 'content'] as const;
export type BackgroundOrigin = typeof BackgroundOrigin[number];

export const BackgroundPosition = [
  ...SidesFull,
  'center',
  ...CornersLeftRight
] as const;
export type BackgroundPosition = typeof BackgroundPosition[number];

export const BackgroundRepeat = [
  'repeat',
  'no-repeat',
  'repeat-x',
  'repeat-y',
  'repeat-round',
  'repeat-space'
] as const;
export type BackgroundRepeat = typeof BackgroundRepeat[number];

export const BackgroundSize = ['auto', 'cover', 'contain'] as const;
export type BackgroundSize = typeof BackgroundSize[number];

export const BackgroundImage = ['none'] as const;
export type BackgroundImage = typeof BackgroundImage[number];

export const GradientDirection = [...Sides, ...CornersTB] as const;
export type GradientDirection = typeof GradientDirection[number];

export interface BgProps {
  bgScroll?: UseModifiers<BackgroundScroll>;
  bgClip?: UseModifiers<BackgroundClip>;
  bgPalette?: UseModifiers<Palette | 'gradient'>;
  bgPaletteStop?: UseModifiers<PaletteStop>;
  bgOrigin?: UseModifiers<BackgroundOrigin>;
  bgPosition?: UseModifiers<BackgroundPosition | ArbitraryValue>;
  bgRepeat?: UseModifiers<BackgroundRepeat>;
  bgSize?: UseModifiers<BackgroundSize | ArbitraryValue>;
  bgImage?: UseModifiers<BackgroundImage | string>;
  gradientDirection?: UseModifiers<GradientDirection>;
  gradientPaletteStop?: UseModifiers<PaletteStop>;
  gradientFrom?: UseModifiers<Palette | 'gradient'>;
  gradientTo?: UseModifiers<Palette | 'gradient'>;
  gradientVia?: UseModifiers<Palette | 'gradient'>;
  themeInverse?: UseModifiers<boolean>;
  inversePaletteStop?: UseModifiers<PaletteStop>;
}
