import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import './CreateContest.scss'; // Import your CSS file
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {createContestapi} from '../services/api'
const CreateContestForm = () => {
  const [form] = Form.useForm();
  const notify = (msg) => toast(msg);
  const onFinish =async (values) => {
    console.log('Contest Data:', values);
    if(values)
    {
        var res=await createContestapi(values)
        console.log(res,"inside")
        if (res.hasOwnProperty('response')) {
            if(res.response.status==401)
            {
            notify("Token Expired")
              localStorage.clear();
           
            }
            if(res.response.status==400)
            {
              localStorage.clear();
             notify(" Failed to create")  
             
            }
           }
           else if(res.hasOwnProperty('code'))
           {
            if(res.code=="ERR_NETWORK")
            {
                alert("falied")
            }
           }
           else
           {
             if(res.status==200)
             { form.resetFields();
              notify("Contest Created Sucessfully")
             }
           }
    }
    
    // You can send the data to a server or perform other actions here.
  };

  return (
    <div className="create-contest-form"> {/* Apply the main form container class */}
     <ToastContainer />
      <h2>Create a New Contest</h2>
      <Form
        form={form}
        name="createContest"
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter the contest title!' }]}
        >
          <Input className="ant-input" /> 
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter a contest description!' }]}
        >
          <Input.TextArea className="ant-input" /> 
        </Form.Item>

      
        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button   type="primary" htmlType="submit" className="ant-btn-primary inside">Create Contest</Button> {/* Apply the button class */}
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateContestForm;
