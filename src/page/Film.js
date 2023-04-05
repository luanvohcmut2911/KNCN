import React from 'react'
import SideBar from '../components/Sidebar'
import { Layout } from 'antd'
import FilmDetail from '../components/FilmDetail'
import film from '../asset/filmSample.jpg';

export default function Film() {
  
  return (
    <Layout style={{height: '100vh'}}>
      <SideBar />
      <FilmDetail props={{
        id: 1,
        title: "Placeholder Title",
        image: film,
        isLiked: true,
        isFollowed: true
      }} />
    </Layout>
  )
}
