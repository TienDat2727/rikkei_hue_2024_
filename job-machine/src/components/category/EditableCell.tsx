import { Form, FormInstance, Input, InputNumber } from 'antd';
import { CategoryData } from 'interfaces/interfaces';
import React from 'react';

type EditableCellProps = {
  form: FormInstance;
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: 'number' | 'string';
  record: CategoryData;
  index: number;
  children: React.ReactNode;
};

const EditableCell: React.FC<EditableCellProps> = ({
  form,
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing && form ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          initialValue={record[dataIndex as keyof CategoryData]}
        >
          {inputType === 'number' ? <InputNumber /> : <Input />}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
