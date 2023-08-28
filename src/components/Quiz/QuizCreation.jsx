import React from 'react';
import { Form, Input, Button } from 'antd';

const RepeatedForm = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div>
     <Form onFinish={(values) => onFinish(values)}>
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <Form.Item
              name={`textarea-${index}`}
              label={`Textarea ${index + 1}`}
              rules={[
                {
                  required: true,
                  message: `Please enter Textarea ${index + 1}`,
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name={`input1-${index}`}
              label={`Input 1 ${index + 1}`}
              rules={[
                {
                  required: true,
                  message: `Please enter Input 1 ${index + 1}`,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={`input2-${index}`} label={`Input 2 ${index + 1}`}  rules={[
                {
                  required: true,
                  message: `Please enter Input 2 ${index + 1}`,
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item name={`input3-${index}`} label={`Input 3 ${index + 1}`}  rules={[
                {
                  required: true,
                  message: `Please enter Input 3 ${index + 1}`,
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item name={`input4-${index}`} label={`Input 4 ${index + 1}`}  rules={[
                {
                  required: true,
                  message: `Please enter Input 3 ${index + 1}`,
                },
              ]}>
              <Input />
            </Form.Item>
            {/* Repeat similar Form.Item components for input2, input3, and input4 */}
          </div>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save All
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RepeatedForm;
