import { Story } from '@storybook/react';
import { Container, Section, SectionProps } from '../components';
import { cardCalloutItems, listItems } from '../assets/data/items.data';

export default {
  title: 'Pages/DashSetups',
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  }
};

const sectionProps: SectionProps = {
  sectionTitle: 'Section One',
  itemCollectionDisplay: 'CollectionGridScrolling',
  items: listItems as SectionProps['items'],
  cardBorderWidth: 2,
  cardBorderPalette: 'neutral',
  cardBorderPaletteStop: 100
};

const topSectionProps: SectionProps = {
  sectionTitle: 'Section Two',
  overallPalette: 'secondary',
  items: cardCalloutItems as SectionProps['items'],
  itemDisplay: 'ItemCardCallout',
  cardHeight: 'fit',
  thumbnailDivHeight: 28,
  gridCols: 5
};

const bottomSectionProps: SectionProps = {
  sectionTitle: 'Section Three',
  items: listItems as SectionProps['items'],
  itemCollectionDisplay: 'CollectionGridScrolling',
  cardBorderWidth: 2,
  cardBorderPalette: 'neutral',
  cardBorderPaletteStop: 100
};

export const TemplateA: Story = () => (
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

const leftSectionProps: SectionProps = {
  sectionTitle: 'Left Section',
  viewAll: false,
  overallPalette: 'neutral',
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
  sectionTitle: 'Right Section',
  viewAll: false,
  overallPalette: 'secondary',
  dividerShow: false,
  items: cardCalloutItems as SectionProps['items'],
  itemDisplay: 'ItemCardCallout',
  gridCols: 1
};

export const TemplateB: Story = () => (
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

export const TemplateC: Story = () => (
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

export const TemplateD: Story = () => (
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

export const TemplateE: Story = () => (
  <Container
    gridCols={12}
    gridRows={6}
    gridColSize='span-full'
    height='screen'
    gap={2}>
    <Container
      gridCols={12}
      gridRows={1}
      gridColSize='span-full'
      gridRowSize='span-3'
      gap={4}
      padding={8}
      overflow='y-scroll'>
      <Container
        gridColSize={'span-8'}
        gridRowSize={'span-full'}
        boxShadow='base'
        borderRadius='lg'
        overflow='y-scroll'
        height='full'>
        <Section {...leftSectionProps} />
      </Container>
      <Container
        gridColSize={'span-4'}
        gridRowSize={'span-full'}
        boxShadow='base'
        borderRadius='lg'
        overflow='y-scroll'
        height='full'>
        <Section {...rightSectionProps} />
      </Container>
    </Container>
    <Container gridColSize='span-full' gridRowSize='span-3'>
      <Section {...sectionProps} />
    </Container>
  </Container>
);

export const TemplateF: Story = () => (
  <Container
    gridCols={12}
    gridRows={6}
    gridColSize='span-full'
    height='screen'
    gap={2}>
    <Container
      gridCols={12}
      gridRows={1}
      gridColSize='span-full'
      gridRowSize='span-3'
      gap={4}
      padding={8}
      overflow='y-scroll'>
      <Container
        gridColSize={'span-4'}
        gridRowSize={'span-full'}
        boxShadow='base'
        borderRadius='lg'
        overflow='y-scroll'
        height='full'>
        <Section {...rightSectionProps} />
      </Container>
      <Container
        gridColSize={'span-8'}
        gridRowSize={'span-full'}
        boxShadow='base'
        borderRadius='lg'
        overflow='y-scroll'
        height='full'>
        <Section {...leftSectionProps} />
      </Container>
    </Container>
    <Container gridColSize='span-full' gridRowSize='span-3'>
      <Section {...sectionProps} />
    </Container>
  </Container>
);

export const TemplateG: Story = () => (
  <Container
    gridCols={12}
    gridRows={6}
    gridColSize='span-full'
    height='screen'
    gap={2}>
    <Container
      gridCols={12}
      gridRows={1}
      gridColSize='span-full'
      gridRowSize='span-3'
      gap={4}
      padding={8}
      overflow='y-scroll'>
      <Container
        gridColSize={'span-6'}
        gridRowSize={'span-full'}
        boxShadow='base'
        borderRadius='lg'
        overflow='y-scroll'
        height='full'>
        <Section {...leftSectionProps} />
      </Container>
      <Container
        gridColSize={'span-6'}
        gridRowSize={'span-full'}
        boxShadow='base'
        borderRadius='lg'
        overflow='y-scroll'
        height='full'>
        <Section {...rightSectionProps} />
      </Container>
    </Container>
    <Container gridColSize='span-full' gridRowSize='span-3'>
      <Section {...sectionProps} />
    </Container>
  </Container>
);
