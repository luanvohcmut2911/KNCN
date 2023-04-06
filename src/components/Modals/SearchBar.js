import React from 'react'
import { Modal, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

export default function SearchBar(props) {
  return (
    <Modal
      title="Search actors and films here"
      open={props.isOpen}
      footer={null}
      onCancel={()=>{
        props.setIsOpen(false);
      }}
    >
      <Input prefix={<SearchOutlined />} placeholder='Search something here' ></Input>
    </Modal>
  )
}
