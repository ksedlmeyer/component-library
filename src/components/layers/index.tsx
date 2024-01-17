import { FC } from 'react';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';

export interface LayersProps extends DevProps {
  layers?: DevProps[];
}

export const Layers: FC<LayersProps> = ({
  height = 64,
  width = 64,
  position = 'absolute',
  layers,
  ...props
}) => {
  const containerProps: LayersProps = {
    height: height,
    width: width,
    position,
    overflow: 'hidden',
    top: props.top,
    left: props.left,
    ...props
  };

  const layerProps: DevProps = {
    height: height,
    width: width,
    position
  };

  return (
    <Dev {...containerProps}>
      {layers &&
        layers.map((props, idx) => (
          <Dev {...layerProps} {...props} key={idx} />
        ))}
    </Dev>
  );
};
