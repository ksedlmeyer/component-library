import { FC } from 'react';
import {
  VisualizationProgressStatusRadial,
  VisualizationProgressStatusRadialProps
} from '../visualizationProgressStatusRadial';

export const RadialSpinner: FC<VisualizationProgressStatusRadialProps> = ({
  frontRadialPalette = 'primary',
  frontRadialPaletteStop = 600,
  backRadialPalette = 'primary',
  backRadialPaletteStop = 300,
  ...props
}) => {
  const radialProps: VisualizationProgressStatusRadialProps = {
    frontRadialPalette,
    frontRadialPaletteStop,
    backRadialPalette,
    backRadialPaletteStop,
    progress: 40,
    animation: 'spin',
    ...props
  };

  return <VisualizationProgressStatusRadial {...radialProps} />;
};
