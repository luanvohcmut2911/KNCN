import React from 'react'
import ContentCard from './ContentCard';
import { Layout, Breadcrumb } from 'antd';
import user from '../asset/user.png';
import styled from 'styled-components';

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


export default function ContentList() {
  return (
    <Layout style={{ backgroundColor: 'black' }}>
      <ContentStyled >
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
          <ContentCard props={{
            id: 1,
            title: "Placeholder title",
            image: user,
            isLiked: true,
            isFollowed: false
          }} />
          <ContentCard props={{
            id: 1,
            title: "Placeholder title",
            image: user,
            isLiked: true,
            isFollowed: true
          }} />
          <ContentCard props={{
            id: 1,
            title: "Placeholder title",
            image: user,
            isLiked: false,
            isFollowed: false
          }} />
          <ContentCard props={{
            id: 1,
            title: "Placeholder title",
            image: user,
            isLiked: false,
            isFollowed: true
          }} />
          <ContentCard props={{
            id: 1,
            title: "Placeholder title",
            image: user,
            isLiked: true,
            isFollowed: false
          }} />
          <ContentCard props={{
            id: 1,
            title: "Placeholder title",
            image: user,
            isLiked: true,
            isFollowed: false
          }} />
          <ContentCard props={{
            id: 1,
            title: "Placeholder title",
            image: user,
            isLiked: true,
            isFollowed: false
          }} />
          <ContentCard props={{
            id: 1,
            title: "Placeholder title",
            image: user,
            isLiked: true,
            isFollowed: false
          }} />
        </ContentWrapperStyled>
      </ContentStyled>
    </Layout>
  )
}
