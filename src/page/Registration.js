import React from "react";
import { Button, Row, Col, Typography } from "antd";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { handleGoogleLogin } from "../authentication/googleProvider";

const WrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

const ButtonStyled = styled(Button)`
  display: block;
  width: 15rem;
`;

export default function Registration() {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (query.get("ref") === null) {
      navigate("/404-Not-Found");
    }
  }, [query, navigate]);
  return (
    <WrapperStyled>
      <Row>
        {/* <Col span={2}></Col> */}
        <Col
          span={12}
          style={{
            height:'100%',
            width: '100%',
            display: "flex",
            flexDirection: "column",
            // justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography.Title level={2}>Sign in</Typography.Title>
          <div>
            <ButtonStyled onClick={()=>{
              navigate({
                pathname: "/signin",
                search: `${createSearchParams({
                  ref: 'nv_registration->signin'
                })}`
              });
            }}> Sign in with Review App </ButtonStyled>
            <ButtonStyled onClick={()=>{
                handleGoogleLogin().then((res)=>{
                  if(res.isVerified){
                    if(res.isNewUser){
                      navigate({
                        pathname: '/create-new-user',
                        search: `${createSearchParams({
                          ref: 'nv_create_username',
                          id_token: JSON.parse(window.sessionStorage.getItem('user')).uid
                        })}`
                      })
                    }
                    else navigate({
                      pathname: '/',
                      search: `${createSearchParams({
                        ref: 'nv_home'
                      })}`
                    })
                  }
                });
              }}> Sign in with Google </ButtonStyled>
          </div>
          <div
            style={{
              width: "15rem",
              height: "20px",
              borderBottom: "1px solid black",
              textAlign: "center",
              clear: "right",
              paddingTop: "1rem",
              marginBottom: "1rem",
              padding: 0
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
          <div>
            <ButtonStyled type="primary" onClick={()=>{
              navigate({
                pathname: "/signup",
                search: `${createSearchParams({
                  ref: 'nv_registration->signup'
                })}`
              });
            }}>Create New Account</ButtonStyled>
          </div>
        </Col>
        <Col span={1} style={{
          borderLeft: '1px solid black'
        }}></Col>
        <Col span={11} >
          <Typography.Title level={2}>Benefits of your free Review App account</Typography.Title>
          <Typography.Title level={3}>Personalized Recommendations</Typography.Title>
          <Typography>Discover shows you'll love.</Typography>
          <Typography.Title level={3}>Your Ratings</Typography.Title>
          <Typography>Rate and remember everything you've seen.</Typography>
          <Typography.Title level={3}>Your Watchlist</Typography.Title>
          <Typography>Track everything you want to watch and receive e-mail when movies open in theaters.</Typography>  
        </Col>
      </Row>
    </WrapperStyled>
  );
}
