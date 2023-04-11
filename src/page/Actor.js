import React from "react";
import { Layout } from "antd";
import ActorDetail from "../components/ActorDetail";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

export default function Actor() {
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
      <ActorDetail
        props={{
          id: id,
          isLiked: true,
          isFollow: true,
        }}
      />
    </Layout>
  )
}
