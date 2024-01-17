import { CollectionGridScrollingProps } from '../collectionGridScrolling/collectionGridScrolling.types';
import { DevProps } from '../dev/dev.types';
import { LabelProps } from '../label/label.types';
import { ThumbnailProps } from '../thumbnail';

export interface SectionProps extends CollectionGridScrollingProps {
  sectionCorner?: 'rounded' | 'square';
  dividerShow?: boolean;
  titleTextShadowDirection?: LabelProps['textShadowDirection'];
  titleTextShadowBlur?: LabelProps['textShadowBlur'];
  titleTextShadowThickness?: LabelProps['textShadowThickness'];
  titleTextShadowPalette?: LabelProps['textShadowPalette'];
  titleTextShadowPaletteStop?: LabelProps['textShadowPaletteStop'];
  titleTextShadowOpacity?: LabelProps['textShadowOpacity']; // Label
  sectionDescriptionTextShadowDirection?: LabelProps['textShadowDirection'];
  sectionDescriptionTextShadowBlur?: LabelProps['textShadowBlur'];
  sectionDescriptionTextShadowThickness?: LabelProps['textShadowThickness'];
  sectionDescriptionTextShadowPalette?: LabelProps['textShadowPalette'];
  sectionDescriptionTextShadowPaletteStop?: LabelProps['textShadowPaletteStop'];
  sectionDescriptionTextShadowOpacity?: LabelProps['textShadowOpacity']; // Label
  viewAllTextShadowDirection?: LabelProps['textShadowDirection'];
  viewAllTextShadowBlur?: LabelProps['textShadowBlur'];
  viewAllTextShadowThickness?: LabelProps['textShadowThickness'];
  viewAllTextShadowPalette?: LabelProps['textShadowPalette'];
  viewAllTextShadowPaletteStop?: LabelProps['textShadowPaletteStop'];
  viewAllTextShadowOpacity?: LabelProps['textShadowOpacity']; // Label
  viewAllText?: string;
  viewAllLeadingIcon?: string; //Label
  viewAllTrailingIcon?: string; //Label
  viewAllLimit?: number;
  viewAll?: boolean;
  viewAllCount?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSectionViewAll?: (e?: any) => void;
  sectionDescriptionPaletteStop?: DevProps['textPaletteStop']; // Collection
  dividerPaletteStop?: DevProps['bgPaletteStop']; // Collection
  itemCollectionDisplay?: 'CollectionGrid' | 'CollectionGridScrolling'; //Collection
  sectionDescriptionProps?: LabelProps;
  sectionDescriptionText?: string; //Label
  sectionDescriptionLeadingIcon?: string; //Label
  sectionDescriptionTrailingIcon?: string; //Label
  sectionDescriptionLineClamp?: DevProps['lineClamp']; //Label
  leadingIcon?: string;
  trailingIcon?: string;
  sectionTitleSize?: LabelProps['size'];
  isDisabled?: boolean;
  overallPalette?: DevProps['bgPalette'];
  backgroundProps?: ThumbnailProps;
  sectionTitle?: string;
  titleContainerClasses?: string;
}
