import { FC } from 'react';
import { Button } from '../button';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { GroupItemBadges } from '../groupItemBadges';
import { GroupItemContextValues } from '../groupItemContextValues';
import { Icon } from '../icon';
import { IconProps } from '../icon/icon.types';
import { ItemCardProps } from '../itemCard/itemCard.types';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import { Thumbnail, ThumbnailProps } from '../thumbnail';
import {
  active,
  bottomActive,
  bottomComplete,
  bottomLocked,
  bottomUnlocked,
  complete,
  locked,
  middleActive,
  middleComplete,
  middleLocked,
  middleUnlocked,
  topActive,
  topComplete,
  topLocked,
  topUnlocked,
  unlocked
} from '../../assets/svgs/listAggregateSVGs';

export const ItemList: FC<ItemCardProps> = ({
  classes,
  corner = 'square',
  display = 'inline-flex',
  width = 'full',
  height = 'auto',
  cardBorderWidth = 0,
  cardBorderPalette = 'neutral',
  cardBorderPaletteStop = 200,
  overlineText = 'Overline',
  titleText = 'Title',
  descriptionText = 'Description',
  thumbnailDivHeight = '[124px]',
  thumbnailDivWidth = 60,
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
  descriptionTextPalette = 'neutral',
  descriptionTextPaletteStop = 400,
  descriptionFontSize = 'sm',
  bgPalette = 'primary',
  bgPaletteStop = 500,
  themeInverse = false,
  inversePaletteStop = {
    base: 50,
    hover: 100
  },
  badgeSize = 'basic',
  badgeCorner = 'rounded-full',
  boxShadow = {
    hover: 'xl'
  },
  isDisabled = false,
  bgCardPalette,
  bgCardPaletteStop,
  hasAttachment = false,
  attachmentIconBgPalette = 'primary',
  attachmentIconBgPaletteStop = 500,
  attachmentIconPalette = 'white',
  attachmentIconLocation = 'l',
  attachmentIconBgPaletteOverride,
  attachmentIconBgPaletteStopOverride,
  attachmentIconLocationOverride,
  attachmentIconPaletteOverride,
  attachmentIconPaletteStopOverride,
  thumbnailProps,
  attachmentIconPaletteStop,
  overlineLeadingIcon,
  overlineTrailingIcon,
  overlineLineClamp,
  overlineTextShadowDirection,
  overlineTextShadowPalette,
  overlineTextShadowPaletteStop,
  overlineTextShadowBlur,
  overlineTextShadowThickness,
  overlineTextShadowOpacity,
  overlineWordBreak,
  titleLeadingIcon,
  titleTrailingIcon,
  titleTextShadowDirection,
  titleTextShadowPalette,
  titleTextShadowPaletteStop,
  titleTextShadowBlur,
  titleTextShadowThickness,
  titleTextShadowOpacity,
  titleWordBreak,
  titleLineClamp,
  descriptionLeadingIcon,
  descriptionTrailingIcon,
  descriptionLineClamp,
  descriptionTextShadowDirection,
  descriptionTextShadowPalette,
  descriptionTextShadowPaletteStop,
  descriptionTextShadowBlur,
  descriptionTextShadowThickness,
  descriptionTextShadowOpacity,
  descriptionWordBreak,
  hideOverlineText,
  hideDescriptionText,
  listAggregate = false,
  listAggregateState,
  listAggregateLocation,
  listAggregateIconWidth,
  listAggregateIconHeight,
  listAggregateIconPalette,
  listAggregateIconPaletteStop,
  contextValues,
  contextValuesTextPalette,
  contextValuesTextPaletteStop,
  badges,
  buttonIcons,
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
    borderWidth: cardBorderWidth,
    borderPalette: cardBorderPalette,
    borderPaletteStop: cardBorderPaletteStop,
    width: width,
    height: height,
    overflow: 'hidden',
    classes,
    position: 'relative',
    padding: 4,
    boxShadow,
    cursor: {
      base: isDisabled ? 'not-allowed' : 'auto',
      hover: isDisabled ? 'not-allowed' : 'pointer'
    },
    ...props
  };

  const thumbnailDivProps: DevProps = {
    display: 'grid',
    gridCols: thumbnailDivHeight === 0 || thumbnailDivWidth === 0 ? 1 : 3,
    gridRows: 1,
    height: thumbnailDivHeight,
    width: thumbnailDivWidth
  };

  const cardThumbnailProps: ThumbnailProps = {
    height: thumbnailDivHeight,
    width: thumbnailDivWidth,
    borderRadius: 'lg',
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
    textTransform: 'uppercase',
    leadingIcon: overlineLeadingIcon,
    trailingIcon: overlineTrailingIcon,
    lineClamp: overlineLineClamp,
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
    letterSpacing: titleLetterSpacing,
    lineHeight: titleLineHeight,
    leadingIcon: titleLeadingIcon,
    trailingIcon: titleTrailingIcon,
    lineClamp: titleLineClamp,
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

  const descriptionProps: LabelProps = {
    label: descriptionText,
    textPalette: descriptionTextPalette,
    textPaletteStop: themeInverse
      ? inversePaletteStop
      : descriptionTextPaletteStop,
    fontSize: descriptionFontSize,
    lineClamp: descriptionLineClamp,
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

  const titleDivBgPalette = props.bgImage ? '' : bgCardPalette;
  const titleDivBgPaletteStop = props.bgImage ? '' : bgCardPaletteStop;

  const calculateListAggregateIcon = (state?: string, location?: string) => {
    if (state === 'active') {
      if (location === 'top') {
        return topActive;
      } else if (location === 'middle') {
        return middleActive;
      } else if (location === 'bottom') {
        return bottomActive;
      } else {
        return active;
      }
    } else if (state === 'inactive') {
      if (location === 'top') {
        return topActive;
      } else if (location === 'middle') {
        return middleActive;
      } else if (location === 'bottom') {
        return bottomActive;
      } else {
        return active;
      }
    } else if (state === 'complete') {
      if (location === 'top') {
        return topComplete;
      } else if (location === 'middle') {
        return middleComplete;
      } else if (location === 'bottom') {
        return bottomComplete;
      } else {
        return complete;
      }
    } else if (state === 'locked') {
      if (location === 'top') {
        return topLocked;
      } else if (location === 'middle') {
        return middleLocked;
      } else if (location === 'bottom') {
        return bottomLocked;
      } else {
        return locked;
      }
    } else if (state === 'unlocked') {
      if (location === 'top') {
        return topUnlocked;
      } else if (location === 'middle') {
        return middleUnlocked;
      } else if (location === 'bottom') {
        return bottomUnlocked;
      } else {
        return unlocked;
      }
    }
  };

  const listAggregateIcon =
    listAggregateState || listAggregateLocation
      ? calculateListAggregateIcon(listAggregateState, listAggregateLocation)
      : '';

  return (
    <Dev display='flex'>
      {listAggregate && listAggregate === true && (
        <Icon
          svg={listAggregateIcon}
          width={listAggregateIconWidth}
          height={listAggregateIconHeight}
          defaultPalette={
            listAggregateState === 'inactive' || listAggregateState === 'locked'
              ? 'neutral'
              : listAggregateIconPalette
          }
          defaultPaletteStop={listAggregateIconPaletteStop}
        />
      )}
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
        <div className='flex'>
          <Dev {...thumbnailDivProps}>
            <Thumbnail {...cardThumbnailProps}></Thumbnail>
            {hasAttachment && (
              <Dev {...attachmentDivProps}>
                <Icon {...attachmentIconProps} />
              </Dev>
            )}
          </Dev>
        </div>
        {(overlineText || titleText !== '' || descriptionText) && (
          <div
            className={`px-4 pt-2 pb-1.5 w-full flex flex-col justify-center space-y-2 bg-${titleDivBgPalette}-${titleDivBgPaletteStop}`}>
            {/* Leading Content */}
            <div className='flex flex-col space-y-0.5'>
              {overlineText && !hideOverlineText && (
                <Label {...overlineProps} />
              )}
              {titleText && <Label {...titleProps} />}
            </div>
            {descriptionText && !hideDescriptionText && (
              <Label {...descriptionProps} />
            )}
            {/* END OF Leading Content */}
            {/* Trailing Content */}
            {/* Trailing Meta */}
            <div className='flex'>
              {/* Trailing Meta Left */}
              <div className='flex flex-grow items-center space-x-4'>
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
                {/* Leading Meta */}
                <div className=''>
                  {badges && (
                    <GroupItemBadges
                      badges={badges}
                      badgeCorner={badgeCorner}
                      badgeSize={badgeSize}
                    />
                  )}
                </div>
                {/* End of Leading Meta */}
              </div>
              {/* END Trailing Meta Left */}
              {/* Trailing Meta Right */}
              {buttonIcons && (
                <div className='justify-self-end'>
                  <div className='inline-flex items-center gap-1 justify-self-end'>
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
                    })}
                    {/* END of Trailing Meta Right */}
                  </div>
                  {/* End of  Meta */}
                </div>
              )}
            </div>
          </div>
        )}
      </Dev>
    </Dev>
  );
};
