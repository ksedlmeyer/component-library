import { Story } from '@storybook/react';
import { Container, Section, SectionProps } from '../components';
import {
  assignmentItems,
  cardCalloutItems,
  listItems
} from '../assets/data/items.data';

export default {
  title: 'Pages/AssignmentDash',
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  }
};

const sectionProps: SectionProps = {
  sectionTitle: 'Your Assignments',
  itemCollectionDisplay: 'CollectionGridScrolling',
  items: assignmentItems as SectionProps['items'],
  cardBorderWidth: 2,
  cardBorderPalette: 'neutral',
  cardBorderPaletteStop: 100,
  textPaletteStop: 600,
  dividerPaletteStop: 100
};

const leftSectionProps: SectionProps = {
  sectionTitle: 'Learning Items',
  viewAll: false,
  overallPalette: 'neutral',
  textPaletteStop: 900,
  dividerShow: false,
  items: listItems as SectionProps['items'],
  itemDisplay: 'ItemList',
  gridCols: 1,
  cardBorderWidth: 2,
  cardBorderPalette: 'neutral',
  cardBorderPaletteStop: 100,
  cardHeight: 'fit',
  thumbnailDivHeight: 28
};

const rightSectionProps: SectionProps = {
  sectionTitle: 'Important Links',
  viewAll: false,
  overallPalette: 'secondary',
  textPaletteStop: 900,
  dividerShow: false,
  items: cardCalloutItems as SectionProps['items'],
  itemDisplay: 'ItemCardCallout',
  gridCols: 1
};

export const TemplateA: Story = () => (
  <Container gridCols={12} gridColSize='span-full'>
    <Container gridColSize='span-full'>
      <Section {...sectionProps} />
    </Container>
    <Container gridCols={12} gridColSize='span-full' gap={4} padding={8}>
      <Container gridColSize={'span-8'} boxShadow='base' borderRadius='lg'>
        <Section {...leftSectionProps} />
      </Container>
      <Container
        gridColSize={'span-4'}
        boxShadow='base'
        borderRadius='lg'
        height='fit'>
        <Section {...rightSectionProps} />
      </Container>
    </Container>
  </Container>
);

export const TemplateB: Story = () => (
  <Container gridCols={12} gridColSize='span-full'>
    <Container gridColSize='span-full'>
      <Section {...sectionProps} />
    </Container>
    <Container gridCols={12} gridColSize='span-full' gap={4} padding={8}>
      <Container gridColSize={'span-6'} boxShadow='base' borderRadius='lg'>
        <Section {...leftSectionProps} />
      </Container>
      <Container
        gridColSize={'span-6'}
        boxShadow='base'
        borderRadius='lg'
        height='fit'>
        <Section {...rightSectionProps} />
      </Container>
    </Container>
  </Container>
);

export const TemplateC: Story = () => (
  <Container gridCols={12} gridColSize='span-full'>
    <Container gridColSize='span-full'>
      <Section {...sectionProps} />
    </Container>
    <Container gridCols={12} gridColSize='span-full' gap={4} padding={8}>
      <Container gridColSize={'span-4'} boxShadow='base' borderRadius='lg'>
        <Section {...rightSectionProps} />
      </Container>
      <Container
        gridColSize={'span-8'}
        boxShadow='base'
        borderRadius='lg'
        height='fit'>
        <Section {...leftSectionProps} />
      </Container>
    </Container>
  </Container>
);

const topSectionProps: SectionProps = {
  sectionTitle: 'Quick Links',
  viewAll: false,
  overallPalette: 'secondary',
  textPaletteStop: 900,
  items: cardCalloutItems as SectionProps['items'],
  itemDisplay: 'ItemCardCallout',
  cardHeight: 'fit',
  thumbnailDivHeight: 28,
  gridCols: 5
};

const bottomSectionProps: SectionProps = {
  sectionTitle: 'Bottom Section',
  viewAll: false,
  textPaletteStop: 600,
  items: listItems as SectionProps['items'],
  itemDisplay: 'ItemList',
  gridCols: 1,
  cardHeight: 'fit',
  thumbnailDivHeight: 28,
  cardBorderWidth: 2,
  cardBorderPalette: 'neutral',
  cardBorderPaletteStop: 100
};

export const TemplateD: Story = () => (
  <Container gridCols={12} gridColSize='span-full'>
    <Container gridColSize='span-full'>
      <Section {...sectionProps} />
    </Container>
    <Container gridColSize={'span-full'}>
      <Section {...topSectionProps} />
    </Container>
    <Container gridColSize={'span-full'}>
      <Section {...bottomSectionProps} />
    </Container>
  </Container>
);

const topSection3Props: SectionProps = {
  sectionTitle: 'Featured Content',
  viewAll: true,
  textPaletteStop: 600,
  items: listItems as SectionProps['items'],
  gridCols: 4,
  cardBorderWidth: 2,
  cardBorderPalette: 'neutral',
  cardBorderPaletteStop: 100,
  viewAllLimit: 4
};

const bottomSection3Props: SectionProps = {
  sectionTitle: 'Quick Links',
  viewAll: false,
  overallPalette: 'secondary',
  textPaletteStop: 900,
  items: cardCalloutItems as SectionProps['items'],
  itemDisplay: 'ItemCardCallout',
  cardHeight: 'fit',
  thumbnailDivHeight: 28,
  gridCols: 5
};

export const TemplateE: Story = () => (
  <Container gridCols={12} gridColSize='span-full'>
    <Container gridColSize={'span-full'}>
      <Section {...topSection3Props} />
    </Container>
    <Container gridColSize='span-full'>
      <Section {...sectionProps} />
    </Container>
    <Container gridColSize={'span-full'}>
      <Section {...bottomSection3Props} />
    </Container>
  </Container>
);
