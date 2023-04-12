import React from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import styled from 'styled-components';
import Typography from 'antd/es/typography/Typography';

const InputStyled = styled(Input)`
  width: 60%;
  height: 3rem;
  margin: 5rem 5rem 0 5rem;
  border-radius: 20px;
`

export default function Search() {
  return (
    <Layout.Content style={{
      backgroundColor: 'black',
      display: 'flex',
      // justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <InputStyled prefix={<SearchOutlined />} placeholder='Search something here' ></InputStyled>
      <Typography.Title style={{color: 'white'}}>EXPLORE YOUR INTERESTING FILMS AND ACTORS</Typography.Title>    
    </Layout.Content>
  )
}
