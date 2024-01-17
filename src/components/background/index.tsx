import { FC } from 'react';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';

export const Background: FC<DevProps> = ({ children, classes, ...props }) => {
  const backgroundProps: DevProps = {
    container: false,
    centerSelf: false,
    fullscreen: true,
    bgPalette: 'primary',
    bgPaletteStop: 500,
    bgSize: 'auto',
    bgPosition: 'center',
    bgScroll: 'local',
    bgRepeat: 'no-repeat',
    position: 'absolute',
    classes,
    ...props
  };

  return <Dev {...backgroundProps}>{children}</Dev>;
};
