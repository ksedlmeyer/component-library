import { FC } from 'react';
import {
  BaseSizing,
  Height,
  PaletteStop,
  UseModifiers,
  Width
} from '../../utils/types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { BaseValue } from '../../utils/helpers';

export interface IndicatorStatusProps extends DevProps {
  ping?: boolean;
  size?: 'xs' | Exclude<BaseSizing, 'md'> | 'base';
}

export const indicatorSize = {
  xs: 1.5,
  sm: 2,
  base: 2.5,
  lg: 3,
  xl: 3.5,
  '2xl': 4
};

export const indicatorPingColor = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paletteStop: PaletteStop | UseModifiers<PaletteStop | any>,
  stops: Record<string, number>
) => {
  if (typeof paletteStop === 'object') {
    Object.keys(paletteStop).forEach((key) => {
      const stopBase = BaseValue(paletteStop[key], '');
      stops[key] = parseInt(stopBase) + 100;
    });
  } else {
    stops['base'] = paletteStop + 100;
  }
  return stops;
};

export const IndicatorStatus: FC<IndicatorStatusProps> = ({
  classes,
  ping = false,
  size = 'base',
  bgPalette = 'primary',
  bgPaletteStop = 400,
  borderRadius = 'full',
  ...props
}) => {
  const stops: Record<string, number> = {};
  const indicatorStatusProps: IndicatorStatusProps = {
    classes,
    display: 'flex',
    position: 'relative',
    height: indicatorSize[size] as Height,
    width: indicatorSize[size] as Width,
    ...props
  };

  const innerProps: IndicatorStatusProps = {
    display: 'inline-flex',
    position: 'absolute',
    height: 'full',
    width: 'full',
    borderRadius,
    bgPalette,
    bgPaletteStop: bgPaletteStop,
    opacity: 75,
    classes
  };

  const outerProps: IndicatorStatusProps = {
    display: 'inline-flex',
    position: 'relative',
    borderRadius,
    bgPalette,
    bgPaletteStop: indicatorPingColor(bgPaletteStop, stops),
    height: indicatorSize[size] as Height,
    width: indicatorSize[size] as Width,
    animation: ping ? 'ping' : 'none',
    classes
  };

  return (
    <Dev {...indicatorStatusProps}>
      <Dev {...outerProps}></Dev>
      <Dev {...innerProps}></Dev>
    </Dev>
  );
};
