import { Story } from '@storybook/react';
import { Table } from '.';
import { Args } from '../../utils/helpers';
import {
  columnHeadersAlt2a,
  columnHeadersUpdate,
  tableValues,
  tableValuesAlt3
} from '../../assets/data/table.data';
import { Input, InputProps } from '../input';
import { Dev } from '../dev';
import { Container } from '../container';
import { Label } from '../label';

export default {
  title: 'Completed/Table',
  component: Table,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  argTypes: {
    ...Args
  }
};

const tableDefaults = [
  'tableData',
  'tableHeaders',
  'topSectionProps',
  'exportButtonProps',
  'tablePalette',
  'tableColumnTextPalette',
  'tableColumnTextPaletteStop',
  'tableSubColumnTextPalette',
  'tableSubColumnTextPaletteStop',
  'tableDataTextPalette',
  'tableDataTextPaletteStop',
  'resultsLabelTextPalette',
  'paginationPalette',
  'searchPalette',
  'padding',
  'displayPagination',
  'stripedRows',
  'collapsible',
  'tableBackground',
  'pageLength',
  'excelExport',
  'insightsType',
  'globalSearch',
  'jumpToPage',
  'filterOptions'
];

export const Default: Story = (args) => (
  <Table tableHeaders={columnHeadersUpdate} tableData={tableValues} {...args} />
);
Default.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tableDefaults]
  }
};
Default.args = {};

export const Pagination = Default.bind({});
Pagination.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tableDefaults]
  }
};
Pagination.args = {
  displayPagination: true
};

export const ExcelExport = Default.bind({});
ExcelExport.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tableDefaults]
  }
};
ExcelExport.args = {
  excelExport: true
};

export const GlobalSearch = Default.bind({});
GlobalSearch.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tableDefaults]
  }
};
GlobalSearch.args = {
  globalSearch: true,
  tableData: tableValues,
  topSectionProps: {
    justifyContent: 'end'
  },
  tableHeaders: columnHeadersUpdate
};

export const SubHeader = Default.bind({});
SubHeader.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tableDefaults]
  }
};
SubHeader.args = {
  globalSearch: true,
  tableData: tableValuesAlt3,
  tableHeaders: columnHeadersAlt2a,
  topSectionProps: {
    justifyContent: 'end'
  },
  displayPagination: true
};

export const StripedRows = Default.bind({});
StripedRows.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tableDefaults]
  }
};
StripedRows.args = {
  stripedRows: true
};

export const Collapsible = Default.bind({});
Collapsible.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tableDefaults]
  }
};
Collapsible.args = {
  tableData: tableValues,
  tableHeaders: columnHeadersUpdate,
  collapsible: true
};

const inputProps: InputProps = {
  width: 4,
  height: 4,
  textPalette: 'primary',
  textPaletteStop: 700,
  ringPalette: {
    focus: 'primary'
  },
  ringPaletteStop: {
    focus: 600
  },
  borderPalette: 'neutral',
  borderPaletteStop: 300,
  borderRadius: 'base',
  padding: 0,
  margin: 'r-2'
};

export const CustomFilters = Default.bind({});
CustomFilters.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tableDefaults]
  }
};
CustomFilters.args = {
  topSectionProps: {
    justifyContent: 'end'
  },
  displayPagination: true,
  filterOptions: (
    <Dev display='flex' gap={4}>
      <Container gap={2}>
        <Label label='Saved' textPalette='neutral' textPaletteStop={700} />
        <Input id='saved' name='saved' type='checkbox' {...inputProps} />
      </Container>
      <Container gap={2}>
        <Label label='Liked' textPalette='neutral' textPaletteStop={700} />
        <Input id='liked' name='liked' type='checkbox' {...inputProps} />
      </Container>
    </Dev>
  )
};

export const KitchenSink = Default.bind({});
KitchenSink.parameters = {
  controls: {
    sort: 'alpha',
    include: [...tableDefaults]
  }
};
KitchenSink.args = {
  excelExport: true,
  globalSearch: true,
  tableData: tableValues,
  tableHeaders: columnHeadersUpdate,
  displayPagination: true,
  bgPalette: 'secondary',
  bgPaletteStop: 200,
  bgImage: 'background/texture-cubes.png',
  bgBlend: 'multiply',
  tableBackground: true,
  stripedRows: true,
  jumpToPage: true,
  collapsible: true
};
