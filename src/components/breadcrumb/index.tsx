import { FC } from 'react';
import { Dev } from '../dev';
import { DevProps } from '../dev/dev.types';
import { Label } from '../label';
import { LabelProps } from '../label/label.types';
import { Link, LinkProps } from '../link';

export interface BreadcrumbProps extends LinkProps {
  breadcrumbs?: {
    label: string;
    leadingIcon?: LinkProps['leadingIcon'];
    href?: LinkProps['href'];
    to?: LinkProps['to'];
    linkTarget?: '_self' | '_blank' | '_parent' | '_top' | 'test';
    isDisabled?: LinkProps['isDisabled'];
    onBreadcrumbClick?: LinkProps['onClick'];
  }[];
  breadcrumbIcon?: string;
  seperatorIcon?: string;
  seperatorIconPaletteStop?: DevProps['textPaletteStop'];
  backButtonClick?: LinkProps['onClick'];
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
  classes,
  textPalette = 'primary',
  textPaletteStop = 700,
  seperatorIconPaletteStop = 500,
  linkSize = 'xs',
  breadcrumbIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>',
  seperatorIcon = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.807538 10.9425C0.397488 10.5324 0.397488 9.86759 0.807538 9.45754L4.26508 6L0.807538 2.54246C0.397487 2.13241 0.397487 1.46759 0.807538 1.05754C1.21759 0.647487 1.88241 0.647487 2.29246 1.05754L6.49246 5.25754C6.90251 5.66759 6.90251 6.33241 6.49246 6.74246L2.29246 10.9425C1.88241 11.3525 1.21759 11.3525 0.807538 10.9425Z" fill="currentColor"/></svg>',
  textAlign = 'left',
  alignItems = 'center',
  backButtonClick,
  textShadowDirection,
  textShadowBlur,
  textShadowOpacity,
  textShadowPalette,
  textShadowPaletteStop,
  textShadowThickness,
  ...props
}) => {
  const spanProps: DevProps = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    classes,
    ...props
  };

  const breadcrumbBackSpanProps: DevProps = {
    padding: 'r-2',
    alignSelf: 'center'
  };

  const breadcrumbBackProps: LinkProps = {
    leadingIcon: breadcrumbIcon,
    linkSize,
    selectable: false,
    textPalette,
    textPaletteStop,
    textAlign,
    textShadowDirection: textShadowDirection,
    textShadowBlur: textShadowBlur,
    textShadowThickness: textShadowThickness,
    textShadowPalette: textShadowPalette,
    textShadowPaletteStop: textShadowPaletteStop,
    textShadowOpacity: textShadowOpacity,
    onClick: backButtonClick,
    verticalAlign: 'middle'
  };

  const breadcrumbSpanProps: DevProps = {
    alignSelf: 'center',
    verticalAlign: 'middle'
  };

  const seperatorIconSpanProps: DevProps = {
    fontSize: linkSize,
    display: 'inline-flex',
    alignSelf: 'center',
    padding: 'l-2',
    textPalette,
    textPaletteStop,
    verticalAlign: 'middle'
  };

  const seperatorIconProps: LabelProps = {
    leadingIcon: seperatorIcon,
    size: linkSize,
    lineClamp: 'none',
    textPalette,
    textPaletteStop: props.themeInverse
      ? props.inversePaletteStop
      : seperatorIconPaletteStop,
    textClasses: {
      textShadowDirection: textShadowDirection,
      textShadowBlur: textShadowBlur,
      textShadowPalette: textShadowPalette,
      textShadowPaletteStop: textShadowPaletteStop,
      textShadowThickness: textShadowThickness,
      textShadowOpacity: textShadowOpacity
    }
  };

  return (
    <Dev {...spanProps}>
      {/* Back Button For Breadcrumbs */}
      {props.breadcrumbs && (
        <Dev {...breadcrumbBackSpanProps}>
          <Link {...breadcrumbBackProps} />
        </Dev>
      )}

      {props.breadcrumbs &&
        props.breadcrumbs.map((breadcrumb, index) => {
          return (
            <Dev key={index} className='self-center'>
              <Dev key={index} {...breadcrumbSpanProps}>
                <Link
                  onClick={breadcrumb.onBreadcrumbClick}
                  textPalette={textPalette}
                  textPaletteStop={textPaletteStop}
                  leadingIcon={breadcrumb.leadingIcon}
                  linkSize={linkSize}
                  href={breadcrumb.href ? breadcrumb.href : '#'}
                  target={breadcrumb.linkTarget}
                  to={breadcrumb.to}
                  alignItems={alignItems}
                  textAlign={textAlign}
                  isDisabled={breadcrumb.isDisabled}
                  textShadowDirection={textShadowDirection}
                  textShadowBlur={textShadowBlur}
                  textShadowThickness={textShadowThickness}
                  textShadowPalette={textShadowPalette}
                  textShadowPaletteStop={textShadowPaletteStop}
                  textShadowOpacity={textShadowOpacity}>
                  {breadcrumb.label}
                </Link>
              </Dev>
              <Dev key={index + '_seperator'} {...seperatorIconSpanProps}>
                {props.breadcrumbs?.length !== index + 1 ? (
                  <Label {...seperatorIconProps} />
                ) : null}
              </Dev>
            </Dev>
          );
        })}
    </Dev>
  );
};
