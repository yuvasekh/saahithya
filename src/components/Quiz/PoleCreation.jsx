import React from 'react';
import { Form, Input, Button } from 'antd';
import {createpole} from '../services/api'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const PoleCreation = () => {
  const notify = (msg) => toast(msg);
  const navigate=useNavigate()
  const [form] = Form.useForm();
  const onFinish =async (values) => {
    console.log('Form values:', values);
   var res= await createpole(values);
   console.log(res,"backend")
   if (res.hasOwnProperty('response')) {
   if(res.response.status==401)
   {
   notify("Token Expired")
     localStorage.clear();
    navigate('/login')
   }
   if(res.response.status==400)
   {
    localStorage.clear();
    notify(" Token Expired Login Again")  
    navigate('/login')
   }
  }
  else
  {
    if(res.status==200)
    { form.resetFields();
     notify("Pole Created Sucessfully")
    }
  }
  };

  return (
    <div>
      <ToastContainer />
     <Form form={form} onFinish={(values) => onFinish(values)}>
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
            <Form.Item
              name={`answer`}
              label={`answer`}
              rules={[
                {
                  required: true,
                  message: `Please enter Answer `,
                },
              ]}
            >
                <Input />
            </Form.Item>
      
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Poll
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PoleCreation;
