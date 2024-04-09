import { Table } from 'antd';
import { columns, dataSource } from 'constants/constants';
import { CategoryData } from 'interfaces/interfaces';
import React from 'react';

const TableCategory = () => {
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: CategoryData[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    getCheckboxProps: (record: CategoryData) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };
  return (
    <Table
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default TableCategory;
