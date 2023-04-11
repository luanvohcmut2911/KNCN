import React from "react";
// import SideBar from '../components/Sidebar'
import { Layout } from "antd";
import ContentList from "../components/ContentList";

import { useSearchParams, useNavigate } from "react-router-dom";

export default function FilmList() {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (query.get("ref") === null) {
      navigate("/404-Not-Found");
    }
  }, [query, navigate]);

  return (
    <Layout style={{ height: "100vh" }}>
      {/* <SideBar /> */}
      <ContentList type="shows" />
    </Layout>
  );
}
