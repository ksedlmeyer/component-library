import { Palette, PaletteStop } from './color.types';
import { UseModifiers } from './modifier.types';
import { ArbitraryValue } from './shared.types';

export const StrokeWidth = [0, 1, 2] as const;
export type StrokeWidth = typeof StrokeWidth[number];

export interface SVGProps {
  fillPalette?: UseModifiers<Palette | 'gradient'>;
  fillPaletteStop?: UseModifiers<PaletteStop>;
  strokePalette?: UseModifiers<Palette | 'gradient'>;
  strokePaletteStop?: UseModifiers<PaletteStop>;
  strokeWidth?: UseModifiers<StrokeWidth | ArbitraryValue>;
}
