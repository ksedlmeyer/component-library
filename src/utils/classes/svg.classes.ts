import cn from 'classnames';
import { ColorGen, Modifiers } from '../helpers';
import { SVGProps } from '../types';

export const SVGClasses = (props: SVGProps) => {
  const fillColor = ColorGen(props.fillPalette, props.fillPaletteStop, 'fill');
  const strokeColor = ColorGen(
    props.strokePalette,
    props.strokePaletteStop,
    'stroke'
  );

  return cn({
    [`${fillColor}`]: fillColor,
    [`${strokeColor}`]: strokeColor,
    [`${Modifiers(props.strokeWidth, 'stroke')}`]: props.strokeWidth
  });
};
