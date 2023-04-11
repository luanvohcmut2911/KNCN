import React from "react";
import { Layout, Menu, Typography, Avatar, Popover, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import {
  faUser,
  faFilm,
  faHouse,
  // faCircleUser,
  // faRightFromBracket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";

const SideBarStyled = styled.div``;

// const TextStyled = styled.div`
//   font-size: 20px;
//   &:hover {
//     background-color: grey;
//     cursor: pointer;
//   }
// `;

const AvatarStyled = styled(Avatar)`
  background-color: white;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

export default function SideBar() {
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = React.useState(false);
  const handleSelect = (selector) => {
    if (selector.key === "account") {
      if (!user) {
        navigate({
          pathname: '/registration',
          search: `${createSearchParams({
            ref: 'nv_home->registration'
          })}`
        });
      } else {
        // get user id
      }
    } else {
      navigate({
        pathname: `/${selector.key}`,
        search: `${createSearchParams({
          ref: `nv_home->${selector.key}`
        })}`
      });
    }
  };
  const endPoint = [
    {
      label: "Home",
      key: "home",
      icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
      label: "Actor",
      key: "actor",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      label: "Film",
      key: "film",
      icon: <FontAwesomeIcon icon={faFilm} />,
    },
    {
      label: "Search",
      key: "search",
      icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    },
    // {
    //   label: "Account",
    //   key: "account",
    //   icon: <FontAwesomeIcon icon={faCircleUser} />,
    // },
    // user
    //   ? {
    //       label: "Log Out",
    //       key: "Logout",
    //       icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    //     }
    //   : null,
  ];
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => {
        setCollapsed(value);
      }}
    >
      <SideBarStyled>
        <Typography style={{ color: "white" }}> Review App </Typography>
      </SideBarStyled>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Popover
          content={
            <div
              style={
                {
                  // display: 'flex'
                }
              }
            >
              <Button
                type="default"
                onClick={() => {
                  navigate({
                    pathname: "/signin",
                    search: `${createSearchParams({
                      ref: 'nv_home->signin'
                    })}`
                  });
                }}
              >
                SIGN IN
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  navigate({
                    pathname: "/signup",
                    search: `${createSearchParams({
                      ref: 'nv_home->signup'
                    })}`
                  });
                }}
              >
                Create new account
              </Button>
            </div>
          }
          trigger="hover"
          onClick={() => {
            navigate({
              pathname: "/registration",
              search: `${createSearchParams({
                ref: 'nv_home->registration'
              })}`
            });
          }}
        >
          <AvatarStyled>
            <UserOutlined />
          </AvatarStyled>
        </Popover>
        {
          collapsed ? "":
          <Typography
            style={{
              color: "white",
            }}
          >
            Hello, GUEST
          </Typography>
        }
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["home"]}
        selectedKeys={[
          location.pathname.split("/")[1] === ""
            ? "home"
            : location.pathname.split("/")[1],
        ]}
        onSelect={handleSelect}
        mode="inline"
        items={endPoint}
      />
    </Sider>
  );
}
