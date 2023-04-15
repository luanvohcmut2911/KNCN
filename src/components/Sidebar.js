import React from "react";
import { Layout, Menu, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import {
  faUser,
  faFilm,
  faHouse,
  faCircleUser,
  faRightFromBracket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { AuthContext } from "../Context/AuthProvider";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import { handleSignOut } from "../authentication/signOut";
import { getUser } from "../firebase/method";

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
  // &:hover {
  //   cursor: pointer;
  // }
`;

export default function SideBar() {
  // const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = React.useState(false);
  let profileUser = JSON.parse(window.sessionStorage.getItem('user'));
  // console.log(profileUser);
  const [ username, setUsername ] = React.useState(null);
  React.useEffect(()=>{
    if(profileUser){
      getUser('users', {
        fieldName: 'token',
        operator: '==',
        compareValue: profileUser?.uid
      }).then((docSnap)=>{
        console.log(docSnap);
        docSnap.forEach((doc)=>{
          console.log(doc);
          setUsername(doc.data().username);
          window.sessionStorage.setItem('username', doc.data().username);
        })
        // setUsername(docSnap[0].data().username);
      })
    }
  }, [profileUser]);
  const handleSelect = (selector) => {
    if (selector.key === "account") {
      if (!profileUser) {
        navigate({
          pathname: '/registration',
          search: `${createSearchParams({
            ref: 'nv_home->registration'
          })}`
        });
      } else {
        // get user id
      }
    } 
    else if(selector.key==="logout"){
      handleSignOut().then((isSuccess)=>{
        if(isSuccess) {
          window.sessionStorage.clear();
          setUsername(null);
          navigate('/');
        }
      })
    }
    else {
      navigate({
        pathname: `/${selector.key}`,
        search: `${createSearchParams({
          ref: `nv_${selector.key}`
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
    !profileUser?{
      label: "Registration",
      key: "registration",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    }: null,
    profileUser
      ? {
          label: "Log Out",
          key: "logout",
          icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        }
      : null,
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
        <AvatarStyled icon={(!profileUser || !profileUser?.avatar) ? <UserOutlined />: <img src={profileUser?.avatar} alt='avatar' />}>
          
        </AvatarStyled>
        {
          collapsed ? "":
          <Typography
            style={{
              color: "white",
            }}
          >
            Hello, {!username ? 'GUEST' : username}
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
