import { Corners } from '../../utils/types';
import { AvatarProps } from '../avatar/avatar.types';
import { LabelProps } from '../label/label.types';

export const titleTextSize = {
  xs: 'sm',
  sm: 'sm',
  base: 'sm',
  lg: 'base',
  xl: 'lg',
  '2xl': 'lg',
  DisplayCompact: 'lg',
  DisplayFull: 'lg'
};

export const subtitleTextSize = {
  xs: 'xs',
  sm: 'xs',
  base: 'xs',
  lg: 'sm',
  xl: 'sm',
  '2xl': 'sm',
  DisplayCompact: 'sm',
  DisplayFull: 'sm'
};

export interface AvatarDisplayProps extends AvatarProps {
  avatarOnly?: boolean;
  avatarCorner?: Corners;
  titleText?: string;
  subtitleText?: string;
  titleTextShadowDirection?: LabelProps['textShadowDirection'];
  titleTextShadowBlur?: LabelProps['textShadowBlur'];
  titleTextShadowThickness?: LabelProps['textShadowThickness'];
  titleTextShadowPalette?: LabelProps['textShadowPalette'];
  titleTextShadowPaletteStop?: LabelProps['textShadowPaletteStop'];
  titleTextShadowOpacity?: LabelProps['textShadowOpacity'];
  subtitleTextShadowDirection?: LabelProps['textShadowDirection'];
  subtitleTextShadowBlur?: LabelProps['textShadowBlur'];
  subtitleTextShadowThickness?: LabelProps['textShadowThickness'];
  subtitleTextShadowPalette?: LabelProps['textShadowPalette'];
  subtitleTextShadowPaletteStop?: LabelProps['textShadowPaletteStop'];
  subtitleTextShadowOpacity?: LabelProps['textShadowOpacity'];
  avatarTextPalette?: LabelProps['textPalette'];
  avatarTextPaletteStop?: LabelProps['textPaletteStop'];
  titleTextPalette?: LabelProps['textPalette'];
  titleTextPaletteStop?: LabelProps['textPaletteStop'];
  subtitleTextPalette?: LabelProps['textPalette'];
  subtitleTextPaletteStop?: LabelProps['textPaletteStop'];
}
