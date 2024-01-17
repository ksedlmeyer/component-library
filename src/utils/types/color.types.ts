export type ColorType =
  | 'from'
  | 'to'
  | 'via'
  | 'text'
  | 'border'
  | 'bg'
  | 'color'
  | 'decoration'
  | 'divide'
  | 'outline'
  | 'ring'
  | 'ring-offset'
  | 'shadow'
  | 'accent'
  | 'caret'
  | 'fill'
  | 'stroke';

export const PaletteStop = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900
] as const;
export type PaletteStop = typeof PaletteStop[number];

export const StopColors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'
] as const;
export type StopColors = typeof StopColors[number];

export const NoStopColors = [
  'inherit',
  'current',
  'transparent',
  'black',
  'white'
] as const;
export type NoStopColors = typeof NoStopColors[number];

// "l" | "r" | "t" | "b" | "x" | "y"
export const AllNoStopColors = [
  ...NoStopColors,
  'l-inherit',
  'r-inherit',
  't-inherit',
  'b-inherit',
  'x-inherit',
  'y-inherit',
  'l-current',
  'r-current',
  't-current',
  'b-current',
  'x-current',
  'y-current',
  'l-transparent',
  'r-transparent',
  't-transparent',
  'b-transparent',
  'x-transparent',
  'y-transparent',
  'l-black',
  'r-black',
  't-black',
  'b-black',
  'x-black',
  'y-black',
  'l-white',
  'r-white',
  't-white',
  'b-white',
  'x-white',
  'y-white'
] as const;

export const CustomShadeColors = [
  'primary',
  'secondary',
  'neutral',
  'warning',
  'error',
  'info',
  'success'
] as const;
export type CustomShadeColors = typeof CustomShadeColors[number];

const AllStopColors = [...StopColors, ...CustomShadeColors] as const;
type AllStopColors = typeof AllStopColors[number];

export const Palette = [
  ...AllStopColors,
  ...NoStopColors,
  'gradient',
  'none'
] as const;
export type Palette = typeof Palette[number];

export type Colors = `${AllStopColors}-${PaletteStop}` | `${NoStopColors}`;
