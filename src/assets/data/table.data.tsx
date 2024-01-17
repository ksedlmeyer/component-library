/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from '../../components';
import { ColumnDef } from '@tanstack/react-table';

export const columnHeadersUpdate: ColumnDef<any, any>[] = [
  {
    header: 'User Name',
    accessorKey: 'userFullName',
    cell: (cell: any) => cell.getValue(),
    enableSorting: true
  },
  { header: 'Title', accessorKey: 'userTitle', enableSorting: true },
  { header: 'Last Active', accessorKey: 'lastActivity', enableSorting: true },
  { header: 'Saves', accessorKey: 'totalSavedItems', enableSorting: true },
  { header: 'Likes', accessorKey: 'totalLikedItems', enableSorting: true }
];

export const columnHeadersAlt2a: ColumnDef<any, any>[] = [
  {
    id: 'expander',
    header: () => <div className='sr-only'>Expander Icon</div>,
    cell: ({ row }: any) => {
      return row.getCanExpand() ? (
        <button
          {...{
            onClick: row.getToggleExpandedHandler(),
            style: { cursor: 'pointer' }
          }}>
          {row.getIsExpanded() ? (
            <Icon
              svg={'ChevronDownIcon'}
              iconType={'solid'}
              width={5}
              margin={'l-2'}
              defaultPalette={'neutral'}
              defaultPaletteStop={900}
            />
          ) : (
            <Icon
              svg={'ChevronRightIcon'}
              iconType={'solid'}
              width={5}
              margin={'l-2'}
              defaultPalette={'neutral'}
              defaultPaletteStop={900}
            />
          )}
        </button>
      ) : null;
    }
  },
  {
    header: 'Class Name',
    accessorFn: (row) => row.className,
    cell: (cell) => cell.getValue()
  },
  {
    header: 'Property Type',
    accessorFn: (row) => row.propertyType,
    cell: (cell) => cell.getValue()
  },
  {
    header: 'Key',
    accessorFn: (row) => row.key
  },
  {
    header: 'Value',
    accessorFn: (row) => row.value
  }
];

export const tableValuesAlt3 = [
  {
    className: (
      <td
        colSpan={1}
        className={`py-3.5 px-3 text-left text-base font-semibold text-neutral-500`}>
        detailLandingLearningArea
      </td>
    ),
    propertyType: (
      <td
        colSpan={2}
        className={`py-3.5 px-3 text-left text-base font-semibold text-neutral-500`}>
        Total Items Using this style: 0
      </td>
    ),
    subRows: [
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'header.imageHeight',
        value: 'full'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgTextureOpacity',
        value: '90'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.startColorPalette',
        value: 'green'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'avatar.corner',
        value: 'rounded-full'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.gradientDirection',
        value: 'gradient-to-br'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgTextureImageURL',
        value: '/ascnd-library/background/flowerMeds.jpg'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgTextureBlendMode',
        value: 'cover'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgTextureBackgroundPosition',
        value: 'middle'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgColorStartColorPaletteStop',
        value: '200'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgColorStartColorPalette',
        value: 'secondary'
      }
    ]
  },
  {
    className: (
      <td
        colSpan={1}
        className={`py-3.5 px-3 text-left text-base font-semibold text-neutral-500`}>
        detailLandingLearningArea22222222
      </td>
    ),
    propertyType: (
      <td
        colSpan={2}
        className={`py-3.5 px-3 text-left text-base font-semibold text-neutral-500`}>
        Total Items Using this style: 15,0000
      </td>
    ),
    subRows: [
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'header.imageHeight',
        value: 'full'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgTextureOpacity',
        value: '90'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.startColorPalette',
        value: 'green'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'avatar.corner',
        value: 'rounded-full'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.gradientDirection',
        value: 'gradient-to-br'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgTextureImageURL',
        value: '/ascnd-library/background/flowerMeds.jpg'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgTextureBlendMode',
        value: 'cover'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgTextureBackgroundPosition',
        value: 'middle'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgColorStartColorPaletteStop',
        value: '200'
      },
      {
        className: 'detailLandingLearningArea',
        propertyType: 'detailSettings',
        key: 'background.bgColorStartColorPalette',
        value: 'secondary'
      }
    ]
  }
];

export const tableValues = [
  {
    id: '342bb44d-19c3-4a05-9792-33a7c2e70acd',
    lastActivity: '08/23/2022',
    totalLikedItems: 30,
    totalSavedItems: 60,
    userFullName: 'Aaron Schiller',
    userTitle: 'Regional Branding Analyst',
    searchKey: 'katie'
  },
  {
    id: '47a8f6d8-d19a-4808-a52a-f3d05b6988bd',
    lastActivity: '01/10/2022',
    totalLikedItems: 16,
    totalSavedItems: 45,
    userFullName: 'Abagail Jacobi',
    userTitle: 'Legacy Assurance Executive'
  },
  {
    id: '1fdb01b8-f0a6-46a3-a4a9-7dda7f9a963c',
    lastActivity: '12/25/2021',
    totalLikedItems: 57,
    totalSavedItems: 92,
    userFullName: 'Abbey Yundt',
    userTitle: 'Internal Accounts Officer'
  },
  {
    id: 'c0e1c531-6a03-4d81-9117-21bd3e546161',
    lastActivity: '05/13/2022',
    totalLikedItems: 80,
    totalSavedItems: 98,
    userFullName: 'Abbie Walsh',
    userTitle: 'Customer Tactics Administrator'
  },
  {
    id: '6ae324f6-42e2-41b0-a723-4bcc95d8fdb5',
    lastActivity: '11/02/2021',
    totalLikedItems: 31,
    totalSavedItems: 98,
    userFullName: 'Abbie Leannon',
    userTitle: 'Legacy Accounts Manager'
  },
  {
    id: 'ce9c5d2a-e74d-4b5e-83c8-be0a376c4306',
    lastActivity: '10/27/2021',
    totalLikedItems: 25,
    totalSavedItems: 44,
    userFullName: 'Abbigail Christiansen',
    userTitle: 'Internal Security Agent'
  },
  {
    id: 'b1a22518-79ee-4f22-b898-2629579a73fd',
    lastActivity: '10/03/2022',
    totalLikedItems: 52,
    totalSavedItems: 86,
    userFullName: 'Abbigail Senger',
    userTitle: 'Future Creative Manager'
  },
  {
    id: 'bd2520d8-e543-4532-a460-5dccdf577b3e',
    lastActivity: '09/07/2022',
    totalLikedItems: 59,
    totalSavedItems: 43,
    userFullName: 'Abbigail Wehner',
    userTitle: 'Global Quality Technician'
  },
  {
    id: 'e42854fb-1139-49e6-933f-128a5bb5b11d',
    lastActivity: '10/20/2022',
    totalLikedItems: 85,
    totalSavedItems: 98,
    userFullName: 'Abbigail Bayer',
    userTitle: 'National Directives Executive'
  },
  {
    id: '342bb44d-19c3-4a05-9792-33a7c2e70acd',
    lastActivity: '08/23/2022',
    totalLikedItems: 30,
    totalSavedItems: 60,
    userFullName: 'Aaron Schiller',
    userTitle: 'Regional Branding Analyst'
  },
  {
    id: '676de7a8-17ca-46e9-b5e2-ba9cfae25bc4',
    lastActivity: '02/28/2022',
    totalLikedItems: 82,
    totalSavedItems: 21,
    userFullName: 'Abagail Kohler',
    userTitle: 'Future Brand Specialist'
  },
  {
    id: '47a8f6d8-d19a-4808-a52a-f3d05b6988bd',
    lastActivity: '01/10/2022',
    totalLikedItems: 16,
    totalSavedItems: 45,
    userFullName: 'Abagail Jacobi',
    userTitle: 'Legacy Assurance Executive'
  },
  {
    id: '1fdb01b8-f0a6-46a3-a4a9-7dda7f9a963c',
    lastActivity: '12/25/2021',
    totalLikedItems: 57,
    totalSavedItems: 92,
    userFullName: 'Abbey Yundt',
    userTitle: 'Internal Accounts Officer'
  },
  {
    id: 'c0e1c531-6a03-4d81-9117-21bd3e546161',
    lastActivity: '05/13/2022',
    totalLikedItems: 80,
    totalSavedItems: 98,
    userFullName: 'Abbie Walsh',
    userTitle: 'Customer Tactics Administrator'
  },
  {
    id: '6ae324f6-42e2-41b0-a723-4bcc95d8fdb5',
    lastActivity: '11/02/2021',
    totalLikedItems: 31,
    totalSavedItems: 98,
    userFullName: 'Abbie Leannon',
    userTitle: 'Legacy Accounts Manager'
  },
  {
    id: 'ce9c5d2a-e74d-4b5e-83c8-be0a376c4306',
    lastActivity: '10/27/2021',
    totalLikedItems: 25,
    totalSavedItems: 44,
    userFullName: 'Abbigail Christiansen',
    userTitle: 'Internal Security Agent'
  },
  {
    id: 'b1a22518-79ee-4f22-b898-2629579a73fd',
    lastActivity: '10/03/2022',
    totalLikedItems: 52,
    totalSavedItems: 86,
    userFullName: 'Abbigail Senger',
    userTitle: 'Future Creative Manager'
  },
  {
    id: 'bd2520d8-e543-4532-a460-5dccdf577b3e',
    lastActivity: '09/07/2022',
    totalLikedItems: 59,
    totalSavedItems: 43,
    userFullName: 'Abbigail Wehner',
    userTitle: 'Global Quality Technician'
  },
  {
    id: 'e42854fb-1139-49e6-933f-128a5bb5b11d',
    lastActivity: '10/20/2022',
    totalLikedItems: 85,
    totalSavedItems: 98,
    userFullName: 'Abbigail Bayer',
    userTitle: 'National Directives Executive'
  },
  {
    id: '342bb44d-19c3-4a05-9792-33a7c2e70acd',
    lastActivity: '08/23/2022',
    totalLikedItems: 30,
    totalSavedItems: 60,
    userFullName: 'Aaron Schillerrrrrrrrrr',
    userTitle: 'Regional Branding Analyst'
  },
  {
    id: '676de7a8-17ca-46e9-b5e2-ba9cfae25bc4',
    lastActivity: '02/28/2022',
    totalLikedItems: 82,
    totalSavedItems: 21,
    userFullName: 'Abagail Kohler',
    userTitle: 'Future Brand Specialist'
  },
  {
    id: '47a8f6d8-d19a-4808-a52a-f3d05b6988bd',
    lastActivity: '01/10/2022',
    totalLikedItems: 16,
    totalSavedItems: 45,
    userFullName: 'Abagail Jacobi',
    userTitle: 'Legacy Assurance Executive'
  },
  {
    id: '1fdb01b8-f0a6-46a3-a4a9-7dda7f9a963c',
    lastActivity: '12/25/2021',
    totalLikedItems: 57,
    totalSavedItems: 92,
    userFullName: 'Abbey Yundt',
    userTitle: 'Internal Accounts Officer'
  },
  {
    id: 'c0e1c531-6a03-4d81-9117-21bd3e546161',
    lastActivity: '05/13/2022',
    totalLikedItems: 80,
    totalSavedItems: 98,
    userFullName: 'Abbie Walsh',
    userTitle: 'Customer Tactics Administrator'
  },
  {
    id: '6ae324f6-42e2-41b0-a723-4bcc95d8fdb5',
    lastActivity: '11/02/2021',
    totalLikedItems: 31,
    totalSavedItems: 98,
    userFullName: 'Abbie Leannon',
    userTitle: 'Legacy Accounts Manager'
  },
  {
    id: 'ce9c5d2a-e74d-4b5e-83c8-be0a376c4306',
    lastActivity: '10/27/2021',
    totalLikedItems: 25,
    totalSavedItems: 44,
    userFullName: 'Abbigail Christiansen',
    userTitle: 'Internal Security Agent'
  },
  {
    id: 'b1a22518-79ee-4f22-b898-2629579a73fd',
    lastActivity: '10/03/2022',
    totalLikedItems: 52,
    totalSavedItems: 86,
    userFullName: 'Abbigail Senger',
    userTitle: 'Future Creative Manager'
  },
  {
    id: 'bd2520d8-e543-4532-a460-5dccdf577b3e',
    lastActivity: '09/07/2022',
    totalLikedItems: 59,
    totalSavedItems: 43,
    userFullName: 'Abbigail Wehner',
    userTitle: 'Global Quality Technician'
  },
  {
    id: 'e42854fb-1139-49e6-933f-128a5bb5b11d',
    lastActivity: '10/20/2022',
    totalLikedItems: 85,
    totalSavedItems: 98,
    userFullName: 'Abbigail Bayer',
    userTitle: 'National Directives Executive'
  }
];
