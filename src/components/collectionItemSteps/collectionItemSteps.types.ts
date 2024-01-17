import { DevProps } from '../dev/dev.types';
import { ItemStepProps } from '../itemStep/itemStep.types';

export const cornerValues = {
  rounded: 'md',
  square: 'none'
};

export interface CollectionItemStepsProps extends DevProps {
  CollectionItemSteps?: {
    titleText?: ItemStepProps['titleText'];
    overlineText?: ItemStepProps['overlineText'];
    isDisabled?: ItemStepProps['isDisabled'];
    isLink?: ItemStepProps['isLink'];
    disabledIcon?: ItemStepProps['disabledIcon'];
    progress?: ItemStepProps['progress'];
    completionIcon?: ItemStepProps['completionIcon'];
  }[];
  visualProgressRadial?: boolean;
  loadAnimation?: boolean;
  corner?: 'rounded' | 'square';
  size?: ItemStepProps['size'];
  overlineLineClamp?: ItemStepProps['overlineLineClamp'];
  frontRadialPalette?: ItemStepProps['frontRadialPalette'];
  frontRadialPaletteStop?: ItemStepProps['frontRadialPaletteStop'];
  backRadialPalette?: ItemStepProps['backRadialPalette'];
  backRadialPaletteStop?: ItemStepProps['backRadialPaletteStop'];
  backRadialPaletteStopInverse?: ItemStepProps['backRadialInversePaletteStop'];
}
