import React from 'react';
import { Form, Input, Button } from 'antd';
import {createquiz} from '../services/api'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from 'react-router-dom';
const RepeatedForm = () => {
  const notify = (msg) => toast(msg);
  const navigate=useNavigate()
  const [form] = Form.useForm();
  const onFinish = async(values) => {
    console.log('Form values:', values);
    var res=await createquiz(values)
    console.log("quiz",res)
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
            <Form.Item
        name={`answer-${index}`}
        label={`Answer ${index + 1}`}
        rules={[
          {
            required: true,
            message: `Please enter Answer ${index + 1}`,
          },
        ]}
      >
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
