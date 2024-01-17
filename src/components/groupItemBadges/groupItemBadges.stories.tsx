import { Story } from '@storybook/react';
import { GroupItemBadges } from '.';
import { Args } from '../../utils/helpers';

export default {
  title: 'Completed/GroupItemBadges',
  component: GroupItemBadges,
  argTypes: {
    ...Args
  }
};

const badgeGroupDefaults = [
  'badges',
  'badgeSize',
  'badgeCorner',
  'badgeGap',
  'lineClamp'
];

export const Default: Story = (args) => <GroupItemBadges {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...badgeGroupDefaults]
  }
};
Default.args = {
  badges: [
    {
      label: 'NEW',
      bgPalette: 'success'
    },
    {
      label: 'REMINDER/IN PROGRESS',
      bgPalette: 'secondary'
    },
    {
      label: 'TIME SENSITIVE/OVERDUE',
      bgPalette: 'warning'
    },
    {
      label: 'COMPLETED',
      bgPalette: 'primary'
    },
    {
      label: 'ACTION REQUIRED/DUE TODAY',
      bgPalette: 'info'
    },
    {
      label: 'URGENT',
      bgPalette: 'error',
      indicatorStatus: true,
      indicatorStatusPing: true
    },
    {
      label: 'NOT STARTED',
      bgPalette: 'neutral'
    }
  ]
};
