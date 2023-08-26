import React from 'react';
import { Form, Input, Button } from 'antd';

const PoleCreation = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div>
     <Form onFinish={(values) => onFinish(values)}>
    
        
            <Form.Item
              name={`textarea-${1}`}
              label={`Textarea ${0 + 1}`}
              rules={[
                {
                  required: true,
                  message: `Please enter Textarea ${0 + 1}`,
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name={`input1`}
              label={`Input 1`}
              rules={[
                {
                  required: true,
                  message: `Please enter Input  ${0 + 1}`,
                },
              ]}
            >
                <Input />
            </Form.Item>
                <Form.Item name={`input2`} label={`Input 2`}    rules={[
                {
                  required: true,
                  message: `Please enter Input  ${1 + 1}`,
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item name={`input3`} label={`Input 3 `}    rules={[
                {
                  required: true,
                  message: `Please enter Input 3`,
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item name={`input4`} label={`Input ${3 + 1}`}    rules={[
                {
                  required: true,
                  message: `Please enter Input ${3 + 1}`,
                },
              ]}>
              <Input />
            </Form.Item>
            
      
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Pole
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PoleCreation;
