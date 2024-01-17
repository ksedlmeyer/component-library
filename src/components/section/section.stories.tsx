import { Story } from '@storybook/react';
import { Section } from '.';
import {
  viewItems,
  viewItemsAggregate,
  viewItemsCallout
} from '../../assets/data/items.data';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/Section',
  component: Section,
  argTypes: {
    ...Args
  }
};

const sectionDefaults = [
  'overlineFontSize',
  'overlineFontWeight',
  'overlineTextAlign',
  'overlineLetterSpacing',
  'titleWordBreak',
  'overlineWordBreak',
  'descriptionWordBreak',
  'items',
  'titleFontSize',
  'titleFontWeight',
  'titleTextAlign',
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
  'sectionCorner',
  'dividerShow',
  'titleTextShadowDirection',
  'titleTextShadowBlur',
  'titleTextShadowThickness',
  'titleTextShadowPalette',
  'titleTextShadowPaletteStop',
  'titleTextShadowOpacity',
  'sectionDescriptionTextShadowDirection',
  'sectionDescriptionTextShadowBlur',
  'sectionDescriptionTextShadowThickness',
  'sectionDescriptionTextShadowPalette',
  'sectionDescriptionTextShadowPaletteStop',
  'sectionDescriptionTextShadowOpacity',
  'viewAllTextShadowDirection',
  'viewAllTextShadowBlur',
  'viewAllTextShadowThickness',
  'viewAllTextShadowPalette',
  'viewAllTextShadowPaletteStop',
  'viewAllTextShadowOpacity',
  'viewAllText',
  'viewAllLeadingIcon',
  'viewAllTrailingIcon',
  'viewAllLimit',
  'viewAll',
  'viewAllCount',
  'sectionPaletteStop',
  'dividerPaletteStop',
  'itemCollectionDisplay',
  'sectionDescriptionProps',
  'sectionDescriptionText',
  'sectionDescriptionLeadingIcon',
  'sectionDescriptionTrailingIcon',
  'sectionDescriptionLineClamp',
  'leadingIcon',
  'trailingIcon',
  'sectionTitleSize',
  'isDisabled',
  'overallPalette',
  'backgroundProps',
  'sectionTitle',
  'titleContainerClasses',
  'cardBorderPalette',
  'cardBorderPaletteStop',
  'cardBorderWidth'
];

const sectionScrollingDefaults = [
  'arrows',
  'arrowContainerWidth',
  'arrowGridGap',
  'showArrows',
  'hideScrollbar'
];

export const Default: Story = (args) => <Section {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...sectionDefaults, 'listAggregate', 'badgeCorner', 'badgeSize']
  }
};
Default.args = {
  items: viewItems
};

export const ListView = Default.bind({});
ListView.parameters = {
  controls: {
    sort: 'alpha',
    include: [...sectionDefaults, 'listAggregate', 'badgeCorner', 'badgeSize']
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
    include: [...sectionDefaults, 'listAggregate', 'badgeCorner', 'badgeSize']
  }
};
ListAggregate.args = {
  items: viewItemsAggregate,
  itemDisplay: 'ItemList',
  cardHeight: 36,
  gap: 0,
  listAggregate: true,
  thumbnailDivHeight: 28,
  descriptionLineClamp: '1'
};

export const CardCalloutView = Default.bind({});
CardCalloutView.parameters = {
  controls: {
    sort: 'alpha',
    include: [...sectionDefaults]
  }
};
CardCalloutView.args = {
  items: viewItemsCallout,
  itemDisplay: 'ItemCardCallout'
};

export const StandardScrolling = Default.bind({});
StandardScrolling.parameters = {
  controls: {
    sort: 'alpha',
    include: [
      ...sectionDefaults,
      ...sectionScrollingDefaults,
      'badgeCorner',
      'badgeSize'
    ]
  }
};
StandardScrolling.args = {
  items: viewItems,
  itemCollectionDisplay: 'CollectionGridScrolling'
};

export const CardCalloutScrolling = Default.bind({});
CardCalloutScrolling.parameters = {
  controls: {
    sort: 'alpha',
    include: [...sectionDefaults, ...sectionScrollingDefaults]
  }
};
CardCalloutScrolling.args = {
  items: viewItemsCallout,
  itemDisplay: 'ItemCardCallout',
  itemCollectionDisplay: 'CollectionGridScrolling'
};
