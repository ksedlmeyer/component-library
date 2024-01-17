import { FC } from 'react';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';

export const Container: FC<DevProps> = ({ classes, children, ...props }) => {
  const containerProps: DevProps = {
    container: true,
    centerSelf: true,
    display: 'flex',
    classes: classes,
    ...props
  };

  return <Dev {...containerProps}>{children}</Dev>;
};
