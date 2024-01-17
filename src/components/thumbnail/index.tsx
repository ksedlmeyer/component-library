import { FC } from 'react';
import { Corners } from '../../utils/types';
import { DevProps } from '../dev/dev.types';
import { Layers, LayersProps } from '../layers';

export interface ThumbnailProps extends LayersProps {
  bgOpacity?: DevProps['opacity'];
  textureImageURL?: DevProps['bgImage'];
  textureSize?: DevProps['bgSize'];
  textureRepeat?: DevProps['bgRepeat'];
  textureMixBlend?: DevProps['mixBlend'];
  textureBgPosition?: DevProps['bgPosition'];
  textureOpacity?: DevProps['opacity'];
  imageURL?: DevProps['bgImage'];
  imageSize?: DevProps['bgSize'];
  imageRepeat?: DevProps['bgRepeat'];
  imagePosition?: DevProps['bgPosition'];
  imageHeight?: DevProps['height'];
  imageWidth?: DevProps['width'];
  imageInset?: DevProps['inset'];
  imageOpacity?: DevProps['opacity'];
  imageMargin?: DevProps['margin'];
  imageMixBlend?: DevProps['mixBlend'];
  additionalLayer?: DevProps;
  cardType?: 'callout' | 'itemCard' | 'listView';
  corner?: Corners;
}

export const Thumbnail: FC<ThumbnailProps> = ({
  bgOpacity,
  textureImageURL,
  textureSize,
  textureRepeat,
  textureMixBlend,
  textureBgPosition,
  textureOpacity,
  imageURL,
  imageSize,
  imageRepeat = 'no-repeat',
  imagePosition,
  imageHeight,
  imageWidth = '1/4',
  imageInset = 2,
  imageOpacity,
  imageMargin = 'auto',
  bgPalette = 'primary',
  bgPaletteStop = 500,
  corner = 'rounded',
  cardType,
  imageMixBlend,
  ...props
}) => {
  const thumbnailProps: LayersProps = {
    borderRadius:
      corner === 'rounded' ? 'md' : corner === 'rounded-full' ? 'full' : 'none',
    layers: [
      {
        opacity: bgOpacity,
        bgPalette: cardType === 'callout' ? 'transparent' : bgPalette,
        bgPaletteStop
      },
      {
        bgImage: textureImageURL,
        bgSize: textureSize,
        bgRepeat: textureRepeat,
        mixBlend: textureMixBlend,
        bgPosition: textureBgPosition,
        opacity: textureOpacity
      },
      {
        bgImage: imageURL,
        bgSize: imageSize,
        bgRepeat: imageRepeat,
        bgPosition: imagePosition,
        height: imageHeight,
        width: imageWidth,
        inset: imageInset,
        opacity: imageOpacity,
        margin: imageMargin,
        mixBlend: imageMixBlend
          ? imageMixBlend
          : cardType === 'callout'
          ? 'soft-light'
          : 'normal'
      }
    ],
    ...props
  };

  return <Layers {...thumbnailProps} />;
};
