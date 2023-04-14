import React from "react";
import { Form, Input, Button, Avatar, List } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Comment } from "@ant-design/compatible";
import CommentCard from "./CommentCard";
import moment from "moment";

const { TextArea } = Input;

const initValue = {
  comments: [],
  submitting: false,
  value: "",
};

export default function CommentList() {
  const [state, setState] = React.useState(initValue);
  const currentUser = JSON.parse(sessionStorage.getItem('user'));
  const username = (sessionStorage.getItem('username'));
  const handleChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    if(!currentUser){
      alert('you must sign in to comment');
      return ;
    }

    if (!state.value) {
      return;
    }

    setState({
      ...state,
      submitting: true,
    });

    setTimeout(() => {
      setState({
        ...state,
        comments: [
          {
            author: username,
            avatar:
              currentUser?.avatar ? currentUser?.avatar: <UserOutlined />,
            content: <p>{state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...state.comments,
        ],
        value: "",
      });
    }, 3000);
  };

  const Comments = ({ comments }) => (
    <List
      dataSource={comments}
      // header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={(props) => <CommentCard {...props} />}
    />
  );

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "whitesmoke",
      }}
    >
      <Comment
        avatar={
          <Avatar
            icon={currentUser?.avatar ? <img src={currentUser?.avatar} alt={username} />: <UserOutlined />}
            alt={username}
          />
        }
        content={
          <div>
            <Form.Item>
              <TextArea onChange={handleChange} rows={4} value={state.value} />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                loading={state.submitting}
                onClick={handleSubmit}
                type="primary"
              >
                Add Comment
              </Button>
            </Form.Item>
          </div>
        }
      />
      {state.comments.length > 0 && <Comments comments={state.comments} />}
    </div>
  );
}
