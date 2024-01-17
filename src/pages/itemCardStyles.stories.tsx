import { Story } from '@storybook/react';
import { ItemCard } from '../components';

export default {
  title: 'Pages/ItemCardStyles',
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  }
};

export const TemplateA: Story = () => (
  <ItemCard
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
  />
);

export const TemplateB: Story = () => (
  <ItemCard
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
  />
);

export const TemplateC: Story = () => (
  <ItemCard
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
  />
);

export const TemplateD: Story = () => (
  <ItemCard
    thumbnailProps={{
      bgPalette: 'transparent'
    }}
    titleText='Title'
    overlineText='type'
    bgCardPalette='secondary'
    bgCardPaletteStop={300}
  />
);

export const TemplateE: Story = () => (
  <ItemCard
    thumbnailProps={{
      bgPalette: 'transparent'
    }}
    bgImage='/ascnd-library/foreground/photo-inspiration-05.png'
    titleText='Title'
    overlineText='type'
    bgSize='cover'
    bgPosition='center'
    bgRepeat='no-repeat'
    themeInverse={true}
  />
);

export const TemplateF: Story = () => (
  <ItemCard
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
  />
);

export const TemplateG: Story = () => (
  <ItemCard
    titleText='Title'
    overlineText='type'
    thumbnailDivHeight={8}
    thumbnailDivWidth={0}
    bgCardPalette='secondary'
    bgCardPaletteStop={300}
  />
);

export const TemplateH: Story = () => (
  <ItemCard
    bgImage='/ascnd-library/foreground/photo-inspiration-05.png'
    titleText='Title'
    overlineText='type'
    thumbnailDivHeight={8}
    thumbnailDivWidth={0}
    bgSize='cover'
    bgPosition='center'
    bgRepeat='no-repeat'
    themeInverse={true}
  />
);
