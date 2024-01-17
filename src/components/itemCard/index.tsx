import { FC } from 'react';
import { Height } from '../../utils/types';
import { Button } from '../button';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { GroupItemBadges } from '../groupItemBadges';
import { GroupItemContextValues } from '../groupItemContextValues';
import { Icon } from '../icon';
import { IconProps } from '../icon/icon.types';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import { Thumbnail, ThumbnailProps } from '../thumbnail';
import { ItemCardProps } from './itemCard.types';
export * from './itemCard.types';

export const ItemCard: FC<ItemCardProps> = ({
  classes,
  buttonIcons,
  badges,
  contextValues,
  isDisabled = false,
  corner = 'rounded',
  display = 'inline-block',
  flexDirection = 'col',
  cardBorderWidth = 0,
  cardBorderPalette = 'neutral',
  cardBorderPaletteStop = 200,
  width = '[280px]',
  height = 'auto',
  overlineText = 'Overline',
  titleText = 'Title',
  thumbnailDivHeight = 44,
  thumbnailDivWidth = 'full',
  overlineFontSize = 'xs',
  overlineFontWeight = 'normal',
  overlineTextPalette = 'primary',
  overlineTextPaletteStop = 500,
  overlineTextAlign = 'left',
  overlineLetterSpacing = 'normal',
  titleFontSize = 'lg',
  titleFontWeight = 'semibold',
  titleTextPalette = 'neutral',
  titleTextPaletteStop = 700,
  titleTextAlign = 'left',
  titleLetterSpacing = 'normal',
  titleLineHeight = 'snug',
  descriptionFontWeight = 'normal',
  descriptionTextPalette = 'neutral',
  descriptionTextPaletteStop = 400,
  bgPalette = 'primary',
  bgPaletteStop = 500,
  themeInverse = false,
  inversePaletteStop = {
    base: 50,
    hover: 100
  },
  badgeSize = 'basic',
  badgeCorner = 'rounded-full',
  hasAttachment = false,
  attachmentIconBgPalette = 'primary',
  attachmentIconBgPaletteStop = 500,
  attachmentIconPalette = 'white',
  attachmentIconPaletteStop,
  attachmentIconLocation = 'l',
  attachmentIconBgPaletteOverride,
  attachmentIconBgPaletteStopOverride,
  attachmentIconLocationOverride,
  attachmentIconPaletteOverride,
  attachmentIconPaletteStopOverride,
  boxShadow = {
    hover: 'xl'
  },
  titleContainerClasses,
  bgCardPalette,
  bgCardPaletteStop,
  iconSize,
  hideOverlineText,
  hideDescriptionText,
  descriptionText,
  thumbnailProps,
  overlineLineClamp,
  overlineLeadingIcon,
  overlineTrailingIcon,
  overlineTextShadowDirection,
  overlineTextShadowPalette,
  overlineTextShadowPaletteStop,
  overlineTextShadowBlur,
  overlineTextShadowThickness,
  overlineTextShadowOpacity,
  overlineWordBreak,
  titleLineClamp,
  titleLeadingIcon,
  titleTrailingIcon,
  titleTextShadowDirection,
  titleTextShadowPalette,
  titleTextShadowPaletteStop,
  titleTextShadowBlur,
  titleTextShadowThickness,
  titleTextShadowOpacity,
  titleWordBreak,
  descriptionLineClamp,
  descriptionLeadingIcon,
  descriptionTrailingIcon,
  descriptionTextShadowDirection,
  descriptionTextShadowPalette,
  descriptionTextShadowPaletteStop,
  descriptionTextShadowBlur,
  descriptionTextShadowThickness,
  descriptionTextShadowOpacity,
  descriptionWordBreak,
  descriptionFontSize,
  descriptionLineHeight,
  descriptionTextAlign,
  contextValuesTextPalette,
  contextValuesTextPaletteStop,
  ...props
}) => {
  const containerProps: DevProps = {
    bgPalette: bgCardPalette,
    bgPaletteStop: bgCardPaletteStop,
    bgImage: props.bgImage,
    bgPosition: props.bgPosition,
    bgRepeat: props.bgRepeat,
    bgSize: props.bgSize,
    borderRadius:
      corner === 'rounded' ? 'lg' : corner === 'rounded-full' ? 'full' : 'none',
    display,
    flexDirection,
    width: width,
    height: height as Height,
    overflow: 'hidden',
    boxShadow,
    cursor: {
      base: isDisabled ? 'not-allowed' : 'auto',
      hover: isDisabled ? 'not-allowed' : 'pointer'
    },
    classes: classes,
    ...props
  };

  const thumbnailDivProps: DevProps = {
    position: 'relative',
    display: 'grid',
    gridCols: 3,
    gridRows: 1,
    height: thumbnailDivHeight,
    width: thumbnailDivWidth
  };

  const cardThumbnailProps: ThumbnailProps = {
    height: 'full',
    width: 'full',
    borderRadius: 'none',
    gridColSize: 'span-full',
    ...thumbnailProps
  };

  const attachmentIconPlacement = attachmentIconLocationOverride
    ? attachmentIconLocationOverride
    : attachmentIconLocation;
  const attachmentDivProps: DevProps = {
    borderRadius: 'md',
    bgPalette: attachmentIconBgPaletteOverride
      ? attachmentIconBgPaletteOverride
      : attachmentIconBgPalette,
    bgPaletteStop: attachmentIconBgPaletteStopOverride
      ? attachmentIconBgPaletteStopOverride
      : attachmentIconBgPaletteStop,
    width: 9,
    height: 9,
    gridColSize: attachmentIconPlacement === 'l' ? 'start-1' : 'start-3',
    margin: attachmentIconPlacement === 'l' ? ['l-2', 't-2'] : ['r-2', 't-2'],
    padding: 1.5,
    zIndex: '50',
    justifySelf: attachmentIconPlacement === 'l' ? 'start' : 'end'
  };
  const attachmentIconProps: IconProps = {
    width: 6,
    height: 6,
    classes: '-rotate-45',
    svg: 'PaperClipIcon',
    fillPalette: attachmentIconPaletteOverride
      ? attachmentIconPaletteOverride
      : attachmentIconPalette,
    fillPaletteStop: attachmentIconPaletteStopOverride
      ? attachmentIconPaletteStopOverride
      : attachmentIconPaletteStop
  };

  const overlineProps: LabelProps = {
    label: overlineText,
    fontSize: overlineFontSize,
    fontWeight: overlineFontWeight,
    textPalette: overlineTextPalette,
    textPaletteStop: themeInverse
      ? inversePaletteStop
      : overlineTextPaletteStop,
    textAlign: overlineTextAlign,
    letterSpacing: overlineLetterSpacing,
    lineClamp: overlineLineClamp,
    textTransform: 'uppercase',
    leadingIcon: overlineLeadingIcon,
    trailingIcon: overlineTrailingIcon,
    textClasses: {
      textShadowDirection: overlineTextShadowDirection,
      textShadowPalette: overlineTextShadowPalette,
      textShadowPaletteStop: overlineTextShadowPaletteStop,
      textShadowBlur: overlineTextShadowBlur,
      textShadowThickness: overlineTextShadowThickness,
      textShadowOpacity: overlineTextShadowOpacity
    },
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    wordBreak: overlineWordBreak
  };

  const titleProps: LabelProps = {
    label: titleText,
    fontSize: titleFontSize,
    fontWeight: titleFontWeight,
    textPalette: titleTextPalette,
    textPaletteStop: themeInverse ? inversePaletteStop : titleTextPaletteStop,
    textAlign: titleTextAlign,
    lineClamp: titleLineClamp,
    letterSpacing: titleLetterSpacing,
    lineHeight: titleLineHeight,
    leadingIcon: titleLeadingIcon,
    trailingIcon: titleTrailingIcon,
    iconSize: iconSize,
    textClasses: {
      textShadowDirection: titleTextShadowDirection,
      textShadowPalette: titleTextShadowPalette,
      textShadowPaletteStop: titleTextShadowPaletteStop,
      textShadowBlur: titleTextShadowBlur,
      textShadowThickness: titleTextShadowThickness,
      textShadowOpacity: titleTextShadowOpacity
    },
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    wordBreak: titleWordBreak
  };

  const titleDivBgPalette = props.bgImage ? '' : bgCardPalette;
  const titleDivBgPaletteStop = props.bgImage ? '' : bgCardPaletteStop;

  const descriptionProps: LabelProps = {
    label: descriptionText,
    textPalette: descriptionTextPalette,
    textPaletteStop: themeInverse
      ? inversePaletteStop
      : descriptionTextPaletteStop,
    fontSize: descriptionFontSize,
    fontWeight: descriptionFontWeight,
    lineClamp: descriptionLineClamp,
    lineHeight: descriptionLineHeight,
    textAlign: descriptionTextAlign,
    leadingIcon: descriptionLeadingIcon,
    trailingIcon: descriptionTrailingIcon,
    textClasses: {
      textShadowDirection: descriptionTextShadowDirection,
      textShadowPalette: descriptionTextShadowPalette,
      textShadowPaletteStop: descriptionTextShadowPaletteStop,
      textShadowBlur: descriptionTextShadowBlur,
      textShadowThickness: descriptionTextShadowThickness,
      textShadowOpacity: descriptionTextShadowOpacity
    },
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    wordBreak: descriptionWordBreak
  };

  return (
    <Dev
      {...containerProps}
      onClick={(e) => {
        if (!isDisabled) {
          if (props.onClick !== undefined) {
            e.stopPropagation();
            props.onClick(e);
          }
        }
      }}>
      <div className='w-full flex'>
        <Dev {...thumbnailDivProps}>
          <Thumbnail {...cardThumbnailProps}></Thumbnail>
          {hasAttachment && thumbnailDivHeight !== 0 && (
            <Dev {...attachmentDivProps}>
              <Icon {...attachmentIconProps} />
            </Dev>
          )}
        </Dev>
      </div>
      <div
        className={`p-4 pb-3 h-auto flex flex-col flex-grow space-y-4 z-10 bg-${titleDivBgPalette}-${titleDivBgPaletteStop} border-${cardBorderWidth} border-${cardBorderPalette}-${cardBorderPaletteStop} border-t-0 rounded-b-${
          corner === 'rounded'
            ? 'lg'
            : corner === 'rounded-full'
            ? 'full'
            : 'none'
        }`}>
        {/* Leading Content */}
        <div
          className={`flex flex-col flex-grow space-y-0.5 ${titleContainerClasses}`}>
          {overlineText && !hideOverlineText && <Label {...overlineProps} />}
          {titleText && <Label {...titleProps} />}
          {descriptionText && !hideDescriptionText && (
            <Label {...descriptionProps} />
          )}
        </div>
        {/* Trailing Content */}
        {((buttonIcons && buttonIcons?.length > 0) ||
          (badges && badges?.length > 0) ||
          (contextValues && contextValues?.length > 0)) && (
          <div className='flex flex-col'>
            {/* Leading Meta */}
            <div>
              {badges && (
                <GroupItemBadges
                  badges={badges}
                  badgeCorner={badgeCorner}
                  badgeSize={badgeSize}
                />
              )}
            </div>
            {/* End of Leading Meta */}

            {/* Trailing Meta */}
            {((buttonIcons && buttonIcons?.length > 0) ||
              (contextValues && contextValues?.length > 0)) && (
              <div className='w-full flex items-center mt-2'>
                {/* Trailing Meta Left */}
                {contextValues && (
                  <GroupItemContextValues
                    textPalette={contextValuesTextPalette}
                    textPaletteStop={
                      themeInverse
                        ? inversePaletteStop
                        : contextValuesTextPaletteStop
                    }
                    frontRadialPalette={bgPalette}
                    frontRadialPaletteStop={bgPaletteStop}
                    contextValues={contextValues}
                    size={'xs'}
                  />
                )}
                {/* END Trailing Meta Left */}
                <div className='flex-grow'>
                  <div className='inline-flex flex-wrap gap-1'></div>
                </div>
                {/* Trailing Meta Right */}
                <div className='flex flex-nowrap gap-1 self-end'>
                  {buttonIcons && (
                    <>
                      {buttonIcons.map((icon, index) => {
                        return (
                          <Button
                            key={index}
                            bgPalette={'transparent'}
                            textPalette={
                              icon.bgPalette ? icon.bgPalette : bgPalette
                            }
                            textPaletteStop={
                              icon.bgPaletteStop && !themeInverse
                                ? icon.bgPaletteStop
                                : themeInverse
                                ? inversePaletteStop
                                : 300
                            }
                            iconOnly={true}
                            leadingIcon={icon.icon}
                            selected={icon.selected}
                            boxShadow={'none'}
                            onClick={icon.onClick}
                            {...icon.props}
                          />
                        );
                      })}{' '}
                    </>
                  )}
                </div>
                {/* END of Trailing Meta Right */}
              </div>
            )}
            {/* End of  Meta */}
          </div>
        )}
        {/* END OF Trailing Content */}
      </div>
    </Dev>
  );
};
