import { Form, Input, DatePicker, Select,   message,Row, Col, Button ,Upload} from 'antd';
import { UserOutlined, CalendarOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, LockOutlined, CheckOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import './Register.scss'
const { Option } = Select;
import { useNavigate } from 'react-router-dom';
import { register  } from '../services/api';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import registerimage from '../../assets/register.png'

const Register = () => {
  const navigate=useNavigate()
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
  const onFinish = async(values) => {
    console.log('Form values:', values);
    register(values)
    .then((res) => {
      console.log(res.status, "yuvatest");
      console.log(res, "yuva");
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
    <div className='formdiv'>
     
      <h1 style={{color:'#f8780e',fontWeight:'650'}}>Register to saahithya.com</h1>
      <div style={{display:'flex',gap:'42px',justifyContent:'start'}}>
      <img src={registerimage} style={{width:'300px',height:'300px'}}/>
      <Form onFinish={onFinish} onFieldsChange={handleFormChange} style={{ width: '550px', background: 'white', padding: '40px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>

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
            <DatePicker style={{width:'100%'}} prefix={<CalendarOutlined />} placeholder="Enter Date of Birth" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="mobile"
            rules={[{ required: true, message: 'Please enter your mobile number' }]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Mobile" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="address"
            rules={[{ required: true, message: 'Please enter your address' }]}
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
            rules={[{ required: true, message: 'Please enter a password' }]}
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
       <div style={{display:'flex',gap:'32px',alignContent:'center',alignItems:'center'}}>
       <Button type="primary" htmlType="submit">Submit</Button>
        <Link to="/login">Already Have An account</Link>
       </div>
   
      </Form.Item>
      {error && (
          <div style={{ color: 'red' }}>{error}</div>
        )}
       
    </Form>
    </div>

    <br></br>
    </div>
  );
}

export default Register;
