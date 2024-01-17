/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLProps } from 'react';
import { Palette } from '../../utils/types';
import { ButtonProps } from '../button/button.types';
import { DevProps } from '../dev/dev.types';
import { LabelProps } from '../label/label.types';
import { ColumnDef, Row } from '@tanstack/react-table';

export interface TableProps
  extends Pick<HTMLProps<HTMLTableElement>, 'ref'>,
    DevProps {
  insightsType?: string;
  tableHeaders: ColumnDef<any, any>[];
  tableData: any[];
  excelExport?: boolean;
  displayPagination?: boolean;
  jumpToPage?: boolean;
  pageLength?: 10 | 20 | 30 | 40 | 50;
  globalSearch?: boolean;
  tableOnClick?: (arg: { queryParam: string | number }) => void;
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
