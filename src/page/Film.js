import React from "react";
// import SideBar from '../components/Sidebar'
import { Layout } from "antd";
import FilmDetail from "../components/FilmDetail";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

export default function Film() {
  const { id } = useParams();
  const [query] = useSearchParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (query.get("ref") === null) {
      navigate("/404-Not-Found");
    }
  }, [query, navigate]);
  return (
    <Layout style={{ height: "100vh" }}>
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
