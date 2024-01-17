import { Story } from '@storybook/react';
import { CollectionGrid } from '.';
import {
  viewItems,
  viewItemsAggregate,
  viewItemsCallout
} from '../../assets/data/items.data';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/CollectionGrid',
  component: CollectionGrid,
  argTypes: {
    ...Args
  }
};

const collectionGridDefaults = [
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
  'cardBorderPalette',
  'cardBorderPaletteStop',
  'cardBorderWidth'
];

export const Default: Story = (args) => <CollectionGrid {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...collectionGridDefaults, 'badgeCorner', 'badgeSize']
  }
};
Default.args = {
  items: viewItems
};

export const ListView = Default.bind({});
ListView.parameters = {
  controls: {
    sort: 'alpha',
    include: [
      ...collectionGridDefaults,
      'listAggregate',
      'badgeCorner',
      'badgeSize'
    ]
  }
};
ListView.args = {
  items: viewItems,
  itemDisplay: 'ItemList'
};

export const ListAggregate = Default.bind({});
ListAggregate.parameters = {
  controls: {
    sort: 'alpha',
    include: [
      ...collectionGridDefaults,
      'listAggregate',
      'badgeCorner',
      'badgeSize'
    ]
  }
};
ListAggregate.args = {
  items: viewItemsAggregate,
  itemDisplay: 'ItemList',
  cardHeight: 36,
  gap: 0,
  listAggregate: true,
  thumbnailDivHeight: 28
};

export const CardCalloutView = Default.bind({});
CardCalloutView.parameters = {
  controls: {
    sort: 'alpha',
    include: [...collectionGridDefaults]
  }
};
CardCalloutView.args = {
  items: viewItemsCallout,
  itemDisplay: 'ItemCardCallout'
};
