import {
  BaseSizing,
  Corners,
  CornersTB,
  Palette,
  PaletteStop
} from '../../utils/types';
import { DevProps } from '../dev/dev.types';
import { LabelProps } from '../label/label.types';

export const buttonSize = {
  'icon-only': 0,
  xs: ['x-2.5', 'y-1.5'],
  sm: ['x-3', 'y-2'],
  base: ['x-4', 'y-2'],
  lg: ['x-5', 'y-2'],
  xl: ['x-6', 'y-3'],
  '2xl': ['x-7', 'y-3']
};

export const iconButtonSize = {
  xs: 3,
  sm: 3.5,
  base: 4,
  lg: 5,
  xl: 6,
  '2xl': 7,
  '3xl': 8,
  '4xl': 9,
  '5xl': 12,
  '6xl': 14,
  '7xl': 16,
  '8xl': 24,
  '9xl': 32
};

export interface ButtonProps extends DevProps {
  focusRing?: boolean;
  isDisabled?: boolean;
  btnHoverPalette?: Palette;
  btnHoverPaletteStop?: PaletteStop;
  btnPalette?: Palette;
  btnPaletteStop?: PaletteStop;
  leadingIcon?: string;
  leadingIconType?: LabelProps['leadingIconType'];
  trailingIcon?: string;
  trailingIconType?: LabelProps['trailingIconType'];
  label?: string;
  selected?: boolean;
  btnSize?: 'xs' | Exclude<BaseSizing, 'md'> | 'base' | 'icon-only';
  iconSize?: 'xs' | Exclude<BaseSizing, 'md'> | 'base';
  iconOnly?: boolean;
  indicatorStatus?: boolean;
  indicatorStatusPalette?: Palette;
  indicatorStatusPosition?: CornersTB;
  indicatorStatusPing?: boolean;
  indicatorStatusSize?: 'xs' | Exclude<BaseSizing, 'md'> | 'base';
  corner?: Corners;
  strokePalette?: LabelProps['strokePalette'];
  strokePaletteStop?: LabelProps['strokePaletteStop'];
}
