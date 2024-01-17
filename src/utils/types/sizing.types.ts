import { UseModifiers } from './modifier.types';

import {
  ArbitraryValue,
  BaseSizing,
  FractionsForTwelve,
  MinMax,
  SizingZeroToNinetySix,
  XLSizing
} from './shared.types';

export const MaxHeightArray = [
  ...SizingZeroToNinetySix,
  'px',
  'full',
  'screen',
  'min',
  'max',
  'fit'
] as const;

export const Height = [
  ...MaxHeightArray,
  'auto',
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '2/4',
  '3/4',
  '1/5',
  '2/5',
  '3/5',
  '4/5',
  '1/6',
  '2/6',
  '3/6',
  '4/6',
  '5/6'
] as const;
export type Height = typeof Height[number];

export const Width = [...Height, ...FractionsForTwelve] as const;
export type Width = typeof Width[number];

export const MinWidth = [0, 'full', ...MinMax, 'fit'] as const;
export type MinWidth = typeof MinWidth[number];

// "sm" | "md" | "lg" | "xl" | "2xl"
export const MaxWidth = [
  0,
  'none',
  'xs',
  ...BaseSizing,
  ...XLSizing,
  'full',
  ...MinMax,
  'fit',
  'prose',
  'screen-sm',
  'screen-md',
  'screen-lg',
  'screen-xl',
  'screen-2xl'
] as const;
export type MaxWidth = typeof MaxWidth[number];

export const MinHeight = [0, 'full', ...MinMax, 'fit', 'screen'] as const;
export type MinHeight = typeof MinHeight[number];

export const MaxHeight = [
  ...SizingZeroToNinetySix,
  'px',
  'full',
  'screen',
  ...MinMax,
  'fit',
  'auto'
] as const;
export type MaxHeight = typeof MaxHeight[number];

export interface SizingProps {
  width?: UseModifiers<Width | ArbitraryValue>;
  minWidth?: UseModifiers<MinWidth | ArbitraryValue>;
  maxWidth?: UseModifiers<MaxWidth | ArbitraryValue>;
  height?: UseModifiers<Height | ArbitraryValue>;
  minHeight?: UseModifiers<MinHeight | ArbitraryValue>;
  maxHeight?: UseModifiers<MaxHeight | ArbitraryValue>;
}
