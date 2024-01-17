import { Story } from '@storybook/react';
import { ItemList } from '../components';

export default {
  title: 'Pages/ItemListStyles',
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  }
};

export const TemplateA: Story = () => (
  <ItemList
    thumbnailProps={{
      imageURL: '/ascnd-library/foreground/photo-inspiration-05.png',
      imageWidth: 'full',
      imageHeight: 'full',
      imagePosition: 'center',
      imageSize: 'cover',
      imageRepeat: 'no-repeat',
      imageMargin: 0,
      imageInset: 0
    }}
    titleText='Title'
    overlineText='type'
    corner='rounded'
  />
);

export const TemplateB: Story = () => (
  <ItemList
    bgImage='/ascnd-library/foreground/photo-inspiration-05.png'
    titleText='Title'
    overlineText='type'
    thumbnailDivWidth={0}
    bgSize='cover'
    bgPosition='top'
    bgRepeat='no-repeat'
    themeInverse={true}
    corner='rounded'
  />
);

export const TemplateC: Story = () => (
  <ItemList
    thumbnailProps={{
      imageURL: '/ascnd-library/foreground/badges/imageBadge-00005.png',
      imageSize: 'contain',
      imageRepeat: 'no-repeat',
      imagePosition: 'center',
      imageHeight: 'auto',
      imageWidth: '1/2',
      imageInset: 4
    }}
    titleText='Title'
    overlineText='type'
    corner='rounded'
  />
);

export const TemplateD: Story = () => (
  <ItemList
    thumbnailProps={{
      textureImageURL:
        '/ascnd-library/background/texture-radial-burst-alpha.png',
      textureSize: 'cover',
      textureRepeat: 'no-repeat',
      textureMixBlend: 'overlay',
      imageURL: '/ascnd-library/foreground/badges/imageBadge-00005.png',
      imageSize: 'contain',
      imageRepeat: 'no-repeat',
      imagePosition: 'center',
      imageHeight: 'auto',
      imageWidth: '1/2',
      imageInset: 4
    }}
    titleText='Title'
    overlineText='type'
    corner='rounded'
  />
);

export const TemplateE: Story = () => (
  <ItemList
    titleText='Title'
    overlineText='type'
    bgCardPalette='secondary'
    bgCardPaletteStop={300}
    thumbnailDivWidth={0}
    corner='rounded'
  />
);

export const TemplateF: Story = () => (
  <ItemList
    thumbnailProps={{
      imageURL: '/ascnd-library/foreground/photo-inspiration-05.png',
      imageWidth: 'full',
      imageHeight: 'full',
      imagePosition: 'center',
      imageSize: 'cover',
      imageRepeat: 'no-repeat',
      imageMargin: 0,
      imageInset: 0
    }}
    titleText='Title'
    overlineText='type'
    bgCardPalette='secondary'
    bgCardPaletteStop={300}
    corner='rounded'
  />
);
