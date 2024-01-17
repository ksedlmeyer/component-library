import { ComponentPropsWithoutRef, ReactNode } from 'react';
import {
  AccessibilityProps,
  BgProps,
  BorderProps,
  EffectProps,
  FilterProps,
  FlexGridProps,
  InteractivityProps,
  LayoutProps,
  SizingProps,
  SpacingProps,
  SVGProps,
  TableProps,
  TransformProps,
  TransitionProps,
  TypographyProps,
  RenderedElement
} from '../../utils/types';

export interface DevProps
  extends LayoutProps,
    FlexGridProps,
    SpacingProps,
    SizingProps,
    TypographyProps,
    BgProps,
    BorderProps,
    EffectProps,
    FilterProps,
    TableProps,
    TransitionProps,
    InteractivityProps,
    SVGProps,
    AccessibilityProps,
    TransformProps,
    Omit<
      ComponentPropsWithoutRef<'span'>,
      'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'
    > {
  children?: ReactNode;
  classes?: string;
  theme?: string;
  element?: RenderedElement;
  disabled?: boolean;
  type?: unknown;
  href?: string;
  id?: string;
  to?: string;
  innerRef?: React.Ref<unknown>;
}
