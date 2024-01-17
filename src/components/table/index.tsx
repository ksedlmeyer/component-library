/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  flexRender,
  SortingState,
  ExpandedState
} from '@tanstack/react-table';
import { FC, Fragment, useEffect, useState } from 'react';
import { TableProps } from './table.types';
import { Dev, DevProps } from '../dev';
import { Button, ButtonProps } from '../button';
import { Label, LabelProps } from '../label';
import { Icon } from '../icon';
import { Pagination } from '../pagination';
import { GlobalFilter, handleDownloadExcel } from './filtersAndFunctions';

export const Table: FC<TableProps> = ({
  element = 'table',
  tableData = [],
  tableHeaders = [],
  topSectionProps = {
    justifyContent: 'between'
  },
  exportButtonProps = {
    bgPalette: 'primary',
    margin: 'b-2',
    label: 'Export excel'
  },
  tablePalette = 'neutral',
  tableColumnTextPalette = 'neutral',
  tableColumnTextPaletteStop = 900,
  tableSubColumnTextPalette = 'neutral',
  tableSubColumnTextPaletteStop = 500,
  tableDataTextPalette = 'neutral',
  tableDataTextPaletteStop = 500,
  resultsLabelTextPalette = 'neutral',
  paginationPalette = 'neutral',
  searchPalette = 'neutral',
  flexDirection = 'col',
  padding = 4,
  tableOptions,
  getRowCanExpand = () => true,
  displayPagination = false,
  stripedRows = false,
  collapsible = false,
  tableBackground,
  pageLength,
  excelExport = false,
  insightsType,
  globalSearch = false,
  jumpToPage = false,
  filterOptions,
  tableCellWhiteSpace,
  ...props
}) => {
  const [data, setData] = useState(tableData);
  const [columns, setColumns] = useState(tableHeaders);
  const [tableCollapsed, setCollapsed] = useState(false);
  const [globalFilter, setGlobalFilter] = useState('');

  const [sorting, setSorting] = useState<SortingState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const {
    getHeaderGroups,
    getRowModel,
    setPageIndex,
    getCanPreviousPage,
    previousPage,
    getState,
    getPageCount,
    getCanNextPage,
    nextPage,
    setPageSize
  } = useReactTable({
    data,
    columns,
    state: !displayPagination
      ? {
          pagination: {
            pageSize: data.length,
            pageIndex: 0
          },
          globalFilter,
          sorting,
          expanded
        }
      : {
          globalFilter,
          sorting,
          expanded
        },
    getRowCanExpand,
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    ...tableOptions
  });

  const excelHeaders: string[] = [];
  tableHeaders.map((column: any) => {
    excelHeaders.push(column.header as string);
  });

  const tableProps: DevProps = {
    width: 'full',
    display: 'flex',
    flexDirection,
    padding,
    ...props
  };

  const filteringSectionProps: DevProps = {
    alignItems: 'center',
    padding: 'b-4',
    ...topSectionProps
  };

  const exportProps: ButtonProps = {
    ...exportButtonProps
  };

  const tableElementProps: DevProps = {
    element,
    minWidth: 'full',
    divideWidth: 'y',
    dividePalette: tablePalette,
    dividePaletteStop: 300,
    borderWidth: 'b',
    borderPalette: tablePalette,
    borderPaletteStop: 200,
    bgPalette: tableBackground ? 'white' : 'transparent'
  };

  const resultsProps: DevProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'between',
    borderWidth: 't',
    borderPalette: resultsLabelTextPalette,
    borderPaletteStop: 200,
    bgPalette: tableBackground ? 'white' : 'transparent',
    padding: ['x-4', 'y-3']
  };

  const restultsNumProps: DevProps = {
    display: {
      base: 'hidden',
      sm: 'flex'
    },
    flex: {
      sm: '1'
    },
    alignItems: {
      sm: 'center'
    },
    justifyContent: {
      sm: 'between'
    }
  };

  const resultsLabelProps: LabelProps = {
    fontSize: 'sm',
    textPalette: resultsLabelTextPalette,
    textPaletteStop: 700
  };

  const handleCollapse = () => {
    setCollapsed(true);
  };

  const handleExpand = () => {
    setCollapsed(false);
  };

  useEffect(() => {
    const filteredData: any[] = [];
    if (globalFilter !== '') {
      tableData.map((dat: any) => {
        Object.values(dat).map((val: any) => {
          if (typeof val !== 'object') {
            const stringVal = val.toString().toLowerCase();
            if (
              stringVal.includes(globalFilter.toLowerCase()) &&
              filteredData.indexOf(dat) === -1
            ) {
              filteredData.push(dat);
            }
          } else if (typeof val === 'object') {
            const stringVal = val.props?.children?.toString().toLowerCase();
            if (
              stringVal &&
              stringVal.includes(globalFilter.toLowerCase()) &&
              filteredData.indexOf(dat) === -1
            ) {
              filteredData.push(dat);
            }
            if (val.props === undefined && val.length > 0) {
              Object.entries(val).map(([, cell]: any) => {
                Object.values(cell).map((value: any) => {
                  const stringVal = value.toString().toLowerCase();
                  if (
                    stringVal.includes(globalFilter.toLowerCase()) &&
                    filteredData.indexOf(dat) === -1
                  ) {
                    filteredData.push(dat);
                  }
                });
              });
            }
          }
        });
      });
      setData(filteredData);
    } else {
      setData(tableData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalFilter]);

  useEffect(() => {
    if (pageLength !== undefined) {
      setPageSize(pageLength);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageLength]);

  useEffect(() => {
    if (tableData !== data) {
      setData(tableData);
    }
    if (tableHeaders !== columns) {
      setColumns(tableHeaders);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableData, tableHeaders]);

  return (
    <Dev {...tableProps}>
      <Dev {...filteringSectionProps}>
        {excelExport ? (
          <Button
            onClick={() =>
              insightsType
                ? handleDownloadExcel(insightsType, excelHeaders, data)
                : handleDownloadExcel('excelDownload', excelHeaders, data)
            }
            {...exportProps}>
            {' '}
            Export excel{' '}
          </Button>
        ) : null}
        <Dev alignItems='center'>{filterOptions}</Dev>
        <Dev alignItems={'center'}>
          {globalSearch ? (
            <GlobalFilter
              value={globalFilter ?? ''}
              onChange={(value) => setGlobalFilter(String(value))}
              className={`rounded-md border border-gray-300 focus:border-${searchPalette}-600 focus:ring-${searchPalette}-600 ring-${searchPalette}-500 w-full sm:text-sm text-neutral-900 placeholder:text-neutral-400 block mt-1 py-2 px-3 accent-${searchPalette}-500`}
              placeholder='Search'
            />
          ) : null}
        </Dev>
      </Dev>
      <Dev {...tableElementProps}>
        <thead className={`bg-${tablePalette}-200`}>
          {getHeaderGroups().map((headerGroup, index) => {
            if (index === 0) {
              return (
                <tr key={headerGroup.id}>
                  {collapsible &&
                    (tableCollapsed ? (
                      <th
                        key={`${headerGroup.id}_collapse`}
                        className={`py-3.5 px-3 text-left text-base font-semibold text-${tableColumnTextPalette}-${tableColumnTextPaletteStop}`}>
                        <div
                          key={`${headerGroup.id}_div`}
                          className='flex items-center'
                          onClick={() => handleExpand()}>
                          <Icon
                            svg={'ChevronRightIcon'}
                            iconType={'solid'}
                            width={5}
                            margin={'l-2'}
                            fillPalette={'neutral'}
                            fillPaletteStop={900}
                          />
                        </div>
                      </th>
                    ) : (
                      <th
                        key={`${headerGroup.id}_collapse`}
                        className={`py-3.5 px-3 text-left text-base font-semibold text-${tableColumnTextPalette}-${tableColumnTextPaletteStop}`}>
                        <div
                          key={`${headerGroup.id}_div`}
                          className='flex items-center'
                          onClick={() => handleCollapse()}>
                          <Icon
                            svg={'ChevronDownIcon'}
                            iconType={'solid'}
                            width={5}
                            margin={'l-2'}
                            fillPalette={'neutral'}
                            fillPaletteStop={900}
                          />
                        </div>
                      </th>
                    ))}
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        className={`py-3.5 px-3 text-left text-base font-semibold text-${tableColumnTextPalette}-${tableColumnTextPaletteStop}`}
                        key={header.id}
                        colSpan={header.colSpan}>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none flex items-center'
                              : '',
                            onClick: header.column.getToggleSortingHandler()
                          }}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: (
                              <Icon
                                svg={'ChevronUpIcon'}
                                iconType={'solid'}
                                width={5}
                                margin={'l-2'}
                                fillPalette={'neutral'}
                                fillPaletteStop={900}
                              />
                            ),
                            desc: (
                              <Icon
                                svg={'ChevronDownIcon'}
                                iconType={'solid'}
                                width={5}
                                margin={'l-2'}
                                fillPalette={'neutral'}
                                fillPaletteStop={900}
                              />
                            )
                          }[header.column.getIsSorted() as string] ?? null}
                          {!header.column.getIsSorted() &&
                          header.column.getCanSort() ? (
                            <Icon
                              svg={'ChevronUpDownIcon'}
                              iconType={'solid'}
                              width={5}
                              margin={'l-2'}
                              fillPalette={'neutral'}
                              fillPaletteStop={900}
                            />
                          ) : null}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              );
            } else {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        className={`py-3.5 px-3 text-left text-base font-semibold text-${tableSubColumnTextPalette}-${tableSubColumnTextPaletteStop}`}
                        key={header.id}
                        colSpan={header.colSpan}>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler()
                          }}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              );
            }
          })}
        </thead>
        {!tableCollapsed ? (
          <tbody>
            {getRowModel().rows.map((row: any, i) => {
              return (
                <Fragment key={`${row.id}_fragment`}>
                  <tr
                    key={`${row.id}_tr`}
                    className={
                      row.original?.rowStyles
                        ? row.original.rowStyles
                        : i % 2 === 0
                        ? undefined
                        : stripedRows
                        ? `bg-${tablePalette}-100`
                        : undefined
                    }>
                    {collapsible ? <td></td> : null}
                    {row.getVisibleCells().map((cell: any) => {
                      return (
                        <td
                          key={cell.id}
                          className={`whitespace-${tableCellWhiteSpace} px-3 py-4 text-left text-sm text-${tableDataTextPalette}-${tableDataTextPaletteStop}`}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                  {row.getIsExpanded()
                    ? row.original.subRows.map((cell: any, i: number) => {
                        return (
                          <tr
                            key={i}
                            className={
                              row.original?.rowStyles
                                ? row.original.rowStyles
                                : i % 2 === 0
                                ? undefined
                                : stripedRows
                                ? `bg-${tablePalette}-100`
                                : undefined
                            }>
                            <td
                              key={`${i}_td`}
                              className={`whitespace-${tableCellWhiteSpace} px-3 py-4 text-left text-sm text-${tableDataTextPalette}-${tableDataTextPaletteStop}`}></td>
                            {Object.entries(cell).map(([, val]: any, j) => {
                              return (
                                <td
                                  key={j}
                                  className={`whitespace-${tableCellWhiteSpace} px-3 py-4 text-left text-sm text-${tableDataTextPalette}-${tableDataTextPaletteStop}`}>
                                  {val}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })
                    : null}
                </Fragment>
              );
            })}
          </tbody>
        ) : null}
      </Dev>
      {displayPagination ? (
        <Pagination
          pageLength={getRowModel().rows.length}
          dataLength={data.length}
          onGoToPageClick={setPageIndex}
          canPreviousPage={getCanPreviousPage()}
          onPreviousClick={previousPage}
          pageIndex={getState().pagination.pageIndex}
          totalPages={getPageCount()}
          canNextPage={getCanNextPage()}
          onNextClick={nextPage}
          pageCount={getPageCount()}
          pageSize={getState().pagination.pageSize}
          changePageSize={setPageSize}
          palette={paginationPalette}
          tableBackground={tableBackground}
          jumpToPage={jumpToPage}
        />
      ) : (
        <Dev {...resultsProps}>
          <Dev {...restultsNumProps}>
            <Dev>
              <Label {...resultsLabelProps}>{data.length} results</Label>
            </Dev>
          </Dev>
        </Dev>
      )}
    </Dev>
  );
};
