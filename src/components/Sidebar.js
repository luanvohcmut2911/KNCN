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
import SearchBar from "./Modals/SearchBar";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";


const SideBarStyled = styled.div`
  
`

export default function SideBar() {
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const { Sider } = Layout;
  const [openModal, setOpenModal] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const handleSelect = (selector)=>{
    console.log(selector);
    if(selector.key==="search"){
      setOpenModal(true)
    }
    else{
      navigate(`/${selector.key}`);
    }
  };
  const endPoint = [
    {
      label: "Home",
      key: "home",
      icon: <FontAwesomeIcon icon={faHouse} />
    },
    {
      label: "Actor",
      key: "actors",
      icon: <FontAwesomeIcon icon={faUser} />
    },
    {
      label: "Film",
      key: "films",
      icon: <FontAwesomeIcon icon={faFilm} />
    },
    {
      label: "Search",
      key: "search",
      icon: <FontAwesomeIcon icon={faMagnifyingGlass} />
    },
    {
      label: "Account",
      key: "Account",
      icon: <FontAwesomeIcon icon={faCircleUser} />
    },
    user ? {
      label: "Log Out",
      key: "Logout",
      icon: <FontAwesomeIcon icon={faRightFromBracket} />
    } : null
  ];
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
      defaultSelectedKeys={["home"]}
      onSelect={handleSelect}
      mode="inline"
      items={endPoint}
    />
    <SearchBar isOpen={openModal} setIsOpen={setOpenModal} />
  </Sider>;
}
