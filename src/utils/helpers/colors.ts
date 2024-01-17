/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AllNoStopColors,
  ColorType,
  Palette,
  PaletteStop,
  UseModifiers
} from '../types';
import { BaseValue } from './baseValue';
import { Modifiers } from './modifiers';

export const GradientSVG = (
  palette: Palette | 'gradient' | 'none',
  paletteStop: PaletteStop,
  gradientId: string
) => {
  return palette === 'gradient'
    ? `url(#${gradientId})`
    : `var(--${ColorGen(palette as Palette, paletteStop, 'color')})`;
};

export const CreateColor = (
  palette: Palette | UseModifiers<Palette | any>,
  paletteStop: PaletteStop | UseModifiers<PaletteStop | any>,
  colorType?: ColorType
) => {
  const newColorType = !colorType ? '' : `${colorType}-`;
  return AllNoStopColors.includes(palette)
    ? `${newColorType}${palette}`
    : `${newColorType}${palette}-${paletteStop}`;
};

export const ColorGen = (
  palette: Palette | UseModifiers<Palette | any>,
  paletteStop: PaletteStop | UseModifiers<PaletteStop | any>,
  colorType: ColorType,
  obj?: Record<string, unknown>
) => {
  if (palette === undefined && paletteStop === undefined) {
    return;
  }
  if (paletteStop === undefined) {
    paletteStop = 500;
  }
  setBaseDefaults(palette, paletteStop);

  if (typeof palette !== 'object' && typeof paletteStop !== 'object') {
    return CreateColor(palette, paletteStop, colorType);
  }

  const colors: Record<string, string> = {};
  calculateOneObj(palette, paletteStop, colors);
  calculateBothObjects(palette, paletteStop, colors);

  return Modifiers(colors, colorType, obj);
};

const setBaseDefaults = (
  palette: Palette | UseModifiers<Palette | any>,
  paletteStop: PaletteStop | UseModifiers<PaletteStop | any>
) => {
  if (typeof palette === 'object' && !palette.base) {
    if (Array.isArray(palette) && typeof paletteStop !== 'object') {
    } else {
      palette.base = 'primary';
    }
  }
  if (typeof paletteStop === 'object' && !paletteStop.base) {
    paletteStop.base = 500;
  }
};

const calculateOneObj = (
  palette: Palette | UseModifiers<Palette | any>,
  paletteStop: PaletteStop | UseModifiers<PaletteStop | any>,
  colors: Record<string, any>,
  themeInverse?: Record<string, boolean>,
  inversePaletteStop?: PaletteStop | UseModifiers<PaletteStop | any>
) => {
  if (typeof themeInverse === 'object') {
    if (typeof palette === 'object' && typeof paletteStop !== 'object') {
      Object.keys(palette).forEach((key) => {
        const stopToUse = themeInverse[key] ? inversePaletteStop : paletteStop;
        const colorBase = BaseValue(palette[key], '');
        colors[key] = CreateColor(colorBase, stopToUse);
      });
    }

    if (typeof palette !== 'object' && typeof paletteStop === 'object') {
      Object.keys(paletteStop).forEach((key) => {
        const stopBase = BaseValue(paletteStop[key], '');
        colors[key] = CreateColor(palette, stopBase);
      });
    }

    if (typeof palette !== 'object' && typeof paletteStop !== 'object') {
      Object.keys(themeInverse).forEach((inverse) => {
        const stopToUse = themeInverse[inverse]
          ? inversePaletteStop
          : paletteStop;
        colors[inverse] = CreateColor(palette, stopToUse);
      });
    }
  } else if (themeInverse && typeof inversePaletteStop === 'object') {
    if (typeof palette === 'object' && typeof paletteStop !== 'object') {
      Object.keys(palette).forEach((key) => {
        const colorBase = BaseValue(inversePaletteStop[key], palette[key]);
        Object.keys(inversePaletteStop).includes(key)
          ? (colors[key] = colorBase)
          : (colors[key] = CreateColor(colorBase, inversePaletteStop.base));
      });
    }

    if (typeof palette !== 'object' && typeof paletteStop === 'object') {
      Object.keys(inversePaletteStop).forEach((key) => {
        const stopBase = BaseValue(inversePaletteStop[key], '');
        colors[key] = CreateColor(palette, stopBase);
      });
    }

    if (typeof palette !== 'object' && typeof paletteStop !== 'object') {
      Object.keys(inversePaletteStop).forEach((inverse) => {
        colors[inverse] = CreateColor(palette, inversePaletteStop[inverse]);
      });
    }
  } else {
    if (typeof palette === 'object' && typeof paletteStop !== 'object') {
      if (Array.isArray(palette)) {
        colors.base = [];
        Object.keys(palette).forEach((key: any) => {
          const stopToUse = themeInverse ? inversePaletteStop : paletteStop;
          const colorBase = BaseValue(palette[key], '');
          colors.base.push(CreateColor(colorBase, stopToUse));
        });
      } else {
        Object.keys(palette).forEach((key) => {
          if (Array.isArray(palette[key])) {
            colors[key] = [];
            const stopToUse = themeInverse ? inversePaletteStop : paletteStop;
            palette[key].forEach((item: any) => {
              const colorBase = BaseValue(item, '');
              colors[key].push(CreateColor(colorBase, stopToUse));
            });
          } else {
            const stopToUse = themeInverse ? inversePaletteStop : paletteStop;
            const colorBase = BaseValue(palette[key], '');
            colors[key] = CreateColor(colorBase, stopToUse);
          }
        });
      }
    }

    if (typeof palette !== 'object' && typeof paletteStop === 'object') {
      Object.keys(paletteStop).forEach((key) => {
        const stopBase = BaseValue(paletteStop[key], '');
        colors[key] = CreateColor(palette, stopBase);
      });
    }
  }
};

const calculateBothObjects = (
  palette: Palette | UseModifiers<Palette | any>,
  paletteStop: PaletteStop | UseModifiers<PaletteStop | any>,
  colors: Record<string, any>,
  themeInverse?: Record<string, boolean>,
  inversePaletteStop?: PaletteStop | UseModifiers<PaletteStop | any>
) => {
  if (
    typeof themeInverse === 'object' &&
    typeof inversePaletteStop === 'object'
  ) {
    if (typeof palette === 'object') {
      Object.keys(palette).forEach((key) => {
        const colorBase = BaseValue(palette[key], '');
        Object.keys(inversePaletteStop).includes(key)
          ? (colors[key] = colorBase)
          : (colors[key] = CreateColor(colorBase, inversePaletteStop.base));
      });
      Object.keys(inversePaletteStop).forEach((key) => {
        const stopBase = BaseValue(inversePaletteStop[key], '');

        Object.keys(palette).includes(key)
          ? (colors[key] = CreateColor(colors[key], stopBase))
          : (colors[key] = CreateColor(palette.base, stopBase));
      });
    }
  } else if (typeof palette === 'object' && typeof paletteStop === 'object') {
    if (Array.isArray(palette)) {
      const newColorObj: any = {};
      palette.forEach((item: any) => {
        Object.keys(paletteStop).forEach((key) => {
          newColorObj[key] = newColorObj[key] ? newColorObj[key] : [];
          const stopBase = BaseValue(paletteStop[key], '');
          newColorObj[key].push(`${item}-${stopBase}`);
        });
      });
      Object.keys(newColorObj).forEach((key) => {
        colors[key] = newColorObj[key];
      });
    } else {
      const newColorObj: any = {};
      Object.keys(palette).forEach((modifier) => {
        if (Array.isArray(palette[modifier])) {
          palette[modifier].forEach((item: any) => {
            Object.keys(paletteStop).forEach((key) => {
              newColorObj[key] = newColorObj[key] ? newColorObj[key] : [];
              const stopBase = BaseValue(paletteStop[modifier], '');
              if (!newColorObj[modifier].includes(`${item}-${stopBase}`)) {
                newColorObj[modifier].push(CreateColor(item, stopBase));
              }
            });
          });
          Object.keys(newColorObj).forEach((key) => {
            colors[key] = newColorObj[key];
          });
        } else {
          Object.keys(palette).forEach((key) => {
            const colorBase = BaseValue(palette[key], '');
            Object.keys(paletteStop).includes(key)
              ? (colors[key] = colorBase)
              : (colors[key] = CreateColor(colorBase, paletteStop.base));
          });
          Object.keys(paletteStop).forEach((key) => {
            const stopBase = BaseValue(paletteStop[key], '');

            Object.keys(palette).includes(key)
              ? (colors[key] = CreateColor(colors[key], stopBase))
              : (colors[key] = CreateColor(palette.base, stopBase));
          });
        }
      });
    }
  }
};

const calculateBothObjectsInverse = (
  palette: Palette | UseModifiers<Palette | any>,
  paletteStop: PaletteStop | UseModifiers<PaletteStop | any>,
  colors: Record<string, string>,
  themeInverse: Record<string, boolean>,
  inversePaletteStop: PaletteStop | UseModifiers<PaletteStop | any>
) => {
  if (
    typeof themeInverse === 'object' &&
    typeof inversePaletteStop === 'object'
  ) {
    if (typeof palette === 'object') {
      Object.keys(palette).forEach((key) => {
        const colorBase = BaseValue(palette[key], '');
        Object.keys(inversePaletteStop).includes(key)
          ? (colors[key] = colorBase)
          : (colors[key] = CreateColor(colorBase, inversePaletteStop.base));
      });
      Object.keys(inversePaletteStop).forEach((key) => {
        const stopBase = BaseValue(inversePaletteStop[key], '');

        Object.keys(palette).includes(key)
          ? (colors[key] = CreateColor(colors[key], stopBase))
          : (colors[key] = CreateColor(palette.base, stopBase));
      });
    }
  }
};

export const ColorGenInverse = (
  palette: Palette | UseModifiers<Palette | any>,
  paletteStop: PaletteStop | UseModifiers<PaletteStop | any>,
  colorType: ColorType,
  themeInverse: boolean | UseModifiers<boolean | any>,
  inversePaletteStop: PaletteStop | UseModifiers<PaletteStop | any>
) => {
  if (palette === undefined && paletteStop === undefined) {
    return;
  }

  if (
    typeof themeInverse === 'object' &&
    typeof inversePaletteStop !== 'object'
  ) {
    const stopToUse = themeInverse.base ? inversePaletteStop : paletteStop;
    setBaseDefaults(palette, stopToUse);

    const colors: Record<string, string> = {};
    calculateOneObj(
      palette,
      paletteStop,
      colors,
      themeInverse,
      inversePaletteStop
    );
    calculateBothObjectsInverse(
      palette,
      paletteStop,
      colors,
      themeInverse,
      inversePaletteStop
    );
    return Modifiers(colors, colorType);
  } else if (
    typeof inversePaletteStop === 'object' &&
    typeof themeInverse !== 'object'
  ) {
    const stopToUse = themeInverse ? inversePaletteStop.base : paletteStop;
    setBaseDefaults(palette, stopToUse);
    const colors: Record<string, string> = {};
    calculateOneObj(
      palette,
      paletteStop,
      colors,
      themeInverse,
      inversePaletteStop
    );
    calculateBothObjectsInverse(
      palette,
      paletteStop,
      colors,
      themeInverse,
      inversePaletteStop
    );
    return Modifiers(colors, colorType);
  } else {
    const stopToUse = themeInverse ? inversePaletteStop : paletteStop;
    setBaseDefaults(palette, stopToUse);
    if (typeof palette !== 'object' && typeof stopToUse !== 'object') {
      return CreateColor(palette, stopToUse, colorType);
    }
    const colors: Record<string, string> = {};
    calculateOneObj(palette, stopToUse, colors);
    calculateBothObjects(palette, stopToUse, colors);

    return Modifiers(colors, colorType);
  }
};
