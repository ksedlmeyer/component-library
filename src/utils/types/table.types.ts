import { UseModifiers } from './modifier.types';
import {
  ArbitraryValue,
  SizingZeroToNinetySix,
  XSizingZeroToNinetySix,
  YSizingZeroToNinetySix
} from './shared.types';

export const BorderCollapse = ['collapse', 'separate'] as const;
export type BorderCollapse = typeof BorderCollapse[number];

export const BorderSpacing = [
  ...SizingZeroToNinetySix,
  'px',
  'x-px',
  'y-px',
  ...XSizingZeroToNinetySix,
  ...YSizingZeroToNinetySix
] as const;
export type BorderSpacing = typeof BorderSpacing[number];

export const TableLayout = ['auto', 'fixed'] as const;
export type TableLayout = typeof TableLayout[number];

export interface TableProps {
  borderCollapse?: UseModifiers<BorderCollapse>;
  borderSpacing?: UseModifiers<
    BorderSpacing | BorderSpacing[] | ArbitraryValue
  >;
  tableLayout?: UseModifiers<TableLayout>;
}
