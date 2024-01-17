import { FC } from 'react';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { ItemCardProps } from '../itemCard/itemCard.types';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import { Thumbnail, ThumbnailProps } from '../thumbnail';

export const ItemCardCallout: FC<ItemCardProps> = ({
  classes,
  corner = 'rounded-full',
  display = 'inline-block',
  cardBorderWidth = 0,
  cardBorderPalette = 'neutral',
  cardBorderPaletteStop = 200,
  width = '[280px]',
  height = 'auto',
  descriptionText = 'Description',
  titleText = 'Title',
  thumbnailDivPosition = 'absolute',
  overlineFontSize = 'xs',
  overlineFontWeight = 'normal',
  overlineTextPalette = 'primary',
  overlineTextPaletteStop = 200,
  overlineTextAlign = 'left',
  overlineLetterSpacing = 'normal',
  titleFontSize = 'lg',
  titleFontWeight = 'semibold',
  titleTextPalette = 'white',
  titleTextPaletteStop = 50,
  titleTextAlign = 'left',
  titleLetterSpacing = 'normal',
  titleLineHeight = 'snug',
  titleLineClamp = 'none',
  descriptionFontWeight = 'normal',
  bgCardPalette = 'primary',
  bgCardPaletteStop = 800,
  descriptionTextPalette = 'neutral',
  descriptionTextPaletteStop = 300,
  themeInverse = false,
  titleContainerClasses,
  inversePaletteStop = {
    base: 50,
    hover: 100
  },
  isDisabled = false,
  position = 'relative',
  thumbnailProps = {
    textureMixBlend: 'overlay'
  },
  boxShadow = {
    hover: 'xl'
  },
  iconSize = 'lg',
  overlineText,
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
  descriptionFontSize,
  hideOverlineText,
  hideDescriptionText,
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
      corner === 'rounded' ? 'md' : corner === 'rounded-full' ? 'full' : 'none',
    display,
    flexDirection: 'col',
    justifyContent: 'end',
    borderWidth: cardBorderWidth,
    borderPalette: cardBorderPalette,
    borderPaletteStop: cardBorderPaletteStop,
    width: width,
    height: height,
    overflow: 'hidden',
    classes: classes,
    themeInverse,
    cursor: {
      base: isDisabled ? 'not-allowed' : 'auto',
      hover: isDisabled ? 'not-allowed' : 'pointer'
    },
    position,
    boxShadow,
    ...props
  };

  const thumbnailDivProps: DevProps = {
    position: thumbnailDivPosition,
    height: 'full',
    width: 'full'
  };

  const cardThumbnailProps: ThumbnailProps = {
    height: 'full',
    width: 'full',
    borderRadius: 'none',
    cardType: 'callout',
    ...thumbnailProps
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
    iconSize: iconSize,
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
    fontWeight: descriptionFontWeight,
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

  return (
    <Dev {...containerProps}>
      <div className='w-full h-full absolute'>
        <Dev {...thumbnailDivProps}>
          <Thumbnail {...cardThumbnailProps}></Thumbnail>
        </Dev>
      </div>
      <div
        className={
          corner === 'rounded-full'
            ? `p-8 flex flex-col h-full pt-16 items-start space-y-0.5 bg-${titleDivBgPalette}-${titleDivBgPaletteStop}`
            : `p-5 flex flex-col h-full pt-16 items-start space-y-0.5 bg-${titleDivBgPalette}-${titleDivBgPaletteStop}`
        }>
        {/* Leading Content */}
        <div
          className={`flex flex-grow space-y-0.5 ${
            titleContainerClasses ? titleContainerClasses : 'flex-col'
          }`}>
          {overlineText && !hideOverlineText && <Label {...overlineProps} />}
          {titleText && <Label {...titleProps} />}
        </div>
        {descriptionText && !hideDescriptionText && (
          <Label {...descriptionProps} />
        )}
      </div>
    </Dev>
  );
};
