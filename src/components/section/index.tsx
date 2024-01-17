import { FC } from 'react';
import { CollectionGrid } from '../collectionGrid';
import { CollectionGridProps } from '../collectionGrid/collectionGrid.types';
import { CollectionGridScrolling } from '../collectionGridScrolling';
import { CollectionGridScrollingProps } from '../collectionGridScrolling/collectionGridScrolling.types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Divider } from '../divider';
import { DividerProps } from '../divider/divider.types';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import { SectionProps } from './section.types';
export * from './section.types';

export const Section: FC<SectionProps> = ({
  classes,
  sectionTitle = '',
  sectionCorner = 'square',
  dividerShow = true,
  viewAll = true,
  viewAllCount = true,
  viewAllText = 'View All',
  viewAllLimit = 10,
  itemCollectionDisplay = 'CollectionGrid',
  padding = 8,
  badgeSize = 'basic',
  badgeCorner = 'rounded-full',
  bgPalette = 'transparent',
  bgPaletteStop = 500,
  sectionDescriptionPaletteStop = 600,
  textAlign = 'left',
  alignItems = 'stretch',
  thumbnailDivHeight = 40,
  overallPalette = 'primary',
  gap = 2,
  gridCols,
  titleContainerClasses,
  onSectionViewAll,
  itemDisplay = 'ItemCard',
  listAggregate = false,
  items,
  themeInverse,
  inversePaletteStop,
  textPaletteStop = 700,
  leadingIcon,
  trailingIcon,
  sectionTitleSize,
  lineClamp,
  isDisabled,
  titleTextShadowDirection,
  titleTextShadowBlur,
  titleTextShadowOpacity,
  titleTextShadowPalette,
  titleTextShadowPaletteStop,
  titleTextShadowThickness,
  viewAllLeadingIcon,
  viewAllTrailingIcon,
  viewAllTextShadowDirection,
  viewAllTextShadowBlur,
  viewAllTextShadowOpacity,
  viewAllTextShadowPalette,
  viewAllTextShadowPaletteStop,
  viewAllTextShadowThickness,
  dividerPaletteStop = 100,
  sectionDescriptionText,
  sectionDescriptionLeadingIcon,
  sectionDescriptionTrailingIcon,
  sectionDescriptionTextShadowDirection,
  sectionDescriptionTextShadowBlur,
  sectionDescriptionTextShadowOpacity,
  sectionDescriptionTextShadowPalette,
  sectionDescriptionTextShadowPaletteStop,
  sectionDescriptionTextShadowThickness,
  sectionDescriptionProps,
  descriptionLineClamp,
  sectionDescriptionLineClamp,
  cardWidth,
  cardCorner,
  attachmentIconBgPalette,
  attachmentIconBgPaletteStop,
  attachmentIconLocation,
  attachmentIconPalette,
  attachmentIconPaletteStop,
  titleWordBreak,
  overlineWordBreak,
  descriptionWordBreak,
  hideDescriptionText,
  hideOverlineText,
  showArrows,
  hideScrollbar,
  arrowContainerWidth,
  arrows,
  arrowGridGap,
  cardHeight,
  cardBorderPalette,
  cardBorderPaletteStop,
  cardBorderWidth,
  overlineFontSize,
  overlineFontWeight,
  overlineLetterSpacing,
  titleFontSize,
  titleFontWeight,
  titleLetterSpacing,
  titleLineHeight,
  ...props
}) => {
  const itemsFiltered = items != undefined ? [...items] : [];

  if (viewAll) {
    itemsFiltered.length = viewAllLimit;
  }

  if (viewAllCount) {
    viewAllText = viewAllText + ' (' + items?.length + ')';
  }

  const containerProps: DevProps = {
    position: 'relative',
    flexDirection: 'col',
    width: 'full',
    height: 'full',
    padding,
    bgImage: props.bgImage,
    bgPalette,
    bgPaletteStop,
    gap,
    borderRadius: sectionCorner === 'rounded' ? 'lg' : 'none',
    classes,
    ...props
  };

  const titleTextProps: LabelProps = {
    label: sectionTitle,
    textPalette: overallPalette,
    textPaletteStop: themeInverse ? inversePaletteStop : textPaletteStop,
    leadingIcon,
    trailingIcon,
    size: sectionTitleSize,
    lineClamp,
    alignItems,
    textAlign,
    isDisabled,
    textClasses: {
      textShadowDirection: titleTextShadowDirection,
      textShadowBlur: titleTextShadowBlur,
      textShadowPalette: titleTextShadowPalette,
      textShadowPaletteStop: titleTextShadowPaletteStop,
      textShadowOpacity: titleTextShadowOpacity,
      textShadowThickness: titleTextShadowThickness
    }
  };

  const viewAllProps: LabelProps = {
    label: viewAllText,
    textPalette: overallPalette,
    textPaletteStop: themeInverse ? inversePaletteStop : textPaletteStop,
    leadingIcon: viewAllLeadingIcon,
    trailingIcon: viewAllTrailingIcon,
    size: 'sm',
    lineClamp: lineClamp,
    alignItems,
    textAlign,
    textClasses: {
      textShadowDirection: viewAllTextShadowDirection,
      textShadowBlur: viewAllTextShadowBlur,
      textShadowPalette: viewAllTextShadowPalette,
      textShadowPaletteStop: viewAllTextShadowPaletteStop,
      textShadowOpacity: viewAllTextShadowOpacity,
      textShadowThickness: viewAllTextShadowThickness
    }
  };

  const dividerProps: DividerProps = {
    dividerPalette: overallPalette,
    dividerPaletteStop,
    mixBlend: 'normal',
    dividerOpacity: 100,
    width: '[100%]'
  };

  const sectionDescriptionContainerProps: LabelProps = {
    label: sectionDescriptionText,
    textPalette: overallPalette,
    textPaletteStop: themeInverse
      ? inversePaletteStop
      : sectionDescriptionPaletteStop,
    isDisabled: isDisabled,
    size: 'sm',
    leadingIcon: sectionDescriptionLeadingIcon,
    trailingIcon: sectionDescriptionTrailingIcon,
    textClasses: {
      textShadowDirection: sectionDescriptionTextShadowDirection,
      textShadowBlur: sectionDescriptionTextShadowBlur,
      textShadowPalette: sectionDescriptionTextShadowPalette,
      textShadowPaletteStop: sectionDescriptionTextShadowPaletteStop,
      textShadowOpacity: sectionDescriptionTextShadowOpacity,
      textShadowThickness: sectionDescriptionTextShadowThickness
    },
    lineClamp: sectionDescriptionLineClamp,
    ...sectionDescriptionProps
  };

  const collectionGridProps: CollectionGridProps = {
    itemDisplay: itemDisplay,
    items: itemsFiltered,
    badgeSize,
    badgeCorner,
    bgPalette: overallPalette,
    descriptionLineClamp,
    thumbnailDivHeight,
    cardWidth,
    cardHeight,
    cardCorner,
    gridCols,
    attachmentIconBgPalette,
    attachmentIconBgPaletteStop,
    attachmentIconLocation,
    attachmentIconPalette,
    attachmentIconPaletteStop,
    titleWordBreak,
    overlineWordBreak,
    descriptionWordBreak,
    hideDescriptionText,
    hideOverlineText,
    listAggregate,
    gap,
    cardBorderPalette,
    cardBorderPaletteStop,
    cardBorderWidth,
    titleFontSize,
    titleFontWeight,
    titleLetterSpacing,
    titleLineHeight,
    overlineFontSize,
    overlineFontWeight,
    overlineLetterSpacing
  };

  const collectionGridScrollingProps: CollectionGridScrollingProps = {
    itemDisplay,
    showArrows,
    hideScrollbar,
    arrowContainerWidth,
    arrows,
    items: itemsFiltered,
    badgeSize,
    badgeCorner,
    arrowGridGap,
    bgPalette: overallPalette,
    descriptionLineClamp,
    cardWidth,
    cardHeight,
    thumbnailDivHeight,
    gap,
    cardCorner,
    attachmentIconBgPalette,
    attachmentIconBgPaletteStop,
    attachmentIconLocation,
    attachmentIconPalette,
    attachmentIconPaletteStop,
    titleContainerClasses,
    titleWordBreak,
    overlineWordBreak,
    descriptionWordBreak,
    hideDescriptionText,
    hideOverlineText,
    cardBorderPalette,
    cardBorderPaletteStop,
    cardBorderWidth,
    titleFontSize,
    titleFontWeight,
    titleLetterSpacing,
    titleLineHeight,
    overlineFontSize,
    overlineFontWeight,
    overlineLetterSpacing
  };

  return (
    <Dev
      {...containerProps}
      onClick={(e) => {
        e.stopPropagation();
      }}>
      {(sectionTitle !== '' || viewAll) && (
        <div className={'flex justify-between items-center'}>
          <Label {...titleTextProps} />
          {viewAll && (
            <span
              onClick={(e) => {
                if (onSectionViewAll !== undefined) {
                  e.stopPropagation();
                  onSectionViewAll(e);
                }
              }}>
              <Label {...viewAllProps} />
            </span>
          )}
        </div>
      )}
      {dividerShow && <Divider {...dividerProps} />}
      {sectionDescriptionText && (
        <Label {...sectionDescriptionContainerProps} />
      )}
      {itemCollectionDisplay === 'CollectionGrid' && (
        <CollectionGrid {...collectionGridProps} />
      )}
      {itemCollectionDisplay === 'CollectionGridScrolling' && (
        <CollectionGridScrolling {...collectionGridScrollingProps} />
      )}
    </Dev>
  );
};
