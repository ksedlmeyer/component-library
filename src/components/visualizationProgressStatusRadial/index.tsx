import { FC, useEffect, useRef, useState } from 'react';
import { ColorGen } from '../../utils/helpers';
import {
  Height,
  Palette,
  PaletteStop,
  StrokeWidth,
  TextSize,
  Width
} from '../../utils/types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Icon } from '../icon';
import { IconProps } from '../icon/icon.types';

export interface VisualizationProgressStatusRadialProps extends DevProps {
  size?: TextSize;
  completionIcon?: string;
  frontRadialPalette?: DevProps['textPalette'];
  frontRadialPaletteStop?: DevProps['textPaletteStop'];
  backRadialPalette?: Palette;
  backRadialPaletteStop?: PaletteStop;
  loadAnimation?: boolean;
  isDisabled?: boolean;
  disabledIcon?: string;
  progress?: number;
  circumference?: number;
  radialSize?: number;
  visualSize?: number;
  innerRadius?: number;
  innerRadiusOffset?: number;
  center?: number;
  radius?: number;
  strokeWidth?: StrokeWidth;
}

export const VisualizationProgressStatusRadial: FC<
  VisualizationProgressStatusRadialProps
> = ({
  classes,
  circumference = 0,
  size = 'base',
  completionIcon = '',
  frontRadialPalette = 'primary',
  frontRadialPaletteStop = 600,
  backRadialPalette = 'neutral',
  backRadialPaletteStop = 300,
  loadAnimation = false,
  isDisabled = false,
  disabledIcon = '',
  strokeWidth = 3,
  radialSize = 0,
  visualSize = 4,
  innerRadius = 0,
  innerRadiusOffset = 0,
  progress = 0,
  center = 0,
  radius = 0,
  position = 'relative',
  display = 'inline-flex',
  justifyContent = 'center',
  alignItems = 'center',
  ...props
}) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  switch (size) {
    case 'xs':
      visualSize = 3;
      radialSize = 12;
      strokeWidth = 2;
      innerRadiusOffset = 3;
      break;
    case 'sm':
      visualSize = 3.5;
      radialSize = 14;
      strokeWidth = 2.5;
      innerRadiusOffset = 3.5;
      break;
    case 'base':
      visualSize = 4;
      radialSize = 16;
      strokeWidth = 3;
      innerRadiusOffset = 3.5;
      break;
    case 'lg':
      visualSize = 5;
      radialSize = 20;
      strokeWidth = 4;
      innerRadiusOffset = 4.5;
      break;
    case 'xl':
      visualSize = 5;
      radialSize = 24;
      strokeWidth = 5;
      innerRadiusOffset = 5.5;
      break;
    case '2xl':
      visualSize = 6;
      radialSize = 24;
      strokeWidth = 5;
      innerRadiusOffset = 5.5;
      break;
    case '3xl':
      visualSize = 7;
      radialSize = 28;
      strokeWidth = 6;
      innerRadiusOffset = 6;
      break;
    case '4xl':
      visualSize = 9;
      radialSize = 36;
      strokeWidth = 8;
      innerRadiusOffset = 8;
      break;
    case '5xl':
      visualSize = 12;
      radialSize = 48;
      strokeWidth = 10;
      innerRadiusOffset = 10;
      break;
    case '6xl':
      visualSize = 14;
      radialSize = 56;
      strokeWidth = 12;
      innerRadiusOffset = 12;
      break;
    case '7xl':
      visualSize = 16;
      radialSize = 64;
      strokeWidth = 14;
      innerRadiusOffset = 14;
      break;
    case '8xl':
      visualSize = 24;
      radialSize = 96;
      strokeWidth = 18;
      innerRadiusOffset = 18;
      break;
    case '9xl':
      visualSize = 32;
      radialSize = 128;
      strokeWidth = 20;
      innerRadiusOffset = 22;
      break;
  }

  const visualizationProgressStatusRadialProps: VisualizationProgressStatusRadialProps =
    {
      size,
      position,
      display,
      justifyContent,
      alignItems,
      width: visualSize as Width,
      height: visualSize as Height,
      bgPalette:
        progress === 100 && completionIcon !== '' && !isDisabled
          ? frontRadialPalette
          : isDisabled && disabledIcon !== ''
          ? 'transparent'
          : 'transparent',
      bgPaletteStop:
        progress === 100 && completionIcon !== '' && !isDisabled
          ? frontRadialPaletteStop
          : isDisabled && disabledIcon !== ''
          ? 50
          : 50,
      borderRadius:
        progress === 100 && completionIcon !== '' && !isDisabled
          ? 'full'
          : isDisabled && disabledIcon !== ''
          ? 'full'
          : 'none',
      ...props
    };

  const frontColor = ColorGen(
    frontRadialPalette,
    frontRadialPaletteStop,
    'text'
  );
  const backColor = ColorGen(backRadialPalette, backRadialPaletteStop, 'text');

  // Radial size
  if (radialSize !== undefined && strokeWidth !== undefined) {
    center = radialSize / 2;
    radius = radialSize / 2 - strokeWidth / 2;
    innerRadius = radius - innerRadiusOffset;
    circumference = radius * 2 * Math.PI;
  }

  useEffect(() => {
    if (progress !== undefined && circleRef.current !== null) {
      const progressOffset = circumference - (progress / 100) * circumference;
      setOffset(progressOffset);
      if (loadAnimation === true) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Object is possibly 'null'.
        circleRef.current.style =
          'transition: stroke-dashoffset 850ms ease-in-out;';
      }
    }
  }, [setOffset, circumference, progress, offset, loadAnimation]);

  const completionIconProps: IconProps = {
    svg: completionIcon,
    aspectRatio: 'auto',
    classes
  };

  const disabledIconProps: IconProps = {
    svg: disabledIcon,
    fillPalette: 'neutral',
    fillPaletteStop: 400,
    classes
  };

  return (
    <Dev {...visualizationProgressStatusRadialProps}>
      {progress === 100 && completionIcon !== '' ? (
        <div
          className={`relative inline-flex jusitfy-center items-center w-[${
            radialSize / 2
          }px] h-[${radialSize / 2}px]`}>
          <Icon {...completionIconProps}>{completionIcon}</Icon>
        </div>
      ) : isDisabled && disabledIcon !== '' ? (
        <div
          className={`relative inline-flex jusitfy-center items-center w-[${radialSize}px] h-[${radialSize}px] text-neutral-400 disabledicon absolute`}>
          <Icon {...disabledIconProps}>{disabledIcon}</Icon>
        </div>
      ) : (
        <Dev>
          <svg className='svg relative' width={radialSize} height={radialSize}>
            <circle
              className={`svg-circle-bg stroke-current ${backColor}`}
              cx={center}
              cy={center}
              r={radius}
              fill='none'
              strokeWidth={strokeWidth}
            />
            <circle
              ref={circleRef}
              className={`svg-circle-bg stroke-current ${frontColor}`}
              cx={center}
              cy={center}
              r={radius}
              fill={
                completionIcon && progress === 100 ? 'currentColor' : 'none'
              }
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform={`rotate(-90, ${center}, ${center})`}
            />
            {progress === 100 && completionIcon === '' ? (
              <circle
                ref={circleRef}
                className={`svg-circle-inner fill-current ${frontColor}`}
                cx={center}
                cy={center}
                r={innerRadius}
              />
            ) : null}
          </svg>
        </Dev>
      )}
    </Dev>
  );
};
