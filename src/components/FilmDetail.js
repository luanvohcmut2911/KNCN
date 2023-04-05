import React from 'react'
import { Row, Col, Card, Typography } from 'antd';
import styled from 'styled-components';
import { faHeart as likedHeart, faStar as scoreStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as unLikedHeart, faStar as unScoreStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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


const LiStyled = styled.li `
  background: white;
`;

export default function FilmDetail({props}) {
  const {id, image, title, isLiked, isFollowed} = props;

  const [ like, setLike ] = React.useState(isLiked);
  const [ follow, setFollow ] = React.useState(isFollowed);
  const handleToggleLike = ()=>{
    setLike(!like);
  }
  const handleToggleFollow = ()=>{
    setFollow(!follow);
  }
  // breakpoint: 640
  return (
    <div style={{
      backgroundColor: 'black',
      width: '100%', 
      padding: '2rem',
      overflowX: 'hidden'
      // display: 'flex',
      // flexDirection: 'row'
    }}>
      <Row>
        <Col span={16} style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <CardStyled
            key={id}
            style={{ width: 400, maxHeight: 700, overflowX: 'hidden', overflowY: 'hidden' }}
            cover={<img src={image} alt={title} />}
            actions={[
              like ? <FontAwesomeIcon icon={likedHeart} key="like" onClick={handleToggleLike} /> : <FontAwesomeIcon icon={unLikedHeart} key="like" onClick={handleToggleLike} />,
              follow ? <FontAwesomeIcon icon={scoreStar} key="score" onClick={handleToggleFollow} /> : <FontAwesomeIcon icon={unScoreStar} key="score" onClick={handleToggleFollow} />
            ]}
            bodyStyle={{display: 'none'}}
          />
          <div>
            <Typography.Title level={1} style={{color: 'white'}}>{title}</Typography.Title>
            <Typography style={{color: 'white'}}>Dignissimos similique et aliquam cum et. Consequatur ad dolore et ut et excepturi. Provident et nobis laborum possimus aut sed. Blanditiis quia enim natus.</Typography>
          </div>
        </Col>
        <Col span={8}>
          <div style={{backgroundColor: 'white'}}>
            <Typography.Title level={3}>SHOW INFO</Typography.Title>
            <ul>
              <LiStyled>Network</LiStyled>
              <LiStyled>Schedule</LiStyled>
              <LiStyled>Status</LiStyled>
              <LiStyled>Show Typed</LiStyled>
              <LiStyled>Genre</LiStyled>
              <LiStyled>Official Site</LiStyled>
              <LiStyled>Rating</LiStyled>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}
