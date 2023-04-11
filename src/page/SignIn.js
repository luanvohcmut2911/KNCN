import React from 'react'
import { Button, Form, Input, Typography } from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { handleGoogleLogin } from '../authentication/googleProvider';
import { handleEmailLogin } from '../authentication/emailProvider';

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const InputStyled = styled(Input)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

const InputPasswordStyled = styled(Input.Password)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

export default function SignIn() {

  const [query] = useSearchParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (query.get("ref") === null) {
      navigate("/404-Not-Found");
    }
  }, [query, navigate]);

  const onFinish= (value)=>{
    console.log(value);
    handleEmailLogin(value.email, value.password);
  };

  return (
    <WrapperStyled>
      <Form
          name="normal-login"
          style={{
            width: "500px",
            backgroundColor: "white",
            padding: "1rem 2.5rem 5rem 2.5rem",
            borderRadius: "24px",
          }}
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Typography.Title style={{ marginBottom: 0 }}>
            Sign in
          </Typography.Title>
          <Typography.Text>
            New user?{" "}
            <a href="/signup?ref=nv_signup" style={{ textDecoration: "underline" }}>
              Create new account
            </a>
          </Typography.Text>
          <Form.Item
            label={<Typography.Text strong>Email:</Typography.Text>}
            name="email"
            rules={[{ required: true, message: "Please enter your email! " }]}
            style={{
              paddingTop: "1.5rem",
            }}
          >
            <InputStyled
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="abc@gmail.com"
            />
          </Form.Item>
          <Form.Item
            label={<Typography.Text strong>Password:</Typography.Text>}
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}
          >
            <InputPasswordStyled
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            style={{
              position: "relative",
            }}
          >
            <div>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  borderRadius: "50px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  float: "right",
                  // backgroundColor: "#10393B",
                }}
              >
                <Typography.Text
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Continue
                </Typography.Text>
              </Button>
            </div>
            <div
              style={{
                width: "100%",
                height: "20px",
                borderBottom: "1px solid black",
                textAlign: "center",
                clear: "right",
                paddingTop: "1rem",
                marginBottom: "2rem",
                padding: 0,
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  backgroundColor: "#F3F5F6",
                  padding: "0 10px",
                }}
              >
                Or
              </span>
            </div>
            <Button
              type="default"
              style={{
                width: "100%",
                borderRadius: "50px",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleGoogleLogin}
            >
              {/* <GoogleIcon /> */}
              <Typography.Text
                strong
                style={{
                  fontSize: "20px",
                  marginLeft: "1rem",
                }}
              >
                Continue with Google
              </Typography.Text>
            </Button>
          </Form.Item>
        </Form>
    </WrapperStyled>
  )
}
