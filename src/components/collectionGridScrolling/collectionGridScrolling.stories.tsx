import { Story } from '@storybook/react';
import { CollectionGridScrolling } from '.';
import { viewItems, viewItemsCallout } from '../../assets/data/items.data';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/CollectionGridScrolling',
  component: CollectionGridScrolling,
  argTypes: {
    ...Args
  }
};

const collectionGridScrollingDefaults = [
  'overlineFontSize',
  'overlineFontWeight',
  'overlineLetterSpacing',
  'titleWordBreak',
  'overlineWordBreak',
  'descriptionWordBreak',
  'items',
  'titleFontSize',
  'titleFontWeight',
  'titleLetterSpacing',
  'titleLineHeight',
  'titleLineClamp',
  'descriptionLineClamp',
  'overlineLineClamp',
  'itemDisplay',
  'thumbnailDivWidth',
  'thumbnailDivHeight',
  'cardWidth',
  'cardHeight',
  'cardCorner',
  'attachmentIconPalette',
  'attachmentIconPaletteStop',
  'attachmentIconBgPalette',
  'attachmentIconBgPaletteStop',
  'attachmentIconLocation',
  'hideDescriptionText',
  'hideOverlineText',
  'gridCols',
  'gap',
  'bgPalette',
  'bgPaletteStop',
  'boxShadow',
  'bgImage',
  'bgImageSize',
  'bgImageRepeat',
  'showArrows',
  'hideScrollbar',
  'arrowContainerWidth',
  'arrowGridGap',
  'arrows',
  'cardBorderPalette',
  'cardBorderPaletteStop',
  'cardBorderWidth'
];

export const Default: Story = (args) => <CollectionGridScrolling {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...collectionGridScrollingDefaults, 'badgeCorner', 'badgeSize']
  }
};
Default.args = {
  items: viewItems,
  descriptionLineClamp: 1
};

export const CardCallout = Default.bind({});
CardCallout.parameters = {
  controls: {
    sort: 'alpha',
    include: [...collectionGridScrollingDefaults]
  }
};
CardCallout.args = {
  itemDisplay: 'ItemCardCallout',
  items: viewItemsCallout
};

export const NoArrows = Default.bind({});
NoArrows.parameters = {
  controls: {
    sort: 'alpha',
    include: [...collectionGridScrollingDefaults, 'badgeCorner', 'badgeSize']
  }
};
NoArrows.args = {
  showArrows: false,
  items: viewItems
};
