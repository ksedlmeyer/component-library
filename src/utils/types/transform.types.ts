import { UseModifiers } from './modifier.types';
import {
  ArbitraryValue,
  CornersTopBottom,
  SidesFull,
  XSizingZeroToNinetySix,
  YSizingZeroToNinetySix
} from './shared.types';

const Percentage = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150] as const;
type Percentage = typeof Percentage[number];

export const Scale = [
  ...Percentage,
  'x-0',
  'x-50',
  'x-75',
  'x-90',
  'x-95',
  'x-100',
  'x-105',
  'x-110',
  'x-125',
  'x-150',
  'y-0',
  'y-50',
  'y-75',
  'y-90',
  'y-95',
  'y-100',
  'y-105',
  'y-110',
  'y-125',
  'y-150'
] as const;
export type Scale = typeof Scale[number];

export const Rotate = [0, 1, 2, 3, 6, 12, 45, 90, 180] as const;
export type Rotate = typeof Rotate[number];

// "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4"
export const Translate = [
  ...XSizingZeroToNinetySix,
  ...YSizingZeroToNinetySix,
  'x-1/2',
  'x-1/3',
  'x-2/3',
  'x-1/4',
  'x-2/4',
  'x-3/4',
  'y-1/2',
  'y-1/3',
  'y-2/3',
  'y-1/4',
  'y-2/4',
  'y-3/4',
  'x-full',
  'y-full'
] as const;
export type Translate = typeof Translate[number];

export const Skew = [
  'x-0',
  'y-0',
  'x-1',
  'x-2',
  'x-3',
  'x-6',
  'x-12',
  'y-1',
  'y-2',
  'y-3',
  'y-6',
  'y-12'
] as const;
export type Skew = typeof Skew[number];

export const Transform = ['none', 'gpu'] as const;
export type Transform = typeof Transform[number];

export const TransformOrigin = [
  'center',
  ...SidesFull,
  ...CornersTopBottom
] as const;
export type TransformOrigin = typeof TransformOrigin[number];

export interface TransformProps {
  scale?: UseModifiers<Scale | Scale[] | ArbitraryValue>;
  rotate?: UseModifiers<Rotate | ArbitraryValue>;
  translateElement?: UseModifiers<Translate | Translate[] | ArbitraryValue>;
  skew?: UseModifiers<Skew | Skew[] | ArbitraryValue>;
  transform?: UseModifiers<Transform | ArbitraryValue>;
  transformOrigin?: UseModifiers<TransformOrigin | ArbitraryValue>;
}
