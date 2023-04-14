import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import styled from "styled-components";
import Typography from "antd/es/typography/Typography";
import SearchList from "../components/SearchList";

const InputStyled = styled(Input)`
  width: 60%;
  height: 3rem;
  margin: 5rem 5rem 0 5rem;
  border-radius: 20px;
`;

// const ButtonStyled = styled(Button)`
//   width: 60%;
//   height: 3rem;
//   margin: 0 5rem 0 5rem;
//   border-radius: 20px;
// `;

export default function Search() {
  const [keyword, setKeyword] = React.useState("");

  return (
    <Layout.Content
      style={{
        backgroundColor: "black",
        width: "100%",
        padding: "2rem",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          // justifyContent: 'center',
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <InputStyled
          prefix={<SearchOutlined />}
          placeholder="Search something here"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        ></InputStyled>
        {/* <ButtonStyled
          type="primary"
          onClick={() => {
            console.log(keyword);
          }}
        >
          SEARCH
        </ButtonStyled> */}
        <Typography.Title style={{ color: "white" }}>
          EXPLORE YOUR INTERESTING FILMS AND ACTORS
        </Typography.Title>
      </div>
      <div>
        <SearchList keyword={keyword} />
      </div>
    </Layout.Content>
  );
}
