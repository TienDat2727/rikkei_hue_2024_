import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import { BaseButton } from 'components/common/BaseButton/BaseButton';

interface CategoryData {
  key: React.Key;
  name: string;
  description: string;

  count: number;
}
const originData: CategoryData[] = [
  {
    key: '1',
    name: 'Lap trinh vien',
    description: '10 Downing Street',

    count: 10,
  },
  {
    key: '3',
    name: 'Lap trinh vien',
    description: '10 Downing Street',

    count: 10,
  },
  {
    key: '4',
    name: 'Lap trinh vien',
    description: '10 Downing Street',

    count: 10,
  },
  {
    key: '5',
    name: 'Lap trinh vien',
    description: '10 Downing Street',

    count: 10,
  },
  {
    key: '2',
    name: 'Lap trinh vien',
    description: '10 Downing Street',

    count: 10,
  },
];
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: CategoryData;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TableCategory: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

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

  const isEditing = (record: CategoryData) => record.key === editingKey;

  const edit = (record: Partial<CategoryData> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key as string);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as CategoryData;

      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const handleDelete = (key: React.Key) => {
    const newData = originData.filter(item => item.key !== key);
    setData(newData);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '40%',
      editable: true,
    },
    {
      title: 'Count',
      dataIndex: 'count',
      width: '10%',
      editable: false,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '50%',
      render: (_: any, record: CategoryData) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title='Sure to cancel?' onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <BaseButton
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
              style={{ marginRight: '8px' }}
            >
              Edit
            </BaseButton>

            <Popconfirm
              title='Sure to delete'
              onConfirm={() => handleDelete(record.key)}
            >
              <BaseButton disabled={editingKey !== ''}>Delete</BaseButton>
            </Popconfirm>
          </span>
        );
      },
    },
  ];

  const mergedColumns: TableProps['columns'] = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: CategoryData) => ({
        record,
        inputType: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName='editable-row'
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default TableCategory;
