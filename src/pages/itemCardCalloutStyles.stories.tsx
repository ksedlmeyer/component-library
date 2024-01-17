import { Story } from '@storybook/react';
import { ItemCardCallout } from '../components';

export default {
  title: 'Pages/ItemCardCalloutStyles',
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  }
};

export const TemplateA: Story = () => (
  <ItemCardCallout
    titleText='Title'
    overlineText='type'
    bgCardPalette='secondary'
    bgCardPaletteStop={300}
  />
);

export const TemplateB: Story = () => (
  <ItemCardCallout
    bgImage='/ascnd-library/foreground/photo-inspiration-05.png'
    titleText='Title'
    overlineText='type'
    thumbnailProps={{
      bgPalette: 'transparent'
    }}
    bgSize='cover'
    bgPosition='center'
    bgRepeat='no-repeat'
    themeInverse={true}
  />
);

export const TemplateC: Story = () => (
  <ItemCardCallout
    thumbnailProps={{
      imageURL: '/ascnd-library/foreground/badges/imageBadge-00005.png',
      imageSize: 'contain',
      imageRepeat: 'no-repeat',
      imagePosition: 'center',
      imageHeight: 'auto',
      imageWidth: '1/2',
      imageInset: 4,
      imageMixBlend: 'luminosity'
    }}
    titleText='Title'
    overlineText='type'
    themeInverse={true}
  />
);

export const TemplateD: Story = () => (
  <ItemCardCallout
    thumbnailProps={{
      textureImageURL:
        '/ascnd-library/background/texture-radial-burst-alpha.png',
      textureSize: 'cover',
      textureRepeat: 'no-repeat',
      textureMixBlend: 'color-dodge'
    }}
    titleText='Title'
    overlineText='type'
    themeInverse={true}
  />
);

export const TemplateE: Story = () => (
  <ItemCardCallout
    thumbnailProps={{
      textureImageURL:
        '/ascnd-library/background/texture-radial-burst-alpha.png',
      textureSize: 'cover',
      textureRepeat: 'no-repeat',
      textureMixBlend: 'color-dodge',
      imageURL: '/ascnd-library/foreground/badges/imageBadge-00005.png',
      imageSize: 'contain',
      imageRepeat: 'no-repeat',
      imagePosition: 'center',
      imageHeight: 'auto',
      imageWidth: '1/2',
      imageInset: 4,
      imageMixBlend: 'luminosity'
    }}
    titleText='Title'
    overlineText='type'
    themeInverse={true}
  />
);
