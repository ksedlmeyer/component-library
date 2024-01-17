import { ItemCardProps } from '../itemCard/itemCard.types';
import { VisualizationProgressStatusRadialProps } from '../visualizationProgressStatusRadial';

export const roundedCorners = {
  rounded: 'l-md',
  square: 'none'
};

export interface ItemStepProps extends ItemCardProps {
  visualProgressRadial?: boolean;
  size?: VisualizationProgressStatusRadialProps['size'];
  isLink?: boolean;
  showChevron?: boolean;
  loadAnimation?: boolean;
  progress?: number;
  disabledIcon?: string;
  completionIcon?: string;
  frontRadialPalette?: VisualizationProgressStatusRadialProps['frontRadialPalette'];
  frontRadialPaletteStop?: VisualizationProgressStatusRadialProps['frontRadialPaletteStop'];
  backRadialPalette?: VisualizationProgressStatusRadialProps['backRadialPalette'];
  backRadialPaletteStop?: VisualizationProgressStatusRadialProps['backRadialPaletteStop'];
  backRadialInversePaletteStop?: VisualizationProgressStatusRadialProps['backRadialPaletteStop'];
  corner?: 'rounded' | 'square';
}
