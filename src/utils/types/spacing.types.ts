import { UseModifiers } from './modifier.types';
import { SidesXY, ArbitraryValue, SizingZeroToNinetySix } from './shared.types';
import { CombineArrs } from '../helpers/arrays';

const basePadding = [...SizingZeroToNinetySix, 'px'] as const;
type basePadding = typeof basePadding[number];
export const { array: Padding, obj: PaddingObj } = CombineArrs(
  basePadding,
  SidesXY
);
export type Padding = basePadding | `${SidesXY}-${basePadding}`;

const baseMargin = [...SizingZeroToNinetySix, 'px', 'auto'] as const;
type baseMargin = typeof baseMargin[number];
export const { array: Margin, obj: MarginObj } = CombineArrs(
  baseMargin,
  SidesXY
);

export type Margin = baseMargin | `${SidesXY}-${baseMargin}`;

const baseSpaceBetween = [...SizingZeroToNinetySix, 'px', 'reverse'] as const;
type baseSpaceBetween = typeof baseSpaceBetween[number];
export const { array: SpaceBetween, obj: SpaceBetweenObj } = CombineArrs(
  baseSpaceBetween,
  SidesXY
);
export type SpaceBetween = `${SidesXY}-${baseSpaceBetween}`;

export interface SpacingProps {
  padding?: UseModifiers<Padding | Padding[] | ArbitraryValue>;
  margin?: UseModifiers<Margin | Margin[] | ArbitraryValue>;
  spaceBetween?: UseModifiers<SpaceBetween | SpaceBetween[] | ArbitraryValue>;
}
