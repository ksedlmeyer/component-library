import { FC } from 'react';
import { BorderRadius, Corners, Margin, Padding } from '../../utils/types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { IndicatorStatus } from '../indicatorStatus';
import { Label, LabelProps } from '../label';
import { IconProps } from '../icon';

export interface BadgeProps extends DevProps {
  size?: 'basic' | 'large';
  indicatorStatus?: boolean;
  indicatorStatusPing?: boolean;
  corner?: Corners;
  label?: string;
  leadingIcon?: string;
  leadingIconType?: IconProps['iconType'];
  trailingIcon?: string;
  trailingIconType?: IconProps['iconType'];
}

export const badgeSize = {
  basic: ['x-2.5', 'y-0.5'],
  large: ['x-3', 'y-0.5']
};

export const indicatorMarginSize = {
  basic: ['l-0.5', 'r-1.5'],
  large: ['l-1', 'r-1.5']
};

export const badgeCorners = {
  rounded: 'base',
  square: 'none',
  'rounded-full': 'full'
};

export const Badge: FC<BadgeProps> = ({
  children,
  classes,
  label,
  size = 'basic',
  indicatorStatus = false,
  indicatorStatusPing = false,
  display = 'inline-flex',
  bgPalette = 'primary',
  bgPaletteStop = 100,
  textPalette = bgPalette,
  textPaletteStop = 800,
  lineClamp = '1',
  corner = 'rounded',
  borderRadius = badgeCorners[corner] as BorderRadius,
  fontSize = size === 'basic' ? 'xs' : 'sm',
  fontWeight = 'medium',
  alignItems = 'center',
  padding = badgeSize[size] as Padding | Padding[],
  leadingIcon,
  leadingIconType,
  trailingIcon,
  trailingIconType,
  ...props
}) => {
  const badgeProps: BadgeProps = {
    size,
    display,
    bgPalette,
    bgPaletteStop,
    borderRadius,
    fontSize,
    fontWeight,
    alignItems,
    padding,
    classes,
    ...props
  };

  const childProps: LabelProps = {
    lineClamp,
    textPalette,
    textPaletteStop,
    textClasses: {
      padding: 'y-0.5'
    },
    leadingIcon,
    leadingIconType,
    trailingIcon,
    trailingIconType,
    classes
  };

  const indicatorProps: BadgeProps = {
    margin: indicatorMarginSize[size] as Margin | Margin[]
  };

  return (
    <Dev {...badgeProps}>
      {indicatorStatus && (
        <Dev {...indicatorProps}>
          <IndicatorStatus bgPalette={bgPalette} ping={indicatorStatusPing} />
        </Dev>
      )}
      <Label {...childProps}>{label ? label : children}</Label>
    </Dev>
  );
};
