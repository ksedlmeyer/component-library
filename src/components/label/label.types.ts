import { BaseValue } from '../../utils/helpers';
import {
  Palette,
  PaletteStop,
  TextSize,
  UseModifiers
} from '../../utils/types';
import { IconProps } from '../icon/icon.types';
import { TextProps } from '../text/text.types';

export const spacing = {
  xs: 'x-1',
  sm: 'x-1',
  base: 'x-1',
  lg: 'x-1.5',
  xl: 'x-1.5',
  '2xl': 'x-1.5',
  '3xl': 'x-1.5',
  '4xl': 'x-1.5',
  '5xl': 'x-1.5',
  '6xl': 'x-1.5',
  '7xl': 'x-1.5',
  '8xl': 'x-1.5',
  '9xl': 'x-1.5'
};

export const selectedTextColor = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paletteStop: PaletteStop | UseModifiers<PaletteStop | any>,
  stops: Record<string, string>
) => {
  if (typeof paletteStop === 'object') {
    Object.keys(paletteStop).forEach((key) => {
      const stopBase = BaseValue(paletteStop[key], '');
      stops[key] = (parseInt(stopBase) + 200).toString();
    });
  } else {
    stops['base'] = paletteStop + 200;
  }
  return stops;
};

export interface LabelProps extends TextProps {
  label?: string;
  leadingIconType?: IconProps['iconType'];
  leadingIcon?: string | IconProps['svg'];
  trailingIconType?: IconProps['iconType'];
  trailingIcon?: string | IconProps['svg'];
  size?: TextSize;
  iconSize?: TextSize;
  isDisabled?: boolean;
  loadAnimation?: boolean;
  showProgress?: boolean;
  progress?: number;
  visualProgressRadial?: boolean;
  frontRadialPalette?: TextProps['bgPalette'];
  frontRadialPaletteStop?: TextProps['bgPaletteStop']; // visualization progress status radial
  backRadialPalette?: Palette; // visualization progress status radial
  backRadialPaletteStop?: PaletteStop; // visualization progress status radial
  backRadialPaletteStopInverse?: PaletteStop;
  selected?: boolean;
  textClasses?: TextProps;
  leadingIconPalette?: TextProps['textPalette'];
  leadingIconPaletteStop?: TextProps['textPaletteStop'];
  trailingIconPalette?: TextProps['textPalette'];
  trailingIconPaletteStop?: TextProps['textPaletteStop'];
  tip?: string;
  required?: boolean;
}
