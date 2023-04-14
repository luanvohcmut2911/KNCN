import React from "react";
import { Card } from "antd";
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
import { createSearchParams, useNavigate } from "react-router-dom";
import UserDefault from "../asset/user.png";
import FilmDefault from "../asset/default.png";
import axios from "axios";

const CardStyled = styled(Card)`
  margin-bottom: 2rem;
  margin-right: 3rem;
`;

export default function ContentCard({ props }) {
  const navigate = useNavigate();
  const { Meta } = Card;
  const { id, image, title, isLiked, isFollowed, type, description } = props;
  const [like, setLike] = React.useState(isLiked);
  const [follow, setFollow] = React.useState(isFollowed);
  const [additionalData, setAdditionalData] = React.useState(null);
  const handleToggleLike = () => {
    setLike(!like);
  };
  const handleToggleFollow = () => {
    setFollow(!follow);
  };
  React.useEffect(()=>{
    if(!image && !title){ // handle for actor credit shows
      axios.get(process.env.REACT_APP_API + `${type}/${id}`)
        .then((result)=>{
          setAdditionalData(result.data);
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  }, [id, image, title, type]);
  return (
    <CardStyled
      hoverable
      key={id}
      style={{
        width: 250,
        maxHeight: 550,
        overflowX: "hidden",
        overflowY: "hidden",
      }}
      cover={
        <img
          src={image ? image : (additionalData?.image?.medium ? additionalData?.image?.medium: type === "shows" ? FilmDefault : UserDefault)}
          alt={title}
          onClick={() => {
            navigate({
              pathname: `/${type === "shows" ? "film" : "actor"}/${id}`,
              search: `?${createSearchParams({
                ref: `nv_content-card->detail`,
                id: id,
                title: title ? title: additionalData?.name
              })}`
            })
          }}
        />
      }
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
    >
      <Meta
        title={title ? title: additionalData?.name}
        description={description ? "As " + description : null}
      />
    </CardStyled>
  );
}
