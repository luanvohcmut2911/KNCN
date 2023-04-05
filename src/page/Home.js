import React from 'react'
import SideBar from '../components/Sidebar'
import { Layout } from 'antd';

export default function Home() {
  return (
    <Layout style={{height: '100vh'}}>
      <SideBar />
      <p>THIS IS HOMEPAGE</p>
    </Layout>
  )
}
