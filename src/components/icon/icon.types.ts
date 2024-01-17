import { HTMLAttributes, ReactNode } from 'react';
import {
  ArbitraryValue,
  AspectRatio,
  MixBlend,
  BorderRadius,
  Colors,
  GradientDirection,
  Height,
  Opacity,
  Palette,
  PaletteStop,
  Shadow,
  Width,
  Margin,
  UseModifiers,
  Cursor,
  Flex,
  StrokeWidth
} from '../../utils/types';
import * as HIconsOutline from '@heroicons/react/24/outline';
import * as HIconsSolid from '@heroicons/react/24/solid';

type IconName = keyof typeof HIconsOutline | keyof typeof HIconsSolid;

export const IconGradientDirectionValues = {
  t: { x1: '0%', y1: '100%', x2: '0%', y2: '0%' },
  tr: { x1: '0%', y1: '100%', x2: '100%', y2: '0%' },
  r: { x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
  br: { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
  b: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
  bl: { x1: '100%', y1: '0%', x2: '0%', y2: '100%' },
  l: { x1: '100%', y1: '0%', x2: '0%', y2: '0%' },
  tl: { x1: '100%', y1: '100%', x2: '0%', y2: '0%' }
};

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  children?: ReactNode;
  classes?: string;
  svg?: IconName | string;
  defaultPalette?: UseModifiers<Palette>;
  defaultPaletteStop?: UseModifiers<PaletteStop>;
  fillPalette?: Palette;
  fillPaletteStop?: PaletteStop;
  strokePalette?: Palette;
  strokePaletteStop?: PaletteStop;
  strokeWidth?: StrokeWidth;
  gradientDirection?: GradientDirection;
  gradientFrom?: Colors;
  gradientVia?: Colors;
  gradientTo?: Colors;
  width?: Width | ArbitraryValue;
  height?: Height | ArbitraryValue;
  rounded?: BorderRadius;
  shadow?: Shadow;
  opacity?: Opacity;
  blend?: MixBlend;
  aspectRatio?: AspectRatio;
  centerSelf?: boolean;
  margin?: Margin | Margin[];
  cursor?: UseModifiers<Cursor | ArbitraryValue>;
  iconType?: 'solid' | 'outline';
  flex?: Flex;
}
