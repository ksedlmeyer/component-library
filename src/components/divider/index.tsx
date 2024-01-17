import { FC } from 'react';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import { DividerPosition, DividerProps } from './divider.types';
export * from './divider.types';

export const Divider: FC<DividerProps> = ({
  classes,
  label = '',
  container = false,
  containerOpacity = 100,
  mixBlend = 'normal',
  textPalette = 'primary',
  textPaletteStop = 700,
  textOpacity = 100,
  dividerPalette = 'primary',
  dividerPaletteStop = 500,
  dividerOpacity = 100,
  textAlign = 'center',
  dividerPosition = 'center',
  dividerHeight = 0.5,
  leadingIcon = '',
  trailingIcon = '',
  containerWidth = 'full',
  containerHeight = 'auto',
  borderRadius = 'base',
  size = 'base',
  ...props
}) => {
  const hiddenText = label ? label : leadingIcon ? leadingIcon : 'hidden';

  const containerProps: DividerProps = {
    borderRadius,
    container,
    alignItems: DividerPosition[dividerPosition],
    width: containerWidth,
    height: containerHeight,
    alignSelf: props.alignSelf,
    opacity: containerOpacity,
    mixBlend,
    position: 'relative',
    classes,
    ...props.containerClasses
  };

  const labelProps: LabelProps = {
    label,
    leadingIcon,
    textAlign,
    trailingIcon,
    textPalette,
    textPaletteStop,
    opacity: textOpacity,
    font: props.font,
    fontWeight: props.fontWeight,
    lineHeight: props.lineHeight,
    letterSpacing: props.letterSpacing,
    textClasses: {
      textShadowDirection: props.textShadowDirection,
      textShadowPalette: props.textShadowPalette,
      textShadowPaletteStop: props.textShadowPaletteStop,
      textShadowBlur: props.textShadowBlur,
      textShadowThickness: props.textShadowThickness,
      textShadowOpacity: props.textShadowOpacity
    },
    margin: ['x-4'],
    size,
    classes: `${hiddenText}`,
    ...props.textProps
  };

  const leadingDividerProps: DevProps = {
    opacity: dividerOpacity,
    bgPalette: dividerPalette,
    bgPaletteStop: dividerPaletteStop,
    gradientDirection: props.gradientDirection,
    gradientFrom: props.gradientFrom,
    gradientVia: props.gradientVia,
    gradientTo: props.gradientTo,
    gradientPaletteStop: dividerPaletteStop,
    height: dividerHeight,
    flexGrow: textAlign === 'left' ? '[0]' : 'base'
  };
  const trailingDividerProps: DevProps = {
    opacity: dividerOpacity,
    bgPalette: dividerPalette,
    bgPaletteStop: dividerPaletteStop,
    gradientDirection: props.gradientDirection,
    gradientFrom: props.gradientTo,
    gradientVia: props.gradientVia,
    gradientTo: props.gradientFrom,
    gradientPaletteStop: dividerPaletteStop,
    height: dividerHeight,
    flexGrow: textAlign === 'right' ? '[0]' : 'base'
  };

  return (
    <Dev {...containerProps}>
      <Dev {...leadingDividerProps} />
      {label !== '' ? <Label {...labelProps} /> : null}
      <Dev {...trailingDividerProps} />
    </Dev>
  );
};
