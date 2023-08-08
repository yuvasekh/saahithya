import { Form, Input, DatePicker, Select, Row, Col, Button } from 'antd';
import { UserOutlined, CalendarOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, LockOutlined, CheckOutlined } from '@ant-design/icons';

const { Option } = Select;

const Register = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Form onFinish={onFinish}>
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
            <DatePicker prefix={<CalendarOutlined />} placeholder="Date of Birth" />
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
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
}

export default Register;
