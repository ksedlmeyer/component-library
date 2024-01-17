import { FC } from 'react';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { ItemCard } from '../itemCard';
import { ItemCardCallout } from '../itemCardCallout';
import { ItemList } from '../itemList';
import { CollectionGridProps } from './collectionGrid.types';
export * from './collectionGrid.types';

export const CollectionGrid: FC<CollectionGridProps> = ({
  classes,
  cardWidth = 'full',
  cardHeight = 'full',
  itemDisplay = 'ItemCard',
  gridCols = itemDisplay === 'ItemCardCallout'
    ? 5
    : itemDisplay === 'ItemList'
    ? 1
    : 4,
  gap = 2,
  badgeSize = 'basic',
  badgeCorner = 'rounded-full',
  thumbnailDivHeight = 40,
  cardCorner = 'rounded',
  bgPalette = 'primary',
  bgPaletteStop = 800,
  listAggregate = false,
  items,
  titleLineClamp,
  overlineLineClamp,
  descriptionLineClamp = '3',
  boxShadow,
  thumbnailDivWidth,
  attachmentIconPalette,
  attachmentIconPaletteStop,
  attachmentIconBgPalette,
  attachmentIconBgPaletteStop,
  attachmentIconLocation,
  titleWordBreak,
  overlineWordBreak,
  descriptionWordBreak,
  hideDescriptionText,
  hideOverlineText,
  cardBorderWidth,
  cardBorderPalette,
  cardBorderPaletteStop,
  overlineFontSize,
  overlineFontWeight,
  overlineLetterSpacing,
  titleFontSize,
  titleFontWeight,
  titleLetterSpacing,
  titleLineHeight,
  ...props
}) => {
  const containerProps: DevProps = {
    position: 'relative',
    width: 'full',
    bgImage: props.bgImage,
    gridCols,
    gap,
    classes,
    ...props
  };

  return (
    <Dev
      {...containerProps}
      onClick={(e) => {
        e.stopPropagation();
      }}>
      {items?.map((item, index) => {
        if (itemDisplay === 'ItemCard') {
          return (
            <ItemCard
              key={item.itemID + '_' + index}
              width={cardWidth}
              height={cardHeight}
              bgPalette={item.bgPalette ? item.bgPalette : bgPalette}
              bgPaletteStop={bgPaletteStop}
              titleLineClamp={titleLineClamp}
              overlineLineClamp={overlineLineClamp}
              descriptionLineClamp={descriptionLineClamp}
              badgeSize={badgeSize}
              badgeCorner={badgeCorner}
              boxShadow={boxShadow}
              thumbnailDivHeight={thumbnailDivHeight}
              thumbnailDivWidth={thumbnailDivWidth}
              corner={cardCorner}
              attachmentIconPalette={
                item.attachmentIconPaletteOverride
                  ? item.attachmentIconPaletteOverride
                  : attachmentIconPalette
              }
              attachmentIconPaletteStop={
                item.attachmentIconPaletteStopOverride
                  ? item.attachmentIconPaletteStopOverride
                  : attachmentIconPaletteStop
              }
              attachmentIconBgPalette={
                item.attachmentIconBgPaletteOverride
                  ? item.attachmentIconBgPaletteOverride
                  : attachmentIconBgPalette
              }
              attachmentIconBgPaletteStop={
                item.attachmentIconBgPaletteStopOverride
                  ? item.attachmentIconBgPaletteStopOverride
                  : attachmentIconBgPaletteStop
              }
              attachmentIconLocation={
                item.attachmentIconLocationOverride
                  ? item.attachmentIconLocationOverride
                  : attachmentIconLocation
              }
              titleWordBreak={
                item.titleWordBreak ? item.titleWordBreak : titleWordBreak
              }
              overlineWordBreak={
                item.overlineWordBreak
                  ? item.overlineWordBreak
                  : overlineWordBreak
              }
              descriptionWordBreak={
                item.descriptionWordBreak
                  ? item.descriptionWordBreak
                  : descriptionWordBreak
              }
              hideDescriptionText={
                item.hideDescriptionText
                  ? item.hideDescriptionText
                  : hideDescriptionText
              }
              hideOverlineText={
                item.hideOverlineText ? item.hideOverlineText : hideOverlineText
              }
              cardBorderPalette={
                item.cardBorderPalette
                  ? item.cardBorderPalette
                  : cardBorderPalette
              }
              cardBorderPaletteStop={
                item.cardBorderPaletteStop
                  ? item.cardBorderPaletteStop
                  : cardBorderPaletteStop
              }
              cardBorderWidth={
                item.cardBorderWidth ? item.cardBorderWidth : cardBorderWidth
              }
              titleFontSize={titleFontSize}
              titleFontWeight={titleFontWeight}
              titleLetterSpacing={titleLetterSpacing}
              titleLineHeight={titleLineHeight}
              overlineFontSize={overlineFontSize}
              overlineFontWeight={overlineFontWeight}
              overlineLetterSpacing={overlineLetterSpacing}
              {...item}
            />
          );
        }
        if (itemDisplay === 'ItemCardCallout') {
          return (
            <ItemCardCallout
              key={item.itemID + '_' + index}
              width={cardWidth}
              height={cardHeight}
              bgPalette={item.bgPalette ? item.bgPalette : bgPalette}
              bgPaletteStop={bgPaletteStop}
              bgCardPalette={
                item.bgCardOverridePalette
                  ? item.bgCardOverridePalette
                  : bgPalette
              }
              bgCardPaletteStop={
                item.bgCardOverridePaletteStop
                  ? item.bgCardOverridePaletteStop
                  : bgPaletteStop
              }
              titleLineClamp={titleLineClamp}
              overlineLineClamp={overlineLineClamp}
              descriptionLineClamp={descriptionLineClamp}
              boxShadow={boxShadow}
              corner={cardCorner}
              titleWordBreak={
                item.titleWordBreak ? item.titleWordBreak : titleWordBreak
              }
              overlineWordBreak={
                item.overlineWordBreak
                  ? item.overlineWordBreak
                  : overlineWordBreak
              }
              descriptionWordBreak={
                item.descriptionWordBreak
                  ? item.descriptionWordBreak
                  : descriptionWordBreak
              }
              hideDescriptionText={
                item.hideDescriptionText
                  ? item.hideDescriptionText
                  : hideDescriptionText
              }
              hideOverlineText={
                item.hideOverlineText ? item.hideOverlineText : hideOverlineText
              }
              cardBorderPalette={
                item.cardBorderPalette
                  ? item.cardBorderPalette
                  : cardBorderPalette
              }
              cardBorderPaletteStop={
                item.cardBorderPaletteStop
                  ? item.cardBorderPaletteStop
                  : cardBorderPaletteStop
              }
              cardBorderWidth={
                item.cardBorderWidth ? item.cardBorderWidth : cardBorderWidth
              }
              titleFontSize={titleFontSize}
              titleFontWeight={titleFontWeight}
              titleLetterSpacing={titleLetterSpacing}
              titleLineHeight={titleLineHeight}
              overlineFontSize={overlineFontSize}
              overlineFontWeight={overlineFontWeight}
              overlineLetterSpacing={overlineLetterSpacing}
              {...item}
            />
          );
        }
        if (itemDisplay === 'ItemList') {
          return (
            <ItemList
              key={item.itemID + '_' + index}
              width={cardWidth}
              height={cardHeight}
              bgPalette={item.bgPalette ? item.bgPalette : bgPalette}
              bgPaletteStop={bgPaletteStop}
              titleLineClamp={titleLineClamp}
              overlineLineClamp={overlineLineClamp}
              descriptionLineClamp={descriptionLineClamp}
              boxShadow={boxShadow}
              thumbnailDivHeight={thumbnailDivHeight}
              thumbnailDivWidth={thumbnailDivWidth}
              corner={cardCorner}
              attachmentIconPalette={
                item.attachmentIconPaletteOverride
                  ? item.attachmentIconPaletteOverride
                  : attachmentIconPalette
              }
              attachmentIconPaletteStop={
                item.attachmentIconPaletteStopOverride
                  ? item.attachmentIconPaletteStopOverride
                  : attachmentIconPaletteStop
              }
              attachmentIconBgPalette={
                item.attachmentIconBgPaletteOverride
                  ? item.attachmentIconBgPaletteOverride
                  : attachmentIconBgPalette
              }
              attachmentIconBgPaletteStop={
                item.attachmentIconBgPaletteStopOverride
                  ? item.attachmentIconBgPaletteStopOverride
                  : attachmentIconBgPaletteStop
              }
              attachmentIconLocation={
                item.attachmentIconLocationOverride
                  ? item.attachmentIconLocationOverride
                  : attachmentIconLocation
              }
              listAggregate={listAggregate}
              titleWordBreak={
                item.titleWordBreak ? item.titleWordBreak : titleWordBreak
              }
              overlineWordBreak={
                item.overlineWordBreak
                  ? item.overlineWordBreak
                  : overlineWordBreak
              }
              descriptionWordBreak={
                item.descriptionWordBreak
                  ? item.descriptionWordBreak
                  : descriptionWordBreak
              }
              hideDescriptionText={
                item.hideDescriptionText
                  ? item.hideDescriptionText
                  : hideDescriptionText
              }
              hideOverlineText={
                item.hideOverlineText ? item.hideOverlineText : hideOverlineText
              }
              cardBorderPalette={
                item.cardBorderPalette
                  ? item.cardBorderPalette
                  : cardBorderPalette
              }
              cardBorderPaletteStop={
                item.cardBorderPaletteStop
                  ? item.cardBorderPaletteStop
                  : cardBorderPaletteStop
              }
              cardBorderWidth={
                item.cardBorderWidth ? item.cardBorderWidth : cardBorderWidth
              }
              titleFontSize={titleFontSize}
              titleFontWeight={titleFontWeight}
              titleLetterSpacing={titleLetterSpacing}
              titleLineHeight={titleLineHeight}
              overlineFontSize={overlineFontSize}
              overlineFontWeight={overlineFontWeight}
              overlineLetterSpacing={overlineLetterSpacing}
              {...item}
            />
          );
        }
      })}
    </Dev>
  );
};
