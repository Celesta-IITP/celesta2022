import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const UpdateCAPoints = () => {
  const onFinish = ({celestaId, points}) => {
    points = parseInt(points);
    console.log(celestaId, points);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Celesta-ID of CA"
        name="celestaId"
        rules={[{ required: true, message: 'Please enter correct celesta-id!  Example:CLST1234' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Points to be added to existing CA score"
        name="points"
        rules={[{ required: true, message: 'Please input points!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Add this much points to CA's score
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateCAPoints