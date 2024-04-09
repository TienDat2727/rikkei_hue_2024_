import { Form, Input, Button, Flex } from 'antd';
import React from 'react';

const SearchCategory = () => {
  return (
    <div>
      <Form>
        <Flex justify='space-between'>
          <Form.Item>
            <Input style={{ width: '350px' }} />
          </Form.Item>
          <Button>Search Categories</Button>
        </Flex>
      </Form>
    </div>
  );
};

export default SearchCategory;
