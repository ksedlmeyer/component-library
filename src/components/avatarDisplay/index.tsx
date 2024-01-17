import { FC } from 'react';
import { TextSize, Height, Width } from '../../utils/types';
import { Avatar } from '../avatar';
import { AvatarProps, iconSize } from '../avatar/avatar.types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import {
  AvatarDisplayProps,
  titleTextSize,
  subtitleTextSize
} from './avatarDisplay.types';
export * from './avatarDisplay.types';

export const AvatarDisplay: FC<AvatarDisplayProps> = ({
  avatarOnly = false,
  titleText = 'John Doe',
  subtitleText = '',
  initialsText = '',
  bgPalette = 'primary',
  avatarTextPalette = 'white',
  size = 'DisplayCompact',
  overrideMode = 'none',
  bgPaletteStop = overrideMode === 'initials' ||
  (initialsText !== '' && overrideMode === 'none')
    ? 500
    : 100,
  avatarCorner = 'rounded-full',
  corner = 'none',
  indicatorStatus = false,
  indicatorStatusPalette = 'red',
  indicatorStatusPing = false,
  indicatorStatusPosition = 'tr',
  bgImage = '',
  iconPaletteStop = 300,
  placeholderIcon = '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
  alignItems = 'end',
  titleTextPalette = 'primary',
  titleTextPaletteStop = 700,
  subtitleTextPalette = 'neutral',
  subtitleTextPaletteStop = 400,
  avatarTextPaletteStop,
  titleTextShadowBlur,
  titleTextShadowDirection,
  titleTextShadowThickness,
  titleTextShadowPalette,
  titleTextShadowPaletteStop,
  titleTextShadowOpacity,
  subtitleTextShadowBlur,
  subtitleTextShadowDirection,
  subtitleTextShadowThickness,
  subtitleTextShadowPalette,
  subtitleTextShadowPaletteStop,
  subtitleTextShadowOpacity,
  ...props
}) => {
  const avatarDisplayProps: DevProps = {
    display: 'flex',
    position: 'relative',
    borderRadius:
      corner === 'rounded'
        ? 'base'
        : corner === 'rounded-full'
        ? 'full'
        : 'none',
    alignItems,
    ...props
  };

  const avatarSpanProps: DevProps = {
    flex: 'none',
    width: iconSize[size] as Width,
    height: iconSize[size] as Height
  };

  const avatarProps: AvatarProps = {
    initialsText,
    overrideMode,
    size,
    bgPalette,
    bgPaletteStop,
    bgImage,
    corner: avatarCorner,
    placeholderIcon,
    indicatorStatus,
    indicatorStatusPalette,
    indicatorStatusPing,
    indicatorStatusPosition,
    textPalette: avatarTextPalette,
    textPaletteStop: avatarTextPaletteStop,
    iconPaletteStop: iconPaletteStop
  };

  const titleProps: LabelProps = {
    label: titleText,
    textPalette: titleTextPalette,
    textPaletteStop: titleTextPaletteStop,
    fontWeight: 'bold',
    fontSize: titleTextSize[size] as TextSize,
    textClasses: {
      textShadowDirection: titleTextShadowDirection,
      textShadowBlur: titleTextShadowBlur,
      textShadowThickness: titleTextShadowThickness,
      textShadowPalette: titleTextShadowPalette,
      textShadowPaletteStop: titleTextShadowPaletteStop,
      textShadowOpacity: titleTextShadowOpacity
    }
  };

  const subtitleProps: LabelProps = {
    label: subtitleText,
    textPalette: subtitleTextPalette,
    textPaletteStop: subtitleTextPaletteStop,
    fontSize: subtitleTextSize[size] as TextSize,
    lineHeight: '5',
    textClasses: {
      textShadowDirection: subtitleTextShadowDirection,
      textShadowBlur: subtitleTextShadowBlur,
      textShadowThickness: subtitleTextShadowThickness,
      textShadowPalette: subtitleTextShadowPalette,
      textShadowPaletteStop: subtitleTextShadowPaletteStop,
      textShadowOpacity: subtitleTextShadowOpacity
    }
  };

  const pbSize = size === 'xs' || size === 'sm' || size === 'base' ? 0 : 1.5;

  return (
    <Dev {...avatarDisplayProps}>
      <Dev {...avatarSpanProps}>
        <Avatar {...avatarProps} />
      </Dev>
      {!avatarOnly && (
        <div className={`flex flex-col pl-2 pt-1.5 pb-${pbSize}`}>
          <Label {...titleProps} />
          <Label {...subtitleProps} />
        </div>
      )}
    </Dev>
  );
};
