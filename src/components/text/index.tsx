import { FC } from 'react';
import cn from 'classnames';
import { CreateColor, HexToRgb } from '../../utils/helpers';
import { GradientDirection } from '../../utils/types';
import {
  GradientDirectionValues,
  ShadowOpacity,
  TextProps,
  TextShadowObj
} from './text.types';
import { Dev } from '../dev';
import parse from 'html-react-parser';
import { marked } from 'marked';
export * from './text.types';

export const Text: FC<TextProps> = ({
  children,
  classes,
  gradientDirection = 'r',
  gradientFrom = 'rose',
  gradientPaletteStop = 500,
  gradientTo = 'primary',
  gradientVia = 'emerald',
  ignoreMarkup = false,
  text,
  textPalette = 'black',
  textPaletteStop = 700,
  textShadowBlur = 'sm',
  textShadowDirection,
  textShadowOpacity = 100,
  textShadowPalette = 'primary',
  textShadowPaletteStop = 500,
  textShadowThickness = 'md',
  ...props
}) => {
  const shadowColor = CreateColor(textShadowPalette, textShadowPaletteStop);
  const style = getComputedStyle(document.body);
  const shadowHex = style.getPropertyValue(`--color-${shadowColor}`);
  const rgb = HexToRgb(shadowHex);

  const calculateShadowDirection = (
    direction: string | Record<string, unknown>
  ) => {
    switch (direction) {
      case 'br':
        return `${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]})`;
      case 'bl':
        return `-${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]})`;
      case 'tl':
        return `-${TextShadowObj[textShadowThickness]}px -${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]})`;
      case 'tr':
        return `${TextShadowObj[textShadowThickness]}px -${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]})`;
      case 'r':
        return `${TextShadowObj[textShadowThickness]}px 0px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]})`;
      case 'l':
        return `-${TextShadowObj[textShadowThickness]}px 0px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]})`;
      case 'b':
        return `0px ${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]})`;
      case 't':
        return `0px -${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]})`;
      default:
        return `-${TextShadowObj[textShadowThickness]}px -${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]}), ${TextShadowObj[textShadowThickness]}px -${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]}), -${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]}), ${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowThickness]}px ${TextShadowObj[textShadowBlur]}px rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${ShadowOpacity[textShadowOpacity]})`;
    }
  };

  const gradient =
    textPalette === 'gradient'
      ? {
          backgroundImage: `linear-gradient(${
            GradientDirectionValues[gradientDirection as GradientDirection]
          }deg, var(--color-${gradientFrom}-${gradientPaletteStop}), var(--color-${gradientVia}-${gradientPaletteStop}), var(--color-${gradientTo}-${gradientPaletteStop}))`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }
      : undefined;

  const textProps = {
    style: {
      ...gradient,
      textShadow: textShadowDirection
        ? calculateShadowDirection(textShadowDirection)
        : ''
    },
    textPalette,
    textPaletteStop,
    classes: cn(classes),
    ...props
  };

  const textToUse =
    typeof children === 'string' ? children : text !== undefined ? text : '';
  text =
    ignoreMarkup === true
      ? textToUse.replace(/[&\/\\#_,+()$~%.'":*?<>{}]/g, '')
      : textToUse;

  const content = ignoreMarkup === true ? text : children;

  let parsedContent;
  if (children && children !== '' && typeof children === 'string') {
    const parsedWithMarked = marked.parse(`${content}`);
    parsedContent = parse(parsedWithMarked);
  } else {
    parsedContent = textToUse;
  }

  return (
    <>
      <Dev {...textProps}>
        {parsedContent !== '' ? parsedContent : children}
      </Dev>
    </>
  );
};
