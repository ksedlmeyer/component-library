import cn from 'classnames';
import { Modifiers } from '../helpers';
import { TableProps } from '../types';

export const TableClasses = (props: TableProps) => {
  return cn({
    [`${Modifiers(props.borderCollapse, 'border')}`]: props.borderCollapse,
    [`${Modifiers(props.borderSpacing, 'border-spacing')}`]:
      props.borderSpacing,
    [`${Modifiers(props.tableLayout, 'table')}`]: props.tableLayout
  });
};
