import { UseModifiers } from './modifier.types';
import {
  ArbitraryValue,
  BaseSizing,
  SidesAndCornersXY,
  SidesXY,
  XY
} from './shared.types';
import { Palette, PaletteStop } from './color.types';
import { CombineArrs } from '../helpers/arrays';

export const { array: BorderPalette, obj: BorderPaletteObj } = CombineArrs(
  Palette,
  SidesXY
);

export type BorderPalette = Palette | `${SidesXY}-${Palette}`;

export const BaseBorderRadius = ['none', ...BaseSizing, '3xl', 'full'] as const;
export type BaseBorderRadius = typeof BaseBorderRadius[number];

export const { array: BorderRadiusArr, obj: BaseObj } = CombineArrs(
  BaseBorderRadius,
  SidesAndCornersXY
);

export const BorderRadius = ['base', ...SidesAndCornersXY, ...BaseBorderRadius];

export type BorderRadius =
  | 'base'
  | BaseBorderRadius
  | SidesAndCornersXY
  | `${SidesAndCornersXY}-${BaseBorderRadius}`;

export const BorderStyle = [
  'none',
  'solid',
  'dashed',
  'dotted',
  'double',
  'hidden'
] as const;
export type BorderStyle = typeof BorderStyle[number];

export const BaseBorderWidth = [0, 2, 4, 8] as const;
export type BaseBorderWidth = typeof BaseBorderWidth[number];

export const { array: BorderWidthSides } = CombineArrs(
  BaseBorderWidth,
  SidesXY
);

export const BorderWidth = ['base', ...BorderWidthSides, ...SidesXY] as const;
export type BorderWidth =
  | 'base'
  | BaseBorderWidth
  | SidesXY
  | `${SidesXY}-${BaseBorderWidth}`;

export const { array: XYBaseBorderWidth } = CombineArrs(
  BaseBorderWidth,
  XY,
  undefined,
  false
);
export const { array: ReverseBaseBorderWidth } = CombineArrs(
  ['reverse'],
  XY,
  undefined,
  false
);

export const DivideWidth = [
  ...XY,
  ...XYBaseBorderWidth,
  ...ReverseBaseBorderWidth
] as const;
export type DivideWidth = XY | `${XY}-${BaseBorderWidth}` | `${XY}-reverse`;

export const OutlineStyle = ['base', ...BorderStyle] as const;
export type OutlineStyle = typeof OutlineStyle[number];

export const RingWidth = ['base', ...BaseBorderWidth, 'inset'] as const;
export type RingWidth = typeof RingWidth[number];

export interface BorderProps {
  borderPalette?: UseModifiers<BorderPalette | 'gradient'>;
  borderPaletteStop?: UseModifiers<PaletteStop>;
  borderRadius?: UseModifiers<BorderRadius | BorderRadius[] | ArbitraryValue>;
  borderStyle?: UseModifiers<BorderStyle>;
  borderWidth?: UseModifiers<BorderWidth | ArbitraryValue>;
  dividePalette?: UseModifiers<Palette | 'gradient'>;
  dividePaletteStop?: UseModifiers<PaletteStop>;
  divideStyle?: UseModifiers<BorderStyle>;
  divideWidth?: UseModifiers<DivideWidth | ArbitraryValue>;
  outlineOffset?: UseModifiers<BaseBorderWidth | ArbitraryValue>;
  outlinePalette?: UseModifiers<Palette | 'gradient'>;
  outlinePaletteStop?: UseModifiers<PaletteStop>;
  outlineStyle?: UseModifiers<OutlineStyle>;
  outlineWidth?: UseModifiers<BaseBorderWidth | ArbitraryValue>;
  ringOffsetPalette?: UseModifiers<Palette | 'gradient'>;
  ringOffsetPaletteStop?: UseModifiers<PaletteStop>;
  ringOffsetWidth?: UseModifiers<BaseBorderWidth | ArbitraryValue>;
  ringPalette?: UseModifiers<Palette | 'gradient'>;
  ringPaletteStop?: UseModifiers<PaletteStop>;
  ringWidth?: UseModifiers<RingWidth | ArbitraryValue>;
}
