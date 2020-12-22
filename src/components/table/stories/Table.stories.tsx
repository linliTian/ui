/* eslint-disable */
import * as React from 'react';

import styled from '@emotion/styled';

import { Table, ColumnProps } from '../Table';

import { Icon } from '../../icons/index';

import { Button } from '../../button/Button';

// @ts-ignore
import mdx from './Table.mdx';

const IconSpacer = styled.span`
  margin-left: 16px;
`;

const ButtonSpacer = styled.div`
  height: 16px;
`;

const Actions = () => (
  <>
    <span>
      <Icon.Pencil />
    </span>
    <IconSpacer />
    <span>
      <Icon.Times />
    </span>
  </>
);

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  interface User {
    name: string;
    age: number;
    address: string;
  }

  const [selectedRow, setSelectedRow] = React.useState();

  const data: User[] = [
    {
      name: 'John Brown',
      age: 61,
      address: 'British Columbia No. 1 Lake Park',
    },
    {
      name: 'Jim Green',
      age: 70,
      address: 'Ontario No. 1 Lake Park',
    },
    {
      name: 'Joe Flack',
      age: 40,
      address: 'Winnepeg No. 1 Lake Park',
    },
  ];

  const columns: ColumnProps<User>[] = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      width: 15,
    },
    {
      key: 'age',
      title: 'Age',
      render: ({ record: { age } }) => (
        <span>
          <b>{age}</b> y/o
        </span>
      ),
      width: 15,
      justify: 'center',
    },
    {
      key: 'address',
      dataIndex: 'address',
      title: 'Address',
    },
    {
      key: 'actions',
      title: 'Actions',
      render: () => <Actions />,
      width: 5,
      justify: 'flex-end',
    },
  ];

  const onClick = React.useCallback((_, record) => {
    setSelectedRow(record.name);
  }, []);

  return (
    <Table<User>
      data={data}
      dataUniqueKey={'name'}
      columns={columns}
      onRow={{ onClick }}
      selectedRowKey={selectedRow}
    />
  );
};

export const sortable = () => {
  interface User {
    key: string | number;
    name: string;
    age: number;
    address: string;
  }

  const [tableData, setTableData] = React.useState<User[]>([
    {
      key: '1',
      name: 'John Brown',
      age: 61,
      address: 'British Columbia No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 70,
      address: 'Ontario No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Flack',
      age: 40,
      address: 'Winnepeg No. 1 Lake Park',
    },
  ]);

  const columns: ColumnProps<User>[] = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      width: 15,
      sortable: true,
    },
    {
      key: 'age',
      dataIndex: 'age',
      title: 'Age',
      width: 15,
      justify: 'center',
      sortable: true,
    },
    {
      key: 'address',
      dataIndex: 'address',
      title: 'Address',
    },
    {
      key: 'actions',
      title: 'Actions',
      render: () => <Actions />,
      width: 5,
      justify: 'flex-end',
    },
  ];

  const sortAlpabetical = (reverse) => {
    if (reverse) {
      return tableData.sort((b, a) => {
        return a.name.localeCompare(b.name);
      });
    }
    return tableData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  };

  const sortNumerical = (reverse) => {
    if (reverse) {
      return tableData.sort((a, b) => b.age - a.age);
    }
    return tableData.sort((a, b) => a.age - b.age);
  };

  const handleSort = React.useCallback(
    (column, state) => {
      switch (column) {
        case 'name': {
          const newData = sortAlpabetical(state === 'dsc');
          setTableData([...newData]);
          break;
        }
        case 'age': {
          const newData = sortNumerical(state === 'dsc');
          setTableData([...newData]);
          break;
        }
      }
    },
    [tableData, setTableData]
  );

  return (
    <Table<User>
      dataUniqueKey={'name'}
      data={tableData}
      columns={columns}
      onSort={handleSort}
    />
  );
};

export const empty = () => {
  interface User {
    key: string | number;
    name: string;
    age: number;
    address: string;
  }

  const columns: ColumnProps<User>[] = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      width: 15,
      sortable: true,
    },
    {
      key: 'age',
      dataIndex: 'age',
      title: 'Age',
      width: 15,
      justify: 'center',
      sortable: true,
    },
    {
      key: 'address',
      dataIndex: 'address',
      title: 'Address',
    },
    {
      key: 'actions',
      title: 'Actions',
      render: () => <Actions />,
      width: 5,
      justify: 'flex-end',
    },
  ];

  return (
    <Table
      data={[]}
      dataUniqueKey={'name'}
      columns={columns}
      emptyComponent={<div>It appears you have no users.</div>}
    />
  );
};

export const loading = () => {
  interface User {
    key: string | number;
    name: string;
    age: number;
    address: string;
  }

  const [loading, setLoading] = React.useState(false);

  const fetchData = React.useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [tableData, setTableData] = React.useState<User[]>([
    {
      key: '1',
      name: 'John Brown',
      age: 61,
      address: 'British Columbia No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 70,
      address: 'Ontario No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Flack',
      age: 40,
      address: 'Winnepeg No. 1 Lake Park',
    },
  ]);

  const columns: ColumnProps<User>[] = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      width: 15,
    },
    {
      key: 'age',
      dataIndex: 'age',
      title: 'Age',
      width: 15,
      justify: 'center',
    },
    {
      key: 'address',
      dataIndex: 'address',
      title: 'Address',
    },
    {
      key: 'actions',
      title: 'Actions',
      render: () => <Actions />,
      width: 5,
      justify: 'flex-end',
    },
  ];

  return (
    <>
      <Button loading={loading} onClick={fetchData}>
        Fetch Data
      </Button>
      <ButtonSpacer />
      <Table
        dataUniqueKey={'name'}
        data={tableData}
        columns={columns}
        loading={loading}
      />
    </>
  );
};
