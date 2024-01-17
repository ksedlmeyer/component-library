import { FC, useEffect, useId, useRef } from 'react';
import cn from 'classnames';
import { GradientDirection } from '../../utils/types';
import {
  ColorGen,
  GradientSVG,
  Modifiers,
  MarginObject
} from '../../utils/helpers';
import { IconGradientDirectionValues, IconProps } from './icon.types';
import * as HIconsOutline from '@heroicons/react/24/outline';
import * as HIconsSolid from '@heroicons/react/24/solid';
export * from './icon.types';

export const Icon: FC<IconProps> = ({
  svg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" /></svg>',
  defaultPalette = 'primary',
  defaultPaletteStop = 500,
  fillPalette = 'none',
  fillPaletteStop = 500,
  gradientDirection = 't',
  gradientFrom,
  gradientVia,
  gradientTo,
  width = 'fit',
  height,
  rounded,
  shadow,
  margin,
  opacity = 100,
  blend = 'normal',
  aspectRatio = 'square',
  centerSelf = false,
  cursor,
  iconType = 'solid',
  strokePalette = 'none',
  strokePaletteStop = 500,
  strokeWidth,
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { ...iconsSolid }: any = HIconsSolid;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { ...iconsOutline }: any = HIconsOutline;
  const ref = useRef<SVGSVGElement>(null);
  const gradientId = useId();
  const textColor = ColorGen(defaultPalette, defaultPaletteStop, 'text');
  const fillColor = GradientSVG(fillPalette, fillPaletteStop, gradientId);
  const strokeColor = GradientSVG(strokePalette, strokePaletteStop, gradientId);

  const classNames = cn(
    {
      [`${textColor}`]: true,
      [`w-${width}`]: width,
      [`h-${height ?? width}`]: height ?? width,
      [`${Modifiers(margin, 'm', MarginObject)}`]: margin,
      [`${shadow === 'base' ? 'shadow' : `shadow-${shadow}`}`]: shadow,
      [`${rounded === 'base' ? 'rounded' : `rounded-${rounded}`}`]: rounded,
      [`opacity-${opacity}`]: opacity,
      [`mix-blend-${blend}`]: blend,
      [`aspect-${aspectRatio}`]: aspectRatio,
      [`mx-auto`]: centerSelf,
      [`${Modifiers(cursor, 'cursor')}`]: cursor,
      [`${Modifiers(strokeWidth, 'stroke')}`]: strokeWidth
    },
    props.classes
  );

  useEffect(() => {
    const icon = ref.current;
    if (icon) {
      icon.innerHTML = svg;
      const path = icon.getElementsByTagName('svg')[0];
      if (path) {
        if (fillPalette !== 'none' && iconType === 'solid')
          path.setAttribute('fill', fillColor);
        if (iconType === 'outline') {
          path.setAttribute('fill', 'transparent');
          path.setAttribute('stroke', 'currentColor');
        }
        if (strokePalette !== 'none') {
          path.setAttribute('stroke', strokeColor);
        }
      }
    }
  }, [
    svg,
    fillPalette,
    fillPaletteStop,
    strokePalette,
    strokePaletteStop,
    fillColor,
    strokeColor,
    iconType
  ]);

  const IconToRender =
    iconType === 'outline' ? iconsOutline[svg] : iconsSolid[svg];

  return (
    <svg className={classNames}>
      <defs>
        <linearGradient
          id={gradientId}
          {...IconGradientDirectionValues[
            gradientDirection as GradientDirection
          ]}>
          <stop
            offset='0%'
            style={{
              stopColor: `var(--color-${gradientFrom})`,
              stopOpacity: 1
            }}
          />
          <stop
            offset='50%'
            style={{
              stopColor: `var(--color-${gradientVia})`,
              stopOpacity: 1
            }}
          />
          <stop
            offset='100%'
            style={{
              stopColor: `var(--color-${gradientTo})`,
              stopOpacity: 1
            }}
          />
        </linearGradient>
      </defs>
      {svg.substring(1, 4) !== 'svg' && IconToRender !== undefined ? (
        <IconToRender
          {...props}
          fill={
            iconType === 'outline'
              ? 'none'
              : defaultPalette === 'gradient'
              ? `url(#${gradientId})`
              : fillPalette === 'none'
              ? 'currentColor'
              : fillColor
          }
          stroke={
            iconType === 'outline' && strokePalette !== 'none'
              ? strokeColor
              : iconType === 'outline'
              ? 'var(--color-primary-500)'
              : strokePalette !== 'none'
              ? strokeColor
              : 'none'
          }
        />
      ) : svg.substring(1, 4) !== 'svg' && IconToRender === undefined ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
          />
        </svg>
      ) : (
        <svg ref={ref} {...props} />
      )}
    </svg>
  );
};
