import { TextSize } from '../../utils/types';
import { DevProps } from '../dev/dev.types';
import { TextProps } from '../text/text.types';

export enum DividerPosition {
  top = 'start',
  bottom = 'end',
  center = 'center'
}

export interface DividerProps extends DevProps {
  label?: string;
  textProps?: TextProps;
  textOpacity?: DevProps['opacity'];
  dividerOpacity?: DevProps['opacity'];
  dividerPalette?: DevProps['bgPalette'];
  dividerPaletteStop?: DevProps['bgPaletteStop'];
  dividerPosition?: 'top' | 'center' | 'bottom';
  leadingIcon?: string;
  trailingIcon?: string;
  containerHeight?: DevProps['height'];
  containerWidth?: DevProps['width'];
  containerOpacity?: DevProps['opacity'];
  containerClasses?: DevProps;
  size?: TextSize;
  dividerHeight?: DevProps['height'];
}
