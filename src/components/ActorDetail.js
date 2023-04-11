import React from 'react'
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
// import parse from "html-react-parser";
import ContentCard from "./ContentCard";
import CommentList from "./CommentList";
import UserDefault from "../asset/user.png";

const CardStyled = styled(Card)`
  margin-bottom: 2rem;
  margin-right: 3rem;
  // .ant-card ul.ant-card-actions > li  {
  //   border: solid
  // }
`;

export default function ActorDetail({props}) {
  const {id, isLiked, isFollowed} = props;
  const [ actorData, setActorData ] = React.useState(null);
  const [ actorCreditData, setActorCreditData ] = React.useState(null);
  React.useEffect(()=>{
    axios.get(process.env.REACT_APP_API + `people/${id}`).then((result)=>{
      setActorData(result.data);
    });
    axios.get(process.env.REACT_APP_API + `people/${id}/castcredits`).then((result)=>{
      setActorCreditData(result.data);
    });
  }, [id]);
  console.log(actorData);
  console.log(actorCreditData)

  const [like, setLike] = React.useState(isLiked);
  const [follow, setFollow] = React.useState(isFollowed);
  const handleToggleLike = () => {
    setLike(!like);
  };
  const handleToggleFollow = () => {
    setFollow(!follow);
  };
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
        {actorData?.name}
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
            cover={<img src={actorData?.image?.medium ? actorData?.image?.medium: UserDefault} alt={actorData?.name} />}
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
            We don't have a biography for {actorData?.name} yet. Hang in there, or go ahead and contribute one.
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
                  <b>Nationality: </b>
                  {actorData?.country?.name ? actorData.country.name: 'Unknown'}
                </List.Item>
                <List.Item>
                  <b>Birthday: </b>
                  {actorData?.birthday ? actorData?.birthday : 'Unknown'}
                </List.Item>
                <List.Item>
                  <b>Age: </b>
                  {actorData?.birthday ? (2023 - actorData?.birthday.split('-')[0]).toString(): 'NaN'}
                </List.Item>
                {
                  actorData?.deathday ? <List.Item>
                  <b>Deathday: </b>
                  {actorData?.deathday}
                </List.Item>: null
                }
                <List.Item>
                  <b>Gender: </b>
                  {actorData?.gender}
                </List.Item>
              </List>
            </div>
        </Col>
      </Row>
      <Typography.Title style={{ color: "white" }}>Credits</Typography.Title>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {
          actorCreditData?.map((credit)=>{
            console.log(credit._links.show.href.split('/').slice(-1)[0]);
            const idFilm = credit?._links.show.href.split('/').slice(-1)[0];
            
            return (
              <ContentCard 
                key={idFilm}
                props={{
                  id: idFilm,//credit?.character.id,
                  type: 'shows'
                }}
              />
            )
          })
        }
      </div>
      <Typography.Title style={{ color: "white" }}>Comment</Typography.Title>
      <div>
        <CommentList />
      </div>
    </div>
  )
}
