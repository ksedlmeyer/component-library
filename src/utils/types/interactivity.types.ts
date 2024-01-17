import { UseModifiers } from './modifier.types';
import { ArbitraryValue, XY } from './shared.types';
import { Palette, PaletteStop } from './color.types';
import { Margin, Padding } from './spacing.types';

export const Appearance = ['none'] as const;
export type Appearance = typeof Appearance[number];

export const Cursor = [
  'auto',
  'default',
  'pointer',
  'wait',
  'text',
  'move',
  'help',
  'not-allowed',
  'none',
  'context-menu',
  'progress',
  'cell',
  'crosshair',
  'vertical-text',
  'alias',
  'copy',
  'no-drop',
  'grab',
  'grabbing',
  'all-scroll',
  'col-resize',
  'row-resize',
  'n-resize',
  'e-resize',
  's-resize',
  'w-resize',
  'ne-resize',
  'nw-resize',
  'se-resize',
  'sw-resize',
  'ew-resize',
  'ns-resize',
  'nesw-resize',
  'nwse-resize',
  'zoom-in',
  'zoom-out'
] as const;
export type Cursor = typeof Cursor[number];

export const PointerEvents = ['none', 'auto'] as const;
export type PointerEvents = typeof PointerEvents[number];

export const Resize = ['none', ...XY, 'base'] as const;
export type Resize = typeof Resize[number];

export const ScrollBehavior = ['auto', 'smooth'] as const;
export type ScrollBehavior = typeof ScrollBehavior[number];

export const ScrollSnapAlign = ['start', 'end', 'center', 'none'] as const;
export type ScrollSnapAlign = typeof ScrollSnapAlign[number];

export const ScrollSnapStop = ['normal', 'always'] as const;
export type ScrollSnapStop = typeof ScrollSnapStop[number];

export const ScrollSnapType = [
  'none',
  ...XY,
  'both',
  'mandatory',
  'proximity'
] as const;
export type ScrollSnapType = typeof ScrollSnapType[number];

export const TouchAction = [
  'auto',
  'none',
  'pan-x',
  'pan-y',
  'pan-left',
  'pan-right',
  'pan-up',
  'pan-down',
  'pinch-zoom',
  'manipulation'
] as const;
export type TouchAction = typeof TouchAction[number];

export const UserSelect = ['none', 'text', 'all', 'auto'] as const;
export type UserSelect = typeof UserSelect[number];

export const WillChange = ['auto', 'scroll', 'contents', 'transform'] as const;
export type WillChange = typeof WillChange[number];

export interface InteractivityProps {
  accentPalette?: UseModifiers<Palette | 'gradient'>;
  accentPaletteStop?: UseModifiers<PaletteStop>;
  appearance?: UseModifiers<Appearance>;
  cursor?: UseModifiers<Cursor | ArbitraryValue>;
  caretPalette?: UseModifiers<Palette | 'gradient'>;
  caretPaletteStop?: UseModifiers<PaletteStop>;
  pointerEvents?: UseModifiers<PointerEvents>;
  resize?: UseModifiers<Resize>;
  scrollBehavior?: UseModifiers<ScrollBehavior>;
  scrollMargin?: UseModifiers<Margin | Margin[] | ArbitraryValue>;
  scrollPadding?: UseModifiers<Padding | Padding[] | ArbitraryValue>;
  scrollSnapAlign?: UseModifiers<ScrollSnapAlign>;
  scrollSnapStop?: UseModifiers<ScrollSnapStop>;
  scrollSnapType?: UseModifiers<ScrollSnapType>;
  touchAction?: UseModifiers<TouchAction>;
  userSelect?: UseModifiers<UserSelect>;
  willChange?: UseModifiers<WillChange | ArbitraryValue>;
}
