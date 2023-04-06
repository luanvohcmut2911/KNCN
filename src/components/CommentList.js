import React from 'react'
import { Form, Input, Button, Avatar, List } from 'antd';
import { Comment } from '@ant-design/compatible';
import CommentCard from './CommentCard';
import moment from 'moment';

const { TextArea } = Input;

const initValue = {
  comments: [],
  submitting: false,
  value: ''
}


export default function CommentList() {
  const [state, setState] = React.useState(initValue);
  const handleChange = (e)=>{
    setState({
      ...state,
      value: e.target.value
    })
  };
  const handleSubmit = (e)=>{
    if(!state.value){
      return ;
    }

    setState({
      ...state,
      submitting: true
    })

    setTimeout(()=>{
      setState({
        ...state,
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...state.comments
        ],
        value: ''
      })
    },3000);
  }




  const Comments = ({ comments }) => (
    <List
      dataSource={comments}
      // header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <CommentCard {...props} />}
    />
  );



  return (
    <div>
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <div>
              <Form.Item>
                <TextArea onChange={handleChange} rows={4} value={state.value} />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" loading={state.submitting} onClick={handleSubmit} type="primary">
                  Add Comment
                </Button>
              </Form.Item>
            </div>
          }
        />
        {state.comments.length > 0 && <Comments comments={state.comments} />}
      </div>
  )
}
