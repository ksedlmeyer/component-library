import { FC } from 'react';
import { Palette, PaletteStop, TextSize } from '../../utils/types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';

export interface GroupItemContextValuesProps extends DevProps {
  contextValues?: {
    label: LabelProps['label'];
    leadingIcon: LabelProps['leadingIcon'];
    progress?: LabelProps['progress'];
    visualProgressRadial?: LabelProps['visualProgressRadial'];
    contextValueProps?: LabelProps;
  }[];
  frontRadialPalette?: DevProps['bgPalette']; // visualization progress status radial
  frontRadialPaletteStop?: DevProps['bgPaletteStop']; // visualization progress status radial
  backRadialPalette?: Palette; // visualization progress status radial
  backRadialPaletteStop?: PaletteStop; // visualization progress status radial
  backRadialPaletteStopInverse?: PaletteStop;
  separatorIcon?: string;
  size?: TextSize;
}

export const GroupItemContextValues: FC<GroupItemContextValuesProps> = ({
  classes,
  themeInverse = false,
  inversePaletteStop = 50,
  textPalette = 'neutral',
  textPaletteStop = 700,
  frontRadialPalette,
  frontRadialPaletteStop,
  backRadialPalette,
  backRadialPaletteStopInverse = 50,
  backRadialPaletteStop,
  size = 'xs',
  contextValues,
  separatorIcon = '<svg viewBox="0 0 20 20" fill="currentColor"  xmlns="http://www.w3.org/2000/svg"><path d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"/></svg>',
  lineClamp = '1',
  ...props
}) => {
  const spanProps: GroupItemContextValuesProps = {
    classes,
    ...props
  };

  const contextValueGroupProps: GroupItemContextValuesProps = {
    flexWrap: 'wrap',
    gap: 1,
    classes
  };

  return (
    <Dev {...spanProps}>
      {contextValues && (
        <Dev {...contextValueGroupProps}>
          {contextValues.map((contextValue, index) => (
            <Dev key={index} flexGrow='base' display='flex'>
              <Label
                key={index}
                textPalette={textPalette}
                textPaletteStop={textPaletteStop}
                frontRadialPalette={frontRadialPalette}
                frontRadialPaletteStop={frontRadialPaletteStop}
                backRadialPalette={backRadialPalette}
                backRadialPaletteStop={backRadialPaletteStop}
                backRadialPaletteStopInverse={backRadialPaletteStopInverse}
                leadingIcon={contextValue.leadingIcon}
                progress={contextValue.progress}
                visualProgressRadial={contextValue.visualProgressRadial}
                size={size}
                themeInverse={themeInverse}
                inversePaletteStop={inversePaletteStop}
                verticalAlign='middle'
                {...contextValue.contextValueProps}>
                {contextValue.label}
              </Label>

              {index + 1 < contextValues.length ? (
                <Label
                  leadingIcon={separatorIcon}
                  label={''}
                  size={size}
                  lineClamp={lineClamp}
                  themeInverse={themeInverse}
                  textPalette={textPalette}
                  textPaletteStop={textPaletteStop}
                  inversePaletteStop={inversePaletteStop}
                  verticalAlign='middle'
                />
              ) : null}
            </Dev>
          ))}
        </Dev>
      )}
    </Dev>
  );
};
