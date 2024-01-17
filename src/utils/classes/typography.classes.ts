import cn from 'classnames';
import { ColorGen, Modifiers } from '../helpers';
import { TypographyProps } from '../types';

export const TypographyClasses = (props: TypographyProps) => {
  const textColor = ColorGen(props.textPalette, props.textPaletteStop, 'text');
  const textDecorationColor = ColorGen(
    props.textDecorationPalette,
    props.textDecorationPaletteStop,
    'decoration'
  );

  return cn({
    [`${Modifiers(props.font, 'font')}`]: props.font,
    [`${Modifiers(props.fontSize, 'text')}`]: props.fontSize,
    [`${Modifiers(props.fontSmoothing, '')}`]: props.fontSmoothing,
    [`${Modifiers(props.fontStyle, '')}`]: props.fontStyle,
    [`${Modifiers(props.fontWeight, 'font')}`]: props.fontWeight,
    [`${Modifiers(props.fontVariantNumeric, '')}`]: props.fontVariantNumeric,
    [`${Modifiers(props.letterSpacing, 'tracking')}`]: props.letterSpacing,
    [`${Modifiers(props.lineClamp, 'line-clamp')}`]: props.lineClamp,
    [`${Modifiers(props.lineHeight, 'leading')}`]: props.lineHeight,
    [`${Modifiers(props.listStyleType, 'list')}`]: props.listStyleType,
    [`${Modifiers(props.listStylePosition, 'list')}`]: props.listStylePosition,
    [`${Modifiers(props.textAlign, 'text')}`]: props.textAlign,
    [`${textColor}`]: textColor,
    [`${Modifiers(props.textDecoration, '')}`]: props.textDecoration,
    [`${textDecorationColor}`]: textDecorationColor,
    [`${Modifiers(props.textDecorationStyle, 'decoration')}`]:
      props.textDecorationStyle,
    [`${Modifiers(props.textDecorationThickness, 'decoration')}`]:
      props.textDecorationThickness,
    [`${Modifiers(props.textUnderlineOffset, 'underline-offset')}`]:
      props.textUnderlineOffset,
    [`${Modifiers(props.textTransform, '')}`]: props.textTransform,
    [`${Modifiers(props.textOverflow, '')}`]: props.textOverflow,
    [`${Modifiers(props.textIndent, 'indent')}`]: props.textIndent,
    [`${Modifiers(props.verticalAlign, 'align')}`]: props.verticalAlign,
    [`${Modifiers(props.whitespace, 'whitespace')}`]: props.whitespace,
    [`${Modifiers(props.wordBreak, 'break')}`]: props.wordBreak,
    [`${Modifiers(props.twContent, 'content')}`]: props.twContent,
    [`prose ${props.prose}`]: props.prose
  });
};
