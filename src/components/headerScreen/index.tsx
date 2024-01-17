import { FC } from 'react';
import { Breadcrumb, BreadcrumbProps } from '../breadcrumb';
import { Button } from '../button';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Divider } from '../divider';
import { DividerProps } from '../divider/divider.types';
import { GroupItemBadges, GroupItemBadgesProps } from '../groupItemBadges';
import {
  GroupItemContextValues,
  GroupItemContextValuesProps
} from '../groupItemContextValues';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import { Thumbnail, ThumbnailProps } from '../thumbnail';
import { HeaderScreenProps } from './headerScreen.types';
export * from './headerScreen.types';

export const HeaderScreen: FC<HeaderScreenProps> = ({
  classes,
  titleText = 'This is a Title',
  accentEffect = false,
  accentPaletteStop = 400,
  badgeCorner = 'rounded-full',
  badgeSize = 'basic',
  overallPalette = 'primary',
  overallPaletteStop = 50,
  frontRadialPalette = 'white',
  frontRadialPaletteStop = 500,
  backRadialPalette = 'neutral',
  backRadialPaletteStop = 300,
  backRadialPaletteStopInverse = 300,
  gradientDirection = 't',
  height = 'auto',
  padding = ['t-32', 'b-4', 'x-8', 'y-4'],
  backgroundColorProps = {
    gradientVia: 'transparent',
    gradientTo: 'transparent',
    opacity: 100,
    mixBlend: 'normal',
    position: 'absolute',
    borderRadius: 'none'
  },
  inversePaletteStop = 700,
  accentPalette,
  thumbnailProps,
  buttonIcons,
  imageLogoFit,
  imageLogoHeight,
  imageLogoURL,
  contextValues,
  divider,
  breadcrumbTextShadowDirection,
  breadcrumbTextShadowBlur,
  breadcrumbTextShadowOpacity,
  breadcrumbTextShadowPalette,
  breadcrumbTextShadowPaletteStop,
  breadcrumbTextShadowThickness,
  overlineTextShadowDirection,
  overlineTextShadowBlur,
  overlineTextShadowOpacity,
  overlineTextShadowPalette,
  overlineTextShadowPaletteStop,
  overlineTextShadowThickness,
  titleTextShadowDirection,
  titleTextShadowBlur,
  titleTextShadowOpacity,
  titleTextShadowPalette,
  titleTextShadowPaletteStop,
  titleTextShadowThickness,
  titleLeadingIcon,
  titleTrailingIcon,
  titleLineClamp,
  breadcrumbIcon,
  seperatorIcon,
  breadcrumbSize,
  breadcrumbProps,
  overlineText,
  ...props
}) => {
  const spanProps: DevProps = {
    position: 'relative',
    flexDirection: 'col',
    width: 'full',
    height: height,
    textPalette: overallPalette,
    justifyContent: 'between',
    classes,
    ...props
  };

  const headerThumbnailProps: ThumbnailProps = {
    width: 'full',
    height: 'full',
    ...thumbnailProps
  };

  const bgColorSpan: DevProps = {
    width: 'full',
    height: 'full',
    gradientFrom: accentPalette ? accentPalette : overallPalette,
    gradientPaletteStop: accentPaletteStop,
    gradientDirection,
    ...backgroundColorProps
  };

  const logoImageProps: DevProps = {
    height: imageLogoHeight,
    width: 20,
    bgImage: imageLogoURL,
    bgSize: imageLogoFit
  };

  const contentSpanProps: DevProps = {
    padding
  };

  const breadcrumbSectionProps: BreadcrumbProps = {
    breadcrumbIcon: breadcrumbIcon,
    breadcrumbs: props.breadcrumbs,
    textPalette: overallPalette,
    textPaletteStop: props.themeInverse
      ? inversePaletteStop
      : overallPaletteStop,
    seperatorIcon: seperatorIcon,
    seperatorIconPaletteStop: props.themeInverse
      ? inversePaletteStop
      : overallPaletteStop,
    linkSize: breadcrumbSize,
    backButtonClick: props.backButtonClick,
    textShadowDirection: breadcrumbTextShadowDirection,
    textShadowBlur: breadcrumbTextShadowBlur,
    textShadowThickness: breadcrumbTextShadowThickness,
    textShadowPalette: breadcrumbTextShadowPalette,
    textShadowPaletteStop: breadcrumbTextShadowPaletteStop,
    textShadowOpacity: breadcrumbTextShadowOpacity,
    ...breadcrumbProps
  };

  const overlineProps: LabelProps = {
    size: 'sm',
    textPalette: overallPalette,
    textPaletteStop: props.themeInverse
      ? inversePaletteStop
      : overallPaletteStop,
    textClasses: {
      textShadowDirection: overlineTextShadowDirection,
      textShadowBlur: overlineTextShadowBlur,
      textShadowThickness: overlineTextShadowThickness,
      textShadowPalette: overlineTextShadowPalette,
      textShadowPaletteStop: overlineTextShadowPaletteStop,
      textShadowOpacity: overlineTextShadowOpacity
    }
  };

  const titleProps: LabelProps = {
    lineHeight: 'tight',
    size: 'xl',
    textPalette: overallPalette,
    textPaletteStop: props.themeInverse
      ? inversePaletteStop
      : overallPaletteStop,
    alignItems: 'start',
    leadingIcon: titleLeadingIcon,
    trailingIcon: titleTrailingIcon,
    lineClamp: titleLineClamp,
    textClasses: {
      textShadowDirection: titleTextShadowDirection,
      textShadowBlur: titleTextShadowBlur,
      textShadowThickness: titleTextShadowThickness,
      textShadowPalette: titleTextShadowPalette,
      textShadowPaletteStop: titleTextShadowPaletteStop,
      textShadowOpacity: titleTextShadowOpacity
    },
    classes: 'flex-grow'
  };

  const dividerProps: DividerProps = {
    dividerPalette: overallPalette,
    dividerPaletteStop: props.themeInverse
      ? inversePaletteStop
      : overallPaletteStop
  };

  const contextValueProps: GroupItemContextValuesProps = {
    contextValues: contextValues,
    textPalette: overallPalette,
    textPaletteStop: props.themeInverse
      ? inversePaletteStop
      : overallPaletteStop,
    size: 'sm',
    frontRadialPalette,
    frontRadialPaletteStop,
    backRadialPalette,
    backRadialPaletteStop,
    backRadialPaletteStopInverse
  };

  const badgesProps: GroupItemBadgesProps = {
    badges: props.badges,
    badgeGap: 2,
    badgeCorner,
    badgeSize
  };

  return (
    <Dev {...spanProps}>
      {/* Image Container */}
      <div className={`h-full w-full absolute`}>
        <Thumbnail {...headerThumbnailProps} />
      </div>
      {/*  End of Image Container */}

      {/* If there is an accent effect True it will go OVER our image block */}
      {accentEffect && <Dev {...bgColorSpan} />}
      {/* End accent effect */}

      {/* Top Right Logo  */}
      <div className='top-8 right-8 w-full inline-flex justify-end relative'>
        <Dev {...logoImageProps} />
      </div>
      {/* End Top Right Logo */}

      <Dev {...contentSpanProps}>
        <div className='w-full'>
          <div className='w-full flex flex-col gap-4'>
            {/* Breadcrumbs  */}
            <div className='w-full inline-flex items-center'>
              {props.breadcrumbs && (
                <div className='relative'>
                  <Breadcrumb {...breadcrumbSectionProps} />
                </div>
              )}
              {/* End Breadcrumbs  */}
            </div>

            {/* overline text and label grouping */}
            <div className='flex flex-col gap-0.5'>
              {overlineText && <Label {...overlineProps}>{overlineText}</Label>}
              <div className='flex justify-between'>
                <Label {...titleProps}>{titleText}</Label>
                {/* Trailing Meta Right */}
                <div className='inline-flex flex-nowrap self-end'>
                  {buttonIcons && (
                    <div className='justify-self-end'>
                      <div className='inline-flex items-center gap-1 justify-self-end'>
                        {buttonIcons.map((icon, index) => {
                          return (
                            <Button
                              key={index}
                              leadingIcon={icon.icon}
                              iconOnly={true}
                              bgPalette={'transparent'}
                              textPalette={overallPalette}
                              textPaletteStop={
                                props.themeInverse
                                  ? inversePaletteStop
                                  : overallPaletteStop
                              }
                              selected={icon.selected}
                              onClick={icon.onClick}
                              {...icon.props}
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* END of Trailing Meta Right */}
            </div>
            {/* end overline text and label grouping */}
          </div>

          {/* divider begin */}
          {divider && (contextValues || props.badges) && (
            <div className='mt-4'>
              <Divider {...dividerProps} />
            </div>
          )}
          {/* end divider */}

          <div className='flex flex-col mt-4 gap-2 md:flex-row md:gap-8'>
            {/* contextValues begin */}
            <div className='inline-flex items-center space-x-4'>
              {contextValues && (
                <GroupItemContextValues {...contextValueProps} />
              )}
            </div>
            {/* contextValues end */}
            {/* badges begin */}
            <div className='relative'>
              {props.badges && <GroupItemBadges {...badgesProps} />}
            </div>
            {/* badges end */}
          </div>
        </div>
      </Dev>
    </Dev>
  );
};
