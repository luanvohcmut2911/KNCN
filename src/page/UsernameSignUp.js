import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { addNewDocument } from "../firebase/method";

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const InputStyled = styled(Input)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

export default function UsernameSignUp() {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (query.get("ref") === null) {
      navigate("/404-Not-Found");
    }
  }, [query, navigate]);

  const onFinish = (value)=>{
    console.log({
      ...value,
      token: query.get("id_token")
    });
    addNewDocument('users', {
      ...value,
      token: query.get("id_token")
    }).then((docRef)=>{
      console.log('Data is wrote with id: ', docRef.id);
      navigate('/');
    })
  }
  return (
    <WrapperStyled>
      <Form
        name="normal-login"
        style={{
          width: "500px",
          backgroundColor: "white",
          padding: "1rem 2.5rem 1rem 2.5rem",
          borderRadius: "24px",
        }}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography.Title style={{ marginBottom: 0 }}>Create your username</Typography.Title>
        <Form.Item
          label={<Typography.Text strong>Username:</Typography.Text>}
          name="username"
          rules={[{ required: true, message: "Please enter your username! " }]}
        >
          <InputStyled
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Your username"
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
                Confirm
              </Typography.Text>
            </Button>
          </div>
        </Form.Item>
      </Form>
    </WrapperStyled>
  );
}
