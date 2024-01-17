import { UseModifiers } from './modifier.types';
import {
  ArbitraryValue,
  BaseSizing,
  CornersLeftRight,
  FractionsOneToFour,
  LeftRight,
  OneToTwelve,
  SidesFull,
  SizingZeroToNinetySix,
  XLSizing,
  XSizingZeroToNinetySix,
  XSSizing,
  YSizingZeroToNinetySix
} from './shared.types';

export const AspectRatio = ['auto', 'square', 'video'] as const;
export type AspectRatio = typeof AspectRatio[number];

export const Columns = [
  ...OneToTwelve,
  'auto',
  ...XSSizing,
  ...BaseSizing,
  ...XLSizing
] as const;
export type Columns = typeof Columns[number];

export const BreakType = [
  'auto',
  'avoid',
  'all',
  'avoid-page',
  'page',
  ...LeftRight,
  'column'
] as const;
export type BreakType = typeof BreakType[number];

export const BreakInside = [
  'auto',
  'avoid',
  'avoid-page',
  'avoid-column'
] as const;
export type BreakInside = typeof BreakInside[number];

export const BoxDecoration = ['clone', 'slice'] as const;
export type BoxDecoration = typeof BoxDecoration[number];

export const BoxSizing = ['border', 'content'] as const;
export type BoxSizing = typeof BoxSizing[number];

export const Display = [
  'block',
  'inline-block',
  'inline',
  'flex',
  'inline-flex',
  'table',
  'inline-table',
  'table-caption',
  'table-cell',
  'table-column',
  'table-column-group',
  'table-footer-group',
  'table-header-group',
  'table-row-group',
  'table-row',
  'flow-root',
  'grid',
  'inline-grid',
  'contents',
  'list-item',
  'hidden'
] as const;
export type Display = typeof Display[number];

export const Float = [...LeftRight, 'none'] as const;
export type Float = typeof Float[number];

export const Clear = [...LeftRight, 'both', 'none'] as const;
export type Clear = typeof Clear[number];

export const Isolation = ['isolate', 'isolation-auto'] as const;
export type Isolation = typeof Isolation[number];

export const ObjectFit = [
  'contain',
  'cover',
  'fill',
  'none',
  'scale-down'
] as const;
export type ObjectFit = typeof ObjectFit[number];

export const ObjectPosition = [
  ...SidesFull,
  'center',
  ...CornersLeftRight
] as const;
export type ObjectPosition = typeof ObjectPosition[number];

const OverflowBase = ['auto', 'hidden', 'clip', 'visible', 'scroll'] as const;
type OverflowBase = typeof OverflowBase[number];

export const Overflow = [
  ...OverflowBase,
  'x-auto',
  'x-hidden',
  'x-clip',
  'x-visible',
  'x-scroll',
  'y-auto',
  'y-hidden',
  'y-clip',
  'y-visible',
  'y-scroll'
] as const;
export type Overflow = typeof Overflow[number];

const OverscrollBase = ['auto', 'contain', 'none'] as const;
type OverscrollBase = typeof OverscrollBase[number];

export const Overscroll = [
  ...OverscrollBase,
  'x-auto',
  'x-contain',
  'x-none',
  'y-auto',
  'y-contain',
  'y-none'
] as const;
export type Overscroll = typeof Overscroll[number];

export const Position = [
  'static',
  'relative',
  'absolute',
  'fixed',
  'sticky'
] as const;
export type Position = typeof Position[number];

export const PlacementValues = [
  ...SizingZeroToNinetySix,
  ...FractionsOneToFour,
  'auto',
  'full',
  'px'
] as const;
export type PlacementValues = typeof PlacementValues[number];

export const XPlacement = [
  ...XSizingZeroToNinetySix,
  'x-1/2',
  'x-1/3',
  'x-2/3',
  'x-1/4',
  'x-2/4',
  'x-3/4',
  'x-auto',
  'x-full',
  'x-px'
] as const;
export const YPlacement = [
  ...YSizingZeroToNinetySix,
  'y-1/2',
  'y-1/3',
  'y-2/3',
  'y-1/4',
  'y-2/4',
  'y-3/4',
  'y-auto',
  'y-full',
  'y-px'
] as const;
export const Inset = [
  ...PlacementValues,
  ...XPlacement,
  ...YPlacement
] as const;
export type Inset = typeof Inset[number];

export const Visibility = ['visible', 'invisible'] as const;
export type Visibility = typeof Visibility[number];

export const ZIndex = ['auto', '0', '10', '20', '30', '40', '50'] as const;
export type ZIndex = typeof ZIndex[number];

export interface LayoutProps {
  aspectRatio?: UseModifiers<AspectRatio | ArbitraryValue>;
  boxDecoration?: UseModifiers<BoxDecoration>;
  boxSizing?: UseModifiers<BoxSizing>;
  breakAfter?: UseModifiers<BreakType>;
  breakBefore?: UseModifiers<BreakType>;
  breakInside?: UseModifiers<BreakInside>;
  centerSelf?: UseModifiers<boolean>;
  clear?: UseModifiers<Clear>;
  columns?: UseModifiers<Columns | ArbitraryValue>;
  container?: boolean;
  display?: UseModifiers<Display>;
  float?: UseModifiers<Float>;
  fullscreen?: UseModifiers<boolean>;
  isolation?: UseModifiers<Isolation>;
  objectFit?: UseModifiers<ObjectFit>;
  objectPosition?: UseModifiers<ObjectPosition | ArbitraryValue>;
  overflow?: UseModifiers<Overflow | Overflow[]>;
  overscroll?: UseModifiers<Overscroll>;
  position?: UseModifiers<Position>;
  top?: UseModifiers<PlacementValues | ArbitraryValue>;
  right?: UseModifiers<PlacementValues | ArbitraryValue>;
  bottom?: UseModifiers<PlacementValues | ArbitraryValue>;
  left?: UseModifiers<PlacementValues | ArbitraryValue>;
  inset?: UseModifiers<Inset | ArbitraryValue>;
  visibility?: UseModifiers<Visibility>;
  zIndex?: UseModifiers<ZIndex | ArbitraryValue>;
}
