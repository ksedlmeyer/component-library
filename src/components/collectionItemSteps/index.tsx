import { FC } from 'react';
import { BorderRadius, ZIndex } from '../../utils/types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { ItemStep } from '../itemStep';
import {
  CollectionItemStepsProps,
  cornerValues
} from './collectionItemSteps.types';
export * from './collectionItemSteps.types';

export const CollectionItemSteps: FC<CollectionItemStepsProps> = ({
  classes,
  CollectionItemSteps,
  visualProgressRadial = true,
  bgPalette = 'primary',
  bgPaletteStop = 600,
  fontWeight = 'normal',
  size = 'base',
  lineHeight = 'normal',
  letterSpacing = 'normal',
  themeInverse = false,
  lineClamp = '1',
  overlineLineClamp = '1',
  corner = 'rounded',
  textAlign = 'left',
  alignItems = 'center',
  loadAnimation = false,
  frontRadialPalette = 'primary',
  frontRadialPaletteStop = 600,
  backRadialPalette = 'neutral',
  backRadialPaletteStop = 300,
  backRadialPaletteStopInverse = 300,
  ...props
}) => {
  const containerProps: DevProps = {
    display: 'inline-flex',
    position: 'relative',
    width: 'full',
    overflow: 'hidden',
    borderRadius: cornerValues[corner] as BorderRadius,
    classes,
    ...props
  };

  return (
    <Dev {...containerProps}>
      {CollectionItemSteps &&
        CollectionItemSteps.map((item, index) => {
          const depthValue = 50 - 10 * index;
          const showChevron =
            index === CollectionItemSteps.length - 1 ? false : true;
          return (
            <ItemStep
              key={index}
              flex={'1'}
              zIndex={
                depthValue > 0 ? `[${depthValue.toString()}]` : ('0' as ZIndex)
              }
              padding={index !== 0 ? 'l-6' : 'l-2'}
              titleText={item.titleText}
              lineClamp={lineClamp}
              overlineText={item.overlineText}
              overlineLineClamp={overlineLineClamp}
              progress={item.progress}
              titleFontSize={size}
              bgPalette={bgPalette}
              bgPaletteStop={bgPaletteStop}
              visualProgressRadial={visualProgressRadial}
              loadAnimation={loadAnimation}
              textAlign={textAlign}
              isDisabled={item.isDisabled}
              disabledIcon={item.disabledIcon}
              completionIcon={item.completionIcon}
              fontWeight={fontWeight}
              frontRadialPalette={frontRadialPalette}
              frontRadialPaletteStop={frontRadialPaletteStop}
              backRadialPalette={backRadialPalette}
              backRadialPaletteStop={backRadialPaletteStop}
              backRadialInversePaletteStop={backRadialPaletteStopInverse}
              alignItems={alignItems}
              lineHeight={lineHeight}
              letterSpacing={letterSpacing}
              themeInverse={themeInverse}
              showChevron={showChevron}
            />
          );
        })}
    </Dev>
  );
};
