import { Palette } from '../../utils/types';
import { DevProps } from '../dev/dev.types';

export interface PaginationProps extends DevProps {
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
