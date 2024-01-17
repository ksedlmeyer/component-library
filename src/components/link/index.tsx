import { FC, MouseEventHandler } from 'react';
import { Corners, TextSize } from '../../utils/types';
import { Dev } from '../dev';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import { TextProps } from '../text/text.types';

export interface LinkProps extends LabelProps {
  selectable?: boolean;
  selected?: boolean;
  isDisabled?: boolean;
  leadingIcon?: string;
  trailingIcon?: string;
  target?: '_self' | '_blank' | '_parent' | '_top' | 'test';
  corner?: Corners;
  linkSize?: TextSize;
  text?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
  textShadowDirection?: TextProps['textShadowDirection'];
  textShadowBlur?: TextProps['textShadowBlur'];
  textShadowThickness?: TextProps['textShadowThickness'];
  textShadowPalette?: TextProps['textShadowPalette'];
  textShadowPaletteStop?: TextProps['textShadowPaletteStop'];
  textShadowOpacity?: TextProps['textShadowOpacity'];
}

export const corners = {
  rounded: 'base',
  square: 'none',
  'rounded-full': 'full'
};

export const Link: FC<LinkProps> = ({
  children,
  classes,
  text = '',
  textPalette = 'primary',
  textPaletteStop = 700,
  inversePaletteStop = 50,
  themeInverse = false,
  selectable = true,
  selected = false,
  corner = 'square',
  isDisabled = false,
  leadingIcon = '',
  trailingIcon = '',
  textAlign = 'left',
  alignItems = 'start',
  lineClamp,
  fontWeight,
  fontSmoothing,
  fontStyle,
  gradientDirection,
  gradientFrom,
  gradientPaletteStop,
  gradientTo,
  gradientVia,
  iconSize,
  linkSize,
  textShadowBlur,
  textShadowDirection,
  textShadowOpacity = 100,
  textShadowPalette = 'primary',
  textShadowPaletteStop = 500,
  textShadowThickness = 'md',
  leadingIconPalette,
  leadingIconPaletteStop,
  leadingIconType,
  trailingIconPalette,
  trailingIconType,
  trailingIconPaletteStop,
  letterSpacing,
  lineHeight,
  opacity,
  textDecoration,
  textDecorationPalette,
  textDecorationPaletteStop,
  textDecorationStyle,
  textDecorationThickness,
  wordBreak,
  ...props
}) => {
  const spanProps: LinkProps = {
    element: 'a',
    display: 'inline-flex',
    position: 'relative',
    textDecoration: {
      hover: 'underline'
    },
    textDecorationPalette: textPalette,
    textDecorationPaletteStop: textPaletteStop,
    cursor: {
      base: isDisabled ? 'not-allowed' : 'auto',
      hover: isDisabled ? 'not-allowed' : 'pointer'
    },
    padding:
      selectable && corner === 'rounded-full'
        ? ['y-2', 'x-4']
        : selectable
        ? ['y-2', 'x-2']
        : 0,
    borderRadius:
      corner === 'rounded'
        ? 'base'
        : corner === 'rounded-full'
        ? 'full'
        : 'none',
    bgPalette: selected ? textPalette : 'transparent',
    bgPaletteStop: themeInverse ? inversePaletteStop : textPaletteStop,
    opacity: isDisabled ? 60 : 100,
    classes,
    ...props
  };

  const labelProps: LabelProps = {
    textAlign,
    alignItems,
    isDisabled,
    lineClamp,
    trailingIcon,
    leadingIcon,
    leadingIconPalette,
    leadingIconPaletteStop,
    leadingIconType,
    trailingIconPalette,
    trailingIconPaletteStop,
    trailingIconType,
    themeInverse: themeInverse ? false : true,
    fontWeight,
    fontSmoothing,
    fontStyle,
    letterSpacing,
    lineHeight,
    opacity,
    gradientDirection,
    gradientFrom,
    gradientPaletteStop,
    gradientTo,
    gradientVia,
    textDecoration,
    textDecorationPalette,
    textDecorationPaletteStop,
    textDecorationStyle,
    textDecorationThickness,
    iconSize,
    textPalette,
    textPaletteStop: !themeInverse ? textPaletteStop : inversePaletteStop,
    size: linkSize,
    cursor: {
      base: isDisabled ? 'not-allowed' : 'auto',
      hover: isDisabled ? 'not-allowed' : 'pointer'
    },
    textClasses: {
      textShadowDirection: textShadowDirection,
      textShadowBlur: textShadowBlur,
      textShadowThickness: textShadowThickness,
      textShadowPalette: textShadowPalette,
      textShadowPaletteStop: textShadowPaletteStop,
      textShadowOpacity: textShadowOpacity
    },
    wordBreak
  };

  return (
    <Dev {...spanProps}>
      <Label {...labelProps}>{text ? text : children}</Label>
    </Dev>
  );
};
