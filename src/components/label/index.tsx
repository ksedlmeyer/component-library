import { FC } from 'react';
import { Cursor, Height, SpaceBetween, Width } from '../../utils/types';
import { iconButtonSize } from '../button/button.types';
import { Dev } from '../dev';
import { Icon } from '../icon';
import { IconProps } from '../icon/icon.types';
import { Text } from '../text';
import { TextProps } from '../text/text.types';
import {
  VisualizationProgressStatusRadial,
  VisualizationProgressStatusRadialProps
} from '../visualizationProgressStatusRadial';
import { LabelProps, spacing } from './label.types';
import { ToolTip } from '../toolTipLabel/toolTip';
export * from './label.types';

export const Label: FC<LabelProps> = ({
  children,
  classes,
  label = '',
  themeInverse = false,
  selected = false,
  inversePaletteStop = 50,
  leadingIcon = '',
  trailingIcon = '',
  fontWeight = 'normal',
  size = 'base',
  fontSize = 'base',
  iconSize = size,
  lineHeight = 'none',
  letterSpacing = 'normal',
  lineClamp = 'none',
  textAlign = 'left',
  alignItems = 'center',
  isDisabled = false,
  textPalette = 'primary',
  textPaletteStop = themeInverse ? inversePaletteStop : 700,
  visualProgressRadial = false,
  showProgress = false,
  progress = 0,
  loadAnimation = false,
  frontRadialPalette = 'primary',
  frontRadialPaletteStop = 500,
  backRadialPalette = 'neutral',
  backRadialPaletteStopInverse = 300,
  backRadialPaletteStop = 300,
  leadingIconPalette = textPalette,
  leadingIconPaletteStop = textPaletteStop,
  trailingIconPalette = textPalette,
  trailingIconPaletteStop = textPaletteStop,
  leadingIconType = 'solid',
  trailingIconType = 'solid',
  textClasses,
  required = false,
  tip,
  ...props
}) => {
  const labelProps: LabelProps = {
    position: 'relative',
    display: 'inline-flex',
    alignItems,
    spaceBetween: spacing[iconSize ?? size] as SpaceBetween,
    opacity: isDisabled ? 60 : 100,
    cursor: isDisabled ? 'not-allowed' : props.cursor ? props.cursor : 'auto',
    classes,
    ...props
  };
  const radialProps: VisualizationProgressStatusRadialProps = {
    frontRadialPalette,
    frontRadialPaletteStop,
    backRadialPalette,
    backRadialPaletteStop: themeInverse
      ? backRadialPaletteStopInverse
      : backRadialPaletteStop,
    progress,
    size,
    loadAnimation
  };

  const textProps: TextProps = {
    textPalette,
    textPaletteStop,
    fontWeight,
    textAlign,
    lineClamp,
    letterSpacing,
    lineHeight,
    fontSize,
    cursor: {
      hover: isDisabled
        ? 'not-allowed'
        : props.cursor
        ? (props.cursor as Cursor)
        : 'auto'
    },
    wordBreak: props.wordBreak,
    ...textClasses
  };

  const leadingIconProps: IconProps = {
    defaultPalette: leadingIconPalette,
    defaultPaletteStop: leadingIconPaletteStop,
    strokePalette: props.strokePalette as IconProps['strokePalette'],
    strokePaletteStop:
      props.strokePaletteStop as IconProps['strokePaletteStop'],
    width: iconButtonSize[iconSize ?? size] as Width,
    height: iconButtonSize[iconSize ?? size] as Height,
    svg: leadingIcon,
    iconType: selected ? 'solid' : leadingIconType,
    flex: 'none',
    classes: 'shrink-0'
  };

  const trailingIconProps: IconProps = {
    defaultPalette: trailingIconPalette,
    defaultPaletteStop: trailingIconPaletteStop,
    strokePalette: props.strokePalette as IconProps['strokePalette'],
    strokePaletteStop:
      props.strokePaletteStop as IconProps['strokePaletteStop'],
    width: iconButtonSize[size] as Width,
    height: iconButtonSize[size] as Height,
    margin: ['l-2'],
    svg: trailingIcon,
    iconType: selected ? 'solid' : trailingIconType,
    flex: 'none',
    classes: 'shrink-0'
  };

  if (showProgress && progress !== undefined) {
    if (progress > 0 && progress < 100) {
      if (label === '' || label === undefined) {
        label = progress + '%';
      } else {
        label = progress + '% ' + label;
      }
    }
    if (progress === 0) {
      label = 'Not Started';
    }
    if (progress === 100) {
      label = 'Completed';
    }
  }

  return (
    <Dev display='flex'>
      <Dev {...labelProps}>
        {visualProgressRadial && (
          <VisualizationProgressStatusRadial {...radialProps} />
        )}
        {leadingIcon && <Icon {...leadingIconProps} />}
        {label !== '' || children !== '' ? (
          <Text {...textProps}>{label ? label : children}</Text>
        ) : null}
        {trailingIcon && <Icon {...trailingIconProps} />}
      </Dev>
      {required && <Text text='*' textPalette='error' textPaletteStop={900} />}
      {tip && (
        <div className='relative'>
          <ToolTip tip={tip} />
        </div>
      )}
    </Dev>
  );
};
