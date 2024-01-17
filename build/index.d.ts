import { ComponentPropsWithoutRef, ReactNode, FC, HTMLAttributes, MouseEventHandler, HTMLProps } from 'react';
import * as HIconsOutline from '@heroicons/react/24/outline';
import * as HIconsSolid from '@heroicons/react/24/solid';
import { ColumnDef, Row } from '@tanstack/react-table';

declare const BeforeAfter: readonly ["before", "after"];
declare type BeforeAfter = typeof BeforeAfter[number];
declare const Modifiers: readonly ["xs", "sm", "md", "lg", "xl", "2xl", "before", "after", "active", "autofill", "backdrop", "checked", "contrast-less", "contrast-more", "dark", "default", "disabled", "empty", "enabled", "even", "file", "first", "first-letter", "first-line", "first-of-type", "focus", "focus-visible", "focus-within", "hover", "in-range", "indeterminate", "invalid", "landscape", "last", "last-of-type", "ltr", "marker", "motion-reduce", "motion-safe", "odd", "only", "only-of-type", "open", "out-of-range", "placeholder", "placeholder-shown", "portrait", "print", "read-only", "required", "rtl", "selection", "target", "valid", "visited"];
declare type Modifiers = typeof Modifiers[number];
declare type UseModifiers<T> = {
    [P in 'base' | Modifiers]?: T;
} | T;
declare type UseBeforeAfter<T> = {
    [P in BeforeAfter]?: T;
} | T;

declare const PaletteStop: readonly [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
declare type PaletteStop = typeof PaletteStop[number];
declare const NoStopColors: readonly ["inherit", "current", "transparent", "black", "white"];
declare type NoStopColors = typeof NoStopColors[number];
declare const AllStopColors: readonly ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "primary", "secondary", "neutral", "warning", "error", "info", "success"];
declare type AllStopColors = typeof AllStopColors[number];
declare const Palette: readonly ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "primary", "secondary", "neutral", "warning", "error", "info", "success", "inherit", "current", "transparent", "black", "white", "gradient", "none"];
declare type Palette = typeof Palette[number];
declare type Colors = `${AllStopColors}-${PaletteStop}` | `${NoStopColors}`;

declare type ArbitraryValue = `[${string}]`;
declare const BaseOrZero: readonly ["base", 0];
declare type BaseOrZero = typeof BaseOrZero[number];
declare const LR: readonly ["l", "r"];
declare type LR = typeof LR[number];
declare const XY: readonly ["x", "y"];
declare type XY = typeof XY[number];
declare const CornersTB: readonly ["tl", "tr", "bl", "br"];
declare type CornersTB = typeof CornersTB[number];
declare const SidesXY: readonly ["l", "r", "t", "b", "x", "y"];
declare type SidesXY = typeof SidesXY[number];
declare const SidesAndCornersXY: readonly ["l", "r", "t", "b", "x", "y", "tl", "tr", "bl", "br"];
declare type SidesAndCornersXY = typeof SidesAndCornersXY[number];
declare const BaseSizing: readonly ["sm", "md", "lg", "xl", "2xl"];
declare type BaseSizing = typeof BaseSizing[number];
declare const RenderedElement: readonly ["button", "span", "a", "input", "form", "table", "Link"];
declare type RenderedElement = typeof RenderedElement[number];
declare const SizingZeroToNinetySix: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96];
declare type SizingZeroToNinetySix = typeof SizingZeroToNinetySix[number];
declare const AllFractions: readonly ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "1/6", "2/5", "2/6", "3/5", "3/6", "4/5", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12"];
declare type AllFractions = typeof AllFractions[number];
declare const Shadow: readonly ["none", "sm", "base", "md", "lg", "xl", "2xl", "inner"];
declare type Shadow = typeof Shadow[number];
declare const TextSize: readonly ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];
declare type TextSize = typeof TextSize[number];
declare const LineClamp: readonly ["1", "2", "3", "4", "5", "6", "none"];
declare type LineClamp = typeof LineClamp[number];
declare const Corners: readonly ["rounded", "rounded-full", "square"];
declare type Corners = typeof Corners[number];
declare const Opacity: readonly [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];
declare type Opacity = typeof Opacity[number];

declare const BackgroundScroll: readonly ["fixed", "local", "scroll"];
declare type BackgroundScroll = typeof BackgroundScroll[number];
declare const BackgroundClip: readonly ["border", "padding", "content", "text"];
declare type BackgroundClip = typeof BackgroundClip[number];
declare const BackgroundOrigin: readonly ["border", "padding", "content"];
declare type BackgroundOrigin = typeof BackgroundOrigin[number];
declare const BackgroundPosition: readonly ["left", "right", "top", "bottom", "center", "left-top", "left-bottom", "right-top", "right-bottom"];
declare type BackgroundPosition = typeof BackgroundPosition[number];
declare const BackgroundRepeat: readonly ["repeat", "no-repeat", "repeat-x", "repeat-y", "repeat-round", "repeat-space"];
declare type BackgroundRepeat = typeof BackgroundRepeat[number];
declare const BackgroundSize: readonly ["auto", "cover", "contain"];
declare type BackgroundSize = typeof BackgroundSize[number];
declare const BackgroundImage: readonly ["none"];
declare type BackgroundImage = typeof BackgroundImage[number];
declare const GradientDirection: readonly ["l", "r", "t", "b", "tl", "tr", "bl", "br"];
declare type GradientDirection = typeof GradientDirection[number];
interface BgProps {
    bgScroll?: UseModifiers<BackgroundScroll>;
    bgClip?: UseModifiers<BackgroundClip>;
    bgPalette?: UseModifiers<Palette | 'gradient'>;
    bgPaletteStop?: UseModifiers<PaletteStop>;
    bgOrigin?: UseModifiers<BackgroundOrigin>;
    bgPosition?: UseModifiers<BackgroundPosition | ArbitraryValue>;
    bgRepeat?: UseModifiers<BackgroundRepeat>;
    bgSize?: UseModifiers<BackgroundSize | ArbitraryValue>;
    bgImage?: UseModifiers<BackgroundImage | string>;
    gradientDirection?: UseModifiers<GradientDirection>;
    gradientPaletteStop?: UseModifiers<PaletteStop>;
    gradientFrom?: UseModifiers<Palette | 'gradient'>;
    gradientTo?: UseModifiers<Palette | 'gradient'>;
    gradientVia?: UseModifiers<Palette | 'gradient'>;
    themeInverse?: UseModifiers<boolean>;
    inversePaletteStop?: UseModifiers<PaletteStop>;
}

declare const BorderPalette: string[];
declare type BorderPalette = Palette | `${SidesXY}-${Palette}`;
declare const BaseBorderRadius: readonly ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];
declare type BaseBorderRadius = typeof BaseBorderRadius[number];
declare const BorderRadius: string[];
declare type BorderRadius = 'base' | BaseBorderRadius | SidesAndCornersXY | `${SidesAndCornersXY}-${BaseBorderRadius}`;
declare const BorderStyle: readonly ["none", "solid", "dashed", "dotted", "double", "hidden"];
declare type BorderStyle = typeof BorderStyle[number];
declare const BaseBorderWidth: readonly [0, 2, 4, 8];
declare type BaseBorderWidth = typeof BaseBorderWidth[number];
declare const BorderWidth: readonly ["base", ...string[], "l", "r", "t", "b", "x", "y"];
declare type BorderWidth = 'base' | BaseBorderWidth | SidesXY | `${SidesXY}-${BaseBorderWidth}`;
declare const DivideWidth: readonly ["x", "y", ...string[]];
declare type DivideWidth = XY | `${XY}-${BaseBorderWidth}` | `${XY}-reverse`;
declare const OutlineStyle: readonly ["base", "none", "solid", "dashed", "dotted", "double", "hidden"];
declare type OutlineStyle = typeof OutlineStyle[number];
declare const RingWidth: readonly ["base", 0, 2, 4, 8, "inset"];
declare type RingWidth = typeof RingWidth[number];
interface BorderProps {
    borderPalette?: UseModifiers<BorderPalette | 'gradient'>;
    borderPaletteStop?: UseModifiers<PaletteStop>;
    borderRadius?: UseModifiers<BorderRadius | BorderRadius[] | ArbitraryValue>;
    borderStyle?: UseModifiers<BorderStyle>;
    borderWidth?: UseModifiers<BorderWidth | ArbitraryValue>;
    dividePalette?: UseModifiers<Palette | 'gradient'>;
    dividePaletteStop?: UseModifiers<PaletteStop>;
    divideStyle?: UseModifiers<BorderStyle>;
    divideWidth?: UseModifiers<DivideWidth | ArbitraryValue>;
    outlineOffset?: UseModifiers<BaseBorderWidth | ArbitraryValue>;
    outlinePalette?: UseModifiers<Palette | 'gradient'>;
    outlinePaletteStop?: UseModifiers<PaletteStop>;
    outlineStyle?: UseModifiers<OutlineStyle>;
    outlineWidth?: UseModifiers<BaseBorderWidth | ArbitraryValue>;
    ringOffsetPalette?: UseModifiers<Palette | 'gradient'>;
    ringOffsetPaletteStop?: UseModifiers<PaletteStop>;
    ringOffsetWidth?: UseModifiers<BaseBorderWidth | ArbitraryValue>;
    ringPalette?: UseModifiers<Palette | 'gradient'>;
    ringPaletteStop?: UseModifiers<PaletteStop>;
    ringWidth?: UseModifiers<RingWidth | ArbitraryValue>;
}

declare const BackgroundBlend: readonly ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
declare type BackgroundBlend = typeof BackgroundBlend[number];
declare const MixBlend: readonly ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
declare type MixBlend = typeof MixBlend[number];
interface EffectProps {
    boxShadow?: UseModifiers<Shadow | ArbitraryValue>;
    boxShadowPalette?: UseModifiers<Palette | 'gradient'>;
    boxShadowPaletteStop?: UseModifiers<PaletteStop>;
    opacity?: UseModifiers<Opacity | ArbitraryValue>;
    mixBlend?: UseModifiers<MixBlend>;
    bgBlend?: UseModifiers<BackgroundBlend>;
}

declare const Blur: readonly ["none", "base", "sm", "md", "lg", "xl", "2xl", "3xl"];
declare type Blur = typeof Blur[number];
declare const Brightness: readonly [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200];
declare type Brightness = typeof Brightness[number];
declare const Contrast: readonly [0, 50, 75, 100, 125, 150, 200];
declare type Contrast = typeof Contrast[number];
declare const DropShadow: readonly ["none", "base", "sm", "md", "lg", "xl", "2xl"];
declare type DropShadow = typeof DropShadow[number];
declare const HueRotate: readonly [0, 15, 30, 60, 90, 180];
declare type HueRotate = typeof HueRotate[number];
declare const Saturate: readonly [0, 50, 100, 150, 200];
declare type Saturate = typeof Saturate[number];
declare const BackdropBlur: readonly ["none", "base", "sm", "md", "lg", "xl", "2xl", "3xl"];
declare type BackdropBlur = typeof BackdropBlur[number];
interface FilterProps {
    blur?: UseModifiers<Blur | ArbitraryValue>;
    brightness?: UseModifiers<Brightness | ArbitraryValue>;
    contrast?: UseModifiers<Contrast | ArbitraryValue>;
    dropShadow?: UseModifiers<DropShadow | ArbitraryValue>;
    grayscale?: UseModifiers<BaseOrZero | ArbitraryValue>;
    hueRotate?: UseModifiers<HueRotate | ArbitraryValue>;
    invert?: UseModifiers<BaseOrZero | ArbitraryValue>;
    saturate?: UseModifiers<Saturate | ArbitraryValue>;
    sepia?: UseModifiers<BaseOrZero | ArbitraryValue>;
    backdropBlur?: UseModifiers<BackdropBlur | ArbitraryValue>;
    backdropBrightness?: UseModifiers<Brightness | ArbitraryValue>;
    backdropContrast?: UseModifiers<Contrast | ArbitraryValue>;
    backdropGrayscale?: UseModifiers<BaseOrZero | ArbitraryValue>;
    backdropHueRotate?: UseModifiers<HueRotate | ArbitraryValue>;
    backdropInvert?: UseModifiers<BaseOrZero | ArbitraryValue>;
    backdropOpacity?: UseModifiers<Opacity | ArbitraryValue>;
    backdropSaturate?: UseModifiers<Saturate | ArbitraryValue>;
    backdropSepia?: UseModifiers<BaseOrZero | ArbitraryValue>;
}

declare const FlexBasis: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "1/6", "2/5", "2/6", "3/5", "3/6", "4/5", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12", "full", "px", "auto"];
declare type FlexBasis = SizingZeroToNinetySix | AllFractions | 'full' | 'px' | 'auto';
declare const FlexDirection: readonly ["row", "col", "row-reverse", "col-reverse"];
declare type FlexDirection = typeof FlexDirection[number];
declare const FlexWrap: readonly ["wrap", "nowrap", "wrap-reverse"];
declare type FlexWrap = typeof FlexWrap[number];
declare const Flex: readonly ["1", "auto", "initial", "none"];
declare type Flex = typeof Flex[number];
declare const Order: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "first", "last", "none"];
declare type Order = typeof Order[number];
declare const GridCols: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "none"];
declare type GridCols = typeof GridCols[number];
declare const GridColStart: readonly ["auto", "span-full", "start-auto", "start-13", "end-auto", "end-13", "span-1", "span-2", "span-3", "span-4", "span-5", "span-6", "start-1", "start-2", "start-3", "start-4", "start-5", "start-6", "end-1", "end-2", "end-3", "end-4", "end-5", "end-6", "span-7", "span-8", "span-9", "span-10", "span-11", "span-12", "start-7", "start-8", "start-9", "start-10", "start-11", "start-12", "end-7", "end-8", "end-9", "end-10", "end-11", "end-12"];
declare type GridColStart = typeof GridColStart[number];
declare const GridRows: readonly [1, 2, 3, 4, 5, 6, "none"];
declare type GridRows = typeof GridRows[number];
declare const GridRowStart: readonly ["auto", "span-full", "start-auto", "start-7", "end-auto", "end-7", "span-1", "span-2", "span-3", "span-4", "span-5", "span-6", "start-1", "start-2", "start-3", "start-4", "start-5", "start-6", "end-1", "end-2", "end-3", "end-4", "end-5", "end-6"];
declare type GridRowStart = typeof GridRowStart[number];
declare const GridAutoFlow: readonly ["row", "col", "dense", "row-dense", "col-dense"];
declare type GridAutoFlow = typeof GridAutoFlow[number];
declare const GridAutoRowCol: readonly ["auto", "min", "max", "fr"];
declare type GridAutoRowCol = typeof GridAutoRowCol[number];
declare const Gap: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "x-0", "x-1", "x-2", "x-3", "x-4", "x-5", "x-6", "x-7", "x-8", "x-9", "x-10", "x-11", "x-12", "x-0.5", "x-1.5", "x-2.5", "x-3.5", "x-14", "x-16", "x-20", "x-24", "x-28", "x-32", "x-36", "x-40", "x-44", "x-48", "x-52", "x-56", "x-60", "x-64", "x-72", "x-80", "x-96", "y-0", "y-1", "y-2", "y-3", "y-4", "y-5", "y-6", "y-7", "y-8", "y-9", "y-10", "y-11", "y-12", "y-0.5", "y-1.5", "y-2.5", "y-3.5", "y-14", "y-16", "y-20", "y-24", "y-28", "y-32", "y-36", "y-40", "y-44", "y-48", "y-52", "y-56", "y-60", "y-64", "y-72", "y-80", "y-96", "px", "x-px", "y-px"];
declare type Gap = typeof Gap[number];
declare const PlaceItems: readonly ["start", "end", "center", "stretch"];
declare type PlaceItems = typeof PlaceItems[number];
declare const PlaceContent: readonly ["start", "end", "center", "stretch", "between", "around", "evenly"];
declare type PlaceContent = typeof PlaceContent[number];
declare const JustifyAlignContent: readonly ["start", "end", "center", "between", "around", "evenly"];
declare type JustifyAlignContent = typeof JustifyAlignContent[number];
declare const AlignItems: readonly ["start", "end", "center", "stretch", "baseline"];
declare type AlignItems = typeof AlignItems[number];
declare const PlaceSelf: readonly ["start", "end", "center", "stretch", "auto"];
declare type PlaceSelf = typeof PlaceSelf[number];
declare const AlignSelf: readonly ["start", "end", "center", "stretch", "auto", "baseline"];
declare type AlignSelf = typeof AlignSelf[number];
interface FlexGridProps {
    flexBasis?: UseModifiers<FlexBasis | ArbitraryValue>;
    flexDirection?: UseModifiers<FlexDirection>;
    flexWrap?: UseModifiers<FlexWrap>;
    flex?: UseModifiers<Flex | ArbitraryValue>;
    flexGrow?: UseModifiers<BaseOrZero | ArbitraryValue>;
    flexShrink?: UseModifiers<BaseOrZero | ArbitraryValue>;
    order?: UseModifiers<Order | ArbitraryValue>;
    gridCols?: UseModifiers<GridCols | ArbitraryValue>;
    gridColSize?: UseModifiers<GridColStart | GridColStart[] | ArbitraryValue>;
    gridRows?: UseModifiers<GridRows | ArbitraryValue>;
    gridRowSize?: UseModifiers<GridRowStart | GridRowStart[] | ArbitraryValue>;
    gridAutoFlow?: UseModifiers<GridAutoFlow>;
    gridAutoCols?: UseModifiers<GridAutoRowCol | ArbitraryValue>;
    gridAutoRows?: UseModifiers<GridAutoRowCol | ArbitraryValue>;
    gap?: UseModifiers<Gap | ArbitraryValue>;
    justifyContent?: UseModifiers<JustifyAlignContent>;
    justifyItems?: UseModifiers<PlaceItems>;
    justifySelf?: UseModifiers<PlaceSelf>;
    alignContent?: UseModifiers<JustifyAlignContent>;
    alignItems?: UseModifiers<AlignItems>;
    alignSelf?: UseModifiers<AlignSelf>;
    placeContent?: UseModifiers<PlaceContent>;
    placeItems?: UseModifiers<PlaceItems>;
    placeSelf?: UseModifiers<PlaceSelf>;
}

declare const AspectRatio: readonly ["auto", "square", "video"];
declare type AspectRatio = typeof AspectRatio[number];
declare const Columns: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto", "xs", "2xs", "3xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl"];
declare type Columns = typeof Columns[number];
declare const BreakType: readonly ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
declare type BreakType = typeof BreakType[number];
declare const BreakInside: readonly ["auto", "avoid", "avoid-page", "avoid-column"];
declare type BreakInside = typeof BreakInside[number];
declare const BoxDecoration: readonly ["clone", "slice"];
declare type BoxDecoration = typeof BoxDecoration[number];
declare const BoxSizing: readonly ["border", "content"];
declare type BoxSizing = typeof BoxSizing[number];
declare const Display: readonly ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"];
declare type Display = typeof Display[number];
declare const Float: readonly ["left", "right", "none"];
declare type Float = typeof Float[number];
declare const Clear: readonly ["left", "right", "both", "none"];
declare type Clear = typeof Clear[number];
declare const Isolation: readonly ["isolate", "isolation-auto"];
declare type Isolation = typeof Isolation[number];
declare const ObjectFit: readonly ["contain", "cover", "fill", "none", "scale-down"];
declare type ObjectFit = typeof ObjectFit[number];
declare const ObjectPosition: readonly ["left", "right", "top", "bottom", "center", "left-top", "left-bottom", "right-top", "right-bottom"];
declare type ObjectPosition = typeof ObjectPosition[number];
declare const Overflow: readonly ["auto", "hidden", "clip", "visible", "scroll", "x-auto", "x-hidden", "x-clip", "x-visible", "x-scroll", "y-auto", "y-hidden", "y-clip", "y-visible", "y-scroll"];
declare type Overflow = typeof Overflow[number];
declare const Overscroll: readonly ["auto", "contain", "none", "x-auto", "x-contain", "x-none", "y-auto", "y-contain", "y-none"];
declare type Overscroll = typeof Overscroll[number];
declare const Position: readonly ["static", "relative", "absolute", "fixed", "sticky"];
declare type Position = typeof Position[number];
declare const PlacementValues: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "auto", "full", "px"];
declare type PlacementValues = typeof PlacementValues[number];
declare const Inset: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "auto", "full", "px", "x-1", "x-2", "x-3", "x-4", "x-5", "x-6", "x-7", "x-8", "x-9", "x-10", "x-11", "x-12", "x-0", "x-0.5", "x-1.5", "x-2.5", "x-3.5", "x-14", "x-16", "x-20", "x-24", "x-28", "x-32", "x-36", "x-40", "x-44", "x-48", "x-52", "x-56", "x-60", "x-64", "x-72", "x-80", "x-96", "x-1/2", "x-1/3", "x-2/3", "x-1/4", "x-2/4", "x-3/4", "x-auto", "x-full", "x-px", "y-1", "y-2", "y-3", "y-4", "y-5", "y-6", "y-7", "y-8", "y-9", "y-10", "y-11", "y-12", "y-0", "y-0.5", "y-1.5", "y-2.5", "y-3.5", "y-14", "y-16", "y-20", "y-24", "y-28", "y-32", "y-36", "y-40", "y-44", "y-48", "y-52", "y-56", "y-60", "y-64", "y-72", "y-80", "y-96", "y-1/2", "y-1/3", "y-2/3", "y-1/4", "y-2/4", "y-3/4", "y-auto", "y-full", "y-px"];
declare type Inset = typeof Inset[number];
declare const Visibility: readonly ["visible", "invisible"];
declare type Visibility = typeof Visibility[number];
declare const ZIndex: readonly ["auto", "0", "10", "20", "30", "40", "50"];
declare type ZIndex = typeof ZIndex[number];
interface LayoutProps {
    aspectRatio?: UseModifiers<AspectRatio | ArbitraryValue>;
    boxDecoration?: UseModifiers<BoxDecoration>;
    boxSizing?: UseModifiers<BoxSizing>;
    breakAfter?: UseModifiers<BreakType>;
    breakBefore?: UseModifiers<BreakType>;
    breakInside?: UseModifiers<BreakInside>;
    centerSelf?: UseModifiers<boolean>;
    clear?: UseModifiers<Clear>;
    columns?: UseModifiers<Columns | ArbitraryValue>;
    container?: boolean;
    display?: UseModifiers<Display>;
    float?: UseModifiers<Float>;
    fullscreen?: UseModifiers<boolean>;
    isolation?: UseModifiers<Isolation>;
    objectFit?: UseModifiers<ObjectFit>;
    objectPosition?: UseModifiers<ObjectPosition | ArbitraryValue>;
    overflow?: UseModifiers<Overflow | Overflow[]>;
    overscroll?: UseModifiers<Overscroll>;
    position?: UseModifiers<Position>;
    top?: UseModifiers<PlacementValues | ArbitraryValue>;
    right?: UseModifiers<PlacementValues | ArbitraryValue>;
    bottom?: UseModifiers<PlacementValues | ArbitraryValue>;
    left?: UseModifiers<PlacementValues | ArbitraryValue>;
    inset?: UseModifiers<Inset | ArbitraryValue>;
    visibility?: UseModifiers<Visibility>;
    zIndex?: UseModifiers<ZIndex | ArbitraryValue>;
}

declare const Height: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "px", "full", "screen", "min", "max", "fit", "auto", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6"];
declare type Height = typeof Height[number];
declare const Width: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "px", "full", "screen", "min", "max", "fit", "auto", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12"];
declare type Width = typeof Width[number];
declare const MinWidth: readonly [0, "full", "min", "max", "fit"];
declare type MinWidth = typeof MinWidth[number];
declare const MaxWidth: readonly [0, "none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "full", "min", "max", "fit", "prose", "screen-sm", "screen-md", "screen-lg", "screen-xl", "screen-2xl"];
declare type MaxWidth = typeof MaxWidth[number];
declare const MinHeight: readonly [0, "full", "min", "max", "fit", "screen"];
declare type MinHeight = typeof MinHeight[number];
declare const MaxHeight: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "px", "full", "screen", "min", "max", "fit", "auto"];
declare type MaxHeight = typeof MaxHeight[number];
interface SizingProps {
    width?: UseModifiers<Width | ArbitraryValue>;
    minWidth?: UseModifiers<MinWidth | ArbitraryValue>;
    maxWidth?: UseModifiers<MaxWidth | ArbitraryValue>;
    height?: UseModifiers<Height | ArbitraryValue>;
    minHeight?: UseModifiers<MinHeight | ArbitraryValue>;
    maxHeight?: UseModifiers<MaxHeight | ArbitraryValue>;
}

declare const basePadding: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "px"];
declare type basePadding = typeof basePadding[number];
declare const Padding: string[];
declare type Padding = basePadding | `${SidesXY}-${basePadding}`;
declare const baseMargin: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "px", "auto"];
declare type baseMargin = typeof baseMargin[number];
declare const Margin: string[];
declare type Margin = baseMargin | `${SidesXY}-${baseMargin}`;
declare const baseSpaceBetween: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "px", "reverse"];
declare type baseSpaceBetween = typeof baseSpaceBetween[number];
declare const SpaceBetween: string[];
declare type SpaceBetween = `${SidesXY}-${baseSpaceBetween}`;
interface SpacingProps {
    padding?: UseModifiers<Padding | Padding[] | ArbitraryValue>;
    margin?: UseModifiers<Margin | Margin[] | ArbitraryValue>;
    spaceBetween?: UseModifiers<SpaceBetween | SpaceBetween[] | ArbitraryValue>;
}

declare const BorderCollapse: readonly ["collapse", "separate"];
declare type BorderCollapse = typeof BorderCollapse[number];
declare const BorderSpacing: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "px", "x-px", "y-px", "x-1", "x-2", "x-3", "x-4", "x-5", "x-6", "x-7", "x-8", "x-9", "x-10", "x-11", "x-12", "x-0", "x-0.5", "x-1.5", "x-2.5", "x-3.5", "x-14", "x-16", "x-20", "x-24", "x-28", "x-32", "x-36", "x-40", "x-44", "x-48", "x-52", "x-56", "x-60", "x-64", "x-72", "x-80", "x-96", "y-1", "y-2", "y-3", "y-4", "y-5", "y-6", "y-7", "y-8", "y-9", "y-10", "y-11", "y-12", "y-0", "y-0.5", "y-1.5", "y-2.5", "y-3.5", "y-14", "y-16", "y-20", "y-24", "y-28", "y-32", "y-36", "y-40", "y-44", "y-48", "y-52", "y-56", "y-60", "y-64", "y-72", "y-80", "y-96"];
declare type BorderSpacing = typeof BorderSpacing[number];
declare const TableLayout: readonly ["auto", "fixed"];
declare type TableLayout = typeof TableLayout[number];
interface TableProps$1 {
    borderCollapse?: UseModifiers<BorderCollapse>;
    borderSpacing?: UseModifiers<BorderSpacing | BorderSpacing[] | ArbitraryValue>;
    tableLayout?: UseModifiers<TableLayout>;
}

declare const Scale: readonly [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, "x-0", "x-50", "x-75", "x-90", "x-95", "x-100", "x-105", "x-110", "x-125", "x-150", "y-0", "y-50", "y-75", "y-90", "y-95", "y-100", "y-105", "y-110", "y-125", "y-150"];
declare type Scale = typeof Scale[number];
declare const Rotate: readonly [0, 1, 2, 3, 6, 12, 45, 90, 180];
declare type Rotate = typeof Rotate[number];
declare const Translate: readonly ["x-1", "x-2", "x-3", "x-4", "x-5", "x-6", "x-7", "x-8", "x-9", "x-10", "x-11", "x-12", "x-0", "x-0.5", "x-1.5", "x-2.5", "x-3.5", "x-14", "x-16", "x-20", "x-24", "x-28", "x-32", "x-36", "x-40", "x-44", "x-48", "x-52", "x-56", "x-60", "x-64", "x-72", "x-80", "x-96", "y-1", "y-2", "y-3", "y-4", "y-5", "y-6", "y-7", "y-8", "y-9", "y-10", "y-11", "y-12", "y-0", "y-0.5", "y-1.5", "y-2.5", "y-3.5", "y-14", "y-16", "y-20", "y-24", "y-28", "y-32", "y-36", "y-40", "y-44", "y-48", "y-52", "y-56", "y-60", "y-64", "y-72", "y-80", "y-96", "x-1/2", "x-1/3", "x-2/3", "x-1/4", "x-2/4", "x-3/4", "y-1/2", "y-1/3", "y-2/3", "y-1/4", "y-2/4", "y-3/4", "x-full", "y-full"];
declare type Translate = typeof Translate[number];
declare const Skew: readonly ["x-0", "y-0", "x-1", "x-2", "x-3", "x-6", "x-12", "y-1", "y-2", "y-3", "y-6", "y-12"];
declare type Skew = typeof Skew[number];
declare const Transform: readonly ["none", "gpu"];
declare type Transform = typeof Transform[number];
declare const TransformOrigin: readonly ["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"];
declare type TransformOrigin = typeof TransformOrigin[number];
interface TransformProps {
    scale?: UseModifiers<Scale | Scale[] | ArbitraryValue>;
    rotate?: UseModifiers<Rotate | ArbitraryValue>;
    translateElement?: UseModifiers<Translate | Translate[] | ArbitraryValue>;
    skew?: UseModifiers<Skew | Skew[] | ArbitraryValue>;
    transform?: UseModifiers<Transform | ArbitraryValue>;
    transformOrigin?: UseModifiers<TransformOrigin | ArbitraryValue>;
}

declare const TransitionProperty: readonly ["none", "all", "base", "colors", "opacity", "shadow", "transform"];
declare type TransitionProperty = typeof TransitionProperty[number];
declare const TransitionTime: readonly [75, 100, 150, 200, 300, 500, 700, 1000];
declare type TransitionTime = typeof TransitionTime[number];
declare const TransitionEase: readonly ["linear", "in", "out", "in-out"];
declare type TransitionEase = typeof TransitionEase[number];
declare const Animation: readonly ["none", "spin", "ping", "pulse", "bounce"];
declare type Animation = typeof Animation[number];
interface TransitionProps {
    transitionProperty?: UseModifiers<TransitionProperty | ArbitraryValue>;
    transitionDuration?: UseModifiers<TransitionTime | ArbitraryValue>;
    transitionEase?: UseModifiers<TransitionEase | ArbitraryValue>;
    transitionDelay?: UseModifiers<TransitionTime | ArbitraryValue>;
    animation?: UseModifiers<Animation | ArbitraryValue>;
}

declare const TextPalette: readonly ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "primary", "secondary", "neutral", "warning", "error", "info", "success", "inherit", "current", "transparent", "black", "white", "gradient", "none", "gradient"];
declare type TextPalette = typeof TextPalette[number];
declare const FontSmoothing: readonly ["antialiased", "subpixel-antialiased"];
declare type FontSmoothing = typeof FontSmoothing[number];
declare const FontStyle: readonly ["italic", "normal", "oblique"];
declare type FontStyle = typeof FontStyle[number];
declare const FontWeight: readonly ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"];
declare type FontWeight = typeof FontWeight[number];
declare const FontVariantNumeric: readonly ["normal-nums", "ordinal", "slashed-zero", "lining-nums", "oldstyle-nums", "proportional-nums", "tabular-nums", "diagonal-fractions", "stacked-fractions"];
declare type FontVariantNumeric = typeof FontVariantNumeric[number];
declare const LetterSpacing: readonly ["tighter", "tight", "normal", "wide", "wider", "widest"];
declare type LetterSpacing = typeof LetterSpacing[number];
declare const LineHeight: readonly ["3", "4", "5", "6", "7", "8", "9", "10", "none", "tight", "snug", "normal", "relaxed", "loose"];
declare type LineHeight = typeof LineHeight[number];
declare const ListStyleType: readonly ["none", "disc", "decimal"];
declare type ListStyleType = typeof ListStyleType[number];
declare const ListStylePosition: readonly ["inside", "outside"];
declare type ListStylePosition = typeof ListStylePosition[number];
declare const TextAlign: readonly ["left", "right", "center", "justify", "start", "end"];
declare type TextAlign = typeof TextAlign[number];
declare const TextDecoration: readonly ["underline", "overline", "line-through", "no-underline"];
declare type TextDecoration = typeof TextDecoration[number];
declare const TextDecorationStyle: readonly ["solid", "double", "dotted", "dashed", "wavy"];
declare type TextDecorationStyle = typeof TextDecorationStyle[number];
declare const TextDecorationThickness: readonly ["auto", "from-font", 1, 2, 3, 4, 8];
declare type TextDecorationThickness = typeof TextDecorationThickness[number];
declare const TextUnderlineOffset: readonly ["auto", 1, 2, 3, 4, 8];
declare type TextUnderlineOffset = typeof TextUnderlineOffset[number];
declare const TextTransform: readonly ["uppercase", "lowercase", "capitalize", "normal-case"];
declare type TextTransform = typeof TextTransform[number];
declare const TextOverflow: readonly ["truncate", "text-clip", "text-ellipsis"];
declare type TextOverflow = typeof TextOverflow[number];
declare const TextIndent: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 0.5, 1.5, 2.5, 3.5, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "px"];
declare type TextIndent = typeof TextIndent[number];
declare const VerticalAlign: readonly ["baseline", "top", "bottom", "middle", "text-top", "text-bottom", "sub", "super"];
declare type VerticalAlign = typeof VerticalAlign[number];
declare const WhiteSpace: readonly ["normal", "nowrap", "pre", "pre-line", "pre-wrap"];
declare type WhiteSpace = typeof WhiteSpace[number];
declare const WordBreak: readonly ["normal", "words", "all"];
declare type WordBreak = typeof WordBreak[number];
declare const Content: readonly ["none"];
declare type Content = typeof Content[number];
declare const TextShadowDirection: readonly ["l", "r", "t", "b", "tl", "tr", "bl", "br", "outline"];
declare type TextShadowDirection = typeof TextShadowDirection[number];
declare const TextShadowBlur: readonly ["none", "sm", "md", "lg", "xl", "2xl"];
declare type TextShadowBlur = typeof TextShadowBlur[number];
interface TypographyProps {
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
    textDecorationThickness?: UseModifiers<TextDecorationThickness | ArbitraryValue>;
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

declare const Appearance: readonly ["none"];
declare type Appearance = typeof Appearance[number];
declare const Cursor: readonly ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"];
declare type Cursor = typeof Cursor[number];
declare const PointerEvents: readonly ["none", "auto"];
declare type PointerEvents = typeof PointerEvents[number];
declare const Resize: readonly ["none", "x", "y", "base"];
declare type Resize = typeof Resize[number];
declare const ScrollBehavior: readonly ["auto", "smooth"];
declare type ScrollBehavior = typeof ScrollBehavior[number];
declare const ScrollSnapAlign: readonly ["start", "end", "center", "none"];
declare type ScrollSnapAlign = typeof ScrollSnapAlign[number];
declare const ScrollSnapStop: readonly ["normal", "always"];
declare type ScrollSnapStop = typeof ScrollSnapStop[number];
declare const ScrollSnapType: readonly ["none", "x", "y", "both", "mandatory", "proximity"];
declare type ScrollSnapType = typeof ScrollSnapType[number];
declare const TouchAction: readonly ["auto", "none", "pan-x", "pan-y", "pan-left", "pan-right", "pan-up", "pan-down", "pinch-zoom", "manipulation"];
declare type TouchAction = typeof TouchAction[number];
declare const UserSelect: readonly ["none", "text", "all", "auto"];
declare type UserSelect = typeof UserSelect[number];
declare const WillChange: readonly ["auto", "scroll", "contents", "transform"];
declare type WillChange = typeof WillChange[number];
interface InteractivityProps {
    accentPalette?: UseModifiers<Palette | 'gradient'>;
    accentPaletteStop?: UseModifiers<PaletteStop>;
    appearance?: UseModifiers<Appearance>;
    cursor?: UseModifiers<Cursor | ArbitraryValue>;
    caretPalette?: UseModifiers<Palette | 'gradient'>;
    caretPaletteStop?: UseModifiers<PaletteStop>;
    pointerEvents?: UseModifiers<PointerEvents>;
    resize?: UseModifiers<Resize>;
    scrollBehavior?: UseModifiers<ScrollBehavior>;
    scrollMargin?: UseModifiers<Margin | Margin[] | ArbitraryValue>;
    scrollPadding?: UseModifiers<Padding | Padding[] | ArbitraryValue>;
    scrollSnapAlign?: UseModifiers<ScrollSnapAlign>;
    scrollSnapStop?: UseModifiers<ScrollSnapStop>;
    scrollSnapType?: UseModifiers<ScrollSnapType>;
    touchAction?: UseModifiers<TouchAction>;
    userSelect?: UseModifiers<UserSelect>;
    willChange?: UseModifiers<WillChange | ArbitraryValue>;
}

declare const StrokeWidth: readonly [0, 1, 2];
declare type StrokeWidth = typeof StrokeWidth[number];
interface SVGProps {
    fillPalette?: UseModifiers<Palette | 'gradient'>;
    fillPaletteStop?: UseModifiers<PaletteStop>;
    strokePalette?: UseModifiers<Palette | 'gradient'>;
    strokePaletteStop?: UseModifiers<PaletteStop>;
    strokeWidth?: UseModifiers<StrokeWidth | ArbitraryValue>;
}

declare const ScreenReaders: readonly ["sr-only", "not-sr-only"];
declare type ScreenReaders = typeof ScreenReaders[number];
interface AccessibilityProps {
    screenReaders?: UseModifiers<ScreenReaders>;
}

interface DevProps extends LayoutProps, FlexGridProps, SpacingProps, SizingProps, TypographyProps, BgProps, BorderProps, EffectProps, FilterProps, TableProps$1, TransitionProps, InteractivityProps, SVGProps, AccessibilityProps, TransformProps, Omit<ComponentPropsWithoutRef<'span'>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'> {
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

declare const Dev: FC<DevProps>;

interface AlertProps extends DevProps {
    variant?: 'success' | 'error' | 'warning';
    title?: string;
    message?: string;
    isVisible?: boolean;
    onDismiss?: (value: boolean) => void;
    onCancel?: () => void;
    onContinue?: () => void;
    showButtons?: boolean;
    hideX?: boolean;
    corner?: 'rounded' | 'square';
}
declare const Alert: FC<AlertProps>;

declare const iconSize: {
    xs: number;
    sm: number;
    base: number;
    lg: number;
    xl: number;
    '2xl': number;
    DisplayCompact: number;
    DisplayFull: number;
};
interface AvatarProps extends DevProps {
    size?: 'xs' | Exclude<BaseSizing, 'md'> | 'base' | 'DisplayCompact' | 'DisplayFull';
    overrideMode?: 'none' | 'placeholder' | 'initials' | 'image';
    corner?: Corners;
    indicatorStatus?: boolean;
    indicatorStatusPalette?: Palette;
    indicatorStatusPosition?: CornersTB;
    indicatorStatusPing?: boolean;
    initialsText?: string;
    placeholderIcon?: string;
    iconPaletteStop?: DevProps['textPaletteStop'];
}

declare const Avatar: FC<AvatarProps>;

declare type IconName = keyof typeof HIconsOutline | keyof typeof HIconsSolid;
declare const IconGradientDirectionValues: {
    t: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
    };
    tr: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
    };
    r: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
    };
    br: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
    };
    b: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
    };
    bl: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
    };
    l: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
    };
    tl: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
    };
};
interface IconProps extends HTMLAttributes<SVGSVGElement> {
    children?: ReactNode;
    classes?: string;
    svg?: IconName | string;
    defaultPalette?: UseModifiers<Palette>;
    defaultPaletteStop?: UseModifiers<PaletteStop>;
    fillPalette?: Palette;
    fillPaletteStop?: PaletteStop;
    strokePalette?: Palette;
    strokePaletteStop?: PaletteStop;
    strokeWidth?: StrokeWidth;
    gradientDirection?: GradientDirection;
    gradientFrom?: Colors;
    gradientVia?: Colors;
    gradientTo?: Colors;
    width?: Width | ArbitraryValue;
    height?: Height | ArbitraryValue;
    rounded?: BorderRadius;
    shadow?: Shadow;
    opacity?: Opacity;
    blend?: MixBlend;
    aspectRatio?: AspectRatio;
    centerSelf?: boolean;
    margin?: Margin | Margin[];
    cursor?: UseModifiers<Cursor | ArbitraryValue>;
    iconType?: 'solid' | 'outline';
    flex?: Flex;
}

interface TextProps extends Omit<DevProps, 'aspectRatio' | 'container' | 'fullscreen' | 'grid' | 'maxHeight' | 'maxWidth' | 'minHeight' | 'minWidth' | 'overflow' | 'theme'> {
    text?: string;
    ignoreMarkup?: boolean;
}
declare const TextShadowObj: {
    none: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
};
declare const GradientDirectionValues: {
    t: number;
    tr: number;
    r: number;
    br: number;
    b: number;
    bl: number;
    l: number;
    tl: number;
};
declare const ShadowOpacity: {
    0: number;
    5: number;
    10: number;
    20: number;
    25: number;
    30: number;
    40: number;
    50: number;
    60: number;
    70: number;
    75: number;
    80: number;
    90: number;
    95: number;
    100: number;
};

declare const spacing: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
    '8xl': string;
    '9xl': string;
};
declare const selectedTextColor: (paletteStop: PaletteStop | UseModifiers<PaletteStop | any>, stops: Record<string, string>) => Record<string, string>;
interface LabelProps extends TextProps {
    label?: string;
    leadingIconType?: IconProps['iconType'];
    leadingIcon?: string | IconProps['svg'];
    trailingIconType?: IconProps['iconType'];
    trailingIcon?: string | IconProps['svg'];
    size?: TextSize;
    iconSize?: TextSize;
    isDisabled?: boolean;
    loadAnimation?: boolean;
    showProgress?: boolean;
    progress?: number;
    visualProgressRadial?: boolean;
    frontRadialPalette?: TextProps['bgPalette'];
    frontRadialPaletteStop?: TextProps['bgPaletteStop'];
    backRadialPalette?: Palette;
    backRadialPaletteStop?: PaletteStop;
    backRadialPaletteStopInverse?: PaletteStop;
    selected?: boolean;
    textClasses?: TextProps;
    leadingIconPalette?: TextProps['textPalette'];
    leadingIconPaletteStop?: TextProps['textPaletteStop'];
    trailingIconPalette?: TextProps['textPalette'];
    trailingIconPaletteStop?: TextProps['textPaletteStop'];
    tip?: string;
    required?: boolean;
}

declare const titleTextSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    DisplayCompact: string;
    DisplayFull: string;
};
declare const subtitleTextSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    DisplayCompact: string;
    DisplayFull: string;
};
interface AvatarDisplayProps extends AvatarProps {
    avatarOnly?: boolean;
    avatarCorner?: Corners;
    titleText?: string;
    subtitleText?: string;
    titleTextShadowDirection?: LabelProps['textShadowDirection'];
    titleTextShadowBlur?: LabelProps['textShadowBlur'];
    titleTextShadowThickness?: LabelProps['textShadowThickness'];
    titleTextShadowPalette?: LabelProps['textShadowPalette'];
    titleTextShadowPaletteStop?: LabelProps['textShadowPaletteStop'];
    titleTextShadowOpacity?: LabelProps['textShadowOpacity'];
    subtitleTextShadowDirection?: LabelProps['textShadowDirection'];
    subtitleTextShadowBlur?: LabelProps['textShadowBlur'];
    subtitleTextShadowThickness?: LabelProps['textShadowThickness'];
    subtitleTextShadowPalette?: LabelProps['textShadowPalette'];
    subtitleTextShadowPaletteStop?: LabelProps['textShadowPaletteStop'];
    subtitleTextShadowOpacity?: LabelProps['textShadowOpacity'];
    avatarTextPalette?: LabelProps['textPalette'];
    avatarTextPaletteStop?: LabelProps['textPaletteStop'];
    titleTextPalette?: LabelProps['textPalette'];
    titleTextPaletteStop?: LabelProps['textPaletteStop'];
    subtitleTextPalette?: LabelProps['textPalette'];
    subtitleTextPaletteStop?: LabelProps['textPaletteStop'];
}

declare const AvatarDisplay: FC<AvatarDisplayProps>;

declare const Background: FC<DevProps>;

declare const Icon: FC<IconProps>;

interface BadgeProps extends DevProps {
    size?: 'basic' | 'large';
    indicatorStatus?: boolean;
    indicatorStatusPing?: boolean;
    corner?: Corners;
    label?: string;
    leadingIcon?: string;
    leadingIconType?: IconProps['iconType'];
    trailingIcon?: string;
    trailingIconType?: IconProps['iconType'];
}
declare const badgeSize: {
    basic: string[];
    large: string[];
};
declare const indicatorMarginSize: {
    basic: string[];
    large: string[];
};
declare const badgeCorners: {
    rounded: string;
    square: string;
    'rounded-full': string;
};
declare const Badge: FC<BadgeProps>;

interface LinkProps extends LabelProps {
    selectable?: boolean;
    selected?: boolean;
    isDisabled?: boolean;
    leadingIcon?: string;
    trailingIcon?: string;
    target?: '_self' | '_blank' | '_parent' | '_top' | 'test';
    corner?: Corners;
    linkSize?: TextSize;
    text?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    textShadowDirection?: TextProps['textShadowDirection'];
    textShadowBlur?: TextProps['textShadowBlur'];
    textShadowThickness?: TextProps['textShadowThickness'];
    textShadowPalette?: TextProps['textShadowPalette'];
    textShadowPaletteStop?: TextProps['textShadowPaletteStop'];
    textShadowOpacity?: TextProps['textShadowOpacity'];
}
declare const corners: {
    rounded: string;
    square: string;
    'rounded-full': string;
};
declare const Link: FC<LinkProps>;

interface BreadcrumbProps extends LinkProps {
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
declare const Breadcrumb: FC<BreadcrumbProps>;

declare const buttonSize: {
    'icon-only': number;
    xs: string[];
    sm: string[];
    base: string[];
    lg: string[];
    xl: string[];
    '2xl': string[];
};
declare const iconButtonSize: {
    xs: number;
    sm: number;
    base: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
    '4xl': number;
    '5xl': number;
    '6xl': number;
    '7xl': number;
    '8xl': number;
    '9xl': number;
};
interface ButtonProps extends DevProps {
    focusRing?: boolean;
    isDisabled?: boolean;
    btnHoverPalette?: Palette;
    btnHoverPaletteStop?: PaletteStop;
    btnPalette?: Palette;
    btnPaletteStop?: PaletteStop;
    leadingIcon?: string;
    leadingIconType?: LabelProps['leadingIconType'];
    trailingIcon?: string;
    trailingIconType?: LabelProps['trailingIconType'];
    label?: string;
    selected?: boolean;
    btnSize?: 'xs' | Exclude<BaseSizing, 'md'> | 'base' | 'icon-only';
    iconSize?: 'xs' | Exclude<BaseSizing, 'md'> | 'base';
    iconOnly?: boolean;
    indicatorStatus?: boolean;
    indicatorStatusPalette?: Palette;
    indicatorStatusPosition?: CornersTB;
    indicatorStatusPing?: boolean;
    indicatorStatusSize?: 'xs' | Exclude<BaseSizing, 'md'> | 'base';
    corner?: Corners;
    strokePalette?: LabelProps['strokePalette'];
    strokePaletteStop?: LabelProps['strokePaletteStop'];
}

declare const Button: FC<ButtonProps>;

interface LayersProps extends DevProps {
    layers?: DevProps[];
}
declare const Layers: FC<LayersProps>;

interface ThumbnailProps extends LayersProps {
    bgOpacity?: DevProps['opacity'];
    textureImageURL?: DevProps['bgImage'];
    textureSize?: DevProps['bgSize'];
    textureRepeat?: DevProps['bgRepeat'];
    textureMixBlend?: DevProps['mixBlend'];
    textureBgPosition?: DevProps['bgPosition'];
    textureOpacity?: DevProps['opacity'];
    imageURL?: DevProps['bgImage'];
    imageSize?: DevProps['bgSize'];
    imageRepeat?: DevProps['bgRepeat'];
    imagePosition?: DevProps['bgPosition'];
    imageHeight?: DevProps['height'];
    imageWidth?: DevProps['width'];
    imageInset?: DevProps['inset'];
    imageOpacity?: DevProps['opacity'];
    imageMargin?: DevProps['margin'];
    imageMixBlend?: DevProps['mixBlend'];
    additionalLayer?: DevProps;
    cardType?: 'callout' | 'itemCard' | 'listView';
    corner?: Corners;
}
declare const Thumbnail: FC<ThumbnailProps>;

interface ItemCardProps extends DevProps {
    thumbnailProps?: ThumbnailProps;
    overlineText?: string;
    overlineLeadingIcon?: IconProps['svg'];
    overlineTrailingIcon?: IconProps['svg'];
    titleText?: string;
    titleLeadingIcon?: IconProps['svg'];
    titleTrailingIcon?: IconProps['svg'];
    thumbnailDivPosition?: DevProps['position'];
    thumbnailDivHeight?: DevProps['height'];
    thumbnailDivWidth?: DevProps['width'];
    overlineFontSize?: DevProps['fontSize'];
    overlineFontWeight?: DevProps['fontWeight'];
    overlineTextPalette?: DevProps['textPalette'];
    overlineTextPaletteStop?: DevProps['textPaletteStop'];
    overlineTextAlign?: DevProps['textAlign'];
    overlineLineClamp?: DevProps['lineClamp'];
    overlineLetterSpacing?: DevProps['letterSpacing'];
    overlineTextShadowDirection?: DevProps['textShadowDirection'];
    overlineTextShadowPalette?: DevProps['textShadowPalette'];
    overlineTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
    overlineTextShadowBlur?: DevProps['textShadowBlur'];
    overlineTextShadowThickness?: DevProps['textShadowThickness'];
    overlineTextShadowOpacity?: DevProps['textShadowOpacity'];
    overlineWordBreak?: DevProps['wordBreak'];
    titleFontSize?: DevProps['fontSize'];
    titleFontWeight?: DevProps['fontWeight'];
    titleTextPalette?: DevProps['textPalette'];
    titleTextPaletteStop?: DevProps['textPaletteStop'];
    titleTextAlign?: DevProps['textAlign'];
    titleLetterSpacing?: DevProps['letterSpacing'];
    titleLineHeight?: DevProps['lineHeight'];
    titleLineClamp?: DevProps['lineClamp'];
    titleTextShadowDirection?: DevProps['textShadowDirection'];
    titleTextShadowPalette?: DevProps['textShadowPalette'];
    titleTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
    titleTextShadowBlur?: DevProps['textShadowBlur'];
    titleTextShadowThickness?: DevProps['textShadowThickness'];
    titleTextShadowOpacity?: DevProps['textShadowOpacity'];
    titleWordBreak?: DevProps['wordBreak'];
    descriptionText?: string;
    descriptionTextAlign?: DevProps['textAlign'];
    descriptionLeadingIcon?: IconProps['svg'];
    descriptionTrailingIcon?: IconProps['svg'];
    descriptionFontSize?: DevProps['fontSize'];
    descriptionFontWeight?: DevProps['fontWeight'];
    descriptionTextPalette?: DevProps['textPalette'];
    descriptionTextPaletteStop?: DevProps['textPaletteStop'];
    descriptionLetterSpacing?: DevProps['letterSpacing'];
    descriptionLineHeight?: DevProps['lineHeight'];
    descriptionTextShadowDirection?: DevProps['textShadowDirection'];
    descriptionTextShadowPalette?: DevProps['textShadowPalette'];
    descriptionTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
    descriptionTextShadowBlur?: DevProps['textShadowBlur'];
    descriptionTextShadowThickness?: DevProps['textShadowThickness'];
    descriptionTextShadowOpacity?: DevProps['textShadowOpacity'];
    descriptionLineClamp?: DevProps['lineClamp'];
    descriptionWordBreak?: DevProps['wordBreak'];
    buttonIcons?: {
        icon: string;
        selected: boolean;
        onClick?: ButtonProps['onClick'];
        bgPalette?: ButtonProps['bgPalette'];
        bgPaletteStop?: ButtonProps['bgPaletteStop'];
        props?: ButtonProps;
    }[];
    badgeSize?: 'basic' | 'large';
    badgeCorner?: Corners;
    badges?: {
        label: string;
        bgPalette: BadgeProps['bgPalette'];
        props?: BadgeProps;
    }[];
    contextValuesTextPalette?: LabelProps['textPalette'];
    contextValuesTextPaletteStop?: LabelProps['textPaletteStop'];
    contextValues?: {
        label: LabelProps['label'];
        leadingIcon: LabelProps['leadingIcon'];
        progress?: LabelProps['progress'];
        visualProgressRadial?: LabelProps['visualProgressRadial'];
        contextValueProps?: LabelProps;
    }[];
    bgCardPalette?: DevProps['bgPalette'];
    bgCardPaletteStop?: DevProps['bgPaletteStop'];
    isDisabled?: boolean;
    corner?: Corners;
    hasAttachment?: boolean;
    attachmentIconPalette?: IconProps['fillPalette'];
    attachmentIconPaletteStop?: IconProps['fillPaletteStop'];
    attachmentIconBgPalette?: DevProps['bgPalette'];
    attachmentIconBgPaletteStop?: DevProps['bgPaletteStop'];
    attachmentIconLocation?: LR;
    attachmentIconPaletteOverride?: IconProps['fillPalette'];
    attachmentIconPaletteStopOverride?: IconProps['fillPaletteStop'];
    attachmentIconBgPaletteOverride?: DevProps['bgPalette'];
    attachmentIconBgPaletteStopOverride?: DevProps['bgPaletteStop'];
    attachmentIconLocationOverride?: LR;
    hideOverlineText?: boolean;
    hideDescriptionText?: boolean;
    cardBorderWidth?: DevProps['borderWidth'];
    cardBorderPalette?: DevProps['borderPalette'];
    cardBorderPaletteStop?: DevProps['borderPaletteStop'];
    titleContainerClasses?: string;
    iconSize?: LabelProps['size'];
    listAggregate?: boolean;
    listAggregateState?: string;
    listAggregateLocation?: string;
    listAggregateIconPalette?: DevProps['bgPalette'];
    listAggregateIconPaletteStop?: DevProps['bgPaletteStop'];
    listAggregateIconHeight?: IconProps['height'];
    listAggregateIconWidth?: IconProps['width'];
}

interface CollectionGridProps extends DevProps {
    overlineFontSize?: DevProps['fontSize'];
    overlineFontWeight?: DevProps['fontWeight'];
    overlineTextAlign?: DevProps['textAlign'];
    overlineLetterSpacing?: DevProps['letterSpacing'];
    titleWordBreak?: DevProps['wordBreak'];
    overlineWordBreak?: DevProps['wordBreak'];
    descriptionWordBreak?: DevProps['wordBreak'];
    items?: {
        itemID?: string;
        onClick?: ButtonProps['onClick'];
        isDisabled?: boolean;
        themeInverse?: DevProps['themeInverse'];
        overlineTextShadowDirection?: DevProps['textShadowDirection'];
        overlineTextShadowPalette?: DevProps['textShadowPalette'];
        overlineTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
        overlineTextShadowBlur?: DevProps['textShadowBlur'];
        overlineTextShadowThickness?: DevProps['textShadowThickness'];
        overlineTextShadowOpacity?: DevProps['textShadowOpacity'];
        titleTextShadowDirection?: DevProps['textShadowDirection'];
        titleTextShadowPalette?: DevProps['textShadowPalette'];
        titleTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
        titleTextShadowBlur?: DevProps['textShadowBlur'];
        titleTextShadowThickness?: DevProps['textShadowThickness'];
        titleTextShadowOpacity?: DevProps['textShadowOpacity'];
        descriptionTextShadowDirection?: DevProps['textShadowDirection'];
        descriptionTextShadowPalette?: DevProps['textShadowPalette'];
        descriptionTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
        descriptionTextShadowBlur?: DevProps['textShadowBlur'];
        descriptionTextShadowThickness?: DevProps['textShadowThickness'];
        descriptionTextShadowOpacity?: DevProps['textShadowOpacity'];
        cardBorderWidth?: DevProps['borderWidth'];
        cardBorderPalette?: DevProps['borderPalette'];
        cardBorderPaletteStop?: DevProps['borderPaletteStop'];
        boxShadow?: DevProps['boxShadow'];
        thumbnailProps?: ThumbnailProps;
        bgPalette?: DevProps['bgPalette'];
        bgCardPalette?: ItemCardProps['bgCardPalette'];
        bgCardPaletteStop?: ItemCardProps['bgCardPaletteStop'];
        bgCardOverridePalette?: ItemCardProps['bgCardPalette'];
        bgCardOverridePaletteStop?: ItemCardProps['bgCardPaletteStop'];
        bgImage?: DevProps['bgImage'];
        bgPosition?: DevProps['bgPosition'];
        bgRepeat?: DevProps['bgRepeat'];
        bgSize?: DevProps['bgSize'];
        overlineText?: string;
        overlineTextPalette?: DevProps['textPalette'];
        overlineTextPaletteStop?: DevProps['textPaletteStop'];
        overlineLeadingIcon?: IconProps['svg'];
        overlineTrailingIcon?: IconProps['svg'];
        titleText?: string;
        titleLeadingIcon?: IconProps['svg'];
        titleTrailingIcon?: IconProps['svg'];
        iconSize?: ItemCardProps['iconSize'];
        titleTextPalette?: DevProps['textPalette'];
        titleTextPaletteStop?: DevProps['textPaletteStop'];
        descriptionText?: string;
        descriptionTextPalette?: DevProps['textPalette'];
        descriptionTextPaletteStop?: DevProps['textPaletteStop'];
        descriptionLeadingIcon?: IconProps['svg'];
        descriptionTrailingIcon?: IconProps['svg'];
        hideOverlineText?: boolean;
        hideDescriptionText?: boolean;
        titleWordBreak?: DevProps['wordBreak'];
        overlineWordBreak?: DevProps['wordBreak'];
        descriptionWordBreak?: DevProps['wordBreak'];
        buttonIcons?: [
            {
                icon: string;
                selected: boolean;
                onClick?: ButtonProps['onClick'];
                bgPalette?: ButtonProps['bgPalette'];
                bgPaletteStop?: ButtonProps['bgPaletteStop'];
                props?: ButtonProps;
            }
        ];
        badges?: {
            label: string;
            bgPalette: BadgeProps['bgPalette'];
            props?: BadgeProps;
        }[];
        contextValuesTextPalette?: LabelProps['textPalette'];
        contextValuesTextPaletteStop?: LabelProps['textPaletteStop'];
        contextValues?: {
            label: LabelProps['label'];
            leadingIcon: LabelProps['leadingIcon'];
            progress?: LabelProps['progress'];
            visualProgressRadial?: LabelProps['visualProgressRadial'];
            contextValueProps?: LabelProps;
        }[];
        hasAttachment?: ItemCardProps['hasAttachment'];
        attachmentIconPaletteOverride?: ItemCardProps['attachmentIconPalette'];
        attachmentIconPaletteStopOverride?: ItemCardProps['attachmentIconPaletteStop'];
        attachmentIconBgPaletteOverride?: ItemCardProps['attachmentIconBgPalette'];
        attachmentIconBgPaletteStopOverride?: ItemCardProps['attachmentIconBgPaletteStop'];
        attachmentIconLocationOverride?: LR;
        props?: ItemCardProps;
        listAggregate?: boolean;
        listAggregateState?: string;
        listAggregateLocation?: string;
        listAggregateIconHeight?: IconProps['height'];
        listAggregateIconWidth?: IconProps['width'];
        listAggregateIconPalette?: DevProps['bgPalette'];
        listAggregateIconPaletteStop?: DevProps['bgPaletteStop'];
    }[];
    titleFontSize?: DevProps['fontSize'];
    titleFontWeight?: DevProps['fontWeight'];
    titleTextAlign?: DevProps['textAlign'];
    titleLetterSpacing?: DevProps['letterSpacing'];
    titleLineHeight?: DevProps['lineHeight'];
    titleLineClamp?: LabelProps['lineClamp'];
    descriptionLineClamp?: LabelProps['lineClamp'];
    overlineLineClamp?: LabelProps['lineClamp'];
    itemDisplay?: 'ItemCard' | 'ItemCardCallout' | 'ItemList';
    thumbnailDivWidth?: DevProps['width'];
    thumbnailDivHeight?: DevProps['height'];
    cardWidth?: DevProps['width'];
    cardHeight?: DevProps['height'];
    badgeSize?: 'basic' | 'large';
    badgeCorner?: Corners;
    cardCorner?: Corners;
    attachmentIconPalette?: ItemCardProps['attachmentIconPalette'];
    attachmentIconPaletteStop?: ItemCardProps['attachmentIconPaletteStop'];
    attachmentIconBgPalette?: ItemCardProps['attachmentIconBgPalette'];
    attachmentIconBgPaletteStop?: ItemCardProps['attachmentIconBgPaletteStop'];
    attachmentIconLocation?: LR;
    listAggregate?: boolean;
    hideDescriptionText?: boolean;
    hideOverlineText?: boolean;
    cardBorderWidth?: ItemCardProps['cardBorderWidth'];
    cardBorderPalette?: ItemCardProps['cardBorderPalette'];
    cardBorderPaletteStop?: ItemCardProps['cardBorderPaletteStop'];
}

declare const CollectionGrid: FC<CollectionGridProps>;

interface CollectionGridScrollingProps extends CollectionGridProps {
    showArrows?: boolean;
    arrowGridGap?: Gap;
    arrowContainerWidth?: Width;
    hideScrollbar?: boolean;
    arrows?: {
        arrowPalette?: Palette;
        arrowPaletteStop?: DevProps['bgPaletteStop'];
        arrowHoverPalette?: Palette;
        arrowHoverDuration?: DevProps['transitionDuration'];
        arrowSize?: LabelProps['size'];
        arrowFontWeight?: DevProps['fontWeight'];
        leftText?: string;
        leftArrowIcon?: string;
        leftArrowContainerCorner?: DevProps['borderRadius'];
        rightText?: string;
        rightArrowIcon?: string;
        rightArrowContainerCorner?: DevProps['borderRadius'];
        arrowTextAlign?: DevProps['textAlign'];
        arrowAlignItems?: DevProps['alignItems'];
        arrowLineHeight?: DevProps['lineHeight'];
        arrowLetterSpacing?: DevProps['letterSpacing'];
        ignoreMarkup?: boolean;
    };
    addClasses?: string;
    titleContainerClasses?: string;
}

declare const CollectionGridScrolling: FC<CollectionGridScrollingProps>;

interface VisualizationProgressStatusRadialProps extends DevProps {
    size?: TextSize;
    completionIcon?: string;
    frontRadialPalette?: DevProps['textPalette'];
    frontRadialPaletteStop?: DevProps['textPaletteStop'];
    backRadialPalette?: Palette;
    backRadialPaletteStop?: PaletteStop;
    loadAnimation?: boolean;
    isDisabled?: boolean;
    disabledIcon?: string;
    progress?: number;
    circumference?: number;
    radialSize?: number;
    visualSize?: number;
    innerRadius?: number;
    innerRadiusOffset?: number;
    center?: number;
    radius?: number;
    strokeWidth?: StrokeWidth;
}
declare const VisualizationProgressStatusRadial: FC<VisualizationProgressStatusRadialProps>;

declare const roundedCorners: {
    rounded: string;
    square: string;
};
interface ItemStepProps extends ItemCardProps {
    visualProgressRadial?: boolean;
    size?: VisualizationProgressStatusRadialProps['size'];
    isLink?: boolean;
    showChevron?: boolean;
    loadAnimation?: boolean;
    progress?: number;
    disabledIcon?: string;
    completionIcon?: string;
    frontRadialPalette?: VisualizationProgressStatusRadialProps['frontRadialPalette'];
    frontRadialPaletteStop?: VisualizationProgressStatusRadialProps['frontRadialPaletteStop'];
    backRadialPalette?: VisualizationProgressStatusRadialProps['backRadialPalette'];
    backRadialPaletteStop?: VisualizationProgressStatusRadialProps['backRadialPaletteStop'];
    backRadialInversePaletteStop?: VisualizationProgressStatusRadialProps['backRadialPaletteStop'];
    corner?: 'rounded' | 'square';
}

declare const cornerValues: {
    rounded: string;
    square: string;
};
interface CollectionItemStepsProps extends DevProps {
    CollectionItemSteps?: {
        titleText?: ItemStepProps['titleText'];
        overlineText?: ItemStepProps['overlineText'];
        isDisabled?: ItemStepProps['isDisabled'];
        isLink?: ItemStepProps['isLink'];
        disabledIcon?: ItemStepProps['disabledIcon'];
        progress?: ItemStepProps['progress'];
        completionIcon?: ItemStepProps['completionIcon'];
    }[];
    visualProgressRadial?: boolean;
    loadAnimation?: boolean;
    corner?: 'rounded' | 'square';
    size?: ItemStepProps['size'];
    overlineLineClamp?: ItemStepProps['overlineLineClamp'];
    frontRadialPalette?: ItemStepProps['frontRadialPalette'];
    frontRadialPaletteStop?: ItemStepProps['frontRadialPaletteStop'];
    backRadialPalette?: ItemStepProps['backRadialPalette'];
    backRadialPaletteStop?: ItemStepProps['backRadialPaletteStop'];
    backRadialPaletteStopInverse?: ItemStepProps['backRadialInversePaletteStop'];
}

declare const CollectionItemSteps: FC<CollectionItemStepsProps>;

declare const Container: FC<DevProps>;

declare enum DividerPosition {
    top = "start",
    bottom = "end",
    center = "center"
}
interface DividerProps extends DevProps {
    label?: string;
    textProps?: TextProps;
    textOpacity?: DevProps['opacity'];
    dividerOpacity?: DevProps['opacity'];
    dividerPalette?: DevProps['bgPalette'];
    dividerPaletteStop?: DevProps['bgPaletteStop'];
    dividerPosition?: 'top' | 'center' | 'bottom';
    leadingIcon?: string;
    trailingIcon?: string;
    containerHeight?: DevProps['height'];
    containerWidth?: DevProps['width'];
    containerOpacity?: DevProps['opacity'];
    containerClasses?: DevProps;
    size?: TextSize;
    dividerHeight?: DevProps['height'];
}

declare const Divider: FC<DividerProps>;

interface FormProps extends DevProps, Pick<HTMLProps<HTMLFormElement>, 'action' | 'autoComplete' | 'encType' | 'method' | 'name' | 'noValidate' | 'rel' | 'target'> {
}
declare const Form: FC<FormProps>;

interface GroupItemBadgesProps extends DevProps {
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
declare const GroupItemBadges: FC<GroupItemBadgesProps>;

interface GroupItemContextValuesProps extends DevProps {
    contextValues?: {
        label: LabelProps['label'];
        leadingIcon: LabelProps['leadingIcon'];
        progress?: LabelProps['progress'];
        visualProgressRadial?: LabelProps['visualProgressRadial'];
        contextValueProps?: LabelProps;
    }[];
    frontRadialPalette?: DevProps['bgPalette'];
    frontRadialPaletteStop?: DevProps['bgPaletteStop'];
    backRadialPalette?: Palette;
    backRadialPaletteStop?: PaletteStop;
    backRadialPaletteStopInverse?: PaletteStop;
    separatorIcon?: string;
    size?: TextSize;
}
declare const GroupItemContextValues: FC<GroupItemContextValuesProps>;

interface HeaderScreenProps extends DevProps {
    overlineText?: string;
    titleText?: string;
    titleLeadingIcon?: string;
    titleTrailingIcon?: string;
    titleLineClamp?: DevProps['lineClamp'];
    accentEffect?: boolean;
    divider?: boolean;
    breadcrumbIcon?: BreadcrumbProps['breadcrumbIcon'];
    seperatorIcon?: BreadcrumbProps['seperatorIcon'];
    breadcrumbSize?: TextSize;
    breadcrumbs?: BreadcrumbProps['breadcrumbs'];
    backButtonClick?: LinkProps['onClick'];
    onClick?: LinkProps['onClick'];
    breadcrumbProps?: BreadcrumbProps;
    badgeSize?: GroupItemBadgesProps['badgeSize'];
    badgeCorner?: GroupItemBadgesProps['badgeCorner'];
    badges?: GroupItemBadgesProps['badges'];
    contextValues?: GroupItemContextValuesProps['contextValues'];
    buttonIcons?: ItemCardProps['buttonIcons'];
    breadcrumbTextShadowDirection?: DevProps['textShadowDirection'];
    breadcrumbTextShadowBlur?: DevProps['textShadowBlur'];
    breadcrumbTextShadowThickness?: DevProps['textShadowThickness'];
    breadcrumbTextShadowPalette?: DevProps['textShadowPalette'];
    breadcrumbTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
    breadcrumbTextShadowOpacity?: DevProps['textShadowOpacity'];
    overlineTextShadowDirection?: DevProps['textShadowDirection'];
    overlineTextShadowBlur?: DevProps['textShadowBlur'];
    overlineTextShadowThickness?: DevProps['textShadowThickness'];
    overlineTextShadowPalette?: DevProps['textShadowPalette'];
    overlineTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
    overlineTextShadowOpacity?: DevProps['textShadowOpacity'];
    titleTextShadowDirection?: DevProps['textShadowDirection'];
    titleTextShadowBlur?: DevProps['textShadowBlur'];
    titleTextShadowThickness?: DevProps['textShadowThickness'];
    titleTextShadowPalette?: DevProps['textShadowPalette'];
    titleTextShadowPaletteStop?: DevProps['textShadowPaletteStop'];
    titleTextShadowOpacity?: DevProps['textShadowOpacity'];
    frontRadialPalette?: GroupItemContextValuesProps['frontRadialPalette'];
    frontRadialPaletteStop?: GroupItemContextValuesProps['frontRadialPaletteStop'];
    backRadialPalette?: GroupItemContextValuesProps['backRadialPalette'];
    backRadialPaletteStop?: GroupItemContextValuesProps['backRadialPaletteStop'];
    backRadialPaletteStopInverse?: GroupItemContextValuesProps['backRadialPaletteStopInverse'];
    thumbnailProps?: ThumbnailProps;
    overallPalette?: DevProps['bgPalette'];
    overallPaletteStop?: DevProps['bgPaletteStop'];
    imageLogoURL?: DevProps['bgImage'];
    imageLogoHeight?: DevProps['height'];
    imageLogoFit?: DevProps['bgSize'];
    backgroundColorProps?: {
        gradientVia?: DevProps['gradientVia'];
        gradientTo?: DevProps['gradientTo'];
        opacity?: DevProps['opacity'];
        mixBlend?: DevProps['mixBlend'];
        position?: DevProps['position'];
        borderRadius?: DevProps['borderRadius'];
    };
}

declare const HeaderScreen: FC<HeaderScreenProps>;

interface IndicatorStatusProps extends DevProps {
    ping?: boolean;
    size?: 'xs' | Exclude<BaseSizing, 'md'> | 'base';
}
declare const indicatorSize: {
    xs: number;
    sm: number;
    base: number;
    lg: number;
    xl: number;
    '2xl': number;
};
declare const indicatorPingColor: (paletteStop: PaletteStop | UseModifiers<PaletteStop | any>, stops: Record<string, number>) => Record<string, number>;
declare const IndicatorStatus: FC<IndicatorStatusProps>;

interface InputProps extends Omit<DevProps, 'type' | 'onChange'>, Pick<HTMLProps<HTMLInputElement>, 'name' | 'autoComplete' | 'required' | 'checked' | 'value' | 'type' | 'onChange'> {
    disabled?: boolean;
    leadingIcon?: string;
    trailingIcon?: string;
    iconPalette?: DevProps['textPalette'];
    iconPaletteStop?: DevProps['textPaletteStop'];
}
declare const Input: FC<InputProps>;

declare const ItemCard: FC<ItemCardProps>;

declare const ItemCardCallout: FC<ItemCardProps>;

declare const ItemList: FC<ItemCardProps>;

declare const ItemStep: FC<ItemStepProps>;

declare const Label: FC<LabelProps>;

interface ModalProps extends DevProps {
    closeButton?: boolean;
    closeButtonLocation?: LR;
    modalWidth?: DevProps['maxWidth'];
    modalHeight?: DevProps['height'];
    modalCorners?: 'rounded' | 'square';
    isOpen?: boolean;
    setIsOpen?: (value: boolean) => void;
    backgroundClickClose?: boolean;
}
declare const Modal: FC<ModalProps>;

interface PaginationProps extends DevProps {
    onGoToPageClick: (pageIndex: number) => void;
    onPreviousClick: () => void;
    onNextClick: () => void;
    pageLength: number;
    dataLength: number;
    canPreviousPage: boolean;
    pageIndex: number;
    totalPages: number;
    canNextPage: boolean;
    pageCount: number;
    pageSize: number;
    changePageSize: (pageSize: number) => void;
    palette?: Palette;
    tableBackground?: boolean;
    jumpToPage?: boolean;
}

declare const Pagination: FC<PaginationProps>;

interface PopoverProps extends DevProps {
    closeButton?: boolean;
    closeButtonLocation?: LR;
    isOpen?: boolean;
    setIsOpen?: (value: boolean) => void;
    backgroundClickClose?: boolean;
    headerPalette?: DevProps['bgPalette'];
    headerPaletteStop?: DevProps['bgPaletteStop'];
    titlePalette?: DevProps['textPalette'];
    titlePaletteStop?: DevProps['textPaletteStop'];
    descriptionPalette?: DevProps['textPalette'];
    descriptionPaletteStop?: DevProps['textPaletteStop'];
    title?: string;
    description?: string;
    showButtonFooter?: boolean;
    onCancel?: () => void;
    onSave?: () => void;
}
declare const Popover: FC<PopoverProps>;

declare const RadialSpinner: FC<VisualizationProgressStatusRadialProps>;

interface SectionProps extends CollectionGridScrollingProps {
    sectionCorner?: 'rounded' | 'square';
    dividerShow?: boolean;
    titleTextShadowDirection?: LabelProps['textShadowDirection'];
    titleTextShadowBlur?: LabelProps['textShadowBlur'];
    titleTextShadowThickness?: LabelProps['textShadowThickness'];
    titleTextShadowPalette?: LabelProps['textShadowPalette'];
    titleTextShadowPaletteStop?: LabelProps['textShadowPaletteStop'];
    titleTextShadowOpacity?: LabelProps['textShadowOpacity'];
    sectionDescriptionTextShadowDirection?: LabelProps['textShadowDirection'];
    sectionDescriptionTextShadowBlur?: LabelProps['textShadowBlur'];
    sectionDescriptionTextShadowThickness?: LabelProps['textShadowThickness'];
    sectionDescriptionTextShadowPalette?: LabelProps['textShadowPalette'];
    sectionDescriptionTextShadowPaletteStop?: LabelProps['textShadowPaletteStop'];
    sectionDescriptionTextShadowOpacity?: LabelProps['textShadowOpacity'];
    viewAllTextShadowDirection?: LabelProps['textShadowDirection'];
    viewAllTextShadowBlur?: LabelProps['textShadowBlur'];
    viewAllTextShadowThickness?: LabelProps['textShadowThickness'];
    viewAllTextShadowPalette?: LabelProps['textShadowPalette'];
    viewAllTextShadowPaletteStop?: LabelProps['textShadowPaletteStop'];
    viewAllTextShadowOpacity?: LabelProps['textShadowOpacity'];
    viewAllText?: string;
    viewAllLeadingIcon?: string;
    viewAllTrailingIcon?: string;
    viewAllLimit?: number;
    viewAll?: boolean;
    viewAllCount?: boolean;
    onSectionViewAll?: (e?: any) => void;
    sectionDescriptionPaletteStop?: DevProps['textPaletteStop'];
    dividerPaletteStop?: DevProps['bgPaletteStop'];
    itemCollectionDisplay?: 'CollectionGrid' | 'CollectionGridScrolling';
    sectionDescriptionProps?: LabelProps;
    sectionDescriptionText?: string;
    sectionDescriptionLeadingIcon?: string;
    sectionDescriptionTrailingIcon?: string;
    sectionDescriptionLineClamp?: DevProps['lineClamp'];
    leadingIcon?: string;
    trailingIcon?: string;
    sectionTitleSize?: LabelProps['size'];
    isDisabled?: boolean;
    overallPalette?: DevProps['bgPalette'];
    backgroundProps?: ThumbnailProps;
    sectionTitle?: string;
    titleContainerClasses?: string;
}

declare const Section: FC<SectionProps>;

interface TableProps extends Pick<HTMLProps<HTMLTableElement>, 'ref'>, DevProps {
    insightsType?: string;
    tableHeaders: ColumnDef<any, any>[];
    tableData: any[];
    excelExport?: boolean;
    displayPagination?: boolean;
    jumpToPage?: boolean;
    pageLength?: 10 | 20 | 30 | 40 | 50;
    globalSearch?: boolean;
    tableOnClick?: (arg: {
        queryParam: string | number;
    }) => void;
    topSectionProps?: DevProps;
    exportButtonProps?: ButtonProps;
    tablePalette?: DevProps['bgPalette'];
    tableBackground?: boolean;
    tableColumnTextPalette?: DevProps['textPalette'];
    tableColumnTextPaletteStop?: DevProps['textPaletteStop'];
    tableSubColumnTextPalette?: DevProps['textPalette'];
    tableSubColumnTextPaletteStop?: DevProps['textPaletteStop'];
    tableDataTextPalette?: DevProps['textPalette'];
    tableDataTextPaletteStop?: DevProps['textPaletteStop'];
    resultsLabelTextPalette?: LabelProps['textPalette'];
    paginationPalette?: Palette;
    searchPalette?: Palette;
    stripedRows?: boolean;
    collapsible?: boolean;
    tableOptions?: any;
    getRowCanExpand?: (row: Row<unknown>) => boolean;
    filterOptions?: JSX.Element;
    tableCellWhiteSpace?: DevProps['whitespace'];
}

declare const Table: FC<TableProps>;

interface TabsProps extends LinkProps {
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
declare const Tabs: FC<TabsProps>;

declare const Text: FC<TextProps>;

interface ToggleProps extends DevProps {
    labelPalette?: DevProps['textPalette'];
    labelPaletteStop?: DevProps['textPaletteStop'];
    label?: string;
    labelPosition?: 't' | 'l';
    tip?: string;
    required?: boolean;
    isToggled?: boolean;
    setIsToggled?: (value: boolean) => void;
    togglePalette?: DevProps['bgPalette'];
    togglePaletteStop?: DevProps['bgPaletteStop'];
    tipLocation?: 'l' | 'r' | 't';
}
declare const Toggle: FC<ToggleProps>;

export { Alert, AlertProps, Avatar, AvatarDisplay, AvatarDisplayProps, AvatarProps, Background, Badge, BadgeProps, Breadcrumb, BreadcrumbProps, Button, ButtonProps, CollectionGrid, CollectionGridProps, CollectionGridScrolling, CollectionGridScrollingProps, CollectionItemSteps, CollectionItemStepsProps, Container, Dev, DevProps, Divider, DividerPosition, DividerProps, Form, FormProps, GradientDirectionValues, GroupItemBadges, GroupItemBadgesProps, GroupItemContextValues, GroupItemContextValuesProps, HeaderScreen, HeaderScreenProps, Icon, IconGradientDirectionValues, IconProps, IndicatorStatus, IndicatorStatusProps, Input, InputProps, ItemCard, ItemCardCallout, ItemCardProps, ItemList, ItemStep, ItemStepProps, Label, LabelProps, Layers, LayersProps, Link, LinkProps, Modal, ModalProps, Pagination, Popover, PopoverProps, RadialSpinner, Section, SectionProps, ShadowOpacity, Table, Tabs, TabsProps, Text, TextProps, TextShadowObj, Thumbnail, ThumbnailProps, Toggle, ToggleProps, VisualizationProgressStatusRadial, VisualizationProgressStatusRadialProps, badgeCorners, badgeSize, buttonSize, cornerValues, corners, iconButtonSize, iconSize, indicatorMarginSize, indicatorPingColor, indicatorSize, roundedCorners, selectedTextColor, spacing, subtitleTextSize, titleTextSize };
