import React from "react";
import { Layout, Menu, Typography } from "antd";
import styled from "styled-components";
import {
  faUser,
  faFilm,
  faHouse,
  faCircleUser,
  faRightFromBracket,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const endPoint = [
  {
    label: "Home",
    key: "Home",
    icon: <FontAwesomeIcon icon={faHouse} />
  },
  {
    label: "Actor",
    key: "Actor",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  {
    label: "Film",
    key: "Film",
    icon: <FontAwesomeIcon icon={faFilm} />
  },
  {
    label: "Search",
    key: "Search",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />
  },
  {
    label: "Account",
    key: "Account",
    icon: <FontAwesomeIcon icon={faCircleUser} />
  },
  {
    label: "Log Out",
    key: "Logout",
    icon: <FontAwesomeIcon icon={faRightFromBracket} />
  }
];


const SideBarStyled = styled.div`
  
`

export default function SideBar() {
  const handleSelect = (selector)=>{

  }
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = React.useState(false);
  return <Sider
    collapsible
    collapsed={collapsed}
    onCollapse={(value)=>{
      setCollapsed(value);
    }}
  >
    <SideBarStyled>
      <Typography style={{color: 'white'}}> Review App </Typography>
    </SideBarStyled>
    <Menu
      theme="dark"
      defaultSelectedKeys={["Home"]}
      onSelect={handleSelect}
      mode="inline"
      items={endPoint}
    />
  </Sider>;
}
