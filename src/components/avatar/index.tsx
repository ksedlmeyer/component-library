import { FC } from 'react';
import {
  TextSize,
  Height,
  Width,
  Palette,
  PaletteStop
} from '../../utils/types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Icon } from '../icon';
import { IconProps } from '../icon/icon.types';
import { IndicatorStatus } from '../indicatorStatus';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import { AvatarProps, iconSize } from './avatar.types';
export * from './avatar.types';

export const Avatar: FC<AvatarProps> = ({
  initialsText = '',
  bgPalette = 'primary',
  textPalette = 'white',
  size = 'base',
  overrideMode = 'none',
  bgPaletteStop = overrideMode === 'initials' ||
  (initialsText !== '' && overrideMode === 'none')
    ? 500
    : 100,
  corner = 'rounded',
  indicatorStatus = false,
  indicatorStatusPalette = 'red',
  indicatorStatusPing = false,
  indicatorStatusPosition = 'tr',
  bgImage = '',
  iconPaletteStop = 300,
  placeholderIcon = '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
  ...props
}) => {
  const avatarProps: DevProps = {
    display: 'inline-block',
    position: 'relative',
    borderRadius:
      corner === 'rounded'
        ? 'base'
        : corner === 'rounded-full'
        ? 'full'
        : 'none',
    bgPalette,
    bgPaletteStop,
    width: iconSize[size] as Width,
    height: iconSize[size] as Height,
    ...props
  };

  const imageProps: DevProps = {
    position: 'absolute',
    bgImage,
    bgSize: 'cover',
    bgRepeat: 'no-repeat',
    bgPosition: 'center',
    width: iconSize[size] as Width,
    height: iconSize[size] as Height,
    borderRadius:
      corner === 'rounded'
        ? 'base'
        : corner === 'rounded-full'
        ? 'full'
        : 'none'
  };

  const labelSpanProps: DevProps = {
    alignItems: 'center',
    justifyContent: 'center',
    width: iconSize[size] as Width,
    height: iconSize[size] as Height
  };

  const initialsProps: LabelProps = {
    label: initialsText,
    display: 'inline-flex',
    fontSize:
      size === 'DisplayCompact'
        ? '5xl'
        : size === 'DisplayFull'
        ? '6xl'
        : (size as TextSize),
    fontWeight: 'medium',
    textPalette: textPalette,
    textPaletteStop: props.textPaletteStop,
    lineHeight: 'none'
  };

  const iconProps: IconProps = {
    svg: placeholderIcon,
    fillPalette: bgPalette as Palette,
    fillPaletteStop: iconPaletteStop as PaletteStop,
    width: iconSize[size] as Width,
    height: iconSize[size] as Height,
    rounded:
      corner === 'rounded'
        ? 'base'
        : corner === 'rounded-full'
        ? 'full'
        : 'none'
  };

  const calculateIndicatorPosition = (position: string) => {
    switch (position) {
      case 'tr':
        if (corner !== 'rounded-full') {
          return 'top-0 right-0 absolute transform -translate-y-1/2 translate-x-1/2';
        } else {
          return 'top-0 right-0 absolute transform -translate-y-[20%] translate-x-[20%]';
        }
      case 'br':
        if (corner !== 'rounded-full') {
          return 'bottom-0 right-0 absolute translate-y-1/2 translate-x-1/2';
        } else {
          return 'bottom-0 right-0 absolute translate-y-[20%] translate-x-[20%]';
        }
      case 'tl':
        if (corner !== 'rounded-full') {
          return 'top-0 left-0 absolute transform -translate-y-1/2 -translate-x-1/2';
        } else {
          return 'top-0 left-0 absolute transform -translate-y-[20%] -translate-x-[20%]';
        }
      case 'bl':
        if (corner !== 'rounded-full') {
          return 'bottom-0 left-0 absolute translate-y-1/2 -translate-x-1/2';
        } else {
          return 'bottom-0 left-0 absolute translate-y-[20%] -translate-x-[20%]';
        }
    }
  };

  const indicatorClasses = calculateIndicatorPosition(indicatorStatusPosition);

  return (
    <Dev {...avatarProps}>
      {/* Image */}
      {(bgImage !== null && bgImage !== '' && overrideMode === 'none') ||
      overrideMode === 'image' ? (
        <Dev {...imageProps} />
      ) : /* Initials */
      (initialsText !== '' && overrideMode === 'none') ||
        overrideMode === 'initials' ? (
        <Dev {...labelSpanProps}>
          <Label {...initialsProps} />
        </Dev>
      ) : (
        /* Placeholder */
        <Icon {...iconProps} />
      )}
      {indicatorStatus && (
        <div className={indicatorClasses}>
          <IndicatorStatus
            bgPalette={indicatorStatusPalette}
            ping={indicatorStatusPing}
            size={
              size === 'DisplayCompact' || size === 'DisplayFull' ? '2xl' : size
            }
          />
        </div>
      )}
    </Dev>
  );
};
