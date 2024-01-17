import { FC } from 'react';
import { PaginationProps } from './pagination.types';
import { Dev, DevProps } from '../dev';
import { Label, LabelProps } from '../label';
import { Button } from '../button';
import { Input } from '../input';

export const Pagination: FC<PaginationProps> = ({ ...props }) => {
  const {
    pageLength,
    dataLength,
    palette,
    canPreviousPage,
    onGoToPageClick,
    onPreviousClick,
    pageIndex,
    totalPages,
    canNextPage,
    onNextClick,
    pageCount,
    pageSize,
    jumpToPage,
    changePageSize
  } = props;

  const containerProps: DevProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'between',
    borderWidth: 't',
    borderPalette: palette,
    borderPaletteStop: 200,
    bgPalette: props.tableBackground ? 'white' : 'transparent',
    padding: ['x-4', 'y-3']
  };

  const innerContainerProps: DevProps = {
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
    textPalette: palette,
    textPaletteStop: 700
  };

  const labelDevProps: DevProps = {
    fontWeight: 'medium'
  };

  const pageLabelProps: LabelProps = {
    fontSize: 'sm',
    textPalette: palette,
    textPaletteStop: 700,
    padding: 4
  };

  return (
    <Dev {...containerProps}>
      <Dev {...innerContainerProps}>
        <Dev>
          <Label {...resultsLabelProps}>
            Showing{' '}
            <Dev {...labelDevProps}>
              {pageLength > dataLength ? dataLength : pageLength}
            </Dev>{' '}
            of <Dev {...labelDevProps}>{dataLength}</Dev> results
          </Label>
        </Dev>
      </Dev>
      <Button
        cursor={'pointer'}
        iconOnly={true}
        leadingIcon={'ChevronDoubleLeftIcon'}
        position={'relative'}
        display={'inline-flex'}
        alignItems={'center'}
        borderWidth={'base'}
        borderRadius={'l-md'}
        borderPalette={palette}
        borderPaletteStop={300}
        btnHoverPalette={palette}
        btnPalette={'white'}
        btnHoverPaletteStop={50}
        btnSize={'xs'}
        iconSize={'sm'}
        fontWeight={'medium'}
        textPalette={palette}
        textPaletteStop={500}
        zIndex={{ focus: '20' }}
        isDisabled={!canPreviousPage}
        padding={['x-2', 'y-3']}
        onClick={() => onGoToPageClick(0)}
      />
      <Button
        cursor={'pointer'}
        iconOnly={true}
        label=''
        leadingIcon={'ChevronLeftIcon'}
        position={'relative'}
        display={'inline-flex'}
        alignItems={'center'}
        borderWidth={'base'}
        corner={'square'}
        borderPalette={palette}
        borderPaletteStop={300}
        btnHoverPalette={palette}
        btnPalette={'white'}
        btnHoverPaletteStop={50}
        btnSize={'xs'}
        iconSize={'sm'}
        fontWeight={'medium'}
        textPalette={palette}
        textPaletteStop={500}
        zIndex={{ focus: '20' }}
        isDisabled={!canPreviousPage}
        padding={['x-2', 'y-3']}
        onClick={() => onPreviousClick()}
      />
      <Label {...pageLabelProps}>
        Page <Dev fontWeight={'bold'}>{pageIndex + 1}</Dev> of{' '}
        <Dev fontWeight={'bold'}>{totalPages}</Dev>{' '}
      </Label>
      <Button
        cursor={'pointer'}
        iconOnly={true}
        leadingIcon={'ChevronRightIcon'}
        position={'relative'}
        display={'inline-flex'}
        alignItems={'center'}
        borderWidth={'base'}
        corner={'square'}
        borderPalette={palette}
        borderPaletteStop={300}
        btnHoverPalette={palette}
        btnPalette={'white'}
        btnHoverPaletteStop={50}
        btnSize={'xs'}
        iconSize={'sm'}
        fontWeight={'medium'}
        textPalette={palette}
        textPaletteStop={500}
        zIndex={{ focus: '20' }}
        isDisabled={!canNextPage}
        padding={['x-2', 'y-3']}
        onClick={() => onNextClick()}
      />
      <Button
        cursor={'pointer'}
        iconOnly={true}
        leadingIcon={'ChevronDoubleRightIcon'}
        position={'relative'}
        display={'inline-flex'}
        alignItems={'center'}
        borderWidth={'base'}
        borderRadius={'r-md'}
        borderPalette={palette}
        borderPaletteStop={300}
        btnHoverPalette={palette}
        btnPalette={'white'}
        btnHoverPaletteStop={50}
        btnSize={'xs'}
        iconSize={'sm'}
        fontWeight={'medium'}
        textPalette={palette}
        textPaletteStop={500}
        zIndex={{ focus: '20' }}
        isDisabled={!canNextPage}
        padding={['x-2', 'y-3']}
        onClick={() => onGoToPageClick(pageCount - 1)}
      />
      {jumpToPage ? (
        <Dev display={'flex'} alignItems={'center'}>
          <Label {...pageLabelProps}> | Go to page: </Label>
          <Input
            type='number'
            placeholder='Page...'
            textPalette={palette}
            borderPalette={palette}
            width={24}
            padding={0}
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              const page = target.value ? Number(target.value) - 1 : 0;
              onGoToPageClick(page);
            }}
          />
        </Dev>
      ) : null}
      <select
        className={`ml-4 inline-flex w-1/12 justify-center rounded-md border border-${palette}-300 bg-white px-4 py-2 text-sm font-medium text-${palette}-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
        value={pageSize}
        onChange={(e) => {
          changePageSize(Number(e.target.value));
        }}>
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option
            className={`block px-4 py-2 text-sm text-${palette}-700`}
            key={pageSize}
            value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </Dev>
  );
};
