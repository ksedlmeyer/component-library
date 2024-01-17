import { UseModifiers } from './modifier.types';
import {
  AllFractions,
  ArbitraryValue,
  BaseOrZero,
  MinMax,
  OneToSix,
  OneToTwelve,
  RowCol,
  SizingZeroToNinetySix
} from './shared.types';

export const FlexBasis = [
  ...SizingZeroToNinetySix,
  ...AllFractions,
  'full',
  'px',
  'auto'
] as const;
export type FlexBasis =
  | SizingZeroToNinetySix
  | AllFractions
  | 'full'
  | 'px'
  | 'auto';

export const FlexDirection = [...RowCol, 'row-reverse', 'col-reverse'] as const;
export type FlexDirection = typeof FlexDirection[number];

export const FlexWrap = ['wrap', 'nowrap', 'wrap-reverse'] as const;
export type FlexWrap = typeof FlexWrap[number];

export const Flex = ['1', 'auto', 'initial', 'none'] as const;
export type Flex = typeof Flex[number];

export const Order = [...OneToTwelve, 'first', 'last', 'none'] as const;
export type Order = typeof Order[number];

export const GridCols = [...OneToTwelve, 'none'] as const;
export type GridCols = typeof GridCols[number];

const GridColRowOneToSix = [
  'span-1',
  'span-2',
  'span-3',
  'span-4',
  'span-5',
  'span-6',
  'start-1',
  'start-2',
  'start-3',
  'start-4',
  'start-5',
  'start-6',
  'end-1',
  'end-2',
  'end-3',
  'end-4',
  'end-5',
  'end-6'
] as const;
type GridColRowOneToSix = typeof GridColRowOneToSix[number];

const GridColRowOneToTwelve = [
  ...GridColRowOneToSix,
  'span-7',
  'span-8',
  'span-9',
  'span-10',
  'span-11',
  'span-12',
  'start-7',
  'start-8',
  'start-9',
  'start-10',
  'start-11',
  'start-12',
  'end-7',
  'end-8',
  'end-9',
  'end-10',
  'end-11',
  'end-12'
] as const;
type GridColRowOneToTwelve = typeof GridColRowOneToTwelve[number];

export const GridColStart = [
  'auto',
  'span-full',
  'start-auto',
  'start-13',
  'end-auto',
  'end-13',
  ...GridColRowOneToTwelve
] as const;
export type GridColStart = typeof GridColStart[number];

export const GridRows = [...OneToSix, 'none'] as const;
export type GridRows = typeof GridRows[number];

export const GridRowStart = [
  'auto',
  'span-full',
  'start-auto',
  'start-7',
  'end-auto',
  'end-7',
  ...GridColRowOneToSix
] as const;
export type GridRowStart = typeof GridRowStart[number];

export const GridAutoFlow = [
  ...RowCol,
  'dense',
  'row-dense',
  'col-dense'
] as const;
export type GridAutoFlow = typeof GridAutoFlow[number];

export const GridAutoRowCol = ['auto', ...MinMax, 'fr'] as const;
export type GridAutoRowCol = typeof GridAutoRowCol[number];

const xSizingZeroToNinetySix = [
  'x-0',
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
const ySizingZeroToNinetySix = [
  'y-0',
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
export const Gap = [
  ...SizingZeroToNinetySix,
  ...xSizingZeroToNinetySix,
  ...ySizingZeroToNinetySix,
  'px',
  'x-px',
  'y-px'
] as const;
export type Gap = typeof Gap[number];

export const PlaceItems = ['start', 'end', 'center', 'stretch'] as const;
export type PlaceItems = typeof PlaceItems[number];

export const PlaceContent = [
  ...PlaceItems,
  'between',
  'around',
  'evenly'
] as const;
export type PlaceContent = typeof PlaceContent[number];

export const JustifyAlignContent = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'evenly'
] as const;
export type JustifyAlignContent = typeof JustifyAlignContent[number];

export const AlignItems = [...PlaceItems, 'baseline'] as const;
export type AlignItems = typeof AlignItems[number];

export const PlaceSelf = [...PlaceItems, 'auto'] as const;
export type PlaceSelf = typeof PlaceSelf[number];

export const AlignSelf = [...PlaceSelf, 'baseline'] as const;
export type AlignSelf = typeof AlignSelf[number];

export interface FlexGridProps {
  flexBasis?: UseModifiers<FlexBasis | ArbitraryValue>;
  flexDirection?: UseModifiers<FlexDirection>;
  flexWrap?: UseModifiers<FlexWrap>;
  flex?: UseModifiers<Flex | ArbitraryValue>;
  flexGrow?: UseModifiers<BaseOrZero | ArbitraryValue>;
  flexShrink?: UseModifiers<BaseOrZero | ArbitraryValue>;
  order?: UseModifiers<Order | ArbitraryValue>;
  gridCols?: UseModifiers<GridCols | ArbitraryValue>;
  gridColSize?: UseModifiers<GridColStart | GridColStart[] | ArbitraryValue>;
  gridRows?: UseModifiers<GridRows | ArbitraryValue>;
  gridRowSize?: UseModifiers<GridRowStart | GridRowStart[] | ArbitraryValue>;
  gridAutoFlow?: UseModifiers<GridAutoFlow>;
  gridAutoCols?: UseModifiers<GridAutoRowCol | ArbitraryValue>;
  gridAutoRows?: UseModifiers<GridAutoRowCol | ArbitraryValue>;
  gap?: UseModifiers<Gap | ArbitraryValue>;
  justifyContent?: UseModifiers<JustifyAlignContent>;
  justifyItems?: UseModifiers<PlaceItems>;
  justifySelf?: UseModifiers<PlaceSelf>;
  alignContent?: UseModifiers<JustifyAlignContent>;
  alignItems?: UseModifiers<AlignItems>;
  alignSelf?: UseModifiers<AlignSelf>;
  placeContent?: UseModifiers<PlaceContent>;
  placeItems?: UseModifiers<PlaceItems>;
  placeSelf?: UseModifiers<PlaceSelf>;
}
