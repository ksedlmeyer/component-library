import { BaseSizing, Corners, CornersTB, Palette } from '../../utils/types';
import { DevProps } from '../dev';

export const iconSize = {
  xs: 6,
  sm: 8,
  base: 10,
  lg: 12,
  xl: 14,
  '2xl': 16,
  DisplayCompact: 24,
  DisplayFull: 32
};

export interface AvatarProps extends DevProps {
  size?:
    | 'xs'
    | Exclude<BaseSizing, 'md'>
    | 'base'
    | 'DisplayCompact'
    | 'DisplayFull';
  overrideMode?: 'none' | 'placeholder' | 'initials' | 'image';
  corner?: Corners;
  indicatorStatus?: boolean;
  indicatorStatusPalette?: Palette;
  indicatorStatusPosition?: CornersTB;
  indicatorStatusPing?: boolean;
  initialsText?: string;
  placeholderIcon?: string;
  iconPaletteStop?: DevProps['textPaletteStop'];
}
