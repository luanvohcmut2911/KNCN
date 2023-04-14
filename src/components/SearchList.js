import React from 'react'
import { Typography } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import ContentCard from './ContentCard';

const ContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function SearchList(props) {
  const { keyword } = props;
  const [castData, setCastData] = React.useState([]);
  const [filmData, setFilmData] = React.useState([]);
  console.log(keyword);
  React.useEffect(()=>{
    axios.get(process.env.REACT_APP_API + `search/shows?q=${keyword}`).then((result)=>{
      console.log(result.data);
      setFilmData(result.data);
    });
    axios.get(process.env.REACT_APP_API + `search/people?q=${keyword}`).then((result)=>{
      console.log(result.data);
      setCastData(result.data);
    });
  }, [keyword]);
  return (
    <div>
      {filmData.length!==0 && <Typography.Title style={{color: 'white'}}>FILM</Typography.Title>}
      <ContentWrapperStyled>
      {
        filmData.map((film)=>{
          const id = film?.show?.id;
          return <ContentCard props={{
            id: id,
            type: 'shows'
          }} />
        })
      }
      </ContentWrapperStyled>
      { filmData.length!==0 && <Typography.Title style={{color: 'white'}}>CAST</Typography.Title>}
      <ContentWrapperStyled>
      {
        castData.map((cast)=>{
          const id = cast?.person?.id;
          return <ContentCard props={{
            id: id,
            type: 'people'
          }} />
        })
      }
      </ContentWrapperStyled>
    </div>
  )
}
