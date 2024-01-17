import { Corners, LR } from '../../utils/types';
import { BadgeProps } from '../badge';
import { ButtonProps } from '../button/button.types';
import { DevProps } from '../dev/dev.types';
import { IconProps } from '../icon/icon.types';
import { ItemCardProps } from '../itemCard/itemCard.types';
import { LabelProps } from '../label/label.types';
import { ThumbnailProps } from '../thumbnail';

export interface CollectionGridProps extends DevProps {
  overlineFontSize?: DevProps['fontSize'];
  overlineFontWeight?: DevProps['fontWeight'];
  overlineTextAlign?: DevProps['textAlign'];
  overlineLetterSpacing?: DevProps['letterSpacing'];
  titleWordBreak?: DevProps['wordBreak'];
  overlineWordBreak?: DevProps['wordBreak'];
  descriptionWordBreak?: DevProps['wordBreak'];
  items?: {
    itemID?: string;
    onClick?: ButtonProps['onClick'];
    isDisabled?: boolean;
    themeInverse?: DevProps['themeInverse'];
    // text shadows
    overlineTextShadowDirection?: DevProps['textShadowDirection'];
    overlineTextShadowPalette?: DevProps['textShadowPalette'];
    overlineTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
    overlineTextShadowBlur?: DevProps['textShadowBlur'];
    overlineTextShadowThickness?: DevProps['textShadowThickness'];
    overlineTextShadowOpacity?: DevProps['textShadowOpacity'];
    titleTextShadowDirection?: DevProps['textShadowDirection'];
    titleTextShadowPalette?: DevProps['textShadowPalette'];
    titleTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
    titleTextShadowBlur?: DevProps['textShadowBlur'];
    titleTextShadowThickness?: DevProps['textShadowThickness'];
    titleTextShadowOpacity?: DevProps['textShadowOpacity'];
    descriptionTextShadowDirection?: DevProps['textShadowDirection'];
    descriptionTextShadowPalette?: DevProps['textShadowPalette'];
    descriptionTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
    descriptionTextShadowBlur?: DevProps['textShadowBlur'];
    descriptionTextShadowThickness?: DevProps['textShadowThickness'];
    descriptionTextShadowOpacity?: DevProps['textShadowOpacity'];
    cardBorderWidth?: DevProps['borderWidth'];
    cardBorderPalette?: DevProps['borderPalette'];
    cardBorderPaletteStop?: DevProps['borderPaletteStop'];
    boxShadow?: DevProps['boxShadow'];
    thumbnailProps?: ThumbnailProps;
    bgPalette?: DevProps['bgPalette'];
    bgCardPalette?: ItemCardProps['bgCardPalette'];
    bgCardPaletteStop?: ItemCardProps['bgCardPaletteStop'];
    bgCardOverridePalette?: ItemCardProps['bgCardPalette'];
    bgCardOverridePaletteStop?: ItemCardProps['bgCardPaletteStop'];
    bgImage?: DevProps['bgImage'];
    bgPosition?: DevProps['bgPosition'];
    bgRepeat?: DevProps['bgRepeat'];
    bgSize?: DevProps['bgSize'];
    overlineText?: string;
    overlineTextPalette?: DevProps['textPalette'];
    overlineTextPaletteStop?: DevProps['textPaletteStop'];
    overlineLeadingIcon?: IconProps['svg'];
    overlineTrailingIcon?: IconProps['svg'];
    titleText?: string;
    titleLeadingIcon?: IconProps['svg'];
    titleTrailingIcon?: IconProps['svg'];
    iconSize?: ItemCardProps['iconSize'];
    titleTextPalette?: DevProps['textPalette'];
    titleTextPaletteStop?: DevProps['textPaletteStop'];
    descriptionText?: string;
    descriptionTextPalette?: DevProps['textPalette'];
    descriptionTextPaletteStop?: DevProps['textPaletteStop'];
    descriptionLeadingIcon?: IconProps['svg'];
    descriptionTrailingIcon?: IconProps['svg'];
    hideOverlineText?: boolean;
    hideDescriptionText?: boolean;
    titleWordBreak?: DevProps['wordBreak'];
    overlineWordBreak?: DevProps['wordBreak'];
    descriptionWordBreak?: DevProps['wordBreak'];
    buttonIcons?: {
      icon: string;
      selected: boolean;
      onClick?: ButtonProps['onClick'];
      bgPalette?: ButtonProps['bgPalette'];
      bgPaletteStop?: ButtonProps['bgPaletteStop'];
      props?: ButtonProps;
    }[];
    // ItemCard GroupBadges Section
    badges?: {
      label: string; //Badge
      bgPalette: BadgeProps['bgPalette']; //Badge
      props?: BadgeProps; //Badge
    }[];
    // ItemCard GroupContextValues Section
    contextValuesTextPalette?: LabelProps['textPalette'];
    contextValuesTextPaletteStop?: LabelProps['textPaletteStop'];
    contextValues?: {
      label: LabelProps['label'];
      leadingIcon: LabelProps['leadingIcon'];
      progress?: LabelProps['progress'];
      visualProgressRadial?: LabelProps['visualProgressRadial'];
      contextValueProps?: LabelProps;
    }[];
    hasAttachment?: ItemCardProps['hasAttachment'];
    attachmentIconPaletteOverride?: ItemCardProps['attachmentIconPalette'];
    attachmentIconPaletteStopOverride?: ItemCardProps['attachmentIconPaletteStop'];
    attachmentIconBgPaletteOverride?: ItemCardProps['attachmentIconBgPalette'];
    attachmentIconBgPaletteStopOverride?: ItemCardProps['attachmentIconBgPaletteStop'];
    attachmentIconLocationOverride?: LR;
    props?: ItemCardProps;
    listAggregate?: boolean;
    listAggregateState?: string;
    listAggregateLocation?: string;
    listAggregateIconHeight?: IconProps['height'];
    listAggregateIconWidth?: IconProps['width'];
    listAggregateIconPalette?: DevProps['bgPalette'];
    listAggregateIconPaletteStop?: DevProps['bgPaletteStop'];
  }[];
  titleFontSize?: DevProps['fontSize'];
  titleFontWeight?: DevProps['fontWeight'];
  titleTextAlign?: DevProps['textAlign'];
  titleLetterSpacing?: DevProps['letterSpacing'];
  titleLineHeight?: DevProps['lineHeight'];
  titleLineClamp?: LabelProps['lineClamp'];
  descriptionLineClamp?: LabelProps['lineClamp'];
  overlineLineClamp?: LabelProps['lineClamp'];
  itemDisplay?: 'ItemCard' | 'ItemCardCallout' | 'ItemList'; //Collection
  thumbnailDivWidth?: DevProps['width'];
  thumbnailDivHeight?: DevProps['height'];
  cardWidth?: DevProps['width'];
  cardHeight?: DevProps['height'];
  badgeSize?: 'basic' | 'large';
  badgeCorner?: Corners;
  cardCorner?: Corners;
  attachmentIconPalette?: ItemCardProps['attachmentIconPalette'];
  attachmentIconPaletteStop?: ItemCardProps['attachmentIconPaletteStop'];
  attachmentIconBgPalette?: ItemCardProps['attachmentIconBgPalette'];
  attachmentIconBgPaletteStop?: ItemCardProps['attachmentIconBgPaletteStop'];
  attachmentIconLocation?: LR;
  listAggregate?: boolean;
  hideDescriptionText?: boolean;
  hideOverlineText?: boolean;
  cardBorderWidth?: ItemCardProps['cardBorderWidth'];
  cardBorderPalette?: ItemCardProps['cardBorderPalette'];
  cardBorderPaletteStop?: ItemCardProps['cardBorderPaletteStop'];
}
