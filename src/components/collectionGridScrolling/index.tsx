import { FC, useCallback, useRef, useState, useEffect } from 'react';
import { CollectionGridScrollingProps } from './collectionGridScrolling.types';
import clsx from 'clsx';
import { DevProps } from '../dev/dev.types';
import { LabelProps } from '../label/label.types';
import { Dev } from '../dev';
import { Label } from '../label';
import { ItemCard } from '../itemCard';
import { ItemCardCallout } from '../itemCardCallout';
export * from './collectionGridScrolling.types';

export const CollectionGridScrolling: FC<CollectionGridScrollingProps> = ({
  classes,
  showArrows = true,
  hideScrollbar = false,
  arrowContainerWidth = 12,
  arrowGridGap = 1,
  arrows = {
    arrowPalette: 'primary',
    arrowPaletteStop: 700,
    arrowHoverPalette: 'primary',
    arrowHoverDuration: 300,
    arrowSize: '3xl',
    leftArrowIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>`,
    rightArrowIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>`,
    arrowTextAlign: 'center',
    arrowAlignItems: 'center',
    arrowLineHeight: 'normal',
    arrowFontWeight: 'normal',
    arrowLetterSpacing: 'normal',
    rightText: '',
    leftText: '',
    leftArrowContainerCorner: 'rounded-l-xl',
    rightArrowContainerCorner: 'rounded-r-xl'
  },
  gap = 4,
  badgeSize = 'basic',
  badgeCorner = 'rounded-full',
  thumbnailDivHeight = 32,
  cardWidth = 60,
  cardCorner = 'rounded',
  bgPaletteStop = 800,
  descriptionLineClamp = '3',
  titleContainerClasses,
  itemDisplay = 'ItemCard',
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(false);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const handleScroll = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      const cardContainer = scrollRef.current;
      if (cardContainer) {
        const { scrollLeft, scrollWidth, clientWidth } = cardContainer;
        setIsLeftDisabled(scrollLeft === 0);
        setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
        const scrollDistance = Math.round(
          scrollWidth / (props.items?.length as number)
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Object is possibly 'null'.
        switch (e.currentTarget.id) {
          case 'left':
            cardContainer.scrollLeft -= scrollDistance;
            break;
          case 'right':
            cardContainer.scrollLeft += scrollDistance;
            break;
        }
      }
    },
    [props.items]
  );

  useEffect(() => {
    const cardContainer = scrollRef.current;
    if (cardContainer) {
      cardContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (cardContainer) {
        cardContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  const rootClasses = [
    'inline-flex',
    'overflow-x-scroll',
    'w-full',
    `gap-${gap}`
  ];

  if (props.addClasses !== undefined) {
    rootClasses.push(props.addClasses);
  }

  const outerContainerProps: DevProps = {
    display: 'flex',
    gap: arrowGridGap,
    zIndex: '10',
    classes
  };

  const leftArrowLabelProps: LabelProps = {
    label: arrows.leftText,
    textPalette: arrows.arrowPalette,
    textPaletteStop: arrows.arrowPaletteStop,
    size: arrows.arrowSize,
    leadingIcon: arrows.leftArrowIcon,
    textAlign: arrows.arrowTextAlign,
    alignItems: arrows.arrowAlignItems,
    lineHeight: arrows.arrowLineHeight,
    letterSpacing: arrows.arrowLetterSpacing,
    cursor: isLeftDisabled ? 'not-allowed' : 'pointer'
  };

  const rightArrowLabelProps: LabelProps = {
    label: arrows.rightText,
    textPalette: arrows.arrowPalette,
    textPaletteStop: arrows.arrowPaletteStop,
    size: arrows.arrowSize,
    leadingIcon: arrows.rightArrowIcon,
    textAlign: arrows.arrowTextAlign,
    alignItems: arrows.arrowAlignItems,
    lineHeight: arrows.arrowLineHeight,
    letterSpacing: arrows.arrowLetterSpacing,
    fontWeight: arrows.arrowFontWeight,
    cursor: isLeftDisabled ? 'not-allowed' : 'pointer'
  };

  const arrowClasses = (isDisabled: boolean) => {
    const disabled = `opacity-40 cursor-not-allowed`;
    const active = `cursor-pointer hover:bg-${arrows.arrowHoverPalette}-50 active:bg-${arrows.arrowHoverPalette}-100`;
    const classes = clsx({
      [`w-${arrowContainerWidth} flex justify-center items-center translate duration-${
        arrows?.arrowHoverDuration ?? 300
      }`]: true,
      [`${isDisabled ? disabled : active}`]: true,
      [`hidden`]: !showArrows
    });
    return classes;
  };

  return (
    <Dev {...outerContainerProps}>
      {hideScrollbar ? (
        <style>{`::-webkit-scrollbar { height: 0; }`}</style>
      ) : null}
      <span
        id='left'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={(e: any) => {
          handleScroll(e);
        }}
        className={`${arrowClasses(isLeftDisabled)} ${
          arrows?.leftArrowContainerCorner ?? 'rounded-l-xl'
        }`}>
        <Label {...leftArrowLabelProps} />
      </span>
      <div
        ref={scrollRef}
        className={clsx(rootClasses)}
        style={{ scrollBehavior: 'smooth' }}>
        <div className={`flex flex-nowrap mt-1 mb-1 gap-${gap}`}>
          {props.items?.map((item, index) => {
            if (itemDisplay === 'ItemCard') {
              return (
                <ItemCard
                  key={item.itemID + '_' + index}
                  width={cardWidth}
                  height={props.cardHeight}
                  bgPalette={item.bgPalette ? item.bgPalette : props.bgPalette}
                  bgPaletteStop={bgPaletteStop}
                  titleLineClamp={props.titleLineClamp}
                  overlineLineClamp={props.overlineLineClamp}
                  descriptionLineClamp={descriptionLineClamp}
                  badgeSize={badgeSize}
                  badgeCorner={badgeCorner}
                  boxShadow={props.boxShadow}
                  thumbnailDivHeight={thumbnailDivHeight}
                  corner={cardCorner}
                  attachmentIconPalette={
                    item.attachmentIconPaletteOverride
                      ? item.attachmentIconPaletteOverride
                      : props.attachmentIconPalette
                  }
                  attachmentIconPaletteStop={
                    item.attachmentIconPaletteStopOverride
                      ? item.attachmentIconPaletteStopOverride
                      : props.attachmentIconPaletteStop
                  }
                  attachmentIconBgPalette={
                    item.attachmentIconBgPaletteOverride
                      ? item.attachmentIconBgPaletteOverride
                      : props.attachmentIconBgPalette
                  }
                  attachmentIconBgPaletteStop={
                    item.attachmentIconBgPaletteStopOverride
                      ? item.attachmentIconBgPaletteStopOverride
                      : props.attachmentIconBgPaletteStop
                  }
                  attachmentIconLocation={
                    item.attachmentIconLocationOverride
                      ? item.attachmentIconLocationOverride
                      : props.attachmentIconLocation
                  }
                  titleWordBreak={
                    item.titleWordBreak
                      ? item.titleWordBreak
                      : props.titleWordBreak
                  }
                  overlineWordBreak={
                    item.overlineWordBreak
                      ? item.overlineWordBreak
                      : props.overlineWordBreak
                  }
                  descriptionWordBreak={
                    item.descriptionWordBreak
                      ? item.descriptionWordBreak
                      : props.descriptionWordBreak
                  }
                  hideDescriptionText={
                    item.hideDescriptionText
                      ? item.hideDescriptionText
                      : props.hideDescriptionText
                  }
                  hideOverlineText={
                    item.hideOverlineText
                      ? item.hideOverlineText
                      : props.hideOverlineText
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
                    item.cardBorderWidth
                      ? item.cardBorderWidth
                      : cardBorderWidth
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
                  titleContainerClasses={titleContainerClasses}
                  key={item.itemID + '_' + index}
                  width={cardWidth}
                  height={props.cardHeight}
                  bgPalette={item.bgPalette ? item.bgPalette : props.bgPalette}
                  bgPaletteStop={bgPaletteStop}
                  bgCardPalette={
                    item.bgCardOverridePalette
                      ? item.bgCardOverridePalette
                      : props.bgPalette
                  }
                  bgCardPaletteStop={
                    item.bgCardOverridePaletteStop
                      ? item.bgCardOverridePaletteStop
                      : bgPaletteStop
                  }
                  titleLineClamp={props.titleLineClamp}
                  overlineLineClamp={props.overlineLineClamp}
                  descriptionLineClamp={descriptionLineClamp}
                  boxShadow={props.boxShadow}
                  corner={cardCorner}
                  titleWordBreak={
                    item.titleWordBreak
                      ? item.titleWordBreak
                      : props.titleWordBreak
                  }
                  overlineWordBreak={
                    item.overlineWordBreak
                      ? item.overlineWordBreak
                      : props.overlineWordBreak
                  }
                  descriptionWordBreak={
                    item.descriptionWordBreak
                      ? item.descriptionWordBreak
                      : props.descriptionWordBreak
                  }
                  hideDescriptionText={
                    item.hideDescriptionText
                      ? item.hideDescriptionText
                      : props.hideDescriptionText
                  }
                  hideOverlineText={
                    item.hideOverlineText
                      ? item.hideOverlineText
                      : props.hideOverlineText
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
                    item.cardBorderWidth
                      ? item.cardBorderWidth
                      : cardBorderWidth
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
              return null;
            }
          })}
        </div>
      </div>
      <span
        id='right'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={(e: any) => {
          handleScroll(e);
        }}
        className={`${arrowClasses(isRightDisabled)} ${
          arrows?.rightArrowContainerCorner ?? 'rounded-r-xl'
        }`}>
        <Label {...rightArrowLabelProps} />
      </span>
    </Dev>
  );
};
