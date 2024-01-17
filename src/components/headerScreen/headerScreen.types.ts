import { TextSize } from '../../utils/types';
import { BreadcrumbProps } from '../breadcrumb';
import { DevProps } from '../dev/dev.types';
import { GroupItemBadgesProps } from '../groupItemBadges';
import { GroupItemContextValuesProps } from '../groupItemContextValues';
import { ItemCardProps } from '../itemCard/itemCard.types';
import { LinkProps } from '../link';
import { ThumbnailProps } from '../thumbnail';

export interface HeaderScreenProps extends DevProps {
  overlineText?: string;
  titleText?: string;
  titleLeadingIcon?: string;
  titleTrailingIcon?: string;
  titleLineClamp?: DevProps['lineClamp'];
  accentEffect?: boolean;
  divider?: boolean;
  breadcrumbIcon?: BreadcrumbProps['breadcrumbIcon'];
  seperatorIcon?: BreadcrumbProps['seperatorIcon'];
  breadcrumbSize?: TextSize;
  breadcrumbs?: BreadcrumbProps['breadcrumbs'];
  backButtonClick?: LinkProps['onClick'];
  onClick?: LinkProps['onClick'];
  breadcrumbProps?: BreadcrumbProps;

  badgeSize?: GroupItemBadgesProps['badgeSize'];
  badgeCorner?: GroupItemBadgesProps['badgeCorner'];
  badges?: GroupItemBadgesProps['badges'];

  contextValues?: GroupItemContextValuesProps['contextValues'];

  buttonIcons?: ItemCardProps['buttonIcons'];

  breadcrumbTextShadowDirection?: DevProps['textShadowDirection']; // Label
  breadcrumbTextShadowBlur?: DevProps['textShadowBlur']; // Label
  breadcrumbTextShadowThickness?: DevProps['textShadowThickness']; // Label
  breadcrumbTextShadowPalette?: DevProps['textShadowPalette']; // Label
  breadcrumbTextShadowPaletteStop?: DevProps['textShadowPaletteStop']; // Label
  breadcrumbTextShadowOpacity?: DevProps['textShadowOpacity']; // Label
  overlineTextShadowDirection?: DevProps['textShadowDirection']; // Label
  overlineTextShadowBlur?: DevProps['textShadowBlur']; // Label
  overlineTextShadowThickness?: DevProps['textShadowThickness']; // Label
  overlineTextShadowPalette?: DevProps['textShadowPalette']; // Label
  overlineTextShadowPaletteStop?: DevProps['textShadowPaletteStop']; // Label
  overlineTextShadowOpacity?: DevProps['textShadowOpacity']; // Label
  titleTextShadowDirection?: DevProps['textShadowDirection']; // Label
  titleTextShadowBlur?: DevProps['textShadowBlur']; // Label
  titleTextShadowThickness?: DevProps['textShadowThickness']; // Label
  titleTextShadowPalette?: DevProps['textShadowPalette']; // Label
  titleTextShadowPaletteStop?: DevProps['textShadowPaletteStop']; // Label
  titleTextShadowOpacity?: DevProps['textShadowOpacity']; // Label

  frontRadialPalette?: GroupItemContextValuesProps['frontRadialPalette'];
  frontRadialPaletteStop?: GroupItemContextValuesProps['frontRadialPaletteStop'];
  backRadialPalette?: GroupItemContextValuesProps['backRadialPalette'];
  backRadialPaletteStop?: GroupItemContextValuesProps['backRadialPaletteStop'];
  backRadialPaletteStopInverse?: GroupItemContextValuesProps['backRadialPaletteStopInverse'];

  thumbnailProps?: ThumbnailProps;

  overallPalette?: DevProps['bgPalette'];
  overallPaletteStop?: DevProps['bgPaletteStop'];

  imageLogoURL?: DevProps['bgImage'];
  imageLogoHeight?: DevProps['height'];
  imageLogoFit?: DevProps['bgSize'];

  backgroundColorProps?: {
    gradientVia?: DevProps['gradientVia'];
    gradientTo?: DevProps['gradientTo'];
    opacity?: DevProps['opacity'];
    mixBlend?: DevProps['mixBlend'];
    position?: DevProps['position'];
    borderRadius?: DevProps['borderRadius'];
  };
}
