import React from "react";
import ContentCard from "./ContentCard";
import { Layout, Breadcrumb, Pagination } from "antd";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";

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
  const [currentPage, setCurrentPage] = React.useState(1);
  const { type } = props;
  const [disappear, setDisappear] = React.useState(true);
  React.useEffect(() => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(process.env.REACT_APP_API + type).then((result) => {
      setData(result.data);
    });
  }, [type]);

  setTimeout(()=>{
    setDisappear(false);
  }, 3000);

  return (
    <Layout.Content style={{ backgroundColor: "black" }}>
      <Loading props={{
        disappear: disappear
      }} />
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
          {data.slice(((currentPage-1)*16), (currentPage*16)).map((item) => {
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
        <Pagination
          style={{
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}
          defaultCurrent={1}
          defaultPageSize={16}
          showSizeChanger={false}
          current={currentPage}
          onChange={(value)=>{
            setCurrentPage(value);
          }}
          total={data.length}
        />

      </ContentStyled>
    </Layout.Content>
  );
}
