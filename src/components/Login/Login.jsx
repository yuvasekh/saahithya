import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
// Import the navigate function from the appropriate package or library

const LoginForm = () => {
  const navigate=useNavigate();
  const [error, setError] = useState(null);

  const onFinish = async (values) => {
    console.log('Form values:', values);
    try { 
      const res = await login(values);
      console.log(res.status, "yuvatest");
      console.log(res, "yuva");
      if (res.status === 200) {
        console.log(res.data.token)
        navigate('/home', { state: { myProp: values } });
        // Uncomment the above line after importing the navigate function
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
     console.log(error)
      setError('Login failed. Invalid username or password.');
    }
  };

  const handleFormChange = () => {
    setError(null);
  };

  return (
    <div className='formdiv' style={{ position: 'relative', left: '600px',alignContent:'center',alignItems:'center' }}>
   <br></br>
      <h1 style={{ color: '#f8780e', fontWeight: '650', fontSize: '42px' }}>Login to Saaithya.com</h1>
      <br></br>
      <Form
        name="login-form"
        onFinish={onFinish}
        onFieldsChange={handleFormChange}
        style={{
          width: '300px',
          marginLeft: '60px',
          background: 'white',
          padding: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Login
          </Button>
        </Form.Item>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </Form>
      <br></br>
    </div>
  );
};

export default LoginForm;
