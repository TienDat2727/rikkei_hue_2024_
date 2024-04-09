import { Form, Input } from 'antd';
import { BaseButton } from 'components/common/BaseButton/BaseButton';
const { Item } = Form;

interface FormType {
  name: string;
  slug: string;
  description: string;
}

const FormAddCategory = () => {
  const handleAction = (values: FormType | undefined) => {
    console.log(values);
  };
  return (
    <div>
      <h2>Thêm Category</h2>
      <Form onFinish={handleAction} style={{ maxWidth: 600 }}>
        <label htmlFor='name'>Name</label>
        <Item name='name'>
          <Input placeholder='Enter Name Input' />
        </Item>
        <label htmlFor='name'>Slug</label>
        <Item name='slug'>
          <Input placeholder='Enter Slug' />
        </Item>
        <label htmlFor='name'>Description</label>
        <Item name='description'>
          <Input placeholder='Enter description' />
        </Item>
        <Item>
          <BaseButton>Enter Submit</BaseButton>
        </Item>
      </Form>
    </div>
  );
};

export default FormAddCategory;
