import { Gap, Palette, Width } from '../../utils/types';
import { CollectionGridProps } from '../collectionGrid/collectionGrid.types';
import { DevProps } from '../dev/dev.types';
import { LabelProps } from '../label/label.types';

export interface CollectionGridScrollingProps extends CollectionGridProps {
  showArrows?: boolean;
  arrowGridGap?: Gap;
  arrowContainerWidth?: Width;
  hideScrollbar?: boolean;
  arrows?: {
    arrowPalette?: Palette;
    arrowPaletteStop?: DevProps['bgPaletteStop'];
    arrowHoverPalette?: Palette;
    arrowHoverDuration?: DevProps['transitionDuration'];
    arrowSize?: LabelProps['size'];
    arrowFontWeight?: DevProps['fontWeight'];
    leftText?: string;
    leftArrowIcon?: string;
    leftArrowContainerCorner?: DevProps['borderRadius'];
    rightText?: string;
    rightArrowIcon?: string;
    rightArrowContainerCorner?: DevProps['borderRadius'];
    arrowTextAlign?: DevProps['textAlign'];
    arrowAlignItems?: DevProps['alignItems'];
    arrowLineHeight?: DevProps['lineHeight'];
    arrowLetterSpacing?: DevProps['letterSpacing'];
    ignoreMarkup?: boolean;
  };
  addClasses?: string;
  titleContainerClasses?: string;
}
