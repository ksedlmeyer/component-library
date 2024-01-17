import { Story } from '@storybook/react';
import { ItemList } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/ItemList',
  component: ItemList,
  parameters: {
    controls: { expanded: true }
  },
  args: {},
  argTypes: {
    ...Args
  }
};

const itemCardDefaults = [
  'bgPalette',
  'bgPaletteStop',
  'thumbnailProps',
  'overlineText',
  'overlineLeadingIcon',
  'overlineTrailingIcon',
  'titleText',
  'titleLeadingIcon',
  'titleTrailingIcon',
  'thumbnailDivPosition',
  'thumbnailDivHeight',
  'thumbnailDivWidth',
  'overlineFontSize',
  'overlineFontWeight',
  'overlineTextPalette',
  'overlineTextPaletteStop',
  'overlineTextAlign',
  'overlineLineClamp',
  'overlineLetterSpacing',
  'overlineTextShadowDirection',
  'overlineTextShadowPalette',
  'overlineTextShadowPaletteStop',
  'overlineTextShadowBlur',
  'overlineTextShadowThickness',
  'overlineTextShadowOpacity',
  'overlineWordBreak',
  'titleFontSize',
  'titleFontWeight',
  'titleTextPalette',
  'titleTextPaletteStop',
  'titleTextAlign',
  'titleLetterSpacing',
  'titleLineHeight',
  'titleLineClamp',
  'titleTextShadowDirection',
  'titleTextShadowPalette',
  'titleTextShadowPaletteStop',
  'titleTextShadowBlur',
  'titleTextShadowThickness',
  'titleTextShadowOpacity',
  'titleWordBreak',
  'descriptionText',
  'descriptionTextAlign',
  'descriptionLeadingIcon',
  'descriptionTrailingIcon',
  'descriptionFontSize',
  'descriptionFontWeight',
  'descriptionTextPalette',
  'descriptionTextPaletteStop',
  'descriptionLetterSpacing',
  'descriptionLineHeight',
  'descriptionTextShadowDirection',
  'descriptionTextShadowPalette',
  'descriptionTextShadowPaletteStop',
  'descriptionTextShadowBlur',
  'descriptionTextShadowThickness',
  'descriptionTextShadowOpacity',
  'descriptionLineClamp',
  'descriptionWordBreak',
  'buttonIcons',
  'badgeSize',
  'badgeCorner',
  'badges',
  'contextValuesTextPalette',
  'contextValuesTextPaletteStop',
  'contextValues',
  'bgCardPalette',
  'bgCardPaletteStop',
  'isDisabled',
  'corner',
  'hasAttachment',
  'attachmentIconPalette',
  'attachmentIconPaletteStop',
  'attachmentIconBgPalette',
  'attachmentIconBgPaletteStop',
  'attachmentIconLocation',
  'hideOverlineText',
  'hideDescriptionText',
  'cardBorderWidth',
  'cardBorderPalette',
  'cardBorderPaletteStop',
  'titleContainerClasses',
  'iconSize',
  'height',
  'width',
  'bgImage',
  'bgPosition',
  'bgRepeat',
  'bgSize',
  'listAggregate',
  'listAggregateState',
  'listAggregateLocation',
  'listAggregateIconWidth',
  'listAggregateIconHeight',
  'listAggregateIconPalette',
  'listAggregateIconPaletteStop'
];

export const Default: Story = (args) => <ItemList {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};
Default.args = {};

export const Decorative = Default.bind({});
Decorative.args = {
  thumbnailProps: {
    bgPalette: 'gradient',
    gradientDirection: 'br',
    gradientPaletteStop: 500,
    gradientFrom: 'primary',
    gradientTo: 'emerald',
    textureImageURL: '/ascnd-library/background/texture-cubes.png',
    textureSize: 'auto',
    textureRepeat: 'repeat',
    textureMixBlend: 'normal',
    imageURL: '/ascnd-library/foreground/icons-coffee/Icon-coffee-01.png',
    imageSize: 'contain',
    imageRepeat: 'no-repeat',
    imagePosition: 'center',
    imageHeight: 'auto',
    imageWidth: '1/3',
    imageInset: 4
  }
};
Decorative.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};

export const Photographic = Default.bind({});
Photographic.args = {
  thumbnailProps: {
    imageURL: '/ascnd-library/foreground/photo-inspiration-05.png',
    imageWidth: 'full',
    imageHeight: 'full',
    imagePosition: 'center',
    imageSize: 'cover',
    imageRepeat: 'no-repeat',
    imageMargin: 0,
    imageInset: 0
  }
};
Photographic.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};

export const WithButtonIcons = Default.bind({});
WithButtonIcons.args = {
  buttonIcons: [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>',
      selected: false,
      onClick: () => console.log('clicked button'),
      props: {
        iconSize: '2xl',
        iconOnly: true
      }
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>',
      selected: false,
      props: {
        iconSize: '2xl',
        iconOnly: true
      }
    }
  ],
  onClick: () => console.log('cliked item')
};
WithButtonIcons.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};

export const Badges = Default.bind({});
Badges.args = {
  badges: [
    {
      label: 'Primary Badge',
      bgPalette: 'primary'
    },
    {
      label: 'Secondary Badge',
      bgPalette: 'secondary'
    },
    {
      label: 'Red Badge',
      bgPalette: 'red'
    },
    {
      label: 'Neutral Badge',
      bgPalette: 'neutral'
    },
    {
      label: 'Green Badge',
      bgPalette: 'green'
    },
    {
      label: 'This badge has a really long label in it for line clamp testing',
      bgPalette: 'yellow'
    }
  ]
};
Badges.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};

export const ContextValues = Default.bind({});
ContextValues.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};
ContextValues.args = {
  contextValues: [
    {
      label: 'Primary Label',
      leadingIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
    </svg>`,
      progress: 0,
      visualProgressRadial: false
    },
    {
      label: 'Progress Icon',
      leadingIcon: '',
      progress: 44,
      visualProgressRadial: true,
      contextValueProps: {
        showProgress: true
      }
    }
  ]
};

export const HasAttachment = Default.bind({});
HasAttachment.args = {
  hasAttachment: true
};
HasAttachment.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};

export const LeadingIcon = Default.bind({});
LeadingIcon.args = {
  titleLeadingIcon: 'VideoCameraIcon'
};
LeadingIcon.parameters = {
  controls: {
    sort: 'alpha',
    include: [...itemCardDefaults]
  }
};
