import React from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

export default function Search() {
  return (
    <div>
      <Input prefix={<SearchOutlined />} placeholder='Search something here' ></Input>
    </div>
  )
}
