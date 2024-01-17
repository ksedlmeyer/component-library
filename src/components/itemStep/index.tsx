import { FC } from 'react';
import { BorderRadius } from '../../utils/types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import {
  VisualizationProgressStatusRadial,
  VisualizationProgressStatusRadialProps
} from '../visualizationProgressStatusRadial';
import { ItemStepProps, roundedCorners } from './itemStep.types';
export * from './itemStep.types';

export const ItemStep: FC<ItemStepProps> = ({
  classes,
  titleText = 'Phase Label',
  titleFontSize = 'sm',
  overlineText = '',
  bgPalette = 'primary',
  bgPaletteStop = 600,
  inversePaletteStop = 100,
  visualProgressRadial = false,
  fontWeight = 'normal',
  lineHeight = 'normal',
  letterSpacing = 'normal',
  lineClamp = 'none',
  overlineLineClamp = '1',
  textAlign = 'left',
  alignItems = 'center',
  showChevron = true,
  isLink = false,
  isDisabled = false,
  progress = 0,
  completionIcon = '',
  disabledIcon = '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" /></svg>',
  loadAnimation = false,
  frontRadialPalette = 'primary',
  frontRadialPaletteStop = 600,
  backRadialPalette = 'neutral',
  backRadialPaletteStop = 300,
  backRadialInversePaletteStop = 300,
  size = '4xl',
  titleTextPalette = 'neutral',
  titleTextPaletteStop = 600,
  themeInverse = false,
  corner = 'rounded',
  ...props
}) => {
  const containerProps: DevProps = {
    position: 'relative',
    display: 'inline-flex',
    width: 'auto',
    bgPalette:
      progress === 100 && !isDisabled
        ? bgPalette
        : isDisabled
        ? 'transparent'
        : 'neutral',
    bgPaletteStop: themeInverse ? 500 : inversePaletteStop,
    classes: classes,
    opacity: isDisabled ? 60 : 100,
    cursor: isDisabled ? 'not-allowed' : 'auto',
    borderRadius: roundedCorners[corner] as BorderRadius,
    ...props
  };

  const visualProgressRadialProps: VisualizationProgressStatusRadialProps = {
    frontRadialPalette,
    frontRadialPaletteStop: themeInverse
      ? inversePaletteStop
      : frontRadialPaletteStop,
    backRadialPalette,
    backRadialPaletteStop: themeInverse
      ? backRadialInversePaletteStop
      : backRadialPaletteStop,
    progress,
    size,
    loadAnimation,
    isDisabled,
    disabledIcon,
    completionIcon
  };

  const overlineProps: LabelProps = {
    label: overlineText,
    textPalette: props.textPalette,
    textPaletteStop: themeInverse ? inversePaletteStop : bgPaletteStop,
    fontSize: 'sm',
    lineClamp: overlineLineClamp,
    alignItems,
    textAlign,
    isDisabled,
    textTransform: 'uppercase',
    leadingIcon: props.overlineLeadingIcon,
    trailingIcon: props.overlineTrailingIcon,
    textClasses: {
      textShadowDirection: props.overlineTextShadowDirection,
      textShadowPalette: props.overlineTextShadowPalette,
      textShadowPaletteStop: props.overlineTextShadowPaletteStop,
      textShadowBlur: props.overlineTextShadowBlur,
      textShadowThickness: props.overlineTextShadowThickness,
      textShadowOpacity: props.overlineTextShadowOpacity
    },
    textDecoration: {
      hover: isLink ? 'underline' : 'no-underline'
    },
    cursor: {
      hover: isLink ? 'pointer' : 'auto'
    }
  };

  const titleProps: LabelProps = {
    label: titleText,
    fontSize: titleFontSize,
    textPalette: titleTextPalette,
    textPaletteStop: themeInverse ? inversePaletteStop : titleTextPaletteStop,
    leadingIcon: props.titleLeadingIcon,
    trailingIcon: props.titleTrailingIcon,
    textClasses: {
      textShadowDirection: props.titleTextShadowDirection,
      textShadowPalette: props.titleTextShadowPalette,
      textShadowPaletteStop: props.titleTextShadowPaletteStop,
      textShadowBlur: props.titleTextShadowBlur,
      textShadowThickness: props.titleTextShadowThickness,
      textShadowOpacity: props.titleTextShadowOpacity
    },
    textDecoration: {
      hover: isLink ? 'underline' : 'no-underline'
    },
    cursor: {
      hover: isLink ? 'pointer' : 'auto'
    },
    lineClamp,
    alignItems,
    textAlign,
    isDisabled,
    fontWeight,
    letterSpacing,
    lineHeight
  };

  const chevronProps: DevProps = {
    position: 'absolute',
    display: 'block',
    width: 5,
    height: 'full',
    top: 0,
    classes: '-right-5',
    textPalette:
      progress === 100 && !isDisabled
        ? bgPalette
        : isDisabled
        ? 'transparent'
        : 'neutral',
    textPaletteStop: themeInverse ? 500 : inversePaletteStop
  };

  return (
    <Dev {...containerProps}>
      <div className='inline-flex items-center w-full'>
        <span className='px-1 py-2 flex items-center'>
          {visualProgressRadial && (
            <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center'>
              <VisualizationProgressStatusRadial
                {...visualProgressRadialProps}
              />
            </span>
          )}
          <span className='ml-4 text-sm font-medium inline-flex flex-col text-gray-900'>
            {overlineText && <Label {...overlineProps} />}
            <Label {...titleProps} />
          </span>
        </span>
      </div>

      {showChevron && (
        <Dev {...chevronProps}>
          <svg
            className={`h-full w-full`}
            viewBox='0 0 22 72'
            fill='none'
            preserveAspectRatio='none'>
            <path d='M0 0L18 36L0 72' className='fill-current' />
            <mask id='path-2-inside-1' fill='white'>
              <path d='M0 0L18 36L0 72' />
            </mask>
            <path
              d='M18 36L18.8944 36.4472C19.0352 36.1657 19.0352 35.8343 18.8944 35.5528L18 36ZM-0.894427 0.447214L17.1056 36.4472L18.8944 35.5528L0.894427 -0.447214L-0.894427 0.447214ZM17.1056 35.5528L-0.894427 71.5528L0.894427 72.4472L18.8944 36.4472L17.1056 35.5528Z'
              fill='#D1D5DB'
              mask='url(#path-2-inside-1)'
            />
          </svg>
        </Dev>
      )}
    </Dev>
  );
};
