import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './Login.scss'
// Import the navigate function from the appropriate package or library

const LoginForm = () => {
  const navigate=useNavigate();
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   const handleStorageChange = (e) => {
  //     if (e.key === 'token') {
  //       console.log(e.newValue,"changestrack")
  //       setToken(e.newValue);
  //     }
  //   };
  
  //   window.addEventListener('storage', handleStorageChange);
  
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []);
  
  const onFinish = async (values) => {
    console.log('Form values:', values);
    try { 
      const res = await login(values);
      console.log(res.status, "yuvatest");
      console.log(res, "yuva");
      if (res.status === 200) {
        console.log(res.data.token)
        localStorage.setItem('token',res.data.token)
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
    <div className='login-form' >
   <br></br>
      <h1 className="login-head" >Login to Saaithya.com</h1>
      <br></br>
      <Form
      className='login-form2'
        name="login-form"
        onFinish={onFinish}
        onFieldsChange={handleFormChange}
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
