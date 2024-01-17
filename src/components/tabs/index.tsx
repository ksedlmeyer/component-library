import { FC } from 'react';
import { Corners } from '../../utils/types';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Link, LinkProps } from '../link';

export interface TabsProps extends LinkProps {
  tabs?: {
    id?: string;
    label: string;
    selected?: LinkProps['selected'];
    isDisabled?: LinkProps['isDisabled'];
    leadingIcon?: string;
    leadingIconType?: LinkProps['leadingIconType'];
    to?: LinkProps['to'];
    href?: LinkProps['href'];
    target?: LinkProps['target'];
    onClick?: LinkProps['onClick'];
    classes?: DevProps['classes'];
  }[];
  tabsCorner?: Corners;
  selectedPalette?: DevProps['bgPalette'];
  selectedPaletteStop?: DevProps['bgPaletteStop'];
  selectedTextPalette?: DevProps['textPalette'];
  selectedTextPaletteStop?: DevProps['textPaletteStop'];
}

export const Tabs: FC<TabsProps> = ({
  classes,
  selectedPalette = 'primary',
  selectedPaletteStop = 100,
  textPalette = 'primary',
  textPaletteStop = 500,
  selectedTextPalette = 'primary',
  selectedTextPaletteStop = 500,
  linkSize = 'xs',
  tabsCorner = 'rounded',
  alignItems = 'start',
  ...props
}) => {
  const spanProps: DevProps = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    alignItems,
    gap: 2,
    classes,
    ...props
  };

  const tabSpanProps: DevProps = {
    display: 'inline-flex',
    position: 'relative',
    height: 'full',
    alignItems: 'center'
  };

  return (
    <Dev {...spanProps}>
      {props.tabs &&
        props.tabs.map((tab, index) => {
          return (
            <Dev key={index} {...tabSpanProps}>
              <Link
                height='full'
                alignItems='center'
                corner={tabsCorner}
                bgPalette={tab.selected ? selectedPalette : 'transparent'}
                bgPaletteStop={selectedPaletteStop}
                textPalette={tab.selected ? selectedTextPalette : textPalette}
                textPaletteStop={
                  tab.selected ? selectedTextPaletteStop : textPaletteStop
                }
                leadingIcon={tab.leadingIcon}
                leadingIconType={tab.leadingIconType}
                linkSize={linkSize}
                href={tab.href}
                to={tab.to}
                target={tab.target}
                lineClamp={'1'}
                isDisabled={tab.isDisabled}
                selected={tab.selected}
                classes={tab.classes}
                onClick={tab.onClick}>
                {tab.label}
              </Link>
            </Dev>
          );
        })}
    </Dev>
  );
};
