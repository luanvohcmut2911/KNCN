import React from "react";
// import SideBar from '../components/Sidebar'
import { Layout } from "antd";
import FilmDetail from "../components/FilmDetail";
// import film from '../asset/filmSample.jpg';
import { useParams } from "react-router-dom";

export default function Film() {
  const { id } = useParams();
  return (
    <Layout style={{ height: "100vh" }}>
      {/* <SideBar /> */}
      <FilmDetail
        props={{
          id: id,
          isLiked: true,
          isFollow: true,
        }}
      />
    </Layout>
  );
}
