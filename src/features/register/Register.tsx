import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import "./Register.scss";

export function Register() {
  const [form] = Form.useForm();
    return (
    <div className="register-container">
        <Card title="Create your account" bordered={false} className="register-card">
        <Form className="register-form" layout="vertical" colon={false}> 
            <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input your full name!" }]}
            >
            <Input
              size="large"
              allowClear
              prefix={<UserOutlined />}
              placeholder="Enter your full name"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              size="large"
              allowClear
              prefix={<MailOutlined />}
              placeholder="Enter your email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              placeholder="Enter your password"
            />
          </Form.Item>

        <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined />}
            placeholder="Confirm your password"
          />
        </Form.Item>

          <Form.Item>
            <Button className="register-form-button" type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>

          <div className="register-link">
            <span>Already have an account? </span>
            <a href="/login">Login</a>
          </div>

            </Form>
        </Card>
        </div>
    );
}