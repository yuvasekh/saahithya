import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, DatePicker, Select, Button, Upload, message, Row, Col,InputNumber } from 'antd';
import {
  UserOutlined,
  CalendarOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LockOutlined,
  CheckOutlined,
  PlusOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import './Register.scss';
import { register } from '../services/api';
import moment from 'moment';
import registerimage from '../../Resources/register.jpg'
const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setImageUrl(URL.createObjectURL(file));
      message.success('Image uploaded successfully');
    }, 2000);
  };

  const disabledDate = (current) => {
    // Disable dates greater than the current date
    return current && current > moment().endOf('day');
  };

  const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'icloud.com', 'aol.com', 'protonmail.com', 'mail.com', 'gmx.com','microsoft.com'];

  const validateEmail = (_, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !emailRegex.test(value)) {
      return Promise.reject('Please enter a valid email address');
    }
  
    const enteredDomain = value.split('@')[1]; // Extracting the domain part of the email address
  
    if (!allowedDomains.includes(enteredDomain)) {
      return Promise.reject('Please enter an email from one of the allowed domains');
    }
  
    return Promise.resolve();
  };
  

  const validateMobile = (_, value) => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!value || !mobileRegex.test(value)) {
      return Promise.reject('Please enter a valid 10-digit mobile number');
    }
    return Promise.resolve();
  };

  const validateAddress = (_, value) => {
    if (!value || value.trim() === '') {
      return Promise.reject('Please enter your address');
    }
    return Promise.resolve();
  };

  // Password validation function
 
  const validatePassword = (_, value) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!value || !passwordRegex.test(value)) {
      return Promise.reject(
        'Password must be at least 8 characters long and contain at least one alphabet, one number, and one special character (@$!%*?&)'
      );
    }
    return Promise.resolve();
  };
  

  const onFinish = async (values) => {
    console.log('Form values:', values);
    register(values)
      .then((res) => {
        console.log(res.status, 'yuvatest');
        console.log(res, 'yuva');
        if (res.status === 200) {
          navigate('/vaidateotp', { state: { myProp: values } });
        } else {
          setError('Registration failed. Please try again.');
        }
      })
      .catch((err) => {
        setError('An error occurred. Please try again.');
      });
  };

  const handleFormChange = () => {
    setError(null); // Reset the error state when form items change
  };

  return (
    <>
      <h1 className="register-head">Register to saahithya.com</h1>
      <div className="form-div-con">
        <div className="image-con">
          <img style={{ height: '50vh', width: '100%', borderRadius: '20px' }} src={registerimage} />
        </div>
        <Form
          onFinish={onFinish}
          onFieldsChange={handleFormChange}
          className="register-form"
          style={{ background: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dob"
                rules={[{ required: true, message: 'Please select your date of birth' }]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  prefix={<CalendarOutlined />}
                  placeholder="Enter Date of Birth"
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
            <Form.Item
  name="email"
  rules={[
    { required: true, message: 'Please enter your email' },
    { validator: validateEmail },
  ]}
>
  <Input prefix={<MailOutlined />} placeholder="Email" />
</Form.Item>


            </Col>
            <Col span={12}>
              <Form.Item
                name="mobile"
                rules={[
                  { required: true, message: 'Please enter your mobile number' },
                  { validator: validateMobile },
                ]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="Mobile" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="address"
                rules={[
                  { required: true, message: 'Please enter your address' },
                  { validator: validateAddress },
                ]}
              >
                <Input prefix={<EnvironmentOutlined />} placeholder="Address" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="gender"
                rules={[{ required: true, message: 'Please select your gender' }]}
              >
                <Select prefix={<UserOutlined />} placeholder="Gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please enter a password' },
                  { validator: validatePassword },
                ]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="confirmPassword"
                rules={[
                  { required: true, message: 'Please confirm your password' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match'));
                    },
                  }),
                ]}
              >
                <Input.Password prefix={<CheckOutlined />} placeholder="Confirm Password" />
              </Form.Item>
            </Col>
            <Form.Item
              label="Upload Profile picture"
              name="Profile"
              rules={[
                {
                  required: true,
                  message: 'Upload Profile picture',
                },
              ]}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={false}
                beforeUpload={(file) => {
                  // Ensure only image files are uploaded
                  const isImage = file.type.startsWith('image/');
                  if (!isImage) {
                    message.error('You can only upload image files');
                  }
                  return isImage;
                }}
                customRequest={({ file }) => handleImageUpload(file)}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="Uploaded" style={{ width: '50%' }} />
                ) : (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div>Upload</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </Row>
          <Form.Item>
            <div style={{ display: 'flex', gap: '32px', alignContent: 'center', alignItems: 'center' }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Link to="/login">Already Have An account</Link>
            </div>
          </Form.Item>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </Form>
      </div>
      <br />
    </>
  );
};

export default Register;
