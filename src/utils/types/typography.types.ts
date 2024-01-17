import { Palette, PaletteStop } from './color.types';
import { UseBeforeAfter, UseModifiers } from './modifier.types';
import {
  ArbitraryValue,
  BaseSizing,
  LeftRight,
  LineClamp,
  OneToFour,
  Opacity,
  SizingZeroToNinetySix,
  TextSize,
  TopBottom
} from './shared.types';

export const TextPalette = [...Palette, 'gradient'] as const;
export type TextPalette = typeof TextPalette[number];

export const FontSmoothing = ['antialiased', 'subpixel-antialiased'] as const;
export type FontSmoothing = typeof FontSmoothing[number];

export const FontStyle = ['italic', 'normal', 'oblique'] as const;
export type FontStyle = typeof FontStyle[number];

export const FontWeight = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black'
] as const;
export type FontWeight = typeof FontWeight[number];

export const FontVariantNumeric = [
  'normal-nums',
  'ordinal',
  'slashed-zero',
  'lining-nums',
  'oldstyle-nums',
  'proportional-nums',
  'tabular-nums',
  'diagonal-fractions',
  'stacked-fractions'
] as const;
export type FontVariantNumeric = typeof FontVariantNumeric[number];

export const LetterSpacing = [
  'tighter',
  'tight',
  'normal',
  'wide',
  'wider',
  'widest'
] as const;
export type LetterSpacing = typeof LetterSpacing[number];

export const LineHeight = [
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'none',
  'tight',
  'snug',
  'normal',
  'relaxed',
  'loose'
] as const;
export type LineHeight = typeof LineHeight[number];

export const ListStyleType = ['none', 'disc', 'decimal'] as const;
export type ListStyleType = typeof ListStyleType[number];

export const ListStylePosition = ['inside', 'outside'] as const;
export type ListStylePosition = typeof ListStylePosition[number];

export const TextAlign = [
  ...LeftRight,
  'center',
  'justify',
  'start',
  'end'
] as const;
export type TextAlign = typeof TextAlign[number];

export const TextDecoration = [
  'underline',
  'overline',
  'line-through',
  'no-underline'
] as const;
export type TextDecoration = typeof TextDecoration[number];

export const TextDecorationStyle = [
  'solid',
  'double',
  'dotted',
  'dashed',
  'wavy'
] as const;
export type TextDecorationStyle = typeof TextDecorationStyle[number];

export const TextDecorationThickness = [
  'auto',
  'from-font',
  ...OneToFour,
  8
] as const;
export type TextDecorationThickness = typeof TextDecorationThickness[number];

export const TextUnderlineOffset = ['auto', ...OneToFour, 8] as const;
export type TextUnderlineOffset = typeof TextUnderlineOffset[number];

export const TextTransform = [
  'uppercase',
  'lowercase',
  'capitalize',
  'normal-case'
] as const;
export type TextTransform = typeof TextTransform[number];

export const TextOverflow = ['truncate', 'text-clip', 'text-ellipsis'] as const;
export type TextOverflow = typeof TextOverflow[number];

export const TextIndent = [...SizingZeroToNinetySix, 'px'] as const;
export type TextIndent = typeof TextIndent[number];

export const VerticalAlign = [
  'baseline',
  ...TopBottom,
  'middle',
  'text-top',
  'text-bottom',
  'sub',
  'super'
] as const;
export type VerticalAlign = typeof VerticalAlign[number];

export const WhiteSpace = [
  'normal',
  'nowrap',
  'pre',
  'pre-line',
  'pre-wrap'
] as const;
export type WhiteSpace = typeof WhiteSpace[number];

export const WordBreak = ['normal', 'words', 'all'] as const;
export type WordBreak = typeof WordBreak[number];

export const Content = ['none'] as const;
export type Content = typeof Content[number];

export const ProseGrayScale = [
  'gray',
  'slate',
  'zinc',
  'neutral',
  'stone'
] as const;
export type ProseGrayScale = typeof ProseGrayScale[number];

export const ProseSize = ['base', 'sm', 'lg', 'xl', '2xl'] as const;
export type ProseSize = typeof ProseSize[number];

export const ProseInvert = ['invert'] as const;
export type ProseInvert = typeof ProseInvert[number];

export const TextShadowDirection = [
  'l',
  'r',
  't',
  'b',
  'tl',
  'tr',
  'bl',
  'br',
  'outline'
] as const;
export type TextShadowDirection = typeof TextShadowDirection[number];

export const TextShadowBlur = ['none', ...BaseSizing] as const;
export type TextShadowBlur = typeof TextShadowBlur[number];

export type TextShadowOpacity = Opacity;

export interface TypographyProps {
  font?: UseModifiers<string>;
  fontSize?: UseModifiers<TextSize | ArbitraryValue>;
  fontSmoothing?: UseModifiers<FontSmoothing>;
  fontStyle?: UseModifiers<FontStyle>;
  fontWeight?: UseModifiers<FontWeight | ArbitraryValue>;
  fontVariantNumeric?: UseModifiers<FontVariantNumeric>;
  letterSpacing?: UseModifiers<LetterSpacing | ArbitraryValue>;
  lineClamp?: UseModifiers<LineClamp | ArbitraryValue>;
  lineHeight?: UseModifiers<LineHeight | ArbitraryValue>;
  listStyleType?: UseModifiers<ListStyleType | ArbitraryValue>;
  listStylePosition?: UseModifiers<ListStylePosition>;
  textAlign?: UseModifiers<TextAlign>;
  textPalette?: UseModifiers<TextPalette | 'gradient'>;
  textPaletteStop?: UseModifiers<PaletteStop>;
  textDecoration?: UseModifiers<TextDecoration>;
  textDecorationPalette?: UseModifiers<Palette | 'gradient'>;
  textDecorationPaletteStop?: UseModifiers<PaletteStop>;
  textDecorationStyle?: UseModifiers<TextDecorationStyle>;
  textDecorationThickness?: UseModifiers<
    TextDecorationThickness | ArbitraryValue
  >;
  textUnderlineOffset?: UseModifiers<TextUnderlineOffset | ArbitraryValue>;
  textTransform?: UseModifiers<TextTransform>;
  textOverflow?: UseModifiers<TextOverflow>;
  textIndent?: UseModifiers<TextIndent | ArbitraryValue>;
  textShadowDirection?: UseModifiers<TextShadowDirection>;
  textShadowPalette?: UseModifiers<Palette | 'gradient'>;
  textShadowPaletteStop?: UseModifiers<PaletteStop>;
  textShadowBlur?: TextShadowBlur;
  textShadowThickness?: BaseSizing;
  textShadowOpacity?: Opacity;
  verticalAlign?: UseModifiers<VerticalAlign>;
  whitespace?: UseModifiers<WhiteSpace>;
  wordBreak?: UseModifiers<WordBreak>;
  twContent?: UseBeforeAfter<Content | ArbitraryValue>;
  prose?: UseModifiers<string>;
  themeInverse?: UseModifiers<boolean>;
  inversePaletteStop?: UseModifiers<PaletteStop>;
}
