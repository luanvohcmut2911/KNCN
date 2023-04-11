import React from "react";
import axios from "axios";
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
import parse from "html-react-parser";
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
  const { id, isLiked, isFollowed } = props;
  const [filmData, setFilmData] = React.useState(null);
  const [filmCastData, setFilmCastData] = React.useState(null);
  React.useEffect(() => {
    axios.get(process.env.REACT_APP_API + `shows/${id}`).then((result) => {
      setFilmData(result.data);
    });
    axios.get(process.env.REACT_APP_API + `shows/${id}/cast`).then((result) => {
      setFilmCastData(result.data);
    });
  }, [id]);
  // console.log(filmData)
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
        {filmData?.name}
      </Typography.Title>
      <Row>
        <Col
          span={6}
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
            cover={<img src={filmData?.image?.medium} alt={filmData?.name} />}
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
        </Col>
        <Col span={10}>
          <Typography style={{ color: "white", paddingRight: "1rem" }}>
            {filmData ? parse(filmData?.summary) : null}
          </Typography>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: "white",
              height: "400px",
              width: "400px",
            }}
          >
            <List
              size="small"
              bordered
              header={<Typography.Title level={3}>SHOW INFO</Typography.Title>}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <List.Item>
                <b>Network: </b>
                {filmData?.network?.country?.name}{" "}
              </List.Item>
              <List.Item>
                <b>Schedule: </b>
                {filmData?.schedule.days.join(" | ")} (~
                {filmData?.averageRuntime} mins){" "}
              </List.Item>
              <List.Item>
                <b>Status: </b>
                {filmData?.status}
              </List.Item>
              <List.Item>
                <b>Show Typed: </b>
                {filmData?.type}
              </List.Item>
              <List.Item>
                <b>Genre: </b>
                {filmData?.genres?.join(" | ")}
              </List.Item>
              <List.Item>
                <b>Official Site: </b>
                {filmData?.network?.officialSite || filmData?.officialSite}
              </List.Item>
              <List.Item>
                <b>Rating: </b>
                {filmData?.rating.average.toString()}
              </List.Item>
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
        {filmCastData?.map((actor) => {
          return (
            <ContentCard
              key={actor?.person.id}
              props={{
                id: actor?.person.id,
                title: actor?.person.name,
                description: actor?.character.name,
                image: actor?.character.image?.medium
                  ? actor?.character.image?.medium
                  : actor?.person.image?.medium,
                isLiked: true,
                isFollowed: false,
                type: 'actor'
              }}
            />
          );
        })}
      </div>
      <Typography.Title style={{ color: "white" }}>Comment</Typography.Title>
      <div>
        <CommentList />
      </div>
    </div>
  );
}
