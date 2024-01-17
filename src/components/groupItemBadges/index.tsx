import { FC } from 'react';
import { Corners, Gap } from '../../utils/types';
import { Badge, BadgeProps } from '../badge';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';

export interface GroupItemBadgesProps extends DevProps {
  badges?: {
    label: BadgeProps['label'];
    bgPalette: BadgeProps['bgPalette'];
    indicatorStatus?: BadgeProps['indicatorStatus'];
    indicatorStatusPing?: BadgeProps['indicatorStatusPing'];
    badgeProps?: BadgeProps;
  }[];
  badgeSize?: 'basic' | 'large';
  badgeCorner?: Corners;
  badgeGap?: Gap;
}

export const GroupItemBadges: FC<GroupItemBadgesProps> = ({
  classes,
  badges,
  badgeCorner = 'rounded-full',
  badgeSize = 'basic',
  badgeGap = 1,
  lineClamp = '1',
  ...props
}) => {
  const spanProps: GroupItemBadgesProps = {
    classes,
    ...props
  };

  const badgeGroupProps: GroupItemBadgesProps = {
    flexWrap: 'wrap',
    gap: badgeGap,
    classes
  };

  return (
    <Dev {...spanProps}>
      {badges && (
        <Dev {...badgeGroupProps}>
          {badges.map((badge, index) => (
            <Badge
              key={index}
              indicatorStatus={badge.indicatorStatus}
              indicatorStatusPing={badge.indicatorStatusPing}
              bgPalette={badge.bgPalette}
              corner={badgeCorner}
              size={badgeSize}
              lineClamp={lineClamp}
              {...badge.badgeProps}>
              {badge.label}
            </Badge>
          ))}
        </Dev>
      )}
    </Dev>
  );
};
