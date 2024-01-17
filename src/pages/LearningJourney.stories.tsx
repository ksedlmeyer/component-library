import { Story } from '@storybook/react';
import { Section, SectionProps } from '../components/section';
import {
  assignmentItems,
  cardCalloutItems,
  listItems
} from '../assets/data/items.data';
import { Container } from '../components/container';
import { HeaderScreen } from '../components/headerScreen';
import { AvatarDisplay } from '../components/avatarDisplay';
import { Input } from '../components/input';
import { Tabs } from '../components/tabs';

export default {
  title: 'Pages/LearningJourney',
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

const tabsData = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    selected: true
  },
  {
    id: 'assigned',
    label: 'Assigned Learning',
    selected: false
  },
  {
    id: 'progress',
    label: 'In Progress',
    selected: false
  },
  {
    id: 'saved',
    label: 'Saved',
    selected: false
  },
  {
    id: 'liked',
    label: 'Liked',
    selected: false
  },
  {
    id: 'overdue',
    label: 'Overdue',
    selected: false
  }
];

export const TemplateA: Story = () => (
  <Container
    container={false}
    display='block'
    position='absolute'
    width='full'
    padding={{
      base: 'b-12',
      md: 'b-0'
    }}>
    <HeaderScreen
      thumbnailProps={{
        bgPalette: 'primary',
        bgPaletteStop: 800,
        corner: 'square',
        height: 'full',
        textureBgPosition: 'center',
        textureSize: 'contain',
        textureRepeat: 'repeat',
        textureImageURL: '/ascnd-library/background/texture-snow-a-05.png',
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
      overlineText='Learning'
      titleLeadingIcon='AcademicCapIcon'
      titleText='Learning Journey'
      minHeight='[325px]'
      padding={['t-32', 'b-8', 'x-8', 'y-4']}
    />
    <Container display='block' padding={4}>
      <Container container={false} display='grid' gridCols={1}>
        <Container
          display='grid'
          gridCols={{ base: 2, lg: 3 }}
          classes='lg:-mt-8 z-10'>
          <AvatarDisplay
            titleText='Joe Schmo'
            subtitleText='jschmo'
            padding='b-4'
            initialsText='JS'
            bgPalette='secondary'
          />
          <Container display='grid' gridColSize='span-2' gridCols={3}>
            <Input
              margin='auto'
              placeholder='Search'
              gridColSize={{
                base: ['start-1', 'span-3'],
                lg: ['start-3', 'span-1']
              }}
            />
            <Tabs
              tabs={tabsData}
              bgPalette='primary'
              bgPaletteStop={100}
              borderRadius='base'
              selectedPalette='primary'
              selectedPaletteStop={400}
              selectedTextPaletteStop={100}
              alignItems='center'
              justifyContent={{
                base: 'center',
                md: 'between'
              }}
              gridColSize='span-3'
              linkSize='lg'
              margin={{ base: 'y-4', lg: 0 }}
            />
          </Container>
        </Container>
        <Container gridCols={12} gridColSize='span-full'>
          <Container gridColSize='span-full'>
            <Section {...sectionProps} />
          </Container>
          <Container gridCols={12} gridColSize='span-full' gap={4} padding={8}>
            <Container
              gridColSize={'span-8'}
              boxShadow='base'
              borderRadius='lg'>
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
      </Container>
    </Container>
  </Container>
);
