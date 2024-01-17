import { FC } from 'react';
import { Dev, DevProps } from '../dev';
import { Label } from '../label';
import { Text } from '../text';
import { ToolTip } from './toolTip';

export interface ToolTipProps extends DevProps {
  labelPalette?: DevProps['textPalette'];
  labelPaletteStop?: DevProps['textPaletteStop'];
  label?: string;
  tip?: string;
  required?: boolean;
  tipLocation?: 'l' | 'r' | 't';
}

export const ToolTipLabel: FC<ToolTipProps> = ({
  label,
  labelPalette = 'neutral',
  labelPaletteStop = 700,
  tip,
  required = false,
  tipLocation
}) => {
  return (
    <Dev display='flex'>
      <Label
        label={label}
        textPalette={labelPalette}
        textPaletteStop={labelPaletteStop}
      />
      <Text
        text='*'
        textPalette='error'
        textPaletteStop={900}
        visibility={required ? 'visible' : 'invisible'}
      />
      <div className='relative'>
        {tip && <ToolTip tip={tip} tipLocation={tipLocation} />}
      </div>
    </Dev>
  );
};
