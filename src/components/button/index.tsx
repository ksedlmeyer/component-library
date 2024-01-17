import { FC } from 'react';
import { Padding } from '../../utils/types';
import { Dev } from '../dev';
import { IndicatorStatus } from '../indicatorStatus';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import { ButtonProps, buttonSize } from './button.types';
export * from './button.types';

export const Button: FC<ButtonProps> = ({
  children,
  classes,
  focusRing = false,
  isDisabled = false,
  btnHoverPalette = 'primary',
  btnPalette = 'primary',
  bgPalette = {
    base: btnPalette,
    hover: btnHoverPalette
  },
  btnHoverPaletteStop = 700,
  btnPaletteStop = 600,
  bgPaletteStop = {
    base: btnPaletteStop,
    hover: btnHoverPaletteStop
  },
  corner = 'rounded',
  boxShadow = 'sm',
  fontSize = 'sm',
  fontWeight = 'medium',
  ringOffsetWidth = {
    focus: focusRing ? 2 : 0
  },
  ringPalette = {
    focus: focusRing ? 'primary' : 'transparent'
  },
  ringPaletteStop = {
    focus: 400
  },
  ringWidth = {
    focus: focusRing ? 2 : 0
  },
  textPalette = bgPalette,
  textPaletteStop = 50,
  display = 'inline-flex',
  position = 'relative',
  selected = false,
  themeInverse = false,
  inversePaletteStop = {
    base: 50,
    hover: 100
  },
  iconOnly = false,
  label = '',
  btnSize = iconOnly ? 'icon-only' : 'base',
  iconSize = 'base',
  padding = buttonSize[btnSize] as Padding | Padding[],
  indicatorStatus = false,
  indicatorStatusPalette = 'error',
  indicatorStatusPosition = 'tr',
  indicatorStatusPing = false,
  indicatorStatusSize = 'base',
  element = 'button',
  outlineStyle = {
    focus: !focusRing || iconOnly ? 'none' : 'base'
  },
  leadingIcon,
  trailingIcon,
  leadingIconType = 'outline',
  trailingIconType = 'outline',
  ...props
}) => {
  const buttonProps: ButtonProps = {
    element,
    outlineStyle,
    bgPalette,
    bgPaletteStop: themeInverse ? inversePaletteStop : bgPaletteStop,
    borderRadius:
      corner === 'rounded'
        ? 'base'
        : corner === 'rounded-full'
        ? 'full'
        : 'none',
    ringWidth,
    ringOffsetWidth,
    ringPalette,
    ringPaletteStop,
    boxShadow,
    display,
    position,
    selected,
    padding,
    classes,
    ...props
  };

  const labelProps: LabelProps = {
    isDisabled,
    trailingIcon: trailingIcon,
    leadingIcon: leadingIcon,
    themeInverse: themeInverse ? false : true,
    fontSize,
    fontWeight,
    textPalette,
    textPaletteStop: themeInverse ? 500 : textPaletteStop,
    size: iconSize,
    selected,
    textClasses: {
      textShadowDirection: props.textShadowDirection,
      textShadowPalette: props.textShadowPalette,
      textShadowPaletteStop: props.textShadowPaletteStop,
      textShadowBlur: props.textShadowBlur,
      textShadowThickness: props.textShadowThickness,
      textShadowOpacity: props.textShadowOpacity
    },
    leadingIconType: leadingIconType,
    trailingIconType: trailingIconType,
    strokePalette: props.strokePalette ? props.strokePalette : textPalette,
    strokePaletteStop: props.strokePaletteStop
      ? props.strokePaletteStop
      : textPaletteStop,
    cursor: isDisabled ? 'not-allowed' : 'pointer'
  };

  const calculateIndicatorPosition = (position: string) => {
    switch (position) {
      case 'tr':
        if (iconOnly || btnSize === 'icon-only') {
          return 'top-0 right-0 absolute transform -translate-y-1/2 translate-x-1/2';
        } else if (corner !== 'rounded-full') {
          return 'top-0 right-0 absolute transform -translate-y-1/2 translate-x-1/2';
        } else {
          return 'top-0 right-0 absolute transform -translate-y-[20%] translate-x-[20%]';
        }
      case 'br':
        if (iconOnly || btnSize === 'icon-only') {
          return 'bottom-0 right-0 absolute translate-y-1/2 translate-x-1/2';
        } else if (corner !== 'rounded-full') {
          return 'bottom-0 right-0 absolute translate-y-1/2 translate-x-1/2';
        } else {
          return 'bottom-0 right-0 absolute translate-y-[20%] translate-x-[20%]';
        }
      case 'tl':
        if (iconOnly || btnSize === 'icon-only') {
          return 'top-0 left-0 absolute transform -translate-y-1/2 -translate-x-1/2';
        } else if (corner !== 'rounded-full') {
          return 'top-0 left-0 absolute transform -translate-y-1/2 -translate-x-1/2';
        } else {
          return 'top-0 left-0 absolute transform -translate-y-[20%] -translate-x-[20%]';
        }
      case 'bl':
        if (iconOnly || btnSize === 'icon-only') {
          return 'bottom-0 left-0 absolute translate-y-1/2 -translate-x-1/2';
        } else if (corner !== 'rounded-full') {
          return 'bottom-0 left-0 absolute translate-y-1/2 -translate-x-1/2';
        } else {
          return 'bottom-0 left-0 absolute translate-y-[20%] -translate-x-[20%]';
        }
    }
  };
  const indicatorClasses = calculateIndicatorPosition(indicatorStatusPosition);
  return (
    <>
      <Dev
        {...buttonProps}
        disabled={isDisabled}
        onClick={(e) => {
          if (props.onClick !== undefined) {
            e.stopPropagation();
            props.onClick(e);
          }
        }}>
        <Label {...labelProps}>{label ? label : children}</Label>
        {indicatorStatus && (
          <div className={indicatorClasses}>
            <IndicatorStatus
              bgPalette={indicatorStatusPalette}
              ping={indicatorStatusPing && !isDisabled}
              size={indicatorStatusSize}
            />
          </div>
        )}
      </Dev>
    </>
  );
};
