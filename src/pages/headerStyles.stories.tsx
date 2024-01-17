import { Story } from '@storybook/react';
import { Container, HeaderScreen } from '../components';

export default {
  title: 'Pages/HeaderStyles',
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  }
};

export const TemplateA: Story = () => (
  <HeaderScreen
    thumbnailProps={{
      bgPalette: 'secondary',
      bgPaletteStop: 300,
      corner: 'square',
      height: 'full',
      width: 'full'
    }}
    buttonIcons={[
      {
        icon: 'BookmarkIcon',
        props: {
          iconSize: '2xl',
          leadingIconType: 'outline',
          boxShadow: 'none'
        },
        selected: false
      },
      {
        icon: 'StarIcon',
        props: {
          iconSize: '2xl',
          leadingIconType: 'outline',
          boxShadow: 'none'
        },
        selected: false
      }
    ]}
    imageLogoFit='contain'
    imageLogoHeight={5}
    imageLogoURL='https://images.squarespace-cdn.com/content/v1/58c6a04ebe659451379791bf/1559136210949-1JA6QJSZCE2NHAR6P2XJ/logo%402x.png?format=500w'
    badges={[
      {
        bgPalette: 'secondary',
        label: 'In Progress'
      }
    ]}
    breadcrumbs={[
      {
        label: 'Learning'
      },
      {
        label: 'Winter Items'
      },
      {
        label: 'Snow Day'
      }
    ]}
    contextValues={[
      {
        label: 'Due 10/1',
        leadingIcon: 'CalendarDaysIcon',
        progress: 0,
        visualProgressRadial: false
      },
      {
        contextValueProps: {
          showProgress: true
        },
        label: 'Complete',
        leadingIcon: '',
        progress: 40,
        visualProgressRadial: true
      }
    ]}
    divider
  />
);

export const TemplateB: Story = () => (
  <HeaderScreen
    thumbnailProps={{
      bgPalette: 'primary',
      corner: 'square',
      textureBgPosition: 'center',
      textureSize: 'contain',
      textureRepeat: 'repeat',
      textureImageURL: '/ascnd-library/background/texture-snow-a-05.png'
    }}
    buttonIcons={[
      {
        icon: 'BookmarkIcon',
        props: {
          iconSize: '2xl',
          leadingIconType: 'outline',
          strokePalette: 'white',
          strokePaletteStop: 500,
          boxShadow: 'none'
        },
        selected: false
      },
      {
        icon: 'StarIcon',
        props: {
          iconSize: '2xl',
          leadingIconType: 'outline',
          strokePalette: 'white',
          strokePaletteStop: 500,
          boxShadow: 'none'
        },
        selected: false
      }
    ]}
    imageLogoFit='contain'
    imageLogoHeight={5}
    imageLogoURL='https://images.squarespace-cdn.com/content/v1/58c6a04ebe659451379791bf/1559136210949-1JA6QJSZCE2NHAR6P2XJ/logo%402x.png?format=500w'
    badges={[
      {
        bgPalette: 'secondary',
        label: 'In Progress'
      }
    ]}
    breadcrumbs={[
      {
        label: 'Learning'
      },
      {
        label: 'Winter Items'
      },
      {
        label: 'Snow Day'
      }
    ]}
    contextValues={[
      {
        label: 'Due 10/1',
        leadingIcon: 'CalendarDaysIcon',
        progress: 0,
        visualProgressRadial: false
      },
      {
        contextValueProps: {
          showProgress: true
        },
        label: 'Complete',
        leadingIcon: '',
        progress: 40,
        visualProgressRadial: true
      }
    ]}
    frontRadialPalette='secondary'
    frontRadialPaletteStop={500}
    divider
    accentEffect
    accentPaletteStop={500}
  />
);

export const TemplateC: Story = () => (
  <HeaderScreen
    thumbnailProps={{
      bgPalette: 'primary',
      corner: 'square',
      textureBgPosition: 'center',
      textureSize: 'contain',
      textureRepeat: 'repeat',
      textureImageURL: '/ascnd-library/background/texture-snow-a-05.png',
      imageURL: '/ascnd-library/foreground/badges/imageBadge-00006.png',
      imageHeight: 'full',
      imageWidth: 'full',
      imagePosition: 'center',
      imageSize: 'contain'
    }}
    buttonIcons={[
      {
        icon: 'BookmarkIcon',
        props: {
          iconSize: '2xl',
          leadingIconType: 'outline',
          strokePalette: 'white',
          strokePaletteStop: 500,
          boxShadow: 'none'
        },
        selected: false
      },
      {
        icon: 'StarIcon',
        props: {
          iconSize: '2xl',
          leadingIconType: 'outline',
          strokePalette: 'white',
          strokePaletteStop: 500,
          boxShadow: 'none'
        },
        selected: false
      }
    ]}
    imageLogoFit='contain'
    imageLogoHeight={5}
    imageLogoURL='https://images.squarespace-cdn.com/content/v1/58c6a04ebe659451379791bf/1559136210949-1JA6QJSZCE2NHAR6P2XJ/logo%402x.png?format=500w'
    badges={[
      {
        bgPalette: 'secondary',
        label: 'In Progress'
      }
    ]}
    breadcrumbs={[
      {
        label: 'Learning'
      },
      {
        label: 'Winter Items'
      },
      {
        label: 'Snow Day'
      }
    ]}
    contextValues={[
      {
        label: 'Due 10/1',
        leadingIcon: 'CalendarDaysIcon',
        progress: 0,
        visualProgressRadial: false
      },
      {
        contextValueProps: {
          showProgress: true
        },
        label: 'Complete',
        leadingIcon: '',
        progress: 40,
        visualProgressRadial: true
      }
    ]}
    frontRadialPalette='secondary'
    frontRadialPaletteStop={500}
    divider
    accentEffect
    accentPaletteStop={500}
  />
);

export const TemplateD: Story = () => (
  <HeaderScreen
    thumbnailProps={{
      bgPalette: 'primary',
      bgPaletteStop: 800,
      corner: 'square',
      height: 'full',
      imageURL: '/ascnd-library/foreground/badges/imageBadge-00006.png',
      imageHeight: 'full',
      imageWidth: 'full',
      imagePosition: 'center',
      imageSize: 'contain',
      width: 'full'
    }}
    buttonIcons={[
      {
        icon: 'BookmarkIcon',
        props: {
          iconSize: '2xl',
          leadingIconType: 'outline',
          strokePalette: 'white',
          strokePaletteStop: 500,
          boxShadow: 'none'
        },
        selected: false
      },
      {
        icon: 'StarIcon',
        props: {
          iconSize: '2xl',
          leadingIconType: 'outline',
          strokePalette: 'white',
          strokePaletteStop: 500,
          boxShadow: 'none'
        },
        selected: false
      }
    ]}
    imageLogoFit='contain'
    imageLogoHeight={5}
    imageLogoURL='https://images.squarespace-cdn.com/content/v1/58c6a04ebe659451379791bf/1559136210949-1JA6QJSZCE2NHAR6P2XJ/logo%402x.png?format=500w'
    badges={[
      {
        bgPalette: 'secondary',
        label: 'In Progress'
      }
    ]}
    breadcrumbs={[
      {
        label: 'Learning'
      },
      {
        label: 'Winter Items'
      },
      {
        label: 'Snow Day'
      }
    ]}
    contextValues={[
      {
        label: 'Due 10/1',
        leadingIcon: 'CalendarDaysIcon',
        progress: 0,
        visualProgressRadial: false
      },
      {
        contextValueProps: {
          showProgress: true
        },
        label: 'Complete',
        leadingIcon: '',
        progress: 40,
        visualProgressRadial: true
      }
    ]}
    frontRadialPalette='secondary'
    frontRadialPaletteStop={500}
    divider
    accentEffect
    accentPaletteStop={500}
  />
);

export const TemplateE: Story = () => (
  <HeaderScreen
    thumbnailProps={{
      bgPalette: 'primary',
      corner: 'square',
      imageURL: '/ascnd-library/foreground/photo-inspiration-05.png',
      imageHeight: 'full',
      imageWidth: 'full',
      imagePosition: 'top',
      imageSize: 'cover',
      imageInset: 0
    }}
    buttonIcons={[
      {
        icon: 'BookmarkIcon',
        props: {
          iconSize: '2xl',
          leadingIconType: 'outline',
          strokePalette: 'white',
          strokePaletteStop: 500,
          boxShadow: 'none'
        },
        selected: false
      },
      {
        icon: 'StarIcon',
        props: {
          iconSize: '2xl',
          leadingIconType: 'outline',
          strokePalette: 'white',
          strokePaletteStop: 500,
          boxShadow: 'none'
        },
        selected: false
      }
    ]}
    imageLogoFit='contain'
    imageLogoHeight={5}
    imageLogoURL='https://images.squarespace-cdn.com/content/v1/58c6a04ebe659451379791bf/1559136210949-1JA6QJSZCE2NHAR6P2XJ/logo%402x.png?format=500w'
    badges={[
      {
        bgPalette: 'secondary',
        label: 'In Progress'
      }
    ]}
    breadcrumbs={[
      {
        label: 'Learning'
      },
      {
        label: 'Winter Items'
      },
      {
        label: 'Snow Day'
      }
    ]}
    contextValues={[
      {
        label: 'Due 10/1',
        leadingIcon: 'CalendarDaysIcon',
        progress: 0,
        visualProgressRadial: false
      },
      {
        contextValueProps: {
          showProgress: true
        },
        label: 'Complete',
        leadingIcon: '',
        progress: 40,
        visualProgressRadial: true
      }
    ]}
    frontRadialPalette='secondary'
    frontRadialPaletteStop={500}
    divider
    accentEffect
    accentPaletteStop={500}
  />
);

export const TemplateF: Story = () => (
  <Container
    height='screen'
    width='full'
    bgImage='/ascnd-library/background/texture-cubes.png'
    container={false}>
    <HeaderScreen
      height='fit'
      thumbnailProps={{
        bgPalette: 'transparent',
        corner: 'square',
        height: 'full',
        width: 'full'
      }}
      buttonIcons={[
        {
          icon: 'BookmarkIcon',
          props: {
            iconSize: '2xl',
            leadingIconType: 'outline',
            boxShadow: 'none'
          },
          selected: false
        },
        {
          icon: 'StarIcon',
          props: {
            iconSize: '2xl',
            leadingIconType: 'outline',
            boxShadow: 'none'
          },
          selected: false
        }
      ]}
      imageLogoFit='contain'
      imageLogoHeight={5}
      imageLogoURL='https://images.squarespace-cdn.com/content/v1/58c6a04ebe659451379791bf/1559136210949-1JA6QJSZCE2NHAR6P2XJ/logo%402x.png?format=500w'
      badges={[
        {
          bgPalette: 'secondary',
          label: 'In Progress'
        }
      ]}
      breadcrumbs={[
        {
          label: 'Learning'
        },
        {
          label: 'Winter Items'
        },
        {
          label: 'Snow Day'
        }
      ]}
      contextValues={[
        {
          label: 'Due 10/1',
          leadingIcon: 'CalendarDaysIcon',
          progress: 0,
          visualProgressRadial: false
        },
        {
          contextValueProps: {
            showProgress: true
          },
          label: 'Complete',
          leadingIcon: '',
          progress: 40,
          visualProgressRadial: true
        }
      ]}
      frontRadialPalette='secondary'
      frontRadialPaletteStop={500}
      divider
      themeInverse
    />
  </Container>
);
