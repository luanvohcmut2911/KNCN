import React from "react";
import ContentCard from "./ContentCard";
import { Layout, Breadcrumb } from "antd";
import styled from "styled-components";
import axios from "axios";

const ContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const { Content } = Layout;
const ContentStyled = styled(Content)`
  margin: 0 16px;
  max-height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
`;

export default function ContentList(props) {
  const [data, setData] = React.useState([]);
  const { type } = props;

  React.useEffect(() => {
    axios.get(process.env.REACT_APP_API + type).then((result) => {
      console.log(result.data);
      setData(result.data);
    });
  }, [type]);

  return (
    <Layout style={{ backgroundColor: "black" }}>
      <ContentStyled>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[
            {
              title: "Home",
            },
            {
              title: "route",
            },
          ]}
        />
        <ContentWrapperStyled>
          {data.slice(0, 8).map((item) => {
            return (
              <ContentCard
                key={item?.id}
                props={{
                  id: item?.id,
                  title: item?.name,
                  description: null,
                  image: item?.image?.medium,
                  isLiked: false,
                  isFollowed: false,
                  type: type,
                }}
              />
            );
          })}
        </ContentWrapperStyled>
      </ContentStyled>
    </Layout>
  );
}
