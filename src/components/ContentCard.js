import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components';
import { faHeart as likedHeart, faStar as scoreStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as unLikedHeart, faStar as unScoreStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardStyled = styled(Card)`
  margin-bottom: 2rem;
  margin-right: 3rem;
`;

export default function ContentCard({props}) {
  const { Meta } = Card;
  const { id, image, title, isLiked, isFollowed } = props;
  const [ like, setLike ] = React.useState(isLiked);
  const [ follow, setFollow ] = React.useState(isFollowed);
  const handleToggleLike = ()=>{
    setLike(!like);
  }
  const handleToggleFollow = ()=>{
    setFollow(!follow);
  }
  return (
    <CardStyled
      hoverable
      key={id}
      style={{ width: 300, maxHeight: 500, overflowX: 'hidden', overflowY: 'hidden' }}
      cover={<img src={image} alt={title} />}
      onClick={()=>{

      }}
      actions={[
        like ? <FontAwesomeIcon icon={likedHeart} key="like" onClick={handleToggleLike} /> : <FontAwesomeIcon icon={unLikedHeart} key="like" onClick={handleToggleLike} />,
        follow ? <FontAwesomeIcon icon={scoreStar} key="score" onClick={handleToggleFollow} /> : <FontAwesomeIcon icon={unScoreStar} key="score" onClick={handleToggleFollow} />
      ]}
    >
      <Meta
        title={title}
        
      />
    </CardStyled>
  )
}
