import React from 'react'
import SideBar from '../components/Sidebar'
import { Layout } from 'antd';
import ContentList from '../components/ContentList';

export default function FilmList() {
  return (
    <Layout style={{height: '100vh'}}>
      <SideBar />
      <ContentList />
    </Layout>
  )
}
