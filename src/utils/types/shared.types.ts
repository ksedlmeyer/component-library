export type ArbitraryValue = `[${string}]`;

export const BaseOrZero = ['base', 0] as const;
export type BaseOrZero = typeof BaseOrZero[number];

export const MinMax = ['min', 'max'] as const;
export type MinMax = typeof MinMax[number];

export const RowCol = ['row', 'col'] as const;
export type RowCol = typeof RowCol[number];

export const LR = ['l', 'r'] as const;
export type LR = typeof LR[number];

export const TB = ['t', 'b'] as const;
export type TB = typeof TB[number];

export const XY = ['x', 'y'] as const;
export type XY = typeof XY[number];

export const Sides = [...LR, ...TB] as const;
export type Sides = typeof Sides[number];

export const CornersTB = ['tl', 'tr', 'bl', 'br'] as const;
export type CornersTB = typeof CornersTB[number];

export const CornersLR = ['l-t', 'l-b', 'r-t', 'r-b'] as const;
export type CornersLR = typeof CornersLR[number];

export const SidesXY = [...Sides, ...XY] as const;
export type SidesXY = typeof SidesXY[number];

export const SidesAndCorners = [...Sides, ...CornersTB] as const;
export type SidesAndCorners = typeof SidesAndCorners[number];

export const SidesAndCornersXY = [...SidesXY, ...CornersTB] as const;
export type SidesAndCornersXY = typeof SidesAndCornersXY[number];

export const LeftRight = ['left', 'right'] as const;
export type LeftRight = typeof LeftRight[number];

export const TopBottom = ['top', 'bottom'] as const;
export type TopBottom = typeof TopBottom[number];

export const SidesFull = [...LeftRight, ...TopBottom] as const;
export type SidesFull = typeof SidesFull[number];

export const CornersLeftRight = [
  'left-top',
  'left-bottom',
  'right-top',
  'right-bottom'
] as const;
export type CornersLeftRight = typeof CornersLeftRight[number];

export const CornersTopBottom = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right'
] as const;
export type CornersTopBottom = typeof CornersTopBottom[number];

export const OneToFour = [1, 2, 3, 4] as const;
export type OneToFour = typeof OneToFour[number];
export const OneToSix = [...OneToFour, 5, 6] as const;
export type OneToSix = typeof OneToSix[number];
export const OneToTwelve = [...OneToSix, 7, 8, 9, 10, 11, 12] as const;
export type OneToTwelve = typeof OneToTwelve[number];

export const BaseSizing = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
export type BaseSizing = typeof BaseSizing[number];
export const XSSizing = ['xs', '2xs', '3xs'] as const;
export type XSSizing = typeof XSSizing[number];
export const XLSizing = ['3xl', '4xl', '5xl', '6xl', '7xl'] as const;
export type XLSizing = typeof XLSizing[number];
export const XXLSizing = ['8xl', '9xl'] as const;
export type XXLSizing = typeof XXLSizing[number];

export const RenderedElement = [
  'button',
  'span',
  'a',
  'input',
  'form',
  'table',
  'Link'
] as const;
export type RenderedElement = typeof RenderedElement[number];

export type AnyClassName = string;

export const SizingZeroToNinetySix = [
  ...OneToTwelve,
  0,
  0.5,
  1.5,
  2.5,
  3.5,
  14,
  16,
  20,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  52,
  56,
  60,
  64,
  72,
  80,
  96
] as const;
export type SizingZeroToNinetySix = typeof SizingZeroToNinetySix[number];

export const XSizingZeroToNinetySix = [
  'x-1',
  'x-2',
  'x-3',
  'x-4',
  'x-5',
  'x-6',
  'x-7',
  'x-8',
  'x-9',
  'x-10',
  'x-11',
  'x-12',
  'x-0',
  'x-0.5',
  'x-1.5',
  'x-2.5',
  'x-3.5',
  'x-14',
  'x-16',
  'x-20',
  'x-24',
  'x-28',
  'x-32',
  'x-36',
  'x-40',
  'x-44',
  'x-48',
  'x-52',
  'x-56',
  'x-60',
  'x-64',
  'x-72',
  'x-80',
  'x-96'
] as const;
export type XSizingZeroToNinetySix = typeof XSizingZeroToNinetySix[number];

export const YSizingZeroToNinetySix = [
  'y-1',
  'y-2',
  'y-3',
  'y-4',
  'y-5',
  'y-6',
  'y-7',
  'y-8',
  'y-9',
  'y-10',
  'y-11',
  'y-12',
  'y-0',
  'y-0.5',
  'y-1.5',
  'y-2.5',
  'y-3.5',
  'y-14',
  'y-16',
  'y-20',
  'y-24',
  'y-28',
  'y-32',
  'y-36',
  'y-40',
  'y-44',
  'y-48',
  'y-52',
  'y-56',
  'y-60',
  'y-64',
  'y-72',
  'y-80',
  'y-96'
] as const;
export type YSizingZeroToNinetySix = typeof YSizingZeroToNinetySix[number];

export const FractionsOneToFour = [
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '2/4',
  '3/4'
] as const;
export type FractionsOneToFour = typeof FractionsOneToFour[number];

export const FractionsOneToSix = [
  ...FractionsOneToFour,
  '1/5',
  '1/6',
  '2/5',
  '2/6',
  '3/5',
  '3/6',
  '4/5',
  '4/6',
  '5/6'
] as const;
export type FractionsOneToSix = typeof FractionsOneToSix[number];

export const FractionsForTwelve = [
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12'
] as const;
export type FractionsForTwelve = typeof FractionsForTwelve[number];

export const AllFractions = [
  ...FractionsOneToSix,
  ...FractionsForTwelve
] as const;
export type AllFractions = typeof AllFractions[number];

export const Shadow = [
  'none',
  'sm',
  'base',
  'md',
  'lg',
  'xl',
  '2xl',
  'inner'
] as const;
export type Shadow = typeof Shadow[number];

export const TextSize = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  ...XLSizing,
  ...XXLSizing
] as const;
export type TextSize = typeof TextSize[number];

export const LineClamp = ['1', '2', '3', '4', '5', '6', 'none'] as const;
export type LineClamp = typeof LineClamp[number];

export const Target = ['_blank', '_self', '_parent', '_top'] as const;
export type Target = typeof Target[number] | string;

export const Corners = ['rounded', 'rounded-full', 'square'] as const;
export type Corners = typeof Corners[number];

export const Opacity = [
  0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100
] as const;
export type Opacity = typeof Opacity[number];
