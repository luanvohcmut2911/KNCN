import React from "react";
import { Row, Col, Card, Typography, List } from "antd";
import styled from "styled-components";
import {
  faHeart as likedHeart,
  faStar as scoreStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as unLikedHeart,
  faStar as unScoreStar,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import film from "../asset/filmSample.jpg";
import ContentCard from "./ContentCard";
import CommentList from "./CommentList";

const CardStyled = styled(Card)`
  margin-bottom: 2rem;
  margin-right: 3rem;
  // .ant-card ul.ant-card-actions > li  {
  //   border: solid
  // }
`;

// const TypographyTitleStyled = styled(Typography.Title)`
//   color: white;
// `


export default function FilmDetail({ props }) {
  const { id, image, title, isLiked, isFollowed } = props;

  const [like, setLike] = React.useState(isLiked);
  const [follow, setFollow] = React.useState(isFollowed);
  const handleToggleLike = () => {
    setLike(!like);
  };
  const handleToggleFollow = () => {
    setFollow(!follow);
  };
  // breakpoint: 640
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        padding: "2rem",
        overflowX: "hidden",
        // display: 'flex',
        // flexDirection: 'row'
      }}
    >
      <Typography.Title level={1} style={{ color: "white" }}>
        {title}
      </Typography.Title>
      <Row>
        <Col
          span={16}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <CardStyled
            key={id}
            style={{
              width: 400,
              maxHeight: 600,
              overflowX: "hidden",
              overflowY: "hidden",
            }}
            cover={<img src={image} alt={title} />}
            actions={[
              like ? (
                <FontAwesomeIcon
                  icon={likedHeart}
                  key="like"
                  onClick={handleToggleLike}
                />
              ) : (
                <FontAwesomeIcon
                  icon={unLikedHeart}
                  key="like"
                  onClick={handleToggleLike}
                />
              ),
              follow ? (
                <FontAwesomeIcon
                  icon={scoreStar}
                  key="score"
                  onClick={handleToggleFollow}
                />
              ) : (
                <FontAwesomeIcon
                  icon={unScoreStar}
                  key="score"
                  onClick={handleToggleFollow}
                />
              ),
            ]}
            bodyStyle={{ display: "none" }}
          />
          <div>
            <Typography style={{ color: "white" }}>
              Dignissimos similique et aliquam cum et. Consequatur ad dolore et
              ut et excepturi. Provident et nobis laborum possimus aut sed.
              Blanditiis quia enim natus.
            </Typography>
          </div>
        </Col>
        <Col span={8}>
          <div style={{ 
            backgroundColor: "white",
            height: '400px',
            width:'400px',
          }}>
            <List
              size="small"
              bordered
              header={<Typography.Title level={3}>SHOW INFO</Typography.Title>}
              style={{
                width: '100%',
                height: '100%'
              }}
            >
              <List.Item>Network</List.Item>
              <List.Item>Schedule</List.Item>
              <List.Item>Status</List.Item>
              <List.Item>Show Typed</List.Item>
              <List.Item>Genre</List.Item>
              <List.Item>Official Site</List.Item>
              <List.Item>Rating</List.Item>
            </List>
          </div>
        </Col>
      </Row>
      <Typography.Title style={{ color: "white" }}>Cast</Typography.Title>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <ContentCard
          props={{
            id: 1,
            title: "Placeholder title",
            image: film,
            isLiked: true,
            isFollowed: false,
          }}
        />
        <ContentCard
          props={{
            id: 1,
            title: "Placeholder title",
            image: film,
            isLiked: true,
            isFollowed: false,
          }}
        />
        <ContentCard
          props={{
            id: 1,
            title: "Placeholder title",
            image: film,
            isLiked: true,
            isFollowed: false,
          }}
        />
        <ContentCard
          props={{
            id: 1,
            title: "Placeholder title",
            image: film,
            isLiked: true,
            isFollowed: false,
          }}
        />
        <ContentCard
          props={{
            id: 1,
            title: "Placeholder title",
            image: film,
            isLiked: true,
            isFollowed: false,
          }}
        />
        <ContentCard
          props={{
            id: 1,
            title: "Placeholder title",
            image: film,
            isLiked: true,
            isFollowed: false,
          }}
        />
        <ContentCard
          props={{
            id: 1,
            title: "Placeholder title",
            image: film,
            isLiked: true,
            isFollowed: false,
          }}
        />
        <ContentCard
          props={{
            id: 1,
            title: "Placeholder title",
            image: film,
            isLiked: true,
            isFollowed: false,
          }}
        />
        <ContentCard
          props={{
            id: 1,
            title: "Placeholder title",
            image: film,
            isLiked: true,
            isFollowed: false,
          }}
        />
      </div>
      <Typography.Title style={{ color: "white" }}>Comment</Typography.Title>
      <div>
        <CommentList />
      </div>
    </div>
  );
}
