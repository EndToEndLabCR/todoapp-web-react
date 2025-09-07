import "./Login.scss";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export function Login() {
  return (
    <div className="login-container">
      <Card title="To-Do App" bordered={false} className="login-card">
        <Form className="login-form" layout="vertical" colon={false}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              size="large"
              allowClear
              prefix={<UserOutlined />}
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

          <Form.Item>
            <Button className="login-form-button" type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>

          <div className="login-links">
            <a href="/register">Sign Up</a> &nbsp; 
            <a href="#">Forgot Password?</a>
          </div>
        </Form>
      </Card>
    </div>
  );
}
