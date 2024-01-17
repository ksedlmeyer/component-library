import cn from 'classnames';
import { Modifiers } from '../helpers';
import { FlexGridProps } from '../types';

export const FlexGridClasses = (props: FlexGridProps) => {
  const shouldFlex =
    props.flexBasis ||
    props.flexDirection ||
    props.flexWrap ||
    props.justifyContent ||
    props.alignItems;

  const shouldGrid =
    props.gridCols ||
    props.gridRows ||
    props.gridAutoFlow ||
    props.gridAutoCols ||
    props.gridAutoRows ||
    props.justifyItems ||
    props.alignContent ||
    props.placeContent ||
    props.placeItems;

  return cn({
    [`flex`]: shouldFlex,
    [`grid`]: shouldGrid,
    [`${Modifiers(props.flexBasis, 'basis')}`]: props.flexBasis,
    [`${Modifiers(props.flexDirection, 'flex')}`]: props.flexDirection,
    [`${Modifiers(props.flexWrap, 'flex')}`]: props.flexWrap,
    [`${Modifiers(props.flex, 'flex')}`]: props.flex,
    [`${Modifiers(props.flexGrow, 'grow')}`]: props.flexGrow,
    [`${Modifiers(props.flexShrink, 'shrink')}`]: props.flexShrink,
    [`${Modifiers(props.order, 'order')}`]: props.order,
    [`${Modifiers(props.gridCols, 'grid-cols')}`]: props.gridCols,
    [`${Modifiers(props.gridColSize, 'col')}`]: props.gridColSize,
    [`${Modifiers(props.gridRows, 'grid-rows')}`]: props.gridRows,
    [`${Modifiers(props.gridRowSize, 'row')}`]: props.gridRowSize,
    [`${Modifiers(props.gridAutoFlow, 'grid-flow')}`]: props.gridAutoFlow,
    [`${Modifiers(props.gridAutoCols, 'auto-cols')}`]: props.gridAutoCols,
    [`${Modifiers(props.gridAutoRows, 'auto-rows')}`]: props.gridAutoRows,
    [`${Modifiers(props.gap, 'gap')}`]: props.gap,
    [`${Modifiers(props.justifyContent, 'justify')}`]: props.justifyContent,
    [`${Modifiers(props.justifyItems, 'justify-items')}`]: props.justifyItems,
    [`${Modifiers(props.justifySelf, 'justify-self')}`]: props.justifySelf,
    [`${Modifiers(props.alignContent, 'content')}`]: props.alignContent,
    [`${Modifiers(props.alignItems, 'items')}`]: props.alignItems,
    [`${Modifiers(props.alignSelf, 'self')}`]: props.alignSelf,
    [`${Modifiers(props.placeContent, 'place-content')}`]: props.placeContent,
    [`${Modifiers(props.placeItems, 'place-items')}`]: props.placeItems,
    [`${Modifiers(props.placeSelf, 'place-self')}`]: props.placeSelf
  });
};
